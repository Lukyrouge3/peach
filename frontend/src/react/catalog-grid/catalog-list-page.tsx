"use client";

import { useEffect, useLayoutEffect, useMemo, useState, type CSSProperties, type MouseEvent } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import {
  createColumnHelper, flexRender, rowPaginationFeature, rowSelectionFeature, rowSortingFeature,
  columnVisibilityFeature, tableFeatures, useTable, type RowSelectionState, type SortingState,
} from '@tanstack/react-table';
import { cardArtwork, relayoutCovers } from '@peach/card-art';
import { fmtDur, fmtSize, requestErrorMessage } from '@peach/legacy/core';
import { Checkbox } from '@/components/base/checkbox/checkbox';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@/components/base/table/table';
import { ChevronSortDown } from '@/components/foundations/icons/chevrons';
import { apiGet } from '../../api';
import { ArtSlot } from '../components/art-slot';
import { useLibraryTints } from '../components/library-tint';
import { catalogListSkeletonCellHtml } from '../../catalog-content-skeleton';
import { identityParts } from '../components/media-card';
import { useEntityNames } from '../use-entity-names';
import { SourceMark } from '../settings/section';
import { DataTableFrame } from '../components/data-table-frame';
import { DataTableFooter, DataTableSort } from '../components/table-controls';
import { RetryNote } from '../components/grid-reveal';
import { LibraryCompletionPrompt, missingPreviewIds } from '../library-processing/library-completion';
import { completionRowRemembered, rememberCompletionRow } from '../library-processing/completion-row';
import { catalogParams } from './catalog-grid';
import type { CatalogGridProps, MediaItem, MediaPage } from './types';
import { useCatalogTablePreferences } from './catalog-column-widths';
import { CatalogRating, catalogTableDate } from './catalog-table-controls';
import { TableColumnControls, TableColumnResizer } from '../components/table-column-controls';
import { TableSelectionHeader } from '../components/table-selection-header';
import './catalog-list.css';

const features = tableFeatures({ rowSortingFeature, rowSelectionFeature, rowPaginationFeature, columnVisibilityFeature });
const sortOptions = [
  { id: 'name', label: 'Name' }, { id: 'dur', label: 'Duration' }, { id: 'size', label: 'Size' },
  { id: 'new', label: 'Date added' }, { id: 'release', label: 'Release date' },
  { id: 'rating', label: 'Rating' }, { id: 'o', label: 'Climax count' },
  { id: 'plays', label: 'Play count' }, { id: 'played', label: 'Watch time' },
];
interface ListState { sorting: SortingState; pagination: { pageIndex: number; pageSize: number } }
// 详情返回保留同一筛选范围内的页码与列排序。
const positions = new Map<string, ListState>();

/** 服务端对完整筛选结果排序、分页；选择集及批量栏归现有馆藏控制器。 */
export function CatalogListPage(props: CatalogGridProps) {
  const preferences = useCatalogTablePreferences();
  const tints = useLibraryTints();
  const params = catalogParams(props.filters || {}, false);
  const [scope] = useState(() => {
    const position = new URLSearchParams(params);
    if (!new URLSearchParams(location.search).has('seed')) position.delete('seed');
    return `${props.mode}:${props.listScope || props.entityKey || ''}:${position}`;
  });
  const [state, setState] = useState<ListState>(() => positions.get(scope) || {
    sorting: [], pagination: { pageIndex: 0, pageSize: 20 },
  });
  const { sorting, pagination } = state;
  useEffect(() => { positions.set(scope, state) }, [scope, state]);
  const offset = pagination.pageIndex * pagination.pageSize;
  const sort = sorting[0];
  const result = useQuery({
    queryKey: ['catalog-grid', 'table', scope, params, props.revision, pagination, sorting],
    placeholderData: keepPreviousData,
    queryFn: async ({ signal }): Promise<MediaPage> => {
      const options = { limit: pagination.pageSize, sort: sort?.id, dir: sort ? sort.desc ? 'desc' : 'asc' : undefined };
      if (props.mode === 'entity') return props.fetchPage?.(offset, signal, options) || { items: [], total: 0 };
      const query = new URLSearchParams(params);
      query.set('offset', String(offset));
      query.set('limit', String(options.limit));
      query.delete('count');
      if (options.sort) query.set('sort', options.sort);
      if (options.dir) query.set('dir', options.dir);
      return apiGet<MediaPage>(`/api/items?${query}`, signal);
    },
  });
  const items = result.data?.items || [];
  const total = Number(result.data?.total || 0);
  const missing = props.filters?.state === 'trash' ? [] : missingPreviewIds(items, props.layout.javImage);
  const [completionReserved] = useState(completionRowRemembered);
  useEffect(() => { if (result.data && !result.isPlaceholderData) rememberCompletionRow(missing.length > 0) },
    [result.data, result.isPlaceholderData, missing.length]);
  useLayoutEffect(() => {
    if (result.isFetching) return;
    let live = true;
    queueMicrotask(() => {
      if (!live) return;
      props.settled?.(props.revision);
      if (result.data) props.onCount?.(total, items.length);
      else props.onCountFailed?.();
    });
    return () => { live = false };
  }, [result.data, result.isFetching, props.revision]);
  useEffect(() => {
    if (!result.data || result.isPlaceholderData || offset < total || pagination.pageIndex === 0) return;
    setState(now => ({ ...now, pagination: { ...now.pagination, pageIndex: Math.max(0, Math.ceil(total / now.pagination.pageSize) - 1) } }));
  }, [result.data, result.isPlaceholderData, offset, total, pagination.pageIndex]);
  const rowSelection: RowSelectionState = props.selectMode ? Object.fromEntries([...props.selected].map(id => [String(id), true])) : {};
  const columns = useMemo(() => {
    const helper = createColumnHelper<typeof features, MediaItem>();
    return helper.columns([
      helper.display({ id: 'select', header: ({ table }) => <TableSelectionHeader table={table} label="Select all titles on this page" disabled={result.isPlaceholderData} />,
      cell: ({ row }) => <Checkbox slot={null} aria-label={`Select ${props.helpers.displayName(row.original, row.original.name || '')}`}
        isDisabled={result.isPlaceholderData}
        isSelected={row.getIsSelected()} onChange={on => row.toggleSelected(on)} /> }),
      helper.accessor(item => item.name || '', { id: 'name', header: 'Works', enableSorting: true,
        cell: ({ row }) => <ListIdentity item={row.original} props={props} disabled={result.isPlaceholderData} /> }),
      /* 标签与卡片同一套：关注条目的标签不可点，其余点一下按这个标签筛选。 */
      helper.display({ id: 'tags', header: 'Tags', cell: ({ row }) => {
        const item = row.original;
        const tags = item.follow_tags || item.tags || [];
        return tags.length
          ? <div data-media-tags="" data-list-tags="" onClick={event => {
            const tag = (event.target as HTMLElement).closest<HTMLElement>('[data-tag]');
            if (tag && !props.selectMode) props.actions.toggleTag(tag.dataset.tag || '');
          }}>
            {tags.map(tag => <button key={tag} type="button" data-media-tag="" disabled={!!item.follow_item_id}
              data-tag={item.follow_item_id ? undefined : tag}>{props.helpers.tagLabel(tag)}</button>)}
          </div>
          : '—';
      } }),
      helper.display({ id: 'code', header: 'Code', cell: ({ row }) => row.original.code || '—' }),
      helper.accessor(item => item.duration, { id: 'dur', header: 'Duration', enableSorting: true,
        cell: ({ row }) => fmtDur(row.original.duration) || '—' }),
      helper.display({ id: 'resolution', header: 'Resolution', cell: ({ row }) => {
        const { width, height } = row.original;
        return width && height ? `${width} × ${height}` : '—';
      } }),
      helper.accessor(item => item.size, { id: 'size', header: 'Size', enableSorting: true,
        cell: ({ row }) => row.original.size == null ? '—' : fmtSize(row.original.size) }),
      helper.accessor(item => item.rating, { id: 'rating', header: 'Rating', enableSorting: true,
        cell: ({ row }) => <CatalogRating item={row.original} actions={props.actions} /> }),
      helper.accessor(item => item.play_count, { id: 'plays', header: 'Play count', enableSorting: true,
        cell: ({ row }) => Number(row.original.play_count || 0).toLocaleString() }),
      helper.accessor(item => item.o_count, { id: 'o', header: 'Climax count', enableSorting: true,
        cell: ({ row }) => Number(row.original.o_count || 0).toLocaleString() }),
      helper.accessor(item => item.last_played, { id: 'played', header: 'Watch time', enableSorting: true,
        cell: ({ row }) => catalogTableDate(row.original.last_played) }),
      helper.accessor(item => item.first_seen, { id: 'new', header: 'Date added', enableSorting: true,
        cell: ({ row }) => catalogTableDate(row.original.first_seen) }),
      helper.accessor(item => item.release_date, { id: 'release', header: 'Release date', enableSorting: true,
        cell: ({ row }) => row.original.release_date || '—' }),
    ]);
  }, [props.helpers, props.actions, props.layout, props.selectMode, result.isPlaceholderData]);
  const table = useTable({
    features, columns, data: items, getRowId: item => String(item.id),
    manualSorting: true, manualPagination: true, rowCount: total,
    state: { sorting, pagination, rowSelection, columnVisibility: { ...preferences.visibility, select: props.selectMode } },
    onColumnVisibilityChange: preferences.change,
    onSortingChange: updater => setState(now => ({
      sorting: typeof updater === 'function' ? updater(now.sorting) : updater,
      pagination: { ...now.pagination, pageIndex: 0 },
    })),
    onPaginationChange: updater => setState(now => ({ ...now,
      pagination: typeof updater === 'function' ? updater(now.pagination) : updater })),
    enableRowSelection: true,
    onRowSelectionChange: updater => {
      const next = typeof updater === 'function' ? updater(rowSelection) : updater;
      for (const item of items) {
        if (Boolean(next[String(item.id)]) !== props.selected.has(item.id)) props.actions.toggleSelection(item.id, false);
      }
    },
  });
  return <div data-catalog-view-mode="list" data-catalog-table="" aria-busy={result.isFetching || undefined} className="flex min-w-0 flex-col gap-4">
    <div className="flex flex-wrap justify-end gap-2" role="toolbar" aria-label="Title list toolbar">
      <div data-toolbar-actions="">
      <TableColumnControls preferences={preferences} />
      <DataTableSort label="Title list" options={sortOptions} sorting={sorting}
        onChange={next => table.setSorting(next)} />
      </div>
    </div>
    {result.isPending
      ? completionReserved ? <i data-completion-skeleton="" aria-hidden="true" className="skeleton-sheen" /> : null
      : <LibraryCompletionPrompt className="" assetIds={missing} />}
    {result.isError ? <RetryNote message={requestErrorMessage(result.error)} onRetry={() => void result.refetch()} /> : null}
    <DataTableFrame follow preferences={preferences} onRowClick={props.selectMode ? id => { if (!result.isPlaceholderData) props.actions.toggleSelection(Number(id), false) } : undefined}>
      <Table aria-label="Title list" size="sm"
        sortDescriptor={sort ? { column: sort.id, direction: sort.desc ? 'descending' : 'ascending' } : undefined}
        onSortChange={next => table.setSorting([{ id: String(next.column), desc: next.direction === 'descending' }])}>
        <TableHeader>{table.getHeaderGroups()[0]!.headers.map(header =>
          <TableColumn key={header.id} id={header.id} isRowHeader={header.id === 'name'} allowsSorting={header.column.getCanSort()}
            {...preferences.columnProps(header.id)}>
            {({ sortDirection }) => <>
            <span className="flex items-center gap-0.5">
              {flexRender(header.column.columnDef.header, header.getContext())}
              {header.column.getCanSort() ? <span data-sort-indicator data-direction={sortDirection || undefined}><ChevronSortDown /></span> : null}
            </span>
            <TableColumnResizer preferences={preferences} id={header.id} />
            </>}
          </TableColumn>)}
          <TableColumn id="remaining-space" aria-label="Row blank area" data-table-space="" width={preferences.spaceWidth} minWidth={0} />
        </TableHeader>
        <TableBody renderEmptyState={() => result.isError ? 'Title list not obtained' : 'No matching titles'}>
          {/* 等数据时在真实表格里画骨架行，格子内容与壳的首屏骨架同一份，接管时不换结构。 */}
          {result.isPending ? Array.from({ length: 6 }, (_, index) => <TableRow key={`skeleton-${index}`} id={`skeleton-${index}`}
            data-list-skeleton-row="" aria-hidden="true">
            {table.getHeaderGroups()[0]!.headers.map(header => <TableCell key={header.id}>
              <span dangerouslySetInnerHTML={{ __html: catalogListSkeletonCellHtml(header.id) }} />
            </TableCell>)}
            <TableCell data-table-space="" />
          </TableRow>) : table.getRowModel().rows.map(row => <TableRow key={row.id} id={row.id} data-catalog-row="" data-id={row.original.id}
            data-library={tints.get(row.original.library_id || '')?.color ? row.original.library_id : undefined}
            data-board-selected={row.getIsSelected() || undefined}>
            {row.getVisibleCells().map(cell => <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>)}
            <TableCell data-table-space="" />
          </TableRow>)}
        </TableBody>
      </Table>
    </DataTableFrame>
    {result.data ? <DataTableFooter label="Title list" total={total} pagination={pagination}
      onChange={next => table.setPagination(next)} unit="titles" pageUnit="titles" /> : null}
  </div>;
}

function ListIdentity({ item, props, disabled }: { item: MediaItem; props: CatalogGridProps; disabled: boolean }) {
  const artwork = cardArtwork(item, 'small', false, props.layout.javImage);
  /* 与卡片同一判据：按画幅筛时组里只剩这一卷或这一个版本，就按单个文件写。 */
  const parts = Number(item.part_group?.count) > 1 ? item.part_group || null : null;
  const editions = Number(item.edition_group?.count) > 1 ? item.edition_group || null : null;
  const rawName = parts?.title || item.name || '';
  const name = props.helpers.displayName(item, rawName).trim() || 'Untitled title';
  const titleHtml = props.helpers.titleHtml(item, rawName).trim() || 'Untitled title';
  useEntityNames();
  const { avatar, who } = identityParts(item);
  const watched = !parts && Number(item.play_seconds) > 0 && Number(item.duration) > 0
    ? Math.min(Number(item.play_seconds) / Number(item.duration), 1) : 0;
  const tints = useLibraryTints({ names: true });
  const tint = item.library_id ? tints.get(item.library_id) : undefined;
  const flaggedBy = [Number(item.liked) > 0 ? 'Like' : '', Number(item.o_count) > 0 ? 'Has climax records' : ''].filter(Boolean);
  const glyph = (name: string) => <svg viewBox="0 0 24 24" aria-hidden="true"><use href={`#i-${name}`} /></svg>;
  const open = (event: MouseEvent<HTMLElement>) => {
    if (props.selectMode) {
      props.actions.toggleSelection(item.id, event.shiftKey); return;
    }
    const opener = props.filters?.state === 'trash' ? props.actions.openResource : props.actions.open;
    opener(item, event.currentTarget);
  };
  /* 头像与署名和卡片同一套：点头像或人名打开人物、厂牌页，没有署名的那批打开「未归属」。 */
  const openOwner = (event: MouseEvent<HTMLElement>) => {
    if (props.selectMode) return;
    const target = event.target as HTMLElement;
    const entity = target.closest<HTMLElement>('[data-entity-kind]');
    if (entity) { props.actions.openEntity(entity.dataset.entityKind || '', entity.dataset.entityName || ''); return }
    if (target.closest('[data-open-unowned]')) props.actions.openUnowned();
  };
  return <div data-list-identity="" onClick={openOwner}>
    <button type="button" data-list-open="" disabled={disabled} tabIndex={-1} aria-hidden="true" onClick={open}>
      <span data-list-picture="">{artwork.html
        ? <ArtSlot artwork={artwork} relayout={root => relayoutCovers(root, 'small')} /> : <span>No preview</span>}
        {parts && !editions ? <span data-media-group="">{`${Number(parts.count).toLocaleString()} parts`}</span> : null}
        {editions ? <span data-media-group="" title={editions.editions.join(' · ')}>{`${Number(editions.count).toLocaleString()} versions`}</span> : null}
        {watched > 0
          ? <span data-media-progress="" role="progressbar" aria-label="Watch progress" aria-valuemin={0} aria-valuemax={100}
            aria-valuenow={Math.round(watched * 100)}>
            <i style={{ '--media-fill': `${(watched * 100).toFixed(1)}%` } as CSSProperties} />
          </span>
          : null}
        {item.watch_later || flaggedBy.length
          ? <span data-media-status="">
            {item.watch_later ? <span data-status="later" title="Watch later" aria-label="Watch later">{glyph('bookmark')}</span> : null}
            {flaggedBy.length ? <span data-status="flagged" title={`Marked: ${flaggedBy.join(', ')}`}
              aria-label={`Marked: ${flaggedBy.join(', ')}`}>{glyph('heart')}</span> : null}
          </span>
          : null}</span>
    </button>
    {avatar}
    <span data-list-text="">
      <button type="button" data-list-name="" disabled={disabled} title={name} aria-label={`Open ${name}`} onClick={open}
        dangerouslySetInnerHTML={{ __html: titleHtml }} />
      <span data-list-byline="">
        {tint?.name ? <span data-list-library="" title={`Media library: ${tint.name}`}>
          <SourceMark mark={tint.icon} />{tint.name}
        </span> : null}
        {who}
      </span>
    </span>
  </div>;
}

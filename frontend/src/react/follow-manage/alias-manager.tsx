/* 创作者别名：同一个人在几个站上用几个名字，合并之后按一位创作者归组。
 *
 * 待合并是带依据的候选，合并永远由人点：服务端不自行升级，页面也不替他勾。 */
import { useMemo, useRef, useState } from 'react';
import { RiCloseLine, RiUserLine } from '@remixicon/react';
import { useMutation } from '@tanstack/react-query';
import {
  createColumnHelper, createPaginatedRowModel, createSortedRowModel, flexRender,
  rowPaginationFeature, rowSelectionFeature, rowSortingFeature, columnVisibilityFeature, tableFeatures, useTable,
  type RowSelectionState, type SortingState,
} from '@tanstack/react-table';
import { confirmModal } from '@peach/legacy/ui';

import { Button } from '@/components/base/buttons/button';
import { Checkbox } from '@/components/base/checkbox/checkbox';
import { Input } from '@/components/base/input/input';
import {
  Table, TableBody, TableCell, TableColumn, TableHeader, TableRow,
} from '@/components/base/table/table';

import { errorMessage } from '../../api';
import { cardClass } from '../components/card';
import { DataTableFrame } from '../components/data-table-frame';
import { useTablePreferences } from '../components/table-column-preferences';
import { TableColumnControls, TableColumnResizer } from '../components/table-column-controls';
import { DataTableFooter, DataTableSort } from '../components/table-controls';
import { SelectionDock } from '../components/selection-dock';
import { useTableSelection } from '../components/use-table-selection';
import { ChevronSortDown } from '@/components/foundations/icons/chevrons';
import { EmptyState, EmptyFocusButton } from '../components/empty-state';
import { ErrorText, FieldLabel } from '../settings/section';
import { busyProps } from '../settings/use-action';
import {
  addAlias, reloadFollowManage, removeAlias,
  type AliasGroup, type AliasSuggestion, type FollowSource,
} from './follow-manage';
import { AuthorAvatar } from './source-view';
import { AliasRenameDialog } from './alias-rename-dialog';
import { TableSelectionHeader } from '../components/table-selection-header';

const REMOVE_BODY = (alias: string) => `The alias “${alias}” will be removed and its sources go back to a separate creator group.`;
const suggestionFeatures = tableFeatures({ rowSelectionFeature, rowSortingFeature, rowPaginationFeature, columnVisibilityFeature,
  sortedRowModel: createSortedRowModel(), paginatedRowModel: createPaginatedRowModel() });
const savedFeatures = suggestionFeatures;
const selectColumn = { id: 'select', label: 'Select', width: 48, min: 48, max: 48, required: true };
const identityColumn = { id: 'canonical', label: 'Unified name', width: 280, min: 240, required: true, flex: true };
const suggestionPreferences = [selectColumn, identityColumn, { id: 'alias', label: 'Platform aliases', width: 240 },
  { id: 'evidence', label: 'Basis', width: 320 }, { id: 'actions', label: 'Actions', width: 112 }];
const savedPreferences = [selectColumn, identityColumn, { id: 'aliases', label: 'Platform aliases', width: 400 }, { id: 'actions', label: 'Actions', width: 184, min: 168 }];

export interface AliasManagerProps {
  groups: AliasGroup[];
  suggestions: AliasSuggestion[];
  sources?: FollowSource[];
  readOnly: boolean;
  toast(message: string): void;
}

/** 一条待合并的身份：一个别名只可能归进一个规范名，所以用别名本身当键。 */
const suggestionKey = (item: AliasSuggestion) => item.alias;

function authorSources(sources: FollowSource[], name: string, canonicalKey?: string) {
  /* 建过档的作者键是 `entity:<id>`，别名表上记的仍是名字键：按名字键找不到就按名字认。 */
  const expected = canonicalKey ? `name:${canonicalKey}` : '';
  const anchor = (expected && sources.find((source) => source.author_key === expected))
    || sources.find((source) => source.author_name === name || source.entity_name === name);
  return anchor ? sources.filter((source) => source.author_key === anchor.author_key) : [];
}

function AuthorIdentity({ sources, name, canonicalKey }: {
  sources: FollowSource[]; name: string; canonicalKey?: string;
}) {
  return (
    <span className="flex items-center gap-2">
      <AuthorAvatar group={authorSources(sources, name, canonicalKey)} name={name} />
      <b className="text-body-medium">{name}</b>
    </span>
  );
}

export function AliasManager({ groups, suggestions, sources = [], readOnly, toast }: AliasManagerProps) {
  const suggestionView = useTablePreferences('alias-suggestions', suggestionPreferences);
  const savedView = useTablePreferences('alias-saved', savedPreferences);
  const [renaming, setRenaming] = useState<AliasGroup | null>(null);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [savedSelection, setSavedSelection] = useState<RowSelectionState>({});
  const activateSuggestion = useTableSelection(() => setRowSelection({}));
  const activateSaved = useTableSelection(() => setSavedSelection({}));
  const [sorting, setSorting] = useState<SortingState>([]);
  const [savedSorting, setSavedSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 20 });
  const [savedPagination, setSavedPagination] = useState({ pageIndex: 0, pageSize: 20 });
  const suggestionPage = { ...pagination, pageIndex: Math.min(pagination.pageIndex, Math.max(0, Math.ceil(suggestions.length / pagination.pageSize) - 1)) };
  const savedPage = { ...savedPagination, pageIndex: Math.min(savedPagination.pageIndex, Math.max(0, Math.ceil(groups.length / savedPagination.pageSize) - 1)) };
  const [problem, setProblem] = useState('');
  const [canonical, setCanonical] = useState('');
  const [alias, setAlias] = useState('');

  /* 合并按顺序一条一条发：一次失败要报出「还有几组没合」，而并发发出去的话，说不清
     停在了哪里。 */
  const merge = useMutation({
    mutationFn: async (items: AliasSuggestion[]) => {
      let done = 0;
      for (const item of items) {
        try {
          await addAlias(item.canonical, item.alias);
        } catch (cause) {
          /* 半路断了要说清停在哪儿：已经合上的那几组先落回列表里去掉，再点一次只发剩下的。 */
          if (done) void reloadFollowManage();
          throw new Error(`${errorMessage(cause)} (${items.length - done} groups not merged yet)`);
        }
        done += 1;
      }
      return { done, items };
    },
    onSuccess: (result) => {
      setProblem('');
      setRowSelection({});
      void reloadFollowManage();
      toast(`Merged ${result.done} creator alias groups`);
    },
    onError: (cause) => setProblem(errorMessage(cause)),
  });

  const save = useMutation({
    mutationFn: (pair: { canonical: string; alias: string }) => addAlias(pair.canonical, pair.alias),
    onSuccess: () => {
      setProblem('');
      setCanonical('');
      setAlias('');
      void reloadFollowManage();
      toast('Creator aliases saved');
    },
    onError: (cause) => setProblem(errorMessage(cause)),
  });

  const drop = useMutation({
    mutationFn: async (names: string | string[]) => {
      const pending = typeof names === 'string' ? [names] : names;
      let done = 0;
      try {
        for (const name of pending) { await removeAlias(name); done += 1; }
      } catch (cause) {
        throw new Error(`${errorMessage(cause)} (${done} aliases removed, ${pending.length - done} not removed)`);
      } finally { void reloadFollowManage(); }
    },
    onSuccess: () => { setProblem(''); setSavedSelection({}); toast('Creator aliases removed') },
    onError: (cause) => setProblem(errorMessage(cause)),
  });

  const mergeSome = (items: AliasSuggestion[], all: boolean) => {
    if (!items.length) return;
    void confirmModal({
      title: all ? 'Merge all creator aliases' : 'Merge selected creator aliases',
      body: `The following ${items.length} creator groups will be merged: ${items.map(
        (item) => `“${item.alias}” into “${item.canonical}”`).join('; ')}.`,
      confirmLabel: all ? 'Merge all aliases' : 'Merge selected aliases',
      onConfirm: () => merge.mutateAsync(items),
    });
  };

  const removeSome = (name: string) => void confirmModal({
    title: 'Remove creator aliases', body: REMOVE_BODY(name),
    confirmLabel: 'Remove creator aliases',
    onConfirm: () => drop.mutateAsync(name),
  });
  const handlers = useRef({ sources, readOnly, merging: merge.isPending,
    removing: drop.isPending, merge: mergeSome, remove: removeSome, rename: setRenaming });
  handlers.current = { sources, readOnly, merging: merge.isPending,
    removing: drop.isPending, merge: mergeSome, remove: removeSome, rename: setRenaming };

  const suggestionColumns = useMemo(() => {
    const column = createColumnHelper<typeof suggestionFeatures, AliasSuggestion>();
    return column.columns([
      column.display({
        id: 'select',
        header: (context) => (
          <TableSelectionHeader table={context.table} label="Select all aliases to merge" />
        ),
        cell: (context) => (
          <Checkbox slot={null} isSelected={context.row.getIsSelected()}
            aria-label={`Select alias ${context.row.original.alias}, into ${context.row.original.canonical}`}
            onChange={(on) => context.row.toggleSelected(on)} />
        ),
      }),
      column.accessor('canonical', {
        header: 'Unified name',
        cell: (context) => <AuthorIdentity sources={handlers.current.sources} name={context.getValue()} />,
      }),
      column.accessor('alias', { header: 'Platform aliases', cell: (context) => context.getValue() }),
      column.accessor('evidence', {
        header: 'Basis',
        cell: (context) => <span className="text-body-2-regular text-text-secondary">{context.getValue()}</span>,
      }),
      column.display({
        id: 'actions', header: 'Actions',
        cell: (context) => (
          <Button variant="secondary" size="small" disabled={handlers.current.readOnly}
            {...busyProps(handlers.current.merging)}
            onClick={() => handlers.current.merge([context.row.original], false)}>Merge</Button>
        ),
      }),
    ]);
  }, []);
  const savedColumns = useMemo(() => {
    const column = createColumnHelper<typeof savedFeatures, AliasGroup>();
    return column.columns([
      column.display({ id: 'select', header: ({ table }) => (
        <TableSelectionHeader table={table} label="Select all saved aliases" />
      ), cell: ({ row }) => (
        <Checkbox slot={null} aria-label={`Select saved alias ${row.original.canonical_name}`}
          isSelected={row.getIsSelected()} onChange={(on) => row.toggleSelected(on)} />
      ) }),
      column.accessor('canonical_name', {
        id: 'canonical', header: 'Unified name',
        cell: (context) => (
          <AuthorIdentity sources={handlers.current.sources} name={context.getValue()}
            canonicalKey={context.row.original.canonical_key} />
        ),
      }),
      column.accessor('aliases', {
        header: 'Platform aliases',
        sortFn: (a, b) => a.original.aliases.map((item) => item.name).join(' ').localeCompare(b.original.aliases.map((item) => item.name).join(' '), 'zh-CN'),
        cell: (context) => (
          <span className="flex flex-wrap items-center gap-1.5">
            {context.getValue().map((item) => (
              <span key={item.key}
                className="inline-flex items-center gap-1 rounded-md bg-background-secondary-default px-1.5 py-1 text-caption-1-medium text-text-secondary">
                {item.name}
                <Button variant="ghost" size="xs" iconOnly leadingIcon={RiCloseLine}
                  aria-label={`Remove alias ${item.name}`} disabled={handlers.current.readOnly}
                  {...busyProps(handlers.current.removing)}
                  onClick={() => handlers.current.remove(item.name)} />
              </span>
            ))}
          </span>
        ),
      }),
      column.display({ id: 'actions', header: 'Actions', cell: ({ row }) => <Button variant="secondary" size="small"
        disabled={handlers.current.readOnly} aria-label={`Change the unified name of ${row.original.canonical_name}`}
        onClick={() => handlers.current.rename(row.original)}>Change unified name</Button> }),
    ]);
  }, []);
  const suggestionTable = useTable({
    features: suggestionFeatures,
    data: suggestions,
    columns: suggestionColumns,
    getRowId: suggestionKey,
    state: { rowSelection, sorting, pagination: suggestionPage, columnVisibility: suggestionView.visibility },
    onColumnVisibilityChange: suggestionView.change,
    onRowSelectionChange: (next) => { activateSuggestion(); setRowSelection(next); },
    onSortingChange: (next) => { setSorting(next); setPagination((now) => ({ ...now, pageIndex: 0 })); },
    onPaginationChange: setPagination,
    enableRowSelection: true,
  });
  const savedTable = useTable({
    features: savedFeatures,
    data: groups,
    columns: savedColumns,
    getRowId: (group) => group.canonical_key,
    state: { rowSelection: savedSelection, sorting: savedSorting, pagination: savedPage, columnVisibility: savedView.visibility },
    onColumnVisibilityChange: savedView.change,
    onRowSelectionChange: (next) => { activateSaved(); setSavedSelection(next); }, enableRowSelection: true,
    onSortingChange: (next) => { setSavedSorting(next); setSavedPagination((now) => ({ ...now, pageIndex: 0 })); },
    onPaginationChange: setSavedPagination,
  });
  const chosen = suggestionTable.getSelectedRowModel().rows.map((row) => row.original);
  const savedNames = savedTable.getSelectedRowModel().rows.flatMap((row) => row.original.aliases.map((item) => item.name));
  const busy = busyProps(merge.isPending);

  return (
    <div className={cardClass({ padding: 'none', className: 'flex flex-col gap-4 px-6 py-5 max-sm:px-4' })}>
      <h3 className="text-title-2-medium text-text-primary">Creator aliases</h3>

      <div className="flex flex-col gap-2">
        <FieldLabel>Add alias manually</FieldLabel>
        <div className="flex flex-wrap items-end gap-2">
          <Input aria-label="Unified name" placeholder="The name shown consistently in Peach" value={canonical}
            onChange={setCanonical} isDisabled={readOnly} className="w-56" />
          <Input aria-label="Platform aliases" placeholder="Platform aliases" value={alias}
            onChange={setAlias} isDisabled={readOnly} className="w-56" />
          <Button variant="primary" disabled={readOnly || !canonical.trim() || !alias.trim()}
            {...busyProps(save.isPending)}
            onClick={() => save.mutate({ canonical: canonical.trim(), alias: alias.trim() })}>
            Save alias
          </Button>
        </div>
      </div>

      {problem ? <ErrorText>{problem}</ErrorText> : null}

      {suggestions.length ? (
        <div className="flex flex-col gap-2">
          <div data-responsive-toolbar="">
            <div data-toolbar-heading="">
            <FieldLabel>To merge</FieldLabel>
            <span className="text-body-2-regular text-text-secondary">
              {`${suggestions.length} groups`}
            </span>
            </div>
            <div data-toolbar-actions="">
            <Button variant="primary" size="small" disabled={readOnly} {...busy}
              onClick={() => mergeSome(suggestions, true)}>{`Merge all (${suggestions.length})`}</Button>
            <DataTableSort label="Creator aliases to merge" sorting={sorting}
              options={[{ id: 'canonical', label: 'Unified name' }, { id: 'alias', label: 'Platform aliases' }, { id: 'evidence', label: 'Basis' }]}
              onChange={(next) => { setSorting(next); setPagination((now) => ({ ...now, pageIndex: 0 })); }} />
            <TableColumnControls preferences={suggestionView} label="Creator aliases to merge" />
            </div>
          </div>
          <SelectionDock label="Bulk actions for aliases to merge" visible={chosen.length > 0} count={`${chosen.length} groups selected`}>
            <Button variant="secondary" size="small" disabled={readOnly} {...busy}
              onClick={() => mergeSome(chosen, false)}>{`Merge selected (${chosen.length})`}</Button>
            <Button variant="ghost" size="small" onClick={() => setRowSelection({})}>Clear selection</Button>
          </SelectionDock>
          <DataTableFrame follow preferences={suggestionView} onRowClick={id => suggestionTable.getRow(id)?.toggleSelected()}>
            <Table aria-label="Creator aliases to merge" size="sm"
              sortDescriptor={sorting[0] ? { column: sorting[0].id, direction: sorting[0].desc ? 'descending' : 'ascending' } : undefined}
              onSortChange={(sort) => suggestionTable.getColumn(String(sort.column))?.toggleSorting(sort.direction === 'descending')}>
            <TableHeader>
              {suggestionTable.getHeaderGroups()[0]!.headers.map((header) => (
                <TableColumn key={header.id} id={header.id} isRowHeader={header.column.id === 'canonical'} allowsSorting={header.column.getCanSort()} {...suggestionView.columnProps(header.id)}>
                  {({ sortDirection }) => <><span className="flex items-center gap-0.5">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {header.column.getCanSort() ? <span data-sort-indicator data-direction={sortDirection || undefined}><ChevronSortDown /></span> : null}
                  </span><TableColumnResizer preferences={suggestionView} id={header.id} /></>}
                </TableColumn>
              ))}
              <TableColumn id="remaining-space" aria-label="Row blank area" data-table-space="" width={suggestionView.spaceWidth} minWidth={0} />
            </TableHeader>
            <TableBody>
              {suggestionTable.getRowModel().rows.map((row) => (
                <TableRow key={row.id} id={row.id} data-board-selected={row.getIsSelected() || undefined}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                  <TableCell data-table-space="" />
                </TableRow>
              ))}
            </TableBody>
            </Table>
          </DataTableFrame>
          <DataTableFooter label="Creator aliases to merge" unit="groups" total={suggestions.length} pagination={suggestionPage} onChange={setPagination} />
        </div>
      ) : null}

      <div className="flex flex-col gap-2">
        <div data-responsive-toolbar="">
          <div data-toolbar-heading="">
          <FieldLabel>Saved aliases</FieldLabel>
          <span className="text-body-2-regular text-text-secondary">{`${groups.length} groups`}</span>
          </div>
          <div data-toolbar-actions="">
          <DataTableSort label="Creator aliases saved" sorting={savedSorting}
            options={[{ id: 'canonical', label: 'Unified name' }, { id: 'aliases', label: 'Platform aliases' }]}
            onChange={(next) => { setSavedSorting(next); setSavedPagination((now) => ({ ...now, pageIndex: 0 })); }} />
          <TableColumnControls preferences={savedView} label="Creator aliases saved" />
          </div>
        </div>
        <SelectionDock label="Saved alias bulk actions" visible={savedNames.length > 0} count={`${savedNames.length} aliases selected`}>
          <Button variant="secondary" size="small" disabled={readOnly} {...busyProps(drop.isPending)}
            onClick={() => void confirmModal({ title: 'Remove selected creator aliases',
              body: `The following ${savedNames.length} aliases will be removed and their sources go back to separate creator groups.`,
              items: savedNames,
              confirmLabel: 'Remove selected aliases', onConfirm: () => drop.mutateAsync(savedNames) })}>
            {`Remove selected aliases (${savedNames.length})`}
          </Button>
          <Button variant="ghost" size="small" onClick={() => setSavedSelection({})}>Clear selection</Button>
        </SelectionDock>
        {groups.length ? (
          <>
          <DataTableFrame follow preferences={savedView} onRowClick={id => savedTable.getRow(id)?.toggleSelected()}>
            <Table aria-label="Creator aliases saved" size="sm"
              sortDescriptor={savedSorting[0] ? { column: savedSorting[0].id, direction: savedSorting[0].desc ? 'descending' : 'ascending' } : undefined}
              onSortChange={(sort) => savedTable.getColumn(String(sort.column))?.toggleSorting(sort.direction === 'descending')}>
            <TableHeader>
              {savedTable.getHeaderGroups()[0]!.headers.map((header) => (
                <TableColumn key={header.id} id={header.id} isRowHeader={header.column.id === 'canonical'} allowsSorting={header.column.getCanSort()} {...savedView.columnProps(header.id)}>
                  {({ sortDirection }) => <><span className="flex items-center gap-0.5">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {header.column.getCanSort() ? <span data-sort-indicator data-direction={sortDirection || undefined}><ChevronSortDown /></span> : null}
                  </span><TableColumnResizer preferences={savedView} id={header.id} /></>}
                </TableColumn>
              ))}
              <TableColumn id="remaining-space" aria-label="Row blank area" data-table-space="" width={savedView.spaceWidth} minWidth={0} />
            </TableHeader>
            <TableBody>
              {savedTable.getRowModel().rows.map((row) => (
                <TableRow key={row.id} id={row.id} data-board-selected={row.getIsSelected() || undefined}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                  <TableCell data-table-space="" />
                </TableRow>
              ))}
            </TableBody>
            </Table>
          </DataTableFrame>
          <DataTableFooter label="Creator aliases saved" unit="groups" total={groups.length} pagination={savedPage} onChange={setSavedPagination} />
          </>
        ) : (
          <EmptyState size="compact" icon={RiUserLine} title="No creator aliases saved yet"
            actions={!readOnly ? <EmptyFocusButton target='input[aria-label="Unified name"]'>Add alias</EmptyFocusButton> : undefined}>
            Enter the unified name and the names this creator uses on other platforms.
          </EmptyState>
        )}
      </div>
      <AliasRenameDialog group={renaming} close={() => setRenaming(null)} receipt={toast} />
    </div>
  );
}

/* JAV 想要：按状态分组的作品卡，复用资源链接查询与查找资源弹层。 */
import { useState } from 'react';
import { Radio } from 'react-aria-components';
import type { KeyboardEvent, ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import { RiStarLine, RiExternalLinkLine, RiDeleteBinLine } from '@remixicon/react';

import { Button, ButtonLink } from '@/components/base/buttons/button';
import { Input } from '@/components/base/input/input';

import { apiGet, errorMessage } from '../../api';
import { javContentSkeleton } from '../../jav-skeleton';
import type { DownloadsSnapshot } from '../bundle';
import { CloudDownloadDialog, type DownloadPrefill } from '../activity/cloud-download-dialog';
import { DOWNLOADS_KEY, DOWNLOADS_URL } from '../activity/downloads-panel';
import { cardClass } from '../components/card';
import { EmptyState, EmptyFocusButton } from '../components/empty-state';
import { Note } from '../components/note';
import { Pagination } from '../follow-manage/source-list';
import { pageWindow } from '../follow-manage/follow-manage';
import { ErrorLine } from '../follow-manage/source-view';
import { Help } from '../settings/section';
import { WantMagnets } from './want-magnets';
import { cachedMagnetStates } from './resource-cache';
import { SEGMENT, SEGMENTED_TRACK, SegmentedRadioGroup } from '../components/segmented';
import { busyProps, useAction } from '../settings/use-action';
import {
  addWant, fetchWants, invalidateWants, PHASES, removeWants, resetWants, searchNote, wantName,
  WANTS_KEY, type Want,
} from './wants';

const ORIGINS: Record<Want['origin'], string> = { code: 'Added manually', feed: 'Subscribe to new releases', follow: 'Following' };
/** 每一段一页摆多少张：一张卡二十来个节点，上千条一次摆开就是十几万像素高的一页。 */
export const WANT_PAGE_SIZE = 20;
const MAGNET_FILTERS = [['all', 'All'], ['available', 'Has magnet'], ['missing', 'No magnet']] as const;


/** 资料那一行：发行日、厂牌、女优、从哪儿加进来的。 */
const facts = (want: Want) => [want.release_date, want.studio, want.performers, ORIGINS[want.origin]]
  .filter(Boolean).join(' · ');

function Cover({ want }: { want: Want }) {
  return (
    <span className="relative inline-grid w-card-cover shrink-0 aspect-card-cover place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default max-sm:w-24">
      <span className="text-caption-1-regular text-text-secondary">No cover</span>
      {want.cover ? (
        <img src={want.cover} alt="" loading="lazy" referrerPolicy={want.remote_cover ? 'no-referrer' : undefined}
          onError={(event) => event.currentTarget.remove()} className="absolute inset-0 size-full object-cover" />
      ) : null}
    </span>
  );
}

function WantRow({ want, readOnly, busy, onReset, onRemove, onCloudDownload, downloads, provider, toast }: {
  want: Want; readOnly: boolean; busy: string; downloads?: DownloadsSnapshot; provider: string; toast(message: string): void;
  onReset(): void; onRemove(): void; onCloudDownload(): void;
}) {
  const [resolvedSource, setResolvedSource] = useState('');
  const source = want.link || resolvedSource || (want.code ? `https://javdb.com/search?q=${encodeURIComponent(want.code)}&f=all` : '');
  return (
    <li data-want-id={want.id}
      className={cardClass({ bordered: 'soft', className: 'flex flex-col gap-4 max-sm:p-4' })}>
      <div className="flex min-w-0 items-start gap-4 max-sm:gap-3">
      <Cover want={want} />
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <p className="flex min-w-0 flex-wrap items-baseline gap-x-2">
          <b className="min-w-0 text-headline-medium wrap-anywhere text-text-primary">{wantName(want)}</b>
          {want.code && want.title ? (
            <span className="min-w-0 truncate text-body-2-regular text-text-secondary">{want.title}</span>
          ) : null}
        </p>
        {facts(want) ? <p className="text-body-2-regular text-text-secondary">{facts(want)}</p> : null}
        {!want.code || want.phase === 'unreleased' || want.phase === 'acquired' ?
          <p data-want-note="" className="text-caption-1-regular text-text-secondary">{searchNote(want)}</p> : null}
        {want.scrape_error ? <ErrorLine text={want.scrape_error} prefix="Metadata not obtained:" tone="muted" /> : null}
        <div className="mt-1 flex flex-wrap items-center gap-2">
          {source ? <ButtonLink data-button-link="" variant="secondary" size="small" trailingIcon={RiExternalLinkLine} href={source} target="_blank" rel="noopener noreferrer">Source page</ButtonLink> : null}
          <Button variant="secondary" size="small" leadingIcon={RiDeleteBinLine} disabled={readOnly} {...busyProps(busy === `remove:${want.id}`)}
            onClick={onRemove}>Remove</Button>
          {want.phase === 'given_up' ? (
            <Button variant="secondary" size="small" disabled={readOnly} {...busyProps(busy === `reset:${want.id}`)}
              onClick={onReset}>Search again</Button>
          ) : null}
          {/* 还在找的两段才给云下载：未发售的没有资源可下，已入库的已经到手。 */}
          {want.phase === 'searching' || want.phase === 'given_up' ? (
            <Button variant="secondary" size="small" onClick={onCloudDownload}>Find resources</Button>
          ) : null}
        </div>
      </div>
      </div>
      {want.code && (want.phase === 'searching' || want.phase === 'given_up')
        ? <WantMagnets want={want} readOnly={readOnly} downloads={downloads} provider={provider} toast={toast} onSource={setResolvedSource} /> : null}
    </li>
  );
}

/** 一段（待找、未发售……）：标题带这一段的总数，多于一页时分页，页码各段各记各的。 */
function WantPhase({ phase, label, rows, row }: {
  phase: string; label: string; rows: Want[]; row(want: Want): ReactNode;
}) {
  const [page, setPage] = useState(1);
  const [magnetFilter, setMagnetFilter] = useState('all');
  const cached = cachedMagnetStates(rows);
  const hasMagnet = (want: Want) => want.has_magnets ?? cached.get(want.code || '') ?? false;
  const available = rows.filter(hasMagnet);
  const filtered = phase !== 'searching' || magnetFilter === 'all' ? rows
    : rows.filter(want => hasMagnet(want) === (magnetFilter === 'available'));
  const win = pageWindow(filtered.length, WANT_PAGE_SIZE, page);
  return (
    <section aria-label={label} data-want-phase={phase} className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
      <h3 className="flex items-baseline gap-2 text-title-2-medium text-text-primary">
        {label}
        <span className="text-body-2-regular tabular-nums text-text-secondary">{rows.length.toLocaleString()}</span>
      </h3>
      {phase === 'searching' ? <SegmentedRadioGroup name="want-magnet-filter" aria-label="Magnet search filter"
        orientation="horizontal" value={magnetFilter} className={SEGMENTED_TRACK} onChange={value => { setMagnetFilter(value); setPage(1) }}>
        {MAGNET_FILTERS.map(([value, text]) => <Radio key={value} value={value} aria-label={text} className={SEGMENT}>
          {text}<span className="text-caption-1-regular tabular-nums text-text-tertiary">{
            (value === 'all' ? rows.length : value === 'available' ? available.length : rows.length - available.length).toLocaleString()
          }</span>
        </Radio>)}
      </SegmentedRadioGroup> : null}
      </div>
      {!filtered.length ? <EmptyState size="compact" icon={RiStarLine} title="No matching titles yet"
        actions={<Button size="small" onClick={() => { setMagnetFilter('all'); setPage(1) }}>View all</Button>}>{null}</EmptyState> : null}
      <ul className="flex flex-col gap-4">{filtered.slice(win.start, win.end).map(row)}</ul>
      {win.pages > 1 ? (
        <div data-want-pager="" className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-body-2-regular tabular-nums text-text-secondary">
            {`${(win.start + 1).toLocaleString()}–${win.end.toLocaleString()} / ${win.total.toLocaleString()}`}
          </span>
          <Pagination label={`${label} pages`} page={win.page} pages={win.pages} onPage={setPage} />
        </div>
      ) : null}
    </section>
  );
}

export interface WantListProps {
  readOnly: boolean;
  toast(message: string): void;
  query?: string;
  clearQuery?(): void;
}

export function WantList({ readOnly, toast, query = '', clearQuery }: WantListProps) {
  const [code, setCode] = useState('');
  const [download, setDownload] = useState<DownloadPrefill | null>(null);
  const action = useAction();
  const wants = useQuery({
    queryKey: WANTS_KEY, queryFn: ({ signal }) => fetchWants(signal),
    staleTime: 30_000,
    // 刚登记的那几条还在取资料：跑着就隔几秒再读一次，取完了就停。
    refetchInterval: (query) => (query.state.data?.scraping ? 3000 : false),
  });

  const add = () => {
    const text = code.trim();
    if (!text || readOnly) return;
    void action.run('add', (signal) => addWant({ code: text }, signal), (done) => {
      toast(done.created ? `Added to wants: ${wantName(done.want)}` : `${wantName(done.want)} is already in wants`);
      setCode('');
      void invalidateWants();
    });
  };
  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.nativeEvent.isComposing) { event.preventDefault(); add() }
  };
  const remove = (want: Want) => {
    void action.run(`remove:${want.id}`, (signal) => removeWants([want.id], signal), () => {
      toast(`Removed: ${wantName(want)}`);
      void invalidateWants();
    });
  };
  const reset = (want: Want) => {
    void action.run(`reset:${want.id}`, (signal) => resetWants([want.id], signal), () => {
      toast(`${wantName(want)} back to searching`);
      void invalidateWants();
    });
  };

  const data = wants.data;
  const items = (data?.items || []).filter(want => !query || [want.code, want.title, want.performers]
    .join(' ').toLocaleLowerCase().includes(query.toLocaleLowerCase()));
  const downloads = useQuery({
    queryKey: DOWNLOADS_KEY,
    queryFn: ({ signal }) => apiGet<DownloadsSnapshot>(`${DOWNLOADS_URL}?limit=100`, signal),
    enabled: items.some((want) => want.code && (want.phase === 'searching' || want.phase === 'given_up')),
  });
  const configured = downloads.data?.providers.filter((row) => row.configured) || [];
  const selected = configured[0]?.key || '';
  return (
    <div aria-busy={wants.isPending} className="flex flex-col gap-8">
      <div className={cardClass({ padding: 'none', className: 'flex flex-col gap-4 px-6 py-5 max-sm:px-4' })}>
        <h3 className="text-title-2-medium text-text-primary">Add by code</h3>
        <div className="flex flex-wrap items-end gap-2">
          <div className="min-w-64 grow max-sm:min-w-0">
            <Input aria-label="Code" placeholder="Enter a code, e.g. SSIS-950" value={code}
              isDisabled={readOnly} onChange={setCode} onKeyDown={onKeyDown} />
          </div>
          <Button variant="primary" disabled={readOnly || !code.trim()} {...busyProps(action.busy === 'add')}
            onClick={add}>Add</Button>
        </div>
        {action.error ? <Note tone="error" title="This run didn't finish">{action.error}</Note> : null}
      </div>

      {wants.error ? <Note tone="error" title="Couldn't load wants">{errorMessage(wants.error)}</Note> : null}
      {wants.isPending ? <div role="status" aria-label="Loading wants" dangerouslySetInnerHTML={{ __html: javContentSkeleton('wants') }} /> : null}
      {data?.scraping ? <Help role="status">Fetching metadata and covers for newly added codes.</Help> : null}
      {downloads.error ? <Note tone="error" title="Download settings not obtained">{errorMessage(downloads.error)}</Note> : null}
      {downloads.data && !configured.length ? <Note tone="neutral">No download channel configured yet.<a href={'/settings/library?section=' + encodeURIComponent('Download channels')}>Download channel settings</a></Note> : null}
      {downloads.data && !downloads.data.available ? <Note tone="neutral">Cloud downloads are only available on devices allowed to modify the database.</Note> : null}

      {data && !items.length ? (
        <EmptyState size="compact" icon={RiStarLine} title={query ? 'No matching titles' : 'No wanted titles yet'}
          actions={query && clearQuery ? <Button size="small" onClick={clearQuery}>Clear search</Button>
            : !query && !readOnly ? <EmptyFocusButton target='input[aria-label="Code"]'>Add title</EmptyFocusButton> : undefined}>
          {query ? 'Try another code, actress or title.' : 'Enter a code to add a title you want to watch.'}
        </EmptyState>
      ) : null}

      {PHASES.map(([phase, label]) => {
        const rows = items.filter((want) => want.phase === phase);
        if (!rows.length) return null;
        return (
          <WantPhase key={phase} phase={phase} label={label} rows={rows} row={(want) => (
            <WantRow key={want.id} want={want} readOnly={readOnly} busy={action.busy}
              downloads={downloads.data} provider={selected} toast={toast}
              onReset={() => reset(want)} onRemove={() => remove(want)}
              onCloudDownload={() => setDownload({
                code: want.code || '', title: want.title || '', origin: `wishlist:${want.id}`,
                cover: want.cover || '', performers: want.performers || '', release_date: want.release_date || '', studio: want.studio || '',
              })} />
          )} />
        );
      })}
      <CloudDownloadDialog prefill={download} close={() => setDownload(null)} receipt={toast} provider={selected} />
    </div>
  );
}

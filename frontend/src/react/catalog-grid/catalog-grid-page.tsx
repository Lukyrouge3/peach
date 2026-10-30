/* 馆藏卡片网格：目录与回收站（由路由树画进 `#grid`）、资料页作品区、详情页的接着看。
 *
 * 取数、排法与续页都在这里；打开、选择、稍后看与回收站操作是壳递进来的动作。换筛选或壳要求
 * 重读时查询换键，整个网格按新键重挂：先铺壳那份骨架，数据回来后骨架淡出、内容从模糊里清晰
 * 起来（同遗留层 `revealSkeleton`），骨架还没到显示门槛就取完的直接落内容。
 *
 * 网格每接一页经 `onCount` 报一次总数与显示的卡数，读数画在首页筛选条（`catalog-filter` 岛）的
 * 下排。无限滚动见下面的 `LoadMore`：哨兵进入视口下方一屏
 * 内自动取下一页，点它等于手动取；失败在哨兵后面留一条可重试的 Note，之后只有手动才重试。 */
import { Fragment, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode, type RefObject } from 'react';
import { useInfiniteQuery, type InfiniteData, type QueryKey } from '@tanstack/react-query';
import { mixFace as mixArtwork, mixLabel, relayoutCovers, type Artwork } from '@peach/card-art';
import { requestErrorMessage } from '@peach/legacy/core';
import { LOAD_MORE_STATUS, loadingDotsHtml } from '@peach/legacy/ui';

import { apiGet } from '../../api';
import { LOAD_MORE_MARGIN, RetryNote, useSkeletonReveal } from '../components/grid-reveal';
import { cardRatio, MediaCard, type MediaCardVariant } from '../components/media-card';
import { MIX_FLIP_FACES, MixCard } from '../components/mix-card';
import {
  SHORTS_BATCH, arrangeTiles, catalogParams, catalogQuery, collapseGroups, entityQuery, latestCatalogPages, mixHasPicture,
  shortsBoundaries, shortsParams, splitSections, type GridPage, type ShortsCut, type Tile,
} from './catalog-grid';
import type { CatalogGridProps, MediaCardLayout, MediaCardHelpers, MediaItem, MediaPage } from './types';
import { VideoWall } from '../video-wall/video-wall';
import { finiteWallFilters, wallHasCover } from '../video-wall/wall-layout';
import { wallEmptyHtml } from '../video-wall/wall-empty';
import { LibraryCompletionPrompt, missingPreviewIds } from '../library-processing/library-completion';
import { useCatalogView } from './catalog-view';
import { CatalogListPage } from './catalog-list-page';

export function CatalogGridPage(props: CatalogGridProps) {
  const view = useCatalogView();
  if (props.mode === 'items') return <ItemsGrid {...props} />;
  const key = props.mode === 'entity'
    ? `entity:${props.entityKey || ''}:${props.revision}`
    : `catalog:${catalogParams(props.filters || {}, !!props.excludeVertical)}:${props.batchSize || 60}:${props.revision}`;
  if (view === 'list' && !props.wall) return <CatalogListPage key={key} {...props} />;
  return <GridBody key={key} {...props} />;
}

function Icon({ name }: { name: string }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><use href={`#i-${name}`} /></svg>;
}

/** 元信息按实际网格列数选择固定或自然高度。 */
function MediaGrid({ children, selectMode }: { children: ReactNode; selectMode?: boolean }) {
  const grid = useRef<HTMLDivElement>(null);
  const [single, setSingle] = useState(false);
  useLayoutEffect(() => {
    const node = grid.current;
    if (!node) return;
    const measure = () => setSingle(getComputedStyle(node).gridTemplateColumns.split(' ').filter(Boolean).length === 1);
    const observer = new ResizeObserver(measure);
    observer.observe(node);measure();
    return () => observer.disconnect();
  }, []);
  return <div ref={grid} data-media-grid="" data-catalog-view-mode="cards" data-single-column={single ? '' : undefined}
    data-select-mode={selectMode ? '' : undefined}>{children}</div>;
}

/** 壳手上已有的一批（详情页的接着看）：不取数，只画卡。`next` 那一排的卡直接排进壳的横排。 */
function ItemsGrid(props: CatalogGridProps) {
  const { actions } = props;
  const onOpen = useCallback((item: MediaItem, anchor: HTMLElement) => actions.open(item, anchor), [actions]);
  const variant: MediaCardVariant = props.variant === 'next' ? 'next' : 'grid';
  const cards = (props.items || []).map((item) => (
    <MediaCard key={item.id} item={item} variant={variant} layout={props.layout}
      selected={props.selected.has(item.id)} selectMode={props.selectMode} seekSeconds={props.seekSeconds}
      helpers={props.helpers} actions={actions} onOpen={onOpen} />
  ));
  if (variant === 'next') return <div data-media-next-row="">{cards}</div>;
  return <MediaGrid selectMode={props.selectMode}>{cards}</MediaGrid>;
}

/** 一次查询的整个生命周期：骨架、首屏、续页、竖屏带与读数。 */
function GridBody(props: CatalogGridProps) {
  const { helpers, actions, layout } = props;
  const entity = props.mode === 'entity';
  const trash = !entity && props.filters?.state === 'trash';
  const query = entity ? entityQuery(props) : catalogQuery(props);
  /* 资料页的第一页由壳和页头一起取来：同步落进这一代的缓存，首帧就是卡片，不再发一遍。 */
  const [retained] = useState(() => props.wall ? latestCatalogPages(query.queryKey) : undefined);
  const initialData = retained || (entity && props.initial
    ? { pages: [{ ...props.initial, items: props.initial.items || [], offset: 0 }], pageParams: [0] }
    : undefined);
  const result = useInfiniteQuery<GridPage, Error, InfiniteData<GridPage, number>, QueryKey, number>({
    queryKey: query.queryKey,
    queryFn: ({ pageParam, signal }) => query.queryFn({ pageParam, signal }),
    initialPageParam: 0,
    getNextPageParam: query.getNextPageParam,
    initialData,
    refetchOnMount: entity && retained ? 'always' : false,
  });

  /* 一次取数落定就告诉壳一次，成功、为空、失败都算：壳里 `await` 这次重读的调用方据此放行。 */
  const settledOnce = useRef(false);
  useEffect(() => {
    if (result.isPending || settledOnce.current) return;
    settledOnce.current = true;
    props.settled?.(props.revision);
  }, [result.isPending]);

  const { tiles, pageStarts } = useMemo(() => arrangeTiles(result.data?.pages || [], {
    collapse: props.groupCollapse !== false, mix: !!props.mix && !trash, javImage: layout.javImage,
  }), [result.data, props.groupCollapse, props.mix, trash, layout.javImage]);
  const shown = tiles.reduce((count, tile) => count + (tile.kind === 'card' ? 1 : 0), 0);
  const total = Number(result.data?.pages[0]?.total || 0);
  const finiteWall = entity || finiteWallFilters(props.filters);
  const wallAvailable = !trash && !props.selectMode && !!actions.wallPlayer && !!actions.wallDetails;
  const wallItems = tiles.flatMap(tile => tile.kind === 'card' && wallHasCover(tile.item) ? [tile.item] : []);
  const wallPool = wallItems;
  const missing = trash ? [] : missingPreviewIds(
    tiles.flatMap(tile => tile.kind === 'card' ? [tile.item] : []), layout.javImage);

  const reveal = useSkeletonReveal(result.isPending, props.skeletonHtml);
  const body = useRef<HTMLDivElement | null>(null);
  const cuts = useShortsStrips(props, result.data, tiles, pageStarts, body);

  /* 读数排到微任务里报：壳画读数会顺带重排页头与选中态，那一路可能走到批量条的 `flushSync`，
     提交阶段里它画不出来。微任务在浏览器绘制前跑完；这一代已卸下就不报。 */
  useLayoutEffect(() => {
    if (!result.data) return;
    let live = true;
    queueMicrotask(() => { if (live) props.onCount?.(total, shown) });
    return () => { live = false };
  }, [result.data, total, shown]);
  const failed = !result.isPending && !result.data;
  useLayoutEffect(() => {
    if (!failed) return;
    let live = true;
    queueMicrotask(() => { if (live) props.onCountFailed?.() });
    return () => { live = false };
  }, [failed]);

  const open = useCallback((item: MediaItem, anchor: HTMLElement) => actions.open(item, anchor), [actions]);
  const openResource = useCallback(
    (item: MediaItem, anchor: HTMLElement) => actions.openResource(item, anchor), [actions]);
  const openShort = useCallback((item: MediaItem) => actions.openShort(item), [actions]);

  /* 续页压过后台重读：结果版本一变，壳会作废这份查询，无限查询随即把已接上的每一页按顺序重取
     一遍。续页若搭这一趟的车，就得等它取完全部 N 页，而且等完也不会多出一页。所以续页先停掉
     路上的重读、直接取下一页；被停掉的那次刷新等下一次结果版本变化再补。 */
  const loadNext = useCallback(async () => {
    const next = await result.fetchNextPage();
    if (next.isFetchNextPageError) throw next.error;
  }, [result.fetchNextPage]);

  const card = (tile: Tile) => tile.kind === 'mix'
    ? <HomeMix key={`mix:${tile.seed.id}`} seed={tile.seed} layout={layout} helpers={helpers} actions={actions} />
    : (
      <MediaCard key={tile.item.id} item={tile.item} grouped={props.groupCollapse !== false}
        variant={trash && tile.item.medium && tile.item.medium !== 'video' ? 'resource' : 'grid'} layout={layout}
        selected={props.selected.has(tile.item.id)} selectMode={props.selectMode} seekSeconds={props.seekSeconds}
        helpers={helpers} actions={actions} onOpen={trash ? openResource : open} />
    );

  const content = () => {
    if (wallAvailable && props.wall) return <VideoWall
      key={finiteWall ? 'finite' : 'explore'}
      sessionKey={entity ? `entity:${props.entityKey || ''}` : `catalog:${catalogParams(props.filters || {}, !!props.excludeVertical)}`}
      items={wallPool} finite={finiteWall} hasMore={!!result.hasNextPage} busy={result.isFetchingNextPage}
      loading={result.isPending || (!result.data && result.isFetching)}
      error={!result.data && !result.isPending ? requestErrorMessage(result.error) : ''}
      retry={() => void result.refetch()}
      emptyHtml={result.data && !wallPool.length ? wallEmptyHtml({
        libraryEmpty: !!result.data.pages[0]?.libraryEmpty, matches: total, hasMore: !!result.hasNextPage,
        catalogEmpty: props.emptyHtml?.({ trash, libraryEmpty: !!result.data.pages[0]?.libraryEmpty }),
      }) : ''}
      loadMore={loadNext} actions={actions} helpers={helpers} javImage={layout.javImage} />;
    if (result.isPending) return null;
    if (!result.data) {
      return <RetryNote message={requestErrorMessage(result.error)} onRetry={() => void result.refetch()} />;
    }
    if (!tiles.length) {
      const html = props.emptyHtml?.({ trash, libraryEmpty: !!result.data.pages[0]?.libraryEmpty }) || '';
      return <div data-media-empty="" dangerouslySetInnerHTML={{ __html: html }} />;
    }
    return (
      <>
        <div data-media-sections="" data-select-mode={props.selectMode ? '' : undefined}>
          {splitSections(tiles, cuts).map((section) => (
            <Fragment key={section.start}>
              <MediaGrid>{section.tiles.map(card)}</MediaGrid>
              {section.strip ? <ShortsStrip cut={section.strip} props={props} onOpen={openShort} /> : null}
            </Fragment>
          ))}
        </div>
        {result.hasNextPage
          ? <LoadMore key={result.data.pages.length} entity={entity} load={loadNext}
            enabled={() => props.canLoadMore?.() !== false} />
          : null}
      </>
    );
  };

  return (
    <div ref={body} data-media-body="" data-grid-reveal={reveal.fading ? '' : undefined}>
      {!props.wall && reveal.layer}
      <LibraryCompletionPrompt assetIds={missing} />
      {content()}
    </div>
  );
}

/** 续页。目录是一颗滚到附近就自己取的哨兵，资料页是一枚「载入更多」键，两者判据相同。
 *  每接上一页就按新键重挂一次，失败状态不跨页。资料页照片墙与关注页的翻页也用这一枚；关注页那枚键
 *  带字形，`children` 换掉键上的字。 */
export function LoadMore({ entity, load, enabled, children }: {
  entity: boolean; load: () => Promise<void>; enabled: () => boolean; children?: ReactNode;
}) {
  const node = useRef<HTMLElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const busy = useRef(false);
  const failed = useRef(false);
  const [state, setState] = useState<{ busy: boolean; error: string }>({ busy: false, error: '' });
  const latest = useRef({ load, enabled });
  latest.current = { load, enabled };
  const run = useCallback(async (manual: boolean) => {
    const el = node.current;
    if (busy.current || !el?.isConnected || (!manual && failed.current) || !latest.current.enabled()) return;
    busy.current = true;
    failed.current = false;
    setState({ busy: true, error: '' });
    try {
      await latest.current.load();
      if (node.current) setState({ busy: false, error: '' });
    } catch (error) {
      failed.current = true;
      if (node.current) setState({ busy: false, error: requestErrorMessage(error) });
    } finally {
      busy.current = false;
    }
    /* 这一趟没接上新页（例如被并进别的取数）时哨兵不会重挂，而一直待在视口里的哨兵不会再收到
       相交通知：重新观察一次，让观察器按当前位置再判一遍。 */
    const watching = observer.current;
    if (!failed.current && watching && node.current?.isConnected) {
      watching.unobserve(node.current);
      watching.observe(node.current);
    }
  }, []);
  const attach = useCallback((el: HTMLElement | null) => { node.current = el }, []);
  useEffect(() => {
    const el = node.current;
    if (!el) return undefined;
    const watching = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) void run(false);
    }, { rootMargin: LOAD_MORE_MARGIN });
    observer.current = watching;
    watching.observe(el);
    return () => { watching.disconnect(); observer.current = null };
  }, [run]);
  const aria = state.busy ? { 'aria-busy': true, 'aria-disabled': true } as const : {};
  return (
    <>
      {entity
        ? <button ref={attach} type="button" data-entity-more="" {...aria} onClick={() => void run(true)}>{children ?? 'Load more'}</button>
        /* 失败时只留下面那条重试：哨兵收起但不卸下，重试接上之后照旧由它续页。 */
        : <div ref={attach} data-load-more="" {...aria} hidden={Boolean(state.error)} onClick={() => void run(true)}
          dangerouslySetInnerHTML={{ __html: loadingDotsHtml(LOAD_MORE_STATUS) }} />}
      {state.error ? <RetryNote message={state.error} onRetry={() => void run(true)} /> : null}
    </>
  );
}

/** 竖屏带：每接一页请求一条，落点在这一页新增的那几行之间的行边界上随机取一个。
 *  请求跟着主列表的筛选与排序走；一条都没有、或这一页剪不出行边界，偏移量按遗留层归零或不动。
 *  分卷与版本按主网格同一个开关折叠（`collapseGroups`），一组跨几条带也只留第一次出现的那一张。 */
function useShortsStrips(
  props: CatalogGridProps, data: InfiniteData<GridPage, number> | undefined,
  tiles: readonly Tile[], pageStarts: readonly number[], body: RefObject<HTMLElement | null>,
): ShortsCut[] {
  const [cuts, setCuts] = useState<ShortsCut[]>([]);
  const [arrived, setArrived] = useState<{ page: number; total: number; items: MediaItem[]; more: boolean } | null>(null);
  const offset = useRef(0);
  const handled = useRef(0);
  const seen = useRef({ parts: new Set<string>(), editions: new Set<string>() });
  const controllers = useRef<AbortController[]>([]);
  useEffect(() => () => controllers.current.forEach((controller) => controller.abort()), []);
  useEffect(() => {
    const pages = data?.pages.length || 0;
    if (!props.shorts || handled.current >= pages) return;
    handled.current = pages;
    const controller = new AbortController();
    controllers.current.push(controller);
    const page = pages - 1;
    apiGet<MediaPage>(`/api/items?${shortsParams(props.filters || {}, offset.current)}`, controller.signal)
      .then((strip) => {
        const items = strip.items || [];
        if (!items.length) { offset.current = 0; return }
        setArrived({ page, total: Number(strip.total || 0), items, more: strip.has_more !== false });
      })
      /* 竖屏带是穿插进来的附加内容，取不到就不插，主列表照常。 */
      .catch(() => {});
  }, [data]);
  useLayoutEffect(() => {
    if (!arrived) return;
    setArrived(null);
    const start = cuts.reduce((at, cut) => Math.max(at, cut.at), 0);
    const sections = body.current?.querySelectorAll<HTMLElement>('[data-media-sections] > [data-media-grid]');
    const last = sections?.[sections.length - 1];
    const columns = last ? Math.max(1, getComputedStyle(last).gridTemplateColumns.split(' ').length) : 1;
    const addedFrom = Math.max(0, (pageStarts[arrived.page] ?? 0) - start);
    const boundaries = shortsBoundaries(tiles.length - start, addedFrom, columns);
    if (!boundaries.length) return;
    /* 落点定了才折叠：剪不出落点的这一批下次照原偏移量重取，不能先记成已出现。 */
    const items = collapseGroups(arrived.items, seen.current, props.groupCollapse !== false);
    offset.current = arrived.more ? offset.current + SHORTS_BATCH : 0;
    if (!items.length) return;
    const at = start + (boundaries[Math.floor(Math.random() * boundaries.length)] ?? 0);
    setCuts((current) => [...current, { at, total: arrived.total, items }]);
  }, [arrived]);
  return cuts;
}

function ShortsStrip({ cut, props, onOpen }: {
  cut: ShortsCut; props: CatalogGridProps; onOpen: (item: MediaItem) => void;
}) {
  const row = useRef<HTMLDivElement | null>(null);
  const { wireDrag } = props;
  useEffect(() => { if (row.current) wireDrag(row.current) }, [wireDrag]);
  return (
    <section data-shorts-strip="">
      <h2>
        竖屏 <span data-shorts-count="">{`${cut.total.toLocaleString()}`}</span>
        <button type="button" data-shorts-enter="" onClick={() => props.actions.openShorts()}>
          <Icon name="gallery-vertical-end" /><span>Enter immersive mode</span>
        </button>
      </h2>
      <div ref={row} data-shorts-row="">
        {cut.items.map((item) => (
          <MediaCard key={item.id} item={item} variant="short" layout={props.layout} grouped={props.groupCollapse !== false}
            selected={props.selected.has(item.id)} selectMode={props.selectMode} seekSeconds={props.seekSeconds}
            helpers={props.helpers} actions={props.actions} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}

/** Mix 的一张画面：番号版式开着时番号作品按这一屏的大图／小图取，其余一律按小图。 */
function mixFace(item: MediaItem, layout: MediaCardLayout, eager: boolean): Artwork {
  return mixArtwork(item, layout.active && item.is_jav ? layout.size : 'small', eager, layout.javImage);
}

/** 目录每一页第 8 位的那张 Mix：以种子为首的相似作品。整张卡是点击区，悬停逐张翻过那一叠。 */
function HomeMix({ seed, layout, helpers, actions }: {
  seed: MediaItem; layout: MediaCardLayout; helpers: MediaCardHelpers; actions: CatalogGridProps['actions'];
}) {
  const faces = useRef(new Map<string, string>());
  const latest = useRef(layout);
  latest.current = layout;
  const label = mixLabel(seed, helpers.tagLabel);
  const flipImages = useCallback(async () => {
    const current = latest.current;
    const related = await actions.mixRelated(seed.id);
    const list = [seed, ...related].filter((item) => mixHasPicture(item, current.javImage)).slice(0, MIX_FLIP_FACES);
    faces.current = new Map(list.map((item) => [String(item.id), mixFace(item, current, true).html]));
    return list.map((item) => String(item.id));
  }, [seed, actions]);
  const jav = layout.active && !!seed.is_jav;
  const size = jav ? layout.size : 'small';
  const artwork = mixFace(seed, layout, false);
  return (
    <MixCard data-mix-seed={String(seed.id)} name={`Mix · ${label}`}
      caption={`${helpers.displayName(seed, seed.name || '')} and similar titles`} count={0} badge="Mix" glyph wholeCard
      poster={null} artwork={artwork}
      artworkIdentity={size === 'small' ? artwork.html : mixFace(seed, { ...layout, size: 'small' }, false).html}
      relayoutArt={(root) => relayoutCovers(root, size)}
      ratio={cardRatio(seed, 'grid', layout)}
      flipImages={flipImages} faceHtml={(id) => faces.current.get(id) || ''} canFlip={actions.canFlip}
      faces={[]} onOpenEntity={actions.openEntity}
      onOpen={(anchor) => actions.openMix(seed.id, anchor)} openLabel={`Open Mix · ${label}`} />
  );
}

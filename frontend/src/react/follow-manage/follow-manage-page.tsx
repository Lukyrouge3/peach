/* 关注管理页：加来源、检查更新、移除来源与管理 JAV 订阅源。
 *
 * 来源凭据由 Peach 配置管理，想要清单位于 JAV 分区。
 *
 * 地址栏与个人偏好各管各的（ADR-0031「迁移桥接」）：
 * - `tab`、`page`、`sort`、`dir` 在地址栏上。判据是「外面链接得过来吗」——把一条关注列表
 *   的地址发给自己在另一台机器上打开，看到的要是同一批、同一顺序的那一页；排序决定了
 *   哪些来源落在第二页，所以它和页码是同一件事的两半，不能一个在地址栏一个不在。
 * - `pageSize`、`layout` 是这台浏览器的个人偏好，跟着 `appSettings` 走，由壳读写；它们
 *   换一个值不会改变「这一页是哪一批」的含义，挂到地址栏上只会让分享出去的链接把自己的
 *   习惯也一并带给对方。
 * 两边都只有一份真相：React 拿着实时状态，写回哪儿由 props 上的那两个回调说了算。
 *
 * 版式判据来自 docs/reference-sources.json 的 vercel-report-design：要避开卡片套卡片、用
 * 边框补救层级、成排通栏空条、细小灰字加随意字号。所以分组靠标题和一条发丝分隔线，行与
 * 行之间也只用分隔线，不各自套框；字号只取 BoardUI 排好的那几档 token。 */
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Tab, TabPanel, Tabs } from 'react-aria-components';

import { resolveFollowSort } from '../../follow-sort';
import type { FollowManageProps } from '../bundle';
import { cardClass } from '../components/card';
import { Note } from '../components/note';
import { Page } from '../components/page';
import { TagManager } from '../index/tag-manager';
import { PillAriaTabList } from '../components/pill-aria-tab-list';
import { STAT_STRIP_SIX } from '../components/stat-card';
import { ExternalLink } from '../settings/section';
import { AddSource } from './add-source';
import { AddFeed } from './add-feed';
import { AliasManager } from './alias-manager';
import { ButtonLink } from '@/components/base/buttons/button';
import { FeedSources } from './feed-sources';
import {
  credentialDone, DEFAULT_SORT, FEEDS_KEY, fetchCredentials, fetchFeeds, fetchFollow, FOLLOW_CREDENTIALS_KEY,
  FOLLOW_MANAGE_KEY, groupByAuthor, isBroken, isLayout, keepSelected, pageSizeOf,
  SORT_DEFAULT_DIR, type CredentialData, type FollowData, type Layout, type SortDir, type SortKey,
} from './follow-manage';
import { SourceList } from './source-list';
import { FOLLOW_MANAGE_NAV as TABS } from './manage-route';

type TabKey = (typeof TABS)[number][0];

const isTab = (value: unknown): value is TabKey => TABS.some(([key]) => key === value);

/** 一格读数：一个名字、一个大数、一句它的量词。旧 `.fmanageoverview>div` 的填充卡。 */
function Reading({ term, figure, unit }: { term: string; figure: number; unit: string }) {
  return (
    <div className={cardClass({ padding: 'none', className: 'flex flex-col gap-3 px-6 py-5 max-sm:gap-2 max-sm:p-4' })}>
      <span className="text-body-medium text-text-secondary">{term}</span>
      {/* 六位数起小一号字、七位数起再小一号，六卡并排时读数和单位仍在一行；更长时单位落到下一行，不顶出卡片。 */}
      <b data-follow-reading="" className={`flex min-w-0 flex-wrap items-baseline gap-x-1 tabular-nums text-text-primary ${
        figure >= 1000000 ? 'text-headline-medium' : figure >= 100000 ? 'text-title-3-medium' : 'text-title-1-medium'}`}>
        <span className="min-w-0 wrap-anywhere">{figure.toLocaleString()}</span>
        <small className="whitespace-nowrap text-body-2-regular text-text-secondary">{` ${unit}`}</small>
      </b>
    </div>
  );
}

export function FollowManagePage(props: FollowManageProps) {
  const {
    route, savePreference, toast, openFollow, readOnly, readOnlyMessage, writerUrl,
  } = props;
  const [tab, setTab] = useState<TabKey>(isTab(props.tab) ? props.tab : 'list');
  const [page, setPage] = useState(Math.max(1, Math.floor(props.page) || 1));
  const [sort, setSort] = useState<SortKey>(() => resolveFollowSort(props.sort, props.dir).sort);
  const [dir, setDir] = useState<SortDir>(() => resolveFollowSort(props.sort, props.dir).dir);
  const [layout, setLayout] = useState<Layout>(isLayout(props.layout) ? props.layout : 'default');
  const [pageSize, setPageSize] = useState(pageSizeOf(props.pageSize));
  /* 勾选跨页也跨视图，身份是来源 ID：换页、换排序、从卡片切到表格，选中的仍是同一批。
     它不进地址栏——那是这一刻手里的一批东西，不是这一页的身份。 */
  const [selected, setSelected] = useState<ReadonlySet<number>>(new Set<number>());
  const [feedSelected, setFeedSelected] = useState<ReadonlySet<number>>(new Set<number>());

  const follow = useQuery({ queryKey: FOLLOW_MANAGE_KEY, queryFn: ({ signal }) => fetchFollow(signal) });
  const credentials = useQuery({
    queryKey: FOLLOW_CREDENTIALS_KEY, queryFn: ({ signal }) => fetchCredentials(signal),
  });
  /* 读数与 JAV 订阅表格共用一次读取。 */
  const feeds = useQuery({ queryKey: FEEDS_KEY, queryFn: ({ signal }) => fetchFeeds(signal) });
  const data: FollowData = follow.data || { sources: [] };
  const creds: CredentialData = credentials.data || { root: '', providers: [] };
  const sources = data.sources;

  /* 删掉的来源不该还占着计数：清单换一份就把已经不在里面的 ID 丢掉。 */
  useEffect(() => {
    setSelected((now) => {
      const next = keepSelected(now, sources);
      return next.size === now.size ? now : next;
    });
  }, [sources]);

  /* 默认值传空串：哪一项算默认只有这一边知道（`DEFAULT_SORT` 与每一档的默认方向都在
     数据层），壳照这个判据决定写不写进地址栏，不必在它那边再抄一份默认表。 */
  const go = (next: Partial<{ tab: TabKey; page: number; sort: SortKey; dir: SortDir }>) => {
    const nextSort = next.sort ?? sort;
    const nextDir = next.dir ?? dir;
    route({
      tab: next.tab ?? tab,
      page: next.page ?? page,
      sort: nextSort === DEFAULT_SORT ? '' : nextSort,
      dir: nextDir === SORT_DEFAULT_DIR[nextSort] ? '' : nextDir,
    });
  };

  const groups = groupByAuthor(sources);
  const broken = sources.filter(isBroken).length;
  const enabled = sources.filter((source) => source.enabled).length;
  const pending = (creds.providers || []).filter(
    (row) => row.requirement === 'required' && !credentialDone(row)).length;
  /* 按人数：一位女优常有本名页和旧艺名页两条源，订的是她这个人。没挂人物的源各算一位。 */
  const subscribed = new Set((feeds.data?.sources || []).map(
    (source) => source.entity_id ?? `source-${source.id}`)).size;

  return (
    <Page>
      {readOnly ? (
        <Note tone="warning" title="Browse-only on this device"
          extra={writerUrl
            ? <p className="text-body-2-regular">
                <ExternalLink href={writerUrl}>Manage follows on the writer</ExternalLink>
              </p>
            : undefined}>
          {readOnlyMessage}
        </Note>
      ) : null}

      {/* 前四张是关注，后两张是 JAV 订阅源：订了几位、拉回来的新作还有几条没看。 */}
      <div className={STAT_STRIP_SIX} aria-label="Follow overview">
        <Reading term="Followed creators" figure={groups.length} unit="people" />
        <Reading term="Enabled sources" figure={enabled} unit={`/ ${sources.length}`} />
        <Reading term="Check failed" figure={broken} unit="sources" />
        <Reading term="Unwatched updates" figure={data.counts?.new || 0} unit="items" />
        <Reading term="JAV subscriptions" figure={subscribed} unit="people" />
        <Reading term="Unwatched releases" figure={feeds.data?.unread || 0} unit="items" />
      </div>

      <Tabs selectedKey={tab} onSelectionChange={(key) => {
        const next = String(key);
        if (!isTab(next)) return;
        setSelected(new Set());
        setFeedSelected(new Set());
        setTab(next);
        go({ tab: next });
      }} className="flex flex-col gap-6">
        <PillAriaTabList aria-label="Follow management areas" data-section-nav data-section-items
          className="flex max-w-full flex-nowrap overflow-x-auto">
          {TABS.map(([key, name]) => (
            <Tab key={key} id={key} data-pill-selected={tab === key ? '' : undefined} data-pill-variant="gray"
              className="cursor-pointer whitespace-nowrap">{name}</Tab>
          ))}
        </PillAriaTabList>

        <TabPanel id="list" className="flex flex-col gap-4">
          <FeedSources readOnly={readOnly} toast={toast}
            onAdd={() => { setTab('add'); go({ tab: 'add' }) }}
            selection={{ ids: feedSelected, onChange: setFeedSelected, onActivate: () => setSelected(new Set()) }} />
          <SourceList data={data} sort={sort} dir={dir} page={page} layout={layout}
            pageSize={pageSize} selected={selected} readOnly={readOnly} toast={toast}
            openFollow={openFollow}
            onAdd={() => { setTab('add'); go({ tab: 'add' }) }}
            onSort={(nextSort, nextDir) => {
              setSort(nextSort);
              setDir(nextDir);
              setPage(1);
              go({ sort: nextSort, dir: nextDir, page: 1 });
            }}
            onPage={(next) => { setPage(next); go({ page: next }) }}
            onSelected={(next) => { setSelected(next); setFeedSelected(new Set()) }}
            onLayout={(next) => {
              setLayout(next);
              setPage(1);
              savePreference({ layout: next });
              go({ page: 1 });
            }}
            onPageSize={(next) => {
              setPageSize(next);
              setPage(1);
              savePreference({ pageSize: next });
              go({ page: 1 });
            }} />
        </TabPanel>

        <TabPanel id="add" className="flex flex-col gap-8">
          <AddSource data={data} credentials={creds} readOnly={readOnly} toast={toast} />
          <AddFeed readOnly={readOnly} toast={toast}
            onAdded={() => { void feeds.refetch(); setTab('list'); go({ tab: 'list' }) }} />
          <AliasManager groups={data.author_aliases || []} readOnly={readOnly} toast={toast}
            suggestions={data.alias_suggestions || []} sources={data.sources} />
        </TabPanel>

        <TabPanel id="tags" className="flex flex-col gap-4">
          <TagManager scope="online" />
        </TabPanel>

      </Tabs>
      <div><ButtonLink variant="secondary" href="/settings/subscriptions">Source and subscription settings{pending ? ` (${pending})` : ''}</ButtonLink></div>
    </Page>
  );
}

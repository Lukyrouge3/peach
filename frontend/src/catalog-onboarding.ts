import { emptyStateHtml } from '@peach/legacy/ui';
import { esc } from '@peach/legacy/core';

type Request = (url: string) => Promise<any>;
const FILTERS = ['loc', 'creator', 'performer', 'studio', 'series', 'agency', 'tag', 'tag_match', 'len', 'dur_min', 'dur_max', 'orient', 'region', 'year', 'state', 'jav', 'thumb'];

/** 清除馆藏条件，保留当前页面、视图与本地或在线范围。 */
export function clearCatalogAddress(address = typeof location === 'undefined' ? '/' : location.href): string {
  const url = new URL(address, 'http://localhost');
  for (const key of [...FILTERS, 'q', 'category', 'cat']) url.searchParams.delete(key);
  url.searchParams.set('thumb', '0');
  return url.pathname + (url.search ? url.search : '') + url.hash;
}

/** 推荐与当前列表共用筛选，并以实际搜索命中作为展示条件。 */
export async function catalogSuggestions(state: Record<string, string>, request: Request): Promise<string[]> {
  const params = new URLSearchParams();
  for (const key of FILTERS) if (state[key]) params.set(key, state[key]);
  const [facets, sample] = await Promise.all([
    request('/api/facets?' + params), request('/api/items?' + params + '&limit=5'),
  ]);
  const candidates: string[] = [...new Set<string>([
    ...(facets.creators || []), ...(facets.tagperformers || []), ...(facets.tags || []),
  ].map(row => String(row.k || '')).concat((sample.items || []).map((row: { code?: string; name?: string }) => row.code || row.name || '')))]
    .filter(value => value.length > 1).slice(0, 10);
  const hits = await Promise.all(candidates.map(async value => {
    const query = new URLSearchParams(params); query.set('q', value); query.set('limit', '1');
    const result = await request('/api/items?' + query);
    return result.total > 0 ? value : '';
  }));
  return hits.filter(Boolean);
}

/** 空馆藏、筛选无结果与资料尚未建立分别给出可执行入口。 */
export function catalogEmptyHtml({ kind = 'catalog', filtered = false, jav = false, configurable: _configurable = false, online = false } = {}): string {
  const add = '<a class="geist-button primary" href="/settings/library">Add media</a>';
  const follow = '<a class="geist-button' + (online ? ' primary' : '') + '" href="/subscriptions?tab=add">Add follows</a>';
  if (filtered || jav) return emptyStateHtml('search', jav ? 'No matching JAV titles yet' : 'Nothing matches',
    jav ? 'Scanned videos that don\'t have release metadata yet are listed under All content.' : 'Clear filters or search to see all content.',
    { actions: jav
      ? '<a class="geist-button primary" href="/?loc=&thumb=0">View all content</a><a class="geist-button" href="/data-cleanup#libraryProcessing">Complete video metadata</a>'
      : `<a class="geist-button primary" href="${filtered ? esc(clearCatalogAddress()) : '/?loc=&thumb=0'}">${filtered ? 'Clear filters' : 'View all content'}</a>` });
  if (kind !== 'catalog') {
    const labels: Record<string, string> = { tags: 'Tags', performers: 'Performers', creators: 'Sellers', studios: 'Studios', agencies: 'Agencies', series: 'Series' };
    // 在线那一档数的是来源上的东西，名字也跟着来源的说法：艺人页在线摆的是关注来源里的创作者。
    const onlineLabels: Record<string, string> = { tags: 'Tags', performers: 'Creators' };
    const label = (online ? onlineLabels[kind] : '') || labels[kind] || 'profiles';
    return emptyStateHtml(kind === 'tags' ? 'tags' : 'user-round', 'No' + label,
      online ? 'yet. After you add follow sources and fetch content, the source\'s' + label + '。' : 'Once content is added and its metadata filled in, it will show up here.',
      { actions: online ? follow : add + follow });
  }
  return emptyStateHtml('play', 'No videos yet', 'Add a media folder or follow source to start building your library.', { actions: add + follow });
}

/* 配置页的骨架：整页静态骨架（React 包与 `/api/configuration` 回来之前）与各分区自己取数时的
 * 分区骨架都由这里的构件拼，按终态的结构画：列表画成行，表单画成「标签 + 输入框」，开关行画成
 * 「标题 + 说明 + 开关」，底栏画禁用的键。
 *
 * 行数有两种来路：
 * - 代码里的静态登记决定的（来源凭据的站点清单、各分区固定的设置行与字段名）直接照登记画，名字写真名；
 * - 随这台机器的配置变的（媒体库与文件夹、索引器、网盘账号、下载渠道、访问密码的状态等）照本机上次
 *   画好时记下的结构画：记的是行数与每行是否展开这类结构，不是高度。没有记录时按空集合或一行的最小结构画。 */
import { esc } from '@peach/legacy/core';
import { islandButton, islandGlyph, islandSelect } from './island-skeleton';
import { CONFIGURATION_SECTIONS } from './history/settings-route';
import { diagnosticsSkeleton } from './diagnostics-skeleton';
import { LIBRARY_FOLDER_HELP, POLICY_SUMMARY } from './react/settings/library-policy-copy';
import { ENTRY_LINKS_HELP, ENTRY_LINKS_HINT } from './configuration-copy';
import CREDENTIAL_REGISTRY from './react/follow-manage/credential-providers.json' with { type: 'json' };

export const CLOUD_PROXY_HELP = 'The API proxy is used to list folders and query file info; the data proxy reads videos and their companion files. Once saved, other reads by the same cloud account in CloudDrive also use this setting.';

/* ---------- 本机记下的结构 ---------- */

export interface MediaShape { folders: number[]; cloud: boolean }
export interface DiscoveryShape { enabled: boolean; watchLocal: boolean; cloud: boolean; webhook: boolean; prefixes: number }
export interface CredentialsShape { done: string[] }
/** 每个索引器一项：是否默认展开（还没有地址的那条展开）。 */
export interface IndexersShape { open: boolean[] }
export interface JavBrowserShape { enabled: boolean; ready: boolean }
/** 每个网盘账号一项：[数据代理走代理, API 代理走代理]，走代理时多出地址、端口与认证三行。 */
export interface CloudProxyShape { configured: boolean; accounts: [boolean, boolean][]; unlinked: number }
export interface DownloadsShape { cloud: boolean; has115: boolean; pikpak: boolean; pikpakRoots: boolean; pikpakLoggedIn: boolean; browserLogin: boolean }
export interface NetworkShape { port: boolean; addresses?: number; networkEditable?: boolean; lan?: boolean; proxyAddress: boolean; access: string; tunnelNamed: boolean; tunnelNamedMode: boolean; tunnelNote: boolean }
export interface MaintenanceShape {
  releaseFacts: number; releaseNotes: number; autoUpdateHelp: boolean; startupNote: boolean; desktopNote: boolean;
  storageRows: number; storageNotes: number; reporting: boolean; reportingIdle: boolean; sharing: boolean;
  sharingNotice: boolean; sharingIdle: boolean; facts: string[]; uninstall: boolean; uninstallHelp: boolean;
}
export interface ConfigurationShape {
  media: MediaShape; discovery: DiscoveryShape; credentials: CredentialsShape; indexers: IndexersShape;
  javBrowser: JavBrowserShape; cloudProxy: CloudProxyShape; downloads: DownloadsShape; network: NetworkShape;
  maintenance: MaintenanceShape;
}
type Shapes = { [K in keyof ConfigurationShape]?: Partial<ConfigurationShape[K]> };

export const SHAPE_KEY = 'peach.configuration.shape.v1';

function shapes(): Shapes {
  try {
    const value = JSON.parse(localStorage.getItem(SHAPE_KEY) || '{}') as unknown;
    return value && typeof value === 'object' ? value as Shapes : {};
  } catch { return {} }
}

/** 记下一个分区这次画好时的结构，下次首屏骨架照它排。 */
export function rememberShape<K extends keyof ConfigurationShape>(key: K, value: ConfigurationShape[K]): void {
  try {
    const all = shapes();
    if (JSON.stringify(all[key]) === JSON.stringify(value)) return;
    localStorage.setItem(SHAPE_KEY, JSON.stringify({ ...all, [key]: value }));
  } catch { /* 下次按最小结构画。 */ }
}

/** 上次记下的结构；本机没有记录时是 `undefined`。取值时逐项校验，坏数据按没有处理。 */
export const rememberedShape = <K extends keyof ConfigurationShape>(key: K): Shapes[K] => shapes()[key];

const on = (value: unknown): boolean => value === true;
const count = (value: unknown, max: number): number => Number.isInteger(value) && (value as number) > 0 ? Math.min(value as number, max) : 0;
const list = <T>(value: unknown, max: number, item: (entry: unknown) => T): T[] => Array.isArray(value) ? value.slice(0, max).map(item) : [];

/* ---------- 构件：类名与正式组件同几何 ---------- */

const wait = 'disabled data-skeleton-action';
const text = (width = '60%') => `<span class="skeleton skeleton-text" style="width:${width}"></span>`;
const input = (width = '100%') => `<span class="skeleton ui-configuration-skeleton-input" style="width:${width}"></span>`;
/** 图标、徽章这类定尺寸的块：只放在 flex 行里。 */
const block = (width: string, height: string) => `<span class="skeleton shrink-0" style="width:${width};height:${height}"></span>`;
const chip = (width = '3em') => block(width, '24px');
const icon = () => block('var(--icon-inline)', 'var(--icon-inline)');
const button = (label: string, variant: 'primary' | 'secondary' = 'primary', size: 'medium' | 'small' = 'medium') =>
  islandButton({ label, variant, size, attrs: wait });
const footer = (content: string, status = '') => `<div class="-ml-3 flex flex-wrap items-center justify-end gap-3 rounded-b-2xl border-t border-separator-border bg-card-footer px-3 py-3">${status ? `<div class="mr-auto min-w-0 text-body-2-regular text-text-secondary">${status}</div>` : ''}${content}</div>`;
const stack = (content: string, divided = false) => `<div class="flex flex-col gap-4 ${divided ? 'border-t border-separator-border ' : ''}py-4 pr-3">${content}</div>`;
const heading = (name: string, aside: string, mark: boolean) => {
  const label = `<p class="w-full px-3 text-body-2-medium text-text-secondary">${mark ? `<span class="inline-flex items-center gap-1.5">${icon()}${name}</span>` : name}</p>`;
  return aside ? `<div class="flex w-full flex-wrap items-center justify-between gap-2"><div class="min-w-40 flex-1">${label}</div><div class="flex min-w-0 max-w-full">${aside}</div></div>` : label;
};
const section = (name: string, content: string, actions = '', { aside = '', status = '', mark = false } = {}) =>
  `<section aria-label="${name}" class="flex w-full flex-col gap-2 wrap-anywhere">${heading(name, aside, mark)}<div class="flex w-full flex-col rounded-2xl bg-background-secondary-default pl-3">${content}${actions ? footer(actions, status) : ''}</div></section>`;
const controlRow = (label: string, description: string, control: string) => `<div class="flex min-h-[52px] w-full items-center justify-between gap-4 py-2.5 pr-2.5 border-b border-separator-border last:border-b-0"><div class="flex min-w-0 flex-col"><p class="text-body-regular text-text-primary">${label}</p>${description ? `<p class="text-body-2-regular text-text-secondary">${description}</p>` : ''}</div>${control}</div>`;
const row = (label: string, description = '', control = 'ui-configuration-skeleton-toggle') => controlRow(label, description, `<span class="skeleton ${control}"></span>`);
/* 只读一句读数的行（「每 3 个月」）：右边是一段文字宽的占位，行高同开关行。 */
const valueRow = (label: string, width = '4em') => controlRow(label, '', text(width));
const help = (content: string) => `<p class="text-body-2-regular text-text-secondary">${content}</p>`;
const fieldLabel = (label: string) => `<p class="text-body-medium text-text-primary">${label}</p>`;
const inputField = (label: string, hint = '') => `<div class="flex w-full flex-col items-start gap-1"><span class="flex items-center gap-0.5 text-body-medium text-text-primary">${label}</span>${input()}${hint ? `<span class="pt-px text-caption-1-medium text-text-secondary">${hint}</span>` : ''}</div>`;
const selectField = (label: string) => `<div class="flex flex-col gap-1">${fieldLabel(label)}${islandSelect(text('8em'))}</div>`;
const check = (label: string) => `<span class="flex items-center gap-2 text-body-regular text-text-primary">${block('16px', '16px')}${label}</span>`;
const marked = (label: string) => `<span class="inline-flex items-center gap-1">${icon()}${label}</span>`;
/** 折叠行（`Disclosure` 的 summary）：箭头与名字；展开时箭头转下。 */
const summary = (label: string, open = false) => `<span class="flex w-fit items-center gap-1 text-body-2-medium text-text-secondary">${islandGlyph('chevron-right', `size-(--icon-inline) shrink-0${open ? ' rotate-90' : ''}`)}${label}</span>`;
/* 读数一行一条；缺工具的 FFmpeg、untrunc 两行是一段说明加一条下载链接，画成三行字。 */
const DEPENDENCY_FACTS = new Set(['FFmpeg', 'untrunc']);
const facts = (terms: string[]) => `<dl class="ui-settings-facts flex flex-col">${terms.map(term => `<div class="flex min-h-11 items-center justify-between gap-4 border-b border-separator-border py-2.5 pr-3 last:border-b-0"><dt class="flex max-w-1/2 min-w-0 shrink-0 items-center gap-2 text-body-regular text-text-secondary">${term}</dt><dd class="flex min-w-0 flex-wrap items-center justify-end gap-2 text-body-regular text-text-primary">${DEPENDENCY_FACTS.has(term) ? text('100%') + text('80%') + text('6em') : text('6em')}</dd></div>`).join('')}</dl>`;

/* ---------- 来源凭据：站点清单是静态登记 ---------- */

interface CredentialProvider { provider: string; label: string; requirement: string; fields?: string[]; why?: string; where?: string; howto?: string }
/** 与 `/api/follow/credentials` 的静态部分一致，由 `tests/test_follow_web.py` 对照接口核对。 */
export const CREDENTIAL_PROVIDERS: readonly CredentialProvider[] = CREDENTIAL_REGISTRY;

export interface CredentialSkeletonRow extends CredentialProvider { done: boolean; open: boolean }

/** 骨架里每一行：站点、分组与要的字段取自登记；配好没有取自上次记录，没有记录时按都没配。
 *  展开规则与终态同一条：必填且没配好的展开。 */
export function credentialSkeletonRows(shape = rememberedShape('credentials')): CredentialSkeletonRow[] {
  const done = new Set(list(shape?.done, 64, String));
  return CREDENTIAL_PROVIDERS.map(entry => {
    const configured = done.has(entry.provider);
    return { ...entry, done: configured, open: entry.requirement === 'required' && !configured };
  });
}

function credentialRow(row: CredentialSkeletonRow): string {
  const fields = row.fields ?? [];
  const configurable = row.requirement !== 'none' && row.requirement !== 'blocked';
  /* 徽章位：状态一枚，没配好时每个缺的字段再一枚。 */
  const chips = chip() + (configurable && !row.done ? fields.map(() => chip('4.5em')).join('') : '');
  const head = `<span class="flex min-w-0 flex-wrap items-center gap-2">${block('14px', '14px')}<b class="min-w-0 text-body-medium wrap-anywhere text-text-primary">${esc(row.label)}</b>${chips}</span>`;
  if (!configurable) {
    return `<div class="flex flex-wrap items-center gap-3 border-b border-separator-border px-6 py-5 last:border-b-0 max-sm:px-4">${head}${row.requirement === 'blocked' && row.why ? help(esc(row.why)) : ''}</div>`;
  }
  const form = row.open ? '<div class="flex flex-col gap-2 pt-3"><div class="flex flex-col gap-3">'
    + help(`${esc(row.why ?? '')}${row.where ? ' Get credentials' : ''}`) + (row.howto ? help(esc(row.howto)) : '')
    + `<div class="flex w-full flex-col gap-3">${fields.map(name => inputField(esc(name))).join('')}</div>`
    + `<div class="flex flex-wrap items-center gap-2">${button('Save settings')}</div>${summary('Credential file')}</div></div>` : '';
  return `<div class="flex flex-col gap-2 border-b border-separator-border px-6 py-5 last:border-b-0 max-sm:px-4">${head}<div>${summary(row.done ? 'Change credentials' : 'Enter credentials', row.open)}${form}</div></div>`;
}

export function credentialsSkeleton(): string {
  const rows = credentialSkeletonRows();
  const pending = rows.filter(row => row.requirement === 'required' && !row.done).length;
  const groups = [
    ['Credentials available', rows.filter(row => row.requirement !== 'none' && row.requirement !== 'blocked')],
    ['No credentials needed', rows.filter(row => row.requirement === 'none')],
    ['Not supported yet', rows.filter(row => row.requirement === 'blocked')],
  ] as const;
  const body = groups.filter(([, items]) => items.length).map(([name, items]) => `<div class="flex flex-col gap-2"><h4 class="text-body-medium text-text-secondary">${name}</h4><div class="min-w-0 border border-separator-border bg-background-primary-default rounded-surface flex flex-col overflow-hidden">${items.map(credentialRow).join('')}</div></div>`).join('');
  return section('Source credentials', stack(`<div class="flex flex-col gap-4">${body}</div>`), '', { aside: pending ? text('5em') : '' });
}

/* ---------- 资源搜索：索引器条数随配置 ---------- */

export function indexersSkeleton(): string {
  const open = list(rememberedShape('indexers')?.open, 20, on);
  const rows = open.map(expanded => `<div class="min-w-0 border-t border-separator-border pt-2"><span class="flex w-full min-w-0 items-center gap-1 text-body-2-medium">${islandGlyph('chevron-right', `size-(--icon-inline) shrink-0 text-text-secondary${expanded ? ' rotate-90' : ''}`)}${text('6em')}${text('12em')}</span>`
    + (expanded ? `<div class="flex flex-col gap-2 pt-3"><div class="flex min-w-0 flex-col gap-4">${inputField('Name')}${inputField('Torznab URL')}${inputField('API key')}<div class="flex flex-wrap items-center gap-x-6 gap-y-2">${check('Enabled')}${button('Remove', 'secondary', 'small')}</div></div></div>` : '')
    + '</div>').join('');
  return section('Resource search', stack(`<div class="flex min-w-0 flex-col gap-4">${summary('Indexer connection help')}${rows}</div>`), button('Add indexer', 'secondary') + button('Save settings'));
}

/* ---------- 浏览器添加 JAV ---------- */

export function javBrowserSkeleton(): string {
  const shape = rememberedShape('javBrowser');
  const enabled = on(shape?.enabled);
  const status = '<div class="min-w-0 bg-background-primary-default rounded-2xl shadow-card p-5 border border-border-button-default flex flex-col gap-3">'
    + `<div class="flex flex-wrap items-center justify-between gap-3"><span class="text-body-medium text-text-primary">Peach userscript</span>${text('4em')}</div>`
    + `<div class="flex flex-wrap items-center justify-between gap-3"><span class="text-body-regular text-text-secondary">Add from browser</span>${chip()}</div>`
    + `<p class="text-caption-1-regular text-text-secondary">${text('70%')}</p>`
    + `<div class="flex flex-wrap items-center gap-2">${button('Detect again', 'secondary')}</div></div>`;
  return section('Add JAV from browser', stack(`<div class="flex min-w-0 flex-col gap-4">${status}${selectField('Download channel for browser adds')}`
    + `${on(shape?.ready) ? '' : help('Add a cloud drive that supports cloud downloads to the media library, then set up its account and target folder.')}${inputField('Peach URL')}</div>`),
  (enabled ? button('Turn off browser adds', 'secondary') : '') + button(enabled ? 'Update channel and token' : 'Enable and generate token'));
}

/* ---------- CloudDrive 代理：账号数随配置 ---------- */

const proxyEditor = (label: string, proxy: boolean) => `<div class="flex min-w-0 flex-col gap-3">${fieldLabel(label)}${islandSelect(text('6em'))}`
  + (proxy ? `<div class="flex flex-wrap gap-3"><div class="min-w-40 flex-1">${inputField(`${label} host`)}</div><div class="w-full sm:w-28">${inputField(`${label} port`)}</div></div>${summary('Proxy authentication')}` : '') + '</div>';

export function cloudProxySkeleton(): string {
  const shape = rememberedShape('cloudProxy');
  const accounts = list(shape?.accounts, 12, entry => Array.isArray(entry) ? [on(entry[0]), on(entry[1])] as const : [false, false] as const);
  const unlinked = count(shape?.unlinked, 12);
  const body = accounts.length || unlinked
    ? Array.from({ length: unlinked }, () => `<div class="flex min-w-0 flex-col gap-1">${fieldLabel(marked(text('6em')))}${help(text('9em'))}</div>`).join('')
      + accounts.map(([data, api]) => `<div class="flex min-w-0 flex-col gap-4 border-t border-separator-border pt-4">${fieldLabel(marked(text('8em')))}${help(text('50%'))}${proxyEditor('Data proxy', data)}${proxyEditor('API proxy', api)}<div class="flex justify-end">${button('Save settings')}</div></div>`).join('')
    : help(text('60%'));
  return section('CloudDrive proxy', stack(`${help(CLOUD_PROXY_HELP)}<div class="flex min-w-0 flex-col gap-4">${body}</div>`), button('Reload', 'secondary'));
}

/* ---------- 媒体库与入库 ---------- */

const field = (label: string, control: string, className: string) =>
  `<div class="flex min-w-0 flex-col gap-1 ${className}"><span class="flex items-center gap-0.5 text-body-medium text-text-primary" aria-hidden="true">${label}</span>${control}</div>`;
const folderRow = (libraries: number) => `<div data-folder-row class="@container flex flex-col gap-2 rounded-2lg border border-separator-border bg-background-primary-default p-3">
    <div class="flex items-start gap-2"><span class="min-w-0 flex-1">${input()}</span>${islandButton({ glyph: 'folder-search', variant: 'secondary', attrs: wait })}</div>
    <div class="flex flex-wrap items-end gap-2"><div class="flex w-full flex-wrap items-start gap-2">${field('Source', islandSelect(text('6em')), 'w-full @lg:w-60')}${field('Read policy', islandSelect(text('4em')), 'w-full @lg:w-32')}${libraries > 1 ? field('Move to media library', islandSelect(text('4em')), 'w-full @lg:w-48') : ''}</div></div>
  </div>`;
/* 媒体库卡与 `cardClass({ variant: 'raised', padding: 'none' })` 同一组类名。 */
const libraryBlock = (folders: number, libraries: number) => `<div data-library-block class="min-w-0 bg-background-primary-default rounded-2xl shadow-card flex flex-col p-2">
    <div data-library-head>${islandButton({ label: 'Auto-detect', variant: 'secondary', attrs: wait })}${input()}<span class="skeleton ui-configuration-skeleton-input" style="width:136px"></span>${islandSelect(text('4em'), { prefix: 'Handling' })}</div>
    <div data-library-folders>${folderRow(libraries).repeat(folders)}<div class="flex">${islandButton({ label: 'Add folder', variant: 'secondary', attrs: wait })}</div></div></div>`;
/* 说明区是固定文字：常显那一句照原文写，对比表收着，只画它的展开行。 */
const legend = `<div data-policy-legend class="flex flex-col gap-1"><p class="text-body-2-regular text-text-secondary">${POLICY_SUMMARY}</p>`
  + '<span class="flex items-center gap-1 text-body-2-medium text-text-secondary">Compare the three handling options</span></div>';
const cloudHelp = '<p class="text-body-2-regular text-text-secondary">With the “Proxy protection” read policy, automatic video reads are limited.</p>'
  + '<div class="flex flex-col gap-3"><span class="flex items-center gap-1 text-body-2-medium text-text-secondary">CloudDrive setup help</span></div>';

/** 每个媒体库几个文件夹：上次的记录，没有时一组一个文件夹。 */
export function mediaSkeletonShape(shape = rememberedShape('media')): MediaShape {
  const folders = list(shape?.folders, 12, entry => count(entry, 50)).filter(Boolean);
  return folders.length ? { folders, cloud: on(shape?.cloud) } : { folders: [1], cloud: false };
}

/** 自动发现新文件：三行开关是固定的；开着时的说明、Webhook 行与前缀表随配置。 */
export function discoverySkeleton(): string {
  const shape = rememberedShape('discovery');
  const enabled = on(shape?.enabled);
  const cloud = enabled && on(shape?.cloud);
  const webhook = cloud && on(shape?.webhook);
  const prefixRow = `<div class="flex items-start gap-2"><span class="min-w-0 flex-1">${input()}</span>${islandSelect(text('4em'), { prefix: 'Mapped folder' })}${islandButton({ glyph: 'trash', variant: 'secondary', attrs: wait })}</div>`;
  return section('Discover new files automatically', stack(`<div class="flex flex-wrap items-center gap-2"><span class="text-body-regular text-text-secondary">Local watching</span>${chip()}</div>`)
    + row('Import new files automatically', enabled ? text('10em') : '') + row('Watch local folders', enabled && on(shape?.watchLocal) ? text('12em') : '')
    + row('Receive CloudDrive2 notifications') + (cloud ? controlRow('Webhook settings', text('20em'), '') : '')
    + (webhook ? stack(summary('View settings'), true) : '')
    + (cloud ? stack(`<div class="flex flex-col gap-3">${fieldLabel('Cloud path prefix')}<div class="flex flex-col gap-3">${prefixRow.repeat(count(shape?.prefixes, 20))}</div><div>${button('Add prefix', 'secondary')}</div></div>`, true) : ''),
  (webhook ? button('Rotate secret', 'secondary') : '') + button('Save settings'));
}

/** 媒体库与目录：图例、每个媒体库的标题行、文件夹行与它自己的添加键，最下面添加媒体库与底部动作。 */
const media = () => {
  const shape = mediaSkeletonShape();
  return section('Media libraries and folders', stack(`${legend}<div class="flex flex-col gap-4">${shape.folders.map(folders => libraryBlock(folders, shape.folders.length)).join('')}</div>
  <div class="self-start">${button('Add media library', 'secondary')}</div>
  <p class="text-body-2-regular text-text-secondary">${LIBRARY_FOLDER_HELP}</p>
  ${shape.cloud ? cloudHelp : ''}<span class="text-body-medium text-text-primary">${text('15em')}</span>`),
  button('Save settings'), { status: 'Peach restarts after saving.' })
  + (shape.cloud ? cloudProxySkeleton() : '')
  + discoverySkeleton()
  + section('Code recognition rules', stack(`${text('90%')}${text('60%')}<span class="skeleton ui-configuration-skeleton-input" style="width:100%;height:88px"></span>`), button('Save settings'))
  + section('Video previews', row('Generate video previews', 'Generate contact sheets and timeline previews for local videos; when off, duration and resolution are still probed per import rules.')
    + row('Timeline previews', 'Samples frames at the chosen interval; only videos on local disks are processed.', 'ui-configuration-skeleton-select')
    + row('Frame decoding method', 'Used to generate covers, contact sheets and timelines.', 'ui-configuration-skeleton-select'));
};

/* ---------- 来源与订阅 ---------- */

const subscriptions = () => `<div>${button('Scraping sources and sign-in status', 'secondary')}</div>`
  + credentialsSkeleton()
  + section('Follow scraping', controlRow('Check for updates automatically', '', `<span class="flex items-center gap-2"><span class="skeleton ui-configuration-skeleton-toggle"></span><span class="skeleton ui-configuration-skeleton-input" style="width:96px"></span></span>`)
    + valueRow('Feed fetching') + row('Initial scrape range', '', 'ui-configuration-skeleton-select') + valueRow('Avatar refresh') + valueRow('Favicon refresh'))
  + indexersSkeleton()
  + section('Catalog sites', stack(`<p class="text-body-2-regular text-text-secondary">${ENTRY_LINKS_HELP}</p>${inputField(marked('JavDB URL'), ENTRY_LINKS_HINT)}${inputField(marked('MISSAV URL'), ENTRY_LINKS_HINT)}`), button('Save settings'));

/* ---------- 下载渠道：云下载与 PikPak 两块随媒体库里的网盘出现 ---------- */

const downloads = () => {
  const shape = rememberedShape('downloads');
  const pikpak = on(shape?.pikpak);
  const roots = on(shape?.pikpakRoots) ? selectField(marked('Media folder mapped to the PikPak root'))
    : `<div class="flex flex-col gap-1">${fieldLabel(marked('Media folder mapped to the PikPak root'))}${help('First add the PikPak mount folder under “Media libraries and import”.')}</div>`;
  const cloud = on(shape?.cloud) ? section('Cloud download', stack(inputField('CloudDrive2 URL') + inputField('CloudDrive2 API token', 'Requires offline task permission.')
    + (on(shape?.has115) ? inputField(marked('115 target folder'), 'Must be inside a cloud path prefix that is imported automatically.') : '')
    + (pikpak ? inputField(marked('PikPak target folder'), 'The folder must already exist.') + roots : '')
    + inputField('Wait limit (hours)', text('14em'))), button('Check connection', 'secondary') + button('Save settings')) : '';
  const loggedIn = on(shape?.pikpakLoggedIn);
  const account = pikpak ? section('PikPak account', loggedIn ? facts(['Account', text('4em')]) : stack(inputField('Account') + inputField('Password') + check('Save the password and sign in again automatically when the session expires')),
    loggedIn ? button('Sign out', 'secondary') : (on(shape?.browserLogin) ? button('Sign in with browser', 'secondary') : '') + button('Sign in'), { aside: chip(), mark: true }) : '';
  return cloud + account + javBrowserSkeleton();
};

/* ---------- 网络与访问 ---------- */

const ACCESS_HELP: Record<string, string> = {
  legacy: 'A system-generated access code is in use. Set your own password, or turn off the sign-in requirement.',
  locked: 'Access settings could not be read; check the config file on this computer.',
  password: 'A password is set. New devices must sign in; checking “Stay signed in” keeps them signed in for 30 days.',
};
const TUNNEL_HELP = {
  quick: 'For temporary previews; the address is random and changes after a restart. Set an access password before starting.',
  named: 'Uses the fixed domain you bound in Cloudflare. Set an access password before starting.',
};

function accessBody(mode: string): string {
  const pair = mode === 'locked' ? '' : inputField(mode === 'password' ? 'New access password *' : 'Set access password *', 'At least 8 characters. Other devices will need to sign in again after saving.')
    + inputField(mode === 'password' ? 'Confirm new access password *' : 'Confirm access password *');
  return (ACCESS_HELP[mode] ? help(ACCESS_HELP[mode]) : '') + (mode === 'open' ? block('100%', '64px') : '')
    + (mode === 'password' || mode === 'legacy' ? check('Turn off access password') : '')
    + (mode === 'password' ? inputField('Current access password *') : '') + pair;
}

const network = () => {
  const shape = rememberedShape('network');
  /* 没有记录时按服务端的默认状态画：没有访问设置文件就是 `legacy`（系统生成的口令）。 */
  const mode = typeof shape?.access === 'string' && shape.access ? shape.access : 'legacy';
  const named = on(shape?.tunnelNamed);
  const tunnel = (named && on(shape?.tunnelNamedMode)
    ? help(TUNNEL_HELP.named) + inputField('Public hostname', 'The hostname in Cloudflare Zero Trust that points to this computer.') + inputField('Tunnel token', text('16em'))
    : help(TUNNEL_HELP.quick)) + (on(shape?.tunnelNote) ? block('100%', '64px') : '');
  const addresses = count(shape?.addresses, 3);
  const addressFields = Array.from({ length: addresses }, (_, i) => `<div class="flex min-w-0 flex-wrap items-end gap-2"><div class="min-w-0 flex-1">${inputField(['Local address', 'Phone address', 'Backup IP address'][i]!)}</div>${button('Copy address', 'secondary')}</div>`).join('');
  return (addresses || on(shape?.port) ? section('Access address', stack(addressFields + (addresses ? block('100%', '40px') : '')
      + (on(shape?.networkEditable) ? `<div class="flex flex-col gap-1.5">${fieldLabel('Who can access')}${block('min(100%, 20em)', '36px')}</div>` + (on(shape?.lan) ? inputField('LAN access address') : '') : '')
      + (on(shape?.port) ? inputField('Port') : '')), on(shape?.port) ? button('Save settings') : '',
      on(shape?.port) ? { status: 'Peach restarts after saving and redirects to the new address.' } : {}) : '')
    + section('Access password', stack(accessBody(mode)), mode === 'locked' ? '' : button('Save settings'))
    + section('Cloudflare public entry', stack((named ? block('10.5em', '36px') : '') + tunnel),
      button('Start public entry', named ? 'secondary' : 'primary') + (named ? button('Save settings') : ''), { aside: chip() })
    + section('Peach proxy', row('Connection method', '', 'ui-configuration-skeleton-select') + (on(shape?.proxyAddress) ? stack(inputField('Proxy address'), true) : ''), button('Save settings'));
};

/* ---------- 应用与维护 ---------- */

/** 运行信息里总在的几项；FFmpeg、untrunc 缺失时才多一行，按上次记录。 */
const RUNTIME_FACTS = ['Version', 'Operating system', 'Data folder', 'Settings file', 'Log folder'];

const maintenance = () => {
  const shape = rememberedShape('maintenance');
  const releaseFacts = ['Current version', 'Install method', 'Update channel', 'Latest version', 'Download contents'].slice(0, Math.max(4, count(shape?.releaseFacts, 5)));
  const releaseNotes = count(shape?.releaseNotes, 4);
  const storageRows = count(shape?.storageRows, 12);
  const storageNotes = count(shape?.storageNotes, 3);
  const runtime = list(shape?.facts, 12, entry => esc(String(entry)));
  const idle = `<span class="self-start">${chip('6em')}</span>`;
  /* 数据上传与卸载两块服务端总会给；没有记录时也画上，只是不画随状态出现的提示。 */
  const given = (value: unknown) => shape ? on(value) : true;
  const reporting = given(shape?.reporting) ? row('Send version stats and error diagnostics (recommended)', 'Uploads version, system info, error type, code location and occurrence count.') + (on(shape?.reportingIdle) ? stack(idle, true) : '') : '';
  const sharing = given(shape?.sharing) ? `<div class="border-t border-separator-border">${row('Upload library and taste details', on(shape?.sharingNotice) ? text('12em') : '')}${on(shape?.sharingIdle) ? stack(idle, true) : ''}${footer(button('Preview upload', 'secondary'))}</div>` : '';
  return section('Check for updates', facts(releaseFacts) + (releaseNotes ? stack(help(text('50%')).repeat(releaseNotes), true) : ''),
    button('Check for updates'), { aside: chip('4em'), status: text('5em') })
    + section('Automatic updates', row('Check for new versions automatically') + row('Download updates automatically') + row('Check frequency', on(shape?.autoUpdateHelp) ? text('12em') : '', 'ui-configuration-skeleton-select'), button('Save settings'))
    + section('Launch at startup', row('Start Peach when the computer starts') + row('Start the tray only, without opening the web page') + row('Create a desktop shortcut', on(shape?.desktopNote) ? text('12em') : '')
      + (on(shape?.startupNote) ? stack(help(text('60%')), true) : ''), button('Save settings'))
    + section('Video playback', row('Transcoding method', 'Used to transcode video during playback.', 'ui-configuration-skeleton-select'))
    + section('Storage', facts(['Data folder', 'Disk'])
      + (storageRows ? Array.from({ length: storageRows }, () => controlRow(text('6em'), '', text('4em'))).join('') : stack(help('After measuring, shows the space used by each kind of data and lets you clear caches and old backups.'), true))
      + (storageNotes ? stack(help(text('80%')).repeat(storageNotes), true) : ''),
    button('Change location', 'secondary') + button(storageRows ? 'Measure again' : 'Measure usage'))
    + (reporting || sharing ? section('Data upload', reporting + sharing) : '')
    + section('Runtime info', facts(runtime.length ? runtime : RUNTIME_FACTS))
    + `<section aria-label="Setup tutorial" class="w-full"><div class="flex w-full flex-col rounded-2xl bg-background-secondary-default pl-3">${controlRow('Setup tutorial', '', button('Reopen tutorial', 'secondary'))}</div></section>`
    + (given(shape?.uninstall) ? section('Uninstall Peach', (on(shape?.uninstallHelp) ? stack(help('Uninstalling removes the Peach program itself; original media files are kept.')) : '')
      + row('Full uninstall', 'Also delete settings, the local database, watch history, credentials and caches') + stack(summary('Data folder'), true), button('Uninstall Peach'), { status: text('16em') }) : '');
};

/** 各分区复用正式表单的 Section、Stack 与 SettingsRow 几何。 */
export function configurationContentSkeleton(chosen: string): string {
  switch (chosen) {
    case 'System diagnostics': return diagnosticsSkeleton();
    case 'Sources and subscriptions': return subscriptions();
    case 'Download channels': return downloads();
    case 'Network and access': return network();
    case 'App and maintenance': return maintenance();
    default: return media();
  }
}

export function configurationSkeleton(chosen = 'Media libraries and import'): string {
  const nav = `<div class="ui-board-local-nav" data-section-nav data-section-items>${Object.values(CONFIGURATION_SECTIONS).map(title => `<button type="button" tabindex="-1" aria-selected="${title === chosen}">${title}</button>`).join('')}</div>`;
  return `<div class="peach-react"><div class="ui-configpage">${nav}<div class="flex min-w-0 flex-col gap-6">${configurationContentSkeleton(chosen)}</div></div></div>`;
}

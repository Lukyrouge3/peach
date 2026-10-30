/* 设置面板：顶栏齿轮打开的那一屏浮层，左栏分区、右边一组组设置行。
 *
 * 常驻组件 `settings-panel`（`router/managed-routes.tsx` 的常驻表）：第一次打开时壳的 `loadSettingsPanel` 建一枚
 * `[data-settings-host]`，常驻组件的 `place` 把它放进 body 末尾，路由树在同一个任务里把面板画成它的子节点。
 * 之后开合只换 `hidden`，分区、滚动位置之外的状态跨次打开保留。壳经 `configureSettingsPanel` 给的句柄开合：
 * 句柄写本模块的 store 再 `flushSync` 通知，返回时面板已经画好，锁滚、取数与焦点紧跟在后面。界面偏好读写的是
 * 壳递进来的那一份 `appSettings`（`host.store`），改完一项用 `host.changed(effect)` 告诉壳跟着做什么；跟数据库走的
 * 那几项经 `/api/settings` 写（`settings-data.ts`）。
 *
 * 宿主不在 `.peach-react` 里：行、开关、下拉、拉条与色块都是全站共用的遗留控件，外观由
 * `settings-panel.css` 与遗留样式表给。
 *
 * 每次打开时共用控件重画、数值框回到当前值，并重取共享设置。
 * 焦点先交给关闭钮，Tab 在面板里转圈，关掉后还给打开前那一枚。 */
import {
  useLayoutEffect, useRef, useState, useSyncExternalStore,
  type KeyboardEvent, type ReactNode,
} from 'react';
import { flushSync } from 'react-dom';
import { useQuery } from '@tanstack/react-query';
import { ButtonLink } from '@/components/base/buttons/button';
import {
  attachOverlayScrollbar, closeAnchoredMenu, iconSwapHtml, moveGlidePane, revealTexts,
  setActionBusy, setIconSwap, wireHorizontalScroller,
} from '@peach/legacy/ui';

import { normalizeJavImage } from '../../jav-artwork';
import { boundedPreference } from '../../number-setting';
import { GlowSettings } from './glow-settings';
import { Icon, RemixIcon } from './icon';
import { IconSwitch, SelectField } from './legacy-controls';
import { NumberSetting } from './number-setting';
import type { Choice, PanelSettings, SettingsPanelApi, SettingsPanelHost } from './settings-panel-api';
import { fetchSettings, refreshPanelData, SETTINGS_KEY, useSaveSettings } from './settings-data';
import { Note } from '../components/note';
import { SidebarOrder } from './sidebar-order';
import { SettingsDialogClose } from '../components/settings-dialog-close';

/* 左栏的分区，顺序即右边各组的顺序。字形按条目自己的名字取：整列取自 Remix，一家画的笔画
   才一样粗。 */
const SECTIONS = [
  ['Appearance and navigation', 'ri-palette-line'], ['Browsing and playback', 'ri-play-circle-line'],
  ['JAV and new releases', 'jav'], ['Search and recommendations', 'ri-search-line'], ['Content display', 'ri-shield-check-line'],
] as const;

const SORT_OPTIONS: readonly Choice[] = [
  ['seed', 'Random'], ['rating', 'Rating'], ['o', 'Climax count'], ['plays', 'Play count'],
  ['dur', 'Duration'], ['size', 'Size'], ['new', 'Date added'], ['played', 'Watch time'],
];
const DIRECTION_OPTIONS: readonly Choice[] = [['desc', 'descending'], ['asc', 'ascending']];
const JAV_IMAGE_OPTIONS: readonly Choice[] = [['cover', 'Official cover', ''], ['thumbnail', 'Preview image', '']];
/* 新作那一行收不收合集由服务端按数据库里的设置筛，这里的开关只是镜像：真相在 `/api/settings`。 */
const FEED_COMPILATIONS = [
  ['feedHideGroupSetting', 'feedHideGroupCompilations', 'Large compilations', 'Hide large compilations'],
  ['feedHideSoloSetting', 'feedHideSoloCompilations', 'Single-performer compilations', 'Hide single-performer compilations'],
  ['feedHideExcerptSetting', 'feedHideExcerpts', 'Clips', 'Hide clips'],
] as const;
type CompilationKey = typeof FEED_COMPILATIONS[number][1];

const FOCUSABLE = 'button:not([disabled]),input:not([disabled]),textarea:not([disabled]),a[href]';

interface View { open: boolean; closing: boolean; epoch: number; tab: number; configurable: boolean | null }

let host: SettingsPanelHost | null = null;
let view: View = { open: false, closing: false, epoch: 0, tab: 0, configurable: null };
let transition = 0;
let returnFocus: Element | null = null;
const listeners = new Set<() => void>();

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => { listeners.delete(listener) };
}

function notify(): void {
  for (const listener of [...listeners]) listener();
}

/* 写进 store 当场画完：句柄返回时面板已经是新的样子，紧跟着的锁滚、取数与焦点读的都是画好的 DOM。
   这一面抛错、被错误边界卸掉之后没人订阅，写进来的只进 store，不画、不抛。 */
function update(patch: Partial<View>): void {
  view = { ...view, ...patch };
  flushSync(notify);
}

/* Peach 配置入口按当前设备的配置权限放行。 */
async function checkMachine(current: SettingsPanelHost): Promise<void> {
  const epoch = view.epoch;
  const configurable = await current.configurable();
  if (!view.open || view.epoch !== epoch) return;
  update({ configurable });
}

function open(section = ''): void {
  const current = host;
  if (!current) return;
  const requested = SECTIONS.findIndex(([title]) => title === section);
  if (view.open && !view.closing) {
    if (requested >= 0 && requested !== view.tab) update({ tab: requested });
    return;
  }
  /* 设置这一屏盖住整页，任何还开着的锚定弹层都得先收掉：设置有侧栏的设置钮、配色弹层的
     「详细设置」和快捷键几处入口，收在这里就不会漏掉哪一处。 */
  closeAnchoredMenu();
  transition += 1;
  returnFocus ||= document.activeElement;
  current.sound('whoosh');
  document.documentElement.style.overflow = 'hidden';
  document.body.classList.add('settings-open');
  /* 先发取数再画：第一次打开时查询还不存在，这一趟由 `fetchQuery` 建起来，组件画出来读到
     的就是在途的这一份，不会再发第二趟。 */
  const remote = refreshPanelData();
  update({ open: true, closing: false, configurable: null, epoch: view.epoch + 1, tab: requested >= 0 ? requested : view.tab });
  void remote.then((settings) => { if (settings) current.syncRemote(settings) });
  void checkMachine(current);
  queueMicrotask(() => document.getElementById('settingsClose')?.focus());
}

function close(notify = true): void {
  if (!view.open || view.closing) return;
  const ticket = ++transition;
  if (notify) host?.closed?.();
  update({ closing: true });
  const finish = () => {
    if (ticket !== transition || !view.closing) return;
    update({ open: false, closing: false });
    document.documentElement.style.overflow = '';
    document.body.classList.remove('settings-open');
    if (returnFocus instanceof HTMLElement && document.contains(returnFocus)) returnFocus.focus();
    returnFocus = null;
  };
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { queueMicrotask(finish); return }
  document.querySelector('#settingsPanel > [data-settings-card]')?.addEventListener('animationend', finish, { once: true });
  setTimeout(finish, 380);
}

const api: SettingsPanelApi = {
  open,
  close,
  isOpen: () => view.open,
  reveal: (selector) => queueMicrotask(() => document.querySelector(selector)?.scrollIntoView({ block: 'nearest' })),
};

/** 接上壳给的宿主，拿回设置面板的命令式入口。只调一次；壳的 `loadSettingsPanel` 接着在路由树里打开这一面，
 *  画上（收着的）面板之后才交出句柄。 */
export function configureSettingsPanel(next: SettingsPanelHost): SettingsPanelApi {
  host = next;
  return api;
}

/** 常驻表里的那一面：读本模块的 store，宿主还没接上时不画。 */
export function SettingsPanelSurface() {
  const shown = useSyncExternalStore(subscribe, () => view);
  return host ? <SettingsPanel host={host} view={shown} /> : null;
}

function trapTab(event: KeyboardEvent<HTMLElement>): void {
  if (event.key !== 'Tab') return;
  /* 没选中的分区整块 hidden，里面的控件拿不到焦点；圈的两头只在看得见的控件里找。 */
  const focusable = [...event.currentTarget.querySelectorAll<HTMLElement>(FOCUSABLE)]
    .filter((node) => node.getClientRects().length > 0);
  if (!focusable.length) return;
  const first = focusable[0], last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
}

const tabId = (index: number) => `settings-tab-${index}`;
const groupId = (index: number) => `settings-group-${index}`;

/* 左栏当前项由一块滑过去的玻璃标出来，和左侧抽屉是同一件事的两种形态。坐标取 `offsetTop`
   不取屏幕坐标：面板开合自带一段缩放动画，量屏幕坐标会把正在走的那一下吃进来。玻璃跟着指针走，
   指针离开这一列就滑回当前那格；触点没有悬停，碰一下就滑过去等于替用户点了一次，所以挡在外面。 */
function SettingsNav({ tab, epoch, configurable, openConfiguration, onSelect }: {
  tab: number; epoch: number; configurable: boolean | null; openConfiguration(): void; onSelect(index: number): void;
}) {
  const nav = useRef<HTMLDivElement | null>(null);
  const glide = useRef<HTMLSpanElement | null>(null);
  const box = useRef<{ x: number; y: number; w: number; h: number } | null>(null);
  const shown = useRef(tab);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  const place = (active: HTMLElement | null | undefined, animate: boolean) => {
    const pane = glide.current;
    if (!pane) return;
    if (!active || !active.offsetHeight) { pane.hidden = true; return }
    pane.hidden = false;
    const next = { x: active.offsetLeft, y: active.offsetTop, w: active.offsetWidth, h: active.offsetHeight };
    const from = box.current;
    box.current = next;
    moveGlidePane(pane, animate ? from : null, next, 'y');
  };
  const placeRef = useRef(place);
  placeRef.current = place;

  useLayoutEffect(() => {
    const node = nav.current;
    if (!node) return undefined;
    wireHorizontalScroller(node);
    /* 面板收着时这一栏是零尺寸，量不到落点；露出来那一帧、窄屏断点换宽度时都由这一条对齐。 */
    const observer = new ResizeObserver(() => placeRef.current(buttons.current[shown.current], false));
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  useLayoutEffect(() => {
    const moved = shown.current !== tab;
    shown.current = tab;
    placeRef.current(buttons.current[tab], moved);
  }, [tab, epoch]);

  const keys = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const count = SECTIONS.length;
    let next = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % count;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + count - 1) % count;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = count - 1;
    else return;
    event.preventDefault();
    onSelect(next);
    buttons.current[next]?.focus();
  };

  /* 整块是一个 tablist：小标题写成 presentation，不占 tab 的位置，方向键从头走到尾。 */
  return (
    <div data-settings-nav="" data-glass-pane="" role="tablist" aria-label="Settings sections" ref={nav}
      onPointerLeave={(event) => { if (event.pointerType !== 'touch') place(buttons.current[shown.current], true) }}>
      <span data-settings-glide="" aria-hidden="true" hidden ref={glide} />
      <p data-settings-nav-caption="" role="presentation">Settings</p>
      {SECTIONS.map(([title, icon], index) => (
        <button type="button" role="tab" key={title} id={tabId(index)} aria-controls={groupId(index)}
          aria-selected={index === tab} tabIndex={index === tab ? 0 : -1}
          ref={(node) => { buttons.current[index] = node }}
          onClick={() => onSelect(index)} onKeyDown={(event) => keys(event, index)}
          onPointerEnter={(event) => { if (event.pointerType !== 'touch') place(event.currentTarget, true) }}>
          {icon === 'jav' ? <Icon name={icon} /> : <RemixIcon name={icon} />}{title}
        </button>
      ))}
      <div data-settings-service="" role="presentation">
        <button type="button" disabled={configurable !== true} onClick={openConfiguration}
          title={configurable === false ? 'Open Peach settings on the device running Peach' : undefined}>
          <Icon name="folder-cog" />Peach settings<Icon name="chevron-right" />
        </button>
      </div>
    </div>
  );
}

function Group({ index, tab, children, cards = false }: { index: number; tab: number; children: ReactNode; cards?: boolean }) {
  return (
    <section data-setting-group="" data-setting-layout={cards ? 'cards' : undefined}
      id={groupId(index)} role="tabpanel" aria-labelledby={tabId(index)} hidden={index !== tab}>
      <h3>{SECTIONS[index][0]}</h3>
      {children}
    </section>
  );
}

/** 一行开关：整行是 label，点哪儿都切。说明那一句的 id 默认取开关 id 去掉 `Setting` 再接 `Description`。 */
function ToggleRow({ id, title, description, describedBy = `${id.replace(/Setting$/, '')}Description`, checked, onToggle }: {
  id: string; title: string; description?: string; describedBy?: string; checked: boolean; onToggle(on: boolean): void;
}) {
  return (
    <label data-setting-row="">
      <span><b>{title}</b>{description ? <small id={describedBy}>{description}</small> : null}</span>
      <input data-toggle="" type="checkbox" id={id} role="switch" aria-describedby={description ? describedBy : undefined}
        checked={checked} onChange={(event) => onToggle(event.target.checked)} />
    </label>
  );
}

function Row({ title, description, kind, children }: {
  title: string; description?: ReactNode; kind?: 'sort' | 'related'; children: ReactNode;
}) {
  return (
    <div data-setting-row="" data-setting-sort={kind === 'sort' ? '' : undefined}
      data-setting-related={kind === 'related' ? '' : undefined}>
      <span><b>{title}</b>{typeof description === 'string' ? <small>{description}</small> : description}</span>
      {children}
    </div>
  );
}

function SettingsPanel({ host: current, view: shown }: { host: SettingsPanelHost; view: View }) {
  /* 订阅只为重画：读的是活对象 `store.value`，版本号本身不用。 */
  useSyncExternalStore(current.store.subscribe, current.store.version);
  const settings = current.store.value;
  const panel = useRef<HTMLElement | null>(null);
  const card = useRef<HTMLDivElement | null>(null);
  const head = useRef<HTMLDivElement | null>(null);
  const scroll = useRef<HTMLDivElement | null>(null);
  const resync = useRef<(() => void) | null>(null);
  const lastTab = useRef(shown.tab);

  /* 标题下那道影子的门槛是那段留白自己：它长在这一栏的上内边距上，滚掉它就等于两块重合，
     差 4px 时点亮。留白的值只写在 `--settings-gap` 一处，这里读它。 */
  const fade = () => {
    const [box, body] = [card.current, scroll.current];
    if (!box || !body) return;
    const gap = parseFloat(getComputedStyle(box).getPropertyValue('--settings-gap')) || 0;
    box.toggleAttribute('data-scrolled', body.scrollTop > Math.max(gap - 4, 0));
  };
  const fadeRef = useRef(fade);
  fadeRef.current = fade;

  useLayoutEffect(() => {
    const body = scroll.current;
    if (!body || !panel.current) return undefined;
    resync.current = attachOverlayScrollbar(body) ?? resync.current;
    current.attached(panel.current);
    const listener = () => fadeRef.current();
    body.addEventListener('scroll', listener, { passive: true });
    return () => body.removeEventListener('scroll', listener);
  }, [current]);
  /* 换分区、每次打开都回到顶上；换了分区时标题逐字揭示，只开合不放。 */
  useLayoutEffect(() => {
    const moved = lastTab.current !== shown.tab;
    lastTab.current = shown.tab;
    if (scroll.current) scroll.current.scrollTop = 0;
    if (moved && head.current) revealTexts(head.current, 'h2');
    fadeRef.current();
  }, [shown.tab, shown.epoch]);
  /* 换分区、展开收起一组都只切 `hidden`，滚动条的观察器只看子树增删，内容长短变了它不知道。
     每次画完按新的内容长度重量一遍滑块和两端渐隐。 */
  useLayoutEffect(() => { resync.current?.() });

  const epoch = shown.epoch;
  const select = (index: number) => { if (index !== view.tab) { update({ tab: index }); current.selectSection?.(SECTIONS[index][0]) } };
  const save = () => current.store.save();

  return (
    <section data-settings-panel="" id="settingsPanel" hidden={!shown.open} aria-modal="true" role="dialog"
      aria-labelledby="settingsTitle" data-closing={shown.closing ? '' : undefined} ref={panel} onKeyDown={trapTab}
      onClick={(event) => { if (event.target === event.currentTarget) close() }}>
      <div data-settings-card="" ref={card}>
        <div data-settings-head="" ref={head}>
          <h2 id="settingsTitle">{SECTIONS[shown.tab][0]}</h2>
            <SettingsDialogClose id="settingsClose" label="Close settings" onPress={() => close()} />
        </div>
        <SettingsNav tab={shown.tab} epoch={epoch} configurable={shown.configurable} onSelect={select}
          openConfiguration={() => { close(false); current.openConfiguration() }} />
        <div data-settings-scroll="" ref={scroll}>
          <Group index={0} tab={shown.tab} cards>
            <div data-setting-card="">
            <Row title="Theme">
              <IconSwitch id="themeSetting" name="theme" legend="Theme" options={current.themeOptions} value={settings.theme}
                attr="data-theme-choice" variant="themeswitch" epoch={epoch}
                onChoose={(choice) => { settings.theme = choice; save(); current.changed('theme') }} />
            </Row>
            <div data-setting-row="">
              <label htmlFor="glassContrastSetting"><b>Increase contrast</b></label>
              <input type="checkbox" id="glassContrastSetting" data-toggle="" role="switch" checked={current.highContrast()}
                onChange={(event) => current.setHighContrast(event.target.checked)} />
            </div>
            <ToggleRow id="uiSoundsSetting" title="Interface sounds" checked={settings.uiSounds}
              onToggle={(on) => { settings.uiSounds = on; save(); current.changed('uiSounds') }} />
            <ToggleRow id="homeGlowSetting" title="Sidebar glow" checked={settings.homeGlow.on}
              onToggle={(on) => { settings.homeGlow.on = on; save(); current.changed('glow') }} />
            </div>
            <GlowSettings host={current} />
            <section data-setting-block="" aria-labelledby="sidebarOrderTitle">
              <h4 data-settings-subheading="" id="sidebarOrderTitle">Navigation items and order</h4>
              <div data-setting-card="">
                <section data-sidebar-setting=""><SidebarOrder host={current} /></section>
              </div>
            </section>
          </Group>
          <BrowseGroup host={current} tab={shown.tab} epoch={epoch} />
          <JavGroup host={current} tab={shown.tab} epoch={epoch} />
          <Group index={3} tab={shown.tab}>
            <SearchHistoryRow host={current} epoch={epoch} />
            <Row title="Related recommendations">
              <div id="relatedLimitSetting">
                <NumberSetting key={epoch} id="relatedLimitSetting" label="Related recommendations" value={settings.relatedLimit}
                  onApply={(value) => { settings.relatedLimit = value; save() }} />
              </div>
            </Row>
            <Row title="Taste and history"><div className="peach-react"><ButtonLink variant="secondary" href="/taste" onClick={() => close(false)}>Open taste and history</ButtonLink></div></Row>
          </Group>
          <Group index={4} tab={shown.tab}>
            <ToggleRow id="censorSetting" title="SFW mode" describedBy="sfwDescription" checked={current.censored()}
              description="Hide sensitive images and stop hover previews."
              onToggle={(on) => current.setCensored(on)} />
          </Group>
        </div>
      </div>
    </section>
  );
}

interface GroupProps { host: SettingsPanelHost; tab: number; epoch: number }

/* 排序方向那一格叠着两枚箭头，换的只是方向这一件事：整格重写会把旧字形连同它的动画一起丢掉，
   读出来是一次硬切，所以只在这一格还没建起来时写一次。 */
function decorateDirection(field: HTMLElement, ascending: boolean): void {
  const mark = field.querySelector('[data-select-label]');
  if (!mark) return;
  if (!mark.querySelector('[data-icon-swap]')) {
    mark.innerHTML = iconSwapHtml('arrow-up', 'arrow-down', 'a', { className: 'gselectmark', iconClass: 'gselectmark' })
      + '<span data-sort-direction-label></span>';
  }
  setIconSwap(mark, ascending ? 'a' : 'b');
  const label = mark.querySelector('[data-sort-direction-label]');
  if (label) label.textContent = ascending ? 'ascending' : 'descending';
}

/* 「浏览与播放」分两段：作品列表（网格、排序、卡片与悬停）在前，播放在后。转码方式写的是运行 Peach
   那台电脑的配置，在 Peach 配置「应用与维护 → 视频播放」，不在这里（ADR-0103）。 */
function BrowseGroup({ host: current, tab, epoch }: GroupProps) {
  const settings = current.store.value;
  const save = () => current.store.save();
  const random = settings.defaultSort === 'seed';
  const ascending = settings.defaultSortDirection === 'asc';
  return (
    <Group index={1} tab={tab}>
      <h4 data-settings-subheading="">Title list</h4>
      <Row title="Titles per batch">
        <div id="batchSizeSetting">
          <NumberSetting key={epoch} id="batchSizeSetting" label="Titles per batch" value={settings.batchSize}
            onApply={(value) => { settings.batchSize = value || 60; save(); current.changed('batchSize') }} />
        </div>
      </Row>
      <Row title="Default sort" kind="sort">
        <div data-setting-sort-controls="">
          <SelectField id="defaultSortSetting" label="Default sort" options={SORT_OPTIONS} value={settings.defaultSort} epoch={epoch}
            onPick={(value) => { settings.defaultSort = value; save(); current.changed('defaultSort') }} />
          <SelectField id="defaultSortDirectionSetting" label="Default sort direction" options={DIRECTION_OPTIONS}
            value={ascending ? 'asc' : 'desc'} hidden={random} disabled={random} epoch={epoch}
            onPick={(value) => { settings.defaultSortDirection = value; save(); current.changed('sortDirection') }}
            decorate={(field) => decorateDirection(field, ascending)} />
        </div>
      </Row>
      <Row title="Video card size">
        <IconSwitch id="javSizeSetting" name="video-size" legend="Video card size" options={current.videoLayouts}
          value={current.videoLayout()} attr="data-video-layout" variant="javimageswitch" text epoch={epoch}
          onChoose={(layout) => current.setVideoLayout(layout)} />
      </Row>
      <label data-setting-row=""><span><b>Merge parts and versions</b></span>
        <input type="checkbox" id="groupCollapseSetting" data-toggle="" role="switch" checked={settings.groupCollapse}
          onChange={(event) => { settings.groupCollapse = event.target.checked; save(); current.changed('groupCollapse') }} />
      </label>
      <Row title="Hover preview delay">
        <div id="hoverDelaySetting">
          <NumberSetting key={epoch} id="hoverDelaySetting" label="Hover preview delay" value={settings.hoverDelaySeconds}
            onApply={(value) => {
              settings.hoverDelaySeconds = boundedPreference(value, 0, 60, 5); save(); current.changed('hoverDelay');
            }} />
        </div>
      </Row>
      <h4 data-settings-subheading="">Play</h4>
      <PlaybackRows host={current} epoch={epoch} />
    </Group>
  );
}

function JavGroup({ host: current, tab, epoch }: GroupProps) {
  const settings = current.store.value;
  const save = () => current.store.save();
  return (
    <Group index={2} tab={tab}>
      <h4 data-settings-subheading="">Title display</h4>
      <NameLanguageSetting host={current} epoch={epoch} />
      <Row title="Default image">
        <IconSwitch id="javImageSetting" name="jav-image" legend="Default image" options={JAV_IMAGE_OPTIONS}
          value={settings.javImage} attr="data-jav-image-choice" variant="javimageswitch" text epoch={epoch}
          onChoose={(choice) => { settings.javImage = normalizeJavImage(choice); save(); current.changed('javImage') }} />
      </Row>
      <h4 data-settings-subheading="">New release display</h4>
      <Row title="Count shown">
        <div id="feedLimitSetting">
          <NumberSetting key={epoch} id="feedLimitSetting" label="New releases shown" value={settings.feedLimit}
            onApply={(value) => { settings.feedLimit = boundedPreference(value, 1, 100, 12); save(); current.changed('feedLimit') }} />
        </div>
      </Row>
      <ToggleRow id="feedAutoScrollSetting" title="Auto-scroll" checked={settings.feedAutoScroll}
        onToggle={(on) => { settings.feedAutoScroll = on; save(); current.changed('feedAutoScroll') }} />
      {FEED_COMPILATIONS.map(([id, key, label, title]) => (
        <CompilationToggle key={id} host={current} id={id} settingKey={key} label={label} title={title} />
      ))}
    </Group>
  );
}
function NameLanguageSetting({ host: current, epoch }: { host: SettingsPanelHost; epoch: number }) {
  const query = useQuery({ queryKey: SETTINGS_KEY, queryFn: ({ signal }) => fetchSettings(signal), staleTime: 0 });
  const save = useSaveSettings();
  const [pending, setPending] = useState<'zh-CN' | 'ja' | null>(null);
  const language = query.data?.performerNameLanguage;
  return <>
    <Row title="Actress names" description={<small data-copy-key="performer-name-language-help">Names and aliases show only the spelling in the chosen language; when none exists, the current name is kept. The preference is saved in the database, so other devices read the same setting.</small>}>
      <SelectField id="performerNameLanguageSetting" label="Actress names" epoch={epoch}
        options={[["zh-CN", "Chinese"], ["ja", "Japanese original"]]}
        value={pending ?? language ?? current.store.value.performerNameLanguage}
        disabled={query.isPending || query.isError || save.isPending || !language} busy={save.isPending}
        onPick={(value) => {
          if (save.isPending || (value !== 'zh-CN' && value !== 'ja') || value === language) return;
          setPending(value);
          save.mutate({ performerNameLanguage: value }, {
            onSuccess: (saved) => { current.syncRemote(saved); current.receipt('Name display preference saved') },
            onError: (error) => current.failure('Save name display preference', error),
            onSettled: () => setPending(null),
          });
        }} />
    </Row>
    {query.isError ? <Note tone="error">Couldn't read the name preference from the database; reopen settings.</Note> : null}
  </>;
}
/* 合集开关由服务端判，列表、未读数和补封面排队都跟着它，所以先存到服务端再重画；往返期间开关
   停在新位置、挂忙态，失败退回原位。 */
function CompilationToggle({ host: current, id, settingKey, label, title }: {
  host: SettingsPanelHost; id: string; settingKey: CompilationKey; label: string; title: string;
}) {
  const save = useSaveSettings();
  const [pending, setPending] = useState<boolean | null>(null);
  const box = useRef<HTMLInputElement | null>(null);
  const settings: PanelSettings = current.store.value;
  const toggle = (on: boolean) => {
    setPending(on);
    setActionBusy(box.current);
    save.mutate({ [settingKey]: on }, {
      onSuccess: (saved) => {
        settings[settingKey] = saved[settingKey] === true;
        current.store.save();
        current.changed('feedCompilations');
        current.receipt(on ? `New releases now hide ${label}` : `New releases now list ${label}`);
      },
      onError: (error) => current.failure(`Save ${label} toggle`, error),
      onSettled: () => { setPending(null); setActionBusy(box.current, false) },
    });
  };
  return (
    <label data-setting-row="">
      <span><b>{title}</b></span>
      <input data-toggle="" type="checkbox" id={id} role="switch" ref={box}
        checked={pending ?? settings[settingKey]} onChange={(event) => toggle(event.target.checked)} />
    </label>
  );
}

function PlaybackRows({ host: current, epoch }: Omit<GroupProps, 'tab'>) {
  const settings = current.store.value;
  const save = () => current.store.save();
  return (
    <>
      <ToggleRow id="detailAutoplaySetting" title="Autoplay when opening details" checked={settings.detailAutoplay}
        onToggle={(on) => { settings.detailAutoplay = on; save() }} />
      <ToggleRow id="miniplayerSetting" title="Keep playing in a mini window after leaving details" checked={settings.miniplayer}
        onToggle={(on) => { settings.miniplayer = on; save(); current.changed('miniplayer') }} />
      <Row title="Seek forward / back step">
        <div id="seekSecondsSetting">
          <NumberSetting key={epoch} id="seekSecondsSetting" label="Seek forward / back" value={settings.seekSeconds}
            onApply={(value) => { settings.seekSeconds = value || 10; save(); current.changed('seekSeconds') }} />
        </div>
      </Row>
    </>
  );
}

function SearchHistoryRow({ host: current, epoch }: { host: SettingsPanelHost; epoch: number }) {
  const settings = current.store.value;
  const save = useSaveSettings();
  /* 条数跟着数据库走（`/api/settings`），所有访问端看到同一个数；本地那份只是镜像。 */
  return (
    <Row title="Search history size">
      <div id="searchHistoryLimitSetting">
        <NumberSetting key={epoch} id="searchHistoryLimitSetting" label="Search history" value={settings.searchHistoryLimit}
          onApply={(value) => {
            settings.searchHistoryLimit = boundedPreference(value, 0, 50, 10);
            current.store.save();
            current.changed('searchHistoryLimit');
            save.mutate({ searchHistoryLimit: settings.searchHistoryLimit }, { onError: () => {} });
          }} />
      </div>
    </Row>
  );
}

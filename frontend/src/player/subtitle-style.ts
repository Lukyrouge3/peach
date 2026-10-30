/* 字幕外观持久化与 TextTrack 时间轴显示。 */
import type { playerMemory } from './memory';
export const CAPTION_OPTIONS = {
  font: { label: 'Font', values: [['sans', 'Sans serif'], ['mono', 'Monospace sans serif'], ['serif', 'Serif'], ['mono-serif', 'Monospace serif'], ['casual', 'Casual'], ['cursive', 'Script'], ['small-caps', 'Small caps']] },
  size: { label: 'Font size', values: ['50', '75', '100', '150', '200', '300', '400'].map(value => [value, `${value}%`]) },
  color: { label: 'Text color', values: [['white', 'White'], ['yellow', 'Yellow'], ['green', 'Green'], ['cyan', 'Cyan'], ['blue', 'Blue'], ['magenta', 'Magenta'], ['red', 'Red'], ['black', 'Black']] },
  opacity: { label: 'Text opacity', values: ['25', '50', '75', '100'].map(value => [value, `${value}%`]) },
  background: { label: 'Background color', values: [['black', 'Black'], ['white', 'White'], ['red', 'Red'], ['green', 'Green'], ['blue', 'Blue'], ['yellow', 'Yellow'], ['magenta', 'Magenta'], ['cyan', 'Cyan']] },
  backgroundOpacity: { label: 'Background opacity', values: ['0', '25', '50', '75', '100'].map(value => [value, `${value}%`]) },
  window: { label: 'Window color', values: [['black', 'Black'], ['white', 'White'], ['red', 'Red'], ['green', 'Green'], ['blue', 'Blue'], ['yellow', 'Yellow'], ['magenta', 'Magenta'], ['cyan', 'Cyan']] },
  windowOpacity: { label: 'Window opacity', values: ['0', '25', '50', '75', '100'].map(value => [value, `${value}%`]) },
  edge: { label: 'Character edge style', values: [['none', 'None'], ['raised', 'Raised'], ['depressed', 'Depressed'], ['outline', 'Outline'], ['shadow', 'Drop shadow']] },
} as const;
export type CaptionKey = keyof typeof CAPTION_OPTIONS;
export type CaptionStyle = Record<CaptionKey, string>;
const DEFAULTS: CaptionStyle = { font: 'sans', size: '100', color: 'white', opacity: '100', background: 'black', backgroundOpacity: '75', window: 'black', windowOpacity: '0', edge: 'shadow' };
const KEY = 'peach.caption-style.v1';
const COLORS: Record<string, string> = { white: '255,255,255', yellow: '255,255,0', green: '0,255,0', cyan: '0,255,255', blue: '0,0,255', magenta: '255,0,255', red: '255,0,0', black: '0,0,0' };
const FONTS: Record<string, string> = { sans: 'Arial,sans-serif', mono: 'Consolas,monospace', serif: 'Georgia,serif', 'mono-serif': '"Courier New",monospace', casual: '"Comic Sans MS",sans-serif', cursive: 'cursive', 'small-caps': 'Arial,sans-serif' };
const EDGES: Record<string, string> = { none: 'none', raised: '-1px -1px 0 #ddd,1px 1px 0 #222', depressed: '1px 1px 0 #ddd,-1px -1px 0 #222', outline: '-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000', shadow: '2px 2px 3px #000' };

export function readCaptionStyle(): CaptionStyle {
  let saved: Partial<CaptionStyle> = {};
  try { saved = JSON.parse(localStorage.getItem(KEY) || '{}') || {} } catch { /* 使用默认外观 */ }
  return Object.fromEntries(Object.entries(DEFAULTS).map(([key, fallback]) => [key,
    CAPTION_OPTIONS[key as CaptionKey].values.some(([value]) => value === saved[key as CaptionKey]) ? saved[key as CaptionKey] : fallback])) as CaptionStyle;
}

export function mountCaptionStyle(root: HTMLElement, video: HTMLVideoElement, signal: AbortSignal,
  memory?: ReturnType<typeof playerMemory>) {
  let style = readCaptionStyle();
  const touched = new Set<CaptionKey>();
  const overlay = document.createElement('div'); overlay.className = 'vjs-peach-captions'; overlay.setAttribute('aria-hidden', 'true');
  const window = document.createElement('div'); window.className = 'vjs-peach-caption-window'; overlay.append(window);
  root.querySelector('media-container')!.append(overlay); root.dataset.peachCaptions = '';
  const paintStyle = () => {
    const rgba = (color: string, opacity: string) => `rgba(${COLORS[color]},${Number(opacity) / 100})`;
    root.style.setProperty('--peach-caption-font', FONTS[style.font]!);
    root.style.setProperty('--peach-caption-scale', String(Number(style.size) / 100));
    root.style.setProperty('--peach-caption-color', rgba(style.color, style.opacity));
    root.style.setProperty('--peach-caption-background', rgba(style.background, style.backgroundOpacity));
    root.style.setProperty('--peach-caption-window', rgba(style.window, style.windowOpacity));
    root.style.setProperty('--peach-caption-edge', EDGES[style.edge]!);
    root.style.setProperty('--peach-caption-variant', style.font === 'small-caps' ? 'small-caps' : 'normal');
  };
  const render = () => {
    window.replaceChildren();
    for (const track of video.textTracks) {
      if (track.mode !== 'showing' || !['subtitles', 'captions'].includes(track.kind)) continue;
      for (const cue of Array.from(track.activeCues || [])) {
        const line = document.createElement('span'); line.className = 'vjs-peach-caption-line';
        if (cue instanceof VTTCue) line.append(cue.getCueAsHTML());
        window.append(line);
      }
    }
    overlay.hidden = !window.childNodes.length;
  };
  const bound = new WeakSet<TextTrack>();
  const bind = () => {
    for (const track of video.textTracks) if (!bound.has(track)) { bound.add(track); track.addEventListener('cuechange', render, { signal }) }
    render();
  };
  video.textTracks.addEventListener('addtrack', bind, { signal });
  video.textTracks.addEventListener('removetrack', bind, { signal });
  video.textTracks.addEventListener('change', render, { signal });
  paintStyle(); bind();
  if (memory) memory.restore(saved => {
    if (signal.aborted) return;
    if (saved.caption_style) {
      const restored = { ...DEFAULTS, ...saved.caption_style };
      for (const key of Object.keys(DEFAULTS) as CaptionKey[]) if (!touched.has(key)) style[key] = restored[key];
      paintStyle();
    } else {
      // 浏览器里保存的外观作为这部视频的初始值，服务端清单承载持久记忆。
      let legacy = false;
      try { legacy = !!localStorage.getItem(KEY) } catch { /* 使用默认外观 */ }
      if (legacy && !touched.size) void memory.save({ caption_style: style }).catch(() => {});
    }
  });
  return {
    current: () => style,
    set(key: CaptionKey, value: string) {
      if (!CAPTION_OPTIONS[key].values.some(([option]) => option === value)) return;
      touched.add(key); style = { ...style, [key]: value }; paintStyle();
      void memory?.save({ caption_style: { [key]: value } }).catch(() => {});
    },
    reset() { (Object.keys(DEFAULTS) as CaptionKey[]).forEach(key => touched.add(key)); style = { ...DEFAULTS }; paintStyle(); void memory?.save({ caption_style: style }).catch(() => {}) },
  };
}

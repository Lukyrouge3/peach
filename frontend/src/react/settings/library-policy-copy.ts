/* 处理方式与媒体库分组的说明。设置页与它的首屏骨架用同一份文字，骨架里的折行和真实页面一致。 */

/** 分组上方常显的一句：三档处理方式差在哪，细节收在对比表里。 */
export const POLICY_SUMMARY = 'Every media library first reads local NFO files and images in the same folder; the handling option only decides whether to fill in from the internet.';

/** 三档对比表：每行一个步骤，三列依次是自动补全、仅使用本地资料、自定义。 */
export const POLICY_COLUMNS = ['Auto-complete', 'Local metadata only', 'Custom'] as const;
export const POLICY_MATRIX: readonly (readonly [step: string, auto: string, local: string, custom: string])[] = [
  ['Read local NFO and images', '✓', '✓', '✓'],
  ['Read video info, generate contact sheets', '✓', '✓', 'Optional'],
  ['Fetch metadata online', '✓', '—', 'Optional'],
  ['Fetch covers online', '✓', '—', 'Optional'],
  ['Fetch people images online', '✓', '—', 'Optional'],
];
export const POLICY_COVER_NOTE = 'When only a portrait poster exists locally: auto-complete finds the full jacket online (except FC2 product images), while local-only uses the portrait poster directly.';

/** 两颗添加键下面的一句：文件夹归媒体库，什么时候该加文件夹、什么时候该加媒体库。 */
export const LIBRARY_FOLDER_HELP = 'A media library can have several folders; their titles display together and share a name, color and handling option. Add another media library when you want them displayed or configured separately.';

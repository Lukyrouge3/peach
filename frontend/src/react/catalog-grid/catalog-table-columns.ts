/* 作品列表的列定义与本机列偏好的存放位置。不依赖 React：壳的首屏骨架与列表岛读同一份。 */

export const CATALOG_COLUMN_WIDTHS_KEY = 'peach.catalog-column-widths.v1';
export const CATALOG_COLUMN_VISIBILITY_KEY = 'peach.catalog-column-visibility.v1';

export const columnSizes: Record<string, { width: number; min: number; max: number }> = {
  select: { width: 48, min: 48, max: 48 },
  name: { width: 360, min: 320, max: 2000 },
  dur: { width: 96, min: 80, max: 240 },
  size: { width: 96, min: 88, max: 240 },
  resolution: { width: 120, min: 112, max: 320 },
  rating: { width: 168, min: 168, max: 320 },
  o: { width: 112, min: 96, max: 240 },
  plays: { width: 96, min: 96, max: 240 },
  new: { width: 184, min: 144, max: 320 },
  played: { width: 184, min: 144, max: 320 },
  release: { width: 144, min: 128, max: 320 },
  code: { width: 144, min: 112, max: 400 },
  tags: { width: 180, min: 144, max: 560 },
};

export const defaultColumnVisibility: Record<string, boolean> = { code: false, o: false, new: false, played: false, release: false };
const labels: Record<string, string> = { select: 'Select', name: 'Works', dur: 'Duration', size: 'Size', resolution: 'Resolution',
  rating: 'Rating', o: 'Climax count', plays: 'Play count', new: 'Date added', played: 'Watch time', release: 'Release date', code: 'Code', tags: 'Tags' };
export const catalogColumns = ['select', 'name', 'tags', 'code', 'dur', 'resolution', 'size', 'rating', 'plays', 'o', 'played', 'new', 'release']
  .map(id => ({ id, label: labels[id]!, ...columnSizes[id]!, flex: id === 'name', required: id === 'select' || id === 'name', visible: defaultColumnVisibility[id] !== false }));

function stored(key: string): Record<string, unknown> {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(key) || '{}');
    return value && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, unknown> : {};
  } catch { return {} }
}

/** 首屏骨架按当前列偏好排版：只读存下来的宽度与可见性，与表格的取值规则一致；
 *  `width` 为空的是承接剩余宽度的那一列，`min` 是它不再缩小的宽度。勾选列只在选择模式出现，不画。 */
export function catalogTableSnapshot(): { id: string; label: string; width: number | null; min: number }[] {
  const widths = stored(CATALOG_COLUMN_WIDTHS_KEY);
  const shown = stored(CATALOG_COLUMN_VISIBILITY_KEY);
  return catalogColumns
    .filter(column => column.id !== 'select'
      && (column.required || (typeof shown[column.id] === 'boolean' ? shown[column.id] === true : column.visible)))
    .map(column => {
      const saved = widths[column.id];
      const custom = typeof saved === 'number' && Number.isFinite(saved) && !(column.flex && saved === column.width);
      return {
        id: column.id, label: column.label, min: column.width,
        width: custom ? Math.max(column.min, Math.min(column.max, saved)) : column.flex ? null : column.width,
      };
    });
}

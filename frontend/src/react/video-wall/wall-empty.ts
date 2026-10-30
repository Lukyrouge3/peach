import { emptyStateHtml } from '@peach/legacy/ui';
import { unfilteredWallAddress } from './wall-route';
import { catalogEmptyHtml } from '../../catalog-onboarding';

/** 媒体库、筛选结果与封面各自表达当前的空状态。 */
export function wallEmptyHtml({ libraryEmpty, matches, hasMore, catalogEmpty }: {
  libraryEmpty: boolean; matches: number; hasMore: boolean; catalogEmpty?: string;
}): string {
  if (libraryEmpty) return catalogEmpty || catalogEmptyHtml();
  if (!matches) return emptyStateHtml('search', 'No videos match the filters', 'Clear filters to see all videos.', {
    actions: `<a class="geist-button primary" href="${unfilteredWallAddress()}">Clear filters</a>`,
  });
  return emptyStateHtml('image', 'These videos have no cover yet', hasMore
    ? 'Load more titles to keep browsing.' : 'After covers are added, titles can be viewed on the video wall.', {
    actions: '<a class="geist-button primary" href="/data-cleanup">Complete covers</a>'
      + (hasMore ? '<button type="button" class="geist-button" data-wall-load-more>Load more</button>' : ''),
  });
}

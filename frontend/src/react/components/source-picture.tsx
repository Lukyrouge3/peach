import { useLayoutEffect, useRef, useState } from 'react';
import { coverUrl } from '@peach/card-art';
import { Button } from '@/components/base/buttons/button';
import { Note } from './note';
import type { JavDetail } from '../jav-detail/jav-detail';

/** 来源图片（样张、来源封面、来源头像）的地址。服务端取过一次就落盘，回的是图片本身，
 *  浏览器按 ETag 与私有时效缓存；`attempt` 让重试换一个地址，不复用刚失败的那一次。 */
export const javImageUrl = (code: string, image: string, attempt = 0): string =>
  `/jav-image?code=${encodeURIComponent(code)}&image=${encodeURIComponent(image)}${attempt ? `&attempt=${attempt}` : ''}`;

/** 来源图片：本地有封面用本地那张，否则经 `/jav-image` 取。 */
export function SourcePicture({ item, image, thumbnail = false }: {
  item: Pick<JavDetail, 'code' | 'has_cover' | 'source_image' | 'cover_url' | 'cover_version'>;
  image: string; thumbnail?: boolean;
}) {
  const [attempt, setAttempt] = useState(0);
  const [loaded, setLoaded] = useState<{ src: string; alt: string } | null>(null);
  const [failed, setFailed] = useState('');
  const picture = useRef<HTMLImageElement>(null);
  const local = image === 'cover' && item.has_cover;
  const remote = !local && (image !== 'cover' || item.source_image);
  const alt = thumbnail ? '' : image === 'cover' ? `${item.code} cover` : `${item.code} preview ${Number(image) + 1}`;
  const src = remote ? javImageUrl(item.code, image, attempt) : local ? coverUrl(item, true) : item.cover_url || '';
  useLayoutEffect(() => {
    const node = picture.current;
    if (node?.complete && node.naturalWidth > 0) setLoaded({ src, alt });
  }, [src, alt]);
  if (!remote) {
    if (src) return <img ref={picture} data-jav-picture={thumbnail ? undefined : ''} src={src} alt={alt} referrerPolicy="no-referrer"
      onLoad={() => setLoaded({ src, alt })} />;
    return thumbnail ? <span>Preview not obtained</span> : <div data-jav-picture-wait=""><Note tone="neutral">Cover not obtained</Note></div>;
  }
  if (failed === src) {
    if (thumbnail) return <span>Preview not obtained</span>;
    return <div data-jav-picture-wait=""><Note tone="neutral"
      action={<Button variant="secondary" onClick={() => setAttempt((value) => value + 1)}>Retry now</Button>}>
      Image not obtained</Note></div>;
  }
  const ready = loaded?.src === src;
  const reveal = async (node: HTMLImageElement) => {
    try { await node.decode() } catch { return }
    if (picture.current === node && node.getAttribute('src') === src) setLoaded({ src, alt });
  };
  return <>
    {ready || loaded ? null : thumbnail
      ? <span className="relative block h-full w-full skeleton-sheen" aria-label="Loading preview" />
      : <div data-jav-picture-wait="" data-skeleton="image" role="status" aria-label="Loading image"><span className="relative skeleton-sheen" /></div>}
    {!ready && loaded ? <img data-jav-picture={thumbnail ? undefined : ''} data-source-picture="" src={loaded.src}
      alt={loaded.alt} referrerPolicy="no-referrer" /> : null}
    <img ref={picture} data-jav-picture={thumbnail ? undefined : ''} data-source-picture="" src={src} alt={alt} referrerPolicy="no-referrer"
      hidden={!ready} onLoad={event => { void reveal(event.currentTarget) }} onError={() => setFailed(src)} />
  </>;
}

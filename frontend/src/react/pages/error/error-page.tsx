/* 错误页：浏览器直接打开的地址撞上 HTTP 错误时给人看的那一页。
 *
 * 服务端只给状态码（`data-status`）与已换成中文的说明（`data-detail`）；标题按状态码取，404 不显示
 * 说明，按钮回首页。标签页标题跟着标题走。 */
import { useEffect } from 'react';

import { ButtonLink } from '@/components/base/buttons/button';

import { AuthCard } from '../auth-card';
import type { PageData } from '../page-data';

const TITLES: Readonly<Record<string, string>> = {
  403: 'Can\'t open this',
  404: 'Four-oh-four',
  409: 'Can\'t do that right now',
};

export function errorTitle(status: string | undefined): string {
  return TITLES[status ?? ''] ?? 'Something went wrong';
}

export function ErrorPage({ data }: { data: PageData }) {
  const title = errorTitle(data.status);
  useEffect(() => {
    document.title = `Peach · ${title}`;
  }, [title]);
  return (
    <AuthCard title={title} lede={data.status === '404' ? undefined : data.detail}>
      <ButtonLink href="/" className="self-start">Back to home</ButtonLink>
    </AuthCard>
  );
}

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { configurationSection, settingsPath } from '@peach/history';
import { Button, ButtonLink } from '@/components/base/buttons/button';
import { Chip } from '@/components/base/badges/chip';
import { SettingsCard, SettingsSectionLabel } from '@/components/application/settings/settings-rows';
import { cx } from '@/utils/cx';
import { errorMessage } from '../../api';
import { diagnosticsSkeleton } from '../../diagnostics-skeleton';
import { ErrorExcerpt } from '../activity/error-excerpt';
import { Note } from '../components/note';
import { SiteMark } from '../components/site-mark';
import { Disclosure, Fact, FactList, Section, Stack } from '../settings/section';
import { busyProps, useAction } from '../settings/use-action';
import { DIAGNOSTICS_KEY, fetchDiagnostics, type DiagnosticCheck } from './diagnostics';
import { HealthList } from './health-list';
import { DiagnosticExportAction, ScrapingExport } from './scraping-export';

const STATUS: Record<string, string> = { ok: 'Normal', warning: 'Check', failed: 'Action needed', unknown: 'Not obtained', disabled: 'Not configured',
  stale: 'To recheck', unchecked: 'No records yet' };
const TARGET_LABELS: Record<string, string> = { '/tasks': 'View tasks' };
const SECTIONS = [
  ['Media libraries and mounts', ['media_mounts', 'data_root']],
  ['Database and migrations', ['database', 'schema']],
  ['Tools', ['ffmpeg']],
  ['Configuration and access', ['configured', 'security', 'port', 'version']],
  ['Background tasks', ['tasks']],
] as const;
const moment = (value: string) => new Date(value).toLocaleString();

function DiagnosticStatus({ status }: { status: string }) {
  return <Chip variant="caption" data-diagnostic-status={status}
    color={status === 'failed' ? 'rose' : status === 'ok' ? 'lime' : status === 'warning' || status === 'stale' ? 'yellow' : 'neutral'}>
    {STATUS[status] ?? 'Not obtained'}
  </Chip>;
}

export interface DiagnosticsProps {
  openItem(id: number): void;
  receipt(message: string): void;
}

function DownloadReport() {
  return <DiagnosticExportAction kind="support" />;
}

function Check({ name, check, compact = false }: {
  name: string; check: DiagnosticCheck; compact?: boolean;
}) {
  /* 访问安全与端口落在网络与访问里，即使检查项给的是媒体库那一栏。 */
  const target = check.target === '/settings/library' && (name === 'security' || name === 'port')
    ? settingsPath('Network and access') : check.target;
  const Heading = compact ? 'h4' : 'h3';
  return <div data-diagnostic-check={name} className={cx('flex flex-col gap-4 border-b border-separator-border pr-3 last:border-b-0 sm:flex-row sm:items-center sm:justify-between', compact ? 'py-3' : 'py-5')}>
    <div className={cx('flex min-w-0 flex-1 flex-col', compact ? 'gap-1' : 'gap-2')}>
      <div className="flex flex-wrap items-center gap-3">
        <Heading className={cx('text-text-primary', compact ? 'text-body-2-medium' : 'text-body-medium')}>{check.label}</Heading>
        <DiagnosticStatus status={check.status} />
      </div>
      <p data-check-reason className={cx('text-body-2-regular break-words', compact ? 'text-text-secondary' : 'text-text-primary')}>{check.reason}</p>
      {check.action ? <p className="text-body-2-regular text-text-secondary">Suggested action: {check.action}</p> : null}
    </div>
    {target ? <div className="shrink-0 self-end sm:self-auto"><ButtonLink size="small" variant="secondary" href={target}>
      {target.startsWith('/settings/') ? `Open ${configurationSection(target)}` : TARGET_LABELS[target] ?? 'Open related page'}</ButtonLink></div> : null}
  </div>;
}

export function DiagnosticsPage(props: DiagnosticsProps) {
  const query = useQuery({ queryKey: DIAGNOSTICS_KEY, queryFn: ({ signal }) => fetchDiagnostics(signal), staleTime: 10_000 });
  const action = useAction();
  const [refreshError, setRefreshError] = useState('');
  const refresh = () => void action.run('refresh', async () => {
    const response = await query.refetch();
    if (response.error) throw response.error;
    return response.data;
  }, () => setRefreshError(''), cause => setRefreshError(errorMessage(cause)));
  const data = query.data;
  if (!data && query.isPending) return <div role="status" aria-label="Loading system diagnostics" dangerouslySetInnerHTML={{ __html: diagnosticsSkeleton() }} />;
  if (!data) return <div className="ui-configpage"><DownloadReport /><Note tone="error" title="Couldn't load diagnostics"
    action={<Button variant="secondary" onClick={refresh} {...busyProps(action.busy === 'refresh')}>Check again</Button>}>
    {query.error ? errorMessage(query.error) : 'Diagnostic report not obtained.'}
  </Note><ScrapingExport /></div>;
  const attention = Object.entries(data.checks).filter(([, check]) => ['warning', 'failed', 'unknown'].includes(check.status));
  const other = Object.entries(data.checks).filter(([, check]) => !['warning', 'failed', 'unknown'].includes(check.status));
  return <div className="flex min-w-0 flex-col gap-6">
    <div className="flex flex-wrap justify-end gap-2"><DownloadReport />
      <Button variant="secondary" onClick={refresh} {...busyProps(action.busy === 'refresh')}>Check again</Button></div>
    {refreshError ? <Note tone="error">{refreshError}</Note> : null}
    {attention.length ? <Section title={`Needs attention · ${attention.length} items`}>
      {attention.map(([key, check]) => <Check key={key} name={key} check={check} />)}
    </Section> : null}
    <Section title="Library health"><Stack>
      {data.library.issue_at ? <p className="text-body-2-regular text-text-secondary">Handling record · {moment(data.library.issue_at)}</p> : null}
      {Object.entries(data.library.groups).map(([key, group]) => <HealthList key={key} group={group} {...props} />)}
    </Stack></Section>
    {other.length ? <section aria-label="System checks">
      <Disclosure summary={`Other checks · ${other.length} items`} contentClassName="gap-5">
        {SECTIONS.map(([title, keys]) => {
          const rows = other.filter(([key]) => keys.some(name => name === key));
          return rows.length ? <section key={title} aria-label={title} data-diagnostic-group="" className="flex min-w-0 flex-col gap-2">
            <h3 className="flex items-center gap-2 px-3 text-body-medium text-text-primary">{title}
              <span className="text-caption-1-regular text-text-secondary">{rows.length} items</span>
            </h3>
            <SettingsCard>{rows.map(([key, check]) => <Check key={key} name={key} check={check} compact />)}</SettingsCard>
          </section> : null;
        })}
      </Disclosure>
    </section> : null}
    <ScrapingExport />
    <section aria-label="Source sessions" className="flex min-w-0 flex-col gap-3">
      <SettingsSectionLabel>Source sessions</SettingsSectionLabel>
      {data.sources.map(source => <article key={source.source} data-diagnostic-source={source.source}>
        <SettingsCard><Stack>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="flex min-w-0 items-center gap-2 text-body-medium text-text-primary"><SiteMark source={source.source} />{source.label}</h3>
          <DiagnosticStatus status={source.status} />
        </div>
        {/* 原因常是整段堆栈：平时只露异常那一行，全文收在「查看详情」后面。 */}
        <ErrorExcerpt text={source.reason} className="text-body-regular text-text-primary" />
        <FactList>
          <Fact term="Last parsed successfully">{source.last_success_at ? moment(source.last_success_at) : 'No successful records yet'}</Fact>
          {source.last_check_at ? <Fact term="Last checked">{moment(source.last_check_at)}
            {source.elapsed_s !== undefined && source.elapsed_s !== null ? ` · ${source.elapsed_s.toFixed(2)} s` : ''}</Fact> : null}
          <Fact term="Access paused until">{source.cooldown_until ? moment(source.cooldown_until) : 'Not paused'}</Fact>
        </FactList>
        </Stack></SettingsCard>
      </article>)}
      <div><ButtonLink size="small" variant="secondary" href="/sources">Open sources and credentials</ButtonLink></div>
    </section>
  </div>;
}

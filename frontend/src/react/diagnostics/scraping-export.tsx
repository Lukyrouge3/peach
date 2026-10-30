import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button, ButtonLink } from '@/components/base/buttons/button';
import { Input } from '@/components/base/input/input';
import { ApiError, apiGet, apiSend } from '../../api';
import { diagnosticHeaders } from '../../browser-diagnostics';
import { Fieldset, FieldsetTitle } from '../components/fieldset';
import { LoadingDots } from '../components/loading-dots';
import { Note } from '../components/note';
import { Progress } from '../components/progress';
import { queryClient } from '../query';
import { busyProps, useAction } from '../settings/use-action';

const URL = '/api/diagnostics/exports';
const KEY = ['diagnostic-export'] as const;
interface ExportState {
  job_id?: string; kind?: 'support' | 'scraping';
  status: 'idle' | 'running' | 'cancelling' | 'complete' | 'cancelled' | 'failed';
  stage?: string; done?: number; total?: number; files?: number; rows?: number; bytes?: number;
  download_url?: string; error?: string;
}

export function DiagnosticExportAction({ kind, codes = '' }: { kind: 'support' | 'scraping'; codes?: string }) {
  const action = useAction();
  const query = useQuery({ queryKey: KEY, queryFn: ({ signal }) => apiGet<ExportState>(URL, signal),
    refetchInterval: query => ['running', 'cancelling'].includes(query.state.data?.status || '') ? 1000 : false });
  const state = query.data;
  const mine = state?.kind === kind;
  const active = state?.status === 'running' || state?.status === 'cancelling';
  const label = kind === 'support' ? 'Download diagnostic report' : 'Export scraping records';
  const update = (next: ExportState) => { queryClient.setQueryData(KEY, next) };
  const start = () => void action.run('start', async signal => {
    const response = await fetch(URL, { method: 'POST', signal, credentials: 'same-origin',
      headers: { ...await diagnosticHeaders(), 'Content-Type': 'application/json' }, body: JSON.stringify({ kind, codes }) });
    const result = await response.json().catch(() => null);
    if (!response.ok) throw new ApiError(result?.detail || result?.error || 'Diagnostic export didn\'t start', response.status, result);
    if (!result || !result.job_id) throw new Error('Export task status not obtained');
    return result as ExportState;
  }, update);
  const cancel = () => void action.run('cancel', signal => apiSend<ExportState>(
    `${URL}/${state!.job_id}/cancel`, {}, 'POST', signal), update);
  return <div className="flex min-w-0 flex-col gap-3">
    <div className="flex flex-wrap gap-2">
      <Button type="button" variant="secondary" disabled={active} {...busyProps(action.busy === 'start')} onClick={start}>{label}</Button>
      {mine && active ? <Button type="button" variant="secondary" disabled={state.status === 'cancelling'}
        {...busyProps(action.busy === 'cancel')} onClick={cancel}>Cancel export</Button> : null}
      {mine && state.status === 'complete' && state.download_url ? <ButtonLink variant="secondary"
        href={state.download_url}>Download the generated file</ButtonLink> : null}
    </div>
    {mine && active ? state.total && state.total > 0 ? <div className="flex flex-col gap-2" role="status">
      <span className="text-body-2-regular">{state.stage} · {state.done || 0} / {state.total} items</span>
      <Progress label="Export progress" value={state.done || 0} max={state.total} />
    </div> : <LoadingDots label={`${state.stage || 'Preparing export'}${state.rows ? ` · ${state.rows} candidates` : ''}${state.files ? ` · ${state.files} files` : ''}`} /> : null}
    {mine && state.status === 'complete' ? <p role="status" className="text-body-2-regular text-text-secondary">
      Export finished · {((state.bytes || 0) / 1024 / 1024).toFixed(2)} MiB</p> : null}
    {mine && state.status === 'cancelled' ? <Note tone="neutral">Export canceled</Note> : null}
    {query.isError ? <Note tone="error" action={<Button type="button" variant="secondary"
      {...busyProps(query.isFetching)} onClick={() => { void query.refetch() }}>Reload</Button>}>Export progress not obtained</Note> : null}
    {action.error || mine && state.status === 'failed' ? <Note tone="error">{action.error || state?.error}</Note> : null}
  </div>;
}

export function ScrapingExport() {
  const [codes, setCodes] = useState('');
  return <Fieldset layout="stack" labelledBy="scraping-export-title" footer={<DiagnosticExportAction kind="scraping" codes={codes} />}>
    <div className="flex min-w-0 flex-col gap-4" aria-label="Export scraping records">
      <FieldsetTitle id="scraping-export-title">Scraping records</FieldsetTitle>
      <p className="text-body-2-regular text-text-secondary">Exports title metadata, source values, and performer, studio and series assignments for troubleshooting scraping errors.</p>
      <Input label="Problem codes (optional)" name="scraping-codes" value={codes} onChange={setCodes}
        autoComplete="off" spellCheck="false" maxLength={1300}
        placeholder="e.g. ABF-087, SYKH-145…" hint="Separate codes with commas, up to 20; leave empty to export recent titles." />
    </div>
  </Fieldset>;
}

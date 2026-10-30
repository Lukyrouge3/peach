import { useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/base/buttons/button';
import { StatusLabel } from '../components/status-label';
import { Checkbox } from '@/components/base/checkbox/checkbox';
import { Input } from '@/components/base/input/input';
import { confirmModal, spinnerHtml } from '@peach/legacy/ui';
import { esc } from '@peach/legacy/core';
import { apiSend, errorMessage } from '../../api';
import { queryClient } from '../query';
import { CodeBlock } from '../components/code-block';
import { ErrorText, FieldLabel, Footer, Help, Section, Stack } from '../settings/section';
import { busyProps, useAction } from '../settings/use-action';
import { SelectField } from '../settings-panel/legacy-controls';
import { CUSTOM_SOURCES_URL as URL, CUSTOM_SOURCES_KEY as KEY, fetchCustomSources,
  type CustomSource as Source } from './custom-source-data';

const FIELDS = [['code', 'Code'], ['title', 'Title'], ['studio', 'Studios'], ['series', 'Series'],
  ['release_date', 'Release date'], ['performers', 'Performers (text array)'], ['tags', 'Tags (text array)']] as const;
const TYPES = [['censored', 'Censored'], ['amateur', 'Amateurs'], ['uncensored', 'Uncensored'], ['fc2', 'FC2'],
  ['kmib', 'Korean MIB'], ['other', 'Other'], ['unsure', 'Code to verify'], ['unknown', 'Unknown']] as const;
const blank = (): Source => ({ name: '', endpoint: '', enabled: false, fields: { code: 'id', title: 'title' }, content_types: ['censored'] });

export function CustomSources({ receipt }: { receipt(message: string): void }) {
  const [editing, setEditing] = useState<Source | null>(null);
  const query = useQuery({ queryKey: KEY, queryFn: ({ signal }) => fetchCustomSources(signal) });
  const action = useAction();
  const changed = (result: { items: Source[] }) => queryClient.setQueryData(KEY, result);
  const hasContent = Boolean(query.isPending || query.error || query.data?.items.length || action.error);
  const add = <Button variant="secondary" onClick={() => setEditing(blank())}>Add source</Button>;
  return <Section title="Custom metadata sources">
    {hasContent ? <Stack>
      {query.isPending ? <div aria-busy="true" data-skeleton="" aria-label="Loading custom sources" /> : null}
      {query.error ? <ErrorText>{errorMessage(query.error)}</ErrorText> : null}
      {query.data?.items.map((source) => <div key={source.id} className="flex flex-wrap items-center gap-3">
        <span className="min-w-0 flex-1">{source.name}</span>
        <StatusLabel tone={source.enabled ? 'success' : 'neutral'}>{source.enabled ? 'Enabled' : 'Disabled'}</StatusLabel>
        <Button variant="secondary" onClick={() => setEditing(source)}>Edit</Button>
        <Button variant="secondary" {...busyProps(action.busy === source.id)} onClick={() => void action.run(source.id!,
          (signal) => apiSend<{ items: Source[] }>(URL, { ...source, enabled: !source.enabled }, 'POST', signal),
          (result) => { changed(result); receipt(source.enabled ? 'Source disabled' : 'Source enabled') })}>
          {source.enabled ? 'Disable' : 'Enabled'}</Button>
        <Button variant="danger" onClick={() => confirmModal({ title: 'Delete custom source',
          body: `After deleting “${esc(source.name)}”, scraping no longer queries this source.`, confirmLabel: 'Delete source', danger: true,
          onConfirm: async () => { changed(await apiSend<{ items: Source[] }>(URL, { action: 'delete', id: source.id }));
            setEditing(null); receipt('Source deleted') } })}>Delete</Button>
      </div>)}
      {action.error ? <ErrorText>{action.error}</ErrorText> : null}
    </Stack> : null}
    {!editing ? hasContent ? <Footer>{add}</Footer> : <Stack><div className="flex justify-end">{add}</div></Stack> : null}
    {editing ? <SourceForm key={editing.id || 'new'} initial={editing} cancel={() => setEditing(null)}
      saved={(result) => { changed(result); setEditing(null); receipt('Source saved') }} /> : null}
  </Section>;
}

function SourceForm({ initial, cancel, saved }: {
  initial: Source; cancel(): void; saved(result: { items: Source[] }): void;
}) {
  const [source, setSource] = useState(initial);
  const [code, setCode] = useState('');
  const [preview, setPreview] = useState<string>('');
  const revision = useRef(0);
  const action = useAction();
  const change = (patch: Partial<Source>) => { revision.current++; setSource((current) => ({ ...current, ...patch })); setPreview('') };
  return <form aria-label="Metadata source settings" aria-busy={action.busy === 'preview'} onSubmit={(event) => {
    event.preventDefault();
    void action.run('save', (signal) => apiSend<{ items: Source[] }>(URL, source, 'POST', signal), saved);
  }}>
    <Stack>
      <Input label="Source name" value={source.name} maxLength={80} onChange={(name) => change({ name })} />
      <Input label="JSON endpoint URL" value={source.endpoint} maxLength={2048}
        placeholder="https://example.com/api/movies/{code}" onChange={(endpoint) => change({ endpoint })} />
      <div className="flex flex-col gap-2">
        <FieldLabel>Source connection method</FieldLabel>
        <SelectField id="custom-source-network" label="Source connection method" epoch={0} value={source.network || 'direct'}
          options={[["direct", "Direct"], ["peach_proxy", "Peach proxy"]]} onPick={(network) => change({ network })} />
      </div>
      <div className="flex flex-col gap-2">
        <FieldLabel>Endpoint code format</FieldLabel>
        <SelectField id="custom-source-code-format" label="Endpoint code format" epoch={0} value={source.code_format || 'original'}
          options={[["original", "As is"], ["lowercase", "Lowercase"], ["compact", "Remove hyphens"], ["underscore", "Hyphens to underscores"]]}
          onPick={(code_format) => change({ code_format })} />
      </div>
      <Help>Enter a public JSON endpoint and response field paths, e.g. data.title. The code field is used to verify the title's identity.</Help>
      {FIELDS.map(([field, label]) => <Input key={field} label={`${label} field path`} value={source.fields[field] || ''}
        onChange={(path) => { const fields = { ...source.fields }; if (path) fields[field] = path; else delete fields[field]; change({ fields }) }} />)}
      <div className="flex flex-wrap gap-3" role="group" aria-label="Applicable content types">
        {TYPES.map(([type, label]) => <Checkbox key={type} isSelected={source.content_types.includes(type)}
          onChange={(checked) => change({ content_types: checked ? [...source.content_types, type] : source.content_types.filter((kind) => kind !== type) })}>{label}</Checkbox>)}
      </div>
      <Checkbox isSelected={source.enabled} onChange={(enabled) => change({ enabled })}>Enabled sources</Checkbox>
      <Input label="Test code (press Enter to query)" value={code} onChange={(value) => {
        revision.current++; setCode(value); setPreview('');
      }} onKeyDown={(event) => {
        if (event.key !== 'Enter' || event.nativeEvent.isComposing) return;
        event.preventDefault();
        const current = revision.current;
        void action.run('preview', (signal) => apiSend<{ record: unknown }>(URL,
          { ...source, code, action: 'preview' }, 'POST', signal), (result) => {
            if (current === revision.current) setPreview(JSON.stringify(result.record, null, 2));
          }, (cause) => { if (current === revision.current) action.setError(errorMessage(cause)) });
      }} />
      {action.busy === 'preview' ? <Help role="status"><span dangerouslySetInnerHTML={{ __html: spinnerHtml('Testing source') }} />Testing source</Help> : null}
      {preview ? <CodeBlock code={preview} language="json" label="Metadata endpoint response" /> : null}
      {action.error ? <ErrorText>{action.error}</ErrorText> : null}
    </Stack>
    <Footer><Button variant="secondary" type="button" onClick={cancel}>Cancel</Button>
      <Button type="submit" {...busyProps(action.busy === 'save')}>Save source</Button></Footer>
  </form>;
}

/* 本机端口与已保存媒体配置使用同一份修订号。 */
import { useEffect, useState, type FormEvent } from 'react';
import { Button } from '@/components/base/buttons/button';
import { Input } from '@/components/base/input/input';
import { LinkButton } from '@/components/base/buttons/link-button';
import { ApiError, apiSend, errorMessage } from '../../api';
import { CONFIGURATION_URL } from '../../configuration-endpoints';
import type { ConfigurationGroupProps } from '../bundle';
import { Note } from '../components/note';
import { ConfigurationChoice, ConfigurationInput } from '../components/configuration-fields';
import { RESTART_REDIRECT_MS } from '../restart-redirect';
import { ErrorText, Footer, Help, Section, Stack } from './section';
import { busyProps, useAction } from './use-action';

const HOST_OPTIONS = [
  { value: '0.0.0.0', label: 'Devices on the same LAN' },
  { value: '127.0.0.1', label: 'Only this computer' },
];

export function PortSettings({ data, receipt }: ConfigurationGroupProps) {
  const network = data.network;
  const editable = network ? network.editable : data.editable && data.port_editable !== false;
  const [host, setHost] = useState(network?.host ?? '127.0.0.1');
  const [name, setName] = useState(network?.mdns_name ?? 'peach');
  const [port, setPort] = useState(String(data.port));
  const [fields, setFields] = useState<Partial<Record<'port' | 'host' | 'mdns_name', string>>>({});
  const [saved, setSaved] = useState<{ url: string } | null>(null);
  const action = useAction();
  useEffect(() => {
    if (!saved) return;
    const timer = setTimeout(() => location.assign(saved.url), RESTART_REDIRECT_MS);
    return () => clearTimeout(timer);
  }, [saved]);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFields({});
    void action.run('save', (signal) => apiSend<{ url: string }>(CONFIGURATION_URL, {
      revision: data.revision, media_dirs: data.media_dirs,
      ...(data.media_sources ? { media_sources: data.media_sources } : {}),
      port, scan_now: false,
      ...(network?.editable ? { host, ...(host === '0.0.0.0' ? { mdns_name: name } : {}) } : {}),
    }, 'POST', signal), (result) => {
      setSaved({ url: new URL('/settings/network', result.url).href }); receipt('Settings saved');
    }, (cause) => {
      const fields = cause instanceof ApiError && cause.status === 400
        ? (cause.body as { errors?: Partial<Record<'port' | 'host' | 'mdns_name', string>> } | null)?.errors : null;
      if (fields && (fields.port || fields.host || fields.mdns_name)) setFields(fields);
      else action.setError(errorMessage(cause));
    });
  };
  if (saved) return <Section title="Access address"><Stack>
    <Note tone="success" title="Settings saved">Peach is restarting.
      <LinkButton href={saved.url} size="small">Back to Network and access</LinkButton>
    </Note>
  </Stack></Section>;
  return <Section title="Access address" onSubmit={editable ? submit : undefined}><Stack>
    {network ? <>
      <Address label="Local address" value={network.local_url} receipt={receipt} />
      {network.lan_url || network.ip_url ? <>
        <Address label="Phone address" value={network.lan_url || network.ip_url} receipt={receipt} />
        {network.lan_url && network.ip_url ? <Address label="Backup IP address" value={network.ip_url} receipt={receipt} /> : null}
        <Help>Connect the phone and computer to the same Wi-Fi. {network.ip_url && network.lan_url ? 'If the name address won\'t open, try the backup IP address.' : ''}</Help>
      </> : <Help>{network.scope === 'local'
        ? 'Only this computer is allowed to connect right now, so phones can\'t connect.'
        : 'LAN address not obtained; check the computer\'s network connection and service startup settings.'}</Help>}
    </> : null}
    {editable ? <>
      {network?.editable ? <>
        <ConfigurationChoice id="configHost" label="Who can access" value={host} onChange={setHost} options={HOST_OPTIONS}
          isDisabled={Boolean(action.busy)} isInvalid={Boolean(fields.host)}>
          {fields.host ? <ErrorText>{fields.host}</ErrorText> : null}
        </ConfigurationChoice>
        {host === '0.0.0.0' ? <ConfigurationInput id="configMdnsName" label="LAN access address" value={name} onChange={setName}
          prefix={network.local_url.startsWith('https:') ? 'https://' : 'http://'} suffix=".local"
          autoComplete="off" spellCheck="false" maxLength={63} isDisabled={Boolean(action.busy)} validationBehavior="aria"
          isInvalid={Boolean(fields.mdns_name)} hint={fields.mdns_name || undefined} /> : null}
      </> : null}
      <ConfigurationInput id="configPort" label="Port" prefix="localhost:" inputMode="numeric" value={port} onChange={setPort}
        isDisabled={Boolean(action.busy)} validationBehavior="aria" isInvalid={Boolean(fields.port)} hint={fields.port} />
    </> : <Help>{data.notice || 'Access scope, name and port are managed by the service startup settings.'}</Help>}
    {network?.editable && host === '0.0.0.0' && network.scope === 'local'
      ? <Help>The phone address appears after you save and restart. You can set an access password below.</Help> : null}
    {action.error ? <Note tone="error" title="Not saved">{action.error}</Note> : null}
  </Stack>{editable ? <Footer status="Peach restarts after saving and redirects to the new address.">
    <Button type="submit" {...busyProps(action.busy === 'save')}>Save settings</Button>
  </Footer> : null}</Section>;
}

function Address({ label, value, receipt }: { label: string; value: string; receipt(message: string): void }) {
  const action = useAction();
  return <div className="flex min-w-0 flex-col gap-2">
    <div className="flex min-w-0 flex-wrap items-end gap-2">
      <Input className="min-w-0 flex-1" label={label} value={value} isReadOnly autoComplete="off" />
      <Button variant="secondary" aria-label={`Copy ${label}`} onClick={() => void action.run('copy', () => navigator.clipboard.writeText(value),
        () => receipt('Address copied'))}>Copy address</Button>
    </div>
    {action.error ? <Help role="status">Copy failed; select the address and copy it.</Help> : null}
  </div>;
}

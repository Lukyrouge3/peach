/* 「网络与访问」分组：本机端口、Peach 代理、访问密码与公网入口。 */
import { useState, type FormEvent } from 'react';

import { SettingsRow } from '@/components/application/settings/settings-rows';
import { Button } from '@/components/base/buttons/button';

import { apiSend } from '../../api';
import type { ConfigurationGroupProps, PeachProxyState } from '../bundle';
import { Note } from '../components/note';
import { AccessSettings } from './access-settings';
import { groupRoot } from './configuration-panel';
import { PortSettings } from './port-settings';
import { ProxyAddressField, ProxyModeSelect } from './peach-proxy-fields';
import { TunnelSettings } from './tunnel-settings';
import { ErrorText, Footer, Rows, Section, Stack } from './section';
import { busyProps, useAction } from './use-action';

export function NetworkSettings({ data, receipt, panel, issues }: ConfigurationGroupProps) {
  return (
    <div {...groupRoot(panel)}>
      {issues}
      {data.network || (data.editable && data.port_editable !== false && !data.section_errors?.media_sources)
        ? <PortSettings data={data} receipt={receipt} /> : null}
      {data.access ? <AccessSettings initial={data.access} receipt={receipt} /> : null}
      {data.tunnel ? <TunnelSettings revision={data.revision} initial={data.tunnel} receipt={receipt} /> : null}
      {data.peach_proxy ? <PeachProxy initial={data.peach_proxy} receipt={receipt} /> : null}
    </div>
  );
}

export function PeachProxy({ initial, receipt }: { initial: PeachProxyState; receipt(message: string): void }) {
  const [saved, setSaved] = useState(initial);
  const [mode, setMode] = useState(initial.mode);
  const [address, setAddress] = useState('');
  const action = useAction();

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void action.run('save', (signal) => apiSend<PeachProxyState>('/api/configuration/peach-proxy', { mode, proxy: address }, 'POST', signal),
      (next) => { setSaved(next); setAddress(''); receipt('Settings saved'); });
  };

  return (
    <Section id="peachProxy" title="Peach proxy" onSubmit={submit}>
      <Rows>
        <SettingsRow label="Connection method">
          <ProxyModeSelect mode={mode} onChange={setMode} />
        </SettingsRow>
      </Rows>
      {mode === 'proxy' || saved.needs_selection || action.error ? (
        <Stack divided>
          {mode === 'proxy'
            ? <ProxyAddressField id="peachProxyAddress" value={address} onChange={setAddress} saved={saved.proxy_saved} />
            : null}
          {saved.needs_selection ? <Note tone="warning" title="Choose a connection method">Existing sources use different proxy addresses; choose a shared connection method.</Note> : null}
          {action.error ? <ErrorText>{action.error}</ErrorText> : null}
        </Stack>
      ) : null}
      <Footer>
        <Button type="submit" {...busyProps(action.busy === 'save')}>Save settings</Button>
      </Footer>
    </Section>
  );
}

/* 「应用与维护」的后半段：存储空间、数据上传、运行信息、安装教程与卸载。少改的隐私开关和只读信息在后，
 * 卸载是不可逆动作，留在整组最后。 */
import { useState, type FormEvent } from 'react';
import { confirmModal } from '@peach/legacy/ui';

import { SettingsCard, SettingsRow } from '@/components/application/settings/settings-rows';
import { Button } from '@/components/base/buttons/button';
import { Select, SelectItem } from '@/components/base/select/select';
import { Switch } from '@/components/base/switch/switch';

import { apiSend } from '../../api';
import type {
  AutomaticUpdateState, ConfigurationFact, ConfigurationGroupProps, ConfigurationProps, UninstallState,
} from '../bundle';
import { PathLine } from '../components/path-line';
import { groupRoot } from './configuration-panel';
import { LibrarySharingSettings } from './library-sharing-settings';
import { RemoteReportingSettings } from './remote-reporting-settings';
import { Disclosure, ErrorText, ExternalLink, Fact, FactList, Footer, Help, Rows, Section, Stack } from './section';
import { StorageSettings } from './storage-settings';
import { busyProps, useAction } from './use-action';

const INTERVALS = [['6', 'Every 6 hours'], ['24', 'Daily'], ['168', 'Weekly']] as const;

export function MaintenanceSettings(
  { data, receipt, reopenTutorial, panel }: ConfigurationGroupProps & Pick<ConfigurationProps, 'reopenTutorial'>,
) {
  return (
    <div {...groupRoot(panel)}>
      {data.storage ? <StorageSettings initial={data.storage} receipt={receipt} /> : null}
      {data.remote_reporting || data.library_sharing ? <Section id="librarySharing" title="Data upload">
        {data.remote_reporting ? <RemoteReportingSettings initial={data.remote_reporting} receipt={receipt} /> : null}
        {data.library_sharing ? <div className="border-t border-separator-border">
          <LibrarySharingSettings initial={data.library_sharing} receipt={receipt} />
        </div> : null}
      </Section> : null}
      <Facts facts={data.facts} />
      <TutorialSettings receipt={receipt} reopenTutorial={reopenTutorial} />
      {data.uninstall ? <UninstallSettings uninstall={data.uninstall} receipt={receipt} /> : null}
    </div>
  );
}

/** 安装教程的重开入口。教程卡本身还画在遗留层，这里只按一下让它回来。 */
export function TutorialSettings({ receipt, reopenTutorial }: ConfigurationProps) {
  const action = useAction();
  const reopen = () => void action.run('reopen', () => reopenTutorial(),
    () => receipt('Setup tutorial reopened'));
  return (
    <section aria-label="Setup tutorial" className="w-full"><SettingsCard>
      <Rows><SettingsRow label="Setup tutorial">
        <Button variant="secondary" onClick={reopen} {...busyProps(action.busy === 'reopen')}>Reopen tutorial</Button>
      </SettingsRow></Rows>
      {action.error ? <Stack><ErrorText>{action.error}</ErrorText></Stack> : null}
    </SettingsCard></section>
  );
}

export function AutomaticUpdates({ initial, receipt }: { initial: AutomaticUpdateState; receipt(message: string): void }) {
  const [mode, setMode] = useState(initial.mode);
  const [hours, setHours] = useState(initial.interval_hours);
  const action = useAction(initial.error);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!initial.available) return;
    void action.run('save', (signal) => apiSend<AutomaticUpdateState>('/api/configuration/automatic-updates',
      { mode, interval_hours: hours }, 'POST', signal), () => receipt('Settings saved'));
  };

  const help = !initial.available
    ? 'Automatic updates require a tray-managed service.'
    : initial.download_available
      ? 'Once the download finishes, confirm the restart to install here.'
      : undefined;
  return (
    <Section id="automaticUpdates" title="Automatic updates" onSubmit={submit}>
      <Rows>
        <SettingsRow label="Check for new versions automatically">
          <Switch aria-label="Check for new versions automatically" isSelected={mode !== 'off'} isDisabled={!initial.available}
            onChange={(on) => setMode(on ? 'check' : 'off')} />
        </SettingsRow>
        <SettingsRow label="Download updates automatically">
          <Switch aria-label="Download updates automatically" isSelected={mode === 'download'}
            isDisabled={!initial.available || !initial.download_available || mode === 'off'}
            onChange={(on) => setMode(on ? 'download' : 'check')} />
        </SettingsRow>
        <SettingsRow label="Check frequency" description={help}>
          <Select aria-label="Check frequency" selectedKey={String(hours)} isDisabled={!initial.available}
            onSelectionChange={(key) => { if (key !== null) setHours(Number(key)); }}>
            {INTERVALS.map(([key, name]) => <SelectItem key={key} id={key}>{name}</SelectItem>)}
          </Select>
        </SettingsRow>
      </Rows>
      {action.error ? <Stack divided><ErrorText>{action.error}</ErrorText></Stack> : null}
      <Footer>
        <Button type="submit" disabled={!initial.available} {...busyProps(action.busy === 'save')}>Save settings</Button>
      </Footer>
    </Section>
  );
}

function Facts({ facts }: { facts: ConfigurationFact[] }) {
  return (
    <Section title="Runtime info">
      <FactList>
        {facts.map((fact) => (
          <Fact key={fact.term} term={fact.term}>
            {fact.value}
            {fact.download_url ? <ExternalLink href={fact.download_url}>{fact.download_label}</ExternalLink> : null}
          </Fact>
        ))}
      </FactList>
    </Section>
  );
}

export function UninstallSettings(
  { uninstall, receipt }: { uninstall: UninstallState; receipt(message: string): void },
) {
  const [removeData, setRemoveData] = useState(false);
  const [accepted, setAccepted] = useState('');
  const remove = () => void confirmModal({
    title: 'Uninstall Peach',
    danger: true,
    body: removeData
      ? 'Peach will quit and remove the program, launch at startup, desktop icon, settings, local database, watch history, credentials and caches. Original media files are kept.'
      : 'Peach will quit and remove the program, launch at startup and desktop icon. Settings, local database, watch history and caches are kept.',
    confirmLabel: 'Uninstall Peach',
    onConfirm: async () => {
      const result = await apiSend<{ message: string }>('/api/configuration/uninstall', { delete_data: removeData, confirmation: 'Uninstall Peach' });
      setAccepted(result.message);
    },
  });
  // 底栏左边一句说这颗按钮此刻意味着什么：拦住卸载的理由（源码安装、更新还在跑）和按下去
  // 之后的回执都在答「这颗现在能不能按」，摆在正文末尾就得先读完整段说明才找得到。
  const status = accepted || uninstall.message;
  const paths = [...new Set([uninstall.data_root, ...uninstall.directories])];
  return (
    <Section id="uninstallPeach" title="Uninstall Peach">
      {uninstall.available ? <Stack><Help>Uninstalling removes the Peach program itself; original media files are kept.</Help></Stack> : null}
      <Rows>
        <SettingsRow label="Full uninstall" description="Also delete settings, the local database, watch history, credentials and caches">
          <Switch aria-label="Full uninstall" isSelected={removeData} isDisabled={!uninstall.full_available || Boolean(accepted)} onChange={setRemoveData} />
        </SettingsRow>
      </Rows>
      <Stack divided>
        <Disclosure summary="Data folder">
          {paths.map((path) => (
            <PathLine key={path} path={path} className="text-body-2-regular text-text-secondary" onRevealed={receipt} />
          ))}
        </Disclosure>
      </Stack>
      <Footer status={status ? <p role={accepted ? 'status' : undefined}>{status}</p> : null}>
        <Button variant="danger" disabled={!uninstall.available || Boolean(accepted)} onClick={remove}>Uninstall Peach</Button>
      </Footer>
    </Section>
  );
}

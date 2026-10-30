/* 「媒体库与入库」分组：媒体目录与自动入库，每个文件夹标着挂载状态。
 *
 * 服务端检查管理权限后用 `editable` 控制表单；没有权限时只说明原因。
 * 保存成功后显示持久提示和访问地址，等待服务就绪后跳转。
 *
 * 校验原因由服务端按字段给（400 的 `errors`），页面写回原位，不在前端复制一份路径与端口的判定。 */
import { useEffect, useRef, useState, type FormEvent } from 'react';

import { Button } from '@/components/base/buttons/button';
import { LinkButton } from '@/components/base/buttons/link-button';
import { Checkbox } from '@/components/base/checkbox/checkbox';
import { Input } from '@/components/base/input/input';
import { Select, SelectItem } from '@/components/base/select/select';
import { ConnectionStatus } from '../components/connection-status';

import { ApiError, apiSend, errorMessage } from '../../api';
import { CONFIGURATION_URL, PICK_FOLDER_URL } from '../../configuration-endpoints';
import type { ConfigurationData, ConfigurationGroupProps } from '../bundle';
import { Note } from '../components/note';
import { cardClass } from '../components/card';
import { queryClient } from '../query';
import { RESTART_REDIRECT_MS } from '../restart-redirect';
import { CloudDriveGuide } from './clouddrive-guide';
import { CloudProxySettings } from './cloud-proxy-settings';
import { CONFIGURATION_KEY, fetchConfiguration } from './configuration';
import { groupRoot } from './configuration-panel';
import {
  FolderField, FolderFieldLine, FolderRow, isCloudSource, MEDIA_SOURCES, MediaReadPolicy, MediaReadPolicyHelp, SourceSelect, sourceMark,
  useFolderRows,
} from './folder-rows';
import { sourceDefaultCost, type SourceCost } from '../../core/media-sources';
import { randomId } from '../../core/random-id';
import { libraryAutoChoice, LibraryIconPicker } from './library-icon-picker';
import {
  AUTO_STAGES, LibraryColorPicker, PolicyLegend, PresetSelect, StageChooser, type Preset, type Stage,
} from './library-policy-settings';
import { PushDiscoveryForm } from './push-discovery-settings';
import { rememberShape } from '../../configuration-skeleton';
import { useLibraryTints } from '../components/library-tint';
import { LIBRARY_FOLDER_HELP } from './library-policy-copy';
import {
  ErrorText, ExternalLink, Fact, FactList, Footer, Help, Section, SourceMark, Stack,
} from './section';
import { busyProps, useAction } from './use-action';

const sourceName = (location: string) => MEDIA_SOURCES.find(([kind]) => kind === location)?.[1] ?? location;
const sourceOptions = [...MEDIA_SOURCES, ['smb', 'SMB share'] as const];
/** 媒体库在下拉里的图标：选过就用选的，否则按来源自动识别，和标题行的图标键一致。 */
const libraryMark = (row: { library_icon: string; location: string; transport?: string }) => row.library_icon || libraryAutoChoice(row.transport === 'smb' ? 'smb' : row.location)[0];
const pickFolder = async (initial: string) =>
  (await apiSend<{ path: string | null }>(PICK_FOLDER_URL, { initial })).path;

interface MediaRow {
  transport: 'smb' | 'filesystem';
  smb_username?: string; smb_password?: string; smb_encrypt?: boolean; smb_clear?: boolean; smb_password_saved?: boolean;
  path: string; location: string; root: string; root_id?: string; library_id: string; library: string; library_icon: string;
  library_color: string; library_policy: Preset; library_stages: string; cost: SourceCost | ''; change_mode?: string;
}
/** 媒体库这一级的字段：同一媒体库的各行一起改、一起跟随。 */
const libraryFields = (row: MediaRow) => ({
  library_id: row.library_id, library: row.library, library_icon: row.library_icon,
  library_color: row.library_color, library_policy: row.library_policy, library_stages: row.library_stages,
});
const stagesOf = (row: MediaRow): readonly Stage[] =>
  row.library_stages ? AUTO_STAGES.filter(stage => row.library_stages.split(',').includes(stage)) : [];
interface FieldErrors { media_dirs?: string[]; port?: string }
interface SaveResult { saved: boolean; url: string; revision: string }

const blankRow = (path = ''): MediaRow => ({
  path, transport: path.startsWith('smb://') ? 'smb' : 'filesystem', location: 'local', root: '', library_id: randomId(), library: '', library_icon: '',
  library_color: '', library_policy: 'auto', library_stages: '', cost: 'free',
});

function initialRows(data: ConfigurationData): MediaRow[] {
  const known = data.media_sources?.filter((row) => MEDIA_SOURCES.some(([kind]) => kind === row.location));
  if (known?.length) {
    return known.map((row) => ({
      transport: row.transport === 'smb' || row.path.startsWith('smb://') ? 'smb' : 'filesystem',
      smb_username: row.smb_username, smb_password: '', smb_encrypt: row.smb_encrypt,
      smb_password_saved: row.smb_password_saved,
      path: row.path, location: row.location, root: row.root, library: row.library || '', library_icon: row.library_icon || '',
      library_color: row.library_color || '', library_policy: row.library_policy || 'auto', library_stages: row.library_stages || '',
      root_id: row.root_id, library_id: row.library_id || randomId(),
      cost: row.cost ?? sourceDefaultCost(row.location),
    }));
  }
  return (data.media_dirs.length ? data.media_dirs : ['']).map((path) => blankRow(path));
}

const fieldErrorsOf = (cause: unknown): FieldErrors | null => {
  if (!(cause instanceof ApiError) || cause.status !== 400) return null;
  return (cause.body as { errors?: FieldErrors } | null)?.errors ?? null;
};

/* 能编辑时挂载状态标在每个文件夹行上；只读时没有那张表，单列一块。 */
export function MediaSettings({ data, receipt, panel }: ConfigurationGroupProps) {
  const cloud = !!data.media_sources?.some(row => isCloudSource(row.location));
  // 首屏骨架照这一屏的结构排：每个媒体库几个文件夹、有没有 CloudDrive 代理，自动发现开了哪几项、几条前缀。
  useEffect(() => {
    if (data.editable) {
      const counts = new Map<string, number>();
      for (const row of initialRows(data)) counts.set(row.library_id, (counts.get(row.library_id) ?? 0) + 1);
      rememberShape('media', { folders: [...counts.values()], cloud });
    }
    const discovery = data.push_discovery;
    if (discovery) {
      rememberShape('discovery', { enabled: discovery.enabled, watchLocal: discovery.watch_local, cloud: discovery.cloud,
        webhook: discovery.enabled && discovery.cloud && Boolean(discovery.config_toml), prefixes: discovery.prefixes.length });
    }
  }, [data, cloud]);
  return (
    <div {...groupRoot(panel)}>
      {data.editable ? <MediaForm data={data} receipt={receipt} /> : <Note tone="neutral" title="Read-only">{data.notice}</Note>}
      {data.editable ? null : <MountStatus data={data} />}
      {cloud ? <CloudProxySettings receipt={receipt} /> : null}
      {data.push_discovery
        ? <PushDiscoveryForm initial={data.push_discovery} receipt={receipt} />
        : null}
    </div>
  );
}

function MediaForm({ data, receipt }: ConfigurationGroupProps) {
  const { rows, edit, add, remove, errors: rowErrors, setErrors: setRowErrors, picking, pick, inputRef } = useFolderRows({
    initial: () => initialRows(data), blank: () => blankRow(), pickFolder, describe: errorMessage,
  });
  const [scanNow, setScanNow] = useState(false);
  const [requireReadPolicy, setRequireReadPolicy] = useState(false);
  const [failure, setFailure] = useState('');
  const [smbResults, setSmbResults] = useState<Record<number, { message: string; directories: string[] }>>({});
  const [saved, setSaved] = useState<SaveResult | null>(null);
  const revision = useRef(data.revision);
  const action = useAction();
  // 订阅来源色样式表：改色时卡片当场试色，保存后服务端的颜色接替。
  useLibraryTints();
  const editLibrary = (index: number, patch: Partial<MediaRow>) => {
    rows.forEach((row, i) => { if (row.library_id === rows[index]!.library_id) edit(i, patch); });
  };
  // 每个媒体库取它的第一行作代表：新加的空文件夹排在后面，不改动这一库的图标与来源。
  const libraries = [...rows.reduce((found, row) => found.has(row.library_id) ? found : found.set(row.library_id, row),
    new Map<string, MediaRow>()).values()];
  // 「新建媒体库」把这个文件夹拆成新的一组，焦点交给新组的名称框，接着就能起名。
  const [named, setNamed] = useState<string | null>(null);
  useEffect(() => {
    if (!named) return;
    const input = document.querySelector<HTMLInputElement>(`[data-library-key="${CSS.escape(named)}"] [data-library-head] input`);
    input?.scrollIntoView({ block: 'center' });
    input?.focus();
    setNamed(null);
  }, [named]);
  const chooseLibrary = (index: number, key: string) => {
    const chosen = rows.find(row => row.library_id === key);
    if (chosen) {
      edit(index, libraryFields(chosen));
      return;
    }
    const created = randomId();
    edit(index, { library_id: created, library: '', library_icon: '', library_color: '', library_policy: 'auto', library_stages: '' });
    setNamed(created);
  };

  useEffect(() => {
    if (!saved) return undefined;
    const timer = setTimeout(() => location.assign(saved.url), RESTART_REDIRECT_MS);
    return () => clearTimeout(timer);
  }, [saved]);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const missing = rows.findIndex((row) => !row.cost);
    if (missing >= 0) {
      setRequireReadPolicy(true);
      const form = event.currentTarget;
      requestAnimationFrame(() => form.querySelector<HTMLButtonElement>(`[data-media-read-policy="${missing}"] button`)?.focus());
      return;
    }
    setFailure('');
    void action.run('save', (signal) => apiSend<SaveResult>(CONFIGURATION_URL, {
      revision: revision.current,
      media_dirs: rows.map((row) => row.path),
      ...(data.media_sources ? { media_sources: rows } : {}),
      port: String(data.port),
      scan_now: scanNow,
    }, 'POST', signal), (result) => {
      revision.current = result.revision;
      setRowErrors([]);
      receipt('Settings saved');
      setSaved(result);
    }, (cause) => {
      const fields = fieldErrorsOf(cause);
      setRowErrors(fields?.media_dirs ?? []);
      if (!fields || fields.port) setFailure(fields?.port || errorMessage(cause));
    });
  };

  if (saved) {
    return (
      <Section title="Media libraries and folders">
        <Stack>
          <Note tone="success" title="Settings saved">
            Peach is restarting. You'll be redirected shortly, or click<LinkButton href={saved.url} size="small">Go to library</LinkButton>. 
 </Note>
        </Stack>
      </Section>
    );
  }

  // 挂载状态是已保存的那份配置的读数，只标在路径没改过的行上。
  const mountOf = (row: MediaRow) => data.media_sources?.find(source => source.root_id === row.root_id && source.path === row.path);
  const cloud = rows.some((row) => isCloudSource(row.location));
  const missing = cloud ? (data.mount_dependencies ?? []).filter((dependency) => !dependency.available) : [];
  return (
    <Section title="Media libraries and folders" onSubmit={submit}>
      <Stack>
        {/* 按媒体库分组：名称、图标、来源色、处理方式属于媒体库，每组只写一次；
            下面列这个媒体库的文件夹，文件夹只管路径、来源与读取策略。 */}
        <PolicyLegend />
        <div role="group" aria-label="Media libraries and folders" className="flex flex-col gap-4">
          {libraries.map((library) => {
            const first = rows.findIndex(row => row.library_id === library.library_id);
            const members = rows.map((row, index) => ({ row, index })).filter(({ row }) => row.library_id === library.library_id);
            const preset = library.library_policy;
            const name = library.library || 'Untitled media library';
            return (
              /* 一个媒体库一张卡，照关注页「作者 → 来源」的结构：标题行在上、下面一道分隔线，
                 文件夹一行一行用通栏细线分开。 */
              <div key={library.library_id} data-library-block="" data-library-key={library.library_id}
                className={cardClass({ variant: 'raised', padding: 'none', className: 'flex flex-col p-2' })}
                data-library={library.library_color ? library.library_id : undefined}>
                <div data-library-head="">
                  <LibraryIconPicker label={`${name} icon`} value={library.library_icon} kind={library.transport === 'smb' ? 'smb' : library.location}
                    onChange={(library_icon) => editLibrary(first, { library_icon })} />
                  <Input className="w-full" aria-label={`${name} name`} maxLength={80} placeholder="Media library name"
                    value={library.library} onChange={(value) => editLibrary(first, { library: value })} />
                  <LibraryColorPicker id={library.library_id} name={library.library} value={library.library_color}
                    onChange={(library_color) => editLibrary(first, { library_color })} />
                  {/* 第一次切到自定义时先勾上全部步骤，用户再去掉不要的。 */}
                  <PresetSelect name={name} value={preset}
                    onChange={(value) => editLibrary(first, {
                      library_policy: value,
                      library_stages: value !== 'custom' ? '' : library.library_stages || AUTO_STAGES.join(','),
                    })} />
                </div>
                {preset === 'custom'
                  ? <StageChooser name={name} value={stagesOf(library)}
                    onChange={(value) => editLibrary(first, { library_stages: AUTO_STAGES.filter(stage => value.includes(stage)).join(',') })} />
                  : null}
                <div data-library-folders="" role="group" aria-label={`${name} folders`}>
                {members.map(({ row, index }) => (
                  <FolderRow key={index} label={`Media folder ${index + 1}`} path={row.path}
                    onPath={(path) => edit(index, { path, transport: path.startsWith('smb://') ? 'smb' : row.transport })} error={rowErrors[index]} inputRef={inputRef(index)}
                    picking={picking === index} onPick={() => void pick(index)}
                    onRemove={rows.length > 1 ? () => remove(index) : undefined}
                    status={mountOf(row) ? <MountBadge online={mountOf(row)?.online} /> : null}>
                    <FolderFieldLine>
                    <SourceSelect index={index} value={row.transport === 'smb' ? 'smb' : row.location} options={sourceOptions}
                      onChange={(source) => {
                        const smb = source === 'smb';
                        edit(index, { transport: smb ? 'smb' : 'filesystem', location: smb ? 'local' : source, cost: smb || source === 'local' ? 'free' : '',
                          path: smb ? (row.path.startsWith('smb://') ? row.path : 'smb://')
                            : row.path.startsWith('smb://') ? '' : row.path });
                        setSmbResults(current => { const next = { ...current }; delete next[index]; return next; });
                      }} />
                      <MediaReadPolicy index={index} cost={row.cost} onChange={(cost) => edit(index, { cost })}
                        error={requireReadPolicy && !row.cost ? 'Choose a media read policy' : undefined} />
                      {row.root_id && !mountOf(row) ? <FolderField label="Change type" className="w-full @lg:w-auto @lg:flex-1">
                        <Select className="w-full" aria-label={`Folder change type ${index + 1}`}
                          placeholder="Choose folder change type" selectedKey={row.change_mode || null}
                          onSelectionChange={key => {
                            if (key === 'add') edit(index, { root_id: undefined, root: '', change_mode: '' });
                            else edit(index, { change_mode: 'relocate' });
                          }}>
                          <SelectItem id="relocate">Relocate this folder, keeping file records</SelectItem>
                          <SelectItem id="add">Add another folder</SelectItem>
                        </Select>
                      </FolderField> : null}
                      {libraries.length > 1 ? <FolderField label="Move to media library" className="w-full @lg:w-48">
                        <Select className="w-full" aria-label={`Media library for folder ${index + 1}`} selectedKey={row.library_id}
                          renderValue={<span className="flex min-w-0 items-center gap-2"><SourceMark mark={libraryMark(library)} /><span className="truncate">{name}</span></span>}
                          onSelectionChange={key => { if (key) chooseLibrary(index, String(key)); }}>
                          {libraries.map(other => <SelectItem key={other.library_id} id={other.library_id} textValue={other.library || 'Untitled media library'}>
                            <span className="flex min-w-0 items-center gap-2"><SourceMark mark={libraryMark(other)} /><span className="truncate">{other.library || 'Untitled media library'}</span></span>
                          </SelectItem>)}
                          {/* 库里只有这一个文件夹时，拆出去等于原库改名，不给这一项。 */}
                          {members.length > 1 ? <SelectItem id="new" textValue="New media library">
                            <span className="flex min-w-0 items-center gap-2"><SourceMark mark="plus" /><span>New media library</span></span>
                          </SelectItem> : null}
                        </Select>
                      </FolderField> : null}
                    </FolderFieldLine>
                    {row.transport === 'smb' ? <div className="flex w-full flex-col gap-2">
                      <FolderFieldLine>
                        <FolderField label="SMB account" className="w-full @lg:flex-1">
                          <Input aria-label={`SMB account ${index + 1}`} value={row.smb_username || ''}
                            autoComplete="off" onChange={value => edit(index, { smb_username: value })} />
                        </FolderField>
                        <FolderField label="SMB password" className="w-full @lg:flex-1">
                          <Input aria-label={`SMB password ${index + 1}`} type="password" value={row.smb_password || ''}
                            autoComplete="new-password" placeholder={row.smb_password_saved ? 'Leave empty to keep the saved password' : ''}
                            onChange={value => edit(index, { smb_password: value })} />
                        </FolderField>
                      </FolderFieldLine>
                      <Checkbox isSelected={row.smb_encrypt || false} onChange={value => edit(index, { smb_encrypt: value })}>Require SMB encryption</Checkbox>
                      <Checkbox isSelected={row.smb_clear || false} onChange={value => edit(index, { smb_clear: value })}>Remove saved SMB account</Checkbox>
                      <Button className="self-start" variant="secondary" {...busyProps(action.busy === `smb-${index}`)}
                        onClick={() => void action.run(`smb-${index}`, signal => apiSend<{ readable: boolean; directories: string[] }>(
                          '/api/configuration/smb/test', row, 'POST', signal), result => setSmbResults(current => ({
                            ...current, [index]: { message: 'Shared folder is readable', directories: result.directories },
                          })), cause => setSmbResults(current => ({ ...current,
                            [index]: { message: errorMessage(cause), directories: [] },
                          })))}>Test connection</Button>
                      {smbResults[index] ? <Help>{smbResults[index].message}</Help> : null}
                      {smbResults[index]?.directories.length ? <Select aria-label={`SMB subfolder ${index + 1}`} placeholder="Open subfolder"
                        selectedKey={null} onSelectionChange={key => { if (key) {
                          edit(index, { path: row.path.replace(/\/$/, '') + '/' + encodeURIComponent(String(key)) });
                          setSmbResults(current => ({ ...current, [index]: { message: 'Test this subfolder', directories: [] } }));
                        } }}>
                        {smbResults[index].directories.map(name => <SelectItem key={name} id={name}>{name}</SelectItem>)}
                      </Select> : null}
                      <Help>Enter the address as smb://server/share/folder. Reads and writes follow the share account's permissions; organizing and deleting happen only through their actions, and metadata and previews are stored in the Peach data folder.</Help>
                    </div> : null}
                  </FolderRow>
                ))}
                {/* 每个媒体库自己的「添加文件夹」：新文件夹直接挂进这一库，共用它的名称、颜色与处理方式，来源与读取策略先沿用这一库第一个文件夹。 */}
                <div className="flex">
                  <Button variant="secondary" aria-label={`Add a folder to ${name}`} onClick={() => {
                    add();
                    edit(rows.length, { ...libraryFields(library), location: library.location, cost: library.cost });
                  }}>Add folder</Button>
                </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* 「添加媒体库」新建一组，名称、图标、来源色与处理方式都单独设。 */}
        <Button variant="secondary" className="self-start" onClick={add}>Add media library</Button>
        <Help>{LIBRARY_FOLDER_HELP}</Help>
        {cloud ? <><MediaReadPolicyHelp /><CloudDriveGuide /></> : null}
        {missing.map((dependency) => (
          <Help key={dependency.name}>
            Not detected {dependency.name}. <ExternalLink href={dependency.download_url}>Download {dependency.name}</ExternalLink>
          </Help>
        ))}
        <Checkbox isSelected={scanNow} onChange={setScanNow}>Scan and fill in metadata after saving</Checkbox>
        {failure ? <Note tone="error" title="Not saved">{failure}</Note> : null}
      </Stack>
      <Footer status="Peach restarts after saving.">
        <Button type="submit" {...busyProps(action.busy === 'save')}>Save settings</Button>
      </Footer>
    </Section>
  );
}

function MountBadge({ online }: { online: boolean | undefined }) {
  return <ConnectionStatus online={online} />;
}

/* 重取回来的是整份配置，换进整页那一个键：屏幕上只有一份真相，页面上别处读到的
   也是这一次的结果。另存一份的话，挂载点在这里是新的、在「这台电脑」那张表单里还是旧的。 */
function MountStatus({ data }: { data: ConfigurationData }) {
  const sources = data.media_sources;
  const action = useAction();
  if (!sources) return null;
  const refresh = () => void action.run('refresh', (signal) => fetchConfiguration(signal),
    (result) => queryClient.setQueryData(CONFIGURATION_KEY, result));
  return (
    <Section title="Mount status">
      <FactList>
        {sources.map((row, index) => (
          <Fact key={index} term={<><SourceMark mark={sourceMark(row.location)} />{sourceName(row.location)}</>}>
            {row.path || 'No mount point configured'}<MountBadge online={row.online} />
          </Fact>
        ))}
      </FactList>
      {action.error ? <Stack divided><ErrorText>{action.error}</ErrorText></Stack> : null}
      <Footer>
        <Button variant="secondary" onClick={refresh} {...busyProps(action.busy === 'refresh')}>Refresh mount status</Button>
      </Footer>
    </Section>
  );
}

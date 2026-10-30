/* 首次设置表单。题目、默认值、显隐与随平台变化的文案来自 `GET /api/setup/questions`；
 * 分组标题、按钮与「完成设置后」那一组是页面骨架，写在这里。
 *
 * 提交走 `POST /api/setup`。400 的 `errors` 按题目 key 写回原位：媒体目录按行对齐，整表不成立
 * 的那一句放在目录区上方；高级设置里任一项出错就展开它；访问密码出错时开关保持打开。已填的
 * 内容都留在原地，焦点落到第一个标错的框。 */
import { useEffect, useRef, useState, type CSSProperties, type FormEvent } from 'react';
import { RiFolderLine, RiSearchLine, RiPlayCircleLine } from '@remixicon/react';

import { Button } from '@/components/base/buttons/button';
import { IconButton } from '@/components/base/buttons/icon-button';
import { Checkbox } from '@/components/base/checkbox/checkbox';
import { Input } from '@/components/base/input/input';
import { Label } from '@/components/base/input/label';
import { Switch } from '@/components/base/switch/switch';
import { Select, SelectItem } from '@/components/base/select/select';

import { randomId } from '../../../core/random-id';
import { Note } from '../../components/note';
import { ConfigurationChoice, ConfigurationInput } from '../../components/configuration-fields';
import { busyProps } from '../../settings/busy-props';
import {
  FolderField, FolderFieldLine, FolderRow, FolderSearchIcon, isCloudSource, MediaReadPolicy, MediaReadPolicyHelp,
  SourceSelect, useFolderRows,
} from '../../settings/folder-rows';
import { LibraryIconPicker, libraryAutoChoice } from '../../settings/library-icon-picker';
import { AUTO_STAGES, LibraryColorPicker, PresetSelect, StageChooser, type Stage } from '../../settings/library-policy-settings';
import { PasswordPair } from '../../settings/password-pair';
import { isLoopbackProxy, ProxyAddressField, ProxyModeSelect } from '../../settings/peach-proxy-fields';
import { ReportingChoices } from '../../settings/remote-reporting-settings';
import { Disclosure, ErrorText, ExternalLink, Fact, FactList, Help, SourceMark } from '../../settings/section';
import { CardGroup, GroupTitle } from '../auth-card';
import {
  describeFailure, pickFolder, SetupRequestError, submitSetup,
  type SetupDone, type SetupErrors, type SetupFolder, type SetupQuestion, type SetupQuestions, type SetupSubmission,
} from './setup-api';
import { libraryFields, processingSummary } from './setup-processing';
import { SetupShell } from './setup-scene';

/** 这几项出错时「高级设置」自己展开：错在折叠里的框，人看不见。 */
const ADVANCED_KEYS = ['port', 'mdns_name'];

/** 媒体目录那一项的错误：与行数对得上就按行写回，否则是整表一句。 */
function folderErrors(value: SetupErrors[string], count: number): { rows: string[]; table: string } {
  if (Array.isArray(value)) {
    return value.length === count ? { rows: value, table: '' } : { rows: [], table: value.filter(Boolean).join(' ') };
  }
  return { rows: [], table: value ?? '' };
}

function scanLabel(paths: string[]): string {
  if (!paths.length) return 'Scan media folders after setup';
  return `Scan ${paths.length} folders after setup`;
}

const text = (value: SetupErrors[string]) => (Array.isArray(value) ? value.filter(Boolean).join(' ') : value ?? '');

export function SetupForm({ setup, onDone, onRestore }: { setup: SetupQuestions; onDone: (done: SetupDone) => void; onRestore?: () => void }) {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const stepTitle = useRef<HTMLHeadingElement>(null);
  const stepScroll = useRef<HTMLDivElement>(null);
  const move = (next: number) => { setDirection(next > step ? 1 : -1); setStep(next); };
  useEffect(() => {
    stepTitle.current?.focus({ preventScroll: true });
    stepScroll.current?.scrollTo({ top: 0 });
  }, [step]);
  const media = setup.questions.find((question) => question.input === 'folders');
  const dataRoot = setup.questions.find((question) => question.input === 'folder');
  const fields = setup.questions.filter((question) => question.input !== 'folders');
  const host = fields.find((question) => question.key === 'host');
  const others = fields.filter((question) => question.input !== 'folder' && question.key !== 'host');
  const sources = setup.media_sources.map(({ value, label }) => [value, label] as const);
  const firstLibrary = useRef<Partial<SetupFolder>>({ library_id: randomId(), library: 'My media library',
    library_icon: '', library_color: '', library_policy: 'auto' });
  const blank = (path = ''): SetupFolder => ({ path, location: setup.media_source_default, root: '', ...firstLibrary.current,
    cost: setup.media_source_default === 'local' ? 'free' : '' });
  const folders = useFolderRows<SetupFolder>({
    initial: () => [blank()], blank: () => blank(), pickFolder, describe: describeFailure,
    focusAfterPick: true,
  });
  firstLibrary.current = libraryFields(folders.rows[0]);
  const [values, setValues] = useState<Record<string, string>>(
    () => Object.fromEntries(fields.map((question) => [question.key, question.default])));
  const [pickingData, setPickingData] = useState(false);
  const [pickError, setPickError] = useState('');
  const [accessOn, setAccessOn] = useState(setup.access_enabled);
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [scanNow, setScanNow] = useState(setup.scan_now);
  const [skipMedia, setSkipMedia] = useState(false);
  const [reporting, setReporting] = useState(setup.remote_reporting);
  const [proxyMode, setProxyMode] = useState(setup.peach_proxy?.mode ?? 'environment');
  const [proxyAddress, setProxyAddress] = useState('');
  const [errors, setErrors] = useState<SetupErrors>({});
  const [tableError, setTableError] = useState('');
  const [failure, setFailure] = useState('');
  const [busy, setBusy] = useState(false);
  const [requireReadPolicy, setRequireReadPolicy] = useState(false);
  // 每次因为错误要展开就换一个 key：折叠按初始状态展开，已填的值都在这一层的 state 里。
  const [advancedOpenings, setAdvancedOpenings] = useState(0);
  const form = useRef<HTMLFormElement>(null);
  const addButton = useRef<HTMLButtonElement>(null);
  // 写回之后焦点交给第一个标错的框。错误在 await 之后才到，React 不在点击那一刻同步提交，
  // 所以等这一轮落到 DOM 上再找，不赌下一帧之前一定画完。
  const [errorRound, setErrorRound] = useState(0);
  useEffect(() => {
    if (errorRound) [...(form.current?.querySelectorAll<HTMLElement>('input[aria-invalid="true"]') ?? [])]
      .find(input => !input.closest('[hidden]'))?.focus();
  }, [errorRound]);
  // 写回的错误放进框下的提示：`role="alert"` 让读屏在它出现时播报一次，提示本身仍由
  // `aria-describedby` 挂在框上，文字在页面上只有这一份。`key` 跟着提交轮次换，同一句错误
  // 再提交一次也会重新播报。
  const announce = (message: string | undefined) =>
    message ? <span key={errorRound} role="alert">{message}</span> : undefined;

  const visible = (question: SetupQuestion) =>
    !question.visible_when || Object.entries(question.visible_when).every(([key, value]) => values[key] === value);
  const setValue = (key: string, value: string) => setValues((current) => ({ ...current, [key]: value }));

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (busy) return;
    if (step < 3) {
      move(step + 1);
      return;
    }
    const missing = skipMedia ? -1 : folders.rows.findIndex((row) => !row.cost);
    if (missing >= 0) {
      setRequireReadPolicy(true);
      move(1);
      requestAnimationFrame(() => form.current?.querySelector<HTMLButtonElement>(`[data-media-read-policy="${missing}"] button`)?.focus());
      return;
    }
    setBusy(true);
    setFailure('');
    const submission: SetupSubmission = {
      media_dir: skipMedia ? [] : folders.rows.map(row => ({ ...row, library: row.library?.trim() || 'Untitled media library' })),
      skip_media: skipMedia, access_enabled: accessOn, scan_now: !skipMedia && scanNow,
      peach_proxy: { mode: proxyMode, proxy: proxyMode === 'proxy' ? proxyAddress : '' },
      ...(setup.history_guide ? { history_guide: true } : {}),
      ...(reporting ? { remote_reporting: { usage: reporting.usage, errors: reporting.errors } } : {}),
    };
    // 隐藏的题不提交，服务端按题目默认值补上。
    for (const question of fields) if (visible(question)) submission[question.key] = values[question.key] ?? '';
    if (accessOn) Object.assign(submission, { access_password: password, access_confirm: confirmation });
    try {
      onDone(await submitSetup(submission));
    } catch (cause) {
      if (cause instanceof SetupRequestError && cause.status === 400 && cause.errors) {
        const found = cause.errors;
        const { rows, table } = folderErrors(found.media_dir, folders.rows.length);
        folders.setErrors(rows);
        setTableError(table);
        setErrors(found);
        if (ADVANCED_KEYS.some((key) => found[key])) setAdvancedOpenings((count) => count + 1);
        if (found.access_password) setAccessOn(true);
        move(found.media_dir || (dataRoot && found[dataRoot.key]) ? 1 : 2);
        setErrorRound((count) => count + 1);
      } else {
        setFailure(describeFailure(cause));
      }
    } finally {
      setBusy(false);
    }
  };

  const field = (question: SetupQuestion) => {
    const error = text(errors[question.key]);
    const help = question.help.join('');
    if (question.input === 'choice') {
      return (
        <ConfigurationChoice key={question.key} id={`setup-${question.key}`} label={question.label}
          value={values[question.key] ?? question.default} onChange={(value) => setValue(question.key, value)}
          options={question.options ?? []} isInvalid={Boolean(error)}>
          {help ? <Help>{help}</Help> : null}
          {error ? <ErrorText key={errorRound}>{error}</ErrorText> : null}
        </ConfigurationChoice>
      );
    }
    return (
      <ConfigurationInput key={question.key} id={`f-${question.key}`} label={question.label} isRequired={question.required}
        inputMode={question.input === 'number' ? 'numeric' : undefined} autoComplete="off" spellCheck="false"
        value={values[question.key] ?? ''} onChange={(value) => setValue(question.key, value)}
        prefix={question.prefix} suffix={question.suffix}
        validationBehavior="aria" isInvalid={Boolean(error)} hint={announce(error) ?? (help || undefined)} />
    );
  };

  const pickDataRoot = async () => {
    if (!dataRoot || pickingData) return;
    setPickingData(true);
    setPickError('');
    try {
      const path = await pickFolder(values[dataRoot.key] ?? '');
      if (path) setValue(dataRoot.key, path);
    } catch (cause) {
      setPickError(describeFailure(cause));
    } finally {
      setPickingData(false);
    }
  };
  const dataRootError = dataRoot ? text(errors[dataRoot.key]) || pickError : '';

  const filled = folders.rows.map((row) => row.path.trim()).filter(Boolean);
  const cloud = folders.rows.some((row) => isCloudSource(row.location));
  const libraries = [...new Map(folders.rows.map(row => [row.library_id, row])).values()];
  const editLibrary = (row: SetupFolder, patch: Partial<SetupFolder>) => folders.rows.forEach((other, index) => {
    if (other.library_id === row.library_id) folders.edit(index, patch);
  });
  const lan = values.host === '2';
  const address = lan && !setup.standalone
    ? `https://${values.mdns_name || 'peach'}.local/`
    : `http://${lan ? `${values.mdns_name || 'peach'}.local` : '127.0.0.1'}:${values.port || '8900'}/`;
  return (
    <SetupShell step={step}>
    <form ref={form} noValidate onSubmit={(event) => void submit(event)} aria-labelledby="auth-card-title"
      data-setup-form-panel="">
      <div data-setup-top="">
        <div data-setup-progress="" role="img" aria-label={`First-time setup, step ${step + 1} of 4`}>
          {[0, 1, 2, 3].map(index => <span key={index} data-active={index === step || undefined} data-complete={index < step || undefined} />)}
        </div>
        <span className="text-body-2-regular text-text-secondary">First-time setup</span>
      </div>
      <div data-setup-step-scroll="" ref={stepScroll}>
      <div data-setup-step-content="" style={{ '--setup-direction': `${direction * 20}px` } as CSSProperties}>
        <header data-setup-step-heading="" key={step}>
          <h1 id="auth-card-title" data-copy-key={`setup.title.${step}`} ref={stepTitle} tabIndex={-1} className="text-title-1-semibold text-text-primary">
            {step === 0 ? 'Welcome to Peach' : step === 1 ? 'Where is your media?' : step === 2 ? 'Where will you use Peach?' : 'Ready to start'}
          </h1>
          <p data-copy-key={`setup.description.${step}`} className="text-body-regular text-text-secondary">
            {step === 0 ? 'Take a moment to make Peach yours.' : step === 1 ? 'Connect existing folders, or look around the interface first.' : step === 2 ? 'Choose the access scope; you can also set a password for the library.' : 'Confirm these choices and leave the rest to Peach.'}
          </p>
        </header>
      <div hidden={step !== 0}>
        <ul data-setup-welcome-points="">
          <li><RiFolderLine /><div data-setup-welcome-copy=""><strong className="text-body-medium">Connect your media library</strong><p className="text-body-2-regular text-text-secondary">Local folders and mounted cloud drives can both be organized.</p></div></li>
          <li><RiSearchLine /><div data-setup-welcome-copy=""><strong className="text-body-medium">Find what you want faster</strong><p className="text-body-2-regular text-text-secondary">Browse the library with search, tags and favorites.</p></div></li>
          <li><RiPlayCircleLine /><div data-setup-welcome-copy=""><strong className="text-body-medium">Play your way</strong><p className="text-body-2-regular text-text-secondary">Playback and appearance preferences can be adjusted in settings any time.</p></div></li>
        </ul>
      </div>
      <div hidden={step !== 1}>
      {media ? (
        <CardGroup first labelledBy="setup-media-title">
          <GroupTitle id="setup-media-title">
            {media.label}
          </GroupTitle>
          <Checkbox isSelected={skipMedia} onChange={setSkipMedia}>Add media library later</Checkbox>
          {skipMedia ? <Help>After setup, you can add your own media folders under “Media libraries and import”.</Help> : <>
          {tableError ? <ErrorText key={errorRound}>{tableError}</ErrorText> : null}
          <div role="group" aria-labelledby="setup-media-title" className="flex flex-col gap-3">
            {libraries.map(library => <div key={library.library_id} data-library-block="" data-setup-library-block="">
              <div data-library-head="">
                <LibraryIconPicker label={`${library.library || 'Untitled media library'} Icon`} value={library.library_icon || ''} kind={library.location}
                  onChange={library_icon => editLibrary(library, { library_icon })} />
                <Input className="w-full" aria-label={`${library.library || 'Untitled media library'} Name`} placeholder="Media library name" maxLength={80}
                  value={library.library || ''} onChange={value => editLibrary(library, { library: value })} />
                <LibraryColorPicker id={library.library_id || ''} name={library.library || 'Untitled media library'} value={library.library_color || ''}
                  onChange={library_color => editLibrary(library, { library_color })} />
                <div data-setup-library-policy=""><PresetSelect name={library.library || 'Untitled media library'} value={library.library_policy || 'auto'}
                  onChange={library_policy => editLibrary(library, { library_policy,
                    library_stages: library_policy === 'custom' ? library.library_stages || AUTO_STAGES.join(',') : '' })} /></div>
              </div>
              {library.library_policy === 'custom' ? <StageChooser name={library.library || 'Untitled media library'}
                value={(library.library_stages?.split(',').filter(Boolean) ?? AUTO_STAGES) as Stage[]}
                onChange={value => editLibrary(library, { library_stages: value.join(',') })} /> : null}
              <div data-library-folders="" role="group" aria-label={`${library.library || 'Untitled media library'} folders`}>
            {folders.rows.map((row, index) => row.library_id === library.library_id ? (
              <FolderRow key={index} label={`${media.label} ${index + 1}`} path={row.path}
                onPath={(path) => folders.edit(index, { path })} error={announce(folders.errors[index])}
                inputRef={folders.inputRef(index)} picking={folders.picking === index}
                onPick={() => void folders.pick(index)}
                onRemove={folders.rows.length > 1 ? () => { folders.remove(index); addButton.current?.focus(); } : undefined}>
                <FolderFieldLine>
                  <SourceSelect index={index} value={row.location} options={sources}
                    onChange={(location) => folders.edit(index, { location, cost: location === 'local' ? 'free' : '' })} />
                  <MediaReadPolicy index={index} cost={row.cost ?? ''}
                    error={requireReadPolicy && !row.cost ? 'Choose a media read policy' : undefined}
                    onChange={(cost) => folders.edit(index, { cost })} />
                  {libraries.length > 1 ? <FolderField label="Move to media library" className="w-full @lg:w-60">
                    <Select className="w-full" aria-label={`Media library for folder ${index + 1}`} selectedKey={row.library_id}
                      renderValue={<span className="flex min-w-0 items-center gap-2"><SourceMark mark={row.library_icon || libraryAutoChoice(row.location)[0]} /><span className="truncate">{row.library || 'Untitled media library'}</span></span>}
                      onSelectionChange={key => {
                        const other = folders.rows.find(value => value.library_id === key);
                        if (other) folders.edit(index, libraryFields(other));
                      }}>
                      {[...new Map(folders.rows.map(value => [value.library_id, value])).values()].map(value => (
                        <SelectItem key={value.library_id} id={value.library_id}>{value.library || 'Untitled media library'}</SelectItem>
                      ))}
                    </Select>
                  </FolderField> : null}
                </FolderFieldLine>
              </FolderRow>
            ) : null)}
              <div className="flex"><Button variant="secondary" data-copy-interact aria-label={`Add a folder to ${library.library || 'Untitled media library'}`}
                onClick={() => { folders.add(); folders.edit(folders.rows.length,
                  { ...libraryFields(library), location: library.location, cost: library.cost }); }}>Add folder</Button></div>
              </div>
            </div>)}
          </div>
          <Button ref={addButton} variant="secondary" className="self-start" data-copy-interact onClick={() => {
            folders.add(); folders.edit(folders.rows.length, { library_id: randomId(), library: `Media library ${libraries.length + 1}`,
              library_icon: '', library_color: '', library_policy: 'auto', library_stages: undefined });
          }}>
            Add media library
          </Button>
          {cloud ? (
            <>
              <MediaReadPolicyHelp />
              <Help>{setup.cloud.help}<ExternalLink href={setup.cloud.link.url}>{setup.cloud.link.label}</ExternalLink></Help>
              {setup.cloud.dependencies.map((dependency) => (
                <Help key={dependency.name}>
                  {dependency.message}<ExternalLink href={dependency.download_url}>{dependency.download_label}</ExternalLink>
                </Help>
              ))}
            </>
          ) : null}
          {media.help.map((line) => <Help key={line}>{line}</Help>)}
          </>}
        </CardGroup>
      ) : null}

      {dataRoot ? (
        <CardGroup labelledBy="setup-data-title">
          <GroupTitle id="setup-data-title">
            {dataRoot.label}<span aria-hidden className="ml-0.5 text-text-error-primary">*</span>
          </GroupTitle>
          <div className="flex items-start gap-2">
            <Input className="min-w-0 flex-1" id={`f-${dataRoot.key}`} aria-label={dataRoot.label} isRequired
              autoComplete="off" spellCheck="false" value={values[dataRoot.key] ?? ''}
              onChange={(value) => setValue(dataRoot.key, value)}
              validationBehavior="aria" isInvalid={Boolean(dataRootError)} hint={announce(dataRootError)} />
            <IconButton icon={FolderSearchIcon} aria-label="Choose data folder" onClick={() => void pickDataRoot()}
              {...busyProps(pickingData)} />
          </div>
          {dataRoot.help.map((line) => <Help key={line}>{line}</Help>)}
        </CardGroup>
      ) : null}

      </div>
      <div hidden={step !== 2}>
      <CardGroup first labelledBy="auth-card-title">
        {host ? field(host) : null}
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 flex-col gap-0.5">
            <Label id="setup-password-title" elementType="span">Access password</Label>
            <p id="setup-access-description" className="text-body-2-regular text-text-secondary">When on, Peach requires signing in.</p>
          </div>
          <Switch aria-labelledby="setup-password-title" aria-describedby="setup-access-description"
            isSelected={accessOn} onChange={setAccessOn} />
        </div>
        <Help>{lan ? 'A password is recommended for LAN access. Without one, any device on the same network that can reach Peach gets straight in.'
          : 'Only this computer can access Peach; with a password set, opening Peach still requires signing in.'}</Help>
        {accessOn
          ? <PasswordPair label="Access password" password={password} confirmation={confirmation}
              onPassword={setPassword} onConfirmation={setConfirmation}
              passwordError={announce(text(errors.access_password))} passwordHint="Enter 8–256 characters."
              confirmationInvalid={Boolean(errors.access_password)} />
          : null}
      </CardGroup>

      <CardGroup labelledBy="setup-proxy-title">
        <GroupTitle id="setup-proxy-title">Peach proxy</GroupTitle>
        <Help>Used for metadata scraping, covers and tool downloads; can be changed on the settings page.</Help>
        <div className="flex flex-col items-start gap-1.5">
          <Label elementType="span" id="setup-proxy-mode-label">Connection method</Label>
          <ProxyModeSelect mode={proxyMode} onChange={setProxyMode} labelledBy="setup-proxy-mode-label" />
        </div>
        {proxyMode === 'proxy'
          ? <ProxyAddressField id="setupProxyAddress" value={proxyAddress} onChange={setProxyAddress}
              saved={setup.peach_proxy?.proxy_saved} error={announce(text(errors.peach_proxy))} />
          : errors.peach_proxy ? <ErrorText key={errorRound}>{text(errors.peach_proxy)}</ErrorText> : null}
        {setup.docker && proxyMode === 'proxy' && isLoopbackProxy(proxyAddress)
          ? <Note tone="warning" title="Enter a proxy address the container can reach">Loopback addresses point to the container itself; for a host proxy, use a host address the container can reach.</Note>
          : null}
        {setup.peach_proxy?.needs_selection
          ? <Note tone="warning" title="Choose a connection method">Existing sources use different proxy addresses; choose a shared connection method.</Note>
          : null}
      </CardGroup>

      <CardGroup>
        <Disclosure key={advancedOpenings} summary="Advanced settings" defaultOpen={advancedOpenings > 0}>
          <div className="flex flex-col gap-4">{others.filter(visible).map(field)}</div>
        </Disclosure>
        <Help><span className="break-all">Access address: {address}</span></Help>
      </CardGroup>

      </div>
      <div hidden={step !== 3}>
      <CardGroup first labelledBy="setup-options-title">
        <GroupTitle id="setup-options-title">First scan</GroupTitle>
        {skipMedia ? <Help>After adding media folders, choose a handling option and start scanning.</Help> : <>
        <div className="flex flex-col gap-1.5">
          <Checkbox isSelected={scanNow} onChange={setScanNow}>{scanLabel(filled)}</Checkbox>
          <Help>{scanNow ? 'The scan starts in the background, and you can use Peach meanwhile.' : 'Save the handling option first, then start scanning later under “Media libraries and import”.'}</Help>
        </div>
        {folders.rows.some(row => row.cost === 'metered')
          ? <Help>Folders with proxy protection don't read video info or generate previews automatically; videos are read when played.</Help>
          : null}
        </>}
      </CardGroup>

      {failure ? <ErrorText>{failure}</ErrorText> : null}
      {reporting ? <CardGroup>
        <GroupTitle>Version stats and error diagnostics</GroupTitle>
        <ReportingChoices value={reporting} onChange={setReporting} />
        <Help>Library and taste detail uploads are off by default; review and choose under “App and maintenance”.</Help>
      </CardGroup> : null}
      <CardGroup labelledBy="setup-summary-title">
        <GroupTitle id="setup-summary-title">Confirm settings</GroupTitle>
        <FactList>
          <Fact term="Media folders">{skipMedia ? 'Add later' : filled.length ? `${filled.length} folders · ${libraries.length} media libraries` : 'Not filled in yet'}</Fact>
          <Fact term="Data folder"><span className="break-all">{dataRoot ? values[dataRoot.key] || 'Not filled in yet' : 'Not obtained'}</span></Fact>
          <Fact term="Access scope">{lan ? 'Devices on the same LAN' : 'Only this computer'} · {accessOn ? 'Use access password' : 'No access password set'}</Fact>
          <Fact term="First scan">{!skipMedia && scanNow ? 'Start after setup' : 'Start manually later'}</Fact>
          {reporting ? <Fact term="Diagnostic feedback">{reporting.usage || reporting.errors ? 'On; adjust above' : 'Off'}</Fact> : null}
          {!skipMedia ? libraries.map(row => <Fact key={row.library_id} term={row.library || 'Untitled media library'}>{processingSummary(row)}</Fact>) : null}
        </FactList>
      </CardGroup>
      </div>
      </div>
      </div>
      <footer data-setup-footer="" key={step} data-copy-interact>
        {step > 0 ? <Button variant="ghost" onClick={() => { if (!busy) move(step - 1); }} aria-disabled={busy || undefined}>Back</Button>
          : <Button variant="ghost" onClick={onRestore}>Use existing data</Button>}
        <Button type="submit" {...busyProps(busy)}>{step === 0 ? 'Start setup' : step === 3 ? 'Finish setup' : 'Continue'}</Button>
      </footer>
    </form>
    </SetupShell>
  );
}

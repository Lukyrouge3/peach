import { useEffect, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { RiArrowDownSLine, RiArrowRightLine } from '@remixicon/react';
import { Dialog, Popover } from 'react-aria-components';
import { Button } from '@/components/base/buttons/button';
import { LinkButton } from '@/components/base/buttons/link-button';
import { MENU_ITEM, MENU_ITEM_INTERACTIVE, MENU_POPOVER_SURFACE } from '@/components/base/dropdown/menu-styles';
import { cx } from '@/utils/cx';
import { formModal } from '@peach/legacy/ui';
import { useMovingSurface } from '../components/use-moving-surface';
import { busyProps } from '../settings/use-action';
import { errorMessage } from '../../api';
import { fetchProcessingEstimate, type LibraryProcessingCommand, type ProcessingSpeed, type ProcessingTraffic } from './library-processing';
import { ProcessingEffort } from './processing-effort';
import { TrafficProgress } from './processing-traffic';

interface ProcessingOption {
  label: string; description: string; command: LibraryProcessingCommand; disabled?: boolean;
}

function ProcessingMenuGroup({ label, maintenance = false, children }: {
  label: string; maintenance?: boolean; children: ReactNode;
}) {
  const ref = useMovingSurface('hover');
  return <div ref={ref} role="group" aria-label={label} data-processing-maintenance={maintenance || undefined}
    className={cx('flex flex-col gap-1', maintenance && 'mt-2 rounded-lg bg-background-secondary-default p-1 pt-3')}>
    {children}
  </div>;
}

function ProcessingMenuOption({ option, metadataOnly, onRun }: {
  option: ProcessingOption; metadataOnly: boolean; onRun(command: LibraryProcessingCommand): void;
}) {
  const blocked = metadataOnly && option.command.stage === 'previews';
  const disabled = blocked || option.disabled;
  return <button type="button" disabled={disabled}
    title={blocked ? 'Turn on video preview generation in the media library settings first' : undefined}
    className={cx(MENU_ITEM, disabled ? 'cursor-not-allowed opacity-50' : MENU_ITEM_INTERACTIVE, 'text-body-2-medium')}
    onClick={() => onRun(option.command)}><span className="flex min-w-0 flex-col gap-1">
      <span>{option.label}</span><span className="text-caption-1-regular text-text-secondary">{option.description}</span>
    </span></button>;
}

function ProcessingPrompt({ command, speed, dialog, onSpeed, busy }: {
  command: LibraryProcessingCommand; speed: ProcessingSpeed; dialog: ReturnType<typeof formModal>;
  onSpeed(value: ProcessingSpeed): void; busy: boolean;
}) {
  const [mode, setMode] = useState(speed);
  const [traffic, setTraffic] = useState<ProcessingTraffic>();
  const [failure, setFailure] = useState('');
  useEffect(() => {
    const controller = new AbortController();
    let timer: ReturnType<typeof setTimeout>;
    const load = async (inventory?: string) => {
      try {
        const result = await fetchProcessingEstimate(command, controller.signal, inventory);
        if (!result.traffic) throw new Error('The server didn\'t provide a traffic estimate');
        if (controller.signal.aborted) return;
        setTraffic(result.traffic);
        dialog.confirmButton.disabled = false;
        if (result.traffic.inventory?.token) timer = setTimeout(() => { void load(result.traffic.inventory?.token) }, 250);
      } catch (error) {
        if (!controller.signal.aborted) {
          setFailure(errorMessage(error));
          dialog.confirmButton.disabled = false;
        }
      }
    };
    void load();
    return () => { controller.abort(); clearTimeout(timer) };
  }, [command, dialog]);
  const scope = command.incremental ? command.stage === 'scan' ? 'New files not yet registered' : 'New files and videos awaiting completion'
    : command.scope === 'new' ? 'Registered videos awaiting completion'
    : command.stage === 'previews' ? 'Imported local videos' : 'Entire media library';
  return <div className="flex flex-col gap-4">
    <p data-processing-scope className="text-body-2-medium text-text-primary">Scope: {scope}</p>
    <div className="flex justify-center"><ProcessingEffort value={mode} busy={busy} onChange={value => { setMode(value); onSpeed(value) }} /></div>
    {traffic ? <TrafficProgress traffic={traffic} initial /> : null}
    {failure || !traffic ? <p role="status" className="text-body-2-regular text-text-secondary">{failure ? `Traffic estimate not obtained: ${failure}` : 'Estimating traffic…'}</p> : null}
  </div>;
}

/** 扫描和已有作品补全共用资料流水线，视频预览由媒体库设置决定。 */
export function ProcessingActions({ busy, scan = false, metadataOnly = false, speedMode = 'standard', pendingCount = 0, onRun }: {
  busy: boolean; scan?: boolean; metadataOnly?: boolean; speedMode?: ProcessingSpeed; pendingCount?: number;
  onRun(command: LibraryProcessingCommand): void | Promise<unknown>;
}) {
  const trigger = useRef<HTMLButtonElement>(null);
  const prompt = useRef<ReturnType<typeof formModal> | null>(null);
  const [promptView, setPromptView] = useState<{ host: HTMLElement; footer: HTMLElement; dialog: ReturnType<typeof formModal>; command: LibraryProcessingCommand } | null>(null);
  const selectedSpeed = useRef(speedMode);
  useEffect(() => () => prompt.current?.close(), []);
  const [open, setOpen] = useState(false);
  const primary: ProcessingOption = { label: scan ? 'Sync new files' : 'Sync these videos', description: '',
    command: scan ? {incremental:true} : { stage: 'collect' as const } };
  const dailyOptions: ProcessingOption[] = [
    {label:'Find new files only', description:'Scan and register new files, keeping existing video metadata', command:{stage:'scan',incremental:true}},
    {label:'Complete pending videos', description:pendingCount ? `${pendingCount.toLocaleString()} registered videos awaiting completion` : 'No videos awaiting completion',
      command:{stage:'collect',scope:'new'}, disabled:!pendingCount},
  ];
  const options: ProcessingOption[] = [
    ...(scan ? [{label:'Sync entire media library',description:'Check all files and fill in missing metadata and previews',command:{}}] : []),
    ...(scan ? [{ label: 'Scan files only', description: 'Find files and read video duration and resolution', command: { stage: 'scan' as const } }] : []),
    ...(scan ? [{ label: 'Complete metadata and previews', description: metadataOnly ? 'Fill in metadata and video properties for existing videos' : 'Fill in metadata and video properties, and generate local previews', command: { stage: 'collect' as const } }] : []),
    { label: 'Complete video metadata only', description: 'Fill in video metadata, covers and people profiles', command: { stage: 'metadata' as const } },
    { label: 'Complete previews only', description: 'Generate contact sheets for imported local videos', command: { stage: 'previews' as const } },
  ];
  const run = (command: LibraryProcessingCommand) => {
    if (busy) return;
    setOpen(false);
    if (!scan) {
      void Promise.resolve(onRun(command)).catch(() => { /* 错误由任务入口留在原位 */ });
      return;
    }
    if (prompt.current) return;
    selectedSpeed.current = speedMode;
    const previews = command.stage === 'previews';
    const title = command.scope === 'new' ? 'Complete pending videos'
      : command.incremental ? command.stage === 'scan' ? 'Find new files' : 'Sync new files'
      : previews ? 'Complete previews only' : command.stage === 'scan' ? 'Scan all files'
      : command.stage === 'metadata' ? 'Complete video metadata only' : command.stage === 'collect' ? 'Complete imported videos' : 'Sync entire media library';
    const work = command.scope === 'new' ? 'Fill in metadata and video properties for these registered videos, and generate previews per settings'
      : command.incremental
      ? command.stage === 'scan' ? 'Find and register new files not yet imported, keeping existing video metadata'
      : `Find new files, and fill in metadata and video properties only for new and unfinished videos ${metadataOnly ? '' : ', and generate local previews'}`
      : previews ? 'Generate contact sheet previews for local videos; this reads the videos and uses the processor'
      : command.stage === 'scan' ? 'Scan folders and register files, reading video duration and resolution per folder settings'
      : command.stage === 'metadata' ? 'Read companion files and fill in video metadata, covers and people profiles'
      : `${command.stage === 'collect' ? 'Fill in metadata and video properties for imported videos' : 'Scan folders to find files, then fill in metadata and video properties'}${metadataOnly ? '' : ', and generate local previews'}`;
    const dialog = formModal({
      title,
      description: `${work}; this may slow the computer down. If you need to use the computer at the same time, choose low-usage mode.`,
      body: '<div class="peach-react" data-processing-prompt></div>',
      confirmLabel: title,
      confirmDisabled: true,
      onConfirm: async () => {
        await onRun({ ...command, ...(selectedSpeed.current === speedMode ? {} : { speed_mode: selectedSpeed.current }) });
      },
    });
    const footer = document.createElement('span');
    footer.className = 'peach-react flex items-center';
    dialog.confirmButton.before(footer);
    prompt.current = dialog;
    setPromptView({ host: dialog.dialog.querySelector<HTMLElement>('[data-processing-prompt]')!, footer, dialog, command });
    void dialog.done.then(() => { if (prompt.current === dialog) { prompt.current = null; setPromptView(null) } });
  };
  return <>
    {promptView ? createPortal(<ProcessingPrompt command={promptView.command} dialog={promptView.dialog}
      speed={speedMode} busy={busy} onSpeed={value => { selectedSpeed.current = value }} />, promptView.host) : null}
    {promptView ? createPortal(<LinkButton href="/settings/library" size="small" variant="primary" trailingIcon={RiArrowRightLine} disabled={busy}
      onClick={event => {
        if (promptView.dialog.confirmButton.getAttribute('aria-busy') === 'true') { event.preventDefault(); return }
        promptView.dialog.close();
      }}>Manage media libraries</LinkButton>, promptView.footer) : null}
    <span data-button-group data-split-button data-variant="primary">
      <Button {...busyProps(busy)} onClick={() => run(primary.command)}>{primary.label}</Button>
      <Button ref={trigger} iconOnly leadingIcon={RiArrowDownSLine} aria-label="More sync options"
        aria-haspopup="dialog" aria-expanded={open} {...busyProps(busy)} onClick={() => { if (!busy) setOpen(!open) }} />
    </span>
    <Popover triggerRef={trigger} isOpen={open} onOpenChange={setOpen} placement="bottom end" offset={4}
      className={MENU_POPOVER_SURFACE}>
      <Dialog aria-label="Sync options" className="flex w-80 flex-col gap-1 outline-none">
        {scan ? <ProcessingMenuGroup label="Routine sync">
          <p className="px-2 py-1 text-caption-1-medium text-text-secondary">Routine sync</p>
          {dailyOptions.map(option => <ProcessingMenuOption key={option.label} option={option} metadataOnly={metadataOnly} onRun={run} />)}
        </ProcessingMenuGroup> : null}
        <ProcessingMenuGroup label={scan ? 'Full library maintenance' : 'Completion options'} maintenance={scan}>
          {scan ? <div className="flex flex-col gap-1 px-2 pb-2">
            <p className="text-body-medium text-text-primary">Full library maintenance</p>
            <p className="text-caption-1-regular text-text-secondary">Check all files, reusing existing metadata and previews</p>
          </div> : null}
          {options.map(option => <ProcessingMenuOption key={option.label} option={option} metadataOnly={metadataOnly} onRun={run} />)}
        </ProcessingMenuGroup>
      </Dialog>
    </Popover>
  </>;
}

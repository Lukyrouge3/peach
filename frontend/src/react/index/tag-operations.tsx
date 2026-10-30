/* 编辑与确认沿用 formModal / confirmModal，表单字段复用 BoardUI。 */
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { confirmModal, formModal } from '@peach/legacy/ui';
import { Input } from '@/components/base/input/input';
import { Select, SelectItem } from '../components/select';
import { apiSend } from '../../api';
import { queryClient } from '../query';
import { showToast } from '../toaster';

export type TagId = number | string;
export type TagScope = 'local' | 'online';
export interface ManagedTag { entity_id?: number; id?: string; k: string; n: number; hidden: boolean; blocked?: boolean; aliases: string[]; cat?: string; favorite?: boolean }
export const managedTagId = (tag: ManagedTag): TagId => tag.id ?? tag.entity_id!;
export type Operation = 'rename' | 'merge' | 'hide' | 'restore' | 'repair' | 'block' | 'unblock';
export interface Command { operation: Operation; ids: TagId[]; name?: string; target_id?: TagId; scope?: TagScope }
interface Plan { token: string; name?: string; assets: number; overlap: number; tags: ManagedTag[] }
export const TAG_ACTION_LABELS: Record<Operation, string> = {
  rename: 'Rename tag', merge: 'Merge tags', hide: 'Hide tags', restore: 'Restore tags', repair: 'Clean up duplicate tags',
  block: 'Block content', unblock: 'Restore content',
};

export const previewTagOperation = (command: Command, signal?: AbortSignal) =>
  apiSend<Plan>('/api/tag-management/preview', command, 'POST', signal);

export async function confirmTagOperation(command: Command, plan: Plan, signal?: AbortSignal) {
  if (signal?.aborted) return false;
  const names = plan.tags.map(tag => `“${tag.k}”`).join(', ');
  const consequence = command.operation === 'merge' || command.operation === 'repair'
    ? `Merge ${plan.tags.length} tags, affecting ${plan.assets} resources with ${plan.overlap} overlapping links. Old names are kept as aliases. This can't be undone directly.`
    : command.operation === 'rename' ? `${names} will be renamed to “${plan.name || command.name}”, affecting ${plan.assets} resources. Old names are kept as aliases.`
      : command.operation === 'block' ? `Block content with any of the tags ${names}, plus its other versions, affecting ${plan.assets} resources. You can restore it under “Blocked content”.`
        : command.operation === 'unblock' ? `Unblock content tagged ${names}, affecting ${plan.assets} resources.`
          : `${command.operation === 'hide' ? 'Hide' : 'Restore'} ${plan.tags.length} tags, affecting ${plan.assets} resources. ${command.operation === 'hide' ? 'You can restore them under “Hidden”.' : ''}`;
  const done = await confirmModal({ title: TAG_ACTION_LABELS[command.operation], body: consequence,
    confirmLabel: TAG_ACTION_LABELS[command.operation], onConfirm: () => apiSend('/api/tag-management', { ...command, token: plan.token }, 'POST', signal) });
  if (!done.confirmed || signal?.aborted) return false;
  await queryClient.invalidateQueries();
  showToast(`tag-management-${Date.now()}`, { html: `${TAG_ACTION_LABELS[command.operation]} done`, alert: false, timeout: 6000, action: null });
  return true;
}

type FormDialog = ReturnType<typeof formModal>;
export function TagEditor({ operation, selected, close, done, scope = 'local' }: {
  operation: 'rename' | 'merge'; selected: ManagedTag[]; close(): void; done(): void; scope?: TagScope;
}) {
  const initial = useRef({ operation, selected, close, done, scope });
  const draft = useRef({ name: selected[0]?.k || '', target_id: selected[0] ? managedTagId(selected[0]) : 0 });
  const [view, setView] = useState<{ host: Element; dialog: FormDialog } | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    const given = initial.current;
    const dialog = formModal({ title: TAG_ACTION_LABELS[given.operation], confirmLabel: 'Preview impact', confirmDisabled: true,
      body: '<div class="peach-react" data-tag-editor-fields></div>',
      onConfirm: async () => {
        const command: Command = { operation: given.operation, ids: given.selected.map(managedTagId), ...(given.scope === 'online' ? { scope: given.scope } : {}),
          ...(given.operation === 'rename' ? { name: draft.current.name.trim() } : { target_id: draft.current.target_id }) };
        const plan = await previewTagOperation(command, controller.signal);
        return { command, plan };
      } });
    setView({ host: dialog.dialog.querySelector('[data-tag-editor-fields]')!, dialog });
    void dialog.done.then(async result => {
      if (controller.signal.aborted) return;
      if (result.confirmed) {
        const prepared = result.result as { command: Command; plan: Plan };
        if (await confirmTagOperation(prepared.command, prepared.plan, controller.signal)) given.done();
      }
      if (!controller.signal.aborted) given.close();
    });
    return () => { controller.abort(); dialog.close() };
  }, []);
  return view ? createPortal(<TagFields operation={initial.current.operation} selected={initial.current.selected} dialog={view.dialog}
    update={value => { draft.current = value }} />, view.host) : null;
}

function TagFields({ operation, selected, dialog, update }: {
  operation: 'rename' | 'merge'; selected: ManagedTag[]; dialog: FormDialog;
  update(value: { name: string; target_id: TagId }): void;
}) {
  const [name, setName] = useState(selected[0]?.k || '');
  const [target, setTarget] = useState<TagId>(selected[0] ? managedTagId(selected[0]) : 0);
  useEffect(() => {
    update({ name, target_id: target });
    dialog.confirmButton.disabled = operation === 'rename' && (!name.trim() || name.trim() === selected[0]?.k);
  }, [name, target, dialog, operation, selected, update]);
  return operation === 'rename' ? <Input autoFocus aria-label="Tag name" value={name} onChange={setName} maxLength={80} />
    : <Select aria-label="Tag to keep" prefix="Keep" selectedKey={String(target)} onSelectionChange={key => {
      const row = selected.find(tag => String(managedTagId(tag)) === String(key)); if (row) setTarget(managedTagId(row));
    }}>
      {selected.map(row => <SelectItem key={managedTagId(row)} id={String(managedTagId(row))}>{row.k}</SelectItem>)}
    </Select>;
}

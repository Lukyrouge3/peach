import { ColumnResizer } from 'react-aria-components';
import { Button } from '@/components/base/buttons/button';
import { SelectionPopover } from './selection-popover';
import type { TablePreferences } from './table-column-preferences';

export function TableColumnControls({ preferences, label = 'Table' }: { preferences: TablePreferences; label?: string }) {
  const columns = preferences.columns.filter(column => !column.required);
  return <div role="group" aria-label={`${label} column settings`} className="flex flex-none gap-2">
    <SelectionPopover label={`${label} visible columns`} triggerLabel="Visible columns" actionLayout="fullWidth"
      items={columns.map(column => ({ id: column.id, label: column.label, selected: preferences.visibility[column.id] !== false }))}
      onChange={(id, on) => preferences.change(current => ({ ...current, [id]: on }))}
      actions={[
        { label: 'Show all columns', onPress: () => preferences.change(Object.fromEntries(columns.map(column => [column.id, true]))) },
        { label: 'Restore default columns', onPress: () => preferences.change({}) },
      ]} />
    <Button variant="secondary" size="medium" onClick={preferences.reset}>Reset column widths</Button>
  </div>;
}

export function TableColumnResizer({ preferences, id }: { preferences: TablePreferences; id: string }) {
  const column = preferences.columns.find(column => column.id === id)!;
  return preferences.canResize(id) ? <ColumnResizer aria-label={`Resize ${column.label} column`} /> : null;
}

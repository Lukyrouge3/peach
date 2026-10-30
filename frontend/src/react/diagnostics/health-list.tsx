import { useState } from 'react';
import { RiFileListLine } from '@remixicon/react';
import { Button } from '@/components/base/buttons/button';
import { LinkButton } from '@/components/base/buttons/link-button';
import { fmtDur, fmtSize, LOC } from '@peach/legacy/core';
import { DataTable, type DataColumn } from '../components/data-table';
import { EmptyState } from '../components/empty-state';
import { Note } from '../components/note';
import { Disclosure, Stack } from '../settings/section';
import { busyProps, useAction } from '../settings/use-action';
import type { LibraryGroup, LibraryItem } from './diagnostics';

const identity = (item: LibraryItem) => item.title || item.name || item.code || `Title #${item.id}`;
const listText = (items: LibraryItem[]) => [
  ['Works', 'Code', 'File name', 'Media library', 'Path', 'Duration (s)', 'Size (bytes)'],
  ...items.map(item => [identity(item), item.code ?? '', item.name, LOC[item.location] || item.location,
    item.path, item.duration ?? '', item.size ?? '']),
].map(row => row.map(value => String(value ?? '').replace(/[\t\r\n]+/g, ' ')).join('\t')).join('\n');

export function HealthList({ group, openItem, receipt }: {
  group: LibraryGroup; openItem(id: number): void; receipt(message: string): void;
}) {
  const action = useAction();
  const [selected, setSelected] = useState<string[]>([]);
  const copy = (items: LibraryItem[]) => void action.run('copy',
    () => navigator.clipboard.writeText(listText(items)), () => receipt('List copied'));
  const columns: DataColumn<LibraryItem>[] = [
    { id: 'title', label: 'Works', value: identity, render: item => <span className="flex min-w-0 flex-col gap-1">
      <LinkButton variant="primary" className="justify-start whitespace-normal text-left"
        onClick={() => openItem(item.id)}>{identity(item)}</LinkButton>
      {item.name && item.name !== identity(item)
        ? <span data-middle-truncate title={item.name} className="block min-w-0 text-caption-1-regular text-text-secondary">{item.name}</span> : null}
    </span> },
    { id: 'code', label: 'Code', width: 144, value: item => item.code || '',
      render: item => <span className="whitespace-nowrap">{item.code || 'Unrecognized'}</span> },
    { id: 'location', label: 'Media library', width: 128, value: item => LOC[item.location] || item.location,
      render: item => LOC[item.location] || item.location || 'Not obtained' },
    { id: 'path', label: 'File path', width: 320, min: 180, value: item => item.path,
      render: item => <span data-middle-truncate title={item.path}
        className="block min-w-0 w-full text-body-2-regular text-text-secondary">{item.path || 'Not obtained'}</span> },
    { id: 'duration', label: 'Duration', width: 112, value: item => item.duration ?? 0,
      render: item => item.duration && item.duration > 0 ? fmtDur(item.duration) : 'Not obtained' },
    { id: 'size', label: 'Size', width: 112, value: item => item.size ?? 0,
      render: item => item.size !== null ? fmtSize(item.size) : 'Not obtained' },
  ];
  return <Disclosure summary={`${group.label} · ${group.count === null ? 'Not obtained' : `${group.count.toLocaleString()} items`}`}>
    {group.count === null ? <Note tone="neutral">List not obtained; check again.</Note> : !group.items.length
      ? <EmptyState icon={RiFileListLine} title="List is empty" size="compact">No titles need attention.</EmptyState>
      : <Stack>
        <div className="flex flex-wrap items-center justify-between gap-2">
          {group.truncated ? <span className="text-body-2-regular text-text-secondary">
            Loaded {group.items.length.toLocaleString()} / {group.count.toLocaleString()} items
          </span> : null}
          <Button size="small" variant="secondary" {...busyProps(action.busy === 'copy')}
            onClick={() => copy(group.items)}>Copy current list</Button>
        </div>
        {action.error ? <Note tone="error">{action.error}</Note> : null}
        <DataTable label={group.label} title="Title list" unit="titles" panel={false}
          items={group.items} columns={columns} rowId={item => String(item.id)} rowLabel={identity}
          selected={selected} onSelected={setSelected}
          actions={items => <Button size="small" variant="secondary" {...busyProps(action.busy === 'copy')}
            onClick={() => copy(items)}>Copy selected</Button>} />
      </Stack>}
  </Disclosure>;
}

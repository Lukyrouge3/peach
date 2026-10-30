import { STAGES } from '../../settings/library-policy-settings';
import type { SetupFolder } from './setup-api';

export function libraryFields(row?: SetupFolder): Partial<SetupFolder> {
  return row ? {
    library_id: row.library_id, library: row.library, library_icon: row.library_icon, library_color: row.library_color,
    library_policy: row.library_policy, library_stages: row.library_stages,
  } : {};
}

export function processingSummary(row: SetupFolder): string {
  if (row.library_policy === 'local') return 'Local metadata only';
  if (row.library_policy !== 'custom') return 'Auto-complete';
  const stages = STAGES.filter(([key]) => row.library_stages?.split(',').includes(key)).map(([, label]) => label);
  return stages.length ? `Custom: ${stages.join(', ')}` : 'Custom: read local NFO and images only';
}

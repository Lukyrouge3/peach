/* 媒体来源选了网盘时的 CloudDrive 起步配置。
 *
 * 页内只留填哪里、填多少、怎么确认；三处缓存的分工、换算与起步值的来源在
 * `docs/CLOUDDRIVE.md`，这里链过去，同一段话不在两处维护。 */
import { Disclosure, ExternalLink, Help } from './section';

export const CLOUDDRIVE_PROFILES = [
  { name: 'Hard drive, or up to 8 GB of RAM', cache: '10–20 GiB', read: '256 / 128 KB', task: '1' },
  { name: 'SATA SSD, 8–16 GB of RAM', cache: '20–50 GiB', read: '256 / 128 KB', task: '1–2' },
  { name: 'NVMe SSD, over 16 GB of RAM', cache: '50–100 GiB', read: '256 / 128 KB', task: '2 or more' },
] as const;

const READINGS = [['cache', 'Cache limit'], ['read', 'Read length (default / minimum)'], ['task', 'Concurrent videos']] as const;

export function CloudDriveGuide() {
  return (
    <div className="@container flex flex-col gap-3">
      <Disclosure summary="CloudDrive setup help">
        <Help>
          First mount the cloud drive in CloudDrive2 or OpenList as a local folder, then choose it here.
          <ExternalLink href="https://www.clouddrive2.com/help.html">Mount help</ExternalLink>
        </Help>
        <Help>Pick a starting cache value based on the cache disk and free RAM, then adjust based on playback.</Help>
        <Help>File operations need write permission from the mount tool and the cloud account. Uploading, creating folders, renaming and moving on Guangya Cloud require CloudDrive2 v1.1.0 or later; deleting and copying aren't supported yet.</Help>
        {/* 三档同形、跨档比较：窄处每档一块纵排，宽处三项读数排成三列对齐。 */}
        <ul aria-label="Tiers by cache disk" className="flex flex-col gap-2">
          {CLOUDDRIVE_PROFILES.map((profile) => (
            <li key={profile.name} className="flex flex-col gap-2 rounded-2lg border border-separator-border bg-background-primary-default p-3">
              <p className="text-body-medium text-text-primary">{profile.name}</p>
              <dl className="inline-grid grid-cols-1 gap-2 @md:grid-cols-3">
                {READINGS.map(([key, term]) => (
                  <div key={key} className="flex flex-col">
                    <dt className="text-caption-1-regular text-text-secondary">{term}</dt>
                    <dd className="text-body-regular text-text-primary">{profile[key]}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>
        <ul className="flex list-disc flex-col gap-1 pl-5 text-body-2-regular text-text-secondary">
          <li>Set the cache limit and eviction in CloudDrive “Settings” and choose LRU eviction. Don't set the limit to 0, and leave at least 40 GiB on the system disk; reopen the settings page afterward to confirm it was saved.</li>
          <li>Set read length and download threads in each cloud drive's own download settings, starting threads at 2.</li>
          <li>Buffer Cache uses RAM, while disk cache and folder cache use disk; changing one doesn't limit the other two.</li>
        </ul>
        <Help>
          <ExternalLink href="https://github.com/peach-mitao/peach/blob/master/docs/CLOUDDRIVE.md">Full setup and tuning guide</ExternalLink>
        </Help>
      </Disclosure>
    </div>
  );
}

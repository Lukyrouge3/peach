/* 媒体库图标：触发键显示当前字形，点开是一块七列网格的单选面板，按「应用」才提交。
 *
 * 注册表里没有网格单选的弹出面板，用 React Aria 的 `Popover`、`Dialog`、`RadioGroup` 组合，
 * 面板外观取 BoardUI `menu-styles.ts`。取值是雪碧图里的字形名，服务端按
 * `peach.media_libraries.LIBRARY_ICONS` 校验。 */
import { useRef, useState } from 'react';
import { Dialog, Heading, Popover, Radio, RadioGroup } from 'react-aria-components';
import { MEDIA_SOURCE_ICONS } from '@peach/legacy/ui';

import { Button } from '@/components/base/buttons/button';
import { MENU_POPOVER_SURFACE } from '@/components/base/dropdown/menu-styles';

import { SourceMark } from './section';

/* 一行七枚、六行排完。第一枚是「不另选」：网盘库自动用网盘标识，本地路径没有可识别的
   来源，就是默认那枚磁盘。其余按题材成组：身体与情欲、身份与装扮、场景与情境、媒介与归档。 */
export const LIBRARY_ICON_CHOICES = [
  ['', 'Auto-detect'], ['hard-drive', 'Disk'], ['database', 'Archive'], ['heart', 'Crush'], ['heart-hand', 'Intimate'], ['flame', 'Passion'], ['cherry', 'Cherry'],
  ['lollipop', 'Sweetheart'], ['candy', 'Candy'], ['banana', 'Banana'], ['droplets', 'Wet'], ['venus', 'Female'], ['mars', 'Male'], ['venus-and-mars', 'Couple'],
  ['gem', 'Featured'], ['crown', 'Queen'], ['ribbon', 'Ribbon'], ['shirt', 'Uniform'], ['graduation-cap', 'Student'], ['stethoscope', 'Nurse'], ['glasses', 'Glasses'],
  ['footprints', 'Footprints'], ['hand', 'Hands'], ['flower', 'Flower'], ['venetian-mask', 'Role-play'], ['rabbit', 'Bunny girl'], ['paw-print', 'Animal ears'], ['dumbbell', 'Fitness'],
  ['bed-double', 'Bedroom'], ['bath', 'Bathroom'], ['key-round', 'Private'], ['wine', 'Tipsy'], ['cigarette', 'Smoke'], ['moon', 'Night'], ['sparkles', 'Fantasy'],
  ['camera', 'Photo shoot'], ['video', 'Video'], ['film', 'Film'], ['image', 'Gallery'], ['gamepad-2', 'Game'], ['star', 'Collection'], ['tags', 'Theme'],
] as const;

/** 不另选时的字形与说法：网盘库跟着来源走（115、PikPak 的站标），本地路径没有什么可识别，就是默认磁盘。 */
export function libraryAutoChoice(kind: string): [string, string] {
  const mark = kind !== 'local' ? MEDIA_SOURCE_ICONS[kind] : '';
  return mark ? [mark, 'Auto-detect'] : ['hard-drive', 'Default'];
}

/** 「不另选」在单选组里的取值。存下来是空串，而空串做单选值时 React Aria 当作没有选中。 */
const AUTO = 'auto';

export function LibraryIconPicker({ value, label, kind = 'local', onChange }: {
  value: string; label: string; kind?: string; onChange(value: string): void;
}) {
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(value);
  const [autoMark, autoLabel] = libraryAutoChoice(kind);
  const nameOf = (key: string) => (key && LIBRARY_ICON_CHOICES.find(([choice]) => choice === key)?.[1]) || autoLabel;

  return (
    <>
      <Button ref={trigger} variant="secondary" className="self-start" aria-label={label} aria-haspopup="dialog"
        aria-expanded={open} onClick={() => { setDraft(value); setOpen(true); }}>
        <span data-icon-choice className="flex items-center gap-2"><SourceMark mark={value || autoMark} />{nameOf(value)}</span>
      </Button>
      <Popover triggerRef={trigger} isOpen={open} onOpenChange={setOpen} placement="bottom start" offset={4}
        className={MENU_POPOVER_SURFACE}>
        <Dialog aria-label={`${label} icon options`} className="flex w-72 flex-col gap-3 outline-none">
          <Heading slot="title" className="px-1 text-body-medium text-text-primary">Choose media library icon</Heading>
          {/* 格子里只放图标，名字走 aria-label：带着字的话 42 个候选要排十几行。 */}
          <RadioGroup aria-label="Icon options" value={draft || AUTO} onChange={(next) => setDraft(next === AUTO ? '' : next)}
            className="inline-grid grid-cols-7 gap-1">
            {LIBRARY_ICON_CHOICES.map(([key, name]) => (
              <Radio key={key || AUTO} value={key || AUTO} aria-label={key ? name : autoLabel}
                className="flex h-10 cursor-pointer items-center justify-center rounded-lg text-foreground-icon-secondary outline-none hover:bg-dropdown-item-hover-background focus-visible:ring-2 focus-visible:ring-border-focus-ring data-selected:bg-dropdown-item-hover-background data-selected:text-text-primary">
                <SourceMark mark={key || autoMark} />
              </Radio>
            ))}
          </RadioGroup>
          <div className="flex justify-end gap-2 border-t border-separator-border pt-2.5">
            <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            <Button disabled={draft === value} onClick={() => { onChange(draft); setOpen(false); }}>Apply</Button>
          </div>
        </Dialog>
      </Popover>
    </>
  );
}

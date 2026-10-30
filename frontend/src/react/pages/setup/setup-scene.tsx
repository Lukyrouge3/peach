import type { ReactNode } from 'react';
import { RiFolderLine, RiPlayFill, RiSearchLine } from '@remixicon/react';
import macbook from '../../../../../resources/setup/macbook.png';
import iphone from '../../../../../resources/setup/iphone.png';
import { PeachSilhouette } from './peach-silhouette';

type SceneStep = number | 'restore' | 'done';

function LibraryPreview() {
  return <div data-setup-mini-library="">
    <div data-setup-mini-toolbar=""><span /><span /><span /><RiSearchLine /></div>
    <div data-setup-mini-posters=""><div><RiPlayFill /></div><div /><div /></div>
    <div data-setup-mini-lines=""><span /><span /></div>
  </div>;
}

/** 首次设置的场景说明；使用 Peach 图标与布局，不包含真实馆藏。 */
export function SetupScene({ step }: { step: SceneStep }) {
  const title = step === 0 ? 'Your private media space.' : step === 1 ? 'Turn files into a library.'
    : step === 2 ? 'From your desk to your hand.' : step === 3 ? 'All set.'
    : step === 'restore' ? 'Pick up where you left off.' : 'Your library is ready to open.';
  const description = step === 0 ? 'Organize what you love into your own collection.'
    : step === 1 ? 'Grouped by media library; files stay where they are.'
    : step === 2 ? 'Computer and phone, connected to the same Peach.'
    : step === 3 ? 'Saved once confirmed; scanning starts as you chose.'
    : step === 'restore' ? 'Keep your existing settings and records, and carry on.' : 'Enter Peach and start exploring your collection.';
  return <aside data-setup-scene="">
    <div data-setup-scene-brand=""><PeachSilhouette variant="brand" /><span>Peach</span></div>
    <div data-setup-scene-art="" key={step} aria-hidden="true">
      {step === 0 ? <PeachSilhouette variant="welcome" />
        : step === 3 || step === 'done' ? <img data-setup-original-mark="" src="/peach-logo.png" alt="" width={148} height={148} />
        : step === 2 ? <div data-setup-devices="">
        <div data-setup-macbook=""><img src={macbook} alt="" /><div data-setup-device-screen=""><LibraryPreview /></div></div>
        <div data-setup-iphone=""><img src={iphone} alt="" /><div data-setup-device-screen=""><LibraryPreview /></div></div>
      </div> : <div data-setup-library-scene="">
        <LibraryPreview />
        <div data-setup-scene-badge=""><RiFolderLine /><span>Your media library</span></div>
      </div>}
    </div>
    <div data-setup-scene-caption="" key={`caption-${step}`}>
      <p className="text-title-2-medium" data-copy-key={`setup.scene.title.${step}`}>{title}</p>
      <p className="text-body-2-regular" data-copy-key={`setup.scene.description.${step}`}>{description}</p>
    </div>
  </aside>;
}

export function SetupShell({ step, children }: { step: SceneStep; children: ReactNode }) {
  return <main data-setup-page=""><div data-setup-window="" data-setup-step={step}>
    <SetupScene step={step} />{children}
  </div></main>;
}

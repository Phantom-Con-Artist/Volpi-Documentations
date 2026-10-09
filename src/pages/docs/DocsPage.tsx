import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/layout/PageShell';
import { PageIntro } from '@/components/typography/PageIntro';
import { BetaBanner } from '@/components/feedback/BetaBanner';
import { SideNav } from '@/components/navigation/SideNav';
import { DOCS_HEAD, DOC_SECTIONS } from '@/content/docs.content';
import { REFERENCE_TABLES } from '@/content/docs-reference.content';
import { FEATURE_CHAPTERS } from '@/content/features.content';
import { DocSectionBlock } from './DocSectionBlock';
import { DocsReference } from './DocsReference';
import { ShortcutTable } from './ShortcutTable';
import { DocsLater } from './DocsLater';
import { InstallSection } from './InstallSection';
import { DocsTabs, type DocsTab } from './DocsTabs';
import { ReleaseNotes } from './releases/ReleaseNotes';
import { useHashTab } from '@/hooks/useHashTab';
import { RELEASES, RELEASES_HEAD } from '@/content/releases.content';

const LINKS = [
  { label: 'Install', href: '#install' },
  ...DOC_SECTIONS.map((s) => ({ label: s.title, href: `#${s.id}` })),
  ...REFERENCE_TABLES.map((t) => ({ label: t.title, href: `#${t.id}` })),
  { label: 'Keyboard shortcuts', href: '#shortcuts' },
  { label: 'Known limits', href: '#limits' },
  { label: 'What comes next', href: '#next' },
  { label: 'Price and licence', href: '#pricing' },
];

const RELEASE_LINKS = RELEASES.map((r) => ({ label: `v${r.version}`, href: `#v${r.version}` }));
const isReleaseAnchor = (hash: string) => /^v\d/.test(hash);

/** The tour chapter that shows each docs section, so the two pages link to each other. */
const tourFor = (docId: string) => FEATURE_CHAPTERS.find((c) => c.docId === docId)?.id;

export function DocsPage() {
  const [tab, setTab] = useHashTab<DocsTab>('guide', 'releases', isReleaseAnchor);
  const guide = tab === 'guide';
  return (
    <PageShell>
      <div className="wrap">
        <div data-mochi="docs-top">
          <PageIntro kicker={DOCS_HEAD.kicker} title={DOCS_HEAD.title} text={DOCS_HEAD.text}>
            <BetaBanner text={DOCS_HEAD.banner} />
            <a href={DOCS_HEAD.tour.href} className="textlink mt-6">{DOCS_HEAD.tour.label} <ArrowRight size={16} aria-hidden="true" /></a>
          </PageIntro>
        </div>
        <DocsTabs tab={tab} onChange={setTab} />
        <div className="grid gap-12 pb-24 lg:grid-cols-[220px_1fr]">
          <SideNav key={tab} title={guide ? 'On this page' : RELEASES_HEAD.nav} links={guide ? LINKS : RELEASE_LINKS} />
          <div id={`docs-panel-${tab}`} role="tabpanel" aria-labelledby={`docs-tab-${tab}`} className="min-w-0">
            {guide ? (
              <>
                <InstallSection />
                {DOC_SECTIONS.map((s) => <DocSectionBlock key={s.id} section={s} tourId={tourFor(s.id)} />)}
                <DocsReference />
                <ShortcutTable />
                <DocsLater />
              </>
            ) : (
              <ReleaseNotes />
            )}
          </div>
        </div>
      </div>
    </PageShell>
  );
}

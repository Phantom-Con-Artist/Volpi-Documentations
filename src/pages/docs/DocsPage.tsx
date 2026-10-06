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

const LINKS = [
  ...DOC_SECTIONS.map((s) => ({ label: s.title, href: `#${s.id}` })),
  ...REFERENCE_TABLES.map((t) => ({ label: t.title, href: `#${t.id}` })),
  { label: 'Keyboard shortcuts', href: '#shortcuts' },
  { label: 'Known limits', href: '#limits' },
  { label: 'What comes next', href: '#next' },
  { label: 'Price and licence', href: '#pricing' },
];

/** The tour chapter that shows each docs section, so the two pages link to each other. */
const tourFor = (docId: string) => FEATURE_CHAPTERS.find((c) => c.docId === docId)?.id;

export function DocsPage() {
  return (
    <PageShell>
      <div className="wrap">
        <div data-mochi="docs-top">
          <PageIntro kicker={DOCS_HEAD.kicker} title={DOCS_HEAD.title} text={DOCS_HEAD.text}>
            <BetaBanner text={DOCS_HEAD.banner} />
            <a href={DOCS_HEAD.tour.href} className="textlink mt-6">{DOCS_HEAD.tour.label} <ArrowRight size={16} aria-hidden="true" /></a>
          </PageIntro>
        </div>
        <div className="grid gap-12 pb-24 lg:grid-cols-[220px_1fr]">
          <SideNav title="On this page" links={LINKS} />
          <div className="min-w-0">
            {DOC_SECTIONS.map((s) => <DocSectionBlock key={s.id} section={s} tourId={tourFor(s.id)} />)}
            <DocsReference />
            <ShortcutTable />
            <DocsLater />
          </div>
        </div>
      </div>
    </PageShell>
  );
}

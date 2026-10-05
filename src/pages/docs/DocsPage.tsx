import { PageShell } from '@/components/layout/PageShell';
import { PageIntro } from '@/components/typography/PageIntro';
import { BetaBanner } from '@/components/feedback/BetaBanner';
import { SideNav } from '@/components/navigation/SideNav';
import { DOCS_HEAD, DOC_SECTIONS } from '@/content/docs.content';
import { DocSectionBlock } from './DocSectionBlock';
import { ShortcutTable } from './ShortcutTable';
import { DocsLater } from './DocsLater';

const LINKS = [
  ...DOC_SECTIONS.map((s) => ({ label: s.title, href: `#${s.id}` })),
  { label: 'Keyboard shortcuts', href: '#shortcuts' },
  { label: 'Known limits', href: '#limits' },
  { label: 'What comes next', href: '#next' },
  { label: 'Price and licence', href: '#pricing' },
];

export function DocsPage() {
  return (
    <PageShell>
      <div className="wrap">
        <div data-mochi="docs-top">
          <PageIntro kicker={DOCS_HEAD.kicker} title={DOCS_HEAD.title} text={DOCS_HEAD.text}>
            <BetaBanner text={DOCS_HEAD.banner} />
          </PageIntro>
        </div>
        <div className="grid gap-12 pb-24 lg:grid-cols-[220px_1fr]">
          <SideNav title="On this page" links={LINKS} />
          <div className="min-w-0">
            {DOC_SECTIONS.map((s) => <DocSectionBlock key={s.id} section={s} />)}
            <ShortcutTable />
            <DocsLater />
          </div>
        </div>
      </div>
    </PageShell>
  );
}

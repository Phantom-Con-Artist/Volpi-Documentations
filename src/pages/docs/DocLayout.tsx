import type { ReactNode } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/layout/PageShell';
import { PageIntro } from '@/components/typography/PageIntro';
import { SideNav } from '@/components/navigation/SideNav';
import { DOCS_HEAD } from '@/content/docs.content';
import { DOC_NAV, DOC_ORDER } from '@/content/docs-pages.content';
import { DocsTabs } from './DocsTabs';

/** The frame of one documentation page: heading, the list of every page beside it, and previous and next links under it. */
export function DocLayout({ href, title, text, children }: { href: string; title: string; text: string; children: ReactNode }) {
  const at = DOC_ORDER.findIndex((p) => p.href === href);
  const previous = DOC_ORDER[at - 1];
  const next = DOC_ORDER[at + 1];
  return (
    <PageShell>
      <div className="wrap">
        <PageIntro kicker={DOCS_HEAD.kicker} title={title} text={text} />
        <DocsTabs current="guide" />
        <div className="grid gap-12 pb-24 lg:grid-cols-[220px_1fr]">
          <SideNav title={DOC_NAV.title} links={DOC_ORDER} current={href} />
          <div className="min-w-0">
            {children}
            <nav aria-label={DOC_NAV.title} className="flex flex-wrap items-start justify-between gap-6 border-t-[3px] border-ink pt-8">
              {previous ? <a href={previous.href} className="textlink"><ArrowLeft size={16} aria-hidden="true" /><span><span className="kicker mr-2">{DOC_NAV.previous}</span>{previous.label}</span></a> : <span />}
              <a href="/docs/" className="textlink lg:hidden">{DOC_NAV.all}</a>
              {next && <a href={next.href} className="textlink"><span><span className="kicker mr-2">{DOC_NAV.next}</span>{next.label}</span><ArrowRight size={16} aria-hidden="true" /></a>}
            </nav>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

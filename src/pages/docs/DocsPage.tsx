import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/layout/PageShell';
import { PageIntro } from '@/components/typography/PageIntro';
import { BetaBanner } from '@/components/feedback/BetaBanner';
import { DOCS_HEAD } from '@/content/docs.content';
import { DOC_GROUPS, OLD_ANCHORS } from '@/content/docs-pages.content';
import { DocsTabs } from './DocsTabs';

/** The documentation used to be one page, so old links such as /docs/#reading or /docs/#v0.1.1 are sent on to the page that has it now. */
function useOldAnchors() {
  useEffect(() => {
    const hash = location.hash.slice(1);
    if (OLD_ANCHORS[hash]) location.replace(OLD_ANCHORS[hash]);
    else if (/^v\d/.test(hash)) location.replace(`${OLD_ANCHORS.releases}#${hash}`);
  }, []);
}

/** The documentation's front page: every page, grouped, with a line on what it covers. */
export function DocsPage() {
  useOldAnchors();
  return (
    <PageShell>
      <div className="wrap">
        <div data-mochi="docs-top">
          <PageIntro kicker={DOCS_HEAD.kicker} title={DOCS_HEAD.title} text={DOCS_HEAD.text}>
            <BetaBanner text={DOCS_HEAD.banner} />
            <a href={DOCS_HEAD.tour.href} className="textlink mt-6">{DOCS_HEAD.tour.label} <ArrowRight size={16} aria-hidden="true" /></a>
          </PageIntro>
        </div>
        <DocsTabs current="guide" />
        <div className="grid gap-14 pb-24">
          {DOC_GROUPS.map((group) => (
            <section key={group.title} className="rise">
              <h2 className="border-b-[3px] border-ink pb-3 text-[clamp(1.5rem,2.6vw,2rem)] leading-tight">{group.title}</h2>
              <ul className="m-0 grid list-none gap-x-10 p-0 md:grid-cols-2 xl:grid-cols-3">
                {group.pages.map((p) => (
                  <li key={p.href} className="border-b border-tone-soft py-5">
                    <a href={p.href} className="textlink text-[18px]">{p.label} <ArrowRight size={16} aria-hidden="true" /></a>
                    <p className="mt-2 text-[15.5px] text-ink-2">{p.text}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/layout/PageShell';
import { PageIntro } from '@/components/typography/PageIntro';
import { ARTICLE_TEXT, sectionOf } from '@/content/articles';

/** The front page of a set of articles: each one with its opening line. */
export function HubPage({ section: sectionId }: { section: string }) {
  const section = sectionOf(sectionId);
  return (
    <PageShell>
      <div className="wrap pb-24">
        <PageIntro kicker={section.kicker} title={section.title} text={section.lede} />
        <ul className="m-0 grid list-none gap-x-12 border-t-[3px] border-ink p-0 md:grid-cols-2">
          {section.articles.map((a) => (
            <li key={a.slug} className="rise border-b border-tone-soft py-8">
              <h2 className="text-[clamp(1.35rem,2.2vw,1.7rem)] leading-tight"><a href={`/${section.id}/${a.slug}/`} className="text-ink no-underline decoration-seal decoration-2 underline-offset-8 hover:underline">{a.title.replace(/\.$/, '')}</a></h2>
              <p className="mt-3 max-w-[38em] text-ink-2">{a.lede}</p>
              <a href={`/${section.id}/${a.slug}/`} className="textlink mt-4" aria-label={a.title}>{ARTICLE_TEXT.read} <ArrowRight size={16} aria-hidden="true" /></a>
            </li>
          ))}
        </ul>
        {section.footnote && <p className="kicker pt-8">{section.footnote}</p>}
      </div>
    </PageShell>
  );
}

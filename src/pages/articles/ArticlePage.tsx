import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/layout/PageShell';
import { PageIntro } from '@/components/typography/PageIntro';
import { SideNav } from '@/components/navigation/SideNav';
import { DownloadButton } from '@/components/download/DownloadButton';
import { navLinkProps } from '@/components/navigation/navLinkProps';
import { ARTICLE_TEXT, sectionOf } from '@/content/articles';
import { ArticleBlocks } from './ArticleBlocks';

/** One guide, format page or comparison: its heading, its parts, where its facts come from and what to read next. */
export function ArticlePage({ section: sectionId, slug }: { section: string; slug: string }) {
  const section = sectionOf(sectionId);
  const article = section.articles.find((a) => a.slug === slug);
  if (!article) throw new Error(`/${sectionId}/ has no page called "${slug}".`);
  const href = `/${section.id}/${slug}/`;
  const others = section.articles.map((a) => ({ label: a.title.replace(/\.$/, ''), href: `/${section.id}/${a.slug}/` }));
  return (
    <PageShell>
      <div className="wrap">
        <PageIntro kicker={section.kicker} title={article.title} text={article.lede} />
        <div className="grid gap-12 pb-24 lg:grid-cols-[220px_1fr]">
          <SideNav title={section.back} links={others} current={href} />
          <article className="min-w-0">
            <ArticleBlocks blocks={article.blocks} />
            {article.sources && (
              <section className="rise border-t border-tone-soft py-12">
                <h2 className="text-[clamp(1.5rem,2.8vw,2.1rem)] leading-tight">{ARTICLE_TEXT.sources}</h2>
                <p className="mt-4 max-w-[44em] text-ink-2">{ARTICLE_TEXT.sourcesNote}</p>
                <ul className="m-0 mt-5 grid list-none gap-2 p-0">
                  {article.sources.map((s) => <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-seal decoration-2 underline-offset-4 hover:text-seal">{s.label}</a></li>)}
                </ul>
              </section>
            )}
            {section.footnote && <p className="kicker border-t border-tone-soft pt-6">{section.footnote}</p>}
            <section className="mt-10 border-t-[3px] border-ink pt-10">
              <h2 className="text-[clamp(1.5rem,2.8vw,2.1rem)] leading-tight">{ARTICLE_TEXT.next}</h2>
              <ul className="m-0 mt-6 flex list-none flex-wrap gap-x-8 gap-y-4 p-0">
                {(article.related ?? []).map((l) => <li key={l.href}><a href={l.href} {...navLinkProps(l.href)} className="textlink">{l.label} <ArrowRight size={16} aria-hidden="true" /></a></li>)}
                <li><a href={`/${section.id}/`} className="textlink">{section.back} <ArrowRight size={16} aria-hidden="true" /></a></li>
              </ul>
              <div className="mt-10 flex flex-wrap items-center gap-4"><DownloadButton /></div>
            </section>
          </article>
        </div>
      </div>
    </PageShell>
  );
}

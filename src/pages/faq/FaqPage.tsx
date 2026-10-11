import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/layout/PageShell';
import { PageIntro } from '@/components/typography/PageIntro';
import { SideNav } from '@/components/navigation/SideNav';
import { DiscordButton } from '@/components/buttons/DiscordButton';
import { FAQ, FAQ_HEAD } from '@/content/faq.content';

const idOf = (title: string) => title.toLowerCase().replace(/[^a-z]+/g, '-').replace(/^-|-$/g, '');

/** Common questions, every answer written out on the page. */
export function FaqPage() {
  return (
    <PageShell>
      <div className="wrap">
        <PageIntro kicker={FAQ_HEAD.kicker} title={FAQ_HEAD.title} text={FAQ_HEAD.text} />
        <div className="grid gap-12 pb-24 lg:grid-cols-[220px_1fr]">
          <SideNav title={FAQ_HEAD.nav} links={FAQ.map((g) => ({ label: g.title, href: `#${idOf(g.title)}` }))} />
          <div className="min-w-0">
            {FAQ.map((group) => (
              <section key={group.title} id={idOf(group.title)} className="rise border-t border-tone-soft py-12">
                <h2 className="text-[clamp(1.5rem,2.8vw,2.1rem)] leading-tight">{group.title}</h2>
                <dl className="m-0 mt-6 grid gap-8">
                  {group.items.map((item) => (
                    <div key={item.q}>
                      <dt><h3 className="font-mincho text-[1.2rem] font-semibold leading-snug">{item.q}</h3></dt>
                      <dd className="m-0 mt-2 max-w-[44em] text-ink-2">
                        <p>{item.a}</p>
                        {item.link && <a href={item.link.href} className="textlink mt-3">{item.link.label} <ArrowRight size={16} aria-hidden="true" /></a>}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            ))}
            <section className="border-t-[3px] border-ink pt-10">
              <h2 className="text-[clamp(1.5rem,2.8vw,2.1rem)] leading-tight">{FAQ_HEAD.more}</h2>
              <p className="mt-4 max-w-[44em] text-ink-2">{FAQ_HEAD.moreText}</p>
              <div className="mt-6"><DiscordButton /></div>
            </section>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

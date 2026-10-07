import { WHO, WHO_HEAD } from '@/content/who.content';
import { MOCHI_ASIDES } from '@/content/mochi.content';
import { SectionHead } from '@/components/typography/SectionHead';
import { MochiAside } from '@/components/mochi/MochiAside';
import { PainCard } from './PainCard';

/** Who Volpi is for: research scholars buried in papers, and the chaos it replaces with one app. */
export function WhoItsFor() {
  return (
    <section id="who" data-mochi="who" className="bd bd-tone pt-[clamp(80px,12vw,140px)]">
      <div className="wrap">
        <SectionHead kicker={WHO_HEAD.kicker} title={WHO_HEAD.title} chapter={WHO_HEAD.chapter} />
        <div className="grid items-start gap-12 lg:grid-cols-[6fr_5fr] lg:gap-16">
          <div className="rise flex flex-col gap-6">
            <p className="max-w-[18em] font-mincho text-[clamp(1.6rem,2.8vw,2.4rem)] font-semibold leading-tight">{WHO.lead}</p>
            {WHO.text.map((t) => <p key={t} className="max-w-[34em] text-[clamp(1.05rem,1.4vw,1.2rem)] text-ink-2">{t}</p>)}
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-3">
              <span className="kicker mr-1">{WHO.audienceLabel}</span>
              {WHO.audience.map((a) => (
                <span key={a} className="border-[2px] border-ink bg-panel px-3 py-1 text-[15px] font-medium">{a}</span>
              ))}
            </div>
            <MochiAside text={MOCHI_ASIDES.who} mood="wow" />
          </div>
          <div className="flex flex-col gap-8">
            <PainCard />
            <p className="rise font-mincho text-[clamp(1.2rem,1.8vw,1.5rem)] leading-snug">
              <span className="slash">{WHO.punchline}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

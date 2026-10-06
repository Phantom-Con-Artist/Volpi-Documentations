import { WHY_LOCAL_HOME, WHY_LOCAL_REASONS } from '@/content/why-local.content';
import { MOCHI_LINES } from '@/content/mochi.content';
import { SectionHead } from '@/components/typography/SectionHead';
import { ReasonGrid } from '@/components/cards/ReasonGrid';
import { PromiseCard } from '@/components/cards/PromiseCard';
import { MochiAside } from '@/components/mochi/MochiAside';

/** Why Volpi keeps research on the user's computer, and what we promise about privacy. */
export function WhyLocal() {
  return (
    <section id="local" data-mochi="local" className="border-t border-tone-soft py-[clamp(80px,12vw,140px)]">
      <div className="wrap">
        <SectionHead kicker={WHY_LOCAL_HOME.kicker} title={WHY_LOCAL_HOME.title} chapter={WHY_LOCAL_HOME.chapter} />
        <div className="grid items-start gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <p className="rise max-w-[24em] text-[clamp(1.1rem,1.6vw,1.3rem)] text-ink-2">{WHY_LOCAL_HOME.text}</p>
            <PromiseCard />
            <a href="/privacy/#why" className="textlink self-start">{WHY_LOCAL_HOME.link}</a>
            <MochiAside text={MOCHI_LINES.local.text} mood="smile" />
          </div>
          <ReasonGrid reasons={WHY_LOCAL_REASONS} />
        </div>
      </div>
    </section>
  );
}

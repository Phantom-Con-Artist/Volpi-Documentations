import { PRICE_PLANS, PRICING_HEAD } from '@/content/pricing.content';
import { MOCHI_ASIDES } from '@/content/mochi.content';
import { SectionHead } from '@/components/typography/SectionHead';
import { MochiAside } from '@/components/mochi/MochiAside';
import { PriceTicket } from './PriceTicket';

export function Pricing() {
  return (
    <section id="pricing" data-mochi="pricing" style={{ ['--bd-x' as string]: '100%', ['--bd-y' as string]: '100%' }} className="bd bd-hatch border-t border-tone-soft py-[clamp(80px,12vw,140px)]">
      <div className="wrap">
        <SectionHead kicker={PRICING_HEAD.kicker} title={PRICING_HEAD.title} chapter={PRICING_HEAD.chapter} />
        <div className="grid items-start gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <div className="rise flex flex-col gap-6">
            <p className="max-w-[24em] text-[clamp(1.1rem,1.6vw,1.3rem)] text-ink-2">{PRICING_HEAD.text}</p>
            <a className="textlink self-start" href={PRICING_HEAD.downloadHref}>{PRICING_HEAD.download}</a>
            <MochiAside text={MOCHI_ASIDES.pricing} mood="happy" />
          </div>
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-8">
            {PRICE_PLANS.map((plan) => <PriceTicket key={plan.name} plan={plan} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

import { PageShell } from '@/components/layout/PageShell';
import { PageIntro } from '@/components/typography/PageIntro';
import { MochiAside } from '@/components/mochi/MochiAside';
import { Coda } from '@/sections/11-coda/Coda';
import { PRICE_PLANS, PRICING_HEAD } from '@/content/pricing.content';
import { MOCHI_ASIDES } from '@/content/mochi.content';
import { PriceTicket } from './PriceTicket';

/** The two plans as tickets, Mochi's aside beside them, then the shared download close. */
export function PricingPage() {
  return (
    <PageShell>
      <div className="wrap">
        <div data-mochi="pricing-top">
          <PageIntro kicker={PRICING_HEAD.kicker} title={PRICING_HEAD.title} text={PRICING_HEAD.text}>
            <a className="textlink mt-6" href={PRICING_HEAD.installHref}>{PRICING_HEAD.install}</a>
          </PageIntro>
        </div>
        <section aria-label={PRICING_HEAD.plansLabel} className="grid items-start gap-12 pb-[clamp(72px,10vw,130px)] lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] lg:gap-16">
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-8">
            {PRICE_PLANS.map((plan) => <PriceTicket key={plan.name} plan={plan} />)}
          </div>
          <div className="rise lg:pt-10">
            <MochiAside text={MOCHI_ASIDES.pricing} mood="happy" />
          </div>
        </section>
      </div>
      <Coda />
    </PageShell>
  );
}

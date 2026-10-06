import { WHY_LOCAL_PRIVACY, WHY_LOCAL_REASONS } from '@/content/why-local.content';
import { ReasonGrid } from '@/components/cards/ReasonGrid';
import { PromiseCard } from '@/components/cards/PromiseCard';

/** The opening section of the privacy policy: why local matters, why this page exists, and our promise. */
export function PrivacyWhy() {
  return (
    <section id="why" data-mochi="privacy-why" className="mb-14">
      <h2 className="rise text-[clamp(1.5rem,2.8vw,2rem)] leading-tight">{WHY_LOCAL_PRIVACY.title}</h2>
      <p className="rise mb-10 mt-4 max-w-[40em] text-ink-2">{WHY_LOCAL_PRIVACY.intro}</p>
      <ReasonGrid reasons={WHY_LOCAL_REASONS} />
      <div className="mt-14 grid items-start gap-10 xl:grid-cols-2">
        <div className="rise">
          <h2 className="text-[clamp(1.5rem,2.8vw,2rem)] leading-tight">{WHY_LOCAL_PRIVACY.policyTitle}</h2>
          <p className="mt-4 max-w-[40em] text-ink-2">{WHY_LOCAL_PRIVACY.policy}</p>
        </div>
        <PromiseCard />
      </div>
    </section>
  );
}

import { FactList } from '@/components/cards/FactList';
import { LIMITS, LIMITS_HEAD, NEXT, NEXT_HEAD, PRICING } from '@/content/docs.content';

/** Known limits, the roadmap and the pricing note. */
export function DocsLater() {
  return (
    <>
      <section id="limits" className="rise border-t border-tone-soft py-14">
        <h2 className="text-[clamp(1.6rem,3vw,2.1rem)] leading-tight">{LIMITS_HEAD.title}</h2>
        <p className="mb-8 mt-2 text-ink-2">{LIMITS_HEAD.intro}</p>
        <FactList facts={LIMITS} />
      </section>
      <section id="next" className="rise border-t border-tone-soft py-14">
        <h2 className="text-[clamp(1.6rem,3vw,2.1rem)] leading-tight">{NEXT_HEAD.title}</h2>
        <p className="mb-8 mt-2 text-ink-2">{NEXT_HEAD.intro}</p>
        <FactList facts={NEXT} marker="→" />
        <a href={NEXT_HEAD.roadmap.href} className="textlink mt-8">{NEXT_HEAD.roadmap.label}</a>
      </section>
      <section id="pricing" className="rise border-t border-tone-soft py-14">
        <h2 className="text-[clamp(1.6rem,3vw,2.1rem)] leading-tight">{PRICING.title}</h2>
        <p className="mt-3 max-w-[36em] text-ink-2">{PRICING.text}</p>
      </section>
    </>
  );
}

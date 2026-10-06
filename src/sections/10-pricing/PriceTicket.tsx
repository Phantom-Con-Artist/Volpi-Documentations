import type { PricePlan } from '@/types/content';

/** One plan as a manga panel: a sheared tag, the plan name, a big price and short facts. */
export function PriceTicket({ plan }: { plan: PricePlan }) {
  return (
    <article className="rise panel flex flex-col p-7 sm:p-9">
      <span className={`p5-tag self-start ${plan.current ? 'p5-tag-seal' : ''}`}>{plan.tag}</span>
      <h3 className="mt-7 text-[1.35rem] leading-tight text-ink-2">{plan.name}</h3>
      <p className={`mt-2 font-mincho text-[clamp(2.6rem,4.4vw,3.8rem)] font-semibold leading-none ${plan.current ? 'text-seal' : 'text-ink'}`}>{plan.price}</p>
      <ul className="m-0 mt-7 flex list-none flex-col gap-3 border-t border-tone-soft p-0 pt-6">
        {plan.points.map((point) => (
          <li key={point} className="flex gap-3 text-ink-2">
            <span className="mt-[.7em] h-[7px] w-[7px] shrink-0 rotate-45 bg-seal" aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}

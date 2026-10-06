import type { Fact } from '@/types/content';

/** Numbered reasons in a two-column grid: a seal number, a Mincho title and a short explanation. */
export function ReasonGrid({ reasons }: { reasons: Fact[] }) {
  return (
    <ol className="m-0 grid list-none gap-x-10 gap-y-9 p-0 sm:grid-cols-2">
      {reasons.map((r, i) => (
        <li key={r.title} className="rise border-t-[3px] border-ink pt-5">
          <span className="font-dot text-[13px] tracking-[.16em] text-seal" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
          <h3 className="mt-2 text-[clamp(1.3rem,1.9vw,1.6rem)] leading-snug">{r.title}</h3>
          <p className="mt-2 text-ink-2">{r.text}</p>
        </li>
      ))}
    </ol>
  );
}

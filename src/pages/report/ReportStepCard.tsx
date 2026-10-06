import { ArrowUpRight } from 'lucide-react';
import type { ReportStep } from '@/types/content';
import { navLinkProps } from '@/components/navigation/navLinkProps';

/** One numbered step of the bug-report guide. External links show an arrow. */
export function ReportStepCard({ step, index, last }: { step: ReportStep; index: number; last: boolean }) {
  return (
    <li className="rise grid gap-5 border-t-[3px] border-ink py-8 sm:grid-cols-[72px_minmax(0,1fr)] sm:gap-8">
      <span className={`font-mincho text-[44px] font-semibold leading-none ${last ? 'text-seal' : 'text-ink'}`} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      <div>
        <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] leading-tight">{step.title}</h2>
        <p className="mt-3 max-w-[40em] text-ink-2">{step.text}</p>
        {step.points && (
          <ul className="mt-4 grid max-w-[40em] list-disc gap-1.5 pl-5 text-ink-2 marker:text-seal">
            {step.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
        )}
        {step.links && (
          <div className="mt-6 flex flex-wrap gap-3">
            {step.links.map((l) => (
              <a key={l.href} href={l.href} {...navLinkProps(l.href)} className={`inline-flex items-center gap-1.5 border-[2px] border-ink px-4 py-2 text-[15px] font-medium no-underline hover:bg-ink hover:text-paper ${last ? 'bg-seal' : 'bg-panel'}`} style={last ? { color: 'var(--on-seal)' } : undefined}>
                {l.label} {l.href.startsWith('http') && <ArrowUpRight size={15} aria-hidden="true" />}
              </a>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}

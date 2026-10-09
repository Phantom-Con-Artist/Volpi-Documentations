import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import type { RoadmapPhase } from '@/types/content';
import { ROADMAP_HEAD } from '@/content/roadmap.content';
import { MochiAside } from '@/components/mochi/MochiAside';

/** One phase on the timeline: a numbered seal on the line, then a manga panel with the plan. */
export function PhaseCard({ phase, children }: { phase: RoadmapPhase; children?: ReactNode }) {
  const done = phase.current;
  const small = phase.compact;
  return (
    <li id={phase.id} className={`rise relative grid gap-6 pl-[76px] sm:pl-[104px] ${small ? 'pb-12' : 'pb-16'}`}>
      <span
        className={`absolute left-0 top-0 grid h-[56px] w-[56px] place-items-center border-[3px] border-ink font-mincho font-semibold sm:h-[72px] sm:w-[72px] ${small ? 'text-[16px] sm:text-[19px]' : 'text-[20px] sm:text-[24px]'} ${done ? 'bg-seal' : 'bg-panel'}`}
        style={{ color: done ? 'var(--on-seal)' : undefined, transform: 'rotate(-4deg)' }}
        aria-hidden="true"
      >
        {phase.number}
      </span>
      <div className="flex flex-wrap items-center gap-3">
        <span className={`p5-tag ${done ? 'p5-tag-seal' : ''}`}>{ROADMAP_HEAD.phase} {phase.number} · {phase.status}</span>
        {done && <span className="kicker text-seal">← {ROADMAP_HEAD.here}</span>}
      </div>
      <div className={`panel p-6 ${small ? 'max-w-[980px] sm:p-7' : 'sm:p-9'} ${done ? '' : 'opacity-[.97]'}`}>
        <h2 className={`leading-[1.05] ${small ? 'text-[clamp(1.5rem,2.6vw,2.1rem)]' : 'text-[clamp(1.9rem,3.6vw,3rem)]'}`}><span className="slash">{phase.title}</span></h2>
        <p className="mt-4 max-w-[40em] font-mincho text-[clamp(1.1rem,1.5vw,1.3rem)] leading-snug">{phase.text}</p>
        {phase.items.length > 0 && (
          <dl className={`m-0 grid gap-x-8 gap-y-5 border-t-[3px] border-ink sm:grid-cols-2 ${small ? 'mt-6 pt-5 lg:grid-cols-3' : 'mt-8 pt-6 xl:grid-cols-4'}`}>
            {phase.items.map((f) => (
              <div key={f.title}>
                <dt className="font-mincho font-semibold">{f.title}</dt>
                <dd className="m-0 mt-1 text-[15.5px] text-ink-2">{f.text}</dd>
              </div>
            ))}
          </dl>
        )}
        {phase.link && <a href={phase.link.href} className="textlink mt-6">{phase.link.label} <ArrowRight size={16} aria-hidden="true" /></a>}
        {children}
      </div>
      {phase.mochi && <MochiAside text={phase.mochi} mood="smile" />}
    </li>
  );
}

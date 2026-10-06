import { MEET_MOCHI } from '@/content/about.content';
import { MochiIdCard } from './MochiIdCard';

/** Mochi's introduction: a short heading, then her citizen ID card. */
export function MeetMochi() {
  return (
    <section id="mochi" className="speedlines overflow-hidden border-t border-tone-soft py-[clamp(72px,10vw,130px)]" style={{ ['--sl-x' as string]: '18%', ['--sl-y' as string]: '50%' }}>
      <div className="rise">
        <span className="p5-tag p5-tag-seal">{MEET_MOCHI.kicker}</span>
        <h2 className="mt-6 text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.05]"><span className="slash">{MEET_MOCHI.title}</span></h2>
        <p className="mt-6 max-w-[36em] text-[clamp(1.05rem,1.4vw,1.25rem)] text-ink-2">{MEET_MOCHI.text}</p>
      </div>
      <div className="rise mt-12 px-1 sm:px-4">
        <MochiIdCard />
      </div>
    </section>
  );
}

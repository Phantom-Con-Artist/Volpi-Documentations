import { MEET_MOCHI } from '@/content/about.content';
import { MochiFull } from '@/components/mochi/rig/MochiFull';

/** Mochi's character card: a big full-body Mochi beside her facts. */
export function MeetMochi() {
  return (
    <section id="mochi" className="speedlines overflow-hidden border-t border-tone-soft py-[clamp(72px,10vw,130px)]" style={{ ['--sl-x' as string]: '18%', ['--sl-y' as string]: '50%' }}>
      <div className="grid items-center gap-12 md:grid-cols-[minmax(200px,320px)_minmax(0,1fr)] md:gap-16">
        <div className="rise mx-auto w-[min(60vw,300px)] md:w-full" data-mood="happy">
          <MochiFull pose="wave" mood="happy" />
        </div>
        <div className="rise">
          <span className="p5-tag p5-tag-seal">{MEET_MOCHI.kicker}</span>
          <h2 className="mt-6 text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.05]"><span className="slash">{MEET_MOCHI.title}</span></h2>
          <p className="mt-6 max-w-[36em] text-[clamp(1.05rem,1.4vw,1.25rem)] text-ink-2">{MEET_MOCHI.text}</p>
          <dl className="m-0 mt-8 grid gap-6 border-t-[3px] border-ink pt-6 sm:grid-cols-3">
            {MEET_MOCHI.facts.map((f) => (
              <div key={f.title}>
                <dt className="font-mincho text-[1.2rem] font-semibold">{f.title}</dt>
                <dd className="m-0 mt-1 text-[15.5px] text-ink-2">{f.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

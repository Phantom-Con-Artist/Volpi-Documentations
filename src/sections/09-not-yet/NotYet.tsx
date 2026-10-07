import { NOT_YET } from '@/content/notyet.content';
import { MOCHI_ASIDES } from '@/content/mochi.content';
import { MochiAside } from '@/components/mochi/MochiAside';
import { ArrowRight } from 'lucide-react';
import { IndexCard } from './IndexCard';

export function NotYet() {
  return (
    <section id="notyet" data-mochi="notyet" className="bd bd-streaks border-t border-tone-soft py-[clamp(80px,12vw,140px)]">
      <div className="wrap grid items-start gap-12 md:grid-cols-[5fr_7fr] md:gap-20">
        <div className="rise flex flex-col gap-5">
          <span className="p5-tag self-start">{NOT_YET.kicker}</span>
          <h2 className="text-[clamp(2.4rem,5vw,4.6rem)] leading-[1.05]"><span className="slash">{NOT_YET.title}</span></h2>
          <p className="max-w-[22em] text-[1.1rem] text-ink-2">{NOT_YET.text}</p>
          <a href={NOT_YET.roadmap.href} className="textlink self-start">{NOT_YET.roadmap.label} <ArrowRight size={16} aria-hidden="true" /></a>
          <MochiAside text={MOCHI_ASIDES.notyet} mood="wow" />
        </div>
        <IndexCard />
      </div>
    </section>
  );
}

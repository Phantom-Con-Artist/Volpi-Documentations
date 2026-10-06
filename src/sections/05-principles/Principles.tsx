import { PRINCIPLES, PRINCIPLES_HEAD } from '@/content/principles.content';
import { SectionHead } from '@/components/typography/SectionHead';
import { PrincipleCard } from './PrincipleCard';

export function Principles() {
  return (
    <section id="desk" className="py-[clamp(80px,12vw,140px)]">
      <div className="wrap">
        <SectionHead {...PRINCIPLES_HEAD} />
        <div className="grid gap-14 md:grid-cols-3 md:gap-10 xl:gap-14">
          {PRINCIPLES.map((p, i) => <PrincipleCard key={p.title} principle={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}

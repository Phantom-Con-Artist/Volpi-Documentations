import type { Principle } from '@/types/content';
import { ThemedImg } from '@/components/media/ThemedImg';

const NUMERALS = ['壱', '弐', '参'];
const TILTS = ['tilt-l', '', 'tilt-r'];

export function PrincipleCard({ principle, index }: { principle: Principle; index: number }) {
  return (
    <article className="rise">
      <div className={`panel mb-8 aspect-[4/3] overflow-hidden ${TILTS[index]}`}>
        <ThemedImg image={principle.image} className="h-full w-full object-cover" sizes="(max-width: 768px) 100vw, 560px" />
      </div>
      <div className="flex items-baseline gap-4">
        <span className="font-mincho text-[2.2rem] font-semibold leading-none text-seal" aria-hidden="true">{NUMERALS[index]}</span>
        <h3 className="text-[clamp(1.5rem,2.2vw,2rem)]">{principle.title}</h3>
      </div>
      <p className="mt-3 max-w-[30em] text-ink-2">{principle.text}</p>
    </article>
  );
}

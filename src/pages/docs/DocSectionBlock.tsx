import { ArrowRight } from 'lucide-react';
import type { DocSection } from '@/types/content';
import { DOCS_HEAD } from '@/content/docs.content';
import { ThemedImg } from '@/components/media/ThemedImg';

/** One feature area, written as reference: the facts first, a small screenshot, and a link to the matching tour chapter. */
export function DocSectionBlock({ section, tourId }: { section: DocSection; tourId?: string }) {
  return (
    <section id={section.id} className="rise border-t border-tone-soft py-14">
      <h2 className="text-[clamp(1.9rem,3.4vw,2.8rem)] leading-tight">{section.title}</h2>
      <p className="mt-2 text-ink-2">{section.intro}</p>
      <div className="mt-8 grid items-start gap-8 xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <dl className="m-0 grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {section.features.map((f) => (
            <div key={f.title}>
              <dt className="font-mincho font-semibold">{f.title}</dt>
              <dd className="m-0 mt-1 text-[15.5px] text-ink-2">{f.text}</dd>
            </div>
          ))}
        </dl>
        {section.image && (
          <div className="flex flex-col gap-4">
            <div className="panel">
              <ThemedImg image={section.image} className="h-auto w-full" sizes="(max-width: 1280px) 100vw, 520px" />
            </div>
            {tourId && <a href={`/features/#${tourId}`} className="textlink self-start">{DOCS_HEAD.tourShort} <ArrowRight size={16} aria-hidden="true" /></a>}
          </div>
        )}
      </div>
    </section>
  );
}

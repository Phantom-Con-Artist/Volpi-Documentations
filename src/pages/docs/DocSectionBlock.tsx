import type { DocSection } from '@/types/content';
import { ThemedImg } from '@/components/media/ThemedImg';

export function DocSectionBlock({ section }: { section: DocSection }) {
  return (
    <section id={section.id} className="rise border-t border-tone-soft py-14">
      <h2 className="text-[clamp(1.9rem,3.4vw,2.8rem)] leading-tight">{section.title}</h2>
      <p className="mt-2 text-ink-2">{section.intro}</p>
      <div className="mt-8 grid items-start gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <dl className="m-0 grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {section.features.map((f) => (
            <div key={f.title}>
              <dt className="font-mincho font-semibold">{f.title}</dt>
              <dd className="m-0 mt-1 text-[15.5px] text-ink-2">{f.text}</dd>
            </div>
          ))}
        </dl>
        {section.image && (
          <div className="panel order-first xl:order-none">
            <ThemedImg image={section.image} className="h-auto w-full" sizes="(max-width: 1280px) 100vw, 760px" />
          </div>
        )}
      </div>
    </section>
  );
}

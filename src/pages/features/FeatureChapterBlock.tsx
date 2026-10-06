import type { FeatureChapter } from '@/types/content';
import { DOC_SECTIONS } from '@/content/docs.content';
import { ThemedImg } from '@/components/media/ThemedImg';

/** One feature area: a joke that names the pain, the facts from the docs, and large screenshots. Even chapters flip sides. */
export function FeatureChapterBlock({ chapter, index }: { chapter: FeatureChapter; index: number }) {
  const facts = DOC_SECTIONS.find((s) => s.id === chapter.docId)?.features ?? [];
  const flip = index % 2 === 1;
  return (
    <section id={chapter.id} className="border-t border-tone-soft py-[clamp(64px,9vw,120px)]">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className={`rise lg:sticky lg:top-28 ${flip ? 'lg:order-2' : ''}`}>
          <span className="p5-tag">{String(index + 1).padStart(2, '0')} · {chapter.kicker}</span>
          <h2 className="mt-6 text-[clamp(2.1rem,4vw,3.6rem)] leading-[1.05]"><span className="slash">{chapter.title}</span></h2>
          <p className="mt-7 font-mincho text-[clamp(1.15rem,1.6vw,1.4rem)] leading-snug">{chapter.joke}</p>
          {chapter.note && <p className="mt-4 text-[15.5px] text-ink-2"><span className="kicker mr-2 text-seal">Honest note</span>{chapter.note}</p>}
          <dl className="m-0 mt-9 grid gap-x-8 gap-y-5 border-t-[3px] border-ink pt-6 sm:grid-cols-2">
            {facts.map((f) => (
              <div key={f.title}>
                <dt className="font-mincho font-semibold">{f.title}</dt>
                <dd className="m-0 mt-1 text-[15.5px] text-ink-2">{f.text}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex flex-col gap-12">
          {chapter.images.map((img) => (
            <div key={img.day} className="rise panel">
              <ThemedImg image={img} className="h-auto w-full" sizes="(max-width: 1024px) 100vw, 1000px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

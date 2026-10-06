import { ArrowRight, Check } from 'lucide-react';
import type { FeatureChapter } from '@/types/content';
import { FEATURES_HEAD } from '@/content/features.content';
import { ThemedImg } from '@/components/media/ThemedImg';

/** One feature area: a joke that names the pain, a few highlights, large screenshots and a link to the details. Odd chapters flip sides. */
export function FeatureChapterBlock({ chapter, index }: { chapter: FeatureChapter; index: number }) {
  const flip = index % 2 === 1;
  return (
    <section id={chapter.id} className="border-t border-tone-soft py-[clamp(64px,9vw,120px)]">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className={`rise lg:sticky lg:top-28 ${flip ? 'lg:order-2' : ''}`}>
          <span className="p5-tag">{String(index + 1).padStart(2, '0')} · {chapter.kicker}</span>
          <h2 className="mt-6 text-[clamp(2.1rem,4vw,3.6rem)] leading-[1.05]"><span className="slash">{chapter.title}</span></h2>
          <p className="mt-7 font-mincho text-[clamp(1.15rem,1.6vw,1.4rem)] leading-snug">{chapter.joke}</p>
          {chapter.note && <p className="mt-4 text-[15.5px] text-ink-2"><span className="kicker mr-2 text-seal">Honest note</span>{chapter.note}</p>}
          <ul className="m-0 mt-9 grid list-none gap-3 border-t-[3px] border-ink p-0 pt-6">
            {chapter.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-ink-2">
                <Check size={18} strokeWidth={2.6} className="mt-1 shrink-0 text-seal" aria-hidden="true" />{h}
              </li>
            ))}
          </ul>
          <a href={`/docs/#${chapter.docId}`} className="textlink mt-8">{FEATURES_HEAD.docsLink} <ArrowRight size={16} aria-hidden="true" /></a>
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

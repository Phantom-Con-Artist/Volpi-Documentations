import { HOOD_FACTS, HOOD_HEAD, HOOD_IMAGE } from '@/content/hood.content';
import { SectionHead } from '@/components/typography/SectionHead';
import { ThemedImg } from '@/components/media/ThemedImg';

export function UnderTheHood() {
  return (
    <section id="hood" data-mochi="hood" className="border-t border-tone-soft py-[clamp(80px,12vw,140px)]">
      <div className="wrap">
        <SectionHead {...HOOD_HEAD} />
        <div className="grid items-start gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <dl className="rise m-0 grid gap-0 border-t-[3px] border-ink">
            {HOOD_FACTS.map((f) => (
              <div key={f.title} className="grid gap-1 border-b border-tone-soft py-5 sm:grid-cols-[200px_1fr] sm:gap-6">
                <dt className="font-mincho text-xl font-semibold">{f.title}</dt>
                <dd className="m-0 text-ink-2">{f.text}</dd>
              </div>
            ))}
            <a href="/privacy/" className="textlink mt-6 self-start">How Volpi uses the internet</a>
          </dl>
          <div className="rise panel tilt-l">
            <ThemedImg image={HOOD_IMAGE} className="h-auto w-full" sizes="(max-width: 1024px) 100vw, 980px" />
          </div>
        </div>
      </div>
    </section>
  );
}

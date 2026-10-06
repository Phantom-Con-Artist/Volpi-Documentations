import { STORY } from '@/content/about.content';
import { MochiAside } from '@/components/mochi/MochiAside';

/** The developer's story, set as a signed letter. The heading stays in view beside it on wide screens. */
export function StoryLetter() {
  return (
    <section id="story" className="border-t border-tone-soft py-[clamp(72px,10vw,130px)]">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
        <div className="rise flex flex-col items-start gap-8 lg:sticky lg:top-28">
          <span className="p5-tag">{STORY.kicker}</span>
          <h2 className="text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.05]"><span className="slash">{STORY.title}</span></h2>
          <MochiAside text={STORY.mochi} mood="smile" />
        </div>
        <article className="rise panel px-6 py-9 sm:px-14 sm:py-14">
          <p className="font-mincho text-[clamp(1.3rem,2vw,1.6rem)] font-semibold">{STORY.greeting}</p>
          <div className="mt-6 grid max-w-[38em] gap-5 text-[clamp(1.05rem,1.35vw,1.18rem)] leading-[1.75] text-ink-2">
            {STORY.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
          <footer className="mt-12 border-t-[3px] border-ink pt-6">
            <p className="font-mincho text-[clamp(1.6rem,2.6vw,2.2rem)] font-semibold leading-none">{STORY.name}</p>
            <p className="kicker mt-3">{STORY.role}</p>
          </footer>
        </article>
      </div>
    </section>
  );
}

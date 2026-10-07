import { useEffect, useRef } from 'react';
import type { FilmScene, FilmSets, FilmText } from '@/types/film';
import { MochiFilm } from './MochiFilm';
import { FilmTranscript } from './FilmTranscript';

/** A film with its transcript, capped so the stage and controls fit below the header on any screen. */
export function FilmSection({ scenes, sets, text, id, mochiId }: { scenes: FilmScene[]; sets: FilmSets; text: FilmText; id?: string; mochiId: string }) {
  const ref = useRef<HTMLElement>(null);
  // Marks the page while the film is on screen, so the roaming Mochi steps aside (styles/film.css).
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const root = document.documentElement;
    const observer = new IntersectionObserver(([entry]) => { root.dataset.film = entry.isIntersecting ? 'on' : 'off'; }, { threshold: 0.15 });
    observer.observe(el);
    return () => { observer.disconnect(); delete root.dataset.film; };
  }, []);
  return (
    <section ref={ref} id={id} data-mochi={mochiId} className="bd bd-bleed bd-focus pb-[clamp(72px,10vw,130px)] pt-10">
      <div className="mx-auto max-w-[max(320px,calc((100svh-250px)*16/9))]">
        <MochiFilm scenes={scenes} sets={sets} text={text} />
        <FilmTranscript scenes={scenes} summary={text.transcript} />
      </div>
    </section>
  );
}

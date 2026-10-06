import { FILM_SCENES, TRANSCRIPT } from '@/content/about.content';

/** Every line of the film as text, for reading instead of watching. */
export function FilmTranscript() {
  return (
    <details className="rise mt-8 border-[2px] border-ink bg-panel px-5 py-4">
      <summary className="cursor-pointer font-medium">{TRANSCRIPT.summary}</summary>
      <ol className="m-0 mt-4 grid list-none gap-3 p-0">
        {FILM_SCENES.map((s, i) => (
          <li key={s.id} className="grid gap-1 sm:grid-cols-[220px_1fr] sm:gap-6">
            <span className="kicker pt-1">{String(i + 1).padStart(2, '0')} · {s.title}</span>
            <span className="text-ink-2">Mochi: {s.bubble.text}</span>
          </li>
        ))}
      </ol>
    </details>
  );
}

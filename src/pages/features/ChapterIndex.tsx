import { FEATURE_CHAPTERS, FEATURES_HEAD } from '@/content/features.content';

/** A row of chapter links under the page intro. */
export function ChapterIndex() {
  return (
    <nav className="rise -mt-4 mb-6 flex flex-wrap items-center gap-x-3 gap-y-3" aria-label={FEATURES_HEAD.index}>
      <span className="kicker mr-1">{FEATURES_HEAD.index}</span>
      {FEATURE_CHAPTERS.map((c) => (
        <a key={c.id} href={`#${c.id}`} className="border-[2px] border-ink bg-panel px-3 py-1 text-[15px] font-medium no-underline hover:bg-ink hover:text-paper">
          {c.kicker}
        </a>
      ))}
    </nav>
  );
}

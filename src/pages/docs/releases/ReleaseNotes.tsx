import { RELEASES, RELEASES_HEAD } from '@/content/releases.content';
import { ReleaseEntry } from './ReleaseEntry';

/** Every version as a timeline: one ink line, a version seal per release, the newest in red. */
export function ReleaseNotes() {
  return (
    <section aria-labelledby={`${RELEASES_HEAD.id}-title`}>
      <h2 id={`${RELEASES_HEAD.id}-title`} className="text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.05]"><span className="slash">{RELEASES_HEAD.title}</span></h2>
      <p className="mb-12 mt-5 max-w-[36em] text-ink-2">{RELEASES_HEAD.intro}</p>
      <ol className="relative m-0 list-none p-0">
        <span className="absolute bottom-16 left-[26px] top-4 w-[4px] bg-ink sm:left-[34px]" aria-hidden="true" />
        {RELEASES.map((r, i) => <ReleaseEntry key={r.version} release={r} latest={i === 0} />)}
      </ol>
    </section>
  );
}

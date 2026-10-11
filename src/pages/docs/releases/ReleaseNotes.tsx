import { RELEASES, RELEASES_HEAD } from '@/content/releases.content';
import { ReleaseEntry } from './ReleaseEntry';

/** Every version as a timeline: one ink line, a version seal per release, the newest in red. */
export function ReleaseNotes() {
  return (
    <ol aria-label={RELEASES_HEAD.listLabel} className="relative m-0 list-none p-0">
      <span className="absolute bottom-16 left-[26px] top-4 w-[4px] bg-ink sm:left-[34px]" aria-hidden="true" />
      {RELEASES.map((r, i) => <ReleaseEntry key={r.version} release={r} latest={i === 0} />)}
    </ol>
  );
}

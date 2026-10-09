import type { ChangeKind, Release } from '@/types/content';
import { CHANGE_LABELS, RELEASES_HEAD } from '@/content/releases.content';

const KINDS: ChangeKind[] = ['latest', 'feature', 'issue'];

/** "2026-10-09" as "9 October 2026". */
const longDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

/** One version on the timeline: a seal on the line, then a panel with its changes grouped as in the app. */
export function ReleaseEntry({ release, latest }: { release: Release; latest: boolean }) {
  return (
    <li id={`v${release.version}`} className="rise relative grid gap-5 pb-16 pl-[76px] sm:pl-[104px]">
      <span
        className={`absolute left-0 top-0 grid h-[56px] w-[56px] place-items-center border-[3px] border-ink font-mincho text-[14px] font-semibold sm:h-[72px] sm:w-[72px] sm:text-[17px] ${latest ? 'bg-seal' : 'bg-panel'}`}
        style={{ color: latest ? 'var(--on-seal)' : undefined, transform: 'rotate(-4deg)' }}
        aria-hidden="true"
      >
        {release.version}
      </span>
      <div className="flex flex-wrap items-center gap-3">
        <span className={`p5-tag ${latest ? 'p5-tag-seal' : ''}`}>v{release.version} · {release.channel}</span>
        <time className="kicker" dateTime={release.date}>{longDate(release.date)}</time>
        {latest && <span className="kicker text-seal">← {RELEASES_HEAD.latest}</span>}
      </div>
      <div className="panel p-6 sm:p-9">
        <p className="max-w-[40em] font-mincho text-[clamp(1.1rem,1.5vw,1.3rem)] leading-snug">{release.summary}</p>
        {KINDS.filter((k) => release.changes[k].length > 0).map((k) => (
          <div key={k} className="mt-8 border-t-[3px] border-ink pt-6">
            <h3 className={`kicker ${k === 'issue' ? 'text-seal' : ''}`}>{CHANGE_LABELS[k]}</h3>
            <dl className="m-0 mt-5 grid gap-x-10 gap-y-5 md:grid-cols-2">
              {release.changes[k].map((c) => (
                <div key={c.title}>
                  <dt className="font-mincho font-semibold">{c.title}</dt>
                  <dd className="m-0 mt-1 text-[15.5px] text-ink-2">{c.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </li>
  );
}

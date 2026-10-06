import { PageShell } from '@/components/layout/PageShell';
import { PageIntro } from '@/components/typography/PageIntro';
import { DiscordButton } from '@/components/buttons/DiscordButton';
import { ROADMAP_HEAD, ROADMAP_PHASES } from '@/content/roadmap.content';
import { NEXT } from '@/content/docs.content';
import { PhaseCard } from './PhaseCard';

/** The roadmap as a vertical timeline: one ink line, a numbered seal per phase, the current phase in red. */
export function RoadmapPage() {
  return (
    <PageShell>
      <div className="wrap pb-[clamp(72px,10vw,130px)]">
        <div data-mochi="roadmap-top">
          <PageIntro kicker={ROADMAP_HEAD.kicker} title={ROADMAP_HEAD.title} text={ROADMAP_HEAD.text}>
            <p className="kicker mt-6">{ROADMAP_HEAD.note}</p>
          </PageIntro>
        </div>
        <ol className="relative m-0 list-none p-0">
          <span className="absolute bottom-16 left-[26px] top-4 w-[4px] bg-ink sm:left-[34px]" aria-hidden="true" />
          {ROADMAP_PHASES.map((phase) => (
            <PhaseCard key={phase.id} phase={phase}>
              {phase.id === 'polish' && (
                <div className="mt-8">
                  <span className="kicker">{ROADMAP_HEAD.alsoPlanned}</span>
                  <ul className="m-0 mt-3 grid list-none gap-2 p-0 sm:grid-cols-2">
                    {NEXT.map((n) => <li key={n.title} className="text-ink-2"><span className="text-seal">→</span> <span className="font-mincho font-semibold text-ink">{n.title}.</span> {n.text}</li>)}
                  </ul>
                </div>
              )}
              {phase.id === 'next' && <div className="mt-8"><DiscordButton /></div>}
            </PhaseCard>
          ))}
        </ol>
      </div>
    </PageShell>
  );
}

import { PageShell } from '@/components/layout/PageShell';
import { PageIntro } from '@/components/typography/PageIntro';
import { REPORT_ASIDE, REPORT_HEAD, REPORT_STEPS } from '@/content/report.content';
import { ReportStepCard } from './ReportStepCard';
import { ReportAside } from './ReportAside';

/** How to report a bug well, before sending people to GitHub. */
export function ReportPage() {
  return (
    <PageShell>
      <div className="wrap pb-[clamp(72px,10vw,130px)]">
        <div data-mochi="report-top">
          <PageIntro kicker={REPORT_HEAD.kicker} title={REPORT_HEAD.title} text={REPORT_HEAD.text} />
        </div>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
          <div>
            <ol className="m-0 list-none p-0">
              {REPORT_STEPS.map((s, i) => <ReportStepCard key={s.title} step={s} index={i} last={i === REPORT_STEPS.length - 1} />)}
            </ol>
            <p className="rise border-t-[3px] border-ink pt-8 font-mincho text-[clamp(1.15rem,1.6vw,1.35rem)]">{REPORT_ASIDE.thanks}</p>
          </div>
          <ReportAside />
        </div>
      </div>
    </PageShell>
  );
}

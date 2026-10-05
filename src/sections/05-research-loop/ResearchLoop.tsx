import { LOOP_HEAD, LOOP_STEPS } from '@/content/loop.content';
import { SectionHead } from '@/components/typography/SectionHead';
import { LoopVideo } from '@/components/media/LoopVideo';
import { useStepper } from '@/hooks/useStepper';
import { LoopTabs } from './LoopTabs';

/** One large recording at a time. Each step plays to the end, then the next one starts. */
export function ResearchLoop() {
  const { index, select, next } = useStepper(LOOP_STEPS.length);
  const step = LOOP_STEPS[index];

  return (
    <section id="loop" data-mochi="loop" className="pb-[clamp(80px,12vw,140px)]">
      <div className="wrap">
        <SectionHead {...LOOP_HEAD} />
        <LoopTabs steps={LOOP_STEPS} active={index} onSelect={select} />
        <div className="rise mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14">
          <div className="panel" id={`loop-panel-${step.id}`} role="tabpanel" aria-labelledby={`loop-tab-${step.id}`}>
            <LoopVideo clip={step.clip} loop={false} onEnded={next} className="block h-auto w-full" />
          </div>
          <div className="lg:pt-2" aria-live="polite">
            <span className="p5-tag">{step.kicker}</span>
            <h3 className="mb-4 mt-4 text-[clamp(1.9rem,3vw,2.8rem)] leading-tight">{step.title}</h3>
            <p className="text-[1.1rem] text-ink-2">{step.text}</p>
            <p className="kicker mt-6">{index + 1} / {LOOP_STEPS.length}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { LOOP_HEAD, LOOP_STEPS } from '@/content/loop.content';
import { SectionHead } from '@/components/typography/SectionHead';
import { LoopVideo } from '@/components/media/LoopVideo';
import { useStepper } from '@/hooks/useStepper';
import { LoopTabs } from './LoopTabs';
import { FeatureGallery } from './FeatureGallery';

/** One large recording at a time, full width. Each step plays to the end, then the next one starts. */
export function ResearchLoop() {
  const { index, select, next } = useStepper(LOOP_STEPS.length);
  const step = LOOP_STEPS[index];

  return (
    <section id="loop" data-mochi="loop" className="pb-[clamp(80px,12vw,140px)]">
      <div className="wrap">
        <SectionHead {...LOOP_HEAD} />
        <LoopTabs steps={LOOP_STEPS} active={index} onSelect={select} />
        <div className="rise mt-8 panel" id={`loop-panel-${step.id}`} role="tabpanel" aria-labelledby={`loop-tab-${step.id}`}>
          <LoopVideo clip={step.clip} loop={false} onEnded={next} className="block h-auto w-full" />
        </div>
        <div className="mt-10 grid items-start gap-x-14 gap-y-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_auto]" aria-live="polite">
          <div>
            <span className="p5-tag">{step.kicker}</span>
            <h3 className="mt-4 text-[clamp(1.9rem,3vw,2.8rem)] leading-tight">{step.title}</h3>
          </div>
          <p className="text-[1.15rem] text-ink-2 md:pt-12">{step.text}</p>
          <p className="kicker md:pt-14">{index + 1} / {LOOP_STEPS.length}</p>
        </div>
        <FeatureGallery />
      </div>
    </section>
  );
}

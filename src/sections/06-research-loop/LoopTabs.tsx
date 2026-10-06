import type { LoopStep } from '@/types/content';
import { P5Button } from '@/components/buttons/P5Button';

interface Props {
  steps: LoopStep[];
  active: number;
  onSelect: (index: number) => void;
}

export function LoopTabs({ steps, active, onSelect }: Props) {
  return (
    <div className="rise -mx-[var(--gx)] overflow-x-auto px-[var(--gx)] pb-3 pt-1">
      <div className="flex w-max gap-4" role="tablist" aria-label="Steps">
        {steps.map((s, i) => (
          <P5Button
            key={s.id}
            id={`loop-tab-${s.id}`}
            role="tab"
            aria-selected={i === active}
            aria-controls={`loop-panel-${s.id}`}
            onClick={() => onSelect(i)}
          >
            <span className="font-dot text-[12px] opacity-70">{String(i + 1).padStart(2, '0')}</span>
            {s.kicker}
          </P5Button>
        ))}
      </div>
    </div>
  );
}

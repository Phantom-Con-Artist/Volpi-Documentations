import { useRef, type KeyboardEvent, type PointerEvent } from 'react';
import { BookOpen, Clapperboard } from 'lucide-react';
import type { HomeView } from '@/hooks/useHomeView';
import { HOME_VIEW } from '@/content/tour.content';
import { P5Button } from '@/components/buttons/P5Button';

const SWIPE_PX = 40;

/** Two P5 options under the hero. Tap one, use the arrow keys, or swipe the strip: right for the tour, left for the page. */
export function HomeViewSwitch({ view, onChange }: { view: HomeView; onChange: (view: HomeView) => void }) {
  const startX = useRef<number | null>(null);
  const onPointerDown = (e: PointerEvent) => { startX.current = e.clientX; };
  const onPointerUp = (e: PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) >= SWIPE_PX) onChange(dx > 0 ? 'watch' : 'read');
  };
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); onChange(view === 'read' ? 'watch' : 'read'); }
  };
  const option = (value: HomeView, label: string, Icon: typeof BookOpen) => (
    <P5Button role="radio" aria-checked={view === value} tabIndex={view === value ? 0 : -1} onClick={() => onChange(value)}>
      <Icon size={17} aria-hidden="true" />{label}
    </P5Button>
  );

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      <div
        role="radiogroup"
        aria-label={HOME_VIEW.label}
        className="flex touch-pan-y select-none flex-wrap gap-4"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => { startX.current = null; }}
        onKeyDown={onKeyDown}
      >
        {option('read', HOME_VIEW.read, BookOpen)}
        {option('watch', HOME_VIEW.watch, Clapperboard)}
      </div>
      <span className="kicker">{HOME_VIEW.hint}</span>
    </div>
  );
}

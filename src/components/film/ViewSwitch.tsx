import { useRef, type KeyboardEvent, type PointerEvent } from 'react';
import { BookOpen, Clapperboard } from 'lucide-react';
import type { ViewChoice } from '@/hooks/useViewChoice';
import { P5Button } from '@/components/buttons/P5Button';

const SWIPE_PX = 40;

/** Read or watch: two P5 options. Tap one, use the arrow keys, or swipe the strip: right for the tour, left for the page. */
export interface ViewSwitchText { label: string; read: string; watch: string; hint: string }

export function ViewSwitch({ view, onChange, text, className = '' }: { view: ViewChoice; onChange: (view: ViewChoice) => void; text: ViewSwitchText; className?: string }) {
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
  const option = (value: ViewChoice, label: string, Icon: typeof BookOpen) => (
    <P5Button size="sm" role="radio" aria-checked={view === value} tabIndex={view === value ? 0 : -1} onClick={() => onChange(value)}>
      <Icon size={15} aria-hidden="true" />{label}
    </P5Button>
  );

  return (
    <div className={`flex flex-wrap items-center gap-x-5 gap-y-3 ${className}`}>
      <div
        role="radiogroup"
        aria-label={text.label}
        className="flex touch-pan-y select-none flex-wrap gap-3"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => { startX.current = null; }}
        onKeyDown={onKeyDown}
      >
        {option('read', text.read, BookOpen)}
        {option('watch', text.watch, Clapperboard)}
      </div>
      {/* Only touch screens can swipe, so only they get the hint. */}
      <span className="kicker hidden [@media(hover:none)]:inline">{text.hint}</span>
    </div>
  );
}

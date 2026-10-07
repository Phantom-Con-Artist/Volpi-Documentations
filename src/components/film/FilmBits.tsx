import type { CSSProperties, ReactNode } from 'react';

/** Shared props for the film's sets. Positions are in the 960 × 540 stage; `delay` is in seconds. */
interface Place { x: number; y: number; r?: number; delay?: number; className?: string }

function place({ x, y, r = 0, delay = 0 }: Place, extra?: CSSProperties): CSSProperties {
  return { position: 'absolute', left: x, top: y, ['--r' as string]: `${r}deg`, animationDelay: `${delay}s`, ...extra };
}

/** A small app window: title bar with three dots, a label and a few grey text lines. */
export function Win({ w = 190, h = 120, label, children, ...p }: Place & { w?: number; h?: number; label: string; children?: ReactNode }) {
  return (
    <div className={p.className ?? 'f-pop'} style={place(p, { width: w, height: h, transform: `rotate(${p.r ?? 0}deg)` })}>
      <div className="h-full border-[3px] border-ink bg-panel shadow-[6px_6px_0_var(--tone)]">
        <div className="flex items-center gap-1.5 border-b-[2px] border-ink px-2 py-1">
          <span className="h-2 w-2 rounded-full bg-seal" /><span className="h-2 w-2 rounded-full bg-tone" /><span className="h-2 w-2 rounded-full bg-tone" />
          <span className="ml-1 truncate font-dot text-[12px] tracking-[.06em]">{label}</span>
        </div>
        {children ?? (
          <div className="grid gap-2 p-3">
            <span className="h-2 w-4/5 bg-tone-soft" /><span className="h-2 w-3/5 bg-tone-soft" /><span className="h-2 w-2/3 bg-tone-soft" />
          </div>
        )}
      </div>
    </div>
  );
}

/** A red seal stamp with a short phrase and a small line under it. */
export function Stamp({ text, sub, ...p }: Place & { text: string; sub?: string }) {
  return (
    <div className="f-stamp" style={place(p)}>
      <div className="border-[4px] border-seal bg-panel px-5 py-3 text-center text-seal shadow-[5px_5px_0_var(--tone)]">
        <span className="block font-mincho text-[34px] font-semibold leading-none">{text}</span>
        {sub && <span className="mt-2 block font-dot text-[12px] uppercase tracking-[.14em]">{sub}</span>}
      </div>
    </div>
  );
}

/** Outlined manga sound-effect lettering. */
export function Sfx({ text, size = 64, ...p }: Place & { text: string; size?: number }) {
  return (
    <span className={p.className ?? 'f-pop'} style={place(p, { font: `700 ${size}px/1 "Zen Old Mincho", serif`, color: 'transparent', WebkitTextStroke: '2px var(--ink)', opacity: 0.35, whiteSpace: 'nowrap' })} aria-hidden="true">
      {text}
    </span>
  );
}

/** A sheet of paper with ruled lines. */
export function Paper({ w = 120, h = 34, ...p }: Place & { w?: number; h?: number }) {
  return (
    <div className={p.className ?? 'f-drop'} style={place(p, { width: w, height: h })}>
      <div className="h-full border-[2px] border-ink bg-paper" style={{ background: 'repeating-linear-gradient(to bottom, var(--paper) 0 7px, var(--tone-soft) 7px 8px)' }} />
    </div>
  );
}

/** Anything else, placed and animated. */
export function Bit({ children, ...p }: Place & { children: ReactNode }) {
  return <div className={p.className ?? 'f-pop'} style={place(p)}>{children}</div>;
}

import { FORMATS } from '@/content/formats.content';

/** A sheared ink ribbon across the full width, with a red edge (P5's angle-and-contrast cue). */
export function FormatsBand() {
  return (
    <div data-mochi="formats" className="relative -mt-2 overflow-hidden py-6">
      <div className="origin-left -skew-y-[1.6deg] bg-ink text-paper" style={{ borderTop: '6px solid var(--seal)' }}>
        <div className="wrap grid skew-y-[1.6deg] md:grid-cols-3">
          {FORMATS.map((row, i) => (
            <div key={row.label} className={`py-8 ${i ? 'border-t border-paper/20 md:border-l md:border-t-0 md:pl-10' : ''}`}>
              <span className="font-dot text-[13px] uppercase tracking-[.16em] opacity-80">{row.label}</span>
              <p className="mt-3 font-mincho text-[clamp(1.05rem,1.5vw,1.35rem)]">{row.items.join(' · ')}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

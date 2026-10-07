import { useId } from 'react';
import { ACCENT, HAIR, INK, OUTLINE, PINK, SKIN } from './palette';
import { MochiMoods } from './MochiMoods';

// The head from the app (../Volpi/src/components/mochi/MochiFace.tsx), in a 200-wide box.
// Moods are picked by data-mood on an ancestor (styles/mochi.css). Pupils follow --gx / --gy.
function Eye({ cx }: { cx: number }) {
  return (
    <g className="eye">
      <ellipse cx={cx} cy={118} rx={11} ry={13.5} fill={INK} />
      <g className="pupil">
        <ellipse cx={cx} cy={123} rx={7.5} ry={7.5} style={ACCENT} />
        <circle cx={cx - 4} cy={112} r={4.4} fill="#fff" />
        <circle cx={cx + 4} cy={125} r={2} fill="#fff" />
      </g>
      <path d={`M${cx - 13} 110 Q${cx} 100 ${cx + 13} 110`} fill="none" stroke={INK} strokeWidth={4.5} strokeLinecap="round" />
    </g>
  );
}

export function MochiHead() {
  const blush = `mochi-blush-${useId().replace(/:/g, '')}`;
  return (
    <g className="mf-head">
      <defs>
        <pattern id={blush} width="4" height="4" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.15" fill="#ec8aa3" /></pattern>
      </defs>
      <g className="ear-l"><path d="M48 80 L40 20 L88 52 Z" fill={HAIR} {...OUTLINE} /><path d="M52 66 L48 36 L73 54 Z" fill={PINK} /></g>
      <g className="ear-r"><path d="M152 80 L160 20 L112 52 Z" fill={HAIR} {...OUTLINE} /><path d="M148 66 L152 36 L127 54 Z" fill={PINK} /></g>
      <path d="M42 102 Q36 134 52 152 L58 118 Z" fill={HAIR} {...OUTLINE} />
      <path d="M158 102 Q164 134 148 152 L142 118 Z" fill={HAIR} {...OUTLINE} />
      <ellipse cx={100} cy={106} rx={60} ry={52} fill={SKIN} stroke={INK} strokeWidth={3} />
      <path d="M40 106 C38 58 66 38 100 38 C134 38 162 58 160 106 L152 94 L146 76 L134 90 L122 70 L111 88 L100 68 L89 88 L78 70 L66 90 L54 76 L48 96 Z" fill={HAIR} {...OUTLINE} />
      <path d="M66 54 Q82 45 98 46" fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" opacity={0.55} />
      <g transform="translate(128 52) rotate(18)">
        <path d="M0 0 L-13 -9 L-13 9 Z M0 0 L13 -9 L13 9 Z" style={ACCENT} stroke={INK} strokeWidth={2.2} strokeLinejoin="round" />
        <circle r={4} style={ACCENT} stroke={INK} strokeWidth={2.2} />
      </g>
      <g className="mood m-eo"><Eye cx={76} /><Eye cx={124} /></g>
      <g className="mood m-eh" fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round"><path d="M65 120 Q76 106 87 120" /><path d="M113 120 Q124 106 135 120" /></g>
      <g className="mood m-es" fill="none" stroke={INK} strokeWidth={3.5} strokeLinecap="round"><path d="M65 116 Q76 123 87 116" /><path d="M113 116 Q124 123 135 116" /></g>
      <g className="mood m-ew">
        <circle cx={76} cy={115} r={11} fill="#fff" stroke={INK} strokeWidth={3} /><circle cx={76} cy={116} r={4.5} fill={INK} />
        <circle cx={124} cy={115} r={11} fill="#fff" stroke={INK} strokeWidth={3} /><circle cx={124} cy={116} r={4.5} fill={INK} />
      </g>
      <ellipse cx={58} cy={134} rx={10} ry={5} fill={`url(#${blush})`} />
      <ellipse cx={142} cy={134} rx={10} ry={5} fill={`url(#${blush})`} />
      <path className="mood m-mc" d="M91 135 q4.5 5 9 0 q4.5 5 9 0" fill="none" stroke={INK} strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" />
      <path className="mood m-ms" d="M90 134 q10 12 20 0 z" fill="#c0383e" stroke={INK} strokeWidth={2.4} strokeLinejoin="round" />
      <ellipse className="mood m-mo" cx={100} cy={138} rx={4.5} ry={5.5} fill={INK} />
      <MochiMoods />
      <g className="mood m-z" fill="var(--ink)" fontFamily="Zen Maru Gothic, sans-serif"><text x={150} y={40} fontSize={18}>z</text><text x={164} y={24} fontSize={13}>z</text></g>
    </g>
  );
}

/** The striped tail. `d` is the curve; the accent tip sits at its end. */
export function MochiTail({ d, tip }: { d: string; tip: [number, number] }) {
  return (
    <g className="tail">
      <path d={d} fill="none" stroke={INK} strokeWidth={14} strokeLinecap="round" />
      <path d={d} fill="none" stroke={HAIR} strokeWidth={8.5} strokeLinecap="round" />
      <circle cx={tip[0]} cy={tip[1]} r={4.2} style={ACCENT} />
    </g>
  );
}

export { SKIN, INK };

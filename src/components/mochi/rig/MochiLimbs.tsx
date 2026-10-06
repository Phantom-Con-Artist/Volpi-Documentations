import type { ReactNode } from 'react';
import { ACCENT, INK, OUTLINE, SKIN } from './palette';

const CREAM = '#fffcf5';
const SEAL = '#c0383e';

/**
 * An arm drawn hanging straight down from its shoulder at local (0, 0): a puffy cardigan sleeve,
 * a cream cuff and a mitten hand centred at (0, 50). `children` ride along in the hand.
 */
export function MochiArm({ side, x, y, children }: { side: 'l' | 'r'; x: number; y: number; children?: ReactNode }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className={`mf-arm mf-arm-${side}`}>
        <path d="M-10 -4 Q-14 20 -9.5 39 L9.5 39 Q14 20 10 -4 Q0 -10 -10 -4 Z" style={ACCENT} {...OUTLINE} />
        <path d="M-10 38 H10 V44 H-10 Z" fill={CREAM} stroke={INK} strokeWidth={2.4} strokeLinejoin="round" />
        {side === 'l' && children}
        <path className="mf-hand" d="M-7.5 46 Q-9 56 0 58 Q9 56 7.5 46 Q0 42 -7.5 46 Z" fill={SKIN} {...OUTLINE} />
        <path className="mf-hand" d="M-3 52 v3 M2 52 v3" stroke={INK} strokeWidth={1.6} strokeLinecap="round" opacity={0.7} />
        {side === 'r' && children}
      </g>
    </g>
  );
}

/** The open book, held by its left edge in the left hand. The right page flips. */
export function MochiBook() {
  return (
    <g className="mf-book">
      <path d="M-2 38 L16 43 L34 38 L34 62 L16 67 L-2 62 Z" fill={SEAL} {...OUTLINE} />
      <path d="M0.5 40.5 L16 45 L31.5 40.5 L31.5 59.5 L16 64 L0.5 59.5 Z" fill={CREAM} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
      <path d="M16 45 V64 M4 46 l8 2.4 M4 51 l8 2.4 M20 48.4 l8 -2.4 M20 53.4 l8 -2.4" stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
      <path className="mf-page" d="M16 45 L31.5 40.5 L31.5 59.5 L16 64 Z" fill={CREAM} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
    </g>
  );
}

/**
 * A leg hanging from the hip at local (0, 0): skin, a cream knee sock with an accent stripe
 * and a rounded Mary Jane shoe with a strap. The left shoe is mirrored so both toes point out.
 */
export function MochiLeg({ side, x, y }: { side: 'l' | 'r'; x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className={`mf-leg mf-leg-${side}`}>
        <path d="M-8.5 -2 H8.5 V22 H-8.5 Z" fill={SKIN} {...OUTLINE} />
        <path d="M-8.5 20 H8.5 V36 H-8.5 Z" fill={CREAM} {...OUTLINE} />
        <path d="M-8.5 25 H8.5" stroke="var(--accent)" strokeWidth={3} />
        <g transform={side === 'l' ? 'scale(-1 1)' : undefined}>
          <path d="M-10 39 Q-10 32 -1 32 L3 32 Q15 32 15 41.5 Q15 47 6 47 L-4 47 Q-10 47 -10 39 Z" fill={INK} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
          <path d="M-6 35.5 Q1 33.5 6 35.5" fill="none" stroke={CREAM} strokeWidth={1.6} strokeLinecap="round" opacity={0.75} />
          <path d="M-9 44.5 H12" stroke="#5a5560" strokeWidth={1.4} strokeLinecap="round" />
        </g>
      </g>
    </g>
  );
}

/** The fox seal she steals from the header, held in both hands while she eats it. */
export function MochiSnack() {
  return (
    <g className="mf-snack">
      <rect x={88} y={178} width={24} height={24} rx={6} fill={SEAL} stroke={INK} strokeWidth={2} />
      <path d="M92 185 L96 190 L104 190 L108 185 L107 193 L100 199 L93 193 Z" fill="#f4efe4" />
      <circle className="mf-bite mf-bite-1" cx={113} cy={182} r={6.5} fill="var(--paper)" />
      <circle className="mf-bite mf-bite-2" cx={112} cy={195} r={6} fill="var(--paper)" />
    </g>
  );
}

import { ACCENT, CHEEK, INK, SEAL, SKIN } from './palette';

// Extra expressions, drawn on the same head (eyes at x 76 and 124, y about 118; mouth at y about 136).
// Each part is a `.mood` group that styles/mochi.css shows for its data-mood.

/** Half-lidded eye: the lower half of the open eye, cut off by a flat lid that is part of the eye itself. */
function LidEye({ cx }: { cx: number }) {
  return (
    <g>
      <path d={`M${cx - 12} 116 Q${cx} 114 ${cx + 12} 116 A12 10 0 0 1 ${cx - 12} 116 Z`} fill={INK} stroke={INK} strokeWidth={2.5} strokeLinejoin="round" />
      <circle cx={cx + 3} cy={121} r={4.5} style={ACCENT} />
      <circle cx={cx - 2} cy={119} r={1.8} fill="#fff" />
    </g>
  );
}

export function MochiMoods() {
  return (
    <>
      {/* Smug: heavy lids, one pair of relaxed brows (the right a touch higher) and a sideways smirk. */}
      <g className="mood m-lid"><LidEye cx={76} /><LidEye cx={124} /></g>
      <g className="mood m-brow-smug" fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round"><path d="M65 104 Q76 100 87 103" /><path d="M113 102 Q125 96 136 100" /></g>
      <path className="mood m-smirk" d="M92 137 Q103 141 111 131" fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" />

      {/* Angry: brows slammed down, a frown and the manga anger mark. */}
      <g className="mood m-brow-down" stroke={INK} strokeWidth={5} strokeLinecap="round"><path d="M62 98 L89 108" /><path d="M138 98 L111 108" /></g>
      <path className="mood m-frown" d="M91 141 Q100 132 109 141" fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" />
      <g className="mood m-vein" fill="none" stroke={SEAL} strokeWidth={3.4} strokeLinecap="round">
        <path d="M148 62 q5 0 5 -5" /><path d="M160 57 q0 5 5 5" /><path d="M165 70 q-5 0 -5 5" /><path d="M153 75 q0 -5 -5 -5" />
      </g>

      {/* Pout: eyes squeezed into lines, puffed cheeks and pursed lips. */}
      <g className="mood m-eflat" stroke={INK} strokeWidth={4} strokeLinecap="round"><path d="M65 114 L87 119" /><path d="M135 114 L113 119" /></g>
      <path className="mood m-purse" d="M97 131 q7 3 0 6 q7 3 0 6" fill="none" stroke={INK} strokeWidth={2.8} strokeLinecap="round" strokeLinejoin="round" />
      <g className="mood m-puff" fill={SKIN} stroke={INK} strokeWidth={2.5}><path d="M45 126 q-8 12 6 20" /><path d="M155 126 q8 12 -6 20" /></g>

      {/* Flustered: >< eyes, a wobbly mouth, a sweat drop. */}
      <g className="mood m-squeeze" fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round"><path d="M66 109 L85 118 L66 127" /><path d="M134 109 L115 118 L134 127" /></g>
      <path className="mood m-wobble" d="M86 138 q3.5 -4 7 0 q3.5 4 7 0 q3.5 -4 7 0 q3.5 4 7 0" fill="none" stroke={INK} strokeWidth={2.6} strokeLinecap="round" />
      <path className="mood m-sweat" d="M163 78 q-8 12 0 16 q8 -4 0 -16 z" style={ACCENT} stroke={INK} strokeWidth={2} />

      {/* Stronger blush, shared by pout and flustered. */}
      <g className="mood m-flush" fill={CHEEK} opacity={0.55}><ellipse cx={58} cy={133} rx={12} ry={6} /><ellipse cx={142} cy={133} rx={12} ry={6} /></g>
    </>
  );
}

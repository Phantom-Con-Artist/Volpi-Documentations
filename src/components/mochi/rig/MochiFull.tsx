import { forwardRef } from 'react';
import type { MochiMood, MochiPose } from '@/types/mochi';
import { MochiHead, MochiTail } from './MochiHead';
import { MochiArm, MochiBook, MochiLeg, MochiSnack } from './MochiLimbs';
import { ACCENT, HAIR, INK, OUTLINE } from './palette';

interface Props {
  pose?: MochiPose;
  mood?: MochiMood;
  moving?: boolean;
  carry?: string | null;
  className?: string;
}

/**
 * Full-body chibi Mochi, about two heads tall, in a 210 × 320 box.
 * Each limb hangs from an exact pivot (an outer translate); the inner group is what CSS rotates
 * (styles/mochi-rig.css), so rotations always turn around the shoulder or hip.
 */
export const MochiFull = forwardRef<SVGSVGElement, Props>(function MochiFull(
  { pose = 'idle', mood = 'smile', moving = false, carry = null, className = '' },
  ref,
) {
  return (
    <svg ref={ref} className={`mm-mochi mf ${className}`} viewBox="0 0 210 320" data-pose={pose} data-mood={mood} data-moving={moving} aria-hidden="true">
      <MochiTail d="M136 234 C170 228 182 198 166 180 C156 168 168 152 182 160" tip={[182, 160]} />
      <MochiLeg side="l" x={90} y={254} />
      <MochiLeg side="r" x={120} y={254} />

      <g className="mf-skirt">
        <path d="M64 222 L136 222 L150 262 L50 262 Z" fill={HAIR} {...OUTLINE} />
        <path d="M82 224 L76 260 M100 224 V260 M118 224 L124 260" stroke="#fffcf5" strokeWidth={1.4} opacity={0.35} />
      </g>

      <g className="mf-upper">
        <path d="M76 152 Q100 162 124 152 L140 230 Q100 240 60 230 Z" style={ACCENT} {...OUTLINE} />
        <path d="M88 154 L100 182 L112 154 Z" fill="#fffcf5" stroke={INK} strokeWidth={2.4} strokeLinejoin="round" />
        <path d="M100 182 V234" stroke={INK} strokeWidth={2.2} />
        <g stroke={INK} strokeWidth={2} strokeLinejoin="round">
          <path d="M100 176 L89 170 L89 183 Z M100 176 L111 170 L111 183 Z" fill="#c0383e" />
          <circle cx={100} cy={176} r={3.4} fill="#c0383e" />
          <circle cx={106} cy={200} r={3.4} fill="#fffcf5" />
          <circle cx={106} cy={216} r={3.4} fill="#fffcf5" />
        </g>
        <MochiHead />
        <MochiArm side="r" x={120} y={164}>
          {carry && <text className="mf-carry" x={0} y={84} textAnchor="middle" dominantBaseline="central" fontSize={58} fontWeight={600} fontFamily='"Zen Old Mincho", serif' fill="var(--ink)">{carry}</text>}
        </MochiArm>
        <MochiArm side="l" x={80} y={164}>
          <MochiBook />
        </MochiArm>
        <MochiSnack />
      </g>
    </svg>
  );
});

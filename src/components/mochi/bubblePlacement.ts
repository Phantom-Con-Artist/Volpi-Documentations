import type { ActorState } from '@/types/mochi';
import type { TailSide } from './MochiBubble';

const GAP = 16;
const EDGE = 10;
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/** Her head (top centre of the face) in viewport px, allowing for scale and rotation. */
export function headAnchor(a: ActorState, w: number, h: number) {
  const s = a.scale;
  const cx = a.x + (w * s) / 2;
  const cy = a.y + (h * s) / 2;
  const ox = -0.02 * w * s;
  const oy = -0.4 * h * s;
  const r = (a.rotate * Math.PI) / 180;
  return { x: cx + ox * Math.cos(r) - oy * Math.sin(r), y: cy + ox * Math.sin(r) + oy * Math.cos(r) };
}

export interface Placement { left: number; top: number; tail: TailSide; at: number }

/**
 * Where a bubble of size bw × bh goes: above her head if it fits, else beside her (whichever side
 * has room), else below her feet. Always clamped inside the viewport, with the tail aimed at her head.
 */
export function placeBubble(a: ActorState, w: number, h: number, bw: number, bh: number, prefer?: 'below'): Placement {
  const head = headAnchor(a, w, h);
  const vw = innerWidth;
  const vh = innerHeight;
  const bodyLeft = a.x;
  const bodyRight = a.x + w * a.scale;
  const bodyBottom = a.y + h * a.scale;

  const above = (): Placement | null => {
    const top = head.y - bh - GAP;
    if (top < EDGE) return null;
    const left = clamp(head.x - bw / 2, EDGE, vw - bw - EDGE);
    return { left, top, tail: 'bottom', at: clamp(head.x - left, 20, bw - 20) };
  };
  const below = (): Placement | null => {
    const top = bodyBottom + GAP;
    if (top + bh > vh - EDGE) return null;
    const left = clamp(head.x - bw / 2, EDGE, vw - bw - EDGE);
    return { left, top, tail: 'top', at: clamp(head.x - left, 20, bw - 20) };
  };
  const beside = (): Placement => {
    const top = clamp(head.y - 10, EDGE, vh - bh - EDGE);
    const at = clamp(head.y + 18 - top, 16, bh - 16);
    if (vw - bodyRight - EDGE > bw + GAP || bodyLeft < bw + GAP) {
      return { left: clamp(bodyRight + GAP, EDGE, vw - bw - EDGE), top, tail: 'left', at };
    }
    return { left: clamp(bodyLeft - bw - GAP, EDGE, vw - bw - EDGE), top, tail: 'right', at };
  };

  if (prefer === 'below') return below() ?? beside();
  return above() ?? beside();
}

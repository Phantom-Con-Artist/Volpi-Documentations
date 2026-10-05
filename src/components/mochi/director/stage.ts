import type { ActorState, BubbleKind, MochiMood, MochiPose } from '@/types/mochi';

/** The roaming Mochi's box (scale 1). Smaller on phones. */
export function actorSize() {
  const w = innerWidth < 640 ? 88 : 120;
  return { w, h: Math.round((w * 320) / 210) };
}

/** Where she waits when the hero is off screen: peeking up from the bottom-right corner. */
export function cornerSpot() {
  const { w, h } = actorSize();
  return { x: innerWidth - w * 0.8 - 18, y: innerHeight - h * 0.48 };
}

export const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/** A random on-screen element matching the selector, clear of the header. */
export function visibleTarget(selector: string): Element | null {
  const all = [...document.querySelectorAll(selector)].filter((el) => {
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.top > 90 && r.bottom < innerHeight - 30;
  });
  return all.length ? all[Math.floor(Math.random() * all.length)] : null;
}

/** Last known pointer position, and whether this device has a fine pointer. */
export const pointer = { x: innerWidth / 2, y: innerHeight / 2, fine: matchMedia('(pointer: fine)').matches };
addEventListener('pointermove', (e) => { pointer.x = e.clientX; pointer.y = e.clientY; }, { passive: true });

export interface MoveOptions { speed?: number; ms?: number; run?: boolean; pose?: MochiPose }

/** Everything an antic can do. Every wait rejects when the antic is cancelled. */
export interface Stage {
  signal: AbortSignal;
  size: { w: number; h: number };
  heroVisible: () => boolean;
  set: (patch: Partial<ActorState>) => void;
  pos: () => { x: number; y: number; on: boolean; flip: boolean };
  wait: (ms: number) => Promise<void>;
  place: (x: number, y: number, extra?: Partial<ActorState>) => Promise<void>;
  moveTo: (x: number, y: number, opts?: MoveOptions) => Promise<void>;
  say: (kind: BubbleKind, text: string, ms?: number, mood?: MochiMood, at?: 'below') => Promise<void>;
  enter: (nearX: number, nearY: number) => Promise<void>;
  cleanup: (fn: () => void) => void;
}

export type Antic = (stage: Stage) => Promise<void>;

interface Deps {
  signal: AbortSignal;
  setActor: (fn: (a: ActorState) => ActorState) => void;
  posRef: { current: { x: number; y: number; on: boolean; flip: boolean } };
  heroVisible: () => boolean;
  leaveHero: () => void;
  cleanups: (() => void)[];
}

export function makeStage({ signal, setActor, posRef, heroVisible, leaveHero, cleanups }: Deps): Stage {
  const size = actorSize();
  const set = (patch: Partial<ActorState>) => {
    if (patch.on !== undefined) posRef.current = { ...posRef.current, on: patch.on };
    setActor((a) => ({ ...a, ...patch }));
  };
  const wait = (ms: number) =>
    new Promise<void>((resolve, reject) => {
      if (signal.aborted) return reject(signal.reason);
      const t = setTimeout(resolve, ms);
      signal.addEventListener('abort', () => { clearTimeout(t); reject(signal.reason); }, { once: true });
    });

  const place = async (x: number, y: number, extra: Partial<ActorState> = {}) => {
    set({ x, y, moveMs: 0, on: true, ...extra });
    posRef.current = { ...posRef.current, x, y, on: true };
    await wait(60);
  };

  const moveTo = async (x: number, y: number, { speed = 560, ms, run = true, pose }: MoveOptions = {}) => {
    const from = posRef.current;
    const dur = ms ?? clamp((Math.hypot(x - from.x, y - from.y) / speed) * 1000, 200, 2400);
    const flip = x < from.x - 2 ? true : x > from.x + 2 ? false : from.flip;
    set({ x, y, moveMs: dur, moving: run, flip, ...(pose ? { pose } : {}) });
    posRef.current = { ...from, x, y, flip };
    await wait(dur);
    set({ moving: false });
  };

  const say = async (kind: BubbleKind, text: string, ms = 2400, mood?: MochiMood, at?: 'below') => {
    set({ bubble: { kind, text, at }, ...(mood ? { mood } : {}) });
    await wait(ms);
    set({ bubble: null });
  };

  const enter = async (nearX: number, nearY: number) => {
    if (posRef.current.on) { set({ scale: 1, rotate: 0, bubble: null }); return; }
    if (heroVisible()) { leaveHero(); await wait(320); }
    const x = nearX < innerWidth / 2 ? -size.w - 30 : innerWidth + 30;
    await place(x, clamp(nearY - size.h / 2, 0, innerHeight - size.h), { rotate: 0, scale: 1, pose: 'idle', mood: 'happy' });
  };

  return {
    signal, size, heroVisible, set, wait, place, moveTo, say, enter,
    pos: () => posRef.current,
    cleanup: (fn) => cleanups.push(fn),
  };
}

import { ANTIC_LINES, POINT_TARGETS } from '@/content/mochi.content';
import { clamp, visibleTarget, type Antic } from './stage';
import { pick, statusLine } from './status';

/** Peeks in sideways from a screen edge, whispers, and slides away. */
export const peekEdge: Antic = async (s) => {
  const { w, h } = s.size;
  if (s.pos().on) await s.moveTo(innerWidth + 40, s.pos().y, { speed: 800 });
  const edge = pick(['left', 'right', 'bottom'] as const);
  const y = innerHeight * (0.3 + Math.random() * 0.35);
  const x = innerWidth * (0.2 + Math.random() * 0.6);
  const spots = {
    left: { hidden: [-w - 60, y], shown: [-w * 0.55, y], rotate: 90 },
    right: { hidden: [innerWidth + 60, y], shown: [innerWidth - w * 0.45, y], rotate: -90 },
    bottom: { hidden: [x, innerHeight + 20], shown: [x, innerHeight - h * 0.42], rotate: 0 },
  }[edge];
  await s.enter(spots.hidden[0], spots.hidden[1]);
  await s.place(spots.hidden[0], spots.hidden[1], { rotate: spots.rotate, scale: 1, pose: 'idle', mood: 'smile' });
  await s.moveTo(spots.shown[0], spots.shown[1], { ms: 900, run: false });
  const line = Math.random() < 0.5 ? pick(ANTIC_LINES.peek) : `psst… ${statusLine().text.toLowerCase()}`;
  await s.say('whisper', line, 3200);
  await s.moveTo(spots.hidden[0], spots.hidden[1], { ms: 600, run: false });
  s.set({ rotate: 0, on: false });
};

/** Points at something pointless and comments on it. */
export const pointAtStuff: Antic = async (s) => {
  const { w, h } = s.size;
  const options = [...POINT_TARGETS].sort(() => Math.random() - 0.5);
  let found: { el: Element; lines: string[] } | null = null;
  for (const o of options) {
    const el = visibleTarget(o.selector);
    if (el) { found = { el, lines: o.lines }; break; }
  }
  if (!found) return;
  const r = found.el.getBoundingClientRect();
  const leftSide = r.left > w + 30;
  const x = leftSide ? r.left - w * 0.85 : Math.min(r.right - w * 0.15, innerWidth - w);
  const y = clamp(r.top + r.height / 2 - h * 0.52, 70, innerHeight - h * 0.9);
  await s.enter(x, y);
  await s.moveTo(x, y);
  s.set({ flip: !leftSide, pose: 'point', mood: 'happy' });
  await s.say(Math.random() < 0.4 ? 'shout' : 'speech', pick(found.lines), 3000);
  s.set({ pose: 'idle' });
  await s.moveTo(x < innerWidth / 2 ? -w - 40 : innerWidth + 40, y);
};

/** Drops onto the header line, swings her legs and hums, then shares a status line. */
export const sitOnHeader: Antic = async (s) => {
  const header = document.querySelector('header');
  if (!header) return;
  const { w, h } = s.size;
  const scale = innerWidth < 640 ? 0.5 : 0.62;
  const bottom = header.getBoundingClientRect().bottom;
  // The skirt hem is at 262 / 320 of her height: put it exactly on the header line.
  const seat = bottom - h * scale * (262 / 320);
  const x = clamp(260 + Math.random() * Math.max(40, innerWidth / 2 - 520), 200, innerWidth - w);
  if (s.pos().on) await s.moveTo(innerWidth + 40, s.pos().y, { speed: 800 });
  await s.enter(x, 0);
  await s.place(x, -h, { scale, rotate: 0, pose: 'idle', mood: 'wow' });
  await s.moveTo(x, seat, { ms: 520, run: false });
  s.set({ pose: 'sit', mood: 'happy' });
  await s.say('song', pick(ANTIC_LINES.sit), 4200, undefined, 'below');
  const status = statusLine();
  await s.say('speech', status.text, 3400, status.mood, 'below');
  await s.moveTo(x, -h - 20, { ms: 420, run: false });
  s.set({ on: false, scale: 1, pose: 'idle' });
};

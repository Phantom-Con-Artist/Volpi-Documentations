import { ANTIC_LINES } from '@/content/mochi.content';
import { clamp, pointer, visibleTarget, type Antic } from './stage';
import { pick } from './status';

const exitX = (x: number, w: number) => (x < innerWidth / 2 ? -w - 40 : innerWidth + 40);

/** Snatches the fox seal from the header, eats it in plain view, then puts it back. Mostly. */
export const eatLogo: Antic = async (s) => {
  const logo = document.querySelector('[data-mochi-target="logo"]');
  const header = document.querySelector('header');
  if (!logo || !header) return;
  const r = logo.getBoundingClientRect();
  const below = header.getBoundingClientRect().bottom + 6;
  const { w } = s.size;
  const spot = { x: clamp(r.left + r.width / 2 - w * 0.5, 4, innerWidth - w), y: below };
  const putBack = () => {
    if (!logo.classList.contains('is-taken')) return;
    logo.classList.remove('is-taken');
    logo.classList.add('is-restored');
    setTimeout(() => logo.classList.remove('is-restored'), 600);
  };
  s.cleanup(putBack);
  await s.enter(spot.x, spot.y);
  await s.moveTo(spot.x, spot.y);
  s.set({ flip: false, pose: 'wave', mood: 'wow' });
  await s.say('shout', pick(ANTIC_LINES.eat.start), 1100);
  logo.classList.add('is-taken');
  s.set({ pose: 'eat', mood: 'happy' });
  await s.say('thought', pick(ANTIC_LINES.eat.taste), 2700);
  s.set({ pose: 'wave', mood: 'smile' });
  await s.wait(350);
  putBack();
  s.set({ pose: 'idle' });
  await s.say('speech', pick(ANTIC_LINES.eat.after), 1900);
  await s.moveTo(-w - 40, spot.y);
};

/** Steals the first letter of a big heading, hides at the edge, then gives it back. */
export const stealHeading: Antic = async (s) => {
  const heading = visibleTarget('h1 .slash, h2 .slash');
  const letter = heading?.textContent?.trim()[0];
  if (!heading || !letter) return;
  const r = heading.getBoundingClientRect();
  const { w, h } = s.size;
  const spot = { x: clamp(r.left - w * 0.55, 4, innerWidth - w), y: clamp(r.top + r.height / 2 - h * 0.5, 80, innerHeight - h) };
  s.cleanup(() => heading.classList.remove('is-robbed'));
  await s.enter(r.left, r.top);
  await s.moveTo(spot.x, spot.y);
  heading.classList.add('is-robbed');
  s.set({ pose: 'carry', carry: letter, mood: 'happy' });
  await s.say('shout', pick(ANTIC_LINES.steal.grab), 1200);
  const hideX = r.left < innerWidth / 2 ? innerWidth - w * 0.45 : -w * 0.55;
  await s.moveTo(hideX, spot.y, { speed: 760 });
  await s.say('whisper', pick(ANTIC_LINES.steal.hide), 2600, 'smile');
  await s.wait(1200);
  await s.moveTo(spot.x, spot.y);
  heading.classList.remove('is-robbed');
  s.set({ pose: 'idle', carry: null });
  await s.say('speech', pick(ANTIC_LINES.steal.give), 1900, 'smile');
  await s.moveTo(exitX(spot.x, w), spot.y);
};

/** Chases the mouse pointer for a few seconds. Desktop only. */
export const followPointer: Antic = async (s) => {
  if (!pointer.fine) return;
  const { w, h } = s.size;
  await s.enter(pointer.x, pointer.y);
  s.set({ bubble: { kind: 'shout', text: pick(ANTIC_LINES.follow.start) }, mood: 'wow' });
  const until = performance.now() + 6000;
  let { x, y } = s.pos();
  await new Promise<void>((resolve, reject) => {
    const tick = () => {
      if (s.signal.aborted) return reject(s.signal.reason);
      const tx = clamp(pointer.x - w * 0.5, -w * 0.3, innerWidth - w * 0.7);
      const ty = clamp(pointer.y - h * 0.35, 60, innerHeight - h * 0.6);
      const dx = tx - x;
      x += dx * 0.07;
      y += (ty - y) * 0.07;
      s.set({ x, y, moveMs: 0, moving: Math.abs(dx) > 2, flip: dx < 0, ...(performance.now() > until - 4500 ? { bubble: null } : {}) });
      if (performance.now() > until || Math.hypot(tx - x, ty - y) < 18) return resolve();
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
  s.set({ moving: false });
  await s.place(x, y);
  await s.say('speech', pick(ANTIC_LINES.follow.end), 2000, 'happy');
  await s.moveTo(exitX(x, w), y);
};

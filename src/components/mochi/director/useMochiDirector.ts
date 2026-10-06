import { useCallback, useEffect, useRef, useState } from 'react';
import type { ActorState, BubbleKind, HeroState, MochiLine } from '@/types/mochi';
import { HERO_POKES, MOCHI_LINES, ANTIC_LINES, REACTIONS } from '@/content/mochi.content';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { readJSON, writeJSON } from '@/hooks/storage';
import { cornerSpot, makeStage, type Antic } from './stage';
import { anticNamed, firstDelay, nextAntic, nextDelay } from './schedule';
import { eatLogo } from './mischief';
import { pick, statusLine } from './status';
import { useMochiReactions } from './useMochiReactions';

const KEY = 'volpi.site.mochi';
const IDLE: ActorState = { on: false, x: 0, y: 0, rotate: 0, scale: 1, flip: false, pose: 'idle', mood: 'smile', moving: false, moveMs: 0, bubble: null, carry: null };
const SPAM = { count: 5, windowMs: 4000 };

/**
 * Runs Mochi: where she rests, what she says, and which antic she gets up to next.
 * With `roaming` off (the About page, where she has her own film) she stays put: no antics, no corner lines.
 */
export function useMochiDirector(roaming = true) {
  const reduced = useReducedMotion();
  const section = useActiveSection();
  const [hiddenPref, setHiddenState] = useState(() => readJSON(KEY, { hidden: false }).hidden);
  // Below, `hidden` means "keep the roaming Mochi away": switched off by the visitor, or not roaming on this page.
  const hidden = hiddenPref || !roaming;
  const [actor, setActor] = useState<ActorState>(IDLE);
  const [hero, setHero] = useState<HeroState>({ away: false, pose: 'idle', mood: 'smile', bubble: null });
  const posRef = useRef({ x: 0, y: 0, on: false, flip: false });
  const heroIo = useRef<IntersectionObserver | null>(null);
  const heroVisible = useRef(false);
  const running = useRef<AbortController | null>(null);
  const token = useRef(0);
  const pokes = useRef({ next: 0, times: [] as number[] });

  /** Back to the hero slot (if on screen) or the corner. */
  const goHome = useCallback(() => {
    if (running.current) return;
    if (heroVisible.current || hidden) {
      setActor((a) => ({ ...a, on: false, bubble: null, carry: null, moving: false }));
      posRef.current.on = false;
      setHero((h) => ({ ...h, away: false }));
      return;
    }
    const { x, y } = cornerSpot();
    const wasOn = posRef.current.on;
    setActor((a) => ({ ...a, on: true, x, y, rotate: 0, scale: 0.85, flip: false, pose: 'idle', mood: 'smile', moving: false, moveMs: wasOn ? 600 : 0, carry: null }));
    posRef.current = { x, y, on: true, flip: false };
  }, [hidden]);

  /**
   * Shows a line where she is resting for `ms`. Each line gets a token, so a late timer never clears
   * a newer line. Returns false when she is busy with an antic.
   */
  const speak = useCallback((line: MochiLine, kind: BubbleKind, ms: number, extra: Partial<HeroState> = {}) => {
    if (running.current || hidden) return false;
    const id = ++token.current;
    const bubble = { kind, text: line.text };
    if (heroVisible.current) {
      setHero((h) => ({ ...h, ...extra, mood: line.mood, bubble }));
      setTimeout(() => id === token.current && setHero((h) => ({ ...h, pose: 'idle', mood: 'smile', bubble: null })), ms);
    } else if (posRef.current.on) {
      setActor((a) => ({ ...a, mood: line.mood, bubble }));
      setTimeout(() => id === token.current && !running.current && setActor((a) => ({ ...a, mood: 'smile', bubble: null })), ms);
    } else return false;
    return true;
  }, [hidden]);

  const doze = useCallback((on: boolean) => {
    if (running.current || hidden) return;
    token.current++;
    const patch = on ? { mood: 'sleep' as const, bubble: { kind: 'thought' as const, text: REACTIONS.sleep } } : { mood: 'smile' as const, bubble: null };
    if (heroVisible.current) setHero((h) => ({ ...h, ...patch }));
    else setActor((a) => ({ ...a, ...patch }));
  }, [hidden]);

  const run = useCallback(async (antic: Antic) => {
    const ac = new AbortController();
    running.current = ac;
    token.current++;
    setHero((h) => ({ ...h, bubble: null, pose: 'idle' }));
    const cleanups: (() => void)[] = [];
    const stage = makeStage({
      signal: ac.signal, setActor, posRef, cleanups,
      heroVisible: () => heroVisible.current,
      leaveHero: () => setHero((h) => ({ ...h, away: true, bubble: null })),
    });
    try {
      await antic(stage);
    } catch { /* Cancelled by a poke or hide. */ }
    cleanups.forEach((fn) => fn());
    if (ac.signal.reason === 'poke') {
      setActor((a) => ({ ...a, pose: 'idle', carry: null, rotate: 0, scale: 1, moving: false, mood: 'wow', bubble: { kind: 'shout', text: pick(ANTIC_LINES.poked) } }));
      await new Promise((r) => setTimeout(r, 1100));
    }
    running.current = null;
    setActor((a) => ({ ...a, bubble: null, carry: null, pose: 'idle', rotate: 0, scale: 1, moving: false }));
    goHome();
  }, [goHome]);

  // Scheduler: random antics while allowed. ?mochi=<name> runs one straight away.
  useEffect(() => {
    if (hidden || reduced) return;
    let t: number;
    const demo = anticNamed(new URLSearchParams(location.search).get('mochi'));
    const loop = (delay: number, forced?: Antic) => {
      t = window.setTimeout(async () => {
        if (!document.hidden && !running.current) await run(forced ?? nextAntic());
        loop(nextDelay());
      }, delay);
    };
    loop(demo ? 1500 : firstDelay(), demo);
    return () => { clearTimeout(t); running.current?.abort('hide'); };
  }, [hidden, reduced, run]);

  // A line for each section as it scrolls in (at the corner), and live status from the hero.
  useEffect(() => {
    const line = section ? MOCHI_LINES[section] : undefined;
    if (line && !heroVisible.current) speak(line, line.mood === 'wow' ? 'thought' : 'speech', 6000);
  }, [section, speak]);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!heroVisible.current) return;
      const s = statusLine();
      speak(s, s.mood === 'sleep' ? 'thought' : 'speech', 5000);
    }, 34000);
    return () => clearInterval(id);
  }, [speak]);

  useMochiReactions({ enabled: !hidden && !reduced, speak, doze });

  useEffect(() => {
    addEventListener('resize', goHome);
    goHome();
    return () => removeEventListener('resize', goHome);
  }, [goHome]);

  const registerHero = useCallback((el: Element | null) => {
    heroIo.current?.disconnect();
    if (!el) { heroVisible.current = false; return; }
    heroIo.current = new IntersectionObserver(([e]) => { heroVisible.current = e.isIntersecting; goHome(); }, { threshold: 0.2 });
    heroIo.current.observe(el);
  }, [goHome]);

  /** Clicking the roaming Mochi interrupts an antic, or gives a status line at the corner. */
  const poke = useCallback(() => {
    if (running.current) return running.current.abort('poke');
    speak(statusLine(), 'speech', 4500);
  }, [speak]);

  /** Clicking the hero Mochi: a line each time. Poke her five times in four seconds and she retaliates. */
  const pokeHero = useCallback(() => {
    const now = Date.now();
    const p = pokes.current;
    p.times = [...p.times.filter((t) => now - t < SPAM.windowMs), now];
    if (p.times.length >= SPAM.count && !running.current) {
      p.times = [];
      speak({ text: pick(REACTIONS.spam), mood: 'wow' }, 'shout', 1000, { pose: 'idle' });
      setTimeout(() => !running.current && run(eatLogo), 1000);
      return;
    }
    const line = HERO_POKES[p.next++ % HERO_POKES.length];
    speak(line, line.mood === 'wow' ? 'shout' : 'speech', 3800, { pose: 'wave' });
  }, [speak, run]);

  const setHidden = useCallback((value: boolean) => {
    setHiddenState(value);
    writeJSON(KEY, { hidden: value });
    if (value) { running.current?.abort('hide'); setActor(IDLE); posRef.current.on = false; }
  }, []);

  return { actor, hero, hidden: hiddenPref, setHidden, registerHero, poke, pokeHero };
}

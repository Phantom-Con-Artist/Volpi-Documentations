import { useEffect, useRef } from 'react';
import type { BubbleKind, MochiLine, MochiMood } from '@/types/mochi';
import { REACTIONS } from '@/content/mochi.content';
import { ACCENTS } from '@/content/theme.content';
import { pick } from './status';

const IDLE_MS = 60000;

interface Api {
  enabled: boolean;
  /** Says a line wherever she is resting (hero or corner). Returns false if she is busy. */
  speak: (line: MochiLine, kind: BubbleKind, ms: number) => boolean;
  /** Keeps a mood and bubble until the next activity (used for napping). */
  doze: (on: boolean) => void;
}

/** Mochi notices the visitor: theme and ink changes, copying text, and long idle spells. */
export function useMochiReactions({ enabled, speak, doze }: Api): void {
  const sleeping = useRef(false);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    let mode = root.dataset.mode;
    let accent = root.dataset.accent;
    const say = (text: string, mood: MochiMood, kind: BubbleKind = 'speech') => speak({ text, mood }, kind, 3200);

    const observer = new MutationObserver(() => {
      if (root.dataset.mode !== mode) {
        mode = root.dataset.mode;
        say(pick(mode === 'night' ? REACTIONS.night : REACTIONS.day), mode === 'night' ? 'happy' : 'wow', mode === 'night' ? 'speech' : 'shout');
      } else if (root.dataset.accent !== accent) {
        accent = root.dataset.accent;
        const ink = ACCENTS.find((a) => a.id === accent)?.label ?? 'That ink';
        say(pick(REACTIONS.accent(ink)), 'happy');
      }
    });
    observer.observe(root, { attributes: true, attributeFilter: ['data-mode', 'data-accent'] });

    const onCopy = () => say(pick(REACTIONS.copy), 'smile', 'whisper');
    document.addEventListener('copy', onCopy);

    let idle = window.setTimeout(nap, IDLE_MS);
    function nap() { sleeping.current = true; doze(true); }
    const onActivity = () => {
      clearTimeout(idle);
      idle = window.setTimeout(nap, IDLE_MS);
      if (!sleeping.current) return;
      sleeping.current = false;
      doze(false);
      say(pick(REACTIONS.wake), 'wow', 'shout');
    };
    const events = ['pointermove', 'keydown', 'scroll', 'touchstart'] as const;
    events.forEach((e) => addEventListener(e, onActivity, { passive: true }));

    return () => {
      observer.disconnect();
      document.removeEventListener('copy', onCopy);
      clearTimeout(idle);
      events.forEach((e) => removeEventListener(e, onActivity));
    };
  }, [enabled, speak, doze]);
}

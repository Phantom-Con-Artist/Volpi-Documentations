import { useLayoutEffect, useRef, useState } from 'react';
import type { ActorState } from '@/types/mochi';
import { MochiBubble } from './MochiBubble';
import { placeBubble } from './bubblePlacement';

/**
 * The roaming Mochi's bubble, in its own fixed layer so it never scales, rotates or leaves the screen.
 * It is measured first (invisible), then placed. It glides with her when she moves.
 */
export function MochiBubbleLayer({ actor, w, h }: { actor: ActorState; w: number; h: number }) {
  const ref = useRef<HTMLDivElement>(null);
  // The text that has already been shown in place. Only that bubble may glide; a new one appears in place.
  const shown = useRef<string | null>(null);
  const [size, setSize] = useState<{ text: string; bw: number; bh: number } | null>(null);
  const bubble = actor.bubble;

  useLayoutEffect(() => {
    if (!bubble || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setSize({ text: bubble.text, bw: r.width, bh: r.height });
  }, [bubble]);

  // After a bubble has been placed once, remember it; it may glide from then on.
  useLayoutEffect(() => {
    shown.current = bubble && size?.text === bubble.text ? bubble.text : null;
  });

  if (!bubble) return null;
  const measured = size?.text === bubble.text ? size : null;
  const glide = measured !== null && shown.current === bubble.text && actor.moving && actor.moveMs > 0;
  const place = measured ? placeBubble(actor, w, h, measured.bw, measured.bh, bubble.at) : { left: 0, top: 0, tail: 'bottom' as const, at: 28 };

  return (
    <div
      ref={ref}
      className="mochi-roamer pointer-events-none fixed left-0 top-0 z-[60]"
      style={{
        visibility: measured ? 'visible' : 'hidden',
        transform: `translate3d(${place.left}px, ${place.top}px, 0)`,
        transition: glide ? `transform ${actor.moveMs}ms linear` : 'none',
      }}
    >
      <MochiBubble key={bubble.text} bubble={bubble} tail={place.tail} at={place.at} />
    </div>
  );
}

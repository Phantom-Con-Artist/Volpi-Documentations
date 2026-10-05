import type { CSSProperties } from 'react';
import type { Bubble } from '@/types/mochi';

export type TailSide = 'bottom' | 'top' | 'left' | 'right';

interface Props {
  bubble: Bubble;
  tail?: TailSide;
  /** Where along that side the tail sits, in px from the bubble's left (bottom/top) or top (left/right). */
  at?: number | string;
  className?: string;
  style?: CSSProperties;
}

/** Long yells read badly inside the jagged burst, so they fall back to a normal bubble. */
const SHOUT_MAX = 26;

/** One of Mochi's dialogue boxes (styles/bubbles.css). */
export function MochiBubble({ bubble, tail = 'bottom', at = 28, className = '', style }: Props) {
  const kind = bubble.kind === 'shout' && bubble.text.length > SHOUT_MAX ? 'speech' : bubble.kind;
  return (
    <div
      role="status"
      data-tail={tail}
      className={`mb mb-${kind} ${className}`}
      style={{ ...style, ['--at' as string]: typeof at === 'number' ? `${at}px` : at }}
    >
      {kind === 'song' && <span className="mb-notes" aria-hidden="true"><span>♪</span><span>♫</span></span>}
      {bubble.text}
    </div>
  );
}

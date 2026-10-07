import { useRef } from 'react';
import type { ActorState } from '@/types/mochi';
import { MochiFull } from './rig/MochiFull';
import { MochiBubbleLayer } from './MochiBubbleLayer';
import { actorSize } from './director/stage';
import { usePointerGaze } from '@/hooks/usePointerGaze';

/** The roaming Mochi: a fixed layer above the page, moved with transforms only. */
export function MochiActor({ actor, onPoke }: { actor: ActorState; onPoke: () => void }) {
  const svgRef = useRef<SVGSVGElement>(null);
  usePointerGaze(svgRef, actor.on);
  if (!actor.on) return null;
  const { w, h } = actorSize();

  return (
    <>
      <div
        className="mochi-roamer pointer-events-none fixed left-0 top-0 z-50"
        style={{
          width: w,
          height: h,
          transform: `translate3d(${actor.x}px, ${actor.y}px, 0) scale(${actor.scale})`,
          transformOrigin: '0 0',
          transition: actor.moveMs ? `transform ${actor.moveMs}ms ${actor.moving ? 'linear' : 'cubic-bezier(.3,1.3,.5,1)'}` : 'none',
        }}
      >
        <button
          type="button"
          onClick={onPoke}
          aria-label="Mochi. Click to interrupt her."
          className={`mf-stage pointer-events-auto block h-full w-full cursor-pointer border-0 bg-transparent p-0 ${actor.flip ? 'is-flipped' : ''}`}
          style={{ transform: `rotate(${actor.rotate}deg) scaleX(${actor.flip ? -1 : 1})`, transition: 'transform .2s ease' }}
        >
          <MochiFull ref={svgRef} pose={actor.pose} mood={actor.mood} moving={actor.moving} carry={actor.carry} className="h-full w-full" />
        </button>
      </div>
      <MochiBubbleLayer actor={actor} w={w} h={h} />
    </>
  );
}

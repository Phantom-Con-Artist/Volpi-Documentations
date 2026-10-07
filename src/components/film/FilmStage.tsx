import { useEffect, useState, type CSSProperties } from 'react';
import type { FilmBubbleSide, FilmScene, FilmSets } from '@/types/film';
import type { TailSide } from '@/components/mochi/MochiBubble';
import { MochiFull } from '@/components/mochi/rig/MochiFull';
import { MochiBubble } from '@/components/mochi/MochiBubble';
const STAGE_W = 960;
const STAGE_H = 540;
const MOCHI_W = 190;
const MOCHI_H = 290;
const BUBBLE_W = 330;
const WALK_MS = 900;

/** Anchors the bubble to Mochi's head, so its tail always points at her. */
function placeBubble(x: number, y: number, side?: FilmBubbleSide): { style: CSSProperties; tail: TailSide; at: number } {
  const headX = x + MOCHI_W / 2;
  const top = y - MOCHI_H;
  const chosen = side ?? (headX < STAGE_W / 2 ? 'right' : 'left');
  if (chosen === 'above') {
    const left = Math.min(Math.max(headX - BUBBLE_W / 2, 12), STAGE_W - BUBBLE_W - 12);
    return { style: { left, bottom: STAGE_H - top - 6 }, tail: 'bottom', at: headX - left };
  }
  if (chosen === 'right') return { style: { left: x + MOCHI_W - 14, top: top + 60 }, tail: 'left', at: 34 };
  return { style: { right: STAGE_W - x - 14, top: top + 60 }, tail: 'right', at: 34 };
}

/** One frame of the film: the scene's set, Mochi walking to her mark, her bubble and the scene card. */
export function FilmStage({ scene, index, scale, bubbles, sets, sceneWord }: { scene: FilmScene; index: number; scale: number; bubbles: boolean; sets: FilmSets; sceneWord: string }) {
  const Set = sets[scene.set];
  const [walking, setWalking] = useState(false);
  useEffect(() => {
    setWalking(true);
    const t = setTimeout(() => setWalking(false), WALK_MS);
    return () => clearTimeout(t);
  }, [scene.id]);

  const { x, y, pose, mood, flip } = scene.mochi;
  const place = placeBubble(x, y, scene.bubbleSide);

  return (
    <div className="film-stage" style={{ transform: `scale(${scale})` }}>
      <div key={scene.id} className="absolute inset-0"><Set /></div>
      <div className={`film-actor ${flip ? 'is-flipped' : ''}`} style={{ transform: `translate3d(${x}px, ${y - MOCHI_H}px, 0)` }}>
        <MochiFull pose={walking ? 'idle' : pose} mood={mood} moving={walking} />
      </div>
      {bubbles && !walking && (
        <div className="film-bubble" style={{ ...place.style, width: BUBBLE_W }}>
          <MochiBubble key={scene.id} bubble={scene.bubble} tail={place.tail} at={place.at} />
        </div>
      )}
      <span key={`card-${scene.id}`} className="film-card p5-tag f-pop">{sceneWord} {String(index + 1).padStart(2, '0')} · {scene.title}</span>
    </div>
  );
}

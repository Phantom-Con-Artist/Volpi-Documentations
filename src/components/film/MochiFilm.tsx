import { useRef } from 'react';
import type { FilmScene, FilmSets, FilmText } from '@/types/film';
import { useFitScale } from '@/hooks/useFitScale';
import { useFilmPlayer } from '@/hooks/useFilmPlayer';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { FilmStage } from './FilmStage';
import { FilmControls } from './FilmControls';

/** Below this scale the in-stage bubbles get too small to read, so the line moves under the film. */
const BUBBLE_MIN_SCALE = 0.62;

/** A Mochi film: a 960 × 540 animated stage that plays like a video. Starts when scrolled into view. */
export function MochiFilm({ scenes, sets, text }: { scenes: FilmScene[]; sets: FilmSets; text: FilmText }) {
  const frame = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const scale = useFitScale(frame, 960);
  const { index, playing, ended, onSceneEnd, toggle, select } = useFilmPlayer(scenes.length, frame, !reduced);
  const scene = scenes[index];
  const bubbles = scale >= BUBBLE_MIN_SCALE;

  return (
    <figure className="rise m-0" aria-label={text.label}>
      {/* The pause class lives on an inner element: React rewrites className, which would drop useReveal's is-in. */}
      <div className={playing ? '' : 'film-paused'}>
      <div className="panel">
        <div ref={frame} className="film-frame">
          <FilmStage scene={scene} index={index} scale={scale} bubbles={bubbles} sets={sets} sceneWord={text.scene} />
        </div>
      </div>
      {!bubbles && (
        <p key={scene.id} className="mb mb-speech mt-6 max-w-none" data-tail="top" style={{ ['--at' as string]: '40px', width: 'auto' }} aria-live="polite">
          {scene.bubble.text}
        </p>
      )}
      <FilmControls scenes={scenes} text={text} index={index} playing={playing} ended={ended} onToggle={toggle} onSelect={select} onSceneEnd={onSceneEnd} />
      </div>
    </figure>
  );
}

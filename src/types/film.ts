import type { ComponentType } from 'react';
import type { Bubble, MochiMood, MochiPose } from './mochi';

/** The props and backdrop of one scene, by name. Each film keeps its own (pages/about/film/sets, pages/home/tour/sets). */
export type FilmSets = Record<string, ComponentType>;

/** Where Mochi's bubble sits: above her head, or beside it on the left or right. */
export type FilmBubbleSide = 'above' | 'left' | 'right';

/** One scene of a Mochi film. Positions are in the 960 × 540 stage. */
export interface FilmScene {
  id: string;
  title: string;
  /** How long the scene runs, in milliseconds. */
  duration: number;
  /** A key of the film's `FilmSets`. */
  set: string;
  mochi: { x: number; y: number; pose: MochiPose; mood: MochiMood; flip?: boolean };
  bubble: Bubble;
  /** The bubble is anchored to her head; this picks the side. Default: whichever side has more room. */
  bubbleSide?: FilmBubbleSide;
  /** The sound or symbol above her head. Default: one for her mood (content/film.content.ts); '' for none. */
  emote?: string;
}

/** The words around a film: its label for screen readers, the controls and the transcript. */
export interface FilmText {
  label: string;
  play: string;
  pause: string;
  replay: string;
  scene: string;
  transcript: string;
}

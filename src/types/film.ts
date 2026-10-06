import type { Bubble, MochiMood, MochiPose } from './mochi';

/** The props and backdrop each scene draws (pages/about/film/sets). */
export type FilmSetName = 'title' | 'desk' | 'windows' | 'shuffle' | 'lost' | 'merge' | 'rules' | 'snack' | 'invite';

/** Where Mochi's bubble sits: above her head, or beside it on the left or right. */
export type FilmBubbleSide = 'above' | 'left' | 'right';

/** One scene of the Mochi film. Positions are in the 960 × 540 stage. */
export interface FilmScene {
  id: string;
  title: string;
  /** How long the scene runs, in milliseconds. */
  duration: number;
  set: FilmSetName;
  mochi: { x: number; y: number; pose: MochiPose; mood: MochiMood; flip?: boolean };
  bubble: Bubble;
  /** The bubble is anchored to her head; this picks the side. Default: whichever side has more room. */
  bubbleSide?: FilmBubbleSide;
}

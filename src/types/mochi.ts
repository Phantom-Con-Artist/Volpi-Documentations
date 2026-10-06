export type MochiMood = 'smile' | 'happy' | 'wow' | 'sleep';

export interface MochiLine {
  text: string;
  mood: MochiMood;
}

/** What her arms and body are doing. Legs run on their own whenever she is moving. */
export type MochiPose = 'idle' | 'wave' | 'point' | 'eat' | 'sit' | 'carry' | 'hug';

/** Bubble shapes, one per feeling: talk, yell, ponder, sneak, hum. */
export type BubbleKind = 'speech' | 'shout' | 'thought' | 'whisper' | 'song';

export interface Bubble {
  kind: BubbleKind;
  text: string;
  /** Placement hint for the roaming bubble. */
  at?: 'below';
}

/** The roaming Mochi, in viewport pixels. */
export interface ActorState {
  on: boolean;
  x: number;
  y: number;
  rotate: number;
  scale: number;
  flip: boolean;
  pose: MochiPose;
  mood: MochiMood;
  moving: boolean;
  moveMs: number;
  bubble: Bubble | null;
  carry: string | null;
}

export interface HeroState {
  away: boolean;
  pose: MochiPose;
  mood: MochiMood;
  bubble: Bubble | null;
}

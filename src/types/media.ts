/** An image with a Day and (optionally) a Night version. Night falls back to Day. */
export interface ThemedImage {
  day: string;
  night?: string;
  alt: string;
  width: number;
  height: number;
  /** Responsive sources (1600w and full size) for each theme. */
  srcSet?: { day: string; night?: string };
}

/** A recorded loop from the app. `name` maps to /assets/video/<name>-<mode>.mp4 (H.264), a .webm fallback and a -poster.webp. */
export interface LoopClip {
  name: string;
  label: string;
}

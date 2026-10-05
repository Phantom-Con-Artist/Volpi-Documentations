import { useRef } from 'react';
import type { LoopClip } from '@/types/media';
import { useTheme } from '@/hooks/useTheme';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useInViewPlayback } from '@/hooks/useInViewPlayback';

const VIDEO = '/assets/video';

interface Props {
  clip: LoopClip;
  loop?: boolean;
  onEnded?: () => void;
  className?: string;
}

/** A recorded loop from the app, in the current theme. Plays only while on screen. */
export function LoopVideo({ clip, loop = true, onEnded, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const { mode } = useTheme();
  const reduced = useReducedMotion();
  const base = `${VIDEO}/${clip.name}-${mode}`;
  useInViewPlayback(ref, !reduced, base);

  return (
    <video
      key={base}
      ref={ref}
      className={className}
      muted
      playsInline
      loop={loop}
      preload="metadata"
      poster={`${base}-poster.webp`}
      aria-label={clip.label}
      onEnded={onEnded}
      width={1440}
      height={900}
      controls={reduced}
    >
      <source src={`${base}.webm`} type="video/webm" />
    </video>
  );
}

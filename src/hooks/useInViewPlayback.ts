import { useEffect, type RefObject } from 'react';

/** Plays a video only while it is on screen. Does nothing when motion is reduced. */
export function useInViewPlayback(ref: RefObject<HTMLVideoElement | null>, enabled: boolean, key?: string): void {
  useEffect(() => {
    const video = ref.current;
    if (!video || !enabled) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.3 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [ref, enabled, key]);
}

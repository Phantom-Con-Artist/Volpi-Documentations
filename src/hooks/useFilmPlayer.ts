import { useCallback, useEffect, useRef, useState, type RefObject } from 'react';

/**
 * Plays a list of scenes like a video. The active scene's progress bar is a CSS animation;
 * when it ends, call `onSceneEnd` to move on. Starts when the film scrolls into view (unless motion
 * is reduced) and pauses while it is off screen.
 */
export function useFilmPlayer(count: number, ref: RefObject<HTMLElement | null>, autoplay: boolean) {
  // ?scene=3 opens the film at that scene (handy for sharing a moment).
  const [index, setIndex] = useState(() => {
    const n = Number(new URLSearchParams(location.search).get('scene'));
    return n >= 1 && n <= count ? n - 1 : 0;
  });
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const userPaused = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !autoplay) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPaused.current) setPlaying(true);
        if (!entry.isIntersecting) setPlaying(false);
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, autoplay]);

  const onSceneEnd = useCallback(() => {
    if (index < count - 1) setIndex(index + 1);
    else { setPlaying(false); setEnded(true); }
  }, [index, count]);

  const toggle = useCallback(() => {
    if (ended) { setIndex(0); setEnded(false); setPlaying(true); userPaused.current = false; return; }
    setPlaying((p) => { userPaused.current = p; return !p; });
  }, [ended]);

  const select = useCallback((i: number) => { setIndex(i); setEnded(false); }, []);

  return { index, playing, ended, onSceneEnd, toggle, select };
}

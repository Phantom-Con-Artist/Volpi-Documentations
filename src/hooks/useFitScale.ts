import { useEffect, useState, type RefObject } from 'react';

/** The scale that fits a fixed-size design (e.g. a 960 px stage) into the element's current width. */
export function useFitScale(ref: RefObject<HTMLElement | null>, designWidth: number): number {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / designWidth));
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, designWidth]);
  return scale;
}

import { useEffect, type RefObject } from 'react';

/** Moves Mochi's pupils a few units towards the pointer, through --gx / --gy on the svg. */
export function usePointerGaze(ref: RefObject<SVGSVGElement | null>, enabled = true): void {
  useEffect(() => {
    const svg = ref.current;
    if (!svg || !enabled || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = svg.getBoundingClientRect();
        const cx = r.left + r.width * 0.48;
        const cy = r.top + r.height * 0.36;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const d = Math.hypot(dx, dy) || 1;
        const k = Math.min(1, d / 300) * 3.6;
        svg.style.setProperty('--gx', ((dx / d) * k).toFixed(2));
        svg.style.setProperty('--gy', ((dy / d) * k).toFixed(2));
      });
    };
    addEventListener('pointermove', onMove, { passive: true });
    return () => { removeEventListener('pointermove', onMove); cancelAnimationFrame(frame); };
  }, [ref, enabled]);
}

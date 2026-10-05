import { useEffect } from 'react';

/** Adds .is-in to every .rise element once it scrolls into view. Run once per page. */
export function useReveal(): void {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    document.querySelectorAll('.rise').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

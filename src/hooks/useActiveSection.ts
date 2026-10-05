import { useEffect, useState } from 'react';

/** The id of the [data-mochi] section nearest the middle of the screen. */
export function useActiveSection(): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive((visible[0].target as HTMLElement).dataset.mochi ?? null);
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    document.querySelectorAll<HTMLElement>('[data-mochi]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}

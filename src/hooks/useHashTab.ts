import { useCallback, useEffect, useState } from 'react';

/**
 * A tab chosen by the address hash: `#<id>` of the second tab (or any anchor inside it) opens it,
 * anything else opens the first. Choosing a tab updates the hash without scrolling the page.
 */
export function useHashTab<T extends string>(first: T, second: T, inSecond: (hash: string) => boolean) {
  const pick = useCallback(() => {
    const hash = location.hash.slice(1);
    return hash && (hash === second || inSecond(hash)) ? second : first;
  }, [first, second, inSecond]);
  const [tab, setTab] = useState<T>(pick);

  useEffect(() => {
    const onHash = () => setTab(pick());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [pick]);

  const choose = (next: T) => {
    setTab(next);
    history.replaceState(null, '', next === first ? location.pathname : `#${next}`);
  };
  return [tab, choose] as const;
}

import { useSyncExternalStore } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

function subscribe(onChange: () => void) {
  const list = matchMedia(QUERY);
  list.addEventListener('change', onChange);
  return () => list.removeEventListener('change', onChange);
}

/** False in the prerendered page, then the visitor's setting as soon as the page hydrates (before it is painted). */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, () => matchMedia(QUERY).matches, () => false);
}

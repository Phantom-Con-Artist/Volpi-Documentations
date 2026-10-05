import { useCallback, useState } from 'react';

/** Index into a list of steps, with wrap-around next(). */
export function useStepper(count: number) {
  const [index, setIndex] = useState(0);
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  return { index, select: setIndex, next };
}

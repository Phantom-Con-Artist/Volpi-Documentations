import { useCallback, useLayoutEffect, useState } from 'react';
import { useMochi } from '@/components/mochi/MochiContext';
import { useReducedMotion } from './useReducedMotion';
import { readJSON, writeJSON } from './storage';

export type ViewChoice = 'read' | 'watch';

/** Read a page (the default, and what the prerendered HTML holds) or watch Mochi explain it, remembered per page
 *  under `key`. A film needs Mochi switched on and motion allowed; otherwise the choice is always "read". */
export function useViewChoice(key: string) {
  const { hidden } = useMochi();
  const reduced = useReducedMotion();
  const [choice, setChoice] = useState<ViewChoice>('read');
  // The saved choice is read after hydration, before the page is painted.
  useLayoutEffect(() => {
    if (readJSON<{ view: ViewChoice }>(key, { view: 'read' }).view === 'watch') setChoice('watch');
  }, [key]);
  const setView = useCallback((view: ViewChoice) => {
    setChoice(view);
    writeJSON(key, { view });
  }, [key]);
  const available = !hidden && !reduced;
  return { view: available ? choice : 'read', setView, available } as const;
}

import { useCallback, useState } from 'react';
import { useMochi } from '@/components/mochi/MochiContext';
import { useReducedMotion } from './useReducedMotion';
import { readJSON, writeJSON } from './storage';

export type ViewChoice = 'read' | 'watch';

/** Watch Mochi explain a page (the default) or read it, remembered per page under `key`. A film needs Mochi
 *  switched on and motion allowed; otherwise the choice is always "read". */
export function useViewChoice(key: string) {
  const { hidden } = useMochi();
  const reduced = useReducedMotion();
  const [choice, setChoice] = useState<ViewChoice>(() => (readJSON(key, { view: 'watch' }).view === 'read' ? 'read' : 'watch'));
  const setView = useCallback((view: ViewChoice) => {
    setChoice(view);
    writeJSON(key, { view });
  }, [key]);
  const available = !hidden && !reduced;
  return { view: available ? choice : 'read', setView, available } as const;
}

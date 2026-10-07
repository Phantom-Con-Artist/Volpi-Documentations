import { useCallback, useState } from 'react';
import { useMochi } from '@/components/mochi/MochiContext';
import { useReducedMotion } from './useReducedMotion';
import { readJSON, writeJSON } from './storage';

export type HomeView = 'read' | 'watch';
const KEY = 'volpi-home-view';

/** Read the home page or watch Mochi explain it. The tour needs Mochi switched on and motion allowed; otherwise it is always "read". */
export function useHomeView() {
  const { hidden } = useMochi();
  const reduced = useReducedMotion();
  const [choice, setChoice] = useState<HomeView>(() => (readJSON(KEY, { view: 'read' }).view === 'watch' ? 'watch' : 'read'));
  const setView = useCallback((view: HomeView) => {
    setChoice(view);
    writeJSON(KEY, { view });
  }, []);
  const available = !hidden && !reduced;
  return { view: available ? choice : 'read', setView, available } as const;
}

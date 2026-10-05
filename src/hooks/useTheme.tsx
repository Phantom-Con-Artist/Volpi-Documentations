import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { AccentInk, ThemeMode, ThemeState } from '@/types/theme';
import { readJSON, writeJSON } from './storage';

// The same key is read by the inline script in each HTML page, so the first paint is already themed.
const KEY = 'volpi.site.theme';

interface ThemeApi extends ThemeState {
  toggleMode: () => void;
  setAccent: (accent: AccentInk) => void;
}

const ThemeContext = createContext<ThemeApi | null>(null);

function initial(): ThemeState {
  const root = document.documentElement.dataset;
  return {
    mode: root.mode === 'night' ? 'night' : 'day',
    accent: (root.accent as AccentInk) || readJSON<Partial<ThemeState>>(KEY, {}).accent || 'ai',
  };
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeState>(initial);

  useEffect(() => {
    document.documentElement.dataset.mode = theme.mode;
    document.documentElement.dataset.accent = theme.accent;
    writeJSON(KEY, theme);
  }, [theme]);

  const toggleMode = useCallback(
    () => setTheme((t) => ({ ...t, mode: (t.mode === 'day' ? 'night' : 'day') as ThemeMode })),
    [],
  );
  const setAccent = useCallback((accent: AccentInk) => setTheme((t) => ({ ...t, accent })), []);

  const api = useMemo(() => ({ ...theme, toggleMode, setAccent }), [theme, toggleMode, setAccent]);
  return <ThemeContext.Provider value={api}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeApi {
  const api = useContext(ThemeContext);
  if (!api) throw new Error('useTheme must be used inside ThemeProvider');
  return api;
}

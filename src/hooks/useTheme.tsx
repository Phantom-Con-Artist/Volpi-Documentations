import { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState, type ReactNode } from 'react';
import type { AccentInk, ThemeMode, ThemeState } from '@/types/theme';
import { readJSON, writeJSON } from './storage';

// The same key is read by the inline script in each HTML page, so the first paint is already themed.
const KEY = 'volpi.site.theme';

interface ThemeApi extends ThemeState {
  toggleMode: () => void;
  setAccent: (accent: AccentInk) => void;
}

const ThemeContext = createContext<ThemeApi | null>(null);

/** What the prerendered page is drawn with. */
const DEFAULT: ThemeState = { mode: 'day', accent: 'ai' };

/** The theme the inline script already put on <html>. */
function fromPage(): ThemeState {
  const root = document.documentElement.dataset;
  return {
    mode: root.mode === 'night' ? 'night' : 'day',
    accent: (root.accent as AccentInk) || readJSON<Partial<ThemeState>>(KEY, {}).accent || 'ai',
  };
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeState>(DEFAULT);
  // Picked up after hydration, before the page is painted, so Night visitors never see Day pictures.
  useLayoutEffect(() => setTheme(fromPage()), []);

  /** A choice by the visitor: shown, applied to <html> and remembered. */
  const choose = useCallback((change: Partial<ThemeState>) => {
    const next = { ...fromPage(), ...change };
    document.documentElement.dataset.mode = next.mode;
    document.documentElement.dataset.accent = next.accent;
    writeJSON(KEY, next);
    setTheme(next);
  }, []);

  const toggleMode = useCallback(() => choose({ mode: (fromPage().mode === 'day' ? 'night' : 'day') as ThemeMode }), [choose]);
  const setAccent = useCallback((accent: AccentInk) => choose({ accent }), [choose]);

  const api = useMemo(() => ({ ...theme, toggleMode, setAccent }), [theme, toggleMode, setAccent]);
  return <ThemeContext.Provider value={api}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeApi {
  const api = useContext(ThemeContext);
  if (!api) throw new Error('useTheme must be used inside ThemeProvider');
  return api;
}

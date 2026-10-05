export type ThemeMode = 'day' | 'night';
export type AccentInk = 'ai' | 'beni' | 'matcha';

export interface ThemeState {
  mode: ThemeMode;
  accent: AccentInk;
}

import type { AccentInk } from '@/types/theme';

export const THEME_HEAD = {
  kicker: 'No. 03',
  chapter: '第三話',
  title: 'Day and Night themes.',
  text: 'Volpi has the same look as this page, with three accent colours. Try the switch.',
};

export const ACCENTS: { id: AccentInk; label: string; swatch: string }[] = [
  { id: 'ai', label: 'Indigo', swatch: '#2e4a8b' },
  { id: 'beni', label: 'Crimson', swatch: '#b3343b' },
  { id: 'matcha', label: 'Matcha', swatch: '#56722f' },
];

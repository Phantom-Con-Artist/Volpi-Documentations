import type { MochiMood } from '@/types/mochi';

/** The read/watch switch: the same words and size on every page that has a film. Each page adds its own `label`. */
export const VIEW_SWITCH = { read: 'Read the page', watch: 'Watch Mochi explain', hint: 'Tap or swipe' };

/** The little sound or symbol that pops above Mochi's head in a film, by mood. Empty means none. */
export const MOOD_EMOTES: Record<MochiMood, string> = {
  smile: '♪',
  happy: '♥',
  wow: '！？',
  sleep: '',
  smug: '✦',
  angry: 'ムカッ',
  pout: 'ぷくっ',
  flustered: 'あわわ',
};

/** The closing bow that ends every Mochi film. */
export const FINALE = {
  welcome: 'ようこそ',
  title: 'Welcome to Volpi.',
  stamp: 'よろしく',
  stampSub: 'Yoroshiku',
};

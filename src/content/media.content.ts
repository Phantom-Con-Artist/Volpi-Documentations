import type { ThemedImage } from '@/types/media';

const IMG = '/assets/img';

/** A zoomed feature panel (2000×1500 masters, served at 1600w). */
export function feature(subject: string, alt: string, hasNight = true): ThemedImage {
  return {
    day: `${IMG}/feature-day-${subject}-1600w.webp`,
    night: hasNight ? `${IMG}/feature-night-${subject}-1600w.webp` : undefined,
    alt, width: 1600, height: 1200,
  };
}

/** The whole window on the brand backdrop (2880×1800 masters, served at 1600w). */
export function windowShot(subject: string, alt: string): ThemedImage {
  return {
    day: `${IMG}/hero-day-${subject}-1600w.webp`,
    night: `${IMG}/hero-night-${subject}-1600w.webp`,
    alt, width: 1600, height: 1000,
  };
}

export const HERO_IMAGE: ThemedImage = {
  day: `${IMG}/bleed-day-dashboard-1600w.webp`,
  night: `${IMG}/bleed-night-dashboard-1600w.webp`,
  alt: 'The Volpi dashboard for a research project: recent files, papers in progress and reading progress.',
  width: 1600, height: 833,
};

/** Day dashboards in each accent ink, for the theme section. */
export const ACCENT_SHOTS = {
  ai: `${IMG}/hero-day-dashboard-1600w.webp`,
  beni: `${IMG}/hero-day-dashboard-beni-1600w.webp`,
  matcha: `${IMG}/hero-day-dashboard-matcha-1600w.webp`,
} as const;

import type { ThemedImage } from '@/types/media';

const IMG = '/assets/img';

/** Full-size width and height of each feature panel, trimmed to the app (masters are 2000×1500). */
const FEATURE_SIZE: Record<string, [number, number]> = {
  chart: [1877, 1400], dashboard: [1883, 1079], data: [1883, 923], graph: [1890, 1317],
  launchpad: [1672, 1391], library: [1883, 863], note: [1890, 1374], paper: [1858, 1400],
  pdf: [1883, 1061], references: [1883, 971], search: [1658, 1391], shelf: [1883, 671],
};

function sources(base: string, width: number, hasNight: boolean) {
  const set = (theme: string) => `${IMG}/${base.replace('{t}', theme)}-1600w.webp 1600w, ${IMG}/${base.replace('{t}', theme)}.webp ${width}w`;
  return { day: set('day'), night: hasNight ? set('night') : undefined };
}

/** A zoomed feature panel, trimmed so the app fills the frame. Served at 1600w, with the full size for sharp screens. */
export function feature(subject: string, alt: string, hasNight = true): ThemedImage {
  const [width, height] = FEATURE_SIZE[subject];
  return {
    day: `${IMG}/crop-day-${subject}-1600w.webp`,
    night: hasNight ? `${IMG}/crop-night-${subject}-1600w.webp` : undefined,
    srcSet: sources(`crop-{t}-${subject}`, width, hasNight),
    alt, width, height,
  };
}

/** The app window from the raw screenshots, usually without its sidebar (2400 wide, served at 1600w). */
export function windowCrop(subject: string, alt: string, hasNight = false, height = 1846): ThemedImage {
  return {
    day: `${IMG}/window-day-${subject}-1600w.webp`,
    night: hasNight ? `${IMG}/window-night-${subject}-1600w.webp` : undefined,
    srcSet: sources(`window-{t}-${subject}`, 2400, hasNight),
    alt, width: 2400, height,
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

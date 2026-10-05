import type { NavLink } from '@/types/content';

/** The public repository for the website and documentation. */
export const GITHUB_URL = 'https://github.com/Phantom-Con-Artist/Volpi-Documentations';

export const SITE = {
  name: 'Volpi',
  version: 'v0.1.0',
  channel: 'Open beta, coming soon',
  tagline: 'A focused tool for your research.',
  githubLabel: 'View on GitHub',
  updated: '6 October 2026',
};

export const NAV: NavLink[] = [
  { label: 'Features', href: '/#loop' },
  { label: 'Docs', href: '/docs/' },
  { label: 'Privacy', href: '/privacy/' },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: 'Documentation', href: '/docs/' },
  { label: 'Privacy', href: '/privacy/' },
  { label: 'GitHub', href: GITHUB_URL },
];

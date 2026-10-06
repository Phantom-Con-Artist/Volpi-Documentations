import type { NavLink } from '@/types/content';

/** The Volpi community server: announcements, questions and feedback. */
export const DISCORD_URL = 'https://discord.gg/gkHMSq6emT';

/** The GitHub repository holds this website, the documentation and bug reports. Volpi's source code is not public. */
export const GITHUB_URL = 'https://github.com/Phantom-Con-Artist/Volpi-Documentations';
export const BUG_REPORT_URL = `${GITHUB_URL}/issues`;

export const SITE = {
  name: 'Volpi',
  version: 'v0.1.0',
  channel: 'Open beta, coming soon',
  tagline: 'A focused tool for your research.',
  discordLabel: 'Join the Discord',
  bugLabel: 'Report a bug',
  updated: '6 October 2026',
};

export const NAV: NavLink[] = [
  { label: 'Features', href: '/features/' },
  { label: 'Docs', href: '/docs/' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Roadmap', href: '/roadmap/' },
  { label: 'About', href: '/about/' },
  { label: 'Privacy', href: '/privacy/' },
  { label: 'Report a bug', href: BUG_REPORT_URL },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: 'Features', href: '/features/' },
  { label: 'Documentation', href: '/docs/' },
  { label: 'Roadmap', href: '/roadmap/' },
  { label: 'About', href: '/about/' },
  { label: 'Privacy', href: '/privacy/' },
  { label: 'Discord', href: DISCORD_URL },
  { label: 'Bug reports on GitHub', href: BUG_REPORT_URL },
];

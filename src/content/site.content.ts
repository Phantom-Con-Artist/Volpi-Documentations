import type { NavLink } from '@/types/content';

/** The Volpi community server: announcements, questions and feedback. */
export const DISCORD_URL = 'https://discord.gg/gkHMSq6emT';

/** The GitHub repository holds this website, the documentation and bug reports. Volpi's source code is not public. */
export const GITHUB_URL = 'https://github.com/Phantom-Con-Artist/Volpi-Documentations';
export const BUG_REPORT_URL = `${GITHUB_URL}/issues`;
export const NEW_BUG_URL = `${GITHUB_URL}/issues/new?template=bug_report.yml`;
export const NEW_DOCS_ISSUE_URL = `${GITHUB_URL}/issues/new?template=docs_issue.yml`;
export const SECURITY_URL = `${GITHUB_URL}/blob/main/SECURITY.md`;

export const SITE = {
  name: 'Volpi',
  version: 'v0.1.0',
  channel: 'Open beta, coming soon',
  tagline: 'For researchers with too many tabs open.',
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
  { label: 'Report a bug', href: '/report/' },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: 'Features', href: '/features/' },
  { label: 'Documentation', href: '/docs/' },
  { label: 'Roadmap', href: '/roadmap/' },
  { label: 'About', href: '/about/' },
  { label: 'Privacy', href: '/privacy/' },
  { label: 'Discord', href: DISCORD_URL },
  { label: 'Report a bug', href: '/report/' },
  { label: 'GitHub', href: GITHUB_URL },
];

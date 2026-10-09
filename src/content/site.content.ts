import type { NavLink } from '@/types/content';

/** The Volpi community server: announcements, questions and feedback. */
export const DISCORD_URL = 'https://discord.gg/gkHMSq6emT';

/** Volpi on X (Twitter): news and new versions. */
export const X_URL = 'https://x.com/MochiVolpi';

/** The GitHub repository holds this website, the documentation and bug reports. Volpi's source code is not public. */
export const GITHUB_URL = 'https://github.com/Phantom-Con-Artist/Volpi-Documentations';
export const BUG_REPORT_URL = `${GITHUB_URL}/issues`;
export const NEW_BUG_URL = `${GITHUB_URL}/issues/new?template=bug_report.yml`;
export const NEW_DOCS_ISSUE_URL = `${GITHUB_URL}/issues/new?template=docs_issue.yml`;
export const SECURITY_URL = `${GITHUB_URL}/blob/main/SECURITY.md`;

/** Installers are published as releases of this public repository (the app's source stays private).
 *  `releases/latest/download/<file>` always serves the newest published release. */
export const RELEASES_URL = 'https://github.com/Phantom-Con-Artist/Volpi-Releases/releases';
export const INSTALL_URL = 'https://github.com/Phantom-Con-Artist/Volpi-Releases/blob/main/INSTALL.md';
const latest = (file: string) => `${RELEASES_URL}/latest/download/${file}`;
export const DOWNLOADS = [
  { id: 'windows', label: 'Windows 10 or 11', detail: '64-bit', href: latest('Volpi-Windows-x64.zip') },
  { id: 'mac-arm', label: 'macOS', detail: 'Apple Silicon (M1 and later)', href: latest('Volpi-macOS-AppleSilicon.zip') },
  { id: 'mac-intel', label: 'macOS', detail: 'Intel', href: latest('Volpi-macOS-Intel.zip') },
  { id: 'linux', label: 'Linux', detail: '64-bit, .deb and .rpm', href: latest('Volpi-Linux-x64.zip') },
] as const;

export const SITE = {
  name: 'Volpi',
  version: 'v0.1.1',
  channel: 'Open beta',
  tagline: 'For researchers with too many tabs open.',
  discordLabel: 'Join the Discord',
  bugLabel: 'Report a bug',
  updated: '9 October 2026',
};

export const NAV: NavLink[] = [
  { label: 'Features', href: '/features/' },
  { label: 'Docs', href: '/docs/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Roadmap', href: '/roadmap/' },
  { label: 'About', href: '/about/' },
  { label: 'Privacy', href: '/privacy/' },
  { label: 'Report a bug', href: '/report/' },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: 'Features', href: '/features/' },
  { label: 'Documentation', href: '/docs/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Roadmap', href: '/roadmap/' },
  { label: 'About', href: '/about/' },
  { label: 'Privacy', href: '/privacy/' },
  { label: 'Discord', href: DISCORD_URL },
  { label: 'X (Twitter)', href: X_URL },
  { label: 'Report a bug', href: '/report/' },
  { label: 'GitHub', href: GITHUB_URL },
];

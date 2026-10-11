import type { NavLink } from '@/types/content';
import { DOC_SECTIONS, LIMITS_HEAD } from './docs.content';
import { REFERENCE_TABLES } from './docs-reference.content';
import { INSTALL_DOCS } from './download.content';

/** The documentation as pages: the hub's groups, the side list, and the heading of each page that is not a guide section.
 *  Each id is the last part of the page's address (/docs/<id>/) and must have a route in routes.ts. */
export interface DocLink extends NavLink { text: string }

const table = (id: string) => REFERENCE_TABLES.find((t) => t.id === id)!;

/** Reference pages: the page id, and the reference tables shown on it. */
export const REFERENCE_PAGES: { id: string; title: string; text: string; tables: string[] }[] = [
  { id: 'glossary', title: 'Glossary.', text: table('glossary').intro, tables: ['glossary'] },
  { id: 'links', title: 'Link syntax.', text: table('links').intro, tables: ['links'] },
  { id: 'file-formats', title: 'File formats.', text: table('formats').intro, tables: ['formats'] },
  { id: 'reference-checks', title: 'Reference checks.', text: table('checks').intro, tables: ['checks', 'online'] },
];

export const SHORTCUTS_PAGE = { id: 'shortcuts', title: 'Keyboard shortcuts.', text: 'Every shortcut in this version. In Volpi, Ctrl+/ shows the same list. On a Mac, use Cmd where this page says Ctrl.' };
export const LIMITS_PAGE = { id: 'limits', title: 'Known limits and what comes next.', text: LIMITS_HEAD.intro };

/** Reference tables that also belong on a guide page, shown under its facts. */
export const RELATED_TABLES: Record<string, string[]> = { notes: ['links'], references: ['checks', 'online'] };

export const DOC_GROUPS: { title: string; pages: DocLink[] }[] = [
  {
    title: 'Start here',
    pages: [{ label: 'Download and install', href: '/download/', text: INSTALL_DOCS.short }],
  },
  {
    title: 'Guide',
    pages: DOC_SECTIONS.map((s) => ({ label: s.title, href: `/docs/${s.id}/`, text: s.intro })),
  },
  {
    title: 'Reference',
    pages: [
      ...REFERENCE_PAGES.map((p) => ({ label: p.title.replace(/\.$/, ''), href: `/docs/${p.id}/`, text: p.text })),
      { label: 'Keyboard shortcuts', href: `/docs/${SHORTCUTS_PAGE.id}/`, text: 'Finding files, panes, versions, search and Zen mode from the keyboard.' },
    ],
  },
  {
    title: 'Limits and plans',
    pages: [{ label: 'Known limits', href: `/docs/${LIMITS_PAGE.id}/`, text: 'What this beta cannot do yet, what is planned next, and the price and licence.' }],
  },
  {
    title: 'More help',
    pages: [
      { label: 'Guides', href: '/guides/', text: 'One task at a time, step by step.' },
      { label: 'Formats', href: '/formats/', text: 'BibTeX, RIS, CSL JSON and the six citation styles, in detail.' },
      { label: 'Frequently asked questions', href: '/faq/', text: 'Short answers about price, privacy and what the beta cannot do yet.' },
      { label: 'Compare', href: '/vs/', text: 'Volpi beside Zotero, Mendeley, Obsidian, Notion and Scrivener.' },
    ],
  },
];

/** Every documentation page in reading order, for the side list and the previous and next links. */
export const DOC_ORDER: DocLink[] = DOC_GROUPS.flatMap((g) => g.pages).filter((p) => p.href.startsWith('/docs/'));

export const DOC_NAV = { title: 'Documentation', all: 'All documentation', previous: 'Previous', next: 'Next' };

/** Where the anchors of the old single-page docs went, so old links still land in the right place. */
export const OLD_ANCHORS: Record<string, string> = {
  install: '/download/', releases: '/docs/releases/',
  ...Object.fromEntries(DOC_SECTIONS.map((s) => [s.id, `/docs/${s.id}/`])),
  reference: '/docs/glossary/', glossary: '/docs/glossary/', links: '/docs/links/', formats: '/docs/file-formats/',
  checks: '/docs/reference-checks/', online: '/docs/reference-checks/#online', shortcuts: '/docs/shortcuts/',
  limits: '/docs/limits/', next: '/docs/limits/#next', pricing: '/docs/limits/#pricing',
};

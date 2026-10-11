/**
 * Every page of the site: its address, the entry script that starts it, and the text for its head.
 * vite.config.ts builds one HTML file per route from page.html, the sitemap lists them, and
 * src/prerender.tsx draws them. This file imports nothing, so the build configuration can read it.
 *
 * Titles say what the page covers first, then "· Volpi", in about 60 characters. Descriptions are a
 * plain statement of what is on the page, in about 150.
 */
export interface Route {
  /** Root-relative, with a trailing slash. */
  path: string;
  /** The file in src/entries/ (without .tsx) that mounts the page. Pages of one kind share an entry. */
  entry: string;
  title: string;
  description: string;
  /** The page's short name, used in breadcrumb trails. */
  crumb: string;
}

const page = (path: string, entry: string, crumb: string, title: string, description: string): Route => ({ path, entry, crumb, title, description });

export const ROUTES: Route[] = [
  page('/', 'home', 'Volpi', 'Volpi · Research app for PDFs, notes, data and papers',
    'Volpi is a desktop app for researchers on Windows, macOS and Linux. Read and highlight PDFs, write linked notes, check references and data, and write papers. Free in open beta.'),
  page('/features/', 'features', 'Features', 'PDF highlights, linked notes, citations and charts · Volpi',
    'What Volpi does: read and highlight PDFs, link Markdown notes, check references in Crossref and PubMed, chart CSV data and write papers that export to Word and LaTeX.'),
  page('/download/', 'download', 'Download', 'Download Volpi for Windows, macOS and Linux · Volpi',
    'Download the free Volpi open beta for Windows 10 and 11, macOS (Apple Silicon and Intel) and Linux (.deb and .rpm), with install steps for each system.'),
  page('/pricing/', 'pricing', 'Pricing', 'Pricing: free open beta, one-time purchase later · Volpi',
    'Volpi is free during the open beta on Windows, macOS and Linux. Version 1.0 will be a one-time purchase, not a subscription.'),
  page('/roadmap/', 'roadmap', 'Roadmap', 'Roadmap: sync, Zotero import and a phone app · Volpi',
    'Where Volpi is going: sync between computers, import from Zotero and Mendeley, machine-learning tools you build yourself, and an experimental Android app.'),
  page('/about/', 'about', 'About', 'About Volpi: why it was made, and Mochi · Volpi',
    'How Volpi began: a research scholar, too many tools and one very opinionated cat.'),
  page('/privacy/', 'privacy', 'Privacy', 'Privacy: what stays on your computer · Volpi',
    'Volpi has no account, no cloud and no analytics. This page lists where your files are kept, exactly when the app uses the internet and what it sends.'),
  page('/report/', 'report', 'Report a bug', 'Report a bug · Volpi',
    'How to report a bug in Volpi or its documentation: what to include, how to keep your research private, and where to send it.'),

  // Documentation: a hub, then one page per subject. The last part of each path is the id used in src/content/docs-pages.content.ts.
  page('/docs/', 'docs', 'Documentation', 'Documentation: guide, reference and known limits · Volpi',
    'How to use Volpi 0.1.1: reading PDFs, notes and links, references, data and charts, writing papers, file formats, keyboard shortcuts and known limits.'),
  page('/docs/releases/', 'releases', 'Release notes', 'Release notes and changelog · Volpi',
    'Every version of Volpi, newest first: what is new, what was added and the known issues in each release.'),
  page('/docs/branches/', 'doc', 'Research branches', 'Research branches: each project is a plain folder · Volpi',
    'A branch is one research project in Volpi, kept as an ordinary folder on your disk. How importing, the dashboard and local profiles work.'),
  page('/docs/reading/', 'doc', 'Reading PDFs', 'Reading PDFs: highlights, comments and page links · Volpi',
    'Highlight and comment on PDFs in Volpi without changing the original file, link a page to your notes, and export a copy with your highlights in it.'),
  page('/docs/notes/', 'doc', 'Notes and links', 'Markdown notes, links and the research graph · Volpi',
    'Write Markdown notes in Volpi that link to papers, PDF pages, data and figures. How the two link styles, renaming and the research graph work.'),
  page('/docs/data/', 'doc', 'Data and charts', 'Check and chart CSV, TSV and JSON data · Volpi',
    'Volpi checks a dataset for gaps, inconsistent labels and possible outliers, draws charts you can save as SVG, and pulls captioned tables out of PDFs.'),
  page('/docs/papers/', 'doc', 'Writing papers', 'Writing papers: citations, equations and export · Volpi',
    'Write a paper in Volpi with numbered headings, figures, equations and citations, compare versions, and export to Word, OpenDocument, PDF and LaTeX.'),
  page('/docs/references/', 'doc', 'References and citations', 'References and citations: checks and six styles · Volpi',
    'Keep a reference library in Volpi, check each reference against Crossref, OpenAlex, arXiv or PubMed, cite in six styles and export BibTeX, RIS or CSL JSON.'),
  page('/docs/library/', 'doc', 'Library and search', 'Library and search: folders, tags and full text · Volpi',
    'Organise a large research project in Volpi with folders, tags and reading status, and search file names, notes, PDF text, highlights, Word and Excel files.'),
  page('/docs/desk/', 'doc', 'Saving, history and focus', 'Saving, version history and focus tools · Volpi',
    'How Volpi saves your work, recovers unsaved edits and keeps a history you can go back to, plus themes, night light, Zen mode and the focus timer.'),
  page('/docs/glossary/', 'doc', 'Glossary', 'Glossary: the words Volpi uses · Volpi',
    'What Volpi means by branch, profile, dashboard, highlight file, research graph, Launchpad, Zen mode and its other terms.'),
  page('/docs/links/', 'doc', 'Link syntax', 'Link syntax for notes and PDF pages · Volpi',
    'How to write a link in a Volpi note: angle brackets around a file name, a Markdown link with your own text, and #page= to open a PDF on one page.'),
  page('/docs/file-formats/', 'doc', 'File formats', 'File formats Volpi opens, imports and exports · Volpi',
    'What Volpi does with each kind of file: Markdown, PDF, CSV, TSV, JSON, Word, Excel, pictures, BibTeX and RIS, and the formats papers export to.'),
  page('/docs/reference-checks/', 'doc', 'Reference checks', 'Reference checks: badges, databases and settings · Volpi',
    'What the Verified, Likely, Mismatch, Not found and Retracted badges mean in Volpi, which databases are asked, and how to turn online checks off.'),
  page('/docs/shortcuts/', 'doc', 'Keyboard shortcuts', 'Keyboard shortcuts · Volpi',
    'Every keyboard shortcut in Volpi 0.1.1: finding and switching files, panes, new notes and papers, versions, search, Zen mode and PDF zoom.'),
  page('/docs/limits/', 'doc', 'Known limits', 'Known limits and what comes next · Volpi',
    'What the Volpi 0.1.1 beta cannot do yet: no OCR, no sync, import limits and Linux PDF quirks. Also what is planned next, and the price and licence.'),

  page('/faq/', 'faq', 'FAQ', 'Frequently asked questions · Volpi',
    'Short answers about Volpi: what it is, what it costs, which computers it runs on, where your files are kept, what it sends over the internet and what it cannot do yet.'),

  // Guides, formats and comparisons: a front page each (entry "hub"), then one page per article in src/content/articles/.
  page('/guides/', 'hub', 'Guides', 'Guides: research tasks in Volpi, step by step · Volpi',
    'Step-by-step guides for Volpi: check that a reference is real, chart a table from a PDF, link a note to a PDF page and bring a library across from Zotero.'),
  page('/guides/check-references/', 'article', 'Check references', 'How to check that a reference is real or retracted · Volpi',
    'Check a reference against Crossref, OpenAlex, arXiv or PubMed in Volpi: what each badge means, what to do about a mismatch and what a check cannot tell you.'),
  page('/guides/chart-a-table-from-a-pdf/', 'article', 'Chart a PDF table', 'How to chart a PDF table or save it as CSV · Volpi',
    'Turn a table in a PDF into a chart, a CSV file or a note in Volpi, including tables without a caption, and the limits to know about.'),
  page('/guides/link-a-note-to-a-pdf-page/', 'article', 'Link a note to a PDF page', 'How to link a Markdown note to a PDF page · Volpi',
    'Write a link from a Markdown note to a PDF, or to one page of it, in Volpi. The link syntax, starting from a highlight, and what happens when files move.'),
  page('/guides/move-references-from-zotero/', 'article', 'Bring references from Zotero', 'Move references from Zotero or Mendeley to Volpi · Volpi',
    'Bring your references from Zotero, Mendeley or EndNote into Volpi with BibTeX, RIS or CSL JSON: the steps, what comes across and what stays behind.'),

  page('/formats/', 'hub', 'Formats', 'Reference formats and citation styles in Volpi · Volpi',
    'How Volpi reads and writes BibTeX, RIS and CSL JSON, field by field, and the six citation styles it formats: APA, IEEE, MLA, Chicago, Harvard and Vancouver.'),
  page('/formats/bibtex/', 'article', 'BibTeX', 'BibTeX (.bib): import, export and limits · Volpi',
    'How Volpi imports and exports BibTeX: pasting entries, the references.bib kept in each project, the fields and entry types written, and the limits of this version.'),
  page('/formats/ris/', 'article', 'RIS', 'RIS (.ris): import, export and tags read · Volpi',
    'How Volpi reads and writes RIS files from EndNote, Zotero and Mendeley: the tags it understands, what it skips and how to export.'),
  page('/formats/csl-json/', 'article', 'CSL JSON', 'CSL JSON: import and export references · Volpi',
    'How Volpi reads and writes CSL JSON, the reference format used by Zotero and Pandoc: accepted shapes, the fields kept and how to export.'),
  page('/formats/citation-styles/', 'article', 'Citation styles', 'Citation styles: APA, IEEE, MLA, Chicago and more · Volpi',
    'The six citation styles in Volpi 0.1.1 (APA 7, IEEE, MLA 9, Chicago author-date, Harvard and Vancouver), where they apply and what to do if you need another.'),

  page('/vs/', 'hub', 'Compare', 'Volpi compared with Zotero, Obsidian and others · Volpi',
    'How Volpi compares with Zotero, Mendeley, Obsidian, Notion and Scrivener for research, with sources, including where the other tool is the better choice.'),
  page('/vs/zotero/', 'article', 'Zotero', 'Volpi and Zotero compared for research · Volpi',
    'Volpi and Zotero side by side: price, platforms, PDF highlights, citation styles, word processors and sharing, where Zotero is better, and how to use both.'),
  page('/vs/mendeley/', 'article', 'Mendeley', 'Volpi and Mendeley compared for research · Volpi',
    'Volpi and Mendeley Reference Manager side by side: accounts and cloud storage, citation styles, Word, sharing and AI, and where Mendeley is the better choice.'),
  page('/vs/obsidian/', 'article', 'Obsidian', 'Volpi and Obsidian compared for research notes · Volpi',
    'Volpi and Obsidian side by side: Markdown notes, links and graph, PDF highlights, references, plug-ins and sync, and where Obsidian is the better choice.'),
  page('/vs/notion/', 'article', 'Notion', 'Volpi and Notion compared for researchers · Volpi',
    'Volpi and Notion side by side: where your data lives, offline use, working with others, charts and AI, and where Notion is the better choice.'),
  page('/vs/scrivener/', 'article', 'Scrivener', 'Volpi and Scrivener compared for academic writing · Volpi',
    'Volpi and Scrivener side by side for papers and theses: price, platforms, organising a long text, citations and export, and where Scrivener is better.'),
];

/** The last part of a path: "/docs/reading/" gives "reading". */
export const slugOf = (path: string) => path.replace(/\/$/, '').split('/').pop() ?? '';

/** The HTML file a route is built into: "/docs/reading/" gives "docs/reading/index.html". */
export const fileOf = (route: Route) => `${route.path.slice(1)}index.html`;

/** The pages above a route, nearest last, for breadcrumb trails. */
export function trailOf(route: Route): Route[] {
  const parts = route.path.split('/').filter(Boolean);
  const paths = ['/', ...parts.map((_, i) => `/${parts.slice(0, i + 1).join('/')}/`)];
  return paths.map((p) => ROUTES.find((r) => r.path === p)).filter((r): r is Route => !!r);
}

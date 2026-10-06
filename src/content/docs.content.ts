import type { DocSection, Fact, Shortcut } from '@/types/content';
import { feature, windowShot } from './media.content';

/** Product facts follow the app's release notes (../Volpi/src/features/changelog/entries.ts). */
export const DOCS_HEAD = {
  kicker: 'Documentation · v0.1.0',
  title: 'Documentation.',
  text: 'How Volpi works in the first beta: every feature, the words it uses, link syntax, file formats, shortcuts and known limits.',
  tour: { label: 'Prefer pictures? Take the features tour', href: '/features/' },
  tourShort: 'See it in the tour',
  banner: 'The open beta is releasing very soon. This page describes that first build.',
};

export const DOC_SECTIONS: DocSection[] = [
  {
    id: 'branches', title: 'Research branches',
    intro: 'A branch is one project. It is a plain folder on your disk.',
    image: windowShot('home', 'The Home screen with recent branches and the update log.'),
    features: [
      { title: 'Plain folders', text: 'Every branch is an ordinary folder. Open it in any file manager.' },
      { title: 'Import anything', text: 'Import any file type. Originals are copied, never changed.' },
      { title: 'Branch dashboard', text: 'Recent work, reading progress, files that need attention and reference problems.' },
      { title: 'Local profiles', text: 'Separate workspaces on one computer, each with its own branches and settings.' },
    ],
  },
  {
    id: 'reading', title: 'Reading PDFs',
    intro: 'Highlight, comment and quote without touching the original.',
    image: feature('pdf', 'A PDF page with coloured highlights next to its comment cards.'),
    features: [
      { title: 'Highlights and comments', text: 'Saved in a small file beside the PDF.' },
      { title: 'Links from a page', text: 'Link a PDF page to notes and other files in the branch.' },
      { title: 'Annotated copy', text: 'Export a copy of the PDF with your highlights in it.' },
      { title: 'Smooth scrolling', text: 'Pages render nearest first and stay cached, so long PDFs keep up.' },
      { title: 'Reading modes', text: 'Paper, Aged and Night page colours.' },
    ],
  },
  {
    id: 'notes', title: 'Notes and links',
    intro: 'Markdown notes that link to papers, pages, data and figures.',
    image: feature('graph', 'The research graph with labelled notes and files.'),
    features: [
      { title: 'Markdown', text: 'Notes are .md files. Edit, split view or reading view.' },
      { title: 'Two link styles', text: 'Write <name> or [text](name). Add #page=3 to land on a page.' },
      { title: 'Link-safe rename', text: 'Move or rename a file and every link to it is updated.' },
      { title: 'Research graph', text: 'See how notes, papers and figures connect.' },
    ],
  },
  {
    id: 'data', title: 'Data and charts',
    intro: 'Check a dataset for problems, then chart it.',
    image: feature('data', 'A data health check with a score, missing cells and outliers.'),
    features: [
      { title: 'Data health', text: 'CSV, TSV and JSON are checked for gaps, typos in labels and outliers.' },
      { title: 'Charts', text: 'Bar, line, scatter and more, with your own titles and labels.' },
      { title: 'Tables from PDFs', text: 'Draw a box around a table in a PDF and chart it.' },
      { title: 'SVG figures', text: 'Save charts as SVG, ready for a paper.' },
    ],
  },
  {
    id: 'papers', title: 'Writing papers',
    intro: 'Papers are .vdoc files, which are plain HTML inside.',
    image: feature('paper', 'The paper editor with comment threads from colleagues.'),
    features: [
      { title: 'Structure', text: 'Numbered sections, figures, tables and equations, footnotes and cross-references.' },
      { title: 'Review', text: 'Comments and tracked changes.' },
      { title: 'Word and PDF', text: 'Export to Word and PDF. Import from Word.' },
    ],
  },
  {
    id: 'references', title: 'References and citations',
    intro: 'A reference library with checks against public databases.',
    image: feature('references', 'The reference library with verification badges.'),
    features: [
      { title: 'Verification', text: 'Checked in Crossref, OpenAlex, arXiv and PubMed. Verified, Likely, Mismatch, Not found or Retracted, with the reason. See Reference checks below.' },
      { title: 'Papers recognised on import', text: 'A PDF that looks like a paper gets its own citation. Its reference list can be matched too.' },
      { title: 'Six styles', text: 'APA, IEEE, MLA, Chicago, Harvard and Vancouver.' },
      { title: 'Export', text: 'BibTeX, RIS and CSL-JSON.' },
    ],
  },
  {
    id: 'library', title: 'Library and search',
    intro: 'Organise a large project and search it.',
    image: feature('search', 'Search results across notes, papers, data and highlights.'),
    features: [
      { title: 'Folders and tags', text: 'Nested folders, tags, reading status, stars and smart views.' },
      { title: 'Bulk actions', text: 'Move, tag or mark many files at once.' },
      { title: 'Quick open', text: 'Ctrl+P opens any file by name.' },
      { title: 'Search everywhere', text: 'File names, notes, PDF text and highlights, in one branch or all recent ones.' },
      { title: 'Shelf view', text: 'Shows your papers as book spines. Taller spines are larger files.' },
      { title: 'Branch check', text: 'Finds broken links and files that need attention.' },
    ],
  },
  {
    id: 'desk', title: 'Saving, history and focus',
    intro: 'How your work is saved, and the tools for working without distraction.',
    image: windowShot('zen', 'Zen mode with only the paper and the focus timer.'),
    features: [
      { title: 'Automatic saving', text: 'Changes are saved as you work. A stamp in the title bar shows it.' },
      { title: 'Undo and history', text: 'Undo per editor. Revert or restore any change to the branch.' },
      { title: 'Launchpad', text: 'Pin the files and websites you return to most.' },
      { title: 'Themes', text: 'Day and Night, with indigo, crimson or matcha ink.' },
      { title: 'Zen mode and focus timer', text: 'Hide everything but the page. Work in 25 minute sessions.' },
      { title: 'Mochi', text: 'An optional guide with tips. Switch her off in Settings.' },
    ],
  },
];

export const SHORTCUTS: Shortcut[] = [
  { keys: ['Ctrl', 'P'], action: 'Open a file by name' },
  { keys: ['Ctrl', 'Z'], action: 'Undo in the open editor' },
  { keys: ['Ctrl', 'S'], action: 'Save now' },
  { keys: ['Space'], action: 'Hold to pan a PDF' },
  { keys: ['Ctrl', 'Wheel'], action: 'Zoom a PDF around the pointer' },
  { keys: ['Esc'], action: 'Leave Zen mode' },
];

export const LIMITS_HEAD = { title: 'Known limits', intro: 'Known limitations of the first beta.' };

export const LIMITS: Fact[] = [
  { title: 'No OCR', text: 'Scanned PDFs without a text layer cannot be searched, quoted or recognised as papers.' },
  { title: 'Reference lists are read by rules', text: 'Unusual layouts can split or merge entries. Nothing is added without your choice.' },
  { title: 'Books and older works', text: 'They often show Likely or Not found even when they are real.' },
  { title: 'Verification is not fact-checking', text: 'A verified reference exists. Volpi cannot tell if it supports your sentence.' },
  { title: 'Passwords lock, they do not encrypt', text: 'Branch folders stay ordinary files on disk.' },
  { title: 'No sync', text: 'Profiles and branches are not synced between devices.' },
  { title: 'Large PDFs on Linux', text: 'Very large PDFs may be slower in the Linux window.' },
  { title: 'Import limits', text: 'No whole-folder import or password-protected PDFs yet. Files over 512 MB cannot be imported.' },
];

export const NEXT_HEAD = {
  title: 'What comes next',
  intro: 'Planned after the open beta. No dates, and the order may change.',
  roadmap: { label: 'See the full roadmap', href: '/roadmap/' },
};

export const NEXT: Fact[] = [
  { title: 'Mac and Windows builds', text: 'Linux comes first.' },
  { title: 'OCR for scanned PDFs', text: 'So older scans can be searched and quoted.' },
  { title: 'Whole-folder import', text: 'Bring an existing library across in one step.' },
  { title: 'Word and Excel text in search', text: 'Find words inside .docx and .xlsx files.' },
  { title: 'PDF and note side by side', text: 'Read on one side, write on the other.' },
];

export const PRICING = {
  title: 'Price and licence',
  text: 'The open beta is free for everyone to download. Version 1.0 will be a one-time purchase, not a subscription. The price will be announced on this website before version 1.0. Volpi is not open source: its GitHub repository holds this documentation and bug reports, not the app.',
};

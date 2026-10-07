import type { DocSection, Fact, Shortcut } from '@/types/content';
import { feature, windowShot } from './media.content';

/** Product facts follow the app's release notes (../Volpi/src/features/changelog/entries.ts). */
export const DOCS_HEAD = {
  kicker: 'Documentation · v0.1.0',
  title: 'Documentation.',
  text: 'How Volpi works in the first beta: every feature, the words it uses, link syntax, file formats, shortcuts and known limits.',
  tour: { label: 'Prefer pictures? Take the features tour', href: '/features/' },
  tourShort: 'See it in the tour',
  banner: 'The open beta is out. This page describes version 0.1.0.',
};

export const DOC_SECTIONS: DocSection[] = [
  {
    id: 'branches', title: 'Research branches',
    intro: 'A branch is one project. It is a plain folder on your disk.',
    image: windowShot('home', 'The Home screen with recent branches and the update log.'),
    features: [
      { title: 'Plain folders', text: 'Every branch is an ordinary folder. Open it in any file manager.' },
      { title: 'Import anything', text: 'Import any file type. Originals are copied, never changed.' },
      { title: 'Branch dashboard', text: 'Recent work, reading progress, files that need attention and reference problems. Recent changes shows what changed in each file.' },
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
      { title: 'Picture tools', text: 'Open a picture to crop it (any shape or a fixed one), turn or flip it, make it greyscale, or change its brightness and contrast. Save a copy writes a new picture and never changes the original. PNG, JPEG, GIF, WebP, AVIF, BMP, SVG and TIFF open.' },
    ],
  },
  {
    id: 'papers', title: 'Writing papers',
    intro: 'Papers are .vdoc files, which are plain HTML inside.',
    image: feature('paper', 'The paper editor with comment threads from colleagues.'),
    features: [
      { title: 'Structure', text: 'Numbered sections, figures, tables and equations, footnotes and cross-references.' },
      { title: 'Review', text: 'Comment threads in the paper. The page shows no tracked changes; Versions keeps every one of them.' },
      { title: 'Versions', text: 'Compare a file with an earlier version, with added words underlined and removed words struck through, and bring back earlier text. Save a version with a short note to keep how every file looks at that moment.' },
      { title: 'Export formats', text: 'OpenDocument (.odt), Word (.docx), PDF, Rich Text, web page (HTML), Markdown, LaTeX and plain text. On Linux, OpenDocument is listed first. Word import is unchanged.' },
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
      { title: 'Search everywhere', text: 'File names, notes, PDF text and highlights, in one branch or all recent ones. It also finds words inside Word documents (footnotes and comments too) and Excel workbooks, where a match shows its sheet and row.' },
      { title: 'Right-click menus', text: 'Right-click any file or folder for its actions. With several files selected, the menu acts on all of them.' },
      { title: 'Side by side', text: 'Open up to three files in panes next to each other, or follow a link as a peek.' },
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
      { title: 'Undo and history', text: 'Undo per editor. Revert or restore any change to the branch, or open Versions to see them by day.' },
      { title: 'Launchpad', text: 'Pin the files and websites you return to most.' },
      { title: 'Themes', text: 'Day and Night, with indigo, crimson or matcha ink.' },
      { title: 'Night light', text: 'A warm tint over the whole window for reading in the evening. Choose Soft, Warm or Warmer in Settings.' },
      { title: 'Zen mode and focus timer', text: 'Zen makes the window full screen and shows only the page. Ctrl+Tab switches files without leaving it. Work in 25 minute sessions with the focus timer.' },
      { title: 'Mochi', text: 'An optional guide with tips. Switch her off in Settings.' },
    ],
  },
];

export const SHORTCUTS: Shortcut[] = [
  { keys: ['Ctrl', 'P'], action: 'Find a file by name' },
  { keys: ['Ctrl', 'Tab'], action: 'Switch to a recent file (hold Ctrl and press Tab again for older ones)' },
  { keys: ['Ctrl', 'Page Down'], action: 'Next file in the folder' },
  { keys: ['Ctrl', 'Page Up'], action: 'Previous file in the folder' },
  { keys: ['Ctrl', '1'], action: 'Go to the first pane (Ctrl+2 and Ctrl+3 for the second and third)' },
  { keys: ['Ctrl', 'W'], action: 'Close the pane' },
  { keys: ['Ctrl', 'N'], action: 'New note' },
  { keys: ['Ctrl', 'Shift', 'N'], action: 'New paper' },
  { keys: ['F2'], action: 'Rename the open file' },
  { keys: ['Ctrl', 'Shift', 'M'], action: 'Move the open file' },
  { keys: ['Ctrl', 'Shift', 'H'], action: 'Versions of the open file' },
  { keys: ['Ctrl', 'Alt', 'S'], action: 'Save a version of the branch' },
  { keys: ['Ctrl', 'S'], action: 'Save now' },
  { keys: ['Ctrl', 'Z'], action: 'Undo in the open editor (Ctrl+Y redoes)' },
  { keys: ['Ctrl', 'Shift', 'F'], action: 'Search the branch' },
  { keys: ['F11'], action: 'Zen on and off (Esc leaves)' },
  { keys: ['Ctrl', '/'], action: 'List every shortcut' },
  { keys: ['Space'], action: 'Hold to pan a PDF' },
  { keys: ['Ctrl', 'Wheel'], action: 'Zoom a PDF or paper' },
];

export const LIMITS_HEAD = { title: 'Known limits', intro: 'Known limitations of the first beta.' };

export const LIMITS: Fact[] = [
  { title: 'No OCR', text: 'Scanned PDFs without a text layer cannot be searched, quoted or recognised as papers.' },
  { title: 'Reference lists are read by rules', text: 'Unusual layouts can split or merge entries. Nothing is added without your choice.' },
  { title: 'Books and older works', text: 'They often show Likely or Not found even when they are real.' },
  { title: 'Verification is not fact-checking', text: 'A verified reference exists. Volpi cannot tell if it supports your sentence.' },
  { title: 'Passwords lock, they do not encrypt', text: 'Branch folders stay ordinary files on disk.' },
  { title: 'No sync', text: 'Profiles and branches are not synced between devices.' },
  { title: 'Tables without captions', text: 'Volpi finds a PDF table from its caption. For one without a caption, select it with the Chart tool.' },
  { title: 'Large PDFs on Linux', text: 'Very large or image-heavy PDFs can still stutter on Linux, and a page may stay blank for a moment when you scroll fast.' },
  { title: 'Empty folders', text: 'A new empty folder only appears on disk once a file is placed in it.' },
  { title: 'Newer history format', text: 'Branches opened with this build cannot be opened by earlier test builds.' },
  { title: 'Import and search limits', text: 'No whole-folder import or password-protected PDFs yet. Search reads Word (.docx) and Excel (.xlsx) files, not older .doc or .xls. Files over 512 MB cannot be imported.' },
];

export const NEXT_HEAD = {
  title: 'What comes next',
  intro: 'Planned after the open beta. No dates, and the order may change.',
  roadmap: { label: 'See the full roadmap', href: '/roadmap/' },
};

export const NEXT: Fact[] = [
  { title: 'OCR for scanned PDFs', text: 'So older scans can be searched and quoted.' },
  { title: 'Whole-folder import', text: 'Bring an existing library across in one step.' },
];

export const PRICING = {
  title: 'Price and licence',
  text: 'The open beta is free for everyone to download. Version 1.0 will be a one-time purchase, not a subscription. The price will be announced on this website before version 1.0. Volpi is not open source: its GitHub repository holds this documentation and bug reports, not the app.',
};

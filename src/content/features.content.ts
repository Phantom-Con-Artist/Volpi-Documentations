import type { FeatureChapter } from '@/types/content';
import { feature, windowCrop } from './media.content';

export const FEATURES_HEAD = {
  kicker: 'Features · v0.1.0',
  title: 'Everything Volpi does.',
  text: 'Reading, notes, references, data and writing, in one app. Here is the tour, with screenshots and the occasional joke.',
  docsLink: 'Details in the docs',
};

export const FEATURE_CHAPTERS: FeatureChapter[] = [
  {
    id: 'projects', docId: 'branches', kicker: 'Projects', title: 'Every project is a folder.',
    joke: 'No hidden database to export from in a panic the night before submission. If you ever stop using Volpi, your work is still right there in your file manager.',
    highlights: ['A dashboard for recent work, reading progress and what needs attention.', 'Separate profiles on one computer, each with its own projects.'],
    images: [
      feature('dashboard', 'The project dashboard: recent files, papers in progress, reading progress and items that need attention.'),
      windowCrop('dashboard-changes', 'The overview with Recent changes, listing what changed in each file.', true),
    ],
  },
  {
    id: 'reading', docId: 'reading', kicker: 'Reading', title: 'Highlight like you mean it.',
    joke: 'Highlight half the paper if you must. Highlights live in a small file beside the PDF, so the original stays exactly as the journal sent it.',
    highlights: ['Comments on any highlight.', 'Link a page to your notes.', 'Paper, Aged and Night page colours, and a warm night light.', 'Export a copy with your highlights in it.'],
    images: [
      feature('pdf', 'A PDF page with coloured highlights next to its comment cards.'),
      windowCrop('pdf-night', 'A journal article in the Night reading mode, with highlights in the side panel.'),
      windowCrop('night-light', 'A PDF with the page colour and Night light menu open, Warm selected.', true),
    ],
  },
  {
    id: 'notes', docId: 'notes', kicker: 'Notes and links', title: 'Notes that know their sources.',
    joke: 'Link a note to the exact page a claim came from. Three months from now, at 2 a.m., you will be very glad you did.',
    highlights: ['Markdown notes that link to a paper, or a page of it.', 'Rename a file and every link follows.', 'A graph of how everything connects.'],
    images: [
      windowCrop('note-split', 'A Markdown note in split view: the source on the left and the formatted note with links on the right.'),
      feature('graph', 'The research graph with labelled notes and files.'),
    ],
  },
  {
    id: 'references', docId: 'references', kicker: 'References', title: 'References, checked.',
    joke: 'Volpi asks Crossref, OpenAlex, arXiv and PubMed whether each reference exists, so Reviewer 2 has one less thing to write about.',
    highlights: ['APA, IEEE, MLA, Chicago, Harvard and Vancouver.', 'Export to BibTeX, RIS and CSL-JSON.'],
    note: 'It checks that a reference exists. It cannot check that the paper says what you hope it says.',
    images: [feature('references', 'The reference library with Verified, Likely, Mismatch and Not found badges.')],
  },
  {
    id: 'data', docId: 'data', kicker: 'Data and charts', title: 'Look at your data before reviewers do.',
    joke: 'Find the participant whose age is 999 before they turn up in Figure 3. Then make the chart and save it as SVG.',
    highlights: ['Checks CSV, TSV and JSON for gaps, label typos and outliers.', 'Bar, line, scatter and more.', 'Volpi finds captioned tables in a PDF: chart one, save it as CSV or put it in a note.', 'Charts saved as SVG.', 'Crop, turn and adjust pictures. Save a copy and the original stays as it was.'],
    images: [
      feature('data', 'A data health check with a score of 94, missing cells, outliers and what to check.'),
      feature('chart', 'The chart builder with a scatter plot and its options.'),
      windowCrop('picture-adjust', 'The picture tools on a bar chart, with the Adjust menu showing Greyscale, Brightness and Contrast.', true),
    ],
    clips: [{ name: 'picture-tools', label: 'Cropping and adjusting a picture, then saving a copy.' }],
  },
  {
    id: 'papers', docId: 'papers', kicker: 'Writing papers', title: 'Write where your sources are.',
    joke: 'Cite from your library as you type. Comments stay in the paper, and Versions keeps every change. When your supervisor insists on Word, export to Word, or to OpenDocument, LaTeX or PDF.',
    highlights: ['Four numbered heading levels, an outline, and a table of contents that stays up to date.', 'Type $$ on its own line for a numbered equation.', 'Comments, with every change kept in Versions. Compare, and bring back earlier text.', 'Export to OpenDocument, Word, PDF, LaTeX and more.'],
    images: [
      windowCrop('paper-pages', 'The paper editor in page view, showing the title, abstract and first section.', true),
      feature('paper', 'The paper editor with comment threads in the side panel.'),
      windowCrop('versions', 'Versions beside a paper: four words added and one removed, with added words underlined and removed words struck through.', true),
      windowCrop('export', 'The Export menu of a paper: OpenDocument, Word, PDF, Rich Text, web page, Markdown, LaTeX and plain text.', true),
    ],
    clips: [{ name: 'versions', label: 'Opening the versions of a paper and comparing it with an earlier one.' }],
  },
  {
    id: 'library', docId: 'library', kicker: 'Library and search', title: 'Find it again.',
    joke: 'Search looks through file names, notes, PDF text and highlights. Yes, that quote from last spring too.',
    highlights: ['Folders, tags, stars and reading status.', 'Up to three files side by side, or a link as a peek.', 'Ctrl+P opens any file by name. Ctrl+/ lists every shortcut.', 'Right-click a file or several for their actions.', 'Search reads Word and Excel files too.'],
    images: [
      feature('search', 'Search results across notes, papers, data and highlights.'),
      feature('library', 'The file list: fourteen papers with tags and their reading status.', false),
      windowCrop('context-menu', 'The file list with a right-click menu open: Open, Open beside, reading status, Star, Tags, Rename, Move to, Earlier versions and Remove.', true),
      windowCrop('shortcuts', 'The keyboard shortcuts sheet, opened with Ctrl+/.', true, 1500),
    ],
  },
  {
    id: 'focus', docId: 'desk', kicker: 'Focus', title: 'Nothing pinging you.',
    joke: 'No notifications, no badges, no streaks. Zen mode fills the screen with the page and nothing else.',
    highlights: ['Zen fills the screen. Ctrl+Tab switches files without leaving it.', 'A 25 minute focus timer.', 'Changes save as you work. If Volpi closes unexpectedly, unsaved edits are kept in a recovery journal.', 'Undo in every editor, and a history you can restore from.'],
    images: [
      windowCrop('zen', 'Zen mode: only the paper and the focus timer are visible.', true, 1500),
      windowCrop('switcher', 'The recent files switcher open over a paper in Zen mode.', true, 1500),
    ],
    clips: [{ name: 'zen-switch', label: 'Switching between files with Ctrl+Tab without leaving Zen mode.' }],
  },
  {
    id: 'later', docId: 'next', kicker: 'Coming later', title: 'What is next.',
    joke: 'The big plans, with no dates attached. We would rather be right than early, and Mochi would rather nap.',
    highlights: ['OCR, so scanned PDFs can be searched and quoted.', 'Whole-folder import for an existing library.', 'Extensions, written in the language you already use.', 'Machine-learning tools you build yourself, running on your own computer.'],
    note: 'These are plans, not promises. The roadmap has the order, and it may change.',
    images: [],
  },
];

export const FEATURES_CODA = {
  title: 'Seen enough?',
  text: 'The open beta is free for everyone. Download it, or join the Discord and tell us what you need.',
  docs: 'Read the documentation',
};

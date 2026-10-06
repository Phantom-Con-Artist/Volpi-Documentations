import type { FeatureChapter } from '@/types/content';
import { feature, windowCrop } from './media.content';

export const FEATURES_HEAD = {
  kicker: 'Features · v0.1.0',
  title: 'Everything Volpi does.',
  text: 'Reading, notes, references, data and writing, in one app. Here is the tour, with screenshots and the occasional joke.',
  index: 'Jump to',
  docsLink: 'Details in the docs',
};

export const FEATURE_CHAPTERS: FeatureChapter[] = [
  {
    id: 'projects', docId: 'branches', kicker: 'Projects', title: 'Every project is a folder.',
    joke: 'No hidden database to export from in a panic the night before submission. If you ever stop using Volpi, your work is still right there in your file manager.',
    highlights: ['A dashboard for recent work, reading progress and what needs attention.', 'Separate profiles on one computer, each with its own projects.'],
    images: [feature('dashboard', 'The project dashboard: recent files, papers in progress, reading progress and items that need attention.')],
  },
  {
    id: 'reading', docId: 'reading', kicker: 'Reading', title: 'Highlight like you mean it.',
    joke: 'Highlight half the paper if you must. Highlights live in a small file beside the PDF, so the original stays exactly as the journal sent it.',
    highlights: ['Comments on any highlight.', 'Link a page to your notes.', 'Paper, Aged and Night page colours.', 'Export a copy with your highlights in it.'],
    images: [
      feature('pdf', 'A PDF page with coloured highlights next to its comment cards.'),
      windowCrop('pdf-night', 'A journal article in the Night reading mode, with highlights in the side panel.'),
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
    highlights: ['Checks CSV, TSV and JSON for gaps, label typos and outliers.', 'Bar, line, scatter and more.', 'Draw a box around a table in a PDF and chart it.', 'Charts saved as SVG.'],
    images: [
      feature('data', 'A data health check with a score of 94, missing cells, outliers and what to check.'),
      feature('chart', 'The chart builder with a scatter plot and its options.'),
    ],
  },
  {
    id: 'papers', docId: 'papers', kicker: 'Writing papers', title: 'Write where your sources are.',
    joke: 'Cite from your library as you type. Comments and tracked changes stay in the paper. When your supervisor insists on Word, export to Word.',
    highlights: ['Sections, figures, tables, equations and footnotes.', 'Comments and tracked changes.', 'Export to Word and PDF.'],
    images: [
      windowCrop('paper-pages', 'The paper editor in page view, showing the title, abstract and first section.', true),
      feature('paper', 'The paper editor with comment threads in the side panel.'),
    ],
  },
  {
    id: 'library', docId: 'library', kicker: 'Library and search', title: 'Find it again.',
    joke: 'Search looks through file names, notes, PDF text and highlights. Yes, that quote from last spring too.',
    highlights: ['Folders, tags, stars and reading status.', 'Ctrl+P opens any file by name.'],
    images: [
      feature('search', 'Search results across notes, papers, data and highlights.'),
      feature('library', 'The file list: fourteen papers with tags and their reading status.', false),
    ],
  },
  {
    id: 'focus', docId: 'desk', kicker: 'Focus', title: 'Nothing pinging you.',
    joke: 'No notifications, no badges, no streaks. Zen mode hides everything but the page.',
    highlights: ['A 25 minute focus timer.', 'Changes save as you work, with a stamp in the title bar.', 'Undo in every editor, and a history you can restore from.'],
    images: [windowCrop('zen', 'Zen mode: only the paper and the focus timer are visible.', true, 1500)],
  },
];

export const FEATURES_CODA = {
  title: 'Seen enough?',
  text: 'The open beta is free for everyone. Join the Discord to hear when it is out.',
  docs: 'Read the documentation',
};

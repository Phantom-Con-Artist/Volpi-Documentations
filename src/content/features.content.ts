import type { FeatureChapter } from '@/types/content';
import { feature, windowCrop } from './media.content';

export const FEATURES_HEAD = {
  kicker: 'Features · v0.1.0',
  title: 'Everything Volpi does.',
  text: 'Reading, notes, references, data and writing, in one quiet desk. Here is the full tour, with fewer buzzwords than most.',
  index: 'Jump to',
};

export const FEATURE_CHAPTERS: FeatureChapter[] = [
  {
    id: 'projects', docId: 'branches', kicker: 'Projects', title: 'Every project is a folder.',
    joke: 'No hidden database to export from in a panic the night before submission. If you ever stop using Volpi, your work is still right there in your file manager.',
    images: [feature('dashboard', 'The project dashboard: recent files, papers in progress, reading progress and items that need attention.')],
  },
  {
    id: 'reading', docId: 'reading', kicker: 'Reading', title: 'Highlight like you mean it.',
    joke: 'Highlight half the paper if you must. Highlights live in a small file beside the PDF, so the original stays exactly as the journal sent it.',
    images: [
      feature('pdf', 'A PDF page with coloured highlights next to its comment cards.'),
      windowCrop('pdf-night', 'A journal article in the Night reading mode, with highlights in the side panel.'),
    ],
  },
  {
    id: 'notes', docId: 'notes', kicker: 'Notes and links', title: 'Notes that know their sources.',
    joke: 'Link a note to the exact page a claim came from. Three months from now, at 2 a.m., you will be very glad you did.',
    images: [
      windowCrop('note-split', 'A Markdown note in split view: the source on the left and the formatted note with links on the right.'),
      feature('graph', 'The research graph with labelled notes and files.'),
    ],
  },
  {
    id: 'references', docId: 'references', kicker: 'References', title: 'References, checked.',
    joke: 'Volpi asks Crossref, OpenAlex, arXiv and PubMed whether each reference exists, so Reviewer 2 has one less thing to write about.',
    note: 'It checks that a reference exists. It cannot check that the paper says what you hope it says.',
    images: [feature('references', 'The reference library with Verified, Likely, Mismatch and Not found badges.')],
  },
  {
    id: 'data', docId: 'data', kicker: 'Data and charts', title: 'Look at your data before reviewers do.',
    joke: 'Find the participant whose age is 999 before they turn up in Figure 3. Then make the chart and save it as SVG.',
    images: [
      feature('data', 'A data health check with a score of 94, missing cells, outliers and what to check.'),
      feature('chart', 'The chart builder with a scatter plot and its options.'),
    ],
  },
  {
    id: 'papers', docId: 'papers', kicker: 'Writing papers', title: 'Write where your sources are.',
    joke: 'Cite from your library as you type. Comments and tracked changes stay in the paper, and it exports to Word for the day your supervisor insists.',
    images: [
      windowCrop('paper-pages', 'The paper editor in page view, showing the title, abstract and first section.', true),
      feature('paper', 'The paper editor with comment threads in the side panel.'),
    ],
  },
  {
    id: 'library', docId: 'library', kicker: 'Library and search', title: 'Find it again.',
    joke: 'Search looks through file names, notes, PDF text and highlights. Yes, that quote from last spring too.',
    images: [
      feature('search', 'Search results across notes, papers, data and highlights.'),
      feature('library', 'The file list: fourteen papers with tags and their reading status.', false),
    ],
  },
  {
    id: 'focus', docId: 'desk', kicker: 'Focus', title: 'A desk that stays quiet.',
    joke: 'No notifications, no badges, no streaks. Zen mode hides everything but the page, and the timer runs 25 minute sessions. Snacks not included.',
    images: [windowCrop('zen', 'Zen mode: only the paper and the focus timer are visible.', true, 1500)],
  },
];

export const FEATURES_CODA = {
  title: 'Seen enough?',
  text: 'The open beta is free for everyone. Join the Discord to hear when it is out.',
  docs: 'Read the documentation',
};

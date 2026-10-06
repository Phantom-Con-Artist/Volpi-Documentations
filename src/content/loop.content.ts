import type { FeatureTile, LoopStep } from '@/types/content';
import { feature, windowCrop } from './media.content';

export const LOOP_HEAD = { kicker: 'No. 02', title: 'What you can do.', chapter: '第二話' };

export const LOOP_STEPS: LoopStep[] = [
  {
    id: 'open', kicker: 'Open', title: 'Open a project.',
    text: 'A project is a folder on your disk. Open it and the dashboard shows recent work, reading progress and what needs attention.',
    clip: { name: 'open-vault', label: 'Opening a project from the Home screen, then a tour of its dashboard.' },
  },
  {
    id: 'read', kicker: 'Read', title: 'Highlight PDFs.',
    text: 'Highlight text and add comments. The original PDF is not changed.',
    clip: { name: 'pdf-highlight', label: 'Highlighting a sentence in a PDF and writing a margin comment.' },
  },
  {
    id: 'link', kicker: 'Link', title: 'Link notes to sources.',
    text: 'Type a file name in angle brackets to link a note to a paper or a page of it.',
    clip: { name: 'note-link', label: 'Writing a note that links to a PDF, with the preview beside it.' },
  },
  {
    id: 'graph', kicker: 'Graph', title: 'See how files connect.',
    text: 'The research graph shows every link. Select a note to see its connections.',
    clip: { name: 'graph', label: 'The research graph, with one note selected and its links drawn.' },
  },
  {
    id: 'analyse', kicker: 'Analyse', title: 'Check and chart data.',
    text: 'Open a CSV to see missing values and outliers. Make a chart and save it as SVG.',
    clip: { name: 'chart', label: 'Checking a dataset and building a scatter chart.' },
  },
  {
    id: 'write', kicker: 'Write', title: 'Write papers.',
    text: 'Cite from your reference library as you write. Export to Word or PDF.',
    clip: { name: 'paper-write', label: 'Typing into a paper, shown as a tracked change.' },
  },
  {
    id: 'find', kicker: 'Search', title: 'Search all projects.',
    text: 'Search file names, notes, PDF text and highlights in one project or all of them.',
    clip: { name: 'search', label: 'Searching across notes, papers, data and highlights.' },
  },
  {
    id: 'focus', kicker: 'Focus', title: 'Work without distractions.',
    text: 'Zen mode hides everything but the page. Start the focus timer for a 25 minute session.',
    clip: { name: 'zen-focus', label: 'Switching on Zen mode and starting the focus timer.' },
  },
];

export const MORE_HEAD = {
  kicker: 'And more',
  title: 'More you can do.',
  text: 'The small things that save you an afternoon.',
};

export const MORE_FEATURES: FeatureTile[] = [
  {
    kicker: 'Dashboard', title: 'Pick up where you left off.',
    text: 'Recent files, papers in progress, reading progress and anything that needs attention, on one page.',
    image: feature('dashboard', 'The project dashboard: recent files, papers in progress, reading progress and items that need attention.'),
  },
  {
    kicker: 'References', title: 'Check every reference.',
    text: 'Each one is checked in Crossref, OpenAlex, arXiv and PubMed and marked Verified, Likely, Mismatch, Not found or Retracted, with the reason.',
    image: feature('references', 'The reference library with Verified, Likely, Mismatch and Not found badges.'),
  },
  {
    kicker: 'Data health', title: 'Find problems in your data.',
    text: 'Open a CSV, TSV or JSON file to see gaps, typos in labels and outliers before you chart it.',
    image: feature('data', 'A data health check with a score of 94, missing cells, outliers and what to check.'),
  },
  {
    kicker: 'Notes', title: 'Write and preview side by side.',
    text: 'Notes are Markdown. Edit on one side and see the formatted note, with its links to papers, on the other.',
    image: windowCrop('note-split', 'A Markdown note in split view: the source on the left and the formatted note with links on the right.'),
  },
  {
    kicker: 'Library', title: 'A reading list that keeps up.',
    text: 'Tags, stars and reading status for every paper. Move, tag or mark many files at once.',
    image: feature('library', 'The file list: fourteen papers with tags and their reading status.', false),
  },
  {
    kicker: 'Reading', title: 'Read late without the glare.',
    text: 'Read PDFs in Paper, Aged or Night colours. The original file is not changed.',
    image: windowCrop('pdf-night', 'A journal article shown in the Night reading mode, with highlights in the side panel.'),
  },
  {
    kicker: 'Review', title: 'Comments and tracked changes.',
    text: 'Leave comments on a paper and track every change, then export to Word or PDF.',
    image: feature('paper', 'The paper editor with comment threads in the side panel.'),
  },
  {
    kicker: 'Pages', title: 'See your paper as pages.',
    text: 'Switch to page view to see the paper laid out page by page while you write.',
    image: windowCrop('paper-pages', 'The paper editor in page view, showing the title, abstract and first section on a page.', true),
  },
];

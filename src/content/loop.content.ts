import type { LoopStep } from '@/types/content';

export const LOOP_HEAD = { kicker: 'No. 02', title: 'What you can do.', chapter: '第二話' };

export const LOOP_MORE = { label: 'See every feature', href: '/features/' };

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
    text: 'Cite from your reference library as you write. Export to OpenDocument, Word, PDF and other formats.',
    clip: { name: 'paper-write', label: 'Typing a sentence into a paper with live citations.' },
  },
  {
    id: 'versions', kicker: 'Versions', title: 'Bring back earlier text.',
    text: 'Every change is kept. Compare a file with an earlier version, with added words underlined and removed words struck through, and bring the old text back.',
    clip: { name: 'versions', label: 'Opening the versions of a paper and comparing it with an earlier one.' },
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


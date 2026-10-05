import type { LoopStep } from '@/types/content';

export const LOOP_HEAD = { kicker: 'No. 02', title: 'What you can do.', chapter: '第二話' };

export const LOOP_STEPS: LoopStep[] = [
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
];

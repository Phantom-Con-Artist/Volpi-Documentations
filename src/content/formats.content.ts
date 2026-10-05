import type { FormatRow } from '@/types/content';

export const FORMATS: FormatRow[] = [
  { label: 'Your files', items: ['Markdown', 'PDF', 'BibTeX', 'CSV', 'SVG'] },
  { label: 'References checked in', items: ['Crossref', 'OpenAlex', 'arXiv', 'PubMed'] },
  { label: 'Cite in', items: ['APA', 'IEEE', 'MLA', 'Chicago', 'Harvard', 'Vancouver'] },
];

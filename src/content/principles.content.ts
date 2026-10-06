import type { Principle } from '@/types/content';
import { feature } from './media.content';

export const PRINCIPLES_HEAD = { kicker: 'No. 01', title: 'What makes it different.', chapter: '第一話' };

export const PRINCIPLES: Principle[] = [
  {
    title: 'Files you own.',
    text: 'Each project is an ordinary folder. Notes are Markdown, and highlights sit in a small file beside the PDF. Stop using Volpi tomorrow and nothing is locked away.',
    image: feature('shelf', 'The papers of a project shown as book spines on a shelf.'),
  },
  {
    title: 'Checked references.',
    text: 'Volpi looks up each reference in Crossref, OpenAlex, arXiv and PubMed. It tells you if one is wrong, cannot be found or has been retracted, before it ends up in your paper.',
    image: feature('references', 'The reference library with Verified, Likely, Mismatch and Not found badges.'),
  },
  {
    title: 'Data, checked first.',
    text: 'Open a CSV and Volpi points out gaps, typos in labels and outliers. Then chart it and save the figure as SVG.',
    image: feature('data', 'A data health check with missing cells, outliers and what to check.'),
  },
];

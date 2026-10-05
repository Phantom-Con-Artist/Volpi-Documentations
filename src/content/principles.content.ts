import type { Principle } from '@/types/content';
import { feature, windowShot } from './media.content';

export const PRINCIPLES_HEAD = { kicker: 'No. 01', title: 'Three principles.', chapter: '第一話' };

export const PRINCIPLES: Principle[] = [
  {
    title: 'Files you own.',
    text: 'Each project is an ordinary folder. Notes are Markdown. Highlights sit beside the PDF.',
    image: feature('shelf', 'The papers of a project shown as book spines on a shelf.'),
  },
  {
    title: 'Links that do not break.',
    text: 'Rename or move a file and every link to it is updated. Undo reverses it.',
    image: feature('note', 'A Markdown note with a table and links to PDFs.'),
  },
  {
    title: 'No distractions.',
    text: 'Zen mode hides everything but the page. A focus timer runs 25 minute sessions. No notifications.',
    image: windowShot('zen', 'Zen mode: only the paper and the focus timer are visible.'),
  },
];

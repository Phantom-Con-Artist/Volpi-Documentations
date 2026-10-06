import type { Pain } from '@/types/content';

export const WHO_HEAD = { kicker: 'Prologue', chapter: '序章', title: 'Who it is for.' };

export const WHO = {
  lead: 'Research scholars who are buried in papers.',
  text: [
    'You read forty papers so you can write one. Your notes live in three apps, your PDFs live in Downloads, and the deadline lives in your head.',
    'So we put it all in one app. Your papers, notes, data and drafts sit together, so you can think about the research instead of where you put it.',
  ],
  audienceLabel: 'Made for',
  audience: ['PhD students', "Master's students", 'Postdocs', 'Independent researchers'],
  painsTitle: 'Sound familiar?',
  pains: [
    { text: '47 tabs open, all of them "to read later".' },
    { text: 'A PDF reader, a notes app, a reference manager and a spreadsheet that have never met.' },
    { text: 'The perfect quote you highlighted last spring. In some PDF. Somewhere.' },
    { text: 'A citation you are sure exists. It does not want to be found.' },
    { text: 'thesis_final_v3_REAL_final.docx', file: true },
  ] satisfies Pain[],
  punchline: 'Volpi will not write your thesis for you. It helps you find everything you need to write it.',
};

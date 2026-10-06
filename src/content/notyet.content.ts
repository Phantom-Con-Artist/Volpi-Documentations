import type { Fact } from '@/types/content';

export const NOT_YET = {
  kicker: 'No. 06',
  chapter: '第六話',
  title: 'Not yet.',
  text: 'This is the first beta. These things are not supported yet.',
  roadmap: { label: 'See the roadmap', href: '/roadmap/' },
  card: 'Beta · v0.1.0',
  items: [
    { title: 'Search inside scanned PDFs', text: 'no OCR yet' },
    { title: 'Sync between computers', text: 'use your own folder sync' },
    { title: 'Verify older books', text: 'often "not found"' },
    { title: 'Mac and Windows', text: 'Linux first' },
  ] satisfies Fact[],
};

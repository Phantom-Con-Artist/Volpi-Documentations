import type { FilmScene, FilmText } from '@/types/film';

/** The switch under the hero: read the home page, or let Mochi explain it. */
export const HOME_VIEW = {
  label: 'How to see this page',
  read: 'Read the page',
  watch: 'Watch Mochi explain',
  hint: 'Tap or swipe',
};

export const TOUR: FilmText = {
  label: 'Mochi explains Volpi: a short animated tour of this page',
  play: 'Play', pause: 'Pause', replay: 'Watch again',
  scene: 'Scene',
  transcript: 'Read the tour as text',
};

/** The home page as a film. Every fact is one the page itself states; the jokes are Mochi's. */
export const TOUR_SCENES: FilmScene[] = [
  {
    id: 'hello', title: 'The short tour', duration: 6500, set: 'title',
    mochi: { x: 650, y: 520, pose: 'wave', mood: 'happy' },
    bubble: { kind: 'speech', text: "Hi, I'm Mochi. Short on time? I'll walk you through this page. The bar below skips ahead." },
    bubbleSide: 'above',
  },
  {
    id: 'who', title: 'Who it is for', duration: 7500, set: 'tabs',
    mochi: { x: 60, y: 520, pose: 'point', mood: 'smug' },
    bubble: { kind: 'speech', text: 'Volpi is for research scholars buried in papers. Forty read to write one. Forty-seven tabs open. Sound familiar?' },
    bubbleSide: 'above',
  },
  {
    id: 'folder', title: 'Files you own', duration: 7500, set: 'folder',
    mochi: { x: 730, y: 520, pose: 'idle', mood: 'happy', flip: true },
    bubble: { kind: 'speech', text: 'Each project is a plain folder on your computer. Stop using Volpi tomorrow and every file is still right there.' },
    bubbleSide: 'above',
  },
  {
    id: 'read', title: 'Highlight PDFs', duration: 7500, set: 'highlight',
    mochi: { x: 60, y: 520, pose: 'point', mood: 'smile' },
    bubble: { kind: 'speech', text: 'Highlight a PDF as much as you like. The highlights live in a small file beside it, so the PDF never changes.' },
    bubbleSide: 'above',
  },
  {
    id: 'refs', title: 'Checked references', duration: 8000, set: 'verify',
    mochi: { x: 730, y: 520, pose: 'wave', mood: 'smug', flip: true },
    bubble: { kind: 'speech', text: 'Volpi asks Crossref, OpenAlex, arXiv and PubMed whether each reference is real. Reviewer 2 will need a new hobby.' },
    bubbleSide: 'above',
  },
  {
    id: 'data', title: 'Data, checked first', duration: 8000, set: 'data',
    mochi: { x: 60, y: 520, pose: 'idle', mood: 'angry' },
    bubble: { kind: 'shout', text: 'Open a CSV and Volpi flags gaps, label typos and outliers. A participant aged 999? Caught. Then chart it as SVG.' },
    bubbleSide: 'above',
  },
  {
    id: 'write', title: 'Write the paper', duration: 8000, set: 'write',
    mochi: { x: 730, y: 520, pose: 'point', mood: 'smile', flip: true },
    bubble: { kind: 'speech', text: 'Write beside your sources. Versions keeps every change, and the paper exports to Word, PDF, LaTeX and more.' },
    bubbleSide: 'above',
  },
  {
    id: 'local', title: 'It stays local', duration: 7500, set: 'local',
    mochi: { x: 60, y: 520, pose: 'sit', mood: 'happy' },
    bubble: { kind: 'speech', text: 'It all stays on your computer. No account, no cloud. Only reference checks go online, and you can turn them off.' },
    bubbleSide: 'above',
  },
  {
    id: 'honest', title: 'Not yet', duration: 7000, set: 'notyet',
    mochi: { x: 730, y: 520, pose: 'idle', mood: 'pout', flip: true },
    bubble: { kind: 'thought', text: 'Honesty corner: this is a beta. No OCR for scanned PDFs and no sync yet. The roadmap has the rest.' },
    bubbleSide: 'above',
  },
  {
    id: 'price', title: 'Free for now', duration: 7500, set: 'price',
    mochi: { x: 650, y: 520, pose: 'wave', mood: 'happy' },
    bubble: { kind: 'speech', text: 'The beta is free. Version 1.0 will be a one-time purchase. Pricing and the download are just below. Off you go.' },
    bubbleSide: 'above',
  },
];

/** Words drawn inside the tour's scenes. */
export const TOUR_PROPS = {
  title: 'Volpi',
  subtitle: 'The short tour, by Mochi',
  tabs: ['To read later', 'To read later', 'Also to read', 'Definitely later'],
  tabCount: '47 tabs',
  thesis: 'thesis_final_v3_REAL_final.docx',
  folder: 'My thesis',
  files: ['notes.md', 'okafor-2023.pdf', 'sleep-data.csv', 'figure-2.svg', 'references.bib'],
  pdf: 'okafor-2023.pdf',
  comment: 'Core result for chapter 2.',
  databases: ['Crossref', 'OpenAlex', 'arXiv', 'PubMed'],
  badges: [
    { text: 'Verified', sub: 'Title, author, year' },
    { text: 'Not found', sub: 'Check it yourself' },
    { text: 'Retracted', sub: 'Do not cite' },
  ],
  dataFile: 'sleep-data.csv',
  dataHead: ['id', 'age', 'score'],
  dataRows: [['01', '23', '0.71'], ['02', '31', '0.64'], ['03', '999', '0.69'], ['04', '27', '']],
  outlier: 'Outlier',
  gap: 'Missing',
  paper: 'Chapter 2.vdoc',
  added: 'stabilised',
  removed: 'fixed',
  citation: '(Okafor et al., 2023)',
  exports: ['.odt', '.docx', '.pdf', '.tex', '.md'],
  disk: 'Your computer',
  diskSub: 'No account. No cloud.',
  cloud: 'Cloud',
  notYetTitle: 'Not yet',
  notYet: ['OCR for scanned PDFs', 'Sync between computers', 'Signed installers'],
  free: { text: 'Free', sub: 'Open beta, now' },
  payOnce: { text: 'Pay once', sub: 'From v1.0' },
  below: 'Pricing below',
};

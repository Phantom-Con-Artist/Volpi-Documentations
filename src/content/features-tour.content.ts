import type { FilmScene, FilmText } from '@/types/film';
import type { ViewSwitchText } from '@/components/film/ViewSwitch';
import { VIEW_SWITCH } from './film.content';

export const FEATURES_VIEW: ViewSwitchText = { ...VIEW_SWITCH, label: 'How to see the features' };

export const FEATURES_FILM: FilmText = {
  label: "Mochi's features show: what is new in Volpi 0.1.0 and what is planned",
  play: 'Play', pause: 'Pause', replay: 'Watch again',
  scene: 'Scene',
  transcript: 'Read the show as text',
};

/** New in 0.1.0 (from the app's update log) and the big plans (from the roadmap). Planned things are said to be planned. */
export const FEATURES_SCENES: FilmScene[] = [
  {
    id: 'hello', title: 'The features show', duration: 6500, set: 'title',
    mochi: { x: 650, y: 520, pose: 'wave', mood: 'happy' },
    bubble: { kind: 'speech', text: "Welcome to the features show. Everything new in 0.1.0, then a peek at what's next. I made popcorn." },
    bubbleSide: 'above',
  },
  {
    id: 'panes', title: 'Side by side', duration: 7500, set: 'panes',
    mochi: { x: 730, y: 520, pose: 'point', mood: 'happy', flip: true },
    bubble: { kind: 'speech', text: 'Open up to three files side by side. PDF here, notes there, paper in the middle. A buffet.' },
    bubbleSide: 'above',
  },
  {
    id: 'versions', title: 'Versions', duration: 8000, set: 'versions',
    mochi: { x: 60, y: 520, pose: 'point', mood: 'smug' },
    bubble: { kind: 'speech', text: 'Versions keeps every change. Compare, then bring back the sentence you deleted on Tuesday. Time travel for commas.' },
    bubbleSide: 'above',
  },
  {
    id: 'export', title: 'Eight export formats', duration: 7500, set: 'export',
    mochi: { x: 730, y: 520, pose: 'wave', mood: 'happy', flip: true },
    bubble: { kind: 'speech', text: 'One paper, eight formats. Supervisor wants Word? Fine. LaTeX friend? Also fine. OpenDocument? Of course.' },
    bubbleSide: 'above',
  },
  {
    id: 'picture', title: 'Picture tools', duration: 7500, set: 'picture',
    mochi: { x: 60, y: 520, pose: 'idle', mood: 'wow' },
    bubble: { kind: 'speech', text: 'Crop, turn, flip, greyscale, brightness, contrast. Save a copy and the original is never touched. TIFFs too.' },
    bubbleSide: 'above',
  },
  {
    id: 'tables', title: 'Tables in PDFs', duration: 7500, set: 'tables',
    mochi: { x: 730, y: 520, pose: 'point', mood: 'smile', flip: true },
    bubble: { kind: 'speech', text: 'Volpi spots captioned tables in a PDF. Chart one, save it as CSV or drop it in a note. No retyping. No tears.' },
    bubbleSide: 'above',
  },
  {
    id: 'equations', title: 'Equations as you write', duration: 7500, set: 'equations',
    mochi: { x: 60, y: 520, pose: 'point', mood: 'smug' },
    bubble: { kind: 'speech', text: 'Type $$ E = mc^2 $$ on its own line, press Enter, and it becomes a numbered equation. Very smart. Like me.' },
    bubbleSide: 'above',
  },
  {
    id: 'search', title: 'Word and Excel in search', duration: 7500, set: 'search',
    mochi: { x: 730, y: 520, pose: 'idle', mood: 'happy', flip: true },
    bubble: { kind: 'speech', text: 'Search now reads Word and Excel files, footnotes and comments too. A match in a workbook even says the sheet and row.' },
    bubbleSide: 'above',
  },
  {
    id: 'night', title: 'Night light and Zen', duration: 7500, set: 'night',
    mochi: { x: 60, y: 520, pose: 'sit', mood: 'sleep' },
    bubble: { kind: 'thought', text: 'Night light warms the screen for evening reading. Zen fills it with just the page. Cosy. Zzz.' },
    bubbleSide: 'above', emote: '',
  },
  {
    id: 'keys', title: 'Shortcuts and right-click', duration: 7500, set: 'keys',
    mochi: { x: 730, y: 520, pose: 'wave', mood: 'smile', flip: true },
    bubble: { kind: 'speech', text: 'Ctrl+/ lists every shortcut. Right-click any file for its menu, even with ten selected. Your mouse can retire.' },
    bubbleSide: 'above',
  },
  {
    id: 'safe', title: 'Crash recovery', duration: 7500, set: 'safe',
    mochi: { x: 60, y: 520, pose: 'idle', mood: 'flustered' },
    bubble: { kind: 'speech', text: 'Power cut? Unsaved edits wait in a recovery journal. And a file changed outside Volpi is never overwritten. Phew.' },
    bubbleSide: 'above',
  },
  {
    id: 'later', title: 'Coming later', duration: 8000, set: 'later',
    mochi: { x: 730, y: 520, pose: 'point', mood: 'smug', flip: true },
    bubble: { kind: 'thought', text: 'Planned, no dates: OCR for scans, whole-folder import, extensions, and machine-learning tools that run on your computer.' },
    bubbleSide: 'above',
  },
  {
    id: 'bow', title: 'Welcome', duration: 7000, set: 'finale',
    mochi: { x: 385, y: 520, pose: 'bow', mood: 'happy' },
    bubble: { kind: 'speech', text: 'That was the show. Thank you for watching, and welcome. Yoroshiku onegaishimasu.' },
    bubbleSide: 'above', emote: '✿',
  },
];

/** Words drawn inside the features film. */
export const FEATURES_PROPS = {
  title: 'New in 0.1.0',
  subtitle: 'The features show, by Mochi',
  panes: ['okafor-2023.pdf', 'notes.md', 'Chapter 2.vdoc'],
  peek: 'Peek',
  versionsFile: 'Chapter 2.vdoc · Versions',
  days: ['Today', 'Yesterday', 'Tuesday'],
  added: 'stabilised',
  removed: 'fixed',
  restore: 'Bring back',
  exportFile: 'Chapter 2.vdoc',
  exports: ['.odt', '.docx', '.pdf', '.rtf', '.html', '.md', '.tex', '.txt'],
  pictureFile: 'figure-2.tiff',
  pictureTools: ['Crop', 'Turn', 'Flip', 'Greyscale'],
  sliders: ['Brightness', 'Contrast'],
  saveCopy: 'Save a copy',
  tableCaption: 'Table 2. Retention by condition',
  tableActions: ['Chart it', 'Save as CSV', 'Put in a note'],
  equationRaw: '$$ E = mc^2 $$',
  equation: 'E = mc²',
  equationNo: '(1)',
  searchQuery: 'retention',
  searchHits: [
    { file: 'lab-notes.docx', where: 'footnote 3' },
    { file: 'scores.xlsx', where: 'Sheet 2, row 14' },
    { file: 'okafor-2023.pdf', where: 'page 4' },
  ],
  nightLevels: ['Soft', 'Warm', 'Warmer'],
  zen: 'Zen',
  keys: [['Ctrl', '/'], ['F2'], ['F11'], ['Ctrl', 'Tab']],
  menu: ['Open', 'Open beside', 'Star', 'Rename', 'Move to', 'Earlier versions'],
  journal: 'Recovery journal',
  conflict: ['Keep yours', 'Save yours as a copy', 'Use the disk version'],
  later: ['OCR for scans', 'Whole-folder import', 'Extensions', 'Local machine learning'],
  planned: 'Planned',
  noDates: 'No dates yet',
};

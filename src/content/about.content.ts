import type { FilmScene } from '@/types/film';

export const ABOUT_HEAD = {
  kicker: 'About',
  title: 'How Volpi began.',
  text: 'A researcher, too many tools and one very opinionated cat. Mochi insisted on telling it herself.',
};

export const FILM = {
  label: 'The Mochi film: how Volpi began',
  play: 'Play', pause: 'Pause', replay: 'Watch again',
  scene: 'Scene',
};

/** Each line is Mochi's. The facts in them come from the developer; the jokes are hers. */
export const FILM_SCENES: FilmScene[] = [
  {
    id: 'hello', title: 'Once upon a deadline', duration: 6500, set: 'title',
    mochi: { x: 650, y: 500, pose: 'wave', mood: 'happy' },
    bubble: { kind: 'speech', text: "Hi, I'm Mochi! Grab a snack. I'm going to tell you how Volpi began." },
    bubbleSide: 'above',
  },
  {
    id: 'human', title: 'The researcher', duration: 7000, set: 'desk',
    mochi: { x: 90, y: 500, pose: 'point', mood: 'smile' },
    bubble: { kind: 'speech', text: 'This is my human. A research scholar. Reads all day, writes all night, sleeps… in theory.' },
    bubbleSide: 'above',
  },
  {
    id: 'tools', title: 'Too many tools', duration: 8000, set: 'windows',
    mochi: { x: 380, y: 520, pose: 'idle', mood: 'wow' },
    bubble: { kind: 'speech', text: 'A PDF reader. A notes app. A reference manager. A spreadsheet. A word processor. None of them had ever met.' },
  },
  {
    id: 'shuffle', title: 'Copy, paste, repeat', duration: 7500, set: 'shuffle',
    mochi: { x: 720, y: 520, pose: 'sit', mood: 'sleep' },
    bubble: { kind: 'thought', text: 'Every quote had to travel through five apps to reach the paper. Some of them never arrived.' },
    bubbleSide: 'above',
  },
  {
    id: 'lost', title: 'Where did the research go?', duration: 7000, set: 'lost',
    mochi: { x: 120, y: 520, pose: 'idle', mood: 'wow', flip: true },
    bubble: { kind: 'speech', text: 'Somewhere between app four and app five, the actual research got lost. Not literally. Mostly.' },
  },
  {
    id: 'desk', title: 'One quiet desk', duration: 8000, set: 'merge',
    mochi: { x: 760, y: 520, pose: 'wave', mood: 'happy' },
    bubble: { kind: 'speech', text: 'So my human built one quiet desk: papers, notes, data and writing together, on their own computer.' },
    bubbleSide: 'above',
  },
  {
    id: 'rules', title: 'House rules', duration: 8000, set: 'rules',
    mochi: { x: 90, y: 520, pose: 'point', mood: 'smile' },
    bubble: { kind: 'speech', text: 'House rules: your files stay yours, nothing goes to a cloud, and you pay once. I insisted on that last one.' },
    bubbleSide: 'above',
  },
  {
    id: 'mochi', title: 'Enter Mochi', duration: 6500, set: 'snack',
    mochi: { x: 400, y: 520, pose: 'eat', mood: 'happy' },
    bubble: { kind: 'song', text: 'Then they added me, for moral support and the occasional logo. Mmm. Crunchy.' },
  },
  {
    id: 'you', title: 'Your turn', duration: 7000, set: 'invite',
    mochi: { x: 640, y: 520, pose: 'wave', mood: 'happy' },
    bubble: { kind: 'speech', text: "That's the story so far. The next chapter has you in it. Come say hi on Discord!" },
    bubbleSide: 'above',
  },
];

/** The developer's own words. Only facts the developer has given; no invented anecdotes. */
export const STORY = {
  kicker: 'In my own words',
  title: 'Why I built Volpi.',
  mochi: 'My human wrote this. I only fixed the commas.',
  greeting: 'Dear fellow researcher,',
  paragraphs: [
    'I am a research scholar, and my days probably look a lot like yours: papers to read, notes to keep, data to check and a draft that is always due soon.',
    'For a long time, that work was split across five tools: a PDF reader, a notes app, a reference manager, a spreadsheet and a word processor. None of them talked to each other. I spent more time moving things between them than thinking about the research itself.',
    'So I built the tool I wanted: one quiet desk where papers, notes, data and writing live together, as plain files on my own computer.',
    'I made it for my own work first. Now I would like it to help with yours. Your research stays on your computer, because it is private until you choose to publish it. And when version 1.0 arrives, you pay once, because you already have enough subscriptions.',
    'Volpi is still young, and the open beta will have rough edges. If something breaks, or you have an idea, tell me on Discord or in a bug report. I would love to hear from you.',
  ],
  name: 'Subhradeep Sarkar',
  role: 'Developer',
};

export const MEET_MOCHI = {
  kicker: 'The cast',
  title: 'Who is Mochi?',
  text: 'Mochi is the guide inside Volpi. She gives tips, keeps you company through long reading sessions and, on this website, eats the logo. Volpi means foxes in Italian. Mochi is a cat. Long story.',
  facts: [
    { title: 'Optional.', text: 'Switch her off in Settings. She will only sulk a little.' },
    { title: 'Quiet in Zen mode.', text: 'When you focus, she naps.' },
    { title: 'Offline.', text: 'Volpi sends nothing about you anywhere, so neither does she. Your secrets are safe.' },
  ],
};

export const TRANSCRIPT = { summary: 'Read the film as text' };

/** Words drawn inside the film's scenes. */
export const FILM_PROPS = {
  subtitle: 'A story, as told by Mochi',
  chapter: 'ある研究者の話',
  thesis: 'Thesis.docx',
  tools: ['PDF reader', 'Notes', 'References', 'Spreadsheet', 'Word processor', 'Browser · 47 tabs'],
  quote: '“…the critical variable”',
  desk: 'One quiet desk.',
  deskRows: ['Papers', 'Notes', 'Data', 'Writing'],
  rules: [
    { text: 'Your files.', sub: 'On your disk' },
    { text: 'No cloud.', sub: 'Nothing uploaded' },
    { text: 'Pay once.', sub: 'No subscription' },
  ],
  invite: 'Your turn.',
  inviteTag: 'Open beta · free',
};

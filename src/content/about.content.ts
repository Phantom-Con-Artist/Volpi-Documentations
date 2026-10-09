import type { FilmScene, FilmText } from '@/types/film';
import type { IdField } from '@/types/content';

export const ABOUT_HEAD = {
  kicker: 'About',
  title: 'How Volpi began.',
  text: 'A researcher, too many tools and one very opinionated cat. Mochi insisted on telling it herself.',
};

export const FILM: FilmText = {
  label: 'The Mochi film: how Volpi began',
  play: 'Play', pause: 'Pause', replay: 'Watch again',
  scene: 'Scene',
  transcript: 'Read the film as text',
};

/** Each line is Mochi's. The facts in them come from the developer; the jokes are hers. */
export const FILM_SCENES: FilmScene[] = [
  {
    id: 'hello', title: 'Once upon a deadline', duration: 6500, set: 'title',
    mochi: { x: 650, y: 500, pose: 'wave', mood: 'happy' },
    bubble: { kind: 'speech', text: "Hi, I'm Mochi. Grab a snack. This is how Volpi began. The facts are my human's; the jokes are mine." },
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
    mochi: { x: 380, y: 520, pose: 'idle', mood: 'pout' },
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
    mochi: { x: 120, y: 520, pose: 'idle', mood: 'flustered', flip: true },
    bubble: { kind: 'speech', text: 'Somewhere between app four and app five, the actual research got lost. Not literally. Mostly.' },
  },
  {
    id: 'desk', title: 'One app for all of it', duration: 8000, set: 'merge',
    mochi: { x: 760, y: 520, pose: 'wave', mood: 'happy' },
    bubble: { kind: 'speech', text: 'So my human built one app for all of it: papers, notes, data and writing, together, on their own computer.' },
    bubbleSide: 'above',
  },
  {
    id: 'rules', title: 'House rules', duration: 8000, set: 'rules',
    mochi: { x: 90, y: 520, pose: 'point', mood: 'smug' },
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
    bubble: { kind: 'speech', text: "That's the story so far. The next chapter has you in it. Download the beta, or come say hi on Discord." },
    bubbleSide: 'above',
  },
  {
    id: 'bow', title: 'Welcome', duration: 7000, set: 'finale',
    mochi: { x: 385, y: 520, pose: 'bow', mood: 'happy' },
    bubble: { kind: 'speech', text: 'Thank you for listening all the way to the end. Welcome to Volpi. Yoroshiku onegaishimasu.' },
    bubbleSide: 'above', emote: '✿',
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
    'So I built the tool I wanted: one app where papers, notes, data and writing live together, as plain files on my own computer.',
    'I made it for my own work first. Now I would like it to help with yours. Your research stays on your computer, because it is private until you choose to publish it. And when version 1.0 arrives, you pay once, because you already have enough subscriptions.',
    'Volpi is still young, and the open beta will have rough edges. If something breaks, or you have an idea, tell me on Discord or in a bug report. I would love to hear from you.',
  ],
  name: 'Mavern',
  href: 'https://mavern.in',
  role: 'Developer',
};

/** Mochi's citizen ID card. Jokes on a card, but every field is true of the app. */
export const MEET_MOCHI = {
  kicker: 'The cast',
  title: 'Who is Mochi?',
  text: 'Mochi is the guide inside Volpi. She asked for a proper introduction, so here are her papers.',
  card: {
    country: 'Republic of Volpi',
    kind: 'Citizen identity card',
    kindJp: 'ヴォルピ市民証',
    number: 'No. 000 001',
    photoCaption: 'Photo taken by surprise',
    fields: [
      { label: 'Name', value: 'Mochi (もち)' },
      { label: 'Species', value: 'Cat. Volpi means foxes in Italian. Long story.' },
      { label: 'Purpose', value: 'Guide, moral support, part-time logo taster' },
      { label: 'Habits', value: 'Gives tips. Keeps you company on long reading days. Naps in Zen mode.' },
      { label: 'Internet', value: 'None. She sends nothing about you anywhere.' },
      { label: 'Off switch', value: 'In Settings. She will only sulk a little.' },
    ] satisfies IdField[],
    dates: [
      { label: 'Issued', value: 'v0.1.0' },
      { label: 'Expires', value: 'When the snacks run out' },
    ] satisfies IdField[],
    signature: 'Signature of holder',
    stamp: 'Approved',
    stampJp: '認定',
    mrz: ['IDVOL<<MOCHI<<<<<<<<<<<<<<<<<<<<<<<<<', 'CAT<<<LOGO<TASTER<<<NO<CLOUD<<<<<<<01'],
  },
};

/** Words drawn inside the film's scenes. */
export const FILM_PROPS = {
  subtitle: 'A story, as told by Mochi',
  chapter: 'ある研究者の話',
  thesis: 'Thesis.docx',
  tools: ['PDF reader', 'Notes', 'References', 'Spreadsheet', 'Word processor', 'Browser · 47 tabs'],
  quote: '“…the critical variable”',
  desk: 'All in one place.',
  deskRows: ['Papers', 'Notes', 'Data', 'Writing'],
  rules: [
    { text: 'Your files.', sub: 'On your disk' },
    { text: 'No cloud.', sub: 'Nothing uploaded' },
    { text: 'Pay once.', sub: 'No subscription' },
  ],
  invite: 'Your turn.',
  inviteTag: 'Open beta · free',
};

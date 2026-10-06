import type { MochiLine } from '@/types/mochi';

/** What Mochi says as each part of a page comes into view. Keys are section ids. */
export const MOCHI_LINES: Record<string, MochiLine> = {
  who: { text: 'I have seen your Downloads folder. We need to talk.', mood: 'wow' },
  formats: { text: 'Plain files. You could open them without me. Rude, but true.', mood: 'smile' },
  desk: { text: 'Rename a paper and every link follows. I checked. Twice.', mood: 'smile' },
  loop: { text: 'Pick a step. Each one is a real recording. I was in the room.', mood: 'happy' },
  theme: { text: 'Try the switch. I look nice at night too.', mood: 'happy' },
  hood: { text: 'The internet only hears from us when you check a reference.', mood: 'smile' },
  local: { text: 'What you write here stays here. I keep secrets very well.', mood: 'smile' },
  notyet: { text: 'Being honest here. Scanned PDFs still stump me.', mood: 'wow' },
  pricing: { text: 'Pay once and keep me. No monthly fee for cats.', mood: 'happy' },
  coda: { text: 'See you at the open beta! I will be the one eating your logo.', mood: 'happy' },
  'features-top': { text: 'The full tour. Please keep your hands inside the panels.', mood: 'happy' },
  'roadmap-top': { text: 'The plan. I added the snack breaks.', mood: 'happy' },
  'docs-top': { text: 'Everything I can do, in one list. Well. Everything Volpi can do.', mood: 'happy' },
  'docs-limits': { text: 'These are on my list too.', mood: 'wow' },
  'docs-next': { text: 'No dates yet. We would rather be right.', mood: 'smile' },
  'privacy-why': { text: 'We do not want your data. I checked. There is no server to keep it on.', mood: 'happy' },
  'privacy-top': { text: 'Short version: your research never leaves your computer.', mood: 'smile' },
  'privacy-network': { text: 'Only a DOI or a title goes out. Never a file. I would know.', mood: 'smile' },
};

/** Said by the big Mochi in the hero when clicked, in turn. */
export const HERO_POKES: MochiLine[] = [
  { text: "Hi, I'm Mochi. Volpi means foxes. I'm a cat. Long story.", mood: 'happy' },
  { text: 'シーン is the manga sound for silence. I make it when I read.', mood: 'smile' },
  { text: 'Stop poking. I bite logos.', mood: 'wow' },
  { text: 'The book? Spindle-ripple coupling. Very gripping.', mood: 'smile' },
];

/** Antic dialogue. One is picked at random each time. */
export const ANTIC_LINES = {
  eat: { start: ['Om nom.', 'Snack time!', 'Is this a cracker?'], taste: ['…tastes like a seal stamp.', '…a little red. A little foxy.'], after: ['I put it back. Mostly.', 'You saw nothing.'] },
  peek: ['psst…', 'psst… I am not here.', 'psst… the beta is almost ready.', 'psst… nothing on this page leaves your computer. Not even me.'],
  steal: { grab: ['Mine now!', 'Yoink!', 'This letter is mine.'], hide: ["You didn't see anything.", 'Shh. I am a wall.'], give: ['Fine. Have it back.', 'It was boring anyway.'] },
  follow: { start: ['Ooh, a cursor!', 'Hold still!'], end: ['Got it! …no I did not.', 'Too fast. Unfair.'] },
  sit: ['♪ hm hm, plain folders ♪', '♪ la la, local files ♪', '♪ no cloud, no cloud ♪'],
  poked: ['Hey!', 'Okay, okay!', 'Rude!'],
};

/** Pointless things she points at. Selector, then what she says about it. */
export const POINT_TARGETS: { selector: string; lines: string[] }[] = [
  { selector: '.chapter-jp', lines: ['Look! It says episode. Very dramatic.', 'Kanji. Serious business.'] },
  { selector: 'h2 .slash', lines: ['I drew that red line. You are welcome.', 'Look at this heading. So big.'] },
  { selector: '.p5-tag', lines: ['This little tag is crooked. I like it crooked.'] },
  { selector: '[data-mochi-target="theme"]', lines: ['This button turns the lights off. Go on.'] },
  { selector: 'a[href^="https://discord.gg"]', lines: ['That button opens our Discord. I am there too.', 'Come say hi on Discord. Go on.'] },
  { selector: '.panel', lines: ['This box has a dotted shadow. Fancy.', 'A screenshot. I am in the app too, you know.'] },
  { selector: '.sfx', lines: ['シーン. That is you, reading.', 'Big letters. Very loud for a quiet word.'] },
  { selector: 'footer .kicker', lines: ['Someone wrote down the fonts. Nerds.'] },
];

/** Reactions to what the visitor does. */
export const REACTIONS = {
  night: ['Lights off! Finally.', 'Night mode. My eyes thank you.', 'Ooh, cosy.'],
  day: ['Too bright! Too bright!', 'Day mode. I need sunglasses.', 'Good morning, I suppose.'],
  accent: (ink: string) => [`${ink}? Bold choice.`, `${ink} suits you.`, `Ooh, ${ink}. My bow changed too.`],
  copy: ['Copying our homework? Fine. It is plain text anyway.', 'Take it. Everything here is plain files.', 'I saw that.'],
  sleep: 'zzz…',
  wake: ['Huh? I was reading!', 'I was not asleep.', 'Oh! You are back.'],
  spam: ['Okay, that is it!', 'Stop poking me!', 'Right. The logo pays for this.'],
};

export const MOCHI_UI = {
  on: 'Mochi: on',
  off: 'Mochi: off',
  wake: 'Wake Mochi',
};

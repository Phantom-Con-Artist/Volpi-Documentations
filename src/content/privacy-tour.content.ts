import type { FilmScene, FilmText } from '@/types/film';
import type { ViewSwitchText } from '@/components/film/ViewSwitch';
import { VIEW_SWITCH } from './film.content';

export const PRIVACY_VIEW: ViewSwitchText = { ...VIEW_SWITCH, label: 'How to see the privacy policy' };

export const PRIVACY_FILM: FilmText = {
  label: 'Mochi explains the privacy policy with props',
  play: 'Play', pause: 'Pause', replay: 'Watch again',
  scene: 'Scene',
  transcript: 'Read the film as text',
};

/** The privacy policy, acted out. Every claim matches privacy.content.ts; the policy text stays the reference. */
export const PRIVACY_SCENES: FilmScene[] = [
  {
    id: 'hello', title: 'The privacy talk', duration: 6500, set: 'title',
    mochi: { x: 650, y: 520, pose: 'wave', mood: 'smug' },
    bubble: { kind: 'speech', text: 'Privacy policies are boring. So I will act this one out. With props. Nobody has ever done this. Probably.' },
    bubbleSide: 'above',
  },
  {
    id: 'home', title: 'Your files live with you', duration: 7500, set: 'home',
    mochi: { x: 60, y: 520, pose: 'point', mood: 'happy' },
    bubble: { kind: 'speech', text: 'Your PDFs, notes, data and drafts live in folders on your computer. Not on our server. We do not have a server.' },
    bubbleSide: 'above',
  },
  {
    id: 'postcard', title: 'Checking a reference', duration: 8500, set: 'postcard',
    mochi: { x: 730, y: 520, pose: 'point', mood: 'smile', flip: true },
    bubble: { kind: 'speech', text: 'Say you check a reference. Volpi sends a tiny postcard: just a DOI or a title. Your thesis stays home.' },
    bubbleSide: 'above',
  },
  {
    id: 'luggage', title: 'What never goes', duration: 8000, set: 'luggage',
    mochi: { x: 60, y: 520, pose: 'idle', mood: 'angry' },
    bubble: { kind: 'shout', text: 'Never in the postcard: your files, notes, highlights, name or folder names. I checked the luggage.' },
    bubbleSide: 'above',
  },
  {
    id: 'switch', title: 'You choose when', duration: 8000, set: 'modes',
    mochi: { x: 730, y: 520, pose: 'wave', mood: 'happy', flip: true },
    bubble: { kind: 'speech', text: 'You choose when it goes online: only when you click (the default), right after an import, or never. Off means off.' },
    bubbleSide: 'above',
  },
  {
    id: 'nobody', title: 'Nobody watching', duration: 7500, set: 'nobody',
    mochi: { x: 60, y: 520, pose: 'sit', mood: 'smug' },
    bubble: { kind: 'speech', text: 'No account, no analytics, no crash reports, no ads. Nothing to sell, because we have nothing. Very relaxing.' },
    bubbleSide: 'above',
  },
  {
    id: 'lock', title: 'A lock, not a safe', duration: 8000, set: 'lock',
    mochi: { x: 730, y: 520, pose: 'idle', mood: 'pout', flip: true },
    bubble: { kind: 'speech', text: 'Honest bit: a profile password locks the door inside Volpi. It does not encrypt the files. Use disk encryption for that.' },
    bubbleSide: 'above',
  },
  {
    id: 'delete', title: 'Deleting your data', duration: 7500, set: 'delete',
    mochi: { x: 60, y: 520, pose: 'wave', mood: 'happy' },
    bubble: { kind: 'speech', text: 'Want it gone? Delete the folder. There is nothing to delete on our side, because we never had it.' },
    bubbleSide: 'above',
  },
  {
    id: 'cookies', title: 'This website', duration: 7500, set: 'cookies',
    mochi: { x: 730, y: 520, pose: 'eat', mood: 'pout', flip: true },
    bubble: { kind: 'speech', text: 'This website has no cookies either. Only a few settings, like your theme, stay in your browser. I wanted cookies.' },
    bubbleSide: 'above',
  },
  {
    id: 'bow', title: 'Welcome', duration: 7000, set: 'finale',
    mochi: { x: 385, y: 520, pose: 'bow', mood: 'happy' },
    bubble: { kind: 'speech', text: 'That is the whole policy. Your research is yours. Thank you for watching. Yoroshiku onegaishimasu.' },
    bubbleSide: 'above', emote: '✿',
  },
];

/** Words drawn inside the privacy film. */
export const PRIVACY_PROPS = {
  title: 'Privacy',
  subtitle: 'The privacy talk, by Mochi',
  computer: 'Your computer',
  files: ['thesis.docx', 'okafor-2023.pdf', 'notes.md', 'sleep-data.csv'],
  server: 'Our server',
  serverNone: 'Does not exist',
  postcardTo: 'To: Crossref',
  postcardBody: 'DOI 10.1234/example',
  staysHome: 'Stays home',
  databases: ['Crossref', 'OpenAlex', 'arXiv', 'PubMed'],
  luggage: ['Your files', 'Your notes', 'Highlights', 'Your name', 'Folder names'],
  rejected: 'Not allowed',
  modes: ['When I click', 'Automatic', 'Off'],
  modeDefault: 'Default',
  nobody: ['Account', 'Analytics', 'Crash reports', 'Ads'],
  lock: 'Profile password',
  lockSub: 'Locks Volpi, not the files',
  folder: 'My branch',
  deleted: 'Gone',
  ourSide: 'Our side: nothing',
  cookie: 'Cookies: 0',
  storage: ['Theme', 'Mochi on or off', 'Read or watch'],
};

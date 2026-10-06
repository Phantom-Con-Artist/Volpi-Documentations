import type { RoadmapPhase } from '@/types/content';

export const ROADMAP_HEAD = {
  kicker: 'Roadmap',
  title: 'Where Volpi is going.',
  text: 'From what you can use today to the tools you will build yourself. No dates yet. We would rather be right than early.',
  here: 'You are here',
  phase: 'Phase',
  alsoPlanned: 'Also on the list',
  note: 'Plans can change. When they do, this page will say so.',
};

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    id: 'first-version', number: '1', status: 'Now · open beta', current: true,
    title: 'The first version.',
    text: 'The app itself: read PDFs, write linked notes, check references, look at your data and write papers, all in plain files on your computer.',
    items: [
      { title: 'Everything in one place', text: 'Papers, notes, data and writing in one project folder.' },
      { title: 'Local and private', text: 'Your files stay on your computer. No account, no cloud.' },
      { title: 'Free to try', text: 'The open beta is free for everyone to download.' },
    ],
  },
  {
    id: 'polish', number: '1.5', status: 'Next',
    title: 'Polish and reliability.',
    text: 'Make the first version solid. Fewer rough edges, fewer surprises.',
    items: [
      { title: 'Your reports first', text: 'Bug reports and feedback from Discord decide what gets fixed first.' },
      { title: 'Big projects', text: 'Fix crashes and slow spots, so Volpi keeps up with a thesis worth of files.' },
    ],
    mochi: 'Bug squashing. My favourite sport.',
  },
  {
    id: 'extensions', number: '2', status: 'After that',
    title: 'Extensions.',
    text: 'Add the features your research needs as plug-ins, written in the language you already know.',
    items: [
      { title: 'Plug in and use', text: 'Install an extension and start using it.' },
      { title: 'Any language', text: 'Write an extension in the programming language you already use.' },
    ],
  },
  {
    id: 'ml', number: '3', status: 'Further out',
    title: 'Build your own machine-learning tools.',
    text: 'Make small machine-learning tools for your own research, and run them on your own computer.',
    items: [
            { title: 'Runs on your computer', text: 'The models run on your machine. Your files do not leave it.' },
      { title: 'Build by connecting blocks', text: 'Drag blocks onto a canvas and connect them to make a tool, like a blueprint.' },
      { title: 'Save, import and reuse', text: 'Keep the tools you build and use them across all your branches.' },
    ],
  },
  {
    id: 'next', number: '4', status: 'Someday',
    title: 'To be decided.',
    text: 'We will decide this one with you. Tell us what you need on Discord.',
    items: [],
    mochi: 'Phase four is a mystery. I asked. Nobody told me.',
  },
];

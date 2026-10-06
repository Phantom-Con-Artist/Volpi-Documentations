import type { RoadmapPhase } from '@/types/content';

export const ROADMAP_HEAD = {
  kicker: 'Roadmap',
  title: 'Where Volpi is going.',
  text: 'From the desk you can use today to the tools you will build yourself. No dates yet. We would rather be right than early.',
  here: 'You are here',
  phase: 'Phase',
  alsoPlanned: 'Also on the list',
  note: 'Plans can change. When they do, this page will say so.',
};

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    id: 'mvp', number: '1', status: 'Now · open beta', current: true,
    title: 'The MVP.',
    text: 'The desk itself: read PDFs, write linked notes, check references, look at your data and write papers, all in plain files on your computer.',
    items: [
      { title: 'Everything in one place', text: 'Papers, notes, data and writing in one project folder.' },
      { title: 'Local and private', text: 'Your files stay on your computer. No account, no cloud.' },
      { title: 'Free to try', text: 'The open beta is free for everyone to download.' },
    ],
    mochi: 'This is the part you can actually use. Well, very soon.',
  },
  {
    id: 'polish', number: '1.5', status: 'Next',
    title: 'Polish and reliability.',
    text: 'Make the MVP solid. Fewer rough edges, fewer surprises, and fixes for what you report.',
    items: [
      { title: 'Polish', text: 'Smooth out the rough edges you find in the open beta.' },
      { title: 'Reliability', text: 'Fix crashes and slow spots, so Volpi stays dependable on large projects.' },
      { title: 'Your reports first', text: 'Bug reports and feedback from Discord decide what gets fixed first.' },
    ],
    mochi: 'Bug squashing. My favourite sport.',
  },
  {
    id: 'extensions', number: '2', status: 'After that',
    title: 'Extensions.',
    text: 'Add the features your research needs as plug-ins, written in the language you already know.',
    items: [
      { title: 'Plug in and use', text: 'Install an extension and start using it.' },
      { title: 'Any language', text: 'Extensions are language-agnostic. Write one in the language you already use.' },
      { title: 'Built in, not bolted on', text: 'Extensions fit into Volpi like its own features.' },
    ],
    mochi: 'Plug-ins! Finally, someone to help me around here.',
  },
  {
    id: 'ml', number: '3', status: 'Further out',
    title: 'Build your own ML tools.',
    text: 'Make machine-learning tools for your own research, and run them on your own computer.',
    items: [
      { title: 'Personalized tool builder', text: 'Shape ML tools around your data and your questions.' },
      { title: 'Local inference', text: 'Models run on your computer. Your files do not leave it.' },
      { title: 'Node-based building', text: 'Drag, drop and connect nodes to build a tool, like a blueprint.' },
      { title: 'Save, import and reuse', text: 'Keep the tools you build and use them across all your vaults.' },
    ],
    mochi: 'Robots that live on your own computer. I will keep an eye on them.',
  },
  {
    id: 'next', number: '4', status: 'Someday',
    title: 'To be decided.',
    text: 'We will decide this one with you. Tell us what you need on Discord.',
    items: [],
    mochi: 'Phase four is a mystery. I asked. Nobody told me.',
  },
];

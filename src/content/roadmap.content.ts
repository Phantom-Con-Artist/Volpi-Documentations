import type { RoadmapPhase } from '@/types/content';

export const ROADMAP_HEAD = {
  kicker: 'Roadmap',
  title: 'Where Volpi is going.',
  text: 'What you can use today, what is built and being tested, and what comes after. No dates yet. We would rather be right than early.',
  here: 'You are here',
  phase: 'Phase',
  note: 'Plans can change. When they do, this page will say so.',
};

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    id: 'first-version', number: '1', status: 'Out · v0.1.0',
    title: 'The first version.',
    text: 'The app itself: read PDFs, write linked notes, check references, look at your data and write papers, all in plain files on your computer.',
    items: [
      { title: 'Everything in one place', text: 'Papers, notes, data and writing in one project folder.' },
      { title: 'Local and private', text: 'Your files stay on your computer. No account, no cloud.' },
      { title: 'Free to try', text: 'The open beta is free for everyone to download.' },
    ],
  },
  {
    id: 'first-update', number: '1.25', status: 'Now · v0.1.1', current: true, compact: true,
    title: 'The first update.',
    text: 'Bug fixes from the first beta, quicker files, and Volpi now updates itself.',
    items: [
      { title: 'Quicker return to files', text: 'PDFs, data, pictures and papers you opened before reuse the work already done.' },
      { title: 'Steadier PDFs on Linux', text: 'No more blank pages after switching files or resizing the window.' },
      { title: 'Updates from Home', text: 'Volpi checks for new versions. Choose Update and restart when you are ready.' },
    ],
    link: { label: 'Read the release notes', href: '/docs/releases/' },
  },
  {
    id: 'next-version', number: '1.5', status: 'In testing · next version',
    title: 'Sync, and your library from Zotero.',
    text: 'Built and being tested. None of this is in the version you can download today. Before it is released, the privacy page will list exactly what sync sends.',
    items: [
      { title: 'Sync between your computers', text: 'Keep a whole branch the same on your other computers, through a folder you choose in Google Drive, iCloud Drive, OneDrive or Dropbox. Off until you turn it on.' },
      { title: 'Two edits, both kept', text: 'When two devices change the same file, both versions are kept side by side.' },
      { title: 'Import from Zotero', text: 'References, attached PDFs, tags and collections from the Zotero library on your computer. Nothing in Zotero is changed.' },
      { title: 'From Mendeley and EndNote', text: 'Export your library as BibTeX or RIS and Volpi reads it, matching PDFs to their references where it can.' },
      { title: 'Import a whole folder', text: 'A folder of files comes in with its layout.' },
    ],
  },
  {
    id: 'ml', number: '2', status: 'Experimental · built, in testing',
    title: 'Build your own machine-learning tools.',
    text: 'The first version is built. It is called model blueprints, it is experimental, and it comes with the next version.',
    items: [
      { title: 'Build by connecting blocks', text: 'Put blocks for data, cleaning, shaping, learning and testing on a canvas and join them with wires.' },
      { title: 'Runs on your computer', text: 'The model is trained and run on your own machine.' },
      { title: 'Use what you built', text: 'Predict typed values or a whole dataset. The answers are saved as a new CSV.' },
      { title: 'One file, phone and computer', text: 'A blueprint is a file in your branch. One made in Volpi Mobile opens on the desktop, and the other way round.' },
      { title: 'A quick look, not a checked method', text: 'A model trains on at most 20,000 rows and has not been validated the way a published method is. Test any number before you report it.' },
    ],
  },
  {
    id: 'mobile', number: 'M', status: 'Experimental · Android',
    title: 'Volpi Mobile.',
    text: 'An Android app is in early testing with a few people. It is not on Google Play and there is no public download yet. iPhone and iPad have not been tested.',
    items: [
      { title: 'The same branches', text: 'Notes, papers, PDFs, highlights, charts, search and history, laid out for touch.' },
      { title: 'Scan with the camera', text: 'Photograph a page and keep it in the branch as a picture.' },
      { title: 'Read the text in a scan', text: 'Text in a scan or a picture is read on the phone, in printed English for now. Nothing is sent anywhere.' },
      { title: 'Highlight by touch', text: 'Long-press to select, pinch to zoom, or open a paragraph in large type to highlight it.' },
      { title: 'Sync with your computer', text: 'Planned through Google Drive. It is built, but has not been tested on a phone yet.' },
    ],
    mochi: 'A smaller screen. I will need a smaller desk.',
  },
  {
    id: 'polish', number: '2.5', status: 'Then',
    title: 'Polish and reliability.',
    text: 'After those three, new features stop for a while. The work goes into making reading, notes, citing and writing solid.',
    items: [
      { title: 'Your reports first', text: 'Bug reports and feedback from Discord decide what gets fixed first.' },
      { title: 'Big projects', text: 'Fix crashes and slow spots, so Volpi keeps up with a thesis worth of files.' },
      { title: 'Say what it does', text: 'Go through every claim on this website and in the app, and close the gaps between the two.' },
    ],
    mochi: 'Bug squashing. My favourite sport.',
  },
  {
    id: 'extensions', number: '3', status: 'Later · on hold',
    title: 'Extensions.',
    text: 'Add the features your research needs as plug-ins. This is on hold until the core is solid, and it is the plan most likely to change.',
    items: [
      { title: 'Plug in and use', text: 'Install an extension and start using it.' },
      { title: 'Kept in a sandbox', text: 'An extension should only reach what you allow. Working out how is the reason this waits.' },
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

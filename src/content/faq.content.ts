import type { FaqGroup } from '@/types/content';

/** Common questions. Answers describe Volpi 0.1.1 and repeat facts stated elsewhere on the site (docs, privacy, pricing, roadmap).
 *  The same text is published as FAQPage structured data (structured-data.ts), so keep every answer plain text. */
export const FAQ_HEAD = {
  kicker: 'FAQ',
  title: 'Frequently asked questions.',
  text: 'Short answers about what Volpi is, what it costs, where your files are and what it cannot do yet.',
  nav: 'Questions about',
  more: 'Something else?',
  moreText: 'Ask on Discord. Questions asked there often end up on this page.',
};

export const FAQ: FaqGroup[] = [
  {
    title: 'The basics',
    items: [
      { q: 'What is Volpi?', a: 'Volpi is a desktop app for researchers. You read and highlight PDFs, write linked Markdown notes, check and chart data, keep a reference library and write papers with citations, all in one project folder on your own computer.', link: { label: 'See the features', href: '/features/' } },
      { q: 'Who is it for?', a: 'People who do research and write it up: PhD students, postdocs, academics and independent scholars. It was made by a research scholar who was tired of moving between a PDF reader, a note app, a reference manager and a word processor.', link: { label: 'How Volpi began', href: '/about/' } },
      { q: 'Which computers does it run on?', a: 'Windows 10 and 11, macOS on Apple Silicon and Intel, and Linux, with .deb and .rpm packages.', link: { label: 'Download Volpi', href: '/download/' } },
      { q: 'Is there a phone app?', a: 'Not one you can download. An Android app, Volpi Mobile, is in early testing with a few people. It is not on Google Play, and iPhone and iPad have not been tested.', link: { label: 'See the roadmap', href: '/roadmap/#mobile' } },
    ],
  },
  {
    title: 'Price and licence',
    items: [
      { q: 'Is Volpi free?', a: 'The open beta is free for everyone to download. Version 1.0 will be a one-time purchase, not a subscription. The price will be announced on this website before version 1.0.', link: { label: 'Pricing', href: '/pricing/' } },
      { q: 'Is Volpi open source?', a: 'No. The app is closed source. Its public GitHub repository holds this website, the documentation and bug reports, not the app\'s code.' },
      { q: 'Do I need an account?', a: 'No. There is no account and no sign-in.' },
    ],
  },
  {
    title: 'Your files and privacy',
    items: [
      { q: 'Where is my work stored?', a: 'On your own computer. Each project, called a branch, is an ordinary folder you choose. Notes are Markdown files, papers are HTML inside a .vdoc file, and highlights are small files in the project\'s annotations folder. Volpi keeps its own settings and profiles in its app storage on the same computer.' },
      { q: 'Can I read my files without Volpi?', a: 'Yes. Notes open in any text or Markdown editor, PDFs are never changed, and data and figures are ordinary CSV and SVG files. Papers are HTML inside, and export to Word, OpenDocument, PDF and LaTeX.' },
      { q: 'Does Volpi use the internet?', a: 'For two things only. It checks references against public scholarly databases, by default only when you click, and it asks GitHub whether a new version is out, downloading it when you choose to. Everything else works offline.', link: { label: 'Read the privacy page', href: '/privacy/' } },
      { q: 'Does Volpi collect any data about me?', a: 'No. There is no analytics, no telemetry and no crash reporting in the app.' },
      { q: 'Does Volpi use AI?', a: 'Not in this version. Machine-learning tools you build yourself, called model blueprints, are being tested for a later version. They run on your own computer.' },
    ],
  },
  {
    title: 'References and writing',
    items: [
      { q: 'Which citation styles does Volpi have?', a: 'Six: APA, IEEE, MLA, Chicago, Harvard and Vancouver. You cannot add another style in this version.', link: { label: 'Citation styles', href: '/formats/citation-styles/' } },
      { q: 'Can I bring my library from Zotero, Mendeley or EndNote?', a: 'Yes, by exporting it as BibTeX, RIS or CSL JSON, which Volpi reads. That carries the references but not tags, collections or notes. A direct Zotero import is being tested for the next version.', link: { label: 'How to bring references across', href: '/guides/move-references-from-zotero/' } },
      { q: 'Does Volpi work with Word or LaTeX?', a: 'There is no plug-in for Word. You write the paper in Volpi and export it to Word (.docx), OpenDocument, PDF, LaTeX, HTML, Markdown, Rich Text or plain text. Word documents can also be imported.' },
      { q: 'How does Volpi know a reference is real?', a: 'It looks the reference up in Crossref or OpenAlex, or in arXiv or PubMed by its identifier, and compares the title, first author and year with yours. It also shows when a database marks the work as retracted. It cannot tell whether the work supports your sentence.', link: { label: 'How to check references', href: '/guides/check-references/' } },
    ],
  },
  {
    title: 'Limits of the beta',
    items: [
      { q: 'Can I sync between computers?', a: 'Not in this version. Sync through a folder in your own cloud drive is built and being tested for the next one.', link: { label: 'See the roadmap', href: '/roadmap/#next-version' } },
      { q: 'Can Volpi read scanned PDFs?', a: 'It opens them, but there is no OCR in the desktop app, so a scan without a text layer cannot be searched or quoted. You can still highlight an area of a scanned page.' },
      { q: 'Why does my computer warn me when I install it?', a: 'The beta installers are not signed yet. On Windows, choose More info, then Run anyway. On macOS, right-click the app and choose Open.', link: { label: 'Install steps', href: '/download/' } },
      { q: 'I found a bug. Where do I report it?', a: 'On GitHub or Discord. The report page lists what to include and how to keep your research out of it.', link: { label: 'Report a bug', href: '/report/' } },
    ],
  },
];

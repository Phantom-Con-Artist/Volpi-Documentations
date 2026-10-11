import type { ArticleSection } from '@/types/content';

/**
 * Comparisons with other tools. Two rules:
 * 1. Every statement about another tool comes from that tool's own website, read on the date in `footnote`,
 *    and its pages are listed under `sources`. Nothing here says another tool lacks a feature unless its
 *    maker says so. Where we could not confirm something, the page leaves it out.
 * 2. Every statement about Volpi describes the released version (0.1.1).
 * Re-check the sources before changing a date.
 */
const VOLPI = {
  price: 'Free during the open beta. Version 1.0 will be a one-time purchase.',
  platforms: 'Windows 10 and 11, macOS and Linux. No phone app or web version yet.',
  files: 'Each project is a plain folder on your computer. No account.',
  sync: 'None in this version. Sync through your own cloud folder is being tested for the next one.',
};

const DOWNLOAD = { label: 'Download Volpi', href: '/download/' };

export const COMPARE: ArticleSection = {
  id: 'vs',
  kicker: 'Compare',
  title: 'Volpi compared with other tools.',
  lede: 'Where Volpi fits beside the tools researchers already use, including where the other tool is the better choice.',
  back: 'All comparisons',
  footnote: 'Facts about other tools were read on their own websites on 11 October 2026. Volpi is described as of version 0.1.1. Tell us if something is out of date.',
  articles: [
    {
      slug: 'zotero',
      title: 'Volpi and Zotero.',
      lede: 'Zotero is a reference manager, and a very good one. Volpi is a place to read, take notes, check data and write, with a smaller reference library inside it. Many people will want both.',
      blocks: [
        {
          title: 'The short version',
          paragraphs: [
            'If your main need is collecting references from the web and citing them in Word, LibreOffice or Google Docs, in whatever style a journal asks for, use Zotero. Volpi does not do those things.',
            'Volpi is for the work around the references: reading and highlighting the PDFs, writing linked notes, checking a dataset, and writing the paper itself in the same project folder.',
          ],
        },
        {
          title: 'Side by side',
          table: {
            columns: ['', 'Volpi 0.1.1', 'Zotero'],
            rows: [
              ['Price', VOLPI.price, 'Free. Syncing attached files beyond 300 MB is paid, from US$20 a year for 2 GB.'],
              ['Source code', 'Closed.', 'Open source (AGPL v3).'],
              ['Runs on', VOLPI.platforms, 'Windows, macOS, Linux, iOS and Android, with a web library for synced items.'],
              ['Your data', VOLPI.files, 'Stored on your computer by default and usable without an account. Sync is optional.'],
              ['PDF highlights', 'Built in. Saved as small files in the project; the PDF is unchanged.', 'Built in. Saved in Zotero\'s database, and can be written into a PDF on export.'],
              ['Citation styles', 'Six: APA, IEEE, MLA, Chicago, Harvard and Vancouver.', 'More than 9,000, by Zotero\'s count.'],
              ['Citing while you write', 'In papers written inside Volpi.', 'In Word, LibreOffice and Google Docs.'],
              ['Saving from the browser', 'No.', 'Yes, with the Zotero Connector.'],
              ['Retracted papers', 'Flagged when Crossref, OpenAlex or PubMed marks them.', 'Flagged. The check can be switched off.'],
              ['Sharing', VOLPI.sync, 'Sync, and group libraries shared with other people.'],
            ],
          },
        },
        {
          title: 'Where Zotero is the better choice',
          list: [
            'You cite in Word, LibreOffice or Google Docs.',
            'Your journal or department needs a style outside the six Volpi has.',
            'You collect sources from publisher pages and databases as you browse.',
            'You share a library with a lab or co-authors.',
            'You read on a phone or tablet.',
            'You want open-source software.',
          ],
        },
        {
          title: 'What Volpi adds',
          list: [
            'A paper editor with numbered headings, figures, equations and citations, which exports to Word, OpenDocument, PDF and LaTeX.',
            'Markdown notes that link to a file or to one page of a PDF, with a graph of the links.',
            'Checks on CSV, TSV and JSON data, and charts saved as SVG.',
            'A badge on each reference (Verified, Likely, Mismatch, Not found, Retracted) with the reason for it.',
            'Highlights, notes and papers as ordinary files in one project folder.',
          ],
        },
        {
          title: 'Using both',
          paragraphs: [
            'Export from Zotero as BibTeX, RIS or CSL JSON and Volpi reads it. Volpi exports the same three formats, so references you add or correct in Volpi can go back.',
            'Tags, collections, notes and Zotero\'s own highlights do not come across in this version. A direct import that carries them is being tested for the next one.',
          ],
          links: [{ label: 'How to bring references from Zotero', href: '/guides/move-references-from-zotero/' }],
        },
      ],
      sources: [
        { label: 'zotero.org', href: 'https://www.zotero.org/' },
        { label: 'Zotero storage plans', href: 'https://www.zotero.org/storage' },
        { label: 'Zotero licensing', href: 'https://www.zotero.org/support/licensing' },
        { label: 'Zotero PDF reader', href: 'https://www.zotero.org/support/pdf_reader' },
        { label: 'Zotero privacy policy', href: 'https://www.zotero.org/support/privacy' },
      ],
      related: [{ label: 'Citation styles in Volpi', href: '/formats/citation-styles/' }, DOWNLOAD],
    },
    {
      slug: 'mendeley',
      title: 'Volpi and Mendeley.',
      lede: 'Mendeley Reference Manager is an online reference library with a Word add-in and, since late 2025, AI tools. Volpi is an offline research desk with no account. The choice mostly comes down to where you want your library to live.',
      blocks: [
        {
          title: 'The short version',
          paragraphs: [
            'If you write in Word and want your library synced and shared through an account, with AI questions over your papers, Mendeley does that and Volpi does not.',
            'If you would rather not sign in to anything, and want notes, data and the paper itself beside the references, that is Volpi.',
          ],
        },
        {
          title: 'Side by side',
          table: {
            columns: ['', 'Volpi 0.1.1', 'Mendeley Reference Manager'],
            rows: [
              ['Price', VOLPI.price, 'A free tier with 2 GB of storage. Paid tiers from US$4.99 a month add storage and AI features.'],
              ['Runs on', VOLPI.platforms, 'Windows, macOS, Linux (Debian and Ubuntu) and the web.'],
              ['Your library', VOLPI.files, 'Synced to Mendeley\'s cloud through an account. It can be made available offline.'],
              ['PDF highlights', 'Built in. Saved as small files in the project.', 'Built in, with sticky notes. Synced with the library.'],
              ['Citation styles', 'Six: APA, IEEE, MLA, Chicago, Harvard and Vancouver.', 'Thousands, from the CSL repository.'],
              ['Citing while you write', 'In papers written inside Volpi.', 'In Word, with Mendeley Cite.'],
              ['Saving from the browser', 'No.', 'Yes, with the Web Importer.'],
              ['Sharing', VOLPI.sync, 'Private groups that share PDFs and annotations.'],
              ['AI', 'None in this version.', 'Reading Assistant and, on higher tiers, tools that work across your library.'],
            ],
          },
        },
        {
          title: 'Where Mendeley is the better choice',
          list: [
            'You cite in Word and want a style Volpi does not have.',
            'You share PDFs and annotations with a group.',
            'You want your library to follow you between computers today.',
            'You want to ask questions of your papers with AI.',
          ],
        },
        {
          title: 'What Volpi adds',
          list: [
            'No account, and a library that is a folder on your own computer.',
            'A badge on each reference saying whether a database has it, with retracted work flagged.',
            'Markdown notes linked to PDF pages, with a graph of the links.',
            'Data checks, charts, and a paper editor that exports to Word, OpenDocument, PDF and LaTeX.',
          ],
        },
        {
          title: 'Moving between them',
          paragraphs: ['Mendeley exports a library as BibTeX or RIS, and Volpi reads both. Volpi exports the same formats. Highlights and notes made in Mendeley do not come across.'],
          links: [{ label: 'How to bring references across', href: '/guides/move-references-from-zotero/' }],
        },
      ],
      sources: [
        { label: 'Mendeley pricing', href: 'https://www.mendeley.com/pricing' },
        { label: 'Supported systems for Mendeley products', href: 'https://www.elsevier.support/mendeley/answer/what-browsers-and-operating-systems-are-supported-for-mendeley-products' },
        { label: 'Mendeley Reference Manager guide', href: 'https://elsevier.libguides.com/Mendeley/mendeley-reference-manager' },
        { label: 'Mendeley Cite', href: 'https://www.mendeley.com/reference-management/mendeley-cite' },
        { label: 'Exporting a Mendeley library', href: 'https://www.elsevier.support/mendeley/answer/how-can-i-export-my-library' },
      ],
      related: [{ label: 'RIS in Volpi', href: '/formats/ris/' }, DOWNLOAD],
    },
    {
      slug: 'obsidian',
      title: 'Volpi and Obsidian.',
      lede: 'Both keep your notes as Markdown files in a folder you own. Obsidian is a general note-taking tool you shape with plug-ins. Volpi is narrower: it is built for research, with the PDF, reference and writing tools already in it.',
      blocks: [
        {
          title: 'The short version',
          paragraphs: [
            'If you want a note system you can bend to any purpose, on every device, with thousands of plug-ins, use Obsidian. Volpi has no plug-ins and no phone app.',
            'If you want to highlight PDFs, check references and write a paper without assembling and maintaining a set of plug-ins, that is what Volpi is for.',
          ],
        },
        {
          title: 'Side by side',
          table: {
            columns: ['', 'Volpi 0.1.1', 'Obsidian'],
            rows: [
              ['Price', VOLPI.price, 'Free, including for work. Sync and Publish are paid add-ons.'],
              ['Runs on', VOLPI.platforms, 'Windows, macOS, Linux, iOS and Android.'],
              ['Your notes', 'Markdown files in a plain project folder. No account.', 'Markdown files in a local folder called a vault. No account for local use.'],
              ['Links and graph', 'Links to files and to PDF pages, and a research graph.', 'Links, backlinks, a graph view, Canvas and Bases.'],
              ['PDF highlights', 'Built in.', 'The annotation tool we found is PDF++, a community plug-in.'],
              ['References', 'A built-in library, checked against scholarly databases, with six citation styles.', 'The citation tool we found is Citations, a community plug-in that reads a library exported from a reference manager.'],
              ['Plug-ins', 'None.', 'About 8,700 in the community directory.'],
              ['Sync', VOLPI.sync, 'Obsidian Sync, from US$4 a month billed yearly.'],
            ],
          },
        },
        {
          title: 'Where Obsidian is the better choice',
          list: [
            'You take notes on a phone or tablet as well as a computer.',
            'You want sync today.',
            'You like building your own system from plug-ins, or you already have one.',
            'Your notes are about more than research.',
            'You publish notes to the web.',
          ],
        },
        {
          title: 'What Volpi adds',
          list: [
            'PDF reading with highlights and comments, without a plug-in.',
            'A reference library that looks each reference up and flags retracted work.',
            'A paper editor with citations, cross-references and export to Word, OpenDocument, PDF and LaTeX.',
            'Checks and charts for CSV, TSV and JSON data.',
          ],
        },
        {
          title: 'Using both',
          paragraphs: [
            'Volpi\'s notes are ordinary .md files, so any Markdown editor can open them. Volpi\'s angle-bracket links are its own shorthand. If you want notes that read the same everywhere, write ordinary Markdown links, which Volpi also understands.',
          ],
        },
      ],
      sources: [
        { label: 'Obsidian pricing', href: 'https://obsidian.md/pricing' },
        { label: 'Obsidian Sync', href: 'https://obsidian.md/sync' },
        { label: 'How Obsidian stores data', href: 'https://help.obsidian.md/Files+and+folders/How+Obsidian+stores+data' },
        { label: 'Obsidian core plugins', href: 'https://help.obsidian.md/Plugins/Core+plugins' },
        { label: 'Obsidian community directory', href: 'https://community.obsidian.md/' },
        { label: 'PDF++ plug-in', href: 'https://github.com/RyotaUshio/obsidian-pdf-plus' },
        { label: 'Citations plug-in', href: 'https://github.com/hans/obsidian-citation-plugin' },
      ],
      related: [{ label: 'Notes and links in Volpi', href: '/docs/notes/' }, DOWNLOAD],
    },
    {
      slug: 'notion',
      title: 'Volpi and Notion.',
      lede: 'Notion is a shared online workspace for teams. Volpi is a desktop app for one researcher, with the files on that researcher\'s own computer. They overlap less than they seem to.',
      blocks: [
        {
          title: 'The short version',
          paragraphs: [
            'If a group needs to plan, write and comment in one place from any device, use Notion. Volpi has no sharing and no web or phone version.',
            'If you want your reading, notes and drafts kept as files on your own computer, with tools made for PDFs and references, that is Volpi.',
          ],
        },
        {
          title: 'Side by side',
          table: {
            columns: ['', 'Volpi 0.1.1', 'Notion'],
            rows: [
              ['Price', VOLPI.price, 'A free plan, and paid plans priced per member.'],
              ['Runs on', VOLPI.platforms, 'Desktop apps for Windows and macOS, iOS, Android and the web.'],
              ['Your data', VOLPI.files, 'Stored in Notion\'s cloud. You sign in with an account.'],
              ['Offline', 'Everything works offline except reference checks and updates.', 'Pages you download in the desktop or mobile app can be used offline.'],
              ['Format', 'Markdown notes, HTML papers and JSON highlights, as files.', 'Pages made of blocks and databases. Export to Markdown, CSV, PDF or HTML.'],
              ['Working together', 'No.', 'Shared workspaces, guests, comments and public pages.'],
              ['Charts', 'From CSV, TSV and JSON files, with checks for gaps and outliers.', 'Chart views of a database.'],
              ['AI', 'None in this version.', 'Notion Agent and other AI features.'],
            ],
          },
        },
        {
          title: 'Where Notion is the better choice',
          list: [
            'You work with other people in the same documents.',
            'You need your workspace in a browser or on a phone.',
            'You organise projects with databases, boards and connected services.',
          ],
        },
        {
          title: 'What Volpi adds',
          list: [
            'No account, and nothing stored on a company\'s servers.',
            'PDF reading with highlights and comments kept beside your notes.',
            'A reference library checked against scholarly databases, and citations formatted in six styles.',
            'A paper editor that exports to Word, OpenDocument, PDF and LaTeX.',
          ],
        },
      ],
      sources: [
        { label: 'Notion pricing', href: 'https://www.notion.com/pricing' },
        { label: 'Notion privacy practices', href: 'https://www.notion.com/help/privacy' },
        { label: 'Using Notion pages offline', href: 'https://www.notion.com/help/use-pages-offline' },
        { label: 'Exporting from Notion', href: 'https://www.notion.com/help/export-your-content' },
        { label: 'Notion charts', href: 'https://www.notion.com/help/charts' },
      ],
      related: [{ label: 'Volpi\'s privacy page', href: '/privacy/' }, DOWNLOAD],
    },
    {
      slug: 'scrivener',
      title: 'Volpi and Scrivener.',
      lede: 'Scrivener is a writing tool for long manuscripts of any kind. Volpi is a research tool that also writes papers. The difference shows in what surrounds the writing.',
      blocks: [
        {
          title: 'The short version',
          paragraphs: [
            'If you are writing a book, a screenplay or a thesis you want to plan on a corkboard and compile to an e-book, use Scrivener. It has years of work behind exactly that.',
            'If the writing is a research paper and you want the sources, citations, data and figures in the same place as the draft, Volpi covers that ground.',
          ],
        },
        {
          title: 'Side by side',
          table: {
            columns: ['', 'Volpi 0.1.1', 'Scrivener'],
            rows: [
              ['Price', VOLPI.price, 'US$59.99 for each platform, paid once for a major version.'],
              ['Runs on', VOLPI.platforms, 'macOS, Windows and iOS.'],
              ['Your project', 'A plain folder. Notes are Markdown, papers are HTML inside a .vdoc file.', 'On your own disk, as a .scriv project.'],
              ['Organising a long text', 'Numbered headings and an outline you can reorder.', 'Binder, outliner, corkboard and Scrivenings.'],
              ['Research PDFs', 'Read, highlight and comment. Link a page to a note.', 'View a PDF beside your writing.'],
              ['Citations', 'A built-in reference library, formatted in six styles.', 'Works with a separate citation manager.'],
              ['Export', 'Word, OpenDocument, PDF, Rich Text, HTML, Markdown, LaTeX and plain text.', 'Compiles to PDF, Word and EPUB, and exports to RTF, Final Draft, plain text and MultiMarkdown.'],
              ['AI', 'None in this version.', 'None in Scrivener itself, its makers say.'],
            ],
          },
        },
        {
          title: 'Where Scrivener is the better choice',
          list: [
            'Your manuscript is a book, and you want to shuffle scenes or chapters on a corkboard.',
            'You need an e-book (EPUB) or a screenplay format.',
            'You write on an iPad or iPhone.',
            'You already have projects in Scrivener.',
          ],
        },
        {
          title: 'What Volpi adds',
          list: [
            'It runs on Linux.',
            'References are in the same app: add one by DOI, check it, cite it, and the reference list formats itself.',
            'Highlights on the PDFs you are writing from, and notes that link to a page.',
            'Data checks and charts, saved as SVG figures for the paper.',
            'LaTeX and OpenDocument export.',
          ],
        },
      ],
      sources: [
        { label: 'Scrivener overview', href: 'https://www.literatureandlatte.com/scrivener/overview' },
        { label: 'How Scrivener licensing works', href: 'https://www.literatureandlatte.com/how-our-licensing-works' },
        { label: 'Exporting from Scrivener', href: 'https://www.literatureandlatte.com/blog/how-to-export-scrivener-projects-and-why-you-might-want-to' },
        { label: 'Does Scrivener use AI?', href: 'https://scrivener.tenderapp.com/help/kb/general/does-scrivener-use-ai' },
      ],
      related: [{ label: 'Writing papers in Volpi', href: '/docs/papers/' }, DOWNLOAD],
    },
  ],
};

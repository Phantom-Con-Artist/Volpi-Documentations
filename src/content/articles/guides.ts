import type { ArticleSection } from '@/types/content';

/** Step-by-step guides for Volpi 0.1.1. Button and menu names were read from the app at v0.1.1
 *  (apps/desktop/src/components/citations/, components/pdf/ and features/markdown/wikiLinks.ts). */
export const GUIDES: ArticleSection = {
  id: 'guides',
  kicker: 'Guides',
  title: 'Guides.',
  lede: 'How to do one thing at a time in Volpi, step by step, with the limits said plainly.',
  back: 'All guides',
  footnote: 'Written for Volpi 0.1.1. Button names are the ones in that version.',
  articles: [
    {
      slug: 'check-references',
      title: 'How to check that a reference is real.',
      lede: 'Volpi looks a reference up in public scholarly databases and tells you whether it exists, whether its details match yours, and whether it has been retracted.',
      blocks: [
        {
          title: 'Before you start',
          paragraphs: [
            'Checks use the internet, and only when the Online checks setting in References allows it. There are three choices: When I click (the default), Automatic, which also checks papers right after you import them, and Off, which never contacts the internet.',
          ],
        },
        {
          title: 'Check one reference',
          steps: [
            'Open References. It lists every source in the project.',
            'If the reference is not there yet, choose Add references. Paste a DOI, an arXiv id or a PubMed id and choose Look up, or choose Type it in, or paste BibTeX, RIS or CSL JSON.',
            'Choose Verify on the reference. To do the whole library at once, use Check every unchecked reference online.',
            'Read the badge, and the reason beside it.',
          ],
        },
        {
          title: 'What the badges mean',
          table: {
            columns: ['Badge', 'Meaning'],
            rows: [
              ['Verified', 'A database has this work and it agrees with yours: the title closely matches, the first author is the same and the year is within one.'],
              ['Likely', 'A database has a work that is probably this one, but the details are not close enough to be sure.'],
              ['Mismatch', 'Your details disagree with the database. The DOI may belong to a different paper, or the authors or year differ.'],
              ['Not found', 'No record came close enough.'],
              ['Retracted', 'The database marks this work as retracted.'],
              ['Verified by you', 'You marked it yourself with I checked it myself.'],
            ],
          },
        },
        {
          title: 'When the badge is not Verified',
          list: [
            'Choose Compare to see your details and the database record side by side. If yours are right, choose Mine is right.',
            'If Volpi says the DOI points to a different paper, the DOI was probably mistyped or copied from the wrong line. Remove the wrong DOI and check again.',
            'Books, theses and older works are often missing from these databases. When you have checked one yourself, choose I checked it myself.',
            'Recheck runs the lookup again after you correct something.',
          ],
        },
        {
          title: 'Where Volpi looks, and what it sends',
          paragraphs: [
            'A reference with a DOI is looked up in Crossref, then in OpenAlex if Crossref does not have it. One with an arXiv id is looked up in arXiv, and one with a PubMed id in PubMed. Without any identifier, Volpi searches Crossref, then OpenAlex, with a short citation: the first author\'s family name, the year, the title and the journal.',
            'Nothing else is sent. Not the paper you are writing, not your notes, not your name.',
          ],
          links: [{ label: 'The privacy page has the details', href: '/privacy/' }],
        },
        {
          title: 'What a check cannot tell you',
          list: [
            'Verified means the work exists and is described correctly. It does not mean the work supports your sentence.',
            'Retraction flags come from what Crossref, OpenAlex and PubMed record. A retraction none of them has recorded will not show.',
            'Not found is not proof that a reference is invented. It means none of these databases has a close match.',
          ],
        },
      ],
      related: [{ label: 'Reference checks in the docs', href: '/docs/reference-checks/' }, { label: 'Citation styles', href: '/formats/citation-styles/' }],
    },
    {
      slug: 'chart-a-table-from-a-pdf',
      title: 'How to chart a table from a PDF, or save it as CSV.',
      lede: 'Volpi finds the captioned tables in a PDF. You can turn one into a chart, a CSV file or a note without retyping it.',
      blocks: [
        {
          title: 'A table with a caption',
          steps: [
            'Open the PDF in Volpi.',
            'Open the side panel and look under Figures, tables and references. Choose Tables to list the tables Volpi found.',
            'Choose Chart or save on the table you want.',
            'Pick what to do with it: chart it, save the table as a CSV file in the project, or make a new note with the table and a link to its page.',
          ],
          note: 'Saving as CSV opens the new file beside the PDF, so you can check it against the page.',
        },
        {
          title: 'A table without a caption',
          paragraphs: ['Volpi recognises a table by its caption, so a table without one is not listed. Select it by hand.'],
          steps: [
            'Choose the Chart tool in the PDF toolbar.',
            'Drag a box around the table, including its header row.',
            'Carry on as above.',
          ],
        },
        {
          title: 'Making the chart',
          paragraphs: [
            'Volpi suggests a chart for the table. Change the chart type or open Customise chart for your own title and labels. When the table has no numeric columns, the chart shows how often each label appears.',
            'Save the chart writes an SVG file into the project, ready to place in a paper.',
          ],
        },
        {
          title: 'Limits',
          list: [
            'A scanned PDF has no text for Volpi to read, so its tables cannot be found or charted. This version has no OCR.',
            'Unusual table layouts can be read wrongly. Compare the CSV with the page before you rely on it.',
            'The original PDF is never changed.',
          ],
        },
      ],
      related: [{ label: 'Data and charts in the docs', href: '/docs/data/' }, { label: 'Reading PDFs in the docs', href: '/docs/reading/' }],
    },
    {
      slug: 'link-a-note-to-a-pdf-page',
      title: 'How to link a note to a page of a PDF.',
      lede: 'A note in Volpi can point at a paper, or at one page of it, so the claim and its source stay one click apart.',
      blocks: [
        {
          title: 'Write the link',
          paragraphs: ['Notes are Markdown files. A link is the file name, with its ending, in angle brackets.'],
          table: {
            columns: ['You type', 'What it does'],
            rows: [
              ['<Dill 2012.pdf>', 'Links to that file.'],
              ['<Dill 2012.pdf#page=3>', 'Opens the PDF on page 3.'],
              ['<Literature/Dill 2012.pdf>', 'Names the folder too, for when two files share a name.'],
              ['[the folding paper](Dill 2012.pdf)', 'An ordinary Markdown link, showing your own words.'],
            ],
          },
          note: 'The ending matters. <Dill 2012> without .pdf is not a link.',
        },
        {
          title: 'Start from the PDF instead',
          list: [
            'In the PDF toolbar, Add a note to this page makes a note about the page you are on.',
            'In the highlights panel, New linked note starts a note that links back to the PDF.',
            'With a note or paper open beside the PDF, you can quote or cite a highlight straight into it.',
          ],
        },
        {
          title: 'What happens when files move',
          paragraphs: [
            'Move or rename a file inside Volpi and the links to it in your notes and papers are updated. Undo reverses the move and the links together.',
            'A file renamed in your file manager, outside Volpi, is not followed. Check branch finds the links that broke.',
          ],
        },
        {
          title: 'See the links',
          paragraphs: ['The research graph draws the links between your notes, papers and files. Select a note to see what it connects to.'],
        },
      ],
      related: [{ label: 'Link syntax in the docs', href: '/docs/links/' }, { label: 'Notes and links in the docs', href: '/docs/notes/' }],
    },
    {
      slug: 'move-references-from-zotero',
      title: 'How to bring references from Zotero, Mendeley or EndNote.',
      lede: 'Volpi 0.1.1 has no one-click import from another reference manager. It reads the files they export, which carries the references across but not everything attached to them.',
      blocks: [
        {
          title: 'Bring the references',
          steps: [
            'In your reference manager, export the library, or the collection you need, as BibTeX, RIS or CSL JSON.',
            'In Volpi, open References and choose Add references.',
            'Choose Paste BibTeX / RIS / CSL-JSON, paste the contents of the exported file, and choose Add to library.',
          ],
          note: 'You can also import the .bib or .ris file into the project and read it as a list of references from there.',
        },
        {
          title: 'Bring the PDFs',
          paragraphs: [
            'Import the PDF files into the project. This version imports files you select, not whole folders, and each import can hold up to 512 MB.',
            'A PDF that looks like a research paper gets its own citation when it is imported. To tie a PDF to a reference you already brought in, use Link PDF to reference.',
          ],
        },
        {
          title: 'What comes across, and what does not',
          table: {
            columns: ['Comes across', 'Stays behind'],
            rows: [
              ['Authors, title, year', 'Tags and collections'],
              ['Journal or book, volume, issue, pages', 'Notes and abstracts'],
              ['Publisher, DOI, web address', 'Highlights made in the other program'],
              ['BibTeX citation keys', 'Attached files (import those yourself)'],
            ],
          },
        },
        {
          title: 'Check what arrived',
          paragraphs: ['Choose Check every unchecked reference online to look the new references up. It is a quick way to catch an export that mangled a title or dropped a year.'],
          links: [{ label: 'How to check references', href: '/guides/check-references/' }],
        },
        {
          title: 'Coming in the next version',
          paragraphs: ['A direct import from Zotero, with attached PDFs, tags and collections, is built and being tested, along with whole-folder import. Neither is in the version you can download today.'],
          links: [{ label: 'See the roadmap', href: '/roadmap/' }],
        },
      ],
      related: [{ label: 'BibTeX in Volpi', href: '/formats/bibtex/' }, { label: 'RIS in Volpi', href: '/formats/ris/' }, { label: 'Volpi compared with Zotero', href: '/vs/zotero/' }],
    },
  ],
};

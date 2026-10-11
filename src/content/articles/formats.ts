import type { ArticleSection } from '@/types/content';

/** How Volpi 0.1.1 reads and writes reference files. Checked against the app at v0.1.1:
 *  apps/desktop/src/features/citations/formats.ts, features/paper/references.ts and components/citations/. */
const REFERENCES = { label: 'References and citations in the docs', href: '/docs/references/' };

export const FORMATS: ArticleSection = {
  id: 'formats',
  kicker: 'Formats',
  title: 'Reference formats and citation styles.',
  lede: 'What Volpi reads and writes when references move between programs, field by field, with the limits of this version.',
  back: 'All formats',
  footnote: 'Describes Volpi 0.1.1.',
  articles: [
    {
      slug: 'bibtex',
      title: 'BibTeX in Volpi.',
      lede: 'Volpi reads BibTeX, keeps a references.bib file in every project, and exports .bib for LaTeX.',
      blocks: [
        {
          title: 'Bringing BibTeX in',
          paragraphs: ['There are two ways, and both end in the same reference library.'],
          steps: [
            'Open References and choose Add references.',
            'Choose Paste BibTeX / RIS / CSL-JSON and paste the entries. Volpi works out which of the three formats it is.',
            'Choose Add to library.',
          ],
          note: 'You can also import a .bib file into the project like any other file. It opens as text, and Volpi can read it as a list of references and add them to the library.',
        },
        {
          title: 'Citation keys are kept',
          paragraphs: ['LaTeX documents cite by key, so the key of each imported entry is kept as it is. References that turn out to be the same work are merged, not added twice.'],
        },
        {
          title: 'The references.bib in your project',
          paragraphs: [
            'The library of a project is saved as references.bib inside the project folder, and Volpi keeps that file up to date as the library changes.',
            'If you edit references.bib in another program, Volpi notices and stops updating it, so your edits are safe. To let Volpi manage it again, export a fresh .bib or remove the file.',
          ],
        },
        {
          title: 'What an exported entry holds',
          paragraphs: ['Choose Export in References, then BibTeX (.bib). Each entry is written with these fields when the reference has them.'],
          table: {
            columns: ['Field', 'Notes'],
            rows: [
              ['author', 'Family name first, joined with "and".'],
              ['title', 'In double braces, so capitals in acronyms and names survive.'],
              ['journal, booktitle or organization', 'Depending on the kind of reference.'],
              ['year, volume, number, pages', 'Page ranges use the double hyphen LaTeX expects.'],
              ['publisher, school or institution', 'Depending on the kind of reference.'],
              ['doi, url', 'As stored.'],
            ],
          },
          note: 'Entry types written: article, book, incollection, inproceedings, phdthesis, techreport, online and misc.',
        },
        {
          title: 'Limits in this version',
          list: [
            'Every thesis is exported as @phdthesis, including a master\'s thesis.',
            'BibTeX that relies on @string abbreviations, LaTeX accent commands or month names may not read correctly, and an entry with an unclosed brace can hide the entries after it. A sturdier reader is being tested for the next version.',
            'Abstracts, keywords and notes in a .bib file are not kept.',
          ],
        },
      ],
      related: [REFERENCES, { label: 'RIS in Volpi', href: '/formats/ris/' }, { label: 'Move references from Zotero', href: '/guides/move-references-from-zotero/' }],
    },
    {
      slug: 'ris',
      title: 'RIS in Volpi.',
      lede: 'RIS is the format EndNote, Zotero and Mendeley all export. Volpi reads it and writes it.',
      blocks: [
        {
          title: 'Bringing RIS in',
          steps: [
            'In your other program, export the references you want as RIS.',
            'In Volpi, open References and choose Add references.',
            'Choose Paste BibTeX / RIS / CSL-JSON, paste the contents of the .ris file, then choose Add to library.',
          ],
          note: 'A .ris file imported into the project opens as text, and can be read as a list of references too.',
        },
        {
          title: 'Tags Volpi reads',
          table: {
            columns: ['Tag', 'Becomes'],
            rows: [
              ['TY', 'The kind of reference: JOUR, BOOK, CHAP, CPAPER or CONF, THES, RPRT, ELEC. Anything else becomes "other".'],
              ['AU, A1', 'Authors, one per line.'],
              ['TI, T1', 'Title.'],
              ['JO, JF, T2, BT', 'Journal or book title. The first one found is used.'],
              ['PY, Y1, DA', 'Year. Only the four-digit year is kept.'],
              ['VL, IS', 'Volume and issue.'],
              ['SP, EP', 'First and last page, joined into a range.'],
              ['PB', 'Publisher.'],
              ['DO, UR', 'DOI and web address.'],
              ['ER', 'End of the record.'],
            ],
          },
        },
        {
          title: 'What is not read',
          list: [
            'Abstracts (AB), keywords (KW), notes (N1) and editors are skipped.',
            'A record is only kept once its ER line is reached, so a file whose last record has no ER line loses that record.',
            'A value wrapped onto a second line is cut at the line break.',
          ],
          note: 'The last two are fixed in the reader being tested for the next version.',
        },
        {
          title: 'Exporting RIS',
          paragraphs: ['Choose Export in References, then RIS (.ris). Each record is written with TY, ID, AU, TI, JO or T2, PY, VL, IS, SP, EP, PB, DO and UR, and closed with ER.'],
        },
      ],
      related: [REFERENCES, { label: 'BibTeX in Volpi', href: '/formats/bibtex/' }, { label: 'CSL JSON in Volpi', href: '/formats/csl-json/' }],
    },
    {
      slug: 'csl-json',
      title: 'CSL JSON in Volpi.',
      lede: 'CSL JSON is the format Zotero and Pandoc use to pass references around. Volpi reads it and writes it.',
      blocks: [
        {
          title: 'Bringing CSL JSON in',
          paragraphs: [
            'Open References, choose Add references, then Paste BibTeX / RIS / CSL-JSON, and paste the JSON. Volpi accepts a list of items, a single item, or an object with an "items" list.',
            'An item needs a title or an author to be read.',
          ],
        },
        {
          title: 'Fields Volpi reads and writes',
          table: {
            columns: ['CSL field', 'In Volpi'],
            rows: [
              ['type', 'article-journal, book, chapter, paper-conference, thesis, report and webpage map to Volpi\'s kinds. Other types beginning with "article" become articles, the rest "other".'],
              ['author', 'Family and given names, or a literal name for an organisation.'],
              ['title', 'Title.'],
              ['issued', 'The year from date-parts.'],
              ['container-title', 'Journal or book title.'],
              ['volume, issue, page', 'As written.'],
              ['publisher', 'Publisher.'],
              ['DOI, URL', 'DOI and web address.'],
            ],
          },
          note: 'Other fields, such as abstract, editor and the full date, are not kept in this version.',
        },
        {
          title: 'Exporting CSL JSON',
          paragraphs: ['Choose Export in References, then CSL-JSON (.json). The file is a list of items with the fields above, ready for Pandoc or for importing into Zotero.'],
        },
      ],
      related: [REFERENCES, { label: 'BibTeX in Volpi', href: '/formats/bibtex/' }, { label: 'Citation styles', href: '/formats/citation-styles/' }],
    },
    {
      slug: 'citation-styles',
      title: 'Citation styles in Volpi.',
      lede: 'Volpi 0.1.1 formats citations and reference lists in six styles. Here is the list, and what to do when you need another.',
      blocks: [
        {
          title: 'The six styles',
          table: {
            columns: ['Style', 'How it cites'],
            rows: [
              ['APA (7th edition)', 'Author and year.'],
              ['Harvard', 'Author and year.'],
              ['Chicago (author-date)', 'Author and year.'],
              ['MLA (9th edition)', 'Author.'],
              ['IEEE', 'Numbers in square brackets, in the order cited.'],
              ['Vancouver', 'Numbers, in the order cited.'],
            ],
          },
        },
        {
          title: 'Where the style is used',
          paragraphs: [
            'A paper you write in Volpi has one citation style. Citations in the text and the reference list at the end are formatted for you, and they change together when you change the style.',
            'A reference file can also be saved as a formatted reference list in any of the six.',
          ],
        },
        {
          title: 'When your journal wants another style',
          paragraphs: [
            'These six are the only styles in this version. You cannot add a style file, and there is no plug-in for Word or LibreOffice.',
            'If a journal needs its own style, export your references as BibTeX, RIS or CSL JSON and format them with a tool that carries that style, such as Zotero or Pandoc. Exporting the paper to LaTeX is another route, since LaTeX has its own bibliography styles.',
          ],
        },
      ],
      related: [REFERENCES, { label: 'Writing papers in the docs', href: '/docs/papers/' }, { label: 'Volpi compared with Zotero', href: '/vs/zotero/' }],
    },
  ],
};

import type { RefTable } from '@/types/content';
import { LOOKUP_ENDPOINTS, ONLINE_MODES } from './privacy.content';

/** Reference tables for the docs page. Every fact here also appears elsewhere in the docs or the privacy policy. */
export const REFERENCE_HEAD = {
  kicker: 'Reference',
  title: 'Reference',
  intro: 'Look things up: the words Volpi uses, how links are written, which files it works with, and how reference checks reach the internet.',
};

export const REFERENCE_TABLES: RefTable[] = [
  {
    id: 'glossary', title: 'Glossary', intro: 'The words Volpi uses, in one place.',
    columns: ['Word', 'Meaning'],
    rows: [
      { term: 'Branch', text: 'One research project. It is an ordinary folder on your disk that you can open in any file manager.' },
      { term: 'Profile', text: 'A separate workspace on one computer, with its own branches and settings. A profile can have a password, which locks it inside Volpi but does not encrypt its files.' },
      { term: 'Dashboard', text: 'The overview each branch opens on: recent work, reading progress, files that need attention and reference problems.' },
      { term: 'Highlight file', text: 'The small file beside a PDF that holds its highlights and comments. The PDF itself is never changed.' },
      { term: 'Paper (.vdoc)', text: 'A paper you write in Volpi. It is a .vdoc file, which is plain HTML inside.' },
      { term: 'Reference library', text: 'The references in a branch, each checked against public scholarly databases.' },
      { term: 'Research graph', text: 'A map of the links between your notes, papers and figures.' },
      { term: 'Branch check', text: 'Finds broken links and files that need attention. In this beta its button still says Vault check.' },
      { term: 'Shelf view', text: 'Shows your papers as book spines. Taller spines are larger files.' },
      { term: 'Launchpad', text: 'The files and websites you pinned because you return to them most.' },
      { term: 'Zen mode', text: 'Hides everything but the page. Press Esc to leave it.' },
      { term: 'Focus timer', text: 'Times 25 minute work sessions.' },
      { term: 'Mochi', text: 'The optional guide who gives tips. Switch her off in Settings.' },
    ],
  },
  {
    id: 'links', title: 'Link syntax', intro: 'How to link a note to another file, or to one page of a PDF.',
    columns: ['You type', 'What it does'], code: true,
    rows: [
      { term: '<name>', text: 'Links to the file with that name.' },
      { term: '[text](name)', text: 'Links to the file, showing your own text instead of its name.' },
      { term: '<paper.pdf#page=3>', text: 'Opens the PDF on page 3. Add #page= and a page number after the file name.' },
    ],
    note: 'Move or rename a file and every link to it is updated. Undo reverses it.',
  },
  {
    id: 'formats', title: 'File formats', intro: 'What Volpi does with each kind of file.',
    columns: ['Format', 'What Volpi does'], code: true,
    rows: [
      { term: '.md', text: 'Notes. Edit, split view or reading view.' },
      { term: '.pdf', text: 'Read, highlight and comment. Export an annotated copy. Draw a box around a table to chart it.' },
      { term: '.csv  .tsv  .json', text: 'Checked for gaps, typos in labels and outliers, then charted.' },
      { term: '.vdoc', text: 'Papers written in Volpi. Plain HTML inside.' },
      { term: '.docx', text: 'Papers export to Word, and Word documents can be imported. Search reads their text, footnotes and comments.' },
      { term: '.xlsx', text: 'Search reads the text of Excel workbooks and shows the sheet and row of a match.' },
      { term: '.odt  .rtf  .html  .tex  .txt', text: 'Papers also export to OpenDocument, Rich Text, a web page, LaTeX and plain text, and to Markdown (.md).' },
      { term: '.png  .jpg  .gif  .webp  .avif  .bmp  .tiff', text: 'Pictures open in the picture tools: crop, turn, flip, greyscale, brightness and contrast. Save a copy writes a new file. SVG opens too.' },
      { term: '.txt  .tex  .bib  .ris', text: 'Plain text and reference files open in Volpi and are kept in Versions like notes. A .bib or .ris file can be read as a list of references and added to the library.' },
      { term: '.svg', text: 'Charts are saved as SVG, ready for a paper.' },
      { term: '.bib  .ris  CSL-JSON', text: 'References export to BibTeX, RIS and CSL-JSON.' },
      { term: 'Anything else', text: 'Any file type can be imported. The original is copied, never changed.' },
    ],
    note: 'Files over 512 MB and password-protected PDFs cannot be imported yet.',
  },
  {
    id: 'checks', title: 'Reference checks', intro: 'Each reference is looked up in Crossref and OpenAlex, or in arXiv or PubMed by its ID, and gets a badge. The badge says why (title, first author, year) and when it was checked.',
    columns: ['Badge or database', 'Meaning'],
    rows: [
      { term: 'Verified', text: 'A database has this work, and its title, first author and year match yours. Without a DOI or other ID, only a near-perfect match counts.' },
      { term: 'Likely', text: 'A database has a work that is probably this one, but the details are not close enough to be sure.' },
      { term: 'Mismatch', text: 'Your details disagree with the database. Either the DOI or ID belongs to a different work, or the authors or year differ. Compare shows both side by side.' },
      { term: 'Not found', text: 'No record came close enough.' },
      { term: 'Retracted', text: 'The database marks this work as retracted.' },
      { term: 'Verified by you', text: 'You marked it with I checked it myself. Useful for books and older works.' },
      { term: 'Unchecked', text: 'Not checked yet.' },
      ...LOOKUP_ENDPOINTS.map((e) => ({ term: e.name, text: `${e.host}. Sends ${e.sends.charAt(0).toLowerCase()}${e.sends.slice(1)}.` })),
    ],
    note: 'Matching is careful rather than eager. Books, theses and older works often show Likely or Not found even when they are real. A verified reference exists, but Volpi cannot tell whether it supports your sentence.',
  },
  {
    id: 'online', title: 'Internet settings', intro: 'Reference checks are the only feature that uses the internet. You choose when they run.',
    columns: ['Setting', 'What happens'],
    rows: ONLINE_MODES.map((m) => ({ term: m.isDefault ? `${m.name} (default)` : m.name, text: m.text })),
    note: 'A check never sends your files, notes, name or anything about how you use Volpi. See the privacy policy.',
  },
];

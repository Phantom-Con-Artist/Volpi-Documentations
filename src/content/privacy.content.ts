import type { PolicySection } from '@/types/content';

/** Facts verified against the app: ../Volpi/src-tauri/src/citations/online.rs and src/features/citations/settings.ts. */
export const PRIVACY_HEAD = {
  kicker: 'Privacy',
  title: 'Your files stay on your computer.',
  text: 'Volpi is a desktop app. It has no account, no server and no analytics. We value your privacy and respect it.',
};

export const PRIVACY_SUMMARY: string[] = [
  'Your files never leave your computer.',
  'Volpi only uses the internet to check references, and by default only when you click.',
  'It sends an identifier or a short citation. Never your notes, PDFs or name.',
  'There is no tracking and no telemetry. This version has no AI features.',
];

export const LOOKUP_ENDPOINTS: { name: string; host: string; sends: string }[] = [
  { name: 'Crossref', host: 'api.crossref.org', sends: 'A DOI, or a citation or title' },
  { name: 'OpenAlex', host: 'api.openalex.org', sends: 'A DOI, or a citation or title' },
  { name: 'arXiv', host: 'export.arxiv.org', sends: 'An arXiv identifier' },
  { name: 'PubMed', host: 'eutils.ncbi.nlm.nih.gov', sends: 'A PubMed ID' },
];

export const ONLINE_MODES: { name: string; text: string; isDefault?: boolean }[] = [
  { name: 'When I click', text: 'Only when you press Verify or Look up.', isDefault: true },
  { name: 'Automatic', text: 'Also checks papers right after you import them.' },
  { name: 'Off', text: 'Volpi never contacts the internet.' },
];

export const PRIVACY_SECTIONS: PolicySection[] = [
  {
    id: 'stays',
    title: 'What stays on your computer',
    paragraphs: ['Everything you make or import in Volpi is stored on your own disk, in folders you choose.'],
    list: [
      'Your branches: PDFs, notes, papers, data, figures and references.',
      'Highlights, comments and the history of every change.',
      'Profiles, profile passwords and settings.',
    ],
  },
  {
    id: 'network',
    title: 'When Volpi uses the internet',
    paragraphs: [
      'Reference checks are the only feature that connects to the internet. When a reference is checked, Volpi asks one of four public scholarly databases whether it exists and how it is described.',
      'Only fixed addresses can be reached. Each request has a time and size limit, and Volpi waits between requests so it does not overload the databases.',
      'Volpi identifies itself as "Volpi/0.1". Like any web request, the database can see your IP address. Their own privacy policies apply to what they receive.',
    ],
  },
  {
    id: 'never',
    title: 'What is never sent',
    paragraphs: ['A reference check never includes:'],
    list: [
      'The contents of any file, note, paper or highlight.',
      'Your name, profile or the names of your folders.',
      'Anything about how you use Volpi.',
    ],
  },
  {
    id: 'links',
    title: 'Links you open',
    paragraphs: [
      'Launchpad shortcuts and web links in your documents open in your own web browser. From there, the browser and that website handle your visit, not Volpi.',
    ],
  },
  {
    id: 'not',
    title: 'What Volpi does not do',
    list: [
      'No account or sign-in.',
      'No analytics, telemetry or crash reports.',
      'No ads and no selling of data, because there is no data to sell.',
      'No AI features in this version. Machine-learning tools are planned for later (see the roadmap). They will run on your computer, and your files will never be sent anywhere to train a model.',
      'No automatic update checks in the beta.',
    ],
    paragraphs: [],
  },
  {
    id: 'passwords',
    title: 'Profile passwords',
    paragraphs: [
      'A profile password keeps that profile closed inside Volpi. It does not encrypt your files. Branch folders stay ordinary files that anyone with access to your computer can open. Use your system\'s disk encryption if you need that.',
    ],
  },
  {
    id: 'delete',
    title: 'Deleting your data',
    paragraphs: [
      'Delete a branch folder and it is gone. Uninstall Volpi to remove the app. There is nothing to delete on our side, because we never had it.',
    ],
  },
  {
    id: 'website',
    title: 'This website',
    paragraphs: [
      'This site uses no cookies, no analytics and no third-party scripts. Fonts are served from this site. Your theme choice, whether Mochi is hidden and whether you chose to read the home page or watch Mochi\'s tour are kept in your browser\'s local storage and never sent anywhere.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    paragraphs: [
      'If a future version adds anything that uses the internet, this page will say so before that version is released, and the feature will be listed here with what it sends.',
    ],
  },
];

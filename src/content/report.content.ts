import type { ReportStep } from '@/types/content';
import { BUG_REPORT_URL, DISCORD_URL, NEW_BUG_URL, NEW_DOCS_ISSUE_URL, SECURITY_URL } from './site.content';

export const REPORT_HEAD = {
  kicker: 'Report a bug',
  title: 'Found a bug? Tell us.',
  text: 'Volpi is in beta, so things will break. A clear report lets us find the problem and fix it. Here is how to write one.',
};

export const REPORT_STEPS: ReportStep[] = [
  {
    title: 'Check that it is not already known.',
    text: 'Some limits of the beta are already listed. Someone may also have reported your bug. If they have, add your details to their report instead of opening a new one.',
    links: [
      { label: 'Known limits', href: '/docs/#limits' },
      { label: 'Existing reports', href: BUG_REPORT_URL },
    ],
  },
  {
    title: 'Note your setup.',
    text: 'We need to know which Volpi and which computer.',
    points: ['Your Volpi version. It is shown in the update log on the Home screen.', 'Your operating system and its version, for example Fedora 44 or Ubuntu 24.04.'],
  },
  {
    title: 'Make it happen again.',
    text: 'A bug we can repeat is a bug we can fix. Try it once more and write down exactly what you did.',
    points: ['The steps, one by one, from opening Volpi.', 'What you expected to happen.', 'What happened instead. Copy any error message word for word.', 'Whether it happens every time, sometimes or only once.'],
  },
  {
    title: 'Keep your research private.',
    text: 'Bug reports are public. Your research does not belong in them.',
    points: ['Do not attach your own files, participant data or personal details.', 'If a file is needed to show the bug, make a small example instead.', 'Check screenshots before you add them.'],
  },
  {
    title: 'Open the report on GitHub.',
    text: 'Pick the form that fits. It asks for everything above, one box at a time. You need a free GitHub account.',
    links: [
      { label: 'Bug in Volpi', href: NEW_BUG_URL },
      { label: 'Documentation or website problem', href: NEW_DOCS_ISSUE_URL },
    ],
  },
];

export const REPORT_ASIDE = {
  noAccount: { title: 'No GitHub account?', text: 'Tell us on Discord. Describe the bug the same way, and we will take it from there.' },
  notBug: { title: 'Not a bug?', text: 'Questions, ideas and feature requests go to Discord too.' },
  security: { title: 'A security problem?', text: 'Please do not post it publicly. Read how to report it privately.', link: { label: 'Security policy', href: SECURITY_URL } },
  discord: DISCORD_URL,
  mochi: 'Bugs are my natural enemy. Every report is a tiny victory.',
  thanks: 'Thank you. Every report makes the beta a little less beta.',
};

import type { Fact } from '@/types/content';

/** Why Volpi keeps research on the user's computer. Shown on the home page and at the top of the privacy page. */
export const WHY_LOCAL_REASONS: Fact[] = [
  {
    title: 'Unpublished work is yours.',
    text: 'Drafts, ideas and early results belong to you. Nobody else should see them before you choose to share them.',
  },
  {
    title: 'Participant data needs care.',
    text: 'Interviews, surveys and health data often come with ethics approval and data protection rules. When the files stay on your disk, you decide where they are kept and who can open them.',
  },
  {
    title: 'Your files outlast the app.',
    text: 'Notes are Markdown and every project is an ordinary folder. You can open your work without Volpi, and without us.',
  },
  {
    title: 'It works offline.',
    text: 'In the library, on a train or in the field. Only reference checks need the internet, and you can turn them off.',
  },
];

/** What we commit to. Each line must stay true for every release. */
export const PRIVACY_PROMISE = {
  title: 'We value your privacy and respect it.',
  points: [
    'We do not collect your files or anything about how you use Volpi.',
    'We do not sell or share data about you. We do not have any.',
    'If a new version needs the internet for something new, the privacy policy will say so before that version is released.',
  ],
};

export const WHY_LOCAL_HOME = {
  kicker: 'No. 05',
  chapter: '第五話',
  title: 'Why it stays local.',
  text: 'Research is private until you publish it. Volpi keeps your work on your computer, because that is where it belongs.',
  link: 'Read the privacy policy',
};

export const WHY_LOCAL_PRIVACY = {
  title: 'Why privacy matters',
  intro: 'Your research is private long before it is published. We built Volpi to keep it with you.',
  policyTitle: 'Why this policy exists',
  policy: 'You should be able to check what software does with your work. This page lists every time Volpi uses the internet and exactly what it sends, so you can decide for yourself. You can also show it to your supervisor or ethics board.',
};

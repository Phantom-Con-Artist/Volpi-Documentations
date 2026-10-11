import { BookOpen, History } from 'lucide-react';
import { P5Button } from '@/components/buttons/P5Button';
import { DOCS_TABS, RELEASES_HEAD } from '@/content/releases.content';

export type DocsTab = 'guide' | 'releases';

/** Guide or release notes: two P5 links above the docs. Each is its own page, so both can be found by a search. */
export function DocsTabs({ current }: { current: DocsTab }) {
  const option = (value: DocsTab, label: string, href: string, Icon: typeof BookOpen) => (
    <P5Button href={href} primary={current === value} aria-current={current === value ? 'page' : undefined}>
      <Icon size={17} aria-hidden="true" />{label}
    </P5Button>
  );
  return (
    <nav aria-label={DOCS_TABS.label} className="mb-12 flex flex-wrap gap-4">
      {option('guide', DOCS_TABS.guide, DOCS_TABS.guideHref, BookOpen)}
      {option('releases', DOCS_TABS.releases, RELEASES_HEAD.href, History)}
    </nav>
  );
}

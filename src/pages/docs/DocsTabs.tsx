import type { KeyboardEvent } from 'react';
import { BookOpen, History } from 'lucide-react';
import { P5Button } from '@/components/buttons/P5Button';
import { DOCS_TABS } from '@/content/releases.content';

export type DocsTab = 'guide' | 'releases';

/** Guide or release notes: two P5 tabs above the docs. Arrow keys move between them. */
export function DocsTabs({ tab, onChange }: { tab: DocsTab; onChange: (tab: DocsTab) => void }) {
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next = tab === 'guide' ? 'releases' : 'guide';
    onChange(next);
    document.getElementById(`docs-tab-${next}`)?.focus();
  };
  const option = (value: DocsTab, label: string, Icon: typeof BookOpen) => (
    <P5Button
      id={`docs-tab-${value}`}
      primary={tab === value}
      role="tab"
      aria-selected={tab === value}
      aria-controls={`docs-panel-${value}`}
      tabIndex={tab === value ? 0 : -1}
      onClick={() => onChange(value)}
    >
      <Icon size={17} aria-hidden="true" />{label}
    </P5Button>
  );
  return (
    <div role="tablist" aria-label={DOCS_TABS.label} className="mb-12 flex flex-wrap gap-4" onKeyDown={onKeyDown}>
      {option('guide', DOCS_TABS.guide, BookOpen)}
      {option('releases', DOCS_TABS.releases, History)}
    </div>
  );
}

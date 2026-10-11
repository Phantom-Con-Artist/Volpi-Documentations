import { DOC_SECTIONS } from '@/content/docs.content';
import { REFERENCE_TABLES } from '@/content/docs-reference.content';
import { LIMITS_PAGE, REFERENCE_PAGES, RELATED_TABLES, SHORTCUTS_PAGE } from '@/content/docs-pages.content';
import { FEATURE_CHAPTERS } from '@/content/features.content';
import { DocLayout } from './DocLayout';
import { DocSectionBlock } from './DocSectionBlock';
import { RefTableBlock } from './RefTableBlock';
import { ShortcutTable } from './ShortcutTable';
import { DocsLater } from './DocsLater';

const tables = (ids: string[]) => ids.map((id) => REFERENCE_TABLES.find((t) => t.id === id)!);

/** One documentation page, chosen by the last part of its address: a guide section, a reference page, the shortcuts or the limits. */
export function DocPage({ id }: { id: string }) {
  const href = `/docs/${id}/`;
  const section = DOC_SECTIONS.find((s) => s.id === id);
  if (section) {
    // The tour chapter that shows this section, so the two link to each other.
    const tourId = FEATURE_CHAPTERS.find((c) => c.docId === id)?.id;
    return (
      <DocLayout href={href} title={`${section.title}.`} text={section.intro}>
        <DocSectionBlock section={section} tourId={tourId} />
        {tables(RELATED_TABLES[id] ?? []).map((t) => <RefTableBlock key={t.id} table={t} />)}
      </DocLayout>
    );
  }
  const reference = REFERENCE_PAGES.find((p) => p.id === id);
  if (reference) {
    const [first, ...rest] = tables(reference.tables);
    return (
      <DocLayout href={href} title={reference.title} text={reference.text}>
        <RefTableBlock table={first} bare />
        {rest.map((t) => <RefTableBlock key={t.id} table={t} />)}
      </DocLayout>
    );
  }
  if (id === SHORTCUTS_PAGE.id) return <DocLayout href={href} title={SHORTCUTS_PAGE.title} text={SHORTCUTS_PAGE.text}><ShortcutTable /></DocLayout>;
  if (id === LIMITS_PAGE.id) return <DocLayout href={href} title={LIMITS_PAGE.title} text={LIMITS_PAGE.text}><DocsLater /></DocLayout>;
  throw new Error(`No documentation page is called "${id}".`);
}

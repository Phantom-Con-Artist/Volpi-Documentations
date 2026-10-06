import { REFERENCE_HEAD, REFERENCE_TABLES } from '@/content/docs-reference.content';
import { RefTableBlock } from './RefTableBlock';

/** The look-it-up part of the docs: glossary, link syntax, file formats, reference checks and internet settings. */
export function DocsReference() {
  return (
    <div id="reference" className="border-t-[3px] border-ink pt-14">
      <span className="p5-tag">{REFERENCE_HEAD.kicker}</span>
      <p className="mt-5 max-w-[40em] text-ink-2">{REFERENCE_HEAD.intro}</p>
      {REFERENCE_TABLES.map((t) => <RefTableBlock key={t.id} table={t} />)}
    </div>
  );
}

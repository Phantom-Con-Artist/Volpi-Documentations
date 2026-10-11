import { ArrowRight } from 'lucide-react';
import type { ArticleBlock } from '@/types/content';
import { navLinkProps } from '@/components/navigation/navLinkProps';

/** The parts of an article, each under its own heading. */
export function ArticleBlocks({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <>
      {blocks.map((b) => (
        <section key={b.title} id={b.id} className="rise border-t border-tone-soft py-12">
          <h2 className="text-[clamp(1.5rem,2.8vw,2.1rem)] leading-tight">{b.title}</h2>
          {b.paragraphs?.map((p) => <p key={p} className="mt-4 max-w-[44em] text-ink-2">{p}</p>)}
          {b.list && (
            <ul className="m-0 mt-5 grid max-w-[44em] list-none gap-3 p-0">
              {b.list.map((item) => <li key={item} className="flex gap-3 text-ink-2"><span className="text-seal" aria-hidden="true">→</span><span>{item}</span></li>)}
            </ul>
          )}
          {b.steps && (
            <ol className="m-0 mt-5 grid max-w-[44em] list-none gap-4 p-0">
              {b.steps.map((step, i) => (
                <li key={step} className="grid grid-cols-[2.4rem_1fr] items-baseline gap-3 text-ink-2">
                  <span className="font-mincho text-[1.25rem] font-semibold text-seal" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          )}
          {b.table && (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-left text-[15.5px]">
                <thead>
                  <tr className="border-b-[2px] border-ink">{b.table.columns.map((c) => <th key={c} className="kicker py-3 pr-6 font-normal">{c}</th>)}</tr>
                </thead>
                <tbody>
                  {b.table.rows.map((row) => (
                    <tr key={row[0]} className="border-b border-tone-soft align-top">
                      {row.map((cell, i) => <td key={i} className={`py-3 pr-6 ${i === 0 ? 'font-mincho font-semibold' : 'text-ink-2'}`}>{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {b.note && <p className="mt-5 max-w-[44em] text-[15px] text-ink-2"><span className="kicker mr-2 text-seal">Note</span>{b.note}</p>}
          {b.links && (
            <ul className="m-0 mt-6 flex list-none flex-wrap gap-x-8 gap-y-3 p-0">
              {b.links.map((l) => <li key={l.href}><a href={l.href} {...navLinkProps(l.href)} className="textlink">{l.label} <ArrowRight size={16} aria-hidden="true" /></a></li>)}
            </ul>
          )}
        </section>
      ))}
    </>
  );
}

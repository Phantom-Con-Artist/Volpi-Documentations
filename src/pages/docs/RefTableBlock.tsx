import type { RefTable } from '@/types/content';

/** One reference table: a term (or syntax) column and its meaning, with an optional note under it. */
export function RefTableBlock({ table }: { table: RefTable }) {
  return (
    <section id={table.id} className="rise border-t border-tone-soft py-12">
      <h3 className="text-[clamp(1.4rem,2.4vw,1.8rem)] leading-tight">{table.title}</h3>
      <p className="mb-6 mt-2 text-ink-2">{table.intro}</p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] border-collapse text-left text-[15.5px]">
          <thead>
            <tr className="border-b-[2px] border-ink">
              <th className="kicker w-[34%] py-3 pr-6 font-normal">{table.columns[0]}</th>
              <th className="kicker py-3 font-normal">{table.columns[1]}</th>
            </tr>
          </thead>
          <tbody>
            {table.rows.map((r) => (
              <tr key={r.term} className="border-b border-tone-soft align-top">
                <td className="py-3 pr-6 font-mincho font-semibold">{table.code ? <code>{r.term}</code> : r.term}</td>
                <td className="py-3 text-ink-2">{r.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.note && <p className="mt-4 text-[15px] text-ink-2"><span className="kicker mr-2 text-seal">Note</span>{table.note}</p>}
    </section>
  );
}

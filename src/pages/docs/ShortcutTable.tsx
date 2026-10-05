import { SHORTCUTS } from '@/content/docs.content';

export function ShortcutTable() {
  return (
    <section id="shortcuts" className="rise border-t border-tone-soft py-14">
      <h2 className="text-[clamp(1.6rem,3vw,2.1rem)] leading-tight">Keyboard shortcuts</h2>
      <table className="mt-8 w-full border-collapse text-left">
        <tbody>
          {SHORTCUTS.map((s) => (
            <tr key={s.action} className="border-b border-tone-soft">
              <td className="w-[44%] py-3 pr-4">
                {s.keys.map((k, i) => (
                  <span key={k}>{i > 0 && <span className="mx-1 text-ink-3">+</span>}<kbd>{k}</kbd></span>
                ))}
              </td>
              <td className="py-3 text-ink-2">{s.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

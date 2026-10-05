import { LOOKUP_ENDPOINTS, ONLINE_MODES } from '@/content/privacy.content';

/** The four addresses Volpi can reach, and the setting that controls them. */
export function NetworkDetails() {
  return (
    <div className="mt-8 grid gap-10">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-[15.5px]">
          <thead>
            <tr className="border-b border-ink">
              <th className="kicker py-3 pr-4 font-normal">Database</th>
              <th className="kicker py-3 pr-4 font-normal">Address</th>
              <th className="kicker py-3 font-normal">What is sent</th>
            </tr>
          </thead>
          <tbody>
            {LOOKUP_ENDPOINTS.map((e) => (
              <tr key={e.host} className="border-b border-tone-soft">
                <td className="py-3 pr-4 font-mincho font-semibold">{e.name}</td>
                <td className="py-3 pr-4"><code>{e.host}</code></td>
                <td className="py-3 text-ink-2">{e.sends}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h3 className="text-xl">You choose when</h3>
        <p className="mt-2 text-ink-2">In References, the Online checks setting has three choices.</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {ONLINE_MODES.map((m) => (
            <div key={m.name} className={`p-4 ${m.isDefault ? 'panel' : 'border border-tone'}`}>
              <span className="font-mincho font-semibold">{m.name}</span>
              {m.isDefault && <span className="kicker ml-2 text-accent">default</span>}
              <p className="mt-1.5 text-[15px] text-ink-2">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

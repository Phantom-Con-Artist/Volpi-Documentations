import type { Fact } from '@/types/content';

export function FactList({ facts, marker }: { facts: Fact[]; marker?: string }) {
  return (
    <ul className="m-0 grid list-none gap-0 border-t border-ink p-0">
      {facts.map((f) => (
        <li key={f.title} className="grid gap-1 border-b border-tone-soft py-4 sm:grid-cols-[minmax(0,240px)_1fr] sm:gap-6">
          <span className="font-mincho font-semibold">
            {marker && <span className="mr-2 text-seal">{marker}</span>}
            {f.title}
          </span>
          <span className="text-ink-2">{f.text}</span>
        </li>
      ))}
    </ul>
  );
}

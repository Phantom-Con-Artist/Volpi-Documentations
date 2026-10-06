import { X } from 'lucide-react';
import { WHO } from '@/content/who.content';

/** The researcher's daily chaos, as a manga panel of crossed-out complaints. */
export function PainCard() {
  return (
    <div className="rise panel p-6 sm:p-9">
      <span className="p5-tag">{WHO.painsTitle}</span>
      <ul className="m-0 mt-7 grid list-none gap-4 p-0">
        {WHO.pains.map((pain) => (
          <li key={pain.text} className="flex gap-3 border-b border-tone-soft pb-4 last:border-0 last:pb-0">
            <X size={18} strokeWidth={3} className="mt-[.3em] shrink-0 text-seal" aria-hidden="true" />
            <span className={pain.file ? 'break-all font-dot text-[15px] tracking-[.04em] text-ink-2' : 'text-ink-2'}>{pain.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

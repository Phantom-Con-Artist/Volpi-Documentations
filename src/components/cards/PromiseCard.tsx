import { Check } from 'lucide-react';
import { PRIVACY_PROMISE } from '@/content/why-local.content';

/** Our privacy promise as a manga panel with a seal tag. */
export function PromiseCard() {
  return (
    <div className="rise panel p-6 sm:p-8">
      <span className="p5-tag p5-tag-seal">Our promise</span>
      <p className="mt-5 font-mincho text-[clamp(1.3rem,2vw,1.6rem)] font-semibold leading-snug">{PRIVACY_PROMISE.title}</p>
      <ul className="m-0 mt-4 grid list-none gap-3 p-0">
        {PRIVACY_PROMISE.points.map((point) => (
          <li key={point} className="flex gap-3 text-ink-2">
            <Check size={18} className="mt-1 shrink-0 text-ok" aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

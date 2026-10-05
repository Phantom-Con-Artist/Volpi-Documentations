import { Check } from 'lucide-react';
import { PRIVACY_SUMMARY } from '@/content/privacy.content';

export function PrivacySummary() {
  return (
    <div className="rise panel p-6 sm:p-8">
      <span className="kicker">The short version</span>
      <ul className="m-0 mt-4 grid list-none gap-3 p-0">
        {PRIVACY_SUMMARY.map((line) => (
          <li key={line} className="flex gap-3 font-mincho text-[17px]">
            <Check size={18} className="mt-1 shrink-0 text-ok" aria-hidden="true" />
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}

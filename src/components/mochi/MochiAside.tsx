import type { MochiMood } from '@/types/mochi';
import { MochiFace } from './MochiFace';

/** A small Mochi sitting inside a section, saying one line. */
export function MochiAside({ text, mood = 'smile' }: { text: string; mood?: MochiMood }) {
  return (
    <div className="flex items-end gap-3" data-mood={mood}>
      <div className="w-16 shrink-0"><MochiFace /></div>
      <p className="panel mb-6 px-4 py-2.5 text-[15.5px] leading-snug text-ink">{text}</p>
    </div>
  );
}

import type { MochiLine } from '@/types/mochi';
import { ACCENTS } from '@/content/theme.content';
import { DOC_SECTIONS } from '@/content/docs.content';
import { LOOKUP_ENDPOINTS } from '@/content/privacy.content';

const loadedAt = Date.now();
const pick = <T,>(list: T[]): T => list[Math.floor(Math.random() * list.length)];

/** Live status lines: what is true right now, in Mochi's voice. */
export function statusLine(): MochiLine {
  const root = document.documentElement.dataset;
  const night = root.mode === 'night';
  const ink = ACCENTS.find((a) => a.id === root.accent)?.label ?? 'Indigo';
  const max = document.documentElement.scrollHeight - innerHeight;
  const scrolled = max > 0 ? Math.round((scrollY / max) * 100) : 0;
  const minutes = Math.floor((Date.now() - loadedAt) / 60000);
  const now = new Date();
  const hour = now.getHours();
  const clock = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const page = location.pathname;
  const features = DOC_SECTIONS.reduce((n, s) => n + s.features.length, 0);

  const lines: MochiLine[] = [
    { text: night ? 'Night mode. Easier on the eyes. Mine too.' : 'Day mode. Very bright. I am squinting.', mood: night ? 'sleep' : 'smile' },
    { text: `Ink: ${ink}. Good choice. I would have picked Matcha.`, mood: 'happy' },
    { text: `You are ${scrolled}% down the page. It gets better. Probably.`, mood: 'smile' },
    { text: 'Open beta status: out. I checked twice.', mood: 'wow' },
    { text: minutes > 0 ? `You have been here ${minutes} minute${minutes === 1 ? '' : 's'}. I have been counting.` : 'You just got here. I already like you.', mood: 'happy' },
    hour >= 23 || hour < 5
      ? { text: `It is ${clock}. Researchers never sleep, I see.`, mood: 'sleep' }
      : hour < 11
        ? { text: `It is ${clock}. The beta is out, and so is the coffee.`, mood: 'smile' }
        : { text: `It is ${clock}. A fine time to read a PDF.`, mood: 'smile' },
  ];
  if (page.startsWith('/docs')) lines.push({ text: `${DOC_SECTIONS.length} sections, ${features} features. I read them all.`, mood: 'happy' });
  if (page.startsWith('/privacy')) lines.push({ text: `Volpi can reach ${LOOKUP_ENDPOINTS.length} addresses. This page reaches none.`, mood: 'smile' });
  return pick(lines);
}

export { pick };

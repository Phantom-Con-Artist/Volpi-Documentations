import { SITE } from '@/content/site.content';

/** Strokes of v, o, l, p and a dotless i, drawn with the Volpi Ink pen (100 unit body, baseline at y = 100).
 *  Copied from the app (src/components/brand/VolpiWordmark.tsx) so the site's name matches it. */
const LETTERS: [number, string][] = [
  [0, 'M4 55 22 100 40 55'],
  [48, 'M8 77.5a16 22.5 0 1 0 32 0a16 22.5 0 1 0-32 0'],
  [100, 'M8 26V100'],
  [120, 'M8 55V122M8 77.5a16 22.5 0 1 1 32 0a16 22.5 0 1 1-32 0'],
  [172, 'M8 55V100'],
];

/** The Volpi wordmark: "volpi" in ink lettering, with the red seal as the dot of the i. Size it by height. */
export function VolpiWordmark({ className = '', decorative = false }: { className?: string; decorative?: boolean }) {
  return (
    <svg className={className} viewBox="-6 18 200 112" {...(decorative ? { 'aria-hidden': true } : { role: 'img', 'aria-label': SITE.name })}>
      <g fill="none" stroke="currentColor" strokeWidth={9} strokeLinecap="round" strokeLinejoin="round">
        {LETTERS.map(([x, d]) => <path key={x} d={d} transform={`translate(${x} 0)`} />)}
      </g>
      <rect x="173" y="28" width="14" height="14" rx="2.5" transform="rotate(-6 180 35)" fill="var(--seal)" />
    </svg>
  );
}

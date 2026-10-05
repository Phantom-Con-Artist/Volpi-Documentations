import { MochiHead, MochiTail, SKIN, INK } from './rig/MochiHead';

/** Mochi's head and paws, as in the app's corner guide. */
export function MochiFace({ className = '' }: { className?: string }) {
  return (
    <svg className={`mm-mochi ${className}`} viewBox="0 0 200 170" aria-hidden="true">
      <MochiTail d="M166 176 C184 148 150 132 168 108 C178 95 196 102 190 116" tip={[190, 116]} />
      <MochiHead />
      <g fill={SKIN} stroke={INK} strokeWidth={3} strokeLinejoin="round"><path d="M52 178 V160 a15 13 0 0 1 30 0 V178" /><path d="M118 178 V160 a15 13 0 0 1 30 0 V178" /></g>
      <g stroke={INK} strokeWidth={2.2} strokeLinecap="round"><path d="M62 150 v6M72 150 v6M128 150 v6M138 150 v6" /></g>
    </svg>
  );
}

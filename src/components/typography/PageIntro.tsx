import type { ReactNode } from 'react';

/** The opening block of an inner page (docs, privacy). */
export function PageIntro({ kicker, title, text, children }: { kicker: string; title: string; text: string; children?: ReactNode }) {
  return (
    <header style={{ ['--bd-x' as string]: '92%', ['--bd-y' as string]: '40%' }} className="bd bd-bleed bd-focus rise pb-14 pt-[clamp(56px,7vw,104px)]">
      <span className="p5-tag p5-tag-seal">{kicker}</span>
      <h1 className="mb-6 mt-8 text-[clamp(2.8rem,6.4vw,6.4rem)] leading-[1.04]"><span className="slash">{title}</span></h1>
      <p className="max-w-[36em] text-[clamp(1.1rem,1.7vw,1.4rem)] text-ink-2">{text}</p>
      {children}
    </header>
  );
}

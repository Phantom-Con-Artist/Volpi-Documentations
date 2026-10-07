import type { ComponentType } from 'react';
import { Bit, Sfx } from './FilmBits';

/** An opening title card: a big slashed title, a red tag under it and a sound effect. Mochi stands on the right. */
export function titleSet(title: string, subtitle: string, sfx: string): ComponentType {
  // Fit the title in the 500 px left of Mochi's bubble (Zen Old Mincho is about 0.6 em per letter).
  const size = Math.min(120, Math.floor(500 / (title.length * 0.6)));
  return function TitleSet() {
    return (
      <>
        <div className="speedlines absolute inset-0" style={{ ['--sl-x' as string]: '74%', ['--sl-y' as string]: '55%' }} />
        <Bit x={70} y={120} delay={0.2}><span className="slash font-mincho font-semibold leading-none" style={{ fontSize: size }}>{title}</span></Bit>
        <Bit x={80} y={310} delay={0.8}><span className="p5-tag p5-tag-seal">{subtitle}</span></Bit>
        <Sfx x={80} y={400} r={-6} delay={1.2} text={sfx} size={64} />
      </>
    );
  };
}

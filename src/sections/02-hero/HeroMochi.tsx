import { useRef } from 'react';
import { HERO } from '@/content/hero.content';
import { MOCHI_UI } from '@/content/mochi.content';
import { MochiFull } from '@/components/mochi/rig/MochiFull';
import { MochiBubble } from '@/components/mochi/MochiBubble';
import { useMochi } from '@/components/mochi/MochiContext';
import { usePointerGaze } from '@/hooks/usePointerGaze';

/** The big Mochi beside the headline. She leaves this spot whenever she runs off to make trouble. */
export function HeroMochi() {
  const { hero, hidden, setHidden, registerHero, pokeHero } = useMochi();
  const svgRef = useRef<SVGSVGElement>(null);
  usePointerGaze(svgRef, !hidden);
  const mood = hidden ? 'sleep' : hero.mood;

  return (
    <div ref={registerHero} className="rise relative mx-auto w-[min(72vw,300px)] lg:mx-0 lg:ml-auto lg:w-full">
      <span className="sfx absolute -left-10 -top-10 rotate-[-8deg]" aria-hidden="true">{HERO.sfx.text}</span>
      {hero.bubble && !hero.away && (
        <div className="absolute bottom-[93%] right-[26%] z-10">
          <MochiBubble key={hero.bubble.text} bubble={hero.bubble} tail="bottom" at="calc(100% - 66px)" />
        </div>
      )}
      <button
        type="button"
        onClick={hidden ? () => setHidden(false) : pokeHero}
        aria-label={hidden ? MOCHI_UI.wake : 'Mochi, the guide. Click her.'}
        className={`mf-stage mf-hover relative block w-full cursor-pointer border-0 bg-transparent p-0 transition-[transform,opacity] duration-300 ${hero.away ? 'translate-x-[60%] opacity-0' : ''}`}
      >
        <MochiFull ref={svgRef} pose={hero.pose} mood={mood} className="h-auto w-full" />
      </button>
      {hero.away && <span className="sfx-poof absolute bottom-[35%] left-[10%]" aria-hidden="true">シュッ!</span>}
      <p className="mt-3 text-center font-dot text-[12px] uppercase tracking-[.16em] text-ink-2">{hidden ? 'Asleep. Click to wake her.' : 'Mochi · click her'}</p>
    </div>
  );
}

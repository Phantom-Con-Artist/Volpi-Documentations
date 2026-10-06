import { useRef } from 'react';
import { HERO } from '@/content/hero.content';
import { MOCHI_UI } from '@/content/mochi.content';
import { FoxSeal } from '@/components/brand/FoxSeal';
import { MochiFull } from '@/components/mochi/rig/MochiFull';
import { MochiBubble } from '@/components/mochi/MochiBubble';
import { useMochi } from '@/components/mochi/MochiContext';
import { usePointerGaze } from '@/hooks/usePointerGaze';

/**
 * The big Volpi seal beside the headline, with Mochi peeking over its top corner and hugging it like a side pillow.
 * Mochi is drawn twice in the same spot: the full drawing behind the seal and a copy showing only her hands in
 * front of it, gripping its top edge. She still talks, waves, follows the pointer and leaves the seal whenever she runs off to make trouble.
 */
export function HeroMochi() {
  const { hero, hidden, setHidden, registerHero, pokeHero } = useMochi();
  const svgRef = useRef<SVGSVGElement>(null);
  usePointerGaze(svgRef, !hidden);
  const mood = hidden ? 'sleep' : hero.mood;
  const waving = hero.pose === 'wave' ? 'is-waving' : '';

  return (
    <div ref={registerHero} className="rise relative mx-auto w-[min(80vw,380px)] lg:mx-0 lg:ml-auto lg:w-full">
      <span className="sfx absolute -left-10 -top-10 rotate-[-8deg]" aria-hidden="true">{HERO.sfx.text}</span>
      {hero.bubble && !hero.away && (
        <div className="absolute bottom-[96%] right-[30%] z-10">
          <MochiBubble key={hero.bubble.text} bubble={hero.bubble} tail="bottom" at="calc(100% - 56px)" />
        </div>
      )}
      <div className="mf-hug relative aspect-[1/1.18]">
        <button
          type="button"
          onClick={hidden ? () => setHidden(false) : pokeHero}
          aria-label={hidden ? MOCHI_UI.wake : 'Mochi, the guide, hugging the Volpi logo. Click her.'}
          className={`mf-stage mf-hover absolute right-[9%] top-[-8%] block w-[64%] rotate-[-8deg] cursor-pointer border-0 bg-transparent p-0 transition-[transform,opacity] duration-300 ${hero.away ? 'translate-x-[60%] opacity-0' : ''}`}
        >
          <MochiFull ref={svgRef} pose="hug" mood={mood} className={`relative h-auto w-full ${waving}`} />
        </button>
        <FoxSeal className="pointer-events-none absolute bottom-0 left-0 z-10 w-[86%] rotate-[-5deg] drop-shadow-[8px_8px_0_var(--tone)]" />
        <div aria-hidden="true" className={`pointer-events-none absolute right-[9%] top-[-8%] z-20 w-[64%] rotate-[-8deg] transition-[transform,opacity] duration-300 ${hero.away ? 'translate-x-[60%] opacity-0' : ''}`}>
          <MochiFull pose="hug" mood={mood} className={`mf-front h-auto w-full ${waving}`} />
        </div>
      </div>
      {hero.away && <span className="sfx-poof absolute bottom-[35%] left-[10%]" aria-hidden="true">シュッ!</span>}
      <p className="mt-4 text-center font-dot text-[12px] uppercase tracking-[.16em] text-ink-2">{hidden ? 'Asleep. Click to wake her.' : 'Mochi · click her'}</p>
    </div>
  );
}

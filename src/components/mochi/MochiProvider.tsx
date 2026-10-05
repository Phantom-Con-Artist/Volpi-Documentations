import { useMemo, type ReactNode } from 'react';
import { MochiContext } from './MochiContext';
import { MochiActor } from './MochiActor';
import { useMochiDirector } from './director/useMochiDirector';

/** Owns Mochi for a page. The roaming actor re-renders on its own; the context only changes with the hero. */
export function MochiProvider({ children }: { children: ReactNode }) {
  const { actor, hero, hidden, setHidden, registerHero, poke, pokeHero } = useMochiDirector();
  const api = useMemo(() => ({ hero, hidden, setHidden, registerHero, pokeHero }), [hero, hidden, setHidden, registerHero, pokeHero]);
  return (
    <MochiContext.Provider value={api}>
      {children}
      <MochiActor actor={actor} onPoke={poke} />
    </MochiContext.Provider>
  );
}

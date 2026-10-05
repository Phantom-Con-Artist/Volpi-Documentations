import { createContext, useContext } from 'react';
import type { HeroState } from '@/types/mochi';

export interface MochiApi {
  hero: HeroState;
  hidden: boolean;
  setHidden: (value: boolean) => void;
  registerHero: (el: Element | null) => void;
  pokeHero: () => void;
}

export const MochiContext = createContext<MochiApi | null>(null);

export function useMochi(): MochiApi {
  const api = useContext(MochiContext);
  if (!api) throw new Error('useMochi must be used inside MochiProvider');
  return api;
}

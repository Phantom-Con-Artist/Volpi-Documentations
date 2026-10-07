import type { FilmSets } from '@/types/film';
import { FinaleSet } from '@/components/film/FinaleSet';
import { TitleSet, HomeSet, PostcardSet, LuggageSet, ModesSet } from './StaySets';
import { NobodySet, LockSet, DeleteSet, CookiesSet } from './PromiseSets';

/** The sets of the privacy film, by the names its scenes use. */
export const PRIVACY_SETS: FilmSets = {
  title: TitleSet, home: HomeSet, postcard: PostcardSet, luggage: LuggageSet, modes: ModesSet,
  nobody: NobodySet, lock: LockSet, delete: DeleteSet, cookies: CookiesSet, finale: FinaleSet,
};

import type { FilmSets } from '@/types/film';
import { TitleSet, DeskSet, WindowsSet } from './OpeningSets';
import { ShuffleSet, LostSet, MergeSet } from './MiddleSets';
import { RulesSet, SnackSet, InviteSet } from './ClosingSets';
import { FinaleSet } from '@/components/film/FinaleSet';

/** The sets of the About film, by the names its scenes use. */
export const ABOUT_SETS: FilmSets = {
  title: TitleSet, desk: DeskSet, windows: WindowsSet, shuffle: ShuffleSet, lost: LostSet,
  merge: MergeSet, rules: RulesSet, snack: SnackSet, invite: InviteSet,
  finale: FinaleSet,
};

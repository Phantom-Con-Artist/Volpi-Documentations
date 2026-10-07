import type { FilmSets } from '@/types/film';
import { FinaleSet } from '@/components/film/FinaleSet';
import { TitleSet, PanesSet, VersionsSet, ExportSet, PictureSet, TablesSet } from './NewSets';
import { EquationsSet, SearchSet, NightSet, KeysSet, SafeSet, LaterSet } from './MoreSets';

/** The sets of the features film, by the names its scenes use. */
export const FEATURES_SETS: FilmSets = {
  title: TitleSet, panes: PanesSet, versions: VersionsSet, export: ExportSet, picture: PictureSet, tables: TablesSet,
  equations: EquationsSet, search: SearchSet, night: NightSet, keys: KeysSet, safe: SafeSet, later: LaterSet,
  finale: FinaleSet,
};

import type { FilmSets } from '@/types/film';
import { TitleSet, TabsSet, FolderSet, HighlightSet, VerifySet } from './OpeningSets';
import { DataSet, WriteSet, LocalSet, NotYetSet, PriceSet } from './ClosingSets';

/** The sets of the home tour, by the names its scenes use. */
export const TOUR_SETS: FilmSets = {
  title: TitleSet, tabs: TabsSet, folder: FolderSet, highlight: HighlightSet, verify: VerifySet,
  data: DataSet, write: WriteSet, local: LocalSet, notyet: NotYetSet, price: PriceSet,
};

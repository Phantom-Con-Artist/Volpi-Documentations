import { TOUR, TOUR_SCENES } from '@/content/tour.content';
import { FilmSection } from '@/components/film/FilmSection';
import { TOUR_SETS } from './sets';

/** The home page told by Mochi. Stands in for the sections from the formats band to "Not yet",
 *  and takes the research loop's id so the hero's "See what it does" link lands here. */
export function MochiTour() {
  return (
    <div className="wrap">
      <FilmSection id="loop" mochiId="tour" scenes={TOUR_SCENES} sets={TOUR_SETS} text={TOUR} />
    </div>
  );
}

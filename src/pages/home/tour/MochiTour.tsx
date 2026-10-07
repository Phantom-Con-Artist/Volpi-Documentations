import { TOUR, TOUR_SCENES } from '@/content/tour.content';
import { MochiFilm } from '@/components/film/MochiFilm';
import { FilmTranscript } from '@/components/film/FilmTranscript';
import { TOUR_SETS } from './sets';

/** The home page told by Mochi. Stands in for the sections from the formats band to "Not yet",
 *  and takes the research loop's id so the hero's "See what it does" link lands here. */
export function MochiTour() {
  return (
    <section id="loop" data-mochi="tour" className="bd bd-focus pb-[clamp(72px,10vw,130px)] pt-10">
      <div className="wrap">
        <div className="mx-auto max-w-[max(320px,calc((100svh-250px)*16/9))]">
          <MochiFilm scenes={TOUR_SCENES} sets={TOUR_SETS} text={TOUR} />
          <FilmTranscript scenes={TOUR_SCENES} summary={TOUR.transcript} />
        </div>
      </div>
    </section>
  );
}

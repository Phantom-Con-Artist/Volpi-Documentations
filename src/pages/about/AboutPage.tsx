import { PageShell } from '@/components/layout/PageShell';
import { PageIntro } from '@/components/typography/PageIntro';
import { ABOUT_HEAD } from '@/content/about.content';
import { MochiFilm } from './film/MochiFilm';
import { FilmTranscript } from './FilmTranscript';
import { StoryLetter } from './StoryLetter';
import { MeetMochi } from './MeetMochi';

/** How Volpi began: the Mochi film, the developer's letter and Mochi's character card. */
export function AboutPage() {
  return (
    <PageShell roamingMochi={false}>
      <div className="wrap">
        <PageIntro kicker={ABOUT_HEAD.kicker} title={ABOUT_HEAD.title} text={ABOUT_HEAD.text} />
        {/* The film is capped so the stage and its controls fit below the header on any screen. */}
        <div className="mx-auto max-w-[max(320px,calc((100svh-250px)*16/9))] pb-[clamp(72px,10vw,130px)]">
          <MochiFilm />
          <FilmTranscript />
        </div>
        <StoryLetter />
        <MeetMochi />
      </div>
    </PageShell>
  );
}

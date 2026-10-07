import { PageShell } from '@/components/layout/PageShell';
import { PageIntro } from '@/components/typography/PageIntro';
import { ViewSwitch } from '@/components/film/ViewSwitch';
import { FilmSection } from '@/components/film/FilmSection';
import { useViewChoice } from '@/hooks/useViewChoice';
import { FEATURE_CHAPTERS, FEATURES_HEAD } from '@/content/features.content';
import { FEATURES_FILM, FEATURES_SCENES, FEATURES_VIEW } from '@/content/features-tour.content';
import { FeatureChapterBlock } from './FeatureChapterBlock';
import { FeaturesCoda } from './FeaturesCoda';
import { FEATURES_SETS } from './tour/sets';

/** The intro with its read/watch switch, then the chapters or Mochi's features show in their place. */
function FeaturesBody() {
  const { view, setView, available } = useViewChoice('volpi-features-view');
  return (
    <>
      <div data-mochi="features-top">
        <PageIntro kicker={FEATURES_HEAD.kicker} title={FEATURES_HEAD.title} text={FEATURES_HEAD.text}>
          {available && <ViewSwitch view={view} onChange={setView} text={FEATURES_VIEW} className="mt-8" />}
        </PageIntro>
      </div>
      {view === 'watch' ? <FilmSection mochiId="features-film" scenes={FEATURES_SCENES} sets={FEATURES_SETS} text={FEATURES_FILM} /> : (
        <>
          {FEATURE_CHAPTERS.map((c, i) => <FeatureChapterBlock key={c.id} chapter={c} index={i} />)}
        </>
      )}
    </>
  );
}

/** The full tour: every feature area with its facts and large screenshots. */
export function FeaturesPage() {
  return (
    <PageShell>
      <div className="wrap">
        <FeaturesBody />
        <FeaturesCoda />
      </div>
    </PageShell>
  );
}

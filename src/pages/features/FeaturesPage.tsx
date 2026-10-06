import { PageShell } from '@/components/layout/PageShell';
import { PageIntro } from '@/components/typography/PageIntro';
import { FEATURE_CHAPTERS, FEATURES_HEAD } from '@/content/features.content';
import { ChapterIndex } from './ChapterIndex';
import { FeatureChapterBlock } from './FeatureChapterBlock';
import { FeaturesCoda } from './FeaturesCoda';

/** The full tour: every feature area with its facts and large screenshots. */
export function FeaturesPage() {
  return (
    <PageShell>
      <div className="wrap">
        <div data-mochi="features-top">
          <PageIntro kicker={FEATURES_HEAD.kicker} title={FEATURES_HEAD.title} text={FEATURES_HEAD.text} />
        </div>
        <ChapterIndex />
        {FEATURE_CHAPTERS.map((c, i) => <FeatureChapterBlock key={c.id} chapter={c} index={i} />)}
        <FeaturesCoda />
      </div>
    </PageShell>
  );
}

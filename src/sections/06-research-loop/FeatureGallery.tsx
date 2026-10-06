import { MORE_FEATURES, MORE_HEAD } from '@/content/loop.content';
import { FeatureTile } from './FeatureTile';

/** Large screenshots of the features the recordings do not show, in a two-column masonry. */
export function FeatureGallery() {
  return (
    <div className="mt-[clamp(80px,10vw,130px)]">
      <div className="rise mb-14 flex flex-col items-start gap-5">
        <span className="p5-tag p5-tag-seal">{MORE_HEAD.kicker}</span>
        <h3 className="text-[clamp(2rem,4vw,3.6rem)] leading-[1.05]"><span className="slash">{MORE_HEAD.title}</span></h3>
        <p className="text-[clamp(1.1rem,1.6vw,1.3rem)] text-ink-2">{MORE_HEAD.text}</p>
      </div>
      <div className="gap-12 md:columns-2 xl:gap-16">
        {MORE_FEATURES.map((tile) => <FeatureTile key={tile.title} tile={tile} />)}
      </div>
    </div>
  );
}

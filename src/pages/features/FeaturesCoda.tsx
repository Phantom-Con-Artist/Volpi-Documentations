import { FEATURES_CODA } from '@/content/features.content';
import { DiscordButton } from '@/components/buttons/DiscordButton';
import { DownloadButton } from '@/components/download/DownloadButton';

export function FeaturesCoda() {
  return (
    <section className="bd bd-bleed bd-streaks rise border-t-[3px] border-ink py-[clamp(72px,10vw,140px)]">
      <h2 className="text-[clamp(2.4rem,5vw,4.6rem)] leading-[1.05]"><span className="slash">{FEATURES_CODA.title}</span></h2>
      <p className="mb-10 mt-6 max-w-[34em] text-[clamp(1.1rem,1.6vw,1.3rem)] text-ink-2">{FEATURES_CODA.text}</p>
      <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
        <DownloadButton size="lg" />
        <DiscordButton size="lg" primary={false} />
        <a className="textlink" href="/docs/">{FEATURES_CODA.docs}</a>
      </div>
    </section>
  );
}

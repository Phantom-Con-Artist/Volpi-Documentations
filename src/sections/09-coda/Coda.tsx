import { CODA } from '@/content/coda.content';
import { MochiFace } from '@/components/mochi/MochiFace';
import { GithubButton } from '@/components/buttons/GithubButton';

/** Left-aligned close: the stamp, the headline, and Mochi with the "soon" sound effect behind her. */
export function Coda() {
  return (
    <section data-mochi="coda" className="speedlines overflow-hidden border-t-[3px] border-ink py-[clamp(96px,12vw,180px)]" style={{ ['--sl-x' as string]: '80%', ['--sl-y' as string]: '50%' }}>
      <div className="wrap grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_420px]">
        <div className="rise flex flex-col items-start">
          <span className="p5-tag p5-tag-seal">{CODA.kicker}</span>
          <h2 className="mt-8 text-[clamp(2.8rem,6.4vw,6.6rem)] leading-[1.04]">{CODA.headline[0]}<br /><span className="slash">{CODA.headline[1]}</span></h2>
          <p className="mb-12 mt-6 text-[clamp(1.1rem,1.6vw,1.35rem)] text-ink-2">{CODA.text}</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
            <GithubButton size="lg" />
            <a className="textlink" href="/docs/">{CODA.docs}</a>
          </div>
        </div>
        <div className="rise relative hidden justify-center lg:flex" aria-hidden="true">
          <span className="sfx absolute -left-6 -top-40 rotate-[-10deg]">{CODA.sfx}</span>
          <div className="relative mt-24 w-64" data-mood="happy"><MochiFace /></div>
        </div>
      </div>
    </section>
  );
}

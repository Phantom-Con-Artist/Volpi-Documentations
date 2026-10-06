import { ArrowDown } from 'lucide-react';
import { HERO } from '@/content/hero.content';
import { HERO_IMAGE } from '@/content/media.content';
import { DiscordButton } from '@/components/buttons/DiscordButton';
import { ThemedImg } from '@/components/media/ThemedImg';
import { HeroMochi } from './HeroMochi';

export function Hero() {
  return (
    <section className="speedlines overflow-hidden pt-[clamp(48px,7vw,112px)]" style={{ ['--sl-x' as string]: '88%', ['--sl-y' as string]: '18%' }}>
      <div className="wrap">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)]">
          <div className="rise">
            <span className="p5-tag p5-tag-seal">{HERO.kicker}</span>
            <h1 className="mb-8 mt-8">
              <span className="slash block w-fit text-[clamp(4.2rem,11vw,11rem)] leading-[.95]">{HERO.name}</span>
              <span className="mt-6 block max-w-[16em] text-[clamp(2rem,4.2vw,4.4rem)] leading-[1.08]">{HERO.headline}</span>
            </h1>
            <p className="mb-11 max-w-[34em] text-[clamp(1.15rem,1.7vw,1.45rem)] text-ink-2">{HERO.lede}</p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
              <DiscordButton size="lg" />
              <a className="textlink" href="#loop">{HERO.secondary} <ArrowDown size={16} aria-hidden="true" /></a>
            </div>
            <p className="mt-8 text-[15px] text-ink-2">{HERO.trust}</p>
          </div>
          <HeroMochi />
        </div>
        <figure className="rise m-0 mt-[clamp(56px,7vw,96px)]">
          <ThemedImg
            image={HERO_IMAGE}
            eager
            className="h-auto w-full"
            sizes="(max-width: 1760px) 100vw, 1760px"
            srcSet={{
              day: '/assets/img/bleed-day-dashboard-1600w.webp 1600w, /assets/img/bleed-day-dashboard.webp 2880w',
              night: '/assets/img/bleed-night-dashboard-1600w.webp 1600w, /assets/img/bleed-night-dashboard.webp 2880w',
            }}
          />
        </figure>
      </div>
    </section>
  );
}

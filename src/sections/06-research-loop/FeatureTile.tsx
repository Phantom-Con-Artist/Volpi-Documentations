import type { FeatureTile as Tile } from '@/types/content';
import { ThemedImg } from '@/components/media/ThemedImg';

/** A large screenshot in a manga panel, with a sheared tag, a title and one or two lines of text. */
export function FeatureTile({ tile }: { tile: Tile }) {
  return (
    <article className="rise mb-16 break-inside-avoid">
      <div className="panel">
        <ThemedImg image={tile.image} className="h-auto w-full" sizes="(max-width: 768px) 100vw, 860px" />
      </div>
      <div className="mt-7">
        <span className="p5-tag">{tile.kicker}</span>
        <h4 className="mt-4 text-[clamp(1.5rem,2.2vw,2rem)] leading-tight">{tile.title}</h4>
        <p className="mt-2 max-w-[34em] text-ink-2">{tile.text}</p>
      </div>
    </article>
  );
}

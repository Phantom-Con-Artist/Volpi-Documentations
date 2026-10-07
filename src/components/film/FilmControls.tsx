import { Pause, Play, RotateCcw } from 'lucide-react';
import type { FilmScene, FilmText } from '@/types/film';
import { P5Button } from '@/components/buttons/P5Button';

interface Props {
  scenes: FilmScene[];
  text: FilmText;
  index: number;
  playing: boolean;
  ended: boolean;
  onToggle: () => void;
  onSelect: (i: number) => void;
  onSceneEnd: () => void;
}

/** Play/pause and one segment per scene. The active segment's fill is the scene's clock. */
export function FilmControls({ scenes, text, index, playing, ended, onToggle, onSelect, onSceneEnd }: Props) {
  const label = ended ? text.replay : playing ? text.pause : text.play;
  const Icon = ended ? RotateCcw : playing ? Pause : Play;
  return (
    <div className="mt-6 flex items-center gap-5">
      <P5Button size="sm" primary onClick={onToggle} aria-label={label}>
        <Icon size={15} strokeWidth={2.6} aria-hidden="true" /><span className="hidden sm:inline">{label}</span>
      </P5Button>
      <ol className="m-0 flex flex-1 list-none gap-1.5 p-0">
        {scenes.map((s, i) => (
          <li key={s.id} className="flex-1">
            <button
              type="button"
              onClick={() => onSelect(i)}
              aria-label={`${text.scene} ${i + 1}: ${s.title}`}
              aria-current={i === index ? 'step' : undefined}
              className="block w-full cursor-pointer border-0 bg-transparent py-2"
            >
              <span className="block h-[6px] overflow-hidden bg-tone-soft">
                {(i < index || (i === index && ended)) && <span className="block h-full bg-ink" />}
                {i === index && !ended && (
                  <span key={`${s.id}-${index}`} className="film-progress block h-full bg-seal" style={{ ['--d' as string]: `${s.duration}ms` }} onAnimationEnd={onSceneEnd} />
                )}
              </span>
            </button>
          </li>
        ))}
      </ol>
      <span className="kicker hidden shrink-0 sm:inline">{index + 1} / {scenes.length}</span>
    </div>
  );
}

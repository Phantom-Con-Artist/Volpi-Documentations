import { THEME_HEAD } from '@/content/theme.content';
import { SectionHead } from '@/components/typography/SectionHead';
import { LoopVideo } from '@/components/media/LoopVideo';
import { AccentPicker } from '@/components/theme/AccentPicker';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

const THEME_CLIP = { name: 'theme', label: 'Switching Volpi from Day to Night, then through the three accent inks.' };

/** The page and the app share a look: the switch here changes both the site and the recording. */
export function Themes() {
  return (
    <section id="themes" style={{ ['--bd-x' as string]: '0%', ['--bd-y' as string]: '100%' }} className="bd bd-tone border-t border-tone-soft py-[clamp(80px,12vw,140px)]">
      <div className="wrap">
        <SectionHead kicker={THEME_HEAD.kicker} title={THEME_HEAD.title} chapter={THEME_HEAD.chapter} />
        <div className="grid items-center gap-10 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-16">
          <div className="rise flex flex-col gap-6">
            <p className="text-[1.1rem] text-ink-2">{THEME_HEAD.text}</p>
            <div className="flex items-center gap-3"><span className="kicker">Mode</span><ThemeToggle /></div>
            <div className="flex flex-col gap-3"><span className="kicker">Ink</span><AccentPicker /></div>
          </div>
          <div className="rise panel tilt-r">
            <LoopVideo clip={THEME_CLIP} className="block h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

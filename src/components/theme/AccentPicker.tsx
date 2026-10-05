import { useTheme } from '@/hooks/useTheme';
import { ACCENTS } from '@/content/theme.content';
import { P5Button } from '@/components/buttons/P5Button';

/** The app's three accent inks. */
export function AccentPicker() {
  const { accent, setAccent } = useTheme();
  return (
    <div className="flex flex-wrap gap-4" role="radiogroup" aria-label="Accent ink">
      {ACCENTS.map((a) => (
        <P5Button key={a.id} size="sm" role="radio" aria-checked={accent === a.id} onClick={() => setAccent(a.id)}>
          <span className="inline-block h-3.5 w-3.5 border-2 border-current" style={{ background: a.swatch }} aria-hidden="true" />
          {a.label}
        </P5Button>
      ))}
    </div>
  );
}

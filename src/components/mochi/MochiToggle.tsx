import { MOCHI_UI } from '@/content/mochi.content';
import { P5Button } from '@/components/buttons/P5Button';
import { useMochi } from './MochiContext';

/** The off switch for the cute menace. Remembered in this browser. */
export function MochiToggle() {
  const { hidden, setHidden } = useMochi();
  return (
    <P5Button size="sm" onClick={() => setHidden(!hidden)} aria-pressed={!hidden}>
      {hidden ? MOCHI_UI.off : MOCHI_UI.on}
    </P5Button>
  );
}

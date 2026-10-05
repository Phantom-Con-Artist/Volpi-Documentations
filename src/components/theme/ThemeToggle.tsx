import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { P5Button } from '@/components/buttons/P5Button';

/** Day / Night switch. The whole site, its screenshots and its videos follow it. */
export function ThemeToggle() {
  const { mode, toggleMode } = useTheme();
  const night = mode === 'night';
  return (
    <P5Button size="sm" data-mochi-target="theme" onClick={toggleMode} aria-label={night ? 'Switch to Day theme' : 'Switch to Night theme'}>
      {night ? <Moon size={15} aria-hidden="true" /> : <Sun size={15} aria-hidden="true" />}
      <span className="hidden sm:inline">{night ? 'Night' : 'Day'}</span>
    </P5Button>
  );
}

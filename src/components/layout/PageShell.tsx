import type { ReactNode } from 'react';
import { ThemeProvider } from '@/hooks/useTheme';
import { useReveal } from '@/hooks/useReveal';
import { MochiProvider } from '@/components/mochi/MochiProvider';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';

function Reveal() {
  useReveal();
  return null;
}

/** Shared frame for every page: theme, header, footer, Mochi and scroll reveals. */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <MochiProvider>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Reveal />
      </MochiProvider>
    </ThemeProvider>
  );
}

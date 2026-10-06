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

/** Shared frame for every page: theme, header, footer, Mochi and scroll reveals. `roamingMochi={false}` keeps her from wandering the page. */
export function PageShell({ children, roamingMochi = true }: { children: ReactNode; roamingMochi?: boolean }) {
  return (
    <ThemeProvider>
      <MochiProvider roaming={roamingMochi}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Reveal />
      </MochiProvider>
    </ThemeProvider>
  );
}

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Wordmark } from '@/components/brand/Wordmark';
import { GithubButton } from '@/components/buttons/GithubButton';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { NAV } from '@/content/site.content';
import { P5Button } from '@/components/buttons/P5Button';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b-[3px] border-ink backdrop-blur-sm" style={{ background: 'color-mix(in srgb, var(--paper) 94%, transparent)' }}>
      <div className="wrap flex h-[76px] items-center justify-between gap-4">
        <Wordmark />
        <nav className="hidden items-center gap-9 text-[16px] font-medium text-ink md:flex" aria-label="Main">
          {NAV.map((l) => (
            <a key={l.href} href={l.href} className="no-underline decoration-seal decoration-2 underline-offset-8 hover:underline">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <span className="hidden sm:inline-flex"><GithubButton size="sm" label="GitHub" /></span>
          <P5Button size="sm" className="md:hidden" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label="Menu">
            {open ? <X size={15} /> : <Menu size={15} />}
          </P5Button>
        </div>
      </div>
      {open && (
        <nav className="wrap flex flex-col gap-1 border-t border-tone-soft pb-4 pt-2 md:hidden" aria-label="Main">
          {NAV.map((l) => (
            <a key={l.href} href={l.href} className="py-2 no-underline" onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <span className="pt-2"><GithubButton size="sm" label="GitHub" /></span>
        </nav>
      )}
    </header>
  );
}

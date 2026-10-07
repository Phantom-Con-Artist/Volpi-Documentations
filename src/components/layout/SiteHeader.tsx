import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Wordmark } from '@/components/brand/Wordmark';
import { DiscordButton } from '@/components/buttons/DiscordButton';
import { HeaderDownload } from '@/components/download/DownloadButton';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { NAV } from '@/content/site.content';
import { P5Button } from '@/components/buttons/P5Button';
import { navLinkProps } from '@/components/navigation/navLinkProps';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b-[3px] border-ink backdrop-blur-sm" style={{ background: 'color-mix(in srgb, var(--paper) 94%, transparent)' }}>
      <div className="wrap flex h-[76px] items-center justify-between gap-4">
        <Wordmark />
        <nav className="hidden items-center gap-6 text-[16px] xl:gap-9 font-medium text-ink lg:flex" aria-label="Main">
          {NAV.map((l) => (
            <a key={l.href} href={l.href} {...navLinkProps(l.href)} className="whitespace-nowrap no-underline decoration-seal decoration-2 underline-offset-8 hover:underline">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <span className="hidden sm:inline-flex"><DiscordButton size="sm" label="Discord" primary={false} /></span>
          <HeaderDownload />
          <P5Button size="sm" className="lg:hidden" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label="Menu">
            {open ? <X size={15} /> : <Menu size={15} />}
          </P5Button>
        </div>
      </div>
      {open && (
        <nav className="wrap flex flex-col gap-1 border-t border-tone-soft pb-4 pt-2 lg:hidden" aria-label="Main">
          {NAV.map((l) => (
            <a key={l.href} href={l.href} {...navLinkProps(l.href)} className="py-2 no-underline" onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <span className="pt-2"><DiscordButton size="sm" label="Discord" primary={false} /></span>
        </nav>
      )}
    </header>
  );
}

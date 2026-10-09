import { FoxSeal } from '@/components/brand/FoxSeal';
import { VolpiWordmark } from '@/components/brand/VolpiWordmark';
import { FOOTER_LINKS, SITE } from '@/content/site.content';
import { MochiToggle } from '@/components/mochi/MochiToggle';
import { navLinkProps } from '@/components/navigation/navLinkProps';

/** Always on the Night canvas: data-mode="night" re-scopes the tokens for this element only. */
export function SiteFooter() {
  return (
    <footer data-mode="night" className="border-t border-tone-soft bg-gutter text-ink">
      <div className="wrap grid gap-10 pb-14 pt-16 md:grid-cols-[1fr_auto]">
        <div>
          <a href="/" className="flex items-center gap-3 no-underline">
            <FoxSeal className="h-[34px] w-[34px]" />
            <VolpiWordmark className="h-[28px] w-auto" />
          </a>
          <p className="mt-4 font-mincho text-ink-3">{SITE.tagline}</p>
        </div>
        <div className="flex flex-col items-start gap-6 md:items-end">
        <ul className="m-0 flex list-none flex-wrap gap-x-7 gap-y-3 p-0 text-[15px]">
          {FOOTER_LINKS.map((l) => (
            <li key={l.label}><a href={l.href} {...navLinkProps(l.href)} className="text-ink-3 no-underline hover:text-ink">{l.label}</a></li>
          ))}
        </ul>
        <MochiToggle />
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-tone-soft pt-6 md:col-span-2">
          <span className="kicker">{SITE.version} · {SITE.channel}</span>
          <span className="kicker">Set in Zen Old Mincho &amp; Zen Maru Gothic</span>
        </div>
      </div>
    </footer>
  );
}

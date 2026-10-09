import { FoxSeal } from './FoxSeal';
import { SITE } from '@/content/site.content';
import { VolpiWordmark } from './VolpiWordmark';

export function Wordmark() {
  return (
    <a href="/" className="flex items-center gap-3 no-underline" aria-label={`${SITE.name} home`}>
      <span data-mochi-target="logo" className="inline-flex"><FoxSeal className="h-[34px] w-[34px]" /></span>
      <VolpiWordmark decorative className="h-[28px] w-auto" />
    </a>
  );
}

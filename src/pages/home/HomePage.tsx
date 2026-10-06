import { PageShell } from '@/components/layout/PageShell';
import { Hero } from '@/sections/02-hero/Hero';
import { FormatsBand } from '@/sections/03-formats-band/FormatsBand';
import { WhoItsFor } from '@/sections/04-who-its-for/WhoItsFor';
import { Principles } from '@/sections/05-principles/Principles';
import { ResearchLoop } from '@/sections/06-research-loop/ResearchLoop';
import { Themes } from '@/sections/07-themes/Themes';
import { UnderTheHood } from '@/sections/08-under-the-hood/UnderTheHood';
import { WhyLocal } from '@/sections/09-why-local/WhyLocal';
import { NotYet } from '@/sections/10-not-yet/NotYet';
import { Pricing } from '@/sections/11-pricing/Pricing';
import { Coda } from '@/sections/12-coda/Coda';

export function HomePage() {
  return (
    <PageShell>
      <Hero />
      <FormatsBand />
      <WhoItsFor />
      <Principles />
      <ResearchLoop />
      <Themes />
      <UnderTheHood />
      <WhyLocal />
      <NotYet />
      <Pricing />
      <Coda />
    </PageShell>
  );
}

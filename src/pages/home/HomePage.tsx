import { PageShell } from '@/components/layout/PageShell';
import { Hero } from '@/sections/02-hero/Hero';
import { FormatsBand } from '@/sections/03-formats-band/FormatsBand';
import { WhoItsFor } from '@/sections/04-who-its-for/WhoItsFor';
import { Principles } from '@/sections/05-principles/Principles';
import { ResearchLoop } from '@/sections/06-research-loop/ResearchLoop';
import { Themes } from '@/sections/07-themes/Themes';
import { WhyLocal } from '@/sections/08-why-local/WhyLocal';
import { NotYet } from '@/sections/09-not-yet/NotYet';
import { Pricing } from '@/sections/10-pricing/Pricing';
import { Coda } from '@/sections/11-coda/Coda';

export function HomePage() {
  return (
    <PageShell>
      <Hero />
      <FormatsBand />
      <WhoItsFor />
      <Principles />
      <ResearchLoop />
      <Themes />
      <WhyLocal />
      <NotYet />
      <Pricing />
      <Coda />
    </PageShell>
  );
}

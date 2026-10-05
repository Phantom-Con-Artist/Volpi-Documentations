import { PageShell } from '@/components/layout/PageShell';
import { Hero } from '@/sections/02-hero/Hero';
import { FormatsBand } from '@/sections/03-formats-band/FormatsBand';
import { Principles } from '@/sections/04-principles/Principles';
import { ResearchLoop } from '@/sections/05-research-loop/ResearchLoop';
import { Themes } from '@/sections/06-themes/Themes';
import { UnderTheHood } from '@/sections/07-under-the-hood/UnderTheHood';
import { NotYet } from '@/sections/08-not-yet/NotYet';
import { Coda } from '@/sections/09-coda/Coda';

export function HomePage() {
  return (
    <PageShell>
      <Hero />
      <FormatsBand />
      <Principles />
      <ResearchLoop />
      <Themes />
      <UnderTheHood />
      <NotYet />
      <Coda />
    </PageShell>
  );
}

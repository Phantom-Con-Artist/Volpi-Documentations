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
import { useHomeView } from '@/hooks/useHomeView';
import { HomeViewSwitch } from './tour/HomeViewSwitch';
import { MochiTour } from './tour/MochiTour';

/** Everything between the hero and pricing: the full page, or Mochi's tour of it. */
function HomeMiddle() {
  const { view, setView, available } = useHomeView();
  return (
    <>
      {available && <div className="wrap pb-14 pt-12"><HomeViewSwitch view={view} onChange={setView} /></div>}
      {view === 'watch' ? <MochiTour /> : (
        <>
          <FormatsBand />
          <WhoItsFor />
          <Principles />
          <ResearchLoop />
          <Themes />
          <WhyLocal />
          <NotYet />
        </>
      )}
    </>
  );
}

export function HomePage() {
  return (
    <PageShell>
      <Hero />
      <HomeMiddle />
      <Pricing />
      <Coda />
    </PageShell>
  );
}

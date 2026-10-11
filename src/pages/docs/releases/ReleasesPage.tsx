import { PageShell } from '@/components/layout/PageShell';
import { PageIntro } from '@/components/typography/PageIntro';
import { SideNav } from '@/components/navigation/SideNav';
import { RELEASES, RELEASES_HEAD } from '@/content/releases.content';
import { DocsTabs } from '../DocsTabs';
import { ReleaseNotes } from './ReleaseNotes';

const LINKS = RELEASES.map((r) => ({ label: `v${r.version}`, href: `#v${r.version}` }));

/** Every version's changes, on a page of its own beside the guide. */
export function ReleasesPage() {
  return (
    <PageShell>
      <div className="wrap">
        <PageIntro kicker={RELEASES_HEAD.kicker} title={RELEASES_HEAD.title} text={RELEASES_HEAD.intro} />
        <DocsTabs current="releases" />
        <div className="grid gap-12 pb-24 lg:grid-cols-[220px_1fr]">
          <SideNav title={RELEASES_HEAD.nav} links={LINKS} />
          <div className="min-w-0"><ReleaseNotes /></div>
        </div>
      </div>
    </PageShell>
  );
}

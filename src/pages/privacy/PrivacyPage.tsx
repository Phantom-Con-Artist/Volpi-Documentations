import { PageShell } from '@/components/layout/PageShell';
import { PageIntro } from '@/components/typography/PageIntro';
import { SideNav } from '@/components/navigation/SideNav';
import { PRIVACY_HEAD, PRIVACY_SECTIONS } from '@/content/privacy.content';
import { SITE } from '@/content/site.content';
import { PrivacySummary } from './PrivacySummary';
import { NetworkDetails } from './NetworkDetails';
import { PolicyBlock } from './PolicyBlock';
import { PrivacyWhy } from './PrivacyWhy';
import { WHY_LOCAL_PRIVACY } from '@/content/why-local.content';

const LINKS = [
  { label: WHY_LOCAL_PRIVACY.title, href: '#why' },
  { label: 'The short version', href: '#summary' },
  ...PRIVACY_SECTIONS.map((s) => ({ label: s.title, href: `#${s.id}` })),
];

export function PrivacyPage() {
  return (
    <PageShell>
      <div className="wrap">
        <div>
          <PageIntro kicker={PRIVACY_HEAD.kicker} title={PRIVACY_HEAD.title} text={PRIVACY_HEAD.text}>
            <p className="kicker mt-6">Last updated {SITE.updated} · applies to {SITE.version}</p>
          </PageIntro>
        </div>
        <div className="grid gap-12 pb-24 lg:grid-cols-[220px_1fr]">
          <SideNav title="On this page" links={LINKS} />
          <div className="min-w-0">
            <PrivacyWhy />
            <PrivacySummary />
            <div className="mt-14">
              {PRIVACY_SECTIONS.map((s) => (
                <PolicyBlock key={s.id} section={s}>
                  {s.id === 'network' && <NetworkDetails />}
                </PolicyBlock>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

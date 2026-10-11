import { ArrowRight, Download } from 'lucide-react';
import { PageShell } from '@/components/layout/PageShell';
import { PageIntro } from '@/components/typography/PageIntro';
import { DOWNLOAD, DOWNLOAD_PAGE, INSTALL_DOCS } from '@/content/download.content';
import { DOWNLOADS, INSTALL_URL, SITE } from '@/content/site.content';
import { DownloadButton } from '@/components/download/DownloadButton';

/** Every installer, then how to install on each system. */
export function DownloadPage() {
  return (
    <PageShell>
      <div className="wrap pb-24">
        <PageIntro kicker={`${DOWNLOAD_PAGE.kicker} · ${SITE.version}`} title={DOWNLOAD_PAGE.title} text={INSTALL_DOCS.intro}>
          <div className="mt-8 flex flex-wrap items-center gap-4"><DownloadButton size="lg" /></div>
          <p className="mt-5 max-w-[38em] text-[15px] leading-[1.6] text-ink-2">{DOWNLOAD.unsigned}</p>
        </PageIntro>
        <section className="rise border-t border-tone-soft py-14">
          <h2 className="text-[clamp(1.6rem,3vw,2.1rem)] leading-tight">{DOWNLOAD_PAGE.filesTitle}</h2>
          <p className="mb-8 mt-2 text-ink-2">{DOWNLOAD_PAGE.filesIntro}</p>
          <ul className="m-0 grid list-none gap-0 border-t border-ink p-0">
            {DOWNLOADS.map((d) => (
              <li key={d.id} className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-b border-tone-soft py-4">
                <span><span className="font-mincho font-semibold">{d.label}</span> <span className="text-ink-2">{d.detail}</span></span>
                <a className="textlink" href={d.href}><Download size={16} aria-hidden="true" />{DOWNLOAD.forSystem(d.label)}</a>
              </li>
            ))}
          </ul>
          <p className="mt-5 max-w-[38em] text-[15px] text-ink-2">{DOWNLOAD.macHint}</p>
        </section>
        <section className="rise border-t border-tone-soft py-14">
          <h2 className="text-[clamp(1.6rem,3vw,2.1rem)] leading-tight">{DOWNLOAD_PAGE.stepsTitle}</h2>
          <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {INSTALL_DOCS.steps.map((s) => (
              <div key={s.title} id={s.title.toLowerCase().replace(/[^a-z]+/g, '-')}>
                <h3 className="font-mincho text-[1.25rem] font-semibold">{s.title}</h3>
                <p className="mt-2 text-ink-2">{s.text}</p>
              </div>
            ))}
          </div>
          <a className="textlink mt-10" href={INSTALL_URL} target="_blank" rel="noopener noreferrer">{INSTALL_DOCS.full}</a>
        </section>
        <section className="rise border-t border-tone-soft pt-14">
          <h2 className="text-[clamp(1.6rem,3vw,2.1rem)] leading-tight">{DOWNLOAD_PAGE.moreTitle}</h2>
          <ul className="m-0 mt-6 grid list-none gap-4 p-0">
            {DOWNLOAD_PAGE.more.map((l) => <li key={l.href}><a href={l.href} className="textlink">{l.label} <ArrowRight size={16} aria-hidden="true" /></a></li>)}
          </ul>
        </section>
      </div>
    </PageShell>
  );
}

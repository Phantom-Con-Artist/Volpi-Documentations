import { INSTALL_DOCS } from '@/content/download.content';
import { INSTALL_URL } from '@/content/site.content';
import { DownloadButton } from '@/components/download/DownloadButton';
import { DownloadNote } from '@/components/download/DownloadNote';

export function InstallSection() {
  return (
    <section id={INSTALL_DOCS.id} className="rise border-t border-tone-soft py-14">
      <h2 className="text-[clamp(1.9rem,3.4vw,2.8rem)] leading-tight">{INSTALL_DOCS.title}</h2>
      <p className="mt-2 max-w-[44em] text-ink-2">{INSTALL_DOCS.intro}</p>
      <div className="mt-6 flex flex-wrap items-center gap-4"><DownloadButton size="lg" /></div>
      <DownloadNote className="mt-5" />
      <dl className="m-0 mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
        {INSTALL_DOCS.steps.map((s) => (
          <div key={s.title}>
            <dt className="font-mincho font-semibold">{s.title}</dt>
            <dd className="m-0 mt-1 text-[15.5px] text-ink-2">{s.text}</dd>
          </div>
        ))}
      </dl>
      <a className="textlink mt-8" href={INSTALL_URL} target="_blank" rel="noopener noreferrer">{INSTALL_DOCS.full}</a>
    </section>
  );
}

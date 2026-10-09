import { DOWNLOAD, DOWNLOAD_NAMES } from '@/content/download.content';
import { DOWNLOADS } from '@/content/site.content';
import { useDownloadTarget } from '@/hooks/useDownloadTarget';

/** Under the download buttons: the unsigned-installer warning, install help and every installer. */
export function DownloadNote({ className = '' }: { className?: string }) {
  const target = useDownloadTarget();
  return (
    <div className={`text-[15px] leading-[1.6] text-ink-2 ${className}`}>
      {target === 'mac' && <p className="mb-2 max-w-[38em]">{DOWNLOAD.macHint}</p>}
      <p className="max-w-[38em]">{DOWNLOAD.unsigned} <a className="whitespace-nowrap font-bold text-ink underline decoration-seal decoration-2 underline-offset-4 hover:text-seal" href={DOWNLOAD.installHref}>{DOWNLOAD.install}</a></p>
      <details className="mt-2.5">
        <summary className="cursor-pointer font-medium text-ink">{DOWNLOAD.other}</summary>
        <ul className="m-0 mt-2 grid list-none gap-1 p-0">
          {DOWNLOADS.map((d) => (
            <li key={d.id}><a className="textlink" href={d.href}>{DOWNLOAD_NAMES[d.id]}</a> <span className="text-ink-3">{d.detail}</span></li>
          ))}
        </ul>
      </details>
    </div>
  );
}

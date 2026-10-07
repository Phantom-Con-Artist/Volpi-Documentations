import { Download } from 'lucide-react';
import { P5Button } from '@/components/buttons/P5Button';
import { DOWNLOAD, DOWNLOAD_NAMES } from '@/content/download.content';
import { DOWNLOADS } from '@/content/site.content';
import { useDownloadTarget } from '@/hooks/useDownloadTarget';

type Size = 'sm' | 'md' | 'lg';
type Id = (typeof DOWNLOADS)[number]['id'];

const hrefFor = (id: Id) => DOWNLOADS.find((d) => d.id === id)!.href;

/** The same P5 button as the Discord one, with a download icon. One file for Windows and Linux; two for a Mac (Apple Silicon or Intel), because we cannot tell them apart. */
export function DownloadButton({ size = 'md' }: { size?: Size }) {
  const target = useDownloadTarget();
  const icon = <Download size={size === 'sm' ? 15 : 19} aria-hidden="true" />;
  const ids: Id[] = target === 'mac' ? ['mac-arm', 'mac-intel'] : target ? [target] : [];

  if (ids.length === 0) {
    return <P5Button href={DOWNLOAD.installHref} primary size={size}>{icon}{DOWNLOAD.generic}</P5Button>;
  }
  return (
    <>
      {ids.map((id) => (
        <P5Button key={id} href={hrefFor(id)} primary size={size}>{icon}{DOWNLOAD.forSystem(DOWNLOAD_NAMES[id])}</P5Button>
      ))}
    </>
  );
}

/** Compact header version: a direct file when the system is clear, otherwise the install section. */
export function HeaderDownload() {
  const target = useDownloadTarget();
  const direct = target === 'windows' || target === 'linux' ? hrefFor(target) : DOWNLOAD.installHref;
  return <P5Button href={direct} primary size="sm"><Download size={15} aria-hidden="true" />{DOWNLOAD.short}</P5Button>;
}

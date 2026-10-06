import { REPORT_ASIDE } from '@/content/report.content';
import { DiscordButton } from '@/components/buttons/DiscordButton';
import { MochiAside } from '@/components/mochi/MochiAside';

/** Help beside the steps: no GitHub account, not a bug, or a security problem. */
export function ReportAside() {
  const { noAccount, notBug, security } = REPORT_ASIDE;
  return (
    <aside className="rise flex flex-col gap-8 lg:sticky lg:top-28">
      <div className="panel p-6 sm:p-7">
        <h2 className="text-[1.35rem] leading-tight">{noAccount.title}</h2>
        <p className="mt-2 text-[15.5px] text-ink-2">{noAccount.text}</p>
        <h2 className="mt-6 text-[1.35rem] leading-tight">{notBug.title}</h2>
        <p className="mt-2 text-[15.5px] text-ink-2">{notBug.text}</p>
        <div className="mt-6"><DiscordButton size="sm" /></div>
      </div>
      <div className="border-[2px] border-dashed border-seal p-6">
        <h2 className="text-[1.2rem] leading-tight text-seal">{security.title}</h2>
        <p className="mt-2 text-[15.5px] text-ink-2">{security.text}</p>
        <a href={security.link.href} target="_blank" rel="noopener noreferrer" className="textlink mt-4">{security.link.label}</a>
      </div>
      <MochiAside text={REPORT_ASIDE.mochi} mood="happy" />
    </aside>
  );
}

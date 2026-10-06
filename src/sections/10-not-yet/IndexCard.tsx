import { NOT_YET } from '@/content/notyet.content';

/** A ruled library index card with a red margin line. */
export function IndexCard() {
  const ruled = {
    background: 'repeating-linear-gradient(to bottom, transparent 0 39px, color-mix(in srgb, var(--accent) 22%, transparent) 39px 40px), var(--panel)',
    borderTop: '3px solid var(--seal)',
  };
  return (
    <div className="rise relative border border-tone py-[22px] pl-[52px] pr-6 shadow-[0_14px_30px_-18px_rgb(0_0_0/.4)] sm:pl-16 sm:pr-8 md:-rotate-[.6deg]" style={ruled}>
      <span className="absolute bottom-0 left-[34px] top-0 w-px sm:left-11" style={{ background: 'color-mix(in srgb, var(--seal) 40%, transparent)' }} aria-hidden="true" />
      <span className="kicker block h-10 leading-10">{NOT_YET.card}</span>
      <ul className="m-0 list-none p-0">
        {NOT_YET.items.map((item) => (
          <li key={item.title} className="font-mincho text-[18px] leading-10">
            {item.title} <span className="font-maru text-[15px] text-ink-2">· {item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

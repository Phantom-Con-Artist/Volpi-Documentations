interface Props {
  kicker: string;
  title: string;
  chapter?: string;
}

/** Big left-aligned heading with a sheared label, a red slash and a vertical chapter marker. */
export function SectionHead({ kicker, title, chapter }: Props) {
  return (
    <div className="rise mb-14 flex items-start justify-between gap-8">
      <div className="flex flex-col items-start gap-5">
        <span className="p5-tag">{kicker}</span>
        <h2 className="text-[clamp(2.4rem,5vw,4.6rem)] leading-[1.05]"><span className="slash">{title}</span></h2>
      </div>
      {chapter && <span className="chapter-jp hidden shrink-0 md:block" aria-hidden="true">{chapter}</span>}
    </div>
  );
}

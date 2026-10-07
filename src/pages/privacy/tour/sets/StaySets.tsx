import { PRIVACY_PROPS as P } from '@/content/privacy-tour.content';
import { Bit, Sfx, Stamp } from '@/components/film/FilmBits';
import { titleSet } from '@/components/film/titleSet';

const CHIP = 'inline-block border-[2px] border-ink bg-panel px-3 py-1.5 font-dot text-[15px] shadow-[3px_3px_0_var(--tone)]';
const CROSS = 'f-stamp absolute left-[-6px] top-[calc(50%-2px)] block h-[4px] w-[calc(100%+12px)] bg-seal';

export const TitleSet = titleSet(P.title, P.subtitle, 'ひみつ');

export function HomeSet() {
  return (
    <>
      <Bit x={420} y={50} delay={0.2}>
        <div className="grid h-[260px] w-[340px] content-start gap-3 border-[4px] border-ink bg-panel p-5 shadow-[8px_8px_0_var(--tone)]">
          <span className="font-mincho text-[26px] font-semibold">{P.computer}</span>
          <div className="flex flex-wrap gap-2">{P.files.map((f, i) => <span key={f} className={`${CHIP} f-drop`} style={{ animationDelay: `${0.8 + i * 0.35}s` }}>{f}</span>)}</div>
        </div>
      </Bit>
      <Bit x={780} y={330} delay={2.4}>
        <div className="relative grid w-[160px] gap-1 border-[3px] border-dashed border-ink px-4 py-3 text-center">
          <span className="font-mincho text-[20px] font-semibold">{P.server}</span>
          <span className="font-dot text-[12px] uppercase tracking-[.1em] text-seal">{P.serverNone}</span>
        </div>
      </Bit>
      <Sfx x={440} y={410} r={-6} delay={3} text="ないない" size={52} />
    </>
  );
}

export function PostcardSet() {
  return (
    <>
      {P.databases.map((db, i) => <Bit key={db} x={440} y={60 + i * 58} delay={0.3 + i * 0.2}><span className="p5-tag">{db}</span></Bit>)}
      <Bit x={40} y={150} delay={0.6}>
        <div className="f-send relative w-[230px] border-[3px] border-ink bg-panel px-4 py-3 shadow-[5px_5px_0_var(--seal)]" style={{ animationDelay: '1.6s' }}>
          <span className="absolute right-2 top-2 h-8 w-7 border-[2px] border-seal" />
          <span className="block font-dot text-[13px] uppercase tracking-[.1em]">{P.postcardTo}</span>
          <span className="mt-2 block font-mincho text-[18px]">{P.postcardBody}</span>
        </div>
      </Bit>
      <Bit x={60} y={330} delay={0.4}><span className={`${CHIP} text-[18px]`}>{P.files[0]}</span></Bit>
      <Stamp x={230} y={390} r={-6} delay={3.2} text={P.staysHome} />
      <Sfx x={250} y={80} r={6} delay={1.8} text="ピュー" size={44} />
    </>
  );
}

export function LuggageSet() {
  return (
    <>
      <Bit x={430} y={250} delay={0.2}>
        <div className="relative h-[190px] w-[290px] rounded-[14px] border-[4px] border-ink bg-accent-soft shadow-[7px_7px_0_var(--tone)]">
          <span className="absolute -top-[30px] left-[100px] h-[30px] w-[90px] rounded-t-[12px] border-[4px] border-b-0 border-ink" />
          <span className="absolute inset-x-0 top-1/2 h-[4px] bg-ink" />
        </div>
      </Bit>
      {P.luggage.map((item, i) => (
        <Bit key={item} x={760} y={50 + i * 70} delay={0.6 + i * 0.4}>
          <span className="relative inline-block">
            <span className={CHIP}>{item}</span>
            <span className={CROSS} style={{ animationDelay: `${1 + i * 0.4}s`, ['--r' as string]: '-8deg' }} />
          </span>
        </Bit>
      ))}
      <Stamp x={450} y={70} r={-6} delay={3.2} text={P.rejected} />
    </>
  );
}

export function ModesSet() {
  return (
    <>
      {P.modes.map((mode, i) => (
        <Bit key={mode} x={40} y={80 + i * 105} delay={0.3 + i * 0.35}>
          <span className="flex w-[440px] items-center justify-between border-[3px] border-ink bg-panel px-5 py-4 shadow-[5px_5px_0_var(--tone)]">
            <span className="flex items-center gap-3 font-maru text-[22px] font-bold">{mode}{i === 0 && <span className="p5-tag p5-tag-seal">{P.modeDefault}</span>}</span>
            <span className={`relative block h-[30px] w-[60px] rounded-full border-[3px] border-ink ${i === 0 ? 'bg-seal' : 'bg-tone-soft'}`}>
              <span className={`absolute top-[2px] block h-[20px] w-[20px] rounded-full border-[2px] border-ink bg-panel ${i === 0 ? 'right-[3px]' : 'left-[3px]'}`} />
            </span>
          </span>
        </Bit>
      ))}
      <Sfx x={300} y={420} r={-6} delay={1.6} text="カチッ" size={56} />
    </>
  );
}

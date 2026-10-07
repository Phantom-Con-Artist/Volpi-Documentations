import { PRIVACY_PROPS as P } from '@/content/privacy-tour.content';
import { Bit, Sfx, Stamp } from '@/components/film/FilmBits';

const CHIP = 'inline-block border-[2px] border-ink bg-panel px-3 py-1.5 font-dot text-[16px] shadow-[3px_3px_0_var(--tone)]';
const BOX_SPOTS = [{ x: 420, y: 70 }, { x: 680, y: 70 }, { x: 420, y: 230 }, { x: 680, y: 230 }];

export function NobodySet() {
  return (
    <>
      {P.nobody.map((item, i) => (
        <Bit key={item} {...BOX_SPOTS[i]} delay={0.3 + i * 0.3}>
          <span className="relative grid h-[120px] w-[230px] place-content-center border-[3px] border-ink bg-panel font-mincho text-[24px] font-semibold shadow-[5px_5px_0_var(--tone)]">
            {item}
            <span className="f-stamp absolute -right-4 -top-6 font-mincho text-[64px] leading-none text-seal" style={{ animationDelay: `${1.2 + i * 0.45}s` }}>×</span>
          </span>
        </Bit>
      ))}
      <Sfx x={560} y={420} r={-5} delay={3.2} text="しーん" size={56} />
    </>
  );
}

export function LockSet() {
  return (
    <>
      <Bit x={60} y={60} delay={0.2}>
        <div className="relative h-[330px] w-[220px] border-[4px] border-ink bg-accent-soft shadow-[7px_7px_0_var(--tone)]">
          <span className="absolute right-[18px] top-[160px] h-[18px] w-[18px] rounded-full border-[3px] border-ink bg-panel" />
          <span className="absolute left-[70px] top-[60px] h-[40px] w-[60px] rounded-t-full border-[6px] border-b-0 border-ink" />
          <span className="absolute left-[60px] top-[96px] grid h-[60px] w-[80px] place-content-center border-[4px] border-ink bg-seal" />
        </div>
      </Bit>
      <Bit x={320} y={90} delay={1}><span className="p5-tag">{P.lock}</span></Bit>
      {P.files.slice(0, 3).map((f, i) => <Bit key={f} x={320} y={160 + i * 56} delay={1.6 + i * 0.3}><span className={CHIP}>{f}</span></Bit>)}
      <Stamp x={300} y={390} r={-4} delay={2.8} text={P.lockSub} />
    </>
  );
}

export function DeleteSet() {
  return (
    <>
      <Bit x={440} y={110} delay={0.2}>
        <div className="f-shrink" style={{ animationDelay: '1.6s' }}>
          <span className="block h-[30px] w-[130px] border-[3px] border-b-0 border-ink bg-accent-soft px-3 font-dot text-[13px] leading-[26px]">{P.folder}</span>
          <span className="block h-[150px] w-[260px] border-[3px] border-ink bg-accent-soft shadow-[6px_6px_0_var(--tone)]" />
        </div>
      </Bit>
      <Bit x={770} y={250} delay={0.5}>
        <div className="flex flex-col items-center">
          <span className="block h-[16px] w-[140px] border-[3px] border-ink bg-panel" />
          <span className="block h-[150px] w-[120px] border-[3px] border-t-0 border-ink bg-panel" style={{ background: 'repeating-linear-gradient(to right, var(--panel) 0 22px, var(--tone-soft) 22px 25px)' }} />
        </div>
      </Bit>
      <Stamp x={470} y={300} r={-6} delay={2.6} text={P.deleted} />
      <Bit x={440} y={450} delay={3.2}><span className="p5-tag p5-tag-seal">{P.ourSide}</span></Bit>
    </>
  );
}

export function CookiesSet() {
  return (
    <>
      <Bit x={50} y={100} delay={0.2}>
        <div className="relative grid h-[250px] w-[220px] place-content-center rounded-b-[28px] border-[4px] border-ink bg-panel text-center shadow-[7px_7px_0_var(--tone)]">
          <span className="absolute -top-[24px] left-[30px] h-[24px] w-[160px] rounded-t-[10px] border-[4px] border-ink bg-accent-soft" />
          <span className="font-mincho text-[28px] font-semibold">{P.cookie}</span>
        </div>
      </Bit>
      {P.storage.map((s, i) => <Bit key={s} x={330} y={120 + i * 70} delay={1.2 + i * 0.35}><span className={CHIP}>{s}</span></Bit>)}
      <Sfx x={300} y={400} r={-6} delay={2.4} text="ガーン" size={60} />
    </>
  );
}

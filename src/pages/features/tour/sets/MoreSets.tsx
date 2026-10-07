import { Search } from 'lucide-react';
import { FEATURES_PROPS as P } from '@/content/features-tour.content';
import { Bit, Sfx, Stamp, Win } from '@/components/film/FilmBits';

const KEYCAP = 'inline-block border-[3px] border-ink bg-panel px-4 py-2 font-dot text-[22px] shadow-[0_5px_0_var(--ink)]';

export function EquationsSet() {
  return (
    <>
      <Bit x={440} y={90} delay={0.3}><span className="inline-block border-[3px] border-ink bg-panel px-5 py-3 font-dot text-[30px] shadow-[5px_5px_0_var(--tone)]">{P.equationRaw}</span></Bit>
      <Bit x={600} y={190} delay={1.2}><span className="block font-mincho text-[56px] text-seal">↓</span></Bit>
      <Bit x={470} y={280} delay={1.9} className="f-stamp"><span className="font-mincho text-[76px] italic">{P.equation}</span></Bit>
      <Bit x={830} y={310} delay={2.3}><span className="font-mincho text-[40px]">{P.equationNo}</span></Bit>
      <Sfx x={690} y={430} r={-6} delay={2.1} text="ピカーン" size={50} />
    </>
  );
}

export function SearchSet() {
  return (
    <>
      <Bit x={40} y={70} delay={0.2}>
        <span className="flex w-[480px] items-center gap-3 border-[3px] border-ink bg-panel px-4 py-3 font-maru text-[22px] shadow-[5px_5px_0_var(--tone)]">
          <Search size={24} strokeWidth={2.6} aria-hidden="true" />{P.searchQuery}
        </span>
      </Bit>
      {P.searchHits.map((hit, i) => (
        <Bit key={hit.file} x={60} y={170 + i * 95} delay={1 + i * 0.45} className="f-drop">
          <span className="flex w-[460px] items-center justify-between border-[3px] border-ink bg-panel px-4 py-3 shadow-[4px_4px_0_var(--seal)]">
            <span className="font-dot text-[17px]">{hit.file}</span><span className="p5-tag p5-tag-seal">{hit.where}</span>
          </span>
        </Bit>
      ))}
    </>
  );
}

export function NightSet() {
  return (
    <>
      <span className="f-fade absolute inset-0" style={{ background: 'color-mix(in srgb, var(--hl) 22%, transparent)', animationDelay: '1.4s' }} />
      <Bit x={800} y={30} delay={0.3}><span className="block font-mincho text-[100px] leading-none text-seal">☾</span></Bit>
      {P.nightLevels.map((level, i) => (
        <Bit key={level} x={430 + i * 120} y={70} delay={0.6 + i * 0.25}>
          <span className={`inline-block border-[3px] border-ink px-4 py-1.5 font-maru text-[17px] font-bold ${i === 1 ? 'bg-ink text-paper' : 'bg-panel'}`}>{level}</span>
        </Bit>
      ))}
      <Win x={430} y={160} w={420} h={260} label={P.zen} delay={1.0} />
      <Sfx x={640} y={440} r={-5} delay={2} text="ぬくぬく" size={48} />
    </>
  );
}

export function KeysSet() {
  return (
    <>
      {P.keys.map((combo, row) => (
        <Bit key={combo.join('+')} x={40} y={70 + row * 90} delay={0.3 + row * 0.35}>
          <span className="flex items-center gap-2">
            {combo.map((k, i) => <span key={k} className="flex items-center gap-2">{i > 0 && <span className="font-mincho text-[24px]">+</span>}<kbd className={KEYCAP}>{k}</kbd></span>)}
          </span>
        </Bit>
      ))}
      <Bit x={340} y={80} delay={2.2} r={2}>
        <ul className="m-0 grid w-[220px] list-none gap-0 border-[3px] border-ink bg-panel p-0 py-2 font-maru text-[17px] shadow-[6px_6px_0_var(--tone)]">
          {P.menu.map((item, i) => <li key={item} className={`px-4 py-1.5 ${i === 4 ? 'bg-ink text-paper' : ''}`}>{item}</li>)}
        </ul>
      </Bit>
      <Sfx x={60} y={440} r={-6} delay={1.4} text="カチカチ" size={48} />
    </>
  );
}

export function SafeSet() {
  return (
    <>
      <Bit x={430} y={60} delay={0.2} className="f-drop">
        <div className="grid h-[290px] w-[230px] content-start gap-3 border-[4px] border-ink bg-accent-soft p-5 shadow-[7px_7px_0_var(--tone)]">
          <span className="font-mincho text-[24px] font-semibold leading-tight">{P.journal}</span>
          {[90, 70, 85, 60, 75].map((w, i) => <span key={i} className="h-2 bg-tone" style={{ width: `${w}%` }} />)}
        </div>
      </Bit>
      <Bit x={690} y={140} delay={1.6}>
        <div className="grid w-[250px] gap-2 border-[3px] border-ink bg-panel p-3 shadow-[6px_6px_0_var(--seal)]">
          {P.conflict.map((c) => <span key={c} className="border-[2px] border-ink px-3 py-1.5 font-maru text-[15px] font-bold">{c}</span>)}
        </div>
      </Bit>
      <Sfx x={470} y={410} r={-6} delay={2.6} text="ふぅ" size={66} />
    </>
  );
}

const NOTE_SPOTS = [{ x: 40, y: 70, r: -4 }, { x: 300, y: 90, r: 3 }, { x: 60, y: 250, r: 2 }, { x: 320, y: 270, r: -3 }];

export function LaterSet() {
  return (
    <>
      {P.later.map((item, i) => (
        <Bit key={item} {...NOTE_SPOTS[i]} delay={0.4 + i * 0.4}>
          <span className="grid h-[130px] w-[230px] content-between border-[3px] border-ink bg-panel p-4 shadow-[5px_5px_0_var(--tone)]">
            <span className="font-mincho text-[22px] font-semibold leading-tight">{item}</span>
            <span className="p5-tag self-start">{P.planned}</span>
          </span>
        </Bit>
      ))}
      <Stamp x={70} y={430} r={-5} delay={2.6} text={P.noDates} />
      <Sfx x={380} y={440} r={6} delay={2.2} text="わくわく" size={46} />
    </>
  );
}

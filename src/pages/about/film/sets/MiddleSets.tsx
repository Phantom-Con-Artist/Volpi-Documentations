import { FoxSeal } from '@/components/brand/FoxSeal';
import { FILM_PROPS } from '@/content/about.content';
import { Bit, Paper, Sfx, Win } from '../FilmBits';

const [PDF, NOTES, REFS, SHEET, WORD] = FILM_PROPS.tools;

export function ShuffleSet() {
  return (
    <>
      <Win x={40} y={250} label={PDF} r={-3} delay={0.1} />
      <Win x={300} y={150} label={NOTES} r={2} delay={0.3} />
      <Win x={520} y={320} label={WORD} r={-2} delay={0.5} />
      <Bit x={70} y={300} delay={0.9} className="f-fade">
        <div className="f-fly border-[3px] border-seal bg-panel px-3 py-2 font-mincho text-[15px] italic shadow-[4px_4px_0_var(--tone)]">{FILM_PROPS.quote}</div>
      </Bit>
      <Sfx x={60} y={60} r={-6} delay={1.2} text="ぐるぐる" size={56} />
    </>
  );
}

const FALLING = [80, 210, 340, 470, 600, 730, 860, 520];

export function LostSet() {
  return (
    <>
      {FALLING.map((x, i) => (
        <Paper key={i} x={x} y={-40} w={90} h={28} delay={0.2 + i * 0.7} className="f-fall" r={i % 2 ? 120 : -100} />
      ))}
      <Bit x={670} y={150} delay={0.2}>
        <div className="relative h-[200px] w-[200px] rounded-full border-[5px] border-ink bg-panel shadow-[6px_6px_0_var(--tone)]">
          <span className="f-spin-slow absolute bottom-1/2 left-[calc(50%-3px)] h-[52px] w-[6px] bg-ink" />
          <span className="f-spin absolute bottom-1/2 left-[calc(50%-2px)] h-[78px] w-[4px] bg-seal" />
        </div>
      </Bit>
      <Bit x={440} y={60} delay={0.8}><span className="f-float block font-mincho text-[130px] font-semibold leading-none text-seal">?</span></Bit>
      <Sfx x={640} y={360} r={6} delay={1.4} text="あれ？" size={62} />
    </>
  );
}

const SCATTERED = [
  { label: PDF, x: 40, y: 60, r: -5 },
  { label: NOTES, x: 330, y: 30, r: 3 },
  { label: REFS, x: 60, y: 330, r: 4 },
  { label: SHEET, x: 430, y: 360, r: -3 },
  { label: WORD, x: 560, y: 120, r: 2 },
];

export function MergeSet() {
  return (
    <>
      {SCATTERED.map((t, i) => (
        <div key={t.label} style={{ ['--tx' as string]: `${300 - t.x}px`, ['--ty' as string]: `${230 - t.y}px` }}>
          <Win {...t} delay={0.3 + i * 0.12} className="f-merge" />
        </div>
      ))}
      <Win x={90} y={170} w={520} h={320} label="Volpi" delay={1.6}>
        <div className="flex items-center gap-4 p-5">
          <FoxSeal className="h-14 w-14" />
          <span className="font-mincho text-[44px] font-semibold leading-none">{FILM_PROPS.desk}</span>
        </div>
        <div className="grid grid-cols-2 gap-3 px-5">
          {FILM_PROPS.deskRows.map((r) => <span key={r} className="border-[2px] border-ink bg-accent-soft px-3 py-2 font-dot text-[15px] tracking-[.08em]">{r}</span>)}
        </div>
      </Win>
      <Sfx x={70} y={40} r={-8} delay={1.6} text="ポン" size={70} />
    </>
  );
}

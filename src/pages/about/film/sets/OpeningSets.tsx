import { FoxSeal } from '@/components/brand/FoxSeal';
import { FILM_PROPS } from '@/content/about.content';
import { Bit, Paper, Sfx, Win } from '../FilmBits';

export function TitleSet() {
  return (
    <>
      <div className="speedlines absolute inset-0" style={{ ['--sl-x' as string]: '72%', ['--sl-y' as string]: '60%' }} />
      <Bit x={56} y={150} delay={0.2}><span className="font-mincho text-[150px] font-semibold leading-none">Volpi</span></Bit>
      <Bit x={62} y={330} delay={0.7} className="f-fade"><span className="font-dot text-[18px] uppercase tracking-[.2em] text-ink-2">{FILM_PROPS.subtitle}</span></Bit>
      <Bit x={500} y={180} r={-8} delay={1.1} className="f-stamp"><FoxSeal className="h-[90px] w-[90px]" /></Bit>
      <Bit x={900} y={290} delay={0.4} className="f-fade"><span className="chapter-jp block">{FILM_PROPS.chapter}</span></Bit>
      <Sfx x={90} y={400} r={-6} delay={0.5} text="ドン" size={72} />
    </>
  );
}

const STACK = [0, 1, 2, 3, 4, 5, 6, 7];

export function DeskSet() {
  return (
    <>
      <Bit x={320} y={430} className="f-fade"><div className="h-[6px] w-[600px] bg-ink" /></Bit>
      <Bit x={360} y={436} className="f-fade"><div className="h-[90px] w-[6px] bg-ink" /></Bit>
      <Bit x={880} y={436} className="f-fade"><div className="h-[90px] w-[6px] bg-ink" /></Bit>
      {STACK.map((i) => <Paper key={i} x={520 + (i % 2) * 6} y={392 - i * 34} r={(i % 3) - 1} delay={0.4 + i * 0.45} w={150} />)}
      <Win x={700} y={300} w={160} h={128} label={FILM_PROPS.thesis} delay={0.2} />
      <Bit x={420} y={378} delay={0.9}>
        <div className="h-[50px] w-[44px] rounded-b-[10px] border-[3px] border-ink bg-accent-soft" />
      </Bit>
      <Sfx x={690} y={150} r={8} delay={2.4} text="ドサッ" size={60} />
    </>
  );
}

const TOOL_SPOTS = [
  { x: 30, y: 90, r: -5 }, { x: 250, y: 60, r: 3 }, { x: 480, y: 40, r: -2 },
  { x: 710, y: 80, r: 5 }, { x: 40, y: 300, r: 4 }, { x: 700, y: 438, r: -4 },
];

export function WindowsSet() {
  return (
    <>
      {FILM_PROPS.tools.map((label, i) => <Win key={label} label={label} {...TOOL_SPOTS[i]} w={200} h={i === 5 ? 96 : 126} delay={0.3 + i * 0.55} />)}
      <Sfx x={250} y={220} r={-10} delay={3.6} text="ピコン" size={54} />
    </>
  );
}

import { FINALE } from '@/content/film.content';
import { Bit, Stamp } from './FilmBits';

const PETALS = [40, 130, 230, 320, 600, 690, 780, 880, 170, 740, 470, 900];

/** The closing panel of every film: falling petals, a vertical welcome and a hanko, while Mochi bows in the middle. */
export function FinaleSet() {
  return (
    <>
      <div className="speedlines absolute inset-0" style={{ ['--sl-x' as string]: '50%', ['--sl-y' as string]: '62%' }} />
      {PETALS.map((x, i) => (
        <Bit key={i} x={x} y={-30} delay={0.2 + i * 0.45} r={i * 47} className="f-fall"><span className="f-petal" /></Bit>
      ))}
      <Bit x={70} y={70} delay={0.4}>
        <span className="block font-mincho text-[92px] font-semibold leading-none text-seal" style={{ writingMode: 'vertical-rl' }}>{FINALE.welcome}</span>
      </Bit>
      <Bit x={585} y={440} delay={1.4}><span className="font-mincho text-[38px] font-semibold">{FINALE.title}</span></Bit>
      <Stamp x={760} y={90} r={8} delay={2.4} text={FINALE.stamp} sub={FINALE.stampSub} />
    </>
  );
}

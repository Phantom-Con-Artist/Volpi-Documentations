import type { CSSProperties } from 'react';
import { ArrowDown } from 'lucide-react';
import { TOUR_PROPS } from '@/content/tour.content';
import { Bit, Sfx, Stamp, Win } from '@/components/film/FilmBits';

const delay = (s: number): CSSProperties => ({ animationDelay: `${s}s` });
const BARS = [70, 120, 95, 150, 125];

export function DataSet() {
  return (
    <>
      <Win x={420} y={40} w={300} h={250} label={TOUR_PROPS.dataFile} delay={0.1}>
        <table className="w-full border-collapse font-dot text-[15px]">
          <thead><tr>{TOUR_PROPS.dataHead.map((h) => <th key={h} className="border-b-[2px] border-ink px-3 py-1.5 text-left">{h}</th>)}</tr></thead>
          <tbody>
            {TOUR_PROPS.dataRows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, j) => (
                  <td key={j} className="border-b border-tone-soft px-3 py-1.5">
                    {cell === '999' && <span className="f-stamp inline-block rounded-full border-[3px] border-seal px-1.5 text-seal" style={delay(1.4)}>{cell}</span>}
                    {cell === '' && <span className="f-stamp inline-block h-4 w-10 border-[2px] border-dashed border-seal align-middle" style={delay(2.2)} />}
                    {cell !== '999' && cell !== '' && cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Win>
      <Bit x={750} y={150} r={-3} delay={1.7}><span className="p5-tag p5-tag-seal">{TOUR_PROPS.outlier}</span></Bit>
      <Bit x={750} y={220} r={2} delay={2.5}><span className="p5-tag p5-tag-seal">{TOUR_PROPS.gap}</span></Bit>
      <Bit x={460} y={330} delay={3.0} className="f-fade">
        <div className="flex h-[170px] w-[440px] items-end gap-5 border-b-[4px] border-l-[4px] border-ink px-5">
          {BARS.map((h, i) => <span key={i} className="f-grow block w-[56px] border-[3px] border-ink bg-accent-soft" style={{ height: h, ...delay(3.3 + i * 0.25) }} />)}
        </div>
      </Bit>
      <Sfx x={770} y={20} r={6} delay={1.5} text="ピコン" size={54} />
    </>
  );
}

export function WriteSet() {
  return (
    <>
      <Win x={40} y={80} w={480} h={300} label={TOUR_PROPS.paper} delay={0.1}>
        <div className="grid gap-4 p-6 font-mincho text-[21px] leading-snug">
          <span className="h-4 w-1/2 bg-ink" />
          <p className="m-0">
            Memories are not <s className="f-fade inline-block text-seal" style={delay(1.2)}>{TOUR_PROPS.removed}</s>{' '}
            <u className="f-pop inline-block text-ok" style={delay(1.9)}>{TOUR_PROPS.added}</u> at the moment of learning{' '}
            <span className="f-pop inline-block text-accent" style={delay(2.6)}>{TOUR_PROPS.citation}</span>.
          </p>
          <span className="h-2 w-4/5 bg-tone-soft" /><span className="h-2 w-3/5 bg-tone-soft" />
        </div>
      </Win>
      {TOUR_PROPS.exports.map((ext, i) => (
        <Bit key={ext} x={50 + i * 102} y={420} delay={3.3 + i * 0.3} className="f-drop" r={i % 2 ? 3 : -3}>
          <span className="inline-block border-[3px] border-ink bg-panel px-3 py-2 font-dot text-[16px] shadow-[4px_4px_0_var(--seal)]">{ext}</span>
        </Bit>
      ))}
      <Sfx x={250} y={290} r={-4} delay={0.8} text="カキカキ" size={50} />
    </>
  );
}

export function LocalSet() {
  return (
    <>
      <Bit x={430} y={110} delay={0.2}>
        <div className="flex flex-col items-center">
          <div className="grid h-[210px] w-[340px] place-content-center gap-2 border-[4px] border-ink bg-panel text-center shadow-[8px_8px_0_var(--tone)]">
            <span className="font-mincho text-[34px] font-semibold">{TOUR_PROPS.disk}</span>
            <span className="font-dot text-[13px] uppercase tracking-[.14em] text-ink-2">{TOUR_PROPS.diskSub}</span>
          </div>
          <span className="h-[40px] w-[16px] bg-ink" /><span className="h-[10px] w-[160px] bg-ink" />
        </div>
      </Bit>
      <Bit x={760} y={50} delay={0.9}>
        <div className="relative grid h-[90px] w-[150px] place-content-center rounded-full border-[3px] border-ink bg-panel font-dot text-[15px]">
          {TOUR_PROPS.cloud}
          <span className="f-stamp absolute left-[-10px] top-[38px] h-[8px] w-[170px] bg-seal" style={{ ['--r' as string]: '35deg', ...delay(1.8) }} />
        </div>
      </Bit>
      <Sfx x={760} y={400} r={6} delay={2.2} text="ゼロ" size={64} />
    </>
  );
}

export function NotYetSet() {
  return (
    <>
      <Bit x={60} y={80} r={-2} delay={0.2}>
        <div className="w-[470px] border-[3px] border-ink bg-panel px-8 py-6 shadow-[8px_8px_0_var(--tone)]" style={{ background: 'repeating-linear-gradient(to bottom, var(--panel) 0 43px, var(--tone-soft) 43px 44px)' }}>
          <span className="font-mincho text-[40px] font-semibold">{TOUR_PROPS.notYetTitle}</span>
          <ul className="m-0 mt-3 grid list-none gap-3 p-0">
            {TOUR_PROPS.notYet.map((item, i) => (
              <li key={item} className="f-pop flex items-center gap-3 font-maru text-[20px]" style={delay(0.8 + i * 0.6)}>
                <span className="h-[14px] w-[14px] rotate-45 border-[3px] border-seal" />{item}
              </li>
            ))}
          </ul>
        </div>
      </Bit>
      <Sfx x={330} y={400} r={-6} delay={2.6} text="そのうち" size={58} />
    </>
  );
}

export function PriceSet() {
  return (
    <>
      <div className="speedlines absolute inset-0" style={{ ['--sl-x' as string]: '76%', ['--sl-y' as string]: '50%' }} />
      <Stamp x={70} y={120} r={-5} delay={0.8} {...TOUR_PROPS.free} />
      <Stamp x={300} y={240} r={4} delay={2.0} {...TOUR_PROPS.payOnce} />
      <Bit x={80} y={420} delay={3.2}>
        <span className="inline-flex items-center gap-2 font-dot text-[18px] tracking-[.1em]">
          {TOUR_PROPS.below}<span className="f-float inline-block text-seal"><ArrowDown size={26} strokeWidth={3} aria-hidden="true" /></span>
        </span>
      </Bit>
    </>
  );
}

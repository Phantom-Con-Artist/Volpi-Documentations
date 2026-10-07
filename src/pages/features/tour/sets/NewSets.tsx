import type { CSSProperties } from 'react';
import { FEATURES_PROPS as P } from '@/content/features-tour.content';
import { Bit, Sfx, Stamp, Win } from '@/components/film/FilmBits';
import { titleSet } from '@/components/film/titleSet';

const delay = (s: number): CSSProperties => ({ animationDelay: `${s}s` });

export const TitleSet = titleSet(P.title, P.subtitle, 'ジャジャーン');

export function PanesSet() {
  return (
    <>
      {P.panes.map((label, i) => <Win key={label} x={30 + i * 185} y={90} w={180} h={300} label={label} delay={0.4 + i * 0.4} className="f-drop" />)}
      <Win x={300} y={360} w={220} h={110} r={-4} label={P.peek} delay={2.4} />
      <Sfx x={70} y={420} r={-6} delay={1.8} text="ズラッ" size={56} />
    </>
  );
}

export function VersionsSet() {
  return (
    <>
      <Win x={420} y={50} w={500} h={260} label={P.versionsFile} delay={0.2}>
        <p className="m-0 p-6 font-mincho text-[24px] leading-snug">
          Memories are not <s className="f-fade inline-block text-seal" style={delay(1.2)}>{P.removed}</s>{' '}
          <u className="f-pop inline-block text-ok" style={delay(1.8)}>{P.added}</u> at the moment of learning.
        </p>
      </Win>
      <Bit x={440} y={360} delay={0.8} className="f-fade"><span className="block h-[4px] w-[460px] bg-ink" /></Bit>
      {P.days.map((day, i) => (
        <Bit key={day} x={450 + i * 170} y={346} delay={1 + i * 0.3}>
          <span className="flex flex-col items-start gap-2"><span className="h-8 w-8 rounded-full border-[3px] border-ink bg-panel" /><span className="font-dot text-[15px]">{day}</span></span>
        </Bit>
      ))}
      <Stamp x={680} y={420} r={-4} delay={2.8} text={P.restore} />
    </>
  );
}

export function ExportSet() {
  return (
    <>
      <Win x={170} y={50} w={260} h={160} label={P.exportFile} delay={0.2} />
      {P.exports.map((ext, i) => (
        <Bit key={ext} x={40 + (i % 4) * 135} y={260 + Math.floor(i / 4) * 90} delay={1 + i * 0.25} className="f-drop" r={i % 2 ? 4 : -4}>
          <span className="inline-block border-[3px] border-ink bg-panel px-4 py-2 font-dot text-[20px] shadow-[4px_4px_0_var(--seal)]">{ext}</span>
        </Bit>
      ))}
      <Sfx x={440} y={60} r={8} delay={0.9} text="ドドド" size={52} />
    </>
  );
}

const BARS = [90, 150, 60, 120];

export function PictureSet() {
  return (
    <>
      <Win x={420} y={40} w={380} h={270} label={P.pictureFile} delay={0.2}>
        <div className="relative m-5 flex h-[180px] items-end gap-4 border-b-[3px] border-l-[3px] border-ink px-4 grayscale">
          {BARS.map((h, i) => <span key={i} className="block w-12 border-[3px] border-ink bg-tone" style={{ height: h }} />)}
          <span className="f-crop absolute inset-[-8px] border-[3px] border-dashed border-seal" style={delay(1.2)} />
        </div>
      </Win>
      {P.pictureTools.map((tool, i) => (
        <Bit key={tool} x={820} y={60 + i * 56} delay={0.6 + i * 0.3}><span className="p5-tag">{tool}</span></Bit>
      ))}
      {P.sliders.map((label, i) => (
        <Bit key={label} x={430} y={340 + i * 50} delay={1.6 + i * 0.3} className="f-fade">
          <span className="flex items-center gap-4 font-dot text-[15px]">
            <span className="w-[110px]">{label}</span>
            <span className="relative block h-[5px] w-[200px] bg-tone">
              <span className="f-slide absolute -top-[7px] left-0 block h-[19px] w-[19px] rounded-full border-[3px] border-ink bg-accent" style={delay(2 + i * 0.4)} />
            </span>
          </span>
        </Bit>
      ))}
      <Stamp x={560} y={440} r={-4} delay={3.2} text={P.saveCopy} />
    </>
  );
}

export function TablesSet() {
  return (
    <>
      <Win x={40} y={60} w={500} h={300} label="okafor-2023.pdf" delay={0.2}>
        <div className="grid gap-3 p-5">
          <span className="font-mincho text-[18px] italic">{P.tableCaption}</span>
          <div className="relative grid grid-cols-3 gap-[2px] bg-tone p-[2px]">
            {Array.from({ length: 12 }, (_, i) => <span key={i} className="h-7 bg-panel" />)}
            <span className="f-stamp absolute inset-[-8px] border-[3px] border-dashed border-seal" style={delay(1.2)} />
          </div>
        </div>
      </Win>
      {P.tableActions.map((a, i) => (
        <Bit key={a} x={40 + i * 175} y={400} delay={2 + i * 0.35} r={i % 2 ? 3 : -3}>
          <span className="inline-block border-[3px] border-ink bg-seal px-4 py-2 font-maru text-[16px] font-bold text-[var(--on-seal)] shadow-[4px_4px_0_var(--ink)]">{a}</span>
        </Bit>
      ))}
    </>
  );
}

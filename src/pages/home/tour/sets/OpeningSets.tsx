import type { CSSProperties } from 'react';
import { TOUR_PROPS } from '@/content/tour.content';
import { Bit, Sfx, Stamp, Win } from '@/components/film/FilmBits';
import { titleSet } from '@/components/film/titleSet';

const delay = (s: number): CSSProperties => ({ animationDelay: `${s}s` });

export const TitleSet = titleSet(TOUR_PROPS.title, TOUR_PROPS.subtitle, 'ようこそ');

const TAB_SPOTS = [{ x: 420, y: 60, r: -4 }, { x: 470, y: 120, r: 3 }, { x: 520, y: 180, r: -2 }, { x: 570, y: 240, r: 4 }];

export function TabsSet() {
  return (
    <>
      {TOUR_PROPS.tabs.map((label, i) => <Win key={i} {...TAB_SPOTS[i]} w={330} h={140} label={label} delay={0.2 + i * 0.35} />)}
      <Stamp x={760} y={40} r={8} delay={1.9} text={TOUR_PROPS.tabCount} />
      <Bit x={440} y={440} delay={2.6}>
        <span className="inline-block border-[3px] border-ink bg-panel px-3 py-2 font-dot text-[15px] shadow-[4px_4px_0_var(--tone)]">{TOUR_PROPS.thesis}</span>
      </Bit>
      <Sfx x={790} y={460} r={8} delay={2.2} text="ドサッ" size={44} />
    </>
  );
}

export function FolderSet() {
  return (
    <>
      <Bit x={50} y={200} delay={0.1} className="f-drop">
        <div className="relative h-[290px] w-[520px]">
          <span className="absolute left-0 top-0 h-[34px] w-[170px] border-[3px] border-b-0 border-ink bg-accent-soft px-3 pt-1 font-dot text-[14px]">{TOUR_PROPS.folder}</span>
          <div className="absolute inset-x-0 bottom-0 top-[31px] border-[3px] border-ink bg-accent-soft shadow-[8px_8px_0_var(--tone)]" />
        </div>
      </Bit>
      {TOUR_PROPS.files.map((file, i) => (
        <Bit key={file} x={80 + (i % 2) * 240} y={270 + Math.floor(i / 2) * 64} delay={0.8 + i * 0.45} className="f-drop" r={i % 2 ? 2 : -2}>
          <span className="inline-block border-[2px] border-ink bg-panel px-3 py-1.5 font-dot text-[15px] shadow-[3px_3px_0_var(--tone)]">{file}</span>
        </Bit>
      ))}
      <Sfx x={360} y={90} r={-6} delay={3.2} text="ポン" size={72} />
    </>
  );
}

const PDF_LINES = [92, 80, 88, 70, 95, 84, 60, 90, 78, 86, 66];
const HIGHLIGHTS: Record<number, number> = { 2: 0.9, 3: 1.2, 6: 2.0 };

export function HighlightSet() {
  return (
    <>
      <Win x={420} y={40} w={500} h={460} label={TOUR_PROPS.pdf} delay={0.1}>
        <div className="grid gap-[18px] p-6">
          <span className="h-4 w-3/5 bg-ink" />
          {PDF_LINES.map((w, i) => (
            <span key={i} className="relative block h-[9px]" style={{ width: `${w}%` }}>
              <span className="absolute inset-0 bg-tone-soft" />
              {HIGHLIGHTS[i] !== undefined && (
                <span className="f-sweep absolute -inset-y-[5px] inset-x-0" style={{ ...delay(HIGHLIGHTS[i]), background: 'color-mix(in srgb, var(--hl) 75%, transparent)' }} />
              )}
            </span>
          ))}
        </div>
      </Win>
      <Bit x={650} y={330} r={-3} delay={2.8}>
        <div className="w-[240px] border-[3px] border-seal bg-panel px-4 py-3 font-maru text-[16px] shadow-[5px_5px_0_var(--tone)]">{TOUR_PROPS.comment}</div>
      </Bit>
      <Sfx x={430} y={420} r={-8} delay={1.0} text="シャッ" size={56} />
    </>
  );
}

const STAMP_SPOTS = [{ x: 230, y: 70, r: -6, delay: 1.6 }, { x: 300, y: 220, r: 4, delay: 2.8 }, { x: 190, y: 370, r: -3, delay: 4.0 }];

export function VerifySet() {
  return (
    <>
      {TOUR_PROPS.databases.map((db, i) => (
        <Bit key={db} x={40} y={80 + i * 64} delay={0.2 + i * 0.3}><span className="p5-tag">{db}</span></Bit>
      ))}
      {TOUR_PROPS.badges.map((b, i) => <Stamp key={b.text} {...STAMP_SPOTS[i]} text={b.text} sub={b.sub} />)}
      <span className="f-fade" style={{ ...delay(4.2), position: 'absolute', left: 30, top: 440 }}>
        <span className="block font-mincho text-[44px] font-semibold text-seal">?!</span>
      </span>
    </>
  );
}

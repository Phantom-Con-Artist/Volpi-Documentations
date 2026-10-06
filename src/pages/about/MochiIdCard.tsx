import { MEET_MOCHI } from '@/content/about.content';
import { MochiFull } from '@/components/mochi/rig/MochiFull';
import { FoxSeal } from '@/components/brand/FoxSeal';

const CARD = MEET_MOCHI.card;

/** A paw print, used as her signature. */
function Paw() {
  return (
    <svg viewBox="0 0 64 56" className="h-9 w-10 text-ink" aria-hidden="true">
      <g fill="currentColor">
        <ellipse cx="32" cy="38" rx="14" ry="12" />
        <ellipse cx="13" cy="22" rx="6" ry="7.5" transform="rotate(-18 13 22)" />
        <ellipse cx="25" cy="11" rx="6" ry="8" transform="rotate(-6 25 11)" />
        <ellipse cx="39" cy="11" rx="6" ry="8" transform="rotate(6 39 11)" />
        <ellipse cx="51" cy="22" rx="6" ry="7.5" transform="rotate(18 51 22)" />
      </g>
    </svg>
  );
}

/** Passport photo: a startled Mochi, cropped to head and shoulders. */
function IdPhoto() {
  return (
    <figure className="m-0">
      <div className="id-photo relative h-[200px] w-[160px] overflow-hidden border-[3px] border-ink">
        <MochiFull pose="idle" mood="wow" className="absolute left-1/2 top-[10px] w-[196px] max-w-none -translate-x-1/2" />
        <span className="id-photo-tag kicker absolute bottom-2 left-2">!?</span>
      </div>
      <figcaption className="kicker mt-2 w-[160px] text-center text-[10.5px] leading-snug">{CARD.photoCaption}</figcaption>
    </figure>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="kicker text-[11px] text-ink-3">{label}</dt>
      <dd className="m-0 mt-0.5 text-[15.5px] leading-snug">{value}</dd>
    </div>
  );
}

/** Mochi's citizen ID card for the About page. */
export function MochiIdCard() {
  return (
    <article className="id-card relative mx-auto max-w-[820px]" aria-label={`${CARD.country}: ${CARD.kind}`}>
      <header className="id-band flex flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-3 sm:px-7">
        <div className="flex items-center gap-3">
          <FoxSeal className="h-7 w-7" />
          <div>
            <p className="kicker m-0 text-[11px]" style={{ color: 'var(--on-seal)' }}>{CARD.country}</p>
            <p className="m-0 font-mincho text-[1.15rem] font-semibold leading-tight">{CARD.kind}</p>
          </div>
        </div>
        <p className="m-0 font-mincho text-[1rem] tracking-[.2em]">{CARD.kindJp}</p>
      </header>

      <div className="grid gap-7 px-5 pb-5 pt-6 sm:grid-cols-[160px_minmax(0,1fr)] sm:px-7">
        <div className="relative mx-auto sm:mx-0">
          <IdPhoto />
          <div className="id-stamp" aria-hidden="true">
            <span>{CARD.stamp}</span>
            <span className="font-mincho text-[1.1rem] tracking-[.1em]">{CARD.stampJp}</span>
          </div>
          <p className="kicker mt-4 text-center text-[12px] text-seal sm:text-left">{CARD.number}</p>
        </div>
        <div className="relative">
          <dl className="m-0 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {CARD.fields.map((f) => <Field key={f.label} {...f} />)}
          </dl>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6 border-t border-dashed border-tone pt-4">
            <dl className="m-0 flex gap-8">
              {CARD.dates.map((f) => <Field key={f.label} {...f} />)}
            </dl>
            <div className="text-center">
              <Paw />
              <p className="kicker m-0 mt-1 border-t border-ink pt-1 text-[10px]">{CARD.signature}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="id-mrz px-5 py-3 sm:px-7" aria-hidden="true">
        {CARD.mrz.map((line) => <p key={line} className="m-0">{line}</p>)}
      </div>
    </article>
  );
}

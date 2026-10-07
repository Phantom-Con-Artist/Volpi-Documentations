import { DiscordIcon } from '@/components/brand/DiscordIcon';
import { FILM_PROPS } from '@/content/about.content';
import { DISCORD_URL } from '@/content/site.content';
import { Bit, Paper, Sfx, Stamp } from '@/components/film/FilmBits';

const STAMP_SPOTS = [{ x: 370, y: 240, r: -6, delay: 1.0 }, { x: 560, y: 320, r: 5, delay: 2.3 }, { x: 700, y: 150, r: -3, delay: 3.6 }];

export function RulesSet() {
  return (
    <>
      {FILM_PROPS.rules.map((rule, i) => <Stamp key={rule.text} {...STAMP_SPOTS[i]} text={rule.text} sub={rule.sub} />)}
      <Sfx x={440} y={420} r={-8} delay={3.7} text="バン" size={60} />
    </>
  );
}

const CRUMBS = [0, 1, 2, 3, 4, 5];

export function SnackSet() {
  return (
    <>
      <div className="speedlines absolute inset-0" style={{ ['--sl-x' as string]: '52%', ['--sl-y' as string]: '45%' }} />
      {CRUMBS.map((i) => (
        <Bit key={i} x={470 + (i % 3) * 14} y={330} delay={1 + i * 0.6} className="f-fall" r={i * 40}>
          <span className="block h-3 w-3 bg-seal" />
        </Bit>
      ))}
      <Sfx x={90} y={110} r={-8} delay={0.4} text="もぐもぐ" size={68} />
    </>
  );
}

const CONFETTI = [60, 150, 240, 330, 420, 510, 600, 690, 780, 870, 200, 720];

export function InviteSet() {
  return (
    <>
      {CONFETTI.map((x, i) => (
        <Paper key={i} x={x} y={-30} w={16} h={22} delay={0.4 + i * 0.35} r={i * 50} className="f-fall" />
      ))}
      <Bit x={56} y={210} delay={0.2}><span className="font-mincho text-[110px] font-semibold leading-none">{FILM_PROPS.invite}</span></Bit>
      <Bit x={62} y={350} delay={0.8}><span className="p5-tag p5-tag-seal">{FILM_PROPS.inviteTag}</span></Bit>
      <Bit x={64} y={410} delay={1.2} className="f-fade">
        <span className="inline-flex items-center gap-2 font-dot text-[16px] tracking-[.1em]"><DiscordIcon size={20} /> {DISCORD_URL.replace('https://', '')}</span>
      </Bit>
    </>
  );
}

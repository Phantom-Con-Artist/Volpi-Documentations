import type { Antic } from './stage';
import { eatLogo, followPointer, stealHeading } from './mischief';
import { peekEdge, pointAtStuff, sitOnHeader } from './wander';

/** Antics and how often each is picked. */
const DECK: { name: string; antic: Antic; weight: number }[] = [
  { name: 'point', antic: pointAtStuff, weight: 3 },
  { name: 'peek', antic: peekEdge, weight: 3 },
  { name: 'sit', antic: sitOnHeader, weight: 2 },
  { name: 'steal', antic: stealHeading, weight: 2 },
  { name: 'eat', antic: eatLogo, weight: 2 },
  { name: 'follow', antic: followPointer, weight: 1 },
];

let last = '';

/** An antic by name, for ?mochi=<name> demos. */
export const anticNamed = (name: string | null) => DECK.find((d) => d.name === name)?.antic;

/** A weighted random antic, never the same twice in a row. */
export function nextAntic(): Antic {
  const options = DECK.filter((d) => d.name !== last);
  let roll = Math.random() * options.reduce((n, d) => n + d.weight, 0);
  const choice = options.find((d) => (roll -= d.weight) < 0) ?? options[0];
  last = choice.name;
  return choice.antic;
}

/** First antic after 8 to 12 s, then every 22 to 40 s. */
export const firstDelay = () => 8000 + Math.random() * 4000;
export const nextDelay = () => 22000 + Math.random() * 18000;

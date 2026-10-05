/** A stamped notice: the open beta is not out yet. */
export function BetaBanner({ text }: { text: string }) {
  return (
    <p className="mt-10 flex max-w-full flex-wrap items-center gap-4 text-[16px]">
      <span className="p5-tag p5-tag-seal">Coming soon</span>
      <span className="font-mincho text-[1.1rem] text-ink">{text}</span>
    </p>
  );
}

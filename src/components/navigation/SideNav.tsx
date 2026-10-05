import type { NavLink } from '@/types/content';

/** A sticky "on this page" list for long pages. Hidden on small screens. */
export function SideNav({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <nav className="sticky top-[104px] hidden self-start lg:block" aria-label={title}>
      <span className="kicker">{title}</span>
      <ol className="m-0 mt-4 list-none border-l border-tone-soft p-0">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-[15.5px] text-ink-2 no-underline hover:border-accent hover:text-ink">
              {l.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

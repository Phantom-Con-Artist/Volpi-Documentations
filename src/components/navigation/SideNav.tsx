import type { NavLink } from '@/types/content';

/** A sticky list for long pages or a set of pages. Hidden on small screens. `current` marks the page being read. */
export function SideNav({ title, links, current }: { title: string; links: NavLink[]; current?: string }) {
  return (
    <nav className="sticky top-[104px] hidden max-h-[calc(100svh-128px)] self-start overflow-y-auto lg:block" aria-label={title}>
      <span className="kicker">{title}</span>
      <ol className="m-0 mt-4 list-none border-l border-tone-soft p-0">
        {links.map((l) => {
          const here = l.href === current;
          return (
            <li key={l.href}>
              <a href={l.href} aria-current={here ? 'page' : undefined} className={`-ml-px block border-l-2 py-1.5 pl-4 text-[15.5px] no-underline hover:border-accent hover:text-ink ${here ? 'border-seal font-bold text-ink' : 'border-transparent text-ink-2'}`}>
                {l.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

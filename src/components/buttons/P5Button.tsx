import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Size = 'sm' | 'md' | 'lg';
interface Base {
  children: ReactNode;
  primary?: boolean;
  size?: Size;
  className?: string;
}
type AsLink = Base & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'>;
type AsButton = Base & { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>;

function classes({ primary, size = 'md', className = '' }: Base) {
  return ['p5', primary && 'p5-primary', size !== 'md' && `p5-${size}`, className].filter(Boolean).join(' ');
}

/** A Persona 5 style box: jagged face, ink outline and an offset slab (styles/manga.css). */
export function P5Button(props: AsLink | AsButton) {
  const { children, primary, size, className, ...rest } = props;
  const cls = classes({ children, primary, size, className });
  const inner = <span className="p5-in">{children}</span>;
  if ('href' in rest && rest.href !== undefined) {
    return <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>{inner}</a>;
  }
  return <button type="button" className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>{inner}</button>;
}

/** Opens off-site links (Discord, GitHub) in a new tab; site pages open in place. */
export function navLinkProps(href: string) {
  return href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {};
}

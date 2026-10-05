import { Github } from 'lucide-react';
import { GITHUB_URL, SITE } from '@/content/site.content';
import { P5Button } from './P5Button';

/** The primary action until downloads exist. Points at a placeholder URL (see site.content.ts). */
export function GithubButton({ size = 'md', label = SITE.githubLabel }: { size?: 'sm' | 'md' | 'lg'; label?: string }) {
  return (
    <P5Button href={GITHUB_URL} target="_blank" rel="noopener noreferrer" primary size={size}>
      <Github size={size === 'sm' ? 15 : 19} strokeWidth={2.4} aria-hidden="true" />
      {label}
    </P5Button>
  );
}

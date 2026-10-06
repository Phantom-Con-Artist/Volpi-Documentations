import { DISCORD_URL, SITE } from '@/content/site.content';
import { DiscordIcon } from '@/components/brand/DiscordIcon';
import { P5Button } from './P5Button';

/** The primary action until downloads exist: the Volpi community on Discord. */
export function DiscordButton({ size = 'md', label = SITE.discordLabel }: { size?: 'sm' | 'md' | 'lg'; label?: string }) {
  return (
    <P5Button href={DISCORD_URL} target="_blank" rel="noopener noreferrer" primary size={size}>
      <DiscordIcon size={size === 'sm' ? 15 : 19} />
      {label}
    </P5Button>
  );
}

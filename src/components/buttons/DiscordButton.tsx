import { DISCORD_URL, SITE } from '@/content/site.content';
import { DiscordIcon } from '@/components/brand/DiscordIcon';
import { P5Button } from './P5Button';

/** The Volpi community on Discord. Pass `primary={false}` where it sits beside the download button. */
export function DiscordButton({ size = 'md', label = SITE.discordLabel, primary = true }: { size?: 'sm' | 'md' | 'lg'; label?: string; primary?: boolean }) {
  return (
    <P5Button href={DISCORD_URL} target="_blank" rel="noopener noreferrer" primary={primary} size={size}>
      <DiscordIcon size={size === 'sm' ? 15 : 19} />
      {label}
    </P5Button>
  );
}

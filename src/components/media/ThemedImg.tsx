import type { ThemedImage } from '@/types/media';
import { useTheme } from '@/hooks/useTheme';

interface Props {
  image: ThemedImage;
  className?: string;
  sizes?: string;
  srcSet?: { day: string; night?: string };
  eager?: boolean;
}

/** Swaps between the Day and Night capture with the site theme. */
export function ThemedImg({ image, className, sizes, srcSet, eager = false }: Props) {
  const { mode } = useTheme();
  const night = mode === 'night';
  const src = night && image.night ? image.night : image.day;
  const sources = srcSet ?? image.srcSet;
  const set = sources ? (night && sources.night ? sources.night : sources.day) : undefined;
  return (
    <img
      src={src}
      srcSet={set}
      sizes={sizes}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
    />
  );
}

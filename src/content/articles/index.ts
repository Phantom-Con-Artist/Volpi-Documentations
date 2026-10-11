import type { ArticleSection } from '@/types/content';
import { FORMATS } from './formats';
import { GUIDES } from './guides';
import { COMPARE } from './compare';

/** The sets of written pages. Each article needs a route in routes.ts (/<set id>/<slug>/), and each set one for its front page. */
export const ARTICLE_SECTIONS: ArticleSection[] = [GUIDES, FORMATS, COMPARE];

export function sectionOf(id: string): ArticleSection {
  const section = ARTICLE_SECTIONS.find((s) => s.id === id);
  if (!section) throw new Error(`There is no set of articles at /${id}/.`);
  return section;
}

export const ARTICLE_TEXT = {
  sources: 'Where these facts come from',
  sourcesNote: 'What this page says about the other tool comes from its maker\'s own pages, listed here. If we could not confirm something there, we left it out.',
  next: 'Read next',
  read: 'Read',
};

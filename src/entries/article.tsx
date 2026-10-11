import { ArticlePage } from '@/pages/articles/ArticlePage';
import { mount } from './mount';
import { slug } from './slug';

// "/guides/check-references/": the first part names the set, the last the article.
mount(<ArticlePage section={location.pathname.split('/')[1]} slug={slug()} />);

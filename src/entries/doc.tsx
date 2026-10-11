import { DocPage } from '@/pages/docs/DocPage';
import { mount } from './mount';
import { slug } from './slug';

mount(<DocPage id={slug()} />);

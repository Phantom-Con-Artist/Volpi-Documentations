import { HubPage } from '@/pages/articles/HubPage';
import { mount } from './mount';
import { slug } from './slug';

mount(<HubPage section={slug()} />);

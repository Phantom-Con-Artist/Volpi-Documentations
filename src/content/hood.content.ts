import type { Fact } from '@/types/content';
import { feature } from './media.content';

export const HOOD_HEAD = { kicker: 'No. 04', title: 'How it is built.', chapter: '第四話' };

export const HOOD_FACTS: Fact[] = [
  { title: 'Desktop app.', text: 'Built with Tauri and Rust. It runs on your computer.' },
  { title: 'Full history.', text: 'Undo in each editor. Revert or restore any change to a project.' },
  { title: 'Limited internet use.', text: 'Only reference checks go online. They send a DOI or a citation, never your files. You can turn them off.' },
  { title: 'Profile passwords.', text: 'A password locks a profile in Volpi. It does not encrypt your files.' },
];

export const HOOD_IMAGE = feature('references', 'The reference library, with Verified, Likely, Mismatch and Not found badges.');

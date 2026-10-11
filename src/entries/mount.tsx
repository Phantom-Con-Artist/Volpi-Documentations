import { StrictMode, type ReactNode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import '@/styles/index.css';

/** Starts a page. The built site ships each page already drawn (scripts/prerender.mjs), so React takes over
 *  the HTML that is there; the development server has an empty root and draws it from scratch. */
export function mount(page: ReactNode): void {
  const root = document.getElementById('root')!;
  const app = <StrictMode>{page}</StrictMode>;
  if (root.hasChildNodes()) hydrateRoot(root, app);
  else createRoot(root).render(app);
}

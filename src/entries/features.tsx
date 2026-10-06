import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/index.css';
import { FeaturesPage } from '@/pages/features/FeaturesPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FeaturesPage />
  </StrictMode>,
);

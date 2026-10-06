import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/index.css';
import { RoadmapPage } from '@/pages/roadmap/RoadmapPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoadmapPage />
  </StrictMode>,
);

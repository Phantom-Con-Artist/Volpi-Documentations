import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/index.css';
import { ReportPage } from '@/pages/report/ReportPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReportPage />
  </StrictMode>,
);

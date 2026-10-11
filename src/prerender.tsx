import { StrictMode, type ReactNode } from 'react';
import { renderToString } from 'react-dom/server';
import { HomePage } from '@/pages/home/HomePage';
import { FeaturesPage } from '@/pages/features/FeaturesPage';
import { AboutPage } from '@/pages/about/AboutPage';
import { RoadmapPage } from '@/pages/roadmap/RoadmapPage';
import { ReportPage } from '@/pages/report/ReportPage';
import { DocsPage } from '@/pages/docs/DocsPage';
import { ReleasesPage } from '@/pages/docs/releases/ReleasesPage';
import { PricingPage } from '@/pages/pricing/PricingPage';
import { PrivacyPage } from '@/pages/privacy/PrivacyPage';

/** Every page by its built HTML file. scripts/prerender.mjs draws each one into that file after the build,
 *  so the text is in the HTML for readers and search engines that do not run scripts. */
const PAGES: Record<string, ReactNode> = {
  'index.html': <HomePage />,
  'features/index.html': <FeaturesPage />,
  'about/index.html': <AboutPage />,
  'roadmap/index.html': <RoadmapPage />,
  'report/index.html': <ReportPage />,
  'docs/index.html': <DocsPage />,
  'docs/releases/index.html': <ReleasesPage />,
  'pricing/index.html': <PricingPage />,
  'privacy/index.html': <PrivacyPage />,
};

export const files = Object.keys(PAGES);

/** The same tree the page's entry hydrates (src/entries/mount.tsx). */
export const render = (file: string): string => renderToString(<StrictMode>{PAGES[file]}</StrictMode>);

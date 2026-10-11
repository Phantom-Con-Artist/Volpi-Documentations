import { StrictMode, type ReactNode } from 'react';
import { renderToString } from 'react-dom/server';
import { ROUTES, fileOf, slugOf, type Route } from '@/content/routes';
import { HomePage } from '@/pages/home/HomePage';
import { FeaturesPage } from '@/pages/features/FeaturesPage';
import { AboutPage } from '@/pages/about/AboutPage';
import { RoadmapPage } from '@/pages/roadmap/RoadmapPage';
import { ReportPage } from '@/pages/report/ReportPage';
import { DocsPage } from '@/pages/docs/DocsPage';
import { DocPage } from '@/pages/docs/DocPage';
import { ReleasesPage } from '@/pages/docs/releases/ReleasesPage';
import { PricingPage } from '@/pages/pricing/PricingPage';
import { PrivacyPage } from '@/pages/privacy/PrivacyPage';
import { DownloadPage } from '@/pages/download/DownloadPage';
import { ArticlePage } from '@/pages/articles/ArticlePage';
import { HubPage } from '@/pages/articles/HubPage';
import { FaqPage } from '@/pages/faq/FaqPage';
import { structuredData } from '@/content/structured-data';

/** The page each entry script mounts, given the route. Keep in step with src/entries/: scripts/prerender.mjs
 *  draws these into the built HTML, and the entry must hydrate exactly the same tree. */
const BY_ENTRY: Record<string, (route: Route) => ReactNode> = {
  home: () => <HomePage />,
  features: () => <FeaturesPage />,
  about: () => <AboutPage />,
  roadmap: () => <RoadmapPage />,
  report: () => <ReportPage />,
  docs: () => <DocsPage />,
  doc: (route) => <DocPage id={slugOf(route.path)} />,
  releases: () => <ReleasesPage />,
  pricing: () => <PricingPage />,
  privacy: () => <PrivacyPage />,
  download: () => <DownloadPage />,
  article: (route) => <ArticlePage section={route.path.split('/')[1]} slug={slugOf(route.path)} />,
  hub: (route) => <HubPage section={slugOf(route.path)} />,
  faq: () => <FaqPage />,
};

const byFile = new Map(ROUTES.map((route) => [fileOf(route), route]));

export const files = [...byFile.keys()];

export function render(file: string): string {
  const route = byFile.get(file)!;
  const page = BY_ENTRY[route.entry];
  if (!page) throw new Error(`${route.path}: no page is registered for the entry "${route.entry}"`);
  return renderToString(<StrictMode>{page(route)}</StrictMode>);
}

/** The page's structured data, for its head. */
export const schema = (file: string) => structuredData(byFile.get(file)!);

import { DISCORD_URL, DOWNLOADS, GITHUB_URL, RELEASES_URL, SITE, X_URL } from './site.content';
import { HERO } from './hero.content';
import { RELEASES } from './releases.content';
import { trailOf, type Route } from './routes';
import { FAQ } from './faq.content';

/** Structured data (schema.org JSON-LD) for search engines, drawn into each page's head by scripts/prerender.mjs.
 *  Everything here is read from the content files, so it cannot say more than the page does. */
const URL = __SITE_URL__;
const ORG = `${URL}/#organization`;
const SITE_ID = `${URL}/#website`;

const organization = {
  '@type': 'Organization',
  '@id': ORG,
  name: SITE.name,
  url: `${URL}/`,
  logo: `${URL}/assets/brand/apple-touch-icon.png`,
  sameAs: [GITHUB_URL, RELEASES_URL, X_URL, DISCORD_URL],
};

const website = { '@type': 'WebSite', '@id': SITE_ID, url: `${URL}/`, name: SITE.name, description: SITE.tagline, publisher: { '@id': ORG }, inLanguage: 'en-GB' };

/** The app itself, on the home page. No ratings or reviews: there are none to report. */
const software = {
  '@type': 'SoftwareApplication',
  '@id': `${URL}/#software`,
  name: SITE.name,
  description: HERO.lede,
  url: `${URL}/`,
  applicationCategory: 'EducationalApplication',
  operatingSystem: [...new Set(DOWNLOADS.map((d) => d.label))].join(', '),
  softwareVersion: SITE.version.replace(/^v/, ''),
  datePublished: RELEASES[0].date,
  releaseNotes: `${URL}/docs/releases/`,
  downloadUrl: `${RELEASES_URL}/latest`,
  image: `${URL}/assets/social/og-day.png`,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: SITE.channel },
  publisher: { '@id': ORG },
};

function breadcrumbs(route: Route) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trailOf(route).map((r, i) => ({ '@type': 'ListItem', position: i + 1, name: r.crumb, item: URL + r.path })),
  };
}

/** The questions on the FAQ page, word for word as they appear there. */
const faqPage = {
  '@type': 'FAQPage',
  '@id': `${URL}/faq/#faq`,
  mainEntity: FAQ.flatMap((group) => group.items).map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
};

/** The JSON-LD for one page, as the text of its script tag. */
export function structuredData(route: Route): string {
  const graph: object[] = route.path === '/' ? [organization, website, software] : [organization, website, breadcrumbs(route)];
  if (route.path === '/faq/') graph.push(faqPage);
  // "<" is escaped so no text from the content files can close the script tag.
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
}

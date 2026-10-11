import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import type { Plugin } from 'vite';
import { ROUTES, fileOf, type Route } from './src/content/routes';

/** The public address of the site. Link previews, the canonical link and the sitemap need it as a full URL.
 *  volpi.pages.dev only redirects here, so it must never appear in a canonical link or the sitemap. */
const SITE_URL = 'https://volpi.mavern.in';
const TEMPLATE = path.resolve(__dirname, 'page.html');
const fileFor = (route: Route) => path.resolve(__dirname, fileOf(route));
const attr = (text: string) => text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/** page.html filled in for one route: title, description, canonical and social tags, and its entry script. */
function shell(route: Route): string {
  const fill: Record<string, string> = { TITLE: attr(route.title), DESCRIPTION: attr(route.description), URL: SITE_URL + route.path, SITE: SITE_URL, ENTRY: route.entry };
  return fs.readFileSync(TEMPLATE, 'utf8').replace(/%(TITLE|DESCRIPTION|URL|SITE|ENTRY)%/g, (_, key: string) => fill[key]);
}

/**
 * One HTML file per route in src/content/routes.ts, all made from page.html, so no page has a shell of its own.
 * The build treats each as an input; the development server answers each route's address the same way.
 * Also writes sitemap.xml and robots.txt.
 */
function pages(): Plugin {
  const byFile = new Map(ROUTES.map((route) => [fileFor(route), route]));
  return {
    name: 'volpi-pages',
    resolveId(id) { return byFile.has(id) ? id : null; },
    load(id) { const route = byFile.get(id); return route ? shell(route) : null; },
    configureServer(server) {
      server.watcher.add(TEMPLATE);
      server.middlewares.use(async (req, res, next) => {
        const url = (req.url ?? '').split('?')[0];
        const route = ROUTES.find((r) => r.path === url || r.path === `${url}/`);
        if (!route || req.method !== 'GET') return next();
        try {
          const html = await server.transformIndexHtml(route.path, shell(route));
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
          res.end(html);
        } catch (error) { next(error); }
      });
    },
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10);
      const urls = ROUTES.map((r) => `  <url><loc>${SITE_URL}${r.path}</loc><lastmod>${today}</lastmod></url>`).join('\n');
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n` });
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n` });
    },
  };
}

export default defineConfig({
  plugins: [react(), pages()],
  // The structured data drawn into each page needs the full address too (src/content/structured-data.ts).
  define: { __SITE_URL__: JSON.stringify(SITE_URL) },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: Object.fromEntries(ROUTES.map((route) => [route.path === '/' ? 'home' : route.path.replace(/^\/|\/$/g, '').replace(/\//g, '-'), fileFor(route)])),
    },
  },
  server: {
    port: 3000,
    open: false,
  },
});

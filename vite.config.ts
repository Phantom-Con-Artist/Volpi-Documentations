import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import type { Plugin } from 'vite';

/** The public address of the site. Link previews, the canonical link and the sitemap need it as a full URL. */
const SITE_URL = 'https://volpi.pages.dev';
const PAGES = ['/', '/features/', '/docs/', '/about/', '/roadmap/', '/report/', '/privacy/'];

/** Adds absolute social-preview and canonical tags to every page, and writes sitemap.xml and robots.txt. */
function siteMeta(): Plugin {
  return {
    name: 'volpi-site-meta',
    transformIndexHtml(html, ctx) {
      const page = ctx.path.replace(/index\.html$/, '');
      const url = SITE_URL + page;
      return html
        .replace('content="/assets/social/og-day.png"', `content="${SITE_URL}/assets/social/og-day.png"`)
        .replace('</title>', `</title>\n    <link rel="canonical" href="${url}" />\n    <meta property="og:url" content="${url}" />\n    <meta property="og:type" content="website" />\n    <meta property="og:site_name" content="Volpi" />`);
    },
    generateBundle() {
      const urls = PAGES.map((p) => `  <url><loc>${SITE_URL}${p}</loc></url>`).join('\n');
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n` });
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n` });
    },
  };
}

// Seven static pages, each with its own entry: home, features, about, roadmap, report, documentation and privacy.
export default defineConfig({
  plugins: [react(), siteMeta()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        home: path.resolve(__dirname, 'index.html'),
        docs: path.resolve(__dirname, 'docs/index.html'),
        features: path.resolve(__dirname, 'features/index.html'),
        about: path.resolve(__dirname, 'about/index.html'),
        roadmap: path.resolve(__dirname, 'roadmap/index.html'),
        report: path.resolve(__dirname, 'report/index.html'),
        privacy: path.resolve(__dirname, 'privacy/index.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: false,
  },
});

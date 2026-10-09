# Deployment

The site is a static build. Any static host works. These steps are for Cloudflare Pages (`pages.dev`).

## Cloudflare Pages settings

Connect the GitHub repository in the Cloudflare dashboard (Workers & Pages, Create, Pages, Connect to Git), then use:

| Setting | Value |
|---|---|
| Production branch | `main` (or the branch you deploy from) |
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | leave empty |
| Environment variables | none needed |

The Node.js version comes from `.nvmrc` (22).

The build creates eight pages: `dist/index.html`, `dist/features/index.html`, `dist/about/index.html`, `dist/roadmap/index.html`, `dist/report/index.html`, `dist/docs/index.html`, `dist/pricing/index.html` and `dist/privacy/index.html`. Cloudflare serves them at `/`, `/features/`, `/about/`, `/roadmap/`, `/report/`, `/docs/`, `/pricing/` and `/privacy/`.

## What is deployed

Only `dist/` is deployed. It contains the built pages and everything in `public/`:

- `public/assets/`: logo, screenshots (WebP), videos (MP4 and WebM) with posters, social preview images
- `public/404.html`: the page Cloudflare shows for an address that does not exist
- `sitemap.xml` and `robots.txt`, written by the build
- `public/_headers`: security and caching headers for Cloudflare Pages

The `specimen/` folder (design drafts) is not part of the build and is not deployed.

## Limits to keep in mind

Cloudflare Pages allows up to 20,000 files and 25 MiB per file. The largest file today is about 4 MB, and the site has about 170 files.

## Site address

The site lives at `https://volpi.pages.dev`. Link previews, canonical links and the sitemap need the full address, so it is set once, as `SITE_URL` in `vite.config.ts`. If the site moves to its own domain, change it there.

## Before the first deployment

- Run `npm run build` locally and check the result with `npm run preview`.
- After deploying, open `/`, `/features/`, `/about/`, `/roadmap/`, `/report/`, `/docs/` and `/privacy/` and check that images and videos load. Open a made-up address such as `/nope/` to see the 404 page.

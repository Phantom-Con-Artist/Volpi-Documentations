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

The build creates three pages: `dist/index.html`, `dist/docs/index.html` and `dist/privacy/index.html`. Cloudflare serves them at `/`, `/docs/` and `/privacy/`.

## What is deployed

Only `dist/` is deployed. It contains the built pages and everything in `public/`:

- `public/assets/`: logo, screenshots (WebP), videos (WebM) with posters, social preview images
- `public/_headers`: security and caching headers for Cloudflare Pages

The `specimen/` folder (design drafts) is not part of the build and is not deployed.

## Limits to keep in mind

Cloudflare Pages allows up to 20,000 files and 25 MiB per file. The largest file today is about 4 MB, and the site has fewer than 100 files.

## Before the first deployment

- Run `npm run build` locally and check the result with `npm run preview`.
- After deploying, open `/`, `/docs/` and `/privacy/` and check that images and videos load.

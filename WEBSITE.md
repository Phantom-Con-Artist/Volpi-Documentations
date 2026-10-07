# Working on the website

Notes for whoever maintains the Volpi website in this repository. If you only want to read the documentation or report a bug, see the [README](README.md).

## Pages

| Page | Path | Source |
|---|---|---|
| Home | `/` | `src/pages/home/` |
| Features | `/features/` | `src/pages/features/` |
| About | `/about/` | `src/pages/about/` |
| Roadmap | `/roadmap/` | `src/pages/roadmap/` |
| Report a bug | `/report/` | `src/pages/report/` |
| Documentation | `/docs/` | `src/pages/docs/` |
| Privacy | `/privacy/` | `src/pages/privacy/` |

Each page has its own HTML shell (`index.html`, `features/index.html` and so on) and entry script in `src/entries/`. A new page needs an entry in `vite.config.ts`, its path in `tailwind.config.js` `content`, and an exact copy of the inline theme script from the other shells (its hash is allowed in `public/_headers`).

## Run it locally

You need Node.js 22 or later.

```bash
npm install
npm run dev       # development server at http://localhost:3000
npm run build     # type-check and build into dist/
npm run preview   # serve the built site
```

## Deploy

The site is static. It builds into `dist/` and runs on Cloudflare Pages (`pages.dev`) with no server and no environment variables. See [DEPLOYMENT.md](DEPLOYMENT.md).

## Project structure

```
index.html, features/, about/, roadmap/, report/, docs/, privacy/   one HTML shell per page
public/                       files served as they are: images, videos, logo, _headers
src/entries/                  one entry script per page
src/pages/                    the seven pages
src/sections/                 home page sections, in page order
src/components/               shared components (layout, buttons, media, theme, Mochi)
src/content/                  all text and data, typed
src/hooks/                    shared React hooks
src/types/                    TypeScript types
src/styles/                   design tokens and styles
specimen/                     early static design drafts (not deployed)
```

All text on the site lives in `src/content/`. To change wording, edit those files; you do not need to touch the components.

## Things to set before launch

- **Release status:** the site says the open beta is out and offers downloads from the Volpi-Releases repository (`DOWNLOADS` in `site.content.ts`, buttons in `src/components/download/`). Bump `SITE.version` and the docs when a new version ships.
- **Roadmap:** the phases in `src/content/roadmap.content.ts` and the "What comes next" list in `src/content/docs.content.ts` (shown under phase 1.5) should match your actual plans.
- **Bug reports:** the guide on `/report/` (`src/content/report.content.ts`) and the README should describe the same steps as the issue forms in `.github/ISSUE_TEMPLATE/`.
- **Price:** the site says the open beta is free and version 1.0 will be a one-time purchase, with the price announced before 1.0. Update `src/content/pricing.content.ts` and `PRICING` in `docs.content.ts` when the price is set.

## Mochi

Mochi is the guide character from the app. On this site she peeks over the logo in the hero, stars in the film on the About page, has her own ID card there, comments on a few sections and sometimes gets up to mischief (she eats the logo, sits on the header, steals a letter from a heading). Visitors can turn her off with the switch in the footer. She does not roam on the About page, where she has her own film. She does not move for visitors who prefer reduced motion.

- Her lines: `src/content/mochi.content.ts`
- Her drawing: `src/components/mochi/rig/`
- Her behaviour: `src/components/mochi/director/`

To see a particular antic, add `?mochi=eat` to the URL (or `peek`, `point`, `sit`, `steal`, `follow`).

## Media

The screenshots and videos in `public/assets/` were captured from the real app using a fictional demo project. The researcher, colleagues, papers, journals and DOIs shown in them are invented.

They were exported from the app's own promotion tooling, which is kept outside this repository. Only the files the site uses are copied into `public/assets/`. Each recording ships twice: an H.264 `.mp4`, which browsers try first because it is about a third of the size, and a `.webm` fallback.

## Privacy

The site has no analytics, no cookies and no third-party requests. Fonts are served from the site itself. The only browser storage it uses is `localStorage`, for the chosen theme and whether Mochi is turned off.

## Repository documents

| File | For |
|---|---|
| `README.md` | Volpi users: documentation, bug reports, community |
| `CONTRIBUTING.md` | Ways to help, and the writing rules |
| `CODE_OF_CONDUCT.md` | Community guidelines for Discord and GitHub |
| `SECURITY.md` | Reporting security problems privately |
| `.github/SUPPORT.md` | Where to get help (GitHub shows it on new issues) |
| `.github/ISSUE_TEMPLATE/` | The bug and documentation report forms |
| `CHANGELOG.md` | Changes to the website |
| `DEPLOYMENT.md` | Publishing the site on Cloudflare Pages |
| `WEBSITE.md` | This file |

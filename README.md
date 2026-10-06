# Volpi documentation and website

**Volpi** is a desktop app for researchers. In Volpi you read and highlight PDFs, write linked Markdown notes, check and chart data, and write papers with citations. Each project is a plain folder on your own computer.

Volpi is in development. The open beta has not been released yet.

## What this repository is for

- **Documentation.** What Volpi does, its keyboard shortcuts, known limits and planned work.
- **Bug reports.** Found something wrong in Volpi or in the documentation? [Open an issue](https://github.com/Phantom-Con-Artist/Volpi-Documentations/issues/new/choose).
- **The website.** The source of the Volpi website lives here too (see below).

**Volpi itself is not open source.** The app's source code is not in this repository and is not published.

## Get help

| You want to | Go to |
|---|---|
| Report a bug in Volpi | [New bug report](https://github.com/Phantom-Con-Artist/Volpi-Documentations/issues/new?template=bug_report.yml) |
| Report a mistake in the documentation | [New documentation issue](https://github.com/Phantom-Con-Artist/Volpi-Documentations/issues/new?template=docs_issue.yml) |
| Ask a question, suggest a feature, hear about releases | [Volpi on Discord](https://discord.gg/gkHMSq6emT) |

Please search the [existing issues](https://github.com/Phantom-Con-Artist/Volpi-Documentations/issues) first, and do not attach files that contain your own research or personal data.

## The website

The site has three pages:

| Page | Path | Source |
|---|---|---|
| Home | `/` | `src/pages/home/` |
| Documentation | `/docs/` | `src/pages/docs/` |
| Privacy | `/privacy/` | `src/pages/privacy/` |

The documentation text is in `src/content/docs.content.ts`.

### Run it locally

You need Node.js 22 or later.

```bash
npm install
npm run dev       # development server at http://localhost:3000
npm run build     # type-check and build into dist/
npm run preview   # serve the built site
```

### Deploy

The site is static. It builds into `dist/` and runs on Cloudflare Pages (`pages.dev`) with no server and no environment variables. See [DEPLOYMENT.md](DEPLOYMENT.md).

### Project structure

```
index.html, docs/, privacy/   one HTML shell per page
public/                       files served as they are: images, videos, logo, _headers
src/entries/                  one entry script per page
src/pages/                    the three pages
src/sections/                 home page sections, in page order
src/components/               shared components (layout, buttons, media, theme, Mochi)
src/content/                  all text and data, typed
src/hooks/                    shared React hooks
src/types/                    TypeScript types
src/styles/                   design tokens and styles
specimen/                     early static design drafts (not deployed)
```

All text on the site lives in `src/content/`. To change wording, edit those files; you do not need to touch the components.

### Things to set before launch

- **Release status:** the site says the open beta is coming soon. Update `src/content/hero.content.ts`, `coda.content.ts` and `docs.content.ts` when it is released.
- **Roadmap:** the "What comes next" list in `src/content/docs.content.ts` should match your actual plans.
- **Price:** the site says the open beta is free and version 1.0 will be a one-time purchase, with the price announced before 1.0. Update `src/content/pricing.content.ts` and `PRICING` in `docs.content.ts` when the price is set.

### Mochi

Mochi is the guide character from the app. On this site she stands in the hero, comments on each section and sometimes gets up to mischief (she eats the logo, sits on the header, steals a letter from a heading). Visitors can turn her off with the switch in the footer. She does not move for visitors who prefer reduced motion.

- Her lines: `src/content/mochi.content.ts`
- Her drawing: `src/components/mochi/rig/`
- Her behaviour: `src/components/mochi/director/`

To see a particular antic, add `?mochi=eat` to the URL (or `peek`, `point`, `sit`, `steal`, `follow`).

### Media

The screenshots and videos in `public/assets/` were captured from the real app using a fictional demo project. The researcher, colleagues, papers, journals and DOIs shown in them are invented.

They were exported from the app's own promotion tooling, which is kept outside this repository. Only the files the site uses are copied into `public/assets/`.

### Privacy

The site has no analytics, no cookies and no third-party requests. Fonts are served from the site itself. The only browser storage it uses is `localStorage`, for the chosen theme and whether Mochi is turned off.

## Licence

All rights reserved. See [LICENSE](LICENSE). Third-party components keep their own licences, listed in the same file.

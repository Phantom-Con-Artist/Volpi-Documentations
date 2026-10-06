# Changelog

Changes to the Volpi website and this repository's documents. Changes to the Volpi app are in its update log. Dates are in YYYY-MM-DD format.

## [Unreleased]

### Changed

- The privacy policy now says this version has no AI features, and that the machine-learning tools planned on the roadmap will run on your computer without sending your files anywhere to train a model.
- The licence now says what it covers (this repository, not the Volpi app, which has its own terms), what you may do without asking (link, quote short passages, share screenshots when writing about Volpi), what needs permission, and the terms for contributions. The copyright holder is named.
- The home hero now shows the Volpi fox seal, with Mochi peeking over its top corner, chin on the edge and both hands gripping it. She still talks, waves, follows the pointer and runs off for her antics. The About page has no roaming Mochi, and its film is sized to fit the screen.
- New Pricing section on the home page (No. 07): the open beta is free for everyone, and version 1.0 will be a one-time purchase, not a subscription. The price will be announced before 1.0. "Pricing" is in the header menu, and the documentation's "Price and licence" section says the same.
- The header shows the menu button below 1024 px wide, so the links do not wrap.
- The main button is now "Join the Discord" (header, hero and closing section). It replaces "View on GitHub", which suggested Volpi is open source.
- "Report a bug" in the header and footer opens a new page (`/report/`) that explains how to write a good report, in five steps, before linking to the GitHub forms. It also covers what to do without a GitHub account and how to report security problems.
- The documentation's "Price and licence" section says that Volpi is not open source.
- Links to Discord and GitHub open in a new tab.

### Added

- Repository documents for the people this repository serves: a README about the documentation, bug reports and community; `WEBSITE.md` for working on the site; community guidelines (`CODE_OF_CONDUCT.md`); a security policy (`SECURITY.md`); and `.github/SUPPORT.md`. The bug form now lists what to check first and links to the security policy.
- A Roadmap page (`/roadmap/`): phase 1, the MVP (now); 1.5, polish and reliability; 2, extensions; 3, your own local ML tools; and 4, to be decided with the community. "Roadmap" is in the header and footer, and the documentation's "What comes next" links to it.
- An About page (`/about/`): how Volpi began, as an animated film in nine scenes starring Mochi, with play and pause, a progress bar for each scene, a text transcript and `?scene=N` links. Below it, the developer's story in their own words and a "Who is Mochi?" card. "About" is in the header and footer.
- "What you can do" now has eight recorded steps, adding Open (opening a project) and Focus (Zen mode and the focus timer). The recording is sized to the window, with its caption beside it, so the tabs, recording and caption fit on one screen. "Not yet" links to the roadmap.
- A Features page (`/features/`): a full tour in eight chapters (projects, reading, notes and links, references, data and charts, writing papers, library and search, focus). Each has a joke, an honest note where one is needed, the facts from the documentation, and large screenshots. "Features" in the header and footer now opens it, and "What you can do" on the home page links to it.
- "Who it is for" on the home page, as a prologue after the formats band: Volpi is for research scholars buried in papers, PDFs and deadlines, with a "Sound familiar?" list of the everyday chaos it replaces.
- "Why it stays local" on the home page (No. 05) and "Why privacy matters" at the top of the privacy policy: four reasons research stays on your computer, why the policy exists, and our privacy promise. "Not yet" and "Pricing" move to No. 06 and No. 07.
- Issue templates for bugs in Volpi and for documentation or website problems. Questions go to Discord.

### Fixed

- Feature screenshots are trimmed to the app, so it fills the frame, and sharp screens get the full-size image. This applies on the home and documentation pages.
- The "No distractions" screenshot now fills its card.

## [0.1.0] - 2026-10-06

First version of the website, for the upcoming open beta of Volpi.

### Added

- Home page: what Volpi is, its file formats, three principles, recorded clips of the app (highlighting, linking, graph, data, writing, search), themes, how it is built, current limitations and a link to GitHub.
- Documentation page: every feature in the first beta, keyboard shortcuts, known limitations, planned work, and a note on price and licence.
- Privacy page: what stays on your computer, the four databases Volpi can contact for reference checks, what is sent and what is never sent.
- Day and Night themes with three accent colours, matching the app. Screenshots and videos switch with the theme.
- Mochi, the app's guide character, with an on and off switch in the footer.
- Self-hosted fonts. No analytics, cookies or third-party requests.
- Static build for Cloudflare Pages, with security and caching headers in `public/_headers`.

# Changelog

Changes to the Volpi website. Dates are in YYYY-MM-DD format.

## [Unreleased]

### Changed

- New Pricing section on the home page (No. 07): the open beta is free for everyone, and version 1.0 will be a one-time purchase, not a subscription. The price will be announced before 1.0. "Pricing" is in the header menu, and the documentation's "Price and licence" section says the same.
- The header shows the menu button below 1024 px wide, so the links do not wrap.
- The main button is now "Join the Discord" (header, hero and closing section). It replaces "View on GitHub", which suggested Volpi is open source.
- GitHub is now linked only for bug reports: "Report a bug" in the header and "Bug reports on GitHub" in the footer.
- The documentation's "Price and licence" section says that Volpi is not open source.
- Links to Discord and GitHub open in a new tab.

### Added

- "What you can do" now has eight recorded steps, adding Open (opening a project) and Focus (Zen mode and the focus timer). The recording plays at full width.
- "More you can do": eight large screenshots below the recordings: dashboard, reference checks, data health, split-view notes, reading list, Night reading mode, comments and tracked changes, and page view.
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

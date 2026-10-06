# Contributing

Thank you for helping with Volpi. This repository holds Volpi's documentation, its bug reports and the website. **Volpi itself is not open source**: the app's source code is not here, so pull requests cannot change the app.

## Ways to help

| You can | How |
|---|---|
| Report a bug in Volpi | Follow the steps in the [README](README.md#report-a-bug), then use the [Bug in Volpi](https://github.com/Phantom-Con-Artist/Volpi-Documentations/issues/new?template=bug_report.yml) form. |
| Report a problem in the documentation or website | Use the [Documentation or website problem](https://github.com/Phantom-Con-Artist/Volpi-Documentations/issues/new?template=docs_issue.yml) form. |
| Fix a typo or a wrong fact | Open a pull request (see below). |
| Ask a question or suggest a feature | Post on [Discord](https://discord.gg/gkHMSq6emT). Feature requests opened as issues may be moved there. |
| Help other researchers | Answer questions on Discord. |

Before opening an issue, search the existing ones. One problem per issue. Do not attach files that contain your own research, participant data or personal details; make a small example instead.

## Changing the documentation

All the text on the website lives in [`src/content/`](src/content/). The documentation page is [`docs.content.ts`](src/content/docs.content.ts), the features tour is [`features.content.ts`](src/content/features.content.ts) and the roadmap is [`roadmap.content.ts`](src/content/roadmap.content.ts). You can fix wording there without touching any components.

Small fixes are welcome as pull requests. Please open an issue first for larger changes, so we can agree on them before you spend time.

Run `npm run build` before opening a pull request. It type-checks and builds the site. [WEBSITE.md](WEBSITE.md) explains how to run the site locally and how the code is organised.

## Writing rules

The documentation describes what Volpi actually does, in plain words.

- Write for researchers who are not programmers.
- Use sentence case for headings.
- Name the real feature, file format or behaviour. Avoid general claims and marketing words.
- Do not invent numbers, users or testimonials.
- Be honest about limits.
- Keep product facts in line with the app's release notes.
- Use British spelling (colour, licence, analyse).

## Code rules

- Keep components small and focused (about 200 lines at most).
- Put all text in `src/content/`, not in components.
- Use the colour tokens in `src/styles/tokens.css` (through the Tailwind classes) instead of raw colour values.
- No analytics, trackers or third-party requests.

## Media

Screenshots and videos must come from the real app with the fictional demo project. Do not add images that show real people's research or personal data.

## Community guidelines

Everyone taking part follows the [community guidelines](CODE_OF_CONDUCT.md).

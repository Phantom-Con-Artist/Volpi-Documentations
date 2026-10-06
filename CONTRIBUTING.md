# Contributing

This repository holds Volpi's documentation, its website and bug reports. **Volpi itself is not open source**: the app's source code is not here, so pull requests cannot change the app.

## Report a bug

Use [Issues](https://github.com/Phantom-Con-Artist/Volpi-Documentations/issues/new/choose) and pick a template:

- **Bug in Volpi:** the app does not work as it should.
- **Documentation or website problem:** the documentation is wrong, unclear or missing something, or the site is broken.

Search the existing issues first. One problem per issue. Do not attach files that contain your own research or personal data; make a small example instead.

## Questions and ideas

Ask questions, suggest features and hear about releases on [Discord](https://discord.gg/gkHMSq6emT). Feature requests opened as issues may be moved there.

## Changes to the documentation or website

Small fixes (typos, wrong facts, broken links) are welcome as pull requests. Please open an issue before larger changes.

### Code

- Keep components small and focused (about 200 lines at most).
- Put all text in `src/content/`, not in components.
- Use the colour tokens in `src/styles/tokens.css` (through the Tailwind classes) instead of raw colour values.
- Run `npm run build` before opening a pull request. It type-checks and builds the site.

### Writing

The site describes what Volpi actually does, in plain words.

- Use sentence case for headings.
- Name the real feature, file format or behaviour. Avoid general claims and marketing words.
- Do not invent numbers, users or testimonials.
- Write for researchers who are not programmers.
- Keep product facts in line with the app's release notes.

### Media

Screenshots and videos must come from the real app with the fictional demo project. Do not add images that show real people's research or personal data.

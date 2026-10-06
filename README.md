# Volpi: documentation, bug reports and community

**Volpi** is a desktop app for researchers. You read and highlight PDFs, write linked Markdown notes, check and chart data, and write papers with citations, all in one place. Each project is a plain folder on your own computer.

Volpi is in development. The open beta is coming soon and will be free for everyone to download.

This repository is the public home of Volpi. It holds:

- **The documentation:** what Volpi does, its keyboard shortcuts, known limits and plans.
- **Bug reports:** tell us when something in Volpi or its documentation is wrong.
- **The website** that shows all of this.

**Volpi itself is not open source.** The app's source code is not in this repository and is not published.

## Read the documentation

The documentation lives on the Volpi website:

| Page | What is on it |
|---|---|
| Features (`/features/`) | A tour of everything Volpi does, with screenshots |
| Documentation (`/docs/`) | Every feature in the beta, keyboard shortcuts, known limits, price and licence |
| Roadmap (`/roadmap/`) | What comes next, phase by phase |
| Privacy (`/privacy/`) | What stays on your computer and the only things Volpi sends |
| Report a bug (`/report/`) | How to write a good bug report |

The same text is in this repository, in [`src/content/`](src/content/). For example, the documentation is in [`docs.content.ts`](src/content/docs.content.ts).

## Report a bug

A clear report lets us find the problem and fix it.

1. **Check that it is not already known.** Read the known limits in the documentation and search the [existing reports](https://github.com/Phantom-Con-Artist/Volpi-Documentations/issues). If your bug is there, add your details to it.
2. **Note your setup:** your Volpi version (shown in the update log on the Home screen) and your operating system with its version.
3. **Make it happen again.** Write the exact steps, what you expected and what happened. Copy any error message word for word.
4. **Keep your research private.** Reports are public. Do not attach your own files, participant data or personal details. Make a small example instead, and check screenshots before adding them.
5. **Open the report** with the form that fits:
   - [Bug in Volpi](https://github.com/Phantom-Con-Artist/Volpi-Documentations/issues/new?template=bug_report.yml)
   - [Documentation or website problem](https://github.com/Phantom-Con-Artist/Volpi-Documentations/issues/new?template=docs_issue.yml)

You need a free GitHub account. If you do not have one, describe the bug on [Discord](https://discord.gg/gkHMSq6emT) instead.

Found a security problem? Do not post it publicly. See [SECURITY.md](SECURITY.md).

## Join the community

[Volpi on Discord](https://discord.gg/gkHMSq6emT) is the place to:

- ask how something works,
- suggest features and share ideas,
- hear when the open beta and new versions are out,
- talk with other researchers who use Volpi.

Please read the [community guidelines](CODE_OF_CONDUCT.md). They apply on Discord and here on GitHub.

## Questions people ask

**Is Volpi open source?**
No. The app's source code is not published. This repository holds the documentation, bug reports and the website.

**What does it cost?**
The open beta is free for everyone. Version 1.0 will be a one-time purchase, not a subscription. The price will be announced on the website before 1.0.

**Which systems does it run on?**
Linux first. Mac and Windows builds are planned.

**Where is my data?**
On your computer, in folders you choose. There is no account and no cloud. Volpi only uses the internet to check references, and you can turn that off. The privacy policy has the details.

**How do I suggest a feature?**
On [Discord](https://discord.gg/gkHMSq6emT). Feature requests opened as issues may be moved there.

## Help with the documentation

Spotted a typo or a wrong fact? Open a [documentation issue](https://github.com/Phantom-Con-Artist/Volpi-Documentations/issues/new?template=docs_issue.yml) or a pull request. See [CONTRIBUTING.md](CONTRIBUTING.md). Notes for working on the website itself are in [WEBSITE.md](WEBSITE.md).

## Licence

The website, documentation, name, logo, Mochi and screenshots in this repository are all rights reserved. See [LICENSE](LICENSE) for what you may do without asking, such as linking, quoting short passages and sharing screenshots when you write about Volpi.

The Volpi app is not covered by this licence. It comes with its own terms.

Third-party components keep their own licences, listed in the same file.

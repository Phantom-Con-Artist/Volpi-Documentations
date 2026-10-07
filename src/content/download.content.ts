import { DOWNLOADS } from './site.content';

/** Short names for the buttons, keyed by the ids in `DOWNLOADS`. */
export const DOWNLOAD_NAMES: Record<(typeof DOWNLOADS)[number]['id'], string> = {
  windows: 'Windows',
  'mac-arm': 'Mac, Apple Silicon',
  'mac-intel': 'Mac, Intel',
  linux: 'Linux',
};

export const DOWNLOAD = {
  forSystem: (name: string) => `Download for ${name}`,
  generic: 'Download Volpi',
  short: 'Download',
  other: 'Other systems',
  macHint: 'Not sure which Mac? Apple menu, About This Mac: Chip means Apple Silicon, Processor means Intel.',
  unsigned: 'The beta installers are not signed yet. Windows may show SmartScreen (More info, then Run anyway), and macOS may need a right-click, then Open.',
  install: 'Install help',
  installHref: '/docs/#install',
};

export const INSTALL_DOCS = {
  id: 'install',
  title: 'Install',
  intro: 'Volpi 0.1.0 is an open beta for Windows 10 and 11, macOS (Apple Silicon and Intel) and Linux. Download the zip for your computer and unzip it. It holds the installer, install steps, the changelog, the licence and the notices for the open-source software Volpi includes.',
  steps: [
    { title: 'Windows', text: 'Double-click the setup file. If Windows protected your PC appears, choose More info, then Run anyway. Volpi needs Microsoft Edge WebView2, which most computers have; the installer fetches it if not.' },
    { title: 'macOS', text: 'Use the Apple Silicon zip for M1 and later, the Intel zip for older Macs. Open the .dmg and drag Volpi into Applications. The first time, right-click it and choose Open, then Open again.' },
    { title: 'Linux', text: 'The zip has a .deb and an .rpm. On Debian, Ubuntu and Mint, run sudo apt install on the .deb. On Fedora and openSUSE, run sudo dnf install on the .rpm.' },
    { title: 'Why the warnings', text: 'The beta installers are not signed yet, so your computer may warn you the first time.' },
    { title: 'Updating', text: 'Download the new zip and install over the old version. Your branches and settings stay as they are.' },
  ],
  full: 'Full install steps on GitHub',
};

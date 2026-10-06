/** @type {import('tailwindcss').Config} */
// Colours point at the CSS variables in src/styles/tokens.css, so Day/Night and the accent inks switch in one place.
export default {
  content: ['./index.html', './docs/index.html', './features/index.html', './about/index.html', './roadmap/index.html', './report/index.html', './privacy/index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        gutter: 'var(--gutter)',
        panel: 'var(--panel)',
        ink: { DEFAULT: 'var(--ink)', 2: 'var(--ink-2)', 3: 'var(--ink-3)' },
        accent: { DEFAULT: 'var(--accent)', soft: 'var(--accent-soft)' },
        seal: 'var(--seal)',
        ok: 'var(--ok)',
        tone: { DEFAULT: 'var(--tone)', soft: 'var(--tone-soft)' },
      },
      fontFamily: {
        mincho: ['"Zen Old Mincho"', 'Georgia', 'serif'],
        maru: ['"Zen Maru Gothic"', 'system-ui', 'sans-serif'],
        dot: ['DotGothic16', 'ui-monospace', 'monospace'],
      },
      maxWidth: { wrap: '1200px', prose: '40rem' },
    },
  },
  plugins: [],
};

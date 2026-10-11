// Draws every page into its built HTML file, so the text is there without running any script.
// Runs after `vite build` and `vite build --ssr src/prerender.tsx` (see "build" in package.json).
import { readFile, writeFile, rm } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssr = path.join(root, 'dist-ssr');
const EMPTY = '<div id="root"></div>';

const { files, render, schema } = await import(pathToFileURL(path.join(ssr, 'prerender.js')).href);

for (const file of files) {
  const target = path.join(dist, file);
  const html = await readFile(target, 'utf8');
  if (!html.includes(EMPTY)) throw new Error(`${file}: no empty root to draw into`);
  const body = render(file);
  if (!body.includes('<h1')) throw new Error(`${file}: the drawn page has no h1`);
  if (!html.includes('</head>')) throw new Error(`${file}: no head to put structured data in`);
  const data = `    <script type="application/ld+json">${schema(file)}</script>\n  </head>`;
  await writeFile(target, html.replace('</head>', () => data).replace(EMPTY, () => `<div id="root">${body}</div>`));
  console.log(`prerendered ${file} (${Math.round(body.length / 1024)} kB)`);
}

await rm(ssr, { recursive: true, force: true });

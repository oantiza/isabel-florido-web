import { spawnSync } from 'node:child_process';
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve, sep } from 'node:path';

const base = '/isabel-florido-preview/';
const result = spawnSync(process.execPath, ['node_modules/astro/bin/astro.mjs', 'build'], {
  stdio: 'inherit',
  env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1', DEPLOY_BASE: base, DEPLOY_SITE: 'https://oantiza.github.io' },
});
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);

const source = resolve('dist');
const target = resolve('.deploy/github-pages');
const html = readFileSync(resolve(source, 'index.html'), 'utf8');
const files = new Set(['index.html']);
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));

for (const [, url] of html.matchAll(/\b(?:src|href)="([^"]+)"/g)) {
  if (url.startsWith('#')) {
    if (!ids.has(url.slice(1))) throw new Error(`Missing anchor: ${url}`);
    continue;
  }
  if (/^https?:\/\//.test(url)) continue;
  if (!url.startsWith(base)) throw new Error(`Asset is outside the Pages base: ${url}`);
  const relative = decodeURIComponent(url.slice(base.length));
  const absolute = resolve(source, relative);
  if (!absolute.startsWith(source + sep)) throw new Error(`Invalid asset path: ${url}`);
  files.add(relative);
}

// Publish only the HTML and its referenced assets, never the private Astro sources.
for (const file of files) {
  const destination = resolve(target, file);
  mkdirSync(dirname(destination), { recursive: true });
  copyFileSync(resolve(source, file), destination);
}
writeFileSync(resolve(target, '.nojekyll'), '');
console.log(`Prepared ${files.size + 1} public files in ${target}`);

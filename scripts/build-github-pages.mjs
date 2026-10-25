import { spawnSync } from 'node:child_process';

const base = '/isabel-florido-web/';
const result = spawnSync(process.execPath, ['node_modules/astro/bin/astro.mjs', 'build'], {
  stdio: 'inherit',
  env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1', DEPLOY_BASE: base, DEPLOY_SITE: 'https://oantiza.github.io' },
});
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);

// GitHub Actions publishes dist/ directly from this same repository.
console.log('Website built in dist/ for https://oantiza.github.io/isabel-florido-web/');

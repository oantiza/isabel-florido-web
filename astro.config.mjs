import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.DEPLOY_SITE || undefined,
  base: process.env.DEPLOY_BASE || '/',
  output: 'static',
  devToolbar: { enabled: false },
});

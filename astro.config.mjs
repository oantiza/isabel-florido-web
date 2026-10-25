import { defineConfig } from 'astro/config';
import { locales, defaultLocale } from './src/data/locales.ts';

export default defineConfig({
  site: process.env.DEPLOY_SITE || undefined,
  base: process.env.DEPLOY_BASE || '/',
  output: 'static',
  i18n: { locales: [...locales], defaultLocale, routing: { prefixDefaultLocale: false } },
  devToolbar: { enabled: false },
});

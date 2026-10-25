import spanish from './home.es.json';
import type { Locale } from './locales';

// Each translation implements the full content contract before publication.
export type HomeContent = typeof spanish;
const content: Partial<Record<Locale, HomeContent>> = { es: spanish };

export function getHomeContent(locale: Locale): HomeContent {
  const home = content[locale];
  if (!home) throw new Error(`Missing approved homepage content: ${locale}`);
  return home;
}

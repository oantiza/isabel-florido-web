export const locales = ['es', 'en', 'fr'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'es';
// Languages included in the current website proposal.
export const publishedLocales: readonly Locale[] = ['es', 'en', 'fr'];
export const localeNames: Record<Locale, string> = { es: 'Español', en: 'English', fr: 'Français' };

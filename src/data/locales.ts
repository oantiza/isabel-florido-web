export const locales = ['es', 'en', 'fr'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'es';
// Only Spanish content is currently approved for this visual review.
export const publishedLocales: readonly Locale[] = ['es'];
export const localeNames: Record<Locale, string> = { es: 'Español', en: 'English', fr: 'Français' };

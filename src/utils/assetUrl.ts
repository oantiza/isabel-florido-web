/** Keep CMS image paths independent of the hosting provider's subdirectory. */
export function assetUrl(path: string): string {
  if (/^(https?:)?\/\//.test(path)) return path;
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\/+/, '')}`;
}

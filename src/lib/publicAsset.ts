/** Public folder asset URL — respects Vite base path (GitHub Pages project sites) */
export function publicAsset(path: string): string {
  const base = import.meta.env.BASE_URL;
  const clean = path.replace(/^\//, '');
  return `${base}${clean}`;
}

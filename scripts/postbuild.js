import { copyFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = resolve(__dirname, '../dist');

copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'));
console.log('Copied index.html → 404.html for GitHub Pages SPA routing');

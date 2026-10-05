import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';
import { defineConfig } from 'vite';

// Persistent artifacts must expire when synthesis, mixing, or authored musical
// data change, even if their score/content keys remain identical.
function audioCacheVersion() {
  const hash = createHash('sha256');
  hash.update(readFileSync('package-lock.json'));
  for (const root of ['src/engine', 'src/data']) {
    const visit = (directory: string) => {
      for (const entry of readdirSync(directory, { withFileTypes: true }).sort((a,b) => a.name.localeCompare(b.name))) {
        const file = path.join(directory, entry.name);
        if (entry.isDirectory()) visit(file);
        else if (entry.name.endsWith('.ts')) { hash.update(file); hash.update(readFileSync(file)); }
      }
    };
    visit(root);
  }
  return hash.digest('hex').slice(0, 16);
}

export default defineConfig({
  define: { __AUDIO_CACHE_VERSION__: JSON.stringify(audioCacheVersion()) },
  // Relative asset URLs work for both github.io project pages and local previews.
  base: './',
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true,
  },
  plugins: [react(), tailwindcss()],
  // The MP3 worker pulls in a dynamically split encoder dependency. IIFE
  // workers cannot represent that chunk graph, so emit it as an ES module.
  worker: {
    format: 'es',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});

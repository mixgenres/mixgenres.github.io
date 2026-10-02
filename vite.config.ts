import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
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

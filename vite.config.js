import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'docs',
    assetsInlineLimit: 0,
  },
  server: {
    open: true,
  },
});

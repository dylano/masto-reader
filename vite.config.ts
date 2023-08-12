import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/trpc': 'http://localhost:5100/',
    },
    open: true,
    strictPort: true,
  },
  build: { outDir: 'dist/public' },
  plugins: [svelte()],
  test: { dir: 'tests' },
});

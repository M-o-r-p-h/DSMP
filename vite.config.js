import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
  },
  build: {
    outDir: 'build',
  },
  base: '/dsmp/', // Base path for GitHub Pages
});

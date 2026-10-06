import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Six static pages, each with its own entry: home, features, about, roadmap, documentation and privacy.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        home: path.resolve(__dirname, 'index.html'),
        docs: path.resolve(__dirname, 'docs/index.html'),
        features: path.resolve(__dirname, 'features/index.html'),
        about: path.resolve(__dirname, 'about/index.html'),
        roadmap: path.resolve(__dirname, 'roadmap/index.html'),
        privacy: path.resolve(__dirname, 'privacy/index.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: false,
  },
});

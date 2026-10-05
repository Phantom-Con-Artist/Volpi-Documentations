import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Three static pages, each with its own entry: home, documentation and privacy.
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
        privacy: path.resolve(__dirname, 'privacy/index.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: false,
  },
});

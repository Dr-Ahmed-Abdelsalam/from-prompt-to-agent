import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/from-prompt-to-agent/site/',
  plugins: [react()],
  build: {
    outDir: '../site',
    emptyOutDir: true,
  },
});

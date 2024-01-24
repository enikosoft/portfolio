import react from '@vitejs/plugin-react';
import analyze from 'rollup-plugin-analyzer';
import {defineConfig} from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [analyze()],
    },
  },
  plugins: [react(), tsconfigPaths()],
});

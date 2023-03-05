/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression({ algorithm: 'gzip' })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setupTest.ts',
  },
})

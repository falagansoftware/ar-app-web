/// <reference types="vitest"/>
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/tests.setup.js',
    coverage: {
      provider: 'istanbul',
      reportsDirectory: './tests/reports',
    },
    include: ['./tests/**/*.test.tsx'],
  }
})

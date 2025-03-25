import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    setupFiles: './src/test/prisma-environment.ts',
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})

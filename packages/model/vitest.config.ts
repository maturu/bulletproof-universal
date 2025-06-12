import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'vprisma',
    include: ['src/test/**/*.test.ts'],
    setupFiles: ['vitest-environment-vprisma/setup', './vitest.setup.ts'],
    environmentOptions: {
      vprisma: {
        databaseUrl: process.env.DATABASE_URL,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@client': path.resolve(__dirname, 'prisma'),
    },
  },
})

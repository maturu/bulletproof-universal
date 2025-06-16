import { resolve } from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({ tsconfigPath: './tsconfig.node.json' }),
    tsconfigPaths({ root: __dirname, projects: ['./tsconfig.node.json'] }),
  ],
  ssr: {
    external: ['@prisma/client'],
  },
  optimizeDeps: {
    exclude: ['@prisma/client'],
  },
  build: {
    outDir: './dist',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index',
    },
    minify: false,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})

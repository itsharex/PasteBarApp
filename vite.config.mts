import path from 'path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import dynamicImport from 'vite-plugin-dynamic-import'
import { viteStaticCopy } from 'vite-plugin-static-copy'

import i18nextLoader from './packages/pastebar-ui/src/lib/i18n-vite-loaded/loader'

export default defineConfig({
  root: 'packages/pastebar-ui',
  clearScreen: false,
  server: {
    port: 1420,
    open: false,
    strictPort: true,
  },
  define: {
    BUILD_DATE: JSON.stringify(new Date().valueOf()),
    APP_VERSION: JSON.stringify(require('./package.json').version),
  },
  envPrefix: [
    'VITE_',
    'TAURI_PLATFORM',
    'TAURI_ARCH',
    'TAURI_FAMILY',
    'TAURI_PLATFORM_VERSION',
    'TAURI_PLATFORM_TYPE',
    'TAURI_DEBUG',
  ],

  build: {
    outDir: path.join(__dirname, 'packages/dist-ui'),
    emptyOutDir: true,
    commonjsOptions: { defaultIsModuleExports: 'auto' },
    target: ['es2015', 'safari11'],
    minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
    sourcemap: !!process.env.TAURI_DEBUG,
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [],
    },
  },
  resolve: {
    alias: {
      '~': path.join(__dirname, 'packages/pastebar-ui/src'),
    },
  },
  plugins: [
    react(),
    dynamicImport(),
    i18nextLoader({
      paths: ['./packages/pastebar-ui/src/locales/lang'],
      namespaceResolution: 'basename',
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'drop-*',
          dest: '.',
        },
      ],
    }),
  ],
})

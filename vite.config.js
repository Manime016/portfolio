import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:4000',
    },
  },
  build: {
    // Generate source maps only in development
    sourcemap: false,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Minify both JS and CSS
    minify: 'esbuild',
    // Manual chunk splitting for vendor bundle
    rollupOptions: {
      output: {
        manualChunks(id, { getModuleInfo }) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/scheduler')) {
            return 'vendor'
          }
        },
      },
    },
  },
})

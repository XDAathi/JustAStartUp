import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// After moving sources into frontend/:
// 1. Place index.html inside frontend/
// 2. Source files in frontend/src/
// 3. Optional: static assets in frontend/public/

export default defineConfig({
  root: 'frontend',                 // tells Vite where index.html now lives
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./frontend/src', import.meta.url)), // import via "@/..."
    },
  },
  publicDir: 'public',              // resolved relative to root -> frontend/public
  build: {
    outDir: '../dist',              // emit dist/ at project root
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    open: true,
  },
  preview: {
    port: 4173,
  },
})

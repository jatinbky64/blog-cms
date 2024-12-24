import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import path from "path"
export default defineConfig({
  build: {
    sourcemap: true, // Enable source maps for debugging
    logLevel: 'info',
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve:{
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
})




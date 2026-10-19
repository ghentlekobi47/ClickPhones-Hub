import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const VENDOR_CHUNKS = {
  react: ['react', 'react-dom', 'react-router', 'react-router-dom', 'react-redux', '@reduxjs/toolkit'],
  motion: ['framer-motion'],
  swiper: ['swiper'],
  icons: ['@fortawesome/react-fontawesome', '@fortawesome/free-solid-svg-icons', '@fortawesome/fontawesome-svg-core'],
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          for (const [chunk, packages] of Object.entries(VENDOR_CHUNKS)) {
            if (packages.some((pkg) => id.includes(`/node_modules/${pkg}/`))) return chunk
          }
        },
      },
    },
  },
})

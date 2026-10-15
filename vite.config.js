import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/np
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/the-tumpul-s/',
  plugins: [react()],
  server: {
    port: 5193
  }
})

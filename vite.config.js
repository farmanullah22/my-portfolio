import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()], // Correctly defining the plugins array
  base: "/my-portfolio"
})

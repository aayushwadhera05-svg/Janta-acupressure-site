import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: Replace with your repo name
export default defineConfig({
  plugins: [react()],
  base: '/Janta-acupressure-site/', 
})

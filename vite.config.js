import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: 'https://wikibook.adrienaubourg.fr',
  plugins: [react()],
})

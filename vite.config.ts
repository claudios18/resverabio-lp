import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Limpar diretório de saída antes do build
    emptyOutDir: true,
  },
  // Adicionar timestamp aos assets em desenvolvimento
  server: {
    hmr: {
      overlay: true,
    },
  },
})

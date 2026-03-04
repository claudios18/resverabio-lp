import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Limpar diretório de saída antes do build
    emptyOutDir: true,
    // Configuração de rollup para gerar hashes nos nomes dos arquivos
    rollupOptions: {
      output: {
        // Hash de 8 caracteres para os arquivos de entrada (main, etc)
        entryFileNames: 'assets/[name]-[hash:8].js',
        // Hash para os chunks divididos
        chunkFileNames: 'assets/[name]-[hash:8].js',
        // Hash para os assets (CSS, imagens, fontes, etc)
        assetFileNames: () => {
          // Manter o nome original mas adicionar hash de 8 caracteres
          return `assets/[name]-[hash:8][extname]`
        },
      },
    },
    // Garantir que o CSS também tenha hash
    cssCodeSplit: true,
  },
  // Adicionar timestamp aos assets em desenvolvimento
  server: {
    hmr: {
      overlay: true,
    },
  },
})

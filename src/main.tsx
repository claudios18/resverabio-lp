import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CartProvider } from './contexts/CartContext'

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║                    PONTO DE ENTRADA - RESVERABIO®                        ║
// ║         Arquitetura: CartProvider → App → Componentes                    ║
// ╚══════════════════════════════════════════════════════════════════════════╝

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found - Verifique se o div#root existe no index.html')
}

// Renderização com CartProvider envolvendo toda a aplicação
// Isso garante que useCart funcione em qualquer componente
const root = createRoot(rootElement)

root.render(
  <CartProvider>
    <App />
  </CartProvider>
)

// Log de inicialização (apenas em desenvolvimento)
if (import.meta.env.DEV) {
  console.log('🚀 Resverabio® App Inicializado')
  console.log('📦 CartProvider: Ativo')
}

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║                    CART CONTEXT - RESVERABIO®                            ║
 * ║       Gerenciamento global do estado do carrinho de compras              ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

export interface CartItem {
  id: string;
  name: string;
  description: string;
  image: string;
  price: {
    original: string;
    final: string;
  };
  installments?: {
    count: number;
    value: string;
  };
  quantity: number;
  checkoutUrl: string;
  freeShipping: boolean;
}

interface CartContextType {
  items: CartItem[];
  isCartOpen: boolean;
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  totalItems: number;
  totalPrice: string;
  getCheckoutUrl: () => string;
}

// Criar o contexto com valor inicial undefined
const CartContext = createContext<CartContextType | undefined>(undefined);

/**
 * CartProvider - Envolve a aplicação para disponibilizar o contexto do carrinho
 * DEVE ser usado em src/main.tsx envolvendo o <App />
 */
export function CartProvider({ children }: { children: ReactNode }) {
  // Estado inicial vazio (sem localStorage para evitar problemas de hidratação)
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((product: Omit<CartItem, 'quantity'>) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);
      
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...currentItems, { ...product, quantity: 1 }];
    });
    
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId)
    );
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((currentItems) =>
        currentItems.filter((item) => item.id !== productId)
      );
      return;
    }
    
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const openCart = useCallback(() => {
    setIsCartOpen(true);
  }, []);

  const closeCart = useCallback(() => {
    setIsCartOpen(false);
  }, []);

  const toggleCart = useCallback(() => {
    setIsCartOpen((prev) => !prev);
  }, []);

  // Calcula o total de itens
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  // Calcula o preço total
  const totalPrice = items.reduce((sum, item) => {
    const priceValue = parseFloat(
      item.price.final.replace('R$ ', '').replace('.', '').replace(',', '.')
    );
    return sum + priceValue * item.quantity;
  }, 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  const getCheckoutUrl = useCallback(() => {
    if (items.length === 0) return '#';
    return items[0].checkoutUrl;
  }, [items]);

  const value: CartContextType = {
    items,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
    toggleCart,
    totalItems,
    totalPrice,
    getCheckoutUrl,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

/**
 * useCart - Hook para acessar o contexto do carrinho
 * DEVE ser usado dentro de um componente que está dentro do CartProvider
 * 
 * @throws Error se usado fora do CartProvider
 */
export function useCart(): CartContextType {
  const context = useContext(CartContext);
  
  if (context === undefined) {
    throw new Error(
      'useCart must be used within a CartProvider. ' +
      'Certifique-se de que o componente está dentro da árvore do CartProvider em main.tsx'
    );
  }
  
  return context;
}

// Exportar o contexto para casos avançados (não recomendado para uso direto)
export { CartContext };

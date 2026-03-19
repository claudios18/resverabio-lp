/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║                    CART CONTEXT - RESVERABIO®                            ║
 * ║       Gerenciamento global do estado do carrinho de compras              ║
 * ║       Com persistência em LocalStorage para maximizar conversão          ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';

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

const CartContext = createContext<CartContextType | undefined>(undefined);

// Chave para persistência no localStorage
const CART_STORAGE_KEY = 'resverabio-cart';

export function CartProvider({ children }: { children: ReactNode }) {
  // Inicializa o estado a partir do localStorage (se existir)
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        try {
          return JSON.parse(savedCart);
        } catch {
          return [];
        }
      }
    }
    return [];
  });
  
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Persiste no localStorage sempre que o carrinho mudar
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = useCallback((product: Omit<CartItem, 'quantity'>) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);
      
      if (existingItem) {
        // Se o produto já existe, incrementa a quantidade
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      // Adiciona novo produto
      return [...currentItems, { ...product, quantity: 1 }];
    });
    
    // Abre o drawer automaticamente
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId)
    );
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }, [removeFromCart]);

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

  // Retorna a URL de checkout do primeiro item (assumindo carrinho com um único produto)
  const getCheckoutUrl = useCallback(() => {
    if (items.length === 0) return '#';
    return items[0].checkoutUrl;
  }, [items]);

  return (
    <CartContext.Provider
      value={{
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

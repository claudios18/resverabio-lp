/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║                    CART DRAWER - RESVERABIO®                             ║
 * ║              Gaveta lateral de carrinho com design de luxo               ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { X, ShoppingBag, Truck, Minus, Plus, ArrowRight } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
    getCheckoutUrl,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay escuro */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer lateral */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-[#1a1a1a] z-50 shadow-2xl transform transition-transform duration-300 ease-out flex flex-col">
        {/* Header do Drawer */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#c9a962]/20 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-[#c9a962]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Seu Carrinho</h2>
              <p className="text-sm text-white/60">
                {totalItems} {totalItems === 1 ? 'item' : 'itens'}
              </p>
            </div>
          </div>
          <button
            onClick={closeCart}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Fechar carrinho"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Conteúdo do Carrinho */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <ShoppingBag className="w-10 h-10 text-white/30" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">
                Seu carrinho está vazio
              </h3>
              <p className="text-white/60 mb-6">
                Escolha um dos nossos kits exclusivos e comece sua jornada de bem-estar.
              </p>
              <button
                onClick={closeCart}
                className="px-6 py-3 bg-[#c9a962] text-black font-semibold rounded-lg hover:bg-[#d4b876] transition-colors"
              >
                Ver Produtos
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/5 rounded-xl p-4 border border-white/10"
                >
                  <div className="flex gap-4">
                    {/* Imagem do produto */}
                    <div className="w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>

                    {/* Informações do produto */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-white truncate">
                        {item.name}
                      </h4>
                      <p className="text-sm text-white/60 truncate">
                        {item.description}
                      </p>
                      
                      {/* Frete grátis badge */}
                      {item.freeShipping && (
                        <div className="flex items-center gap-1 mt-1">
                          <Truck className="w-3 h-3 text-green-400" />
                          <span className="text-xs text-green-400 font-medium">
                            Frete Grátis
                          </span>
                        </div>
                      )}

                      {/* Preço */}
                      <div className="mt-2">
                        <span className="text-lg font-bold text-[#c9a962]">
                          {item.price.final}
                        </span>
                        {item.installments && (
                          <p className="text-xs text-white/60">
                            ou {item.installments.count}x de {item.installments.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Controles de quantidade */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-white/60 hover:text-red-400 transition-colors"
                    >
                      Remover
                    </button>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-semibold text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer com total e checkout */}
        {items.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-white/5">
            {/* Resumo de valores */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-white/60">
                <span>Subtotal</span>
                <span>{totalPrice}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>Frete</span>
                <span className="text-green-400">Grátis</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>Desconto PIX</span>
                <span className="text-green-400">-10%</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-white/10">
                <span className="text-lg font-medium text-white">Total</span>
                <span className="text-2xl font-bold text-[#c9a962]">{totalPrice}</span>
              </div>
            </div>

            {/* Botão de checkout */}
            <a
              href={getCheckoutUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#c9a962] hover:bg-[#d4b876] text-black font-bold py-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <span>Finalizar Compra</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <p className="text-center text-xs text-white/40 mt-3">
              Pagamento seguro processado pela Monetizze
            </p>
          </div>
        )}
      </div>
    </>
  );
}

import { useState } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { productData } from '../../data/product';
import { Check, ShoppingBag, Truck, Shield, RotateCcw } from 'lucide-react';

export function Purchase() {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(productData.variants[0]);

  const totalPrice = productData.price * quantity;

  return (
    <section id="comprar" className="py-16 md:py-24 bg-luxury-dark text-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Product Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4">
                {productData.name}
              </h2>
              <p className="text-xl text-gray-300 font-serif italic">
                {productData.tagline}
              </p>
            </div>

            {/* Benefits */}
            <ul className="space-y-3">
              {productData.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300">
                  <Check size={20} className="text-luxury-gold flex-shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <Truck className="mx-auto mb-2 text-luxury-gold" size={24} />
                <p className="text-xs text-gray-400">Frete Grátis</p>
              </div>
              <div className="text-center">
                <Shield className="mx-auto mb-2 text-luxury-gold" size={24} />
                <p className="text-xs text-gray-400">Compra Segura</p>
              </div>
              <div className="text-center">
                <RotateCcw className="mx-auto mb-2 text-luxury-gold" size={24} />
                <p className="text-xs text-gray-400">30 Dias de Garantia</p>
              </div>
            </div>
          </div>

          {/* Right - Purchase Card */}
          <div className="bg-white text-gray-900 rounded-lg p-6 md:p-8">
            {/* Variant Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">Sabor</label>
              <div className="grid grid-cols-2 gap-2">
                {productData.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-3 py-2 text-sm border rounded transition-all ${
                      selectedVariant.id === variant.id
                        ? 'border-luxury-gold bg-luxury-cream/30'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">Quantidade</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center hover:border-luxury-gold transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center hover:border-luxury-gold transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="border-t border-gray-100 pt-6 mb-6">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-gray-600">Preço unitário</span>
                <span className="text-lg">
                  R$ {productData.price.toFixed(2).replace('.', ',')}
                </span>
              </div>
              {productData.originalPrice && (
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-gray-600">Economize</span>
                  <span className="text-green-600">
                    - {Math.round((1 - productData.price / productData.originalPrice) * 100)}%
                  </span>
                </div>
              )}
              <div className="flex items-baseline justify-between pt-4 border-t border-gray-100">
                <span className="text-lg font-medium">Total</span>
                <span className="text-3xl font-serif font-medium">
                  R$ {totalPrice.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            {/* CTA */}
            <Button 
              size="lg" 
              className="w-full flex items-center justify-center gap-2"
            >
              <ShoppingBag size={20} />
              Comprar Agora
            </Button>

            <p className="mt-4 text-xs text-center text-gray-500">
              Entrega em 2-5 dias úteis | Pagamento seguro
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

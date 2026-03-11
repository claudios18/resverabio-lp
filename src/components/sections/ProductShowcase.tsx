import { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionLabel } from '../ui/SectionLabel';
import { Button } from '../ui/Button';
import { scientificSources } from '../../data/scientificData';
import { ShoppingBag, Check, Truck, Shield, RotateCcw } from 'lucide-react';

const products = [
  {
    id: 'single',
    name: 'Resverabio® Premium',
    description: '1 Pote - 60 cápsulas (30 dias)',
    image: '/resverabio-pote.png',
    price: { 
      original: 'R$ 297,00', 
      final: 'R$ 187,00' 
    },
    perCapsule: 'R$ 3,11',
    badge: null,
    freeShipping: false
  },
  {
    id: 'combo2',
    name: 'Resverabio® Kit Duo',
    description: '2 Potes - 120 cápsulas (60 dias)',
    image: '/resverabio-combo2.png',
    price: { 
      original: 'R$ 594,00', 
      final: 'R$ 307,70' 
    },
    installments: {
      count: 12,
      value: 'R$ 30,89'
    },
    perCapsule: 'R$ 2,56',
    badge: 'MAIS POPULAR',
    freeShipping: true,
    popular: true
  },
  {
    id: 'combo3',
    name: 'Resverabio® Kit Trimestral',
    description: '3 Potes - 180 cápsulas (90 dias)',
    image: '/resverabio-combo3c(1).png',
    price: { 
      original: 'R$ 891,00', 
      final: 'R$ 415,50' 
    },
    perCapsule: 'R$ 2,31',
    badge: 'MELHOR CUSTO-BENEFÍCIO',
    freeShipping: true,
    bestValue: true
  }
];

export function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState(products[1]);
  const [quantity, setQuantity] = useState(1);

  const calculateTotal = () => {
    const finalPrice = parseFloat(selectedProduct.price.final.replace('R$ ', '').replace('.', '').replace(',', '.'));
    return (finalPrice * quantity).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  return (
    <section id="produtos" className="py-20 md:py-28" style={{ backgroundColor: '#6B4E7C' }}>
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel className="mb-4 block text-luxury-gold">ESCOLHA SEU KIT</SectionLabel>
          <h2 className="heading-lg text-white mb-6 text-3xl md:text-4xl font-bold">
            Resverabio<span className="text-luxury-gold">®</span> - A Molécula da Longevidade
          </h2>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed">
            Suplementação premium com Trans-Resveratrol de alta pureza. 
            Resultados cientificamente comprovados em {scientificSources.studiesCount}.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Product Selection */}
          <div className="space-y-5">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedProduct.id === product.id
                    ? 'border-luxury-gold bg-white/20'
                    : 'border-white/20 hover:border-white/40 bg-white/10'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Radio */}
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                    selectedProduct.id === product.id
                      ? 'border-luxury-gold'
                      : 'border-white/50'
                  }`}>
                    {selectedProduct.id === product.id && (
                      <div className="w-2.5 h-2.5 rounded-full bg-luxury-gold" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-semibold text-white text-lg md:text-xl">{product.name}</h3>
                      {product.badge && (
                        <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                          product.bestValue
                            ? 'bg-luxury-gold text-white'
                            : product.popular
                            ? 'bg-luxury-dark text-white'
                            : 'bg-white/20 text-white'
                        }`}>
                          {product.badge}
                        </span>
                      )}
                      {product.freeShipping && (
                        <span className={`text-xs px-3 py-1.5 rounded-full font-semibold flex items-center gap-1.5 shadow-lg ${
                          product.popular 
                            ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-amber-400/30' 
                            : 'bg-green-500 text-white'
                        }`}>
                          <Truck size={12} className={product.popular ? 'stroke-[2.5px]' : ''} />
                          FRETE GRÁTIS
                        </span>
                      )}
                    </div>
                    <p className="text-base text-white/80 mb-2 text-lg">{product.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl md:text-3xl font-bold text-white">
                        {product.price.final}
                      </span>
                      <span className="text-base md:text-lg text-white/60 line-through">
                        {product.price.original}
                      </span>
                    </div>
                    {product.installments && (
                      <p className="text-sm text-amber-300 font-medium mt-1">
                        ou 12x de <span className="font-bold">{product.installments.value}</span>
                      </p>
                    )}
                    <p className="text-sm text-white/60 mt-1 text-base">
                      {product.perCapsule} por cápsula
                    </p>
                  </div>

                  {/* Product Image with Blur Light Effect */}
                  <div className="relative w-24 h-24 flex-shrink-0">
                    {/* Efeito Luz Blur */}
                    <div 
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-full h-16 rounded-full opacity-70"
                      style={{
                        background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
                        filter: 'blur(50px)'
                      }}
                    />
                    <div className="relative w-full h-full rounded-lg flex items-center justify-center overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain drop-shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-5 bg-white/10 rounded-xl border border-white/20">
                <Truck className="mx-auto mb-2 text-luxury-gold" size={28} />
                <p className="text-base text-white font-medium">Frete Grátis</p>
                <p className="text-sm text-white/70">Nas compras acima de R$200</p>
              </div>
              <div className="text-center p-5 bg-white/10 rounded-xl border border-white/20">
                <Shield className="mx-auto mb-2 text-luxury-gold" size={28} />
                <p className="text-base text-white font-medium">Garantia 30 Dias</p>
                <p className="text-sm text-white/70">Dinheiro de volta</p>
              </div>
              <div className="text-center p-5 bg-white/10 rounded-xl border border-white/20">
                <RotateCcw className="mx-auto mb-2 text-luxury-gold" size={28} />
                <p className="text-base text-white font-medium">Devolução Fácil</p>
                <p className="text-sm text-white/70">Sem burocracia</p>
              </div>
            </div>
          </div>

          {/* Purchase Card */}
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl border border-white/20 p-8 sticky top-28">
            {/* Main Product Image with Blur Light Effect */}
            <div className="relative aspect-square rounded-xl flex items-center justify-center mb-8 overflow-visible">
              {/* Efeito Luz Blur */}
              <div 
                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-40 rounded-full opacity-70"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%)',
                  filter: 'blur(50px)'
                }}
              />
              
              <div className="relative w-56 h-72 flex items-center justify-center overflow-visible">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
                {selectedProduct.freeShipping && (
                  <div className={`absolute top-4 right-4 text-xs px-4 py-2 rounded-full font-bold flex items-center gap-2 shadow-xl ${
                    selectedProduct.popular
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-amber-400/40 ring-2 ring-amber-300'
                      : 'bg-green-500 text-white'
                  }`}>
                    <Truck size={14} className={selectedProduct.popular ? 'stroke-[2.5px]' : ''} />
                    <span className="tracking-wide">FRETE GRÁTIS</span>
                  </div>
                )}
              </div>
            </div>

            {/* Selected Product Info */}
            <div className="mb-6">
              <h3 className="font-serif text-2xl text-white mb-2 font-bold">{selectedProduct.name}</h3>
              <p className="text-base text-white/80 text-lg">{selectedProduct.description}</p>
            </div>

            {/* Quantity */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg text-white">Quantidade</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:border-luxury-gold hover:text-luxury-gold transition-colors text-lg font-medium"
                >
                  -
                </button>
                <span className="w-10 text-center font-bold text-xl text-white">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:border-luxury-gold hover:text-luxury-gold transition-colors text-lg font-medium"
                >
                  +
                </button>
              </div>
            </div>

            {/* Price Summary */}
            <div className="border-t border-white/20 pt-6 mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-white/80 text-lg">Preço unitário</span>
                <span className="text-white font-medium text-lg">{selectedProduct.price.final}</span>
              </div>
              {selectedProduct.freeShipping && (
                <div className={`flex justify-between mb-2 px-3 py-2 rounded-lg ${
                  selectedProduct.popular 
                    ? 'bg-gradient-to-r from-amber-400/20 to-amber-500/20 border border-amber-400/30' 
                    : 'text-green-400'
                }`}>
                  <span className={`text-lg flex items-center gap-2 ${selectedProduct.popular ? 'text-amber-300' : ''}`}>
                    <Truck size={18} />
                    Frete
                  </span>
                  <span className={`font-bold text-lg ${selectedProduct.popular ? 'text-amber-300' : ''}`}>
                    GRÁTIS
                  </span>
                </div>
              )}
              <div className="flex justify-between text-lg text-white/60 mb-4">
                <span>Em até {selectedProduct.installments ? selectedProduct.installments.count : 12}x no cartão</span>
                <span>sem juros</span>
              </div>
              {selectedProduct.installments && (
                <div className="text-center mb-4 pb-4 border-b border-white/20">
                  <span className="text-amber-300 font-medium">
                    {selectedProduct.installments.count}x de <span className="text-xl font-bold">{selectedProduct.installments.value}</span> no cartão
                  </span>
                </div>
              )}
              <div className="flex justify-between items-baseline pt-4 border-t border-white/20">
                <span className="font-bold text-xl text-white">Total</span>
                <div className="text-right">
                  <span className="text-4xl font-serif font-bold text-white">
                    {calculateTotal()}
                  </span>
                  <p className="text-base text-green-400 font-medium mt-1">
                    10% de desconto no PIX
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button size="lg" className="w-full flex items-center justify-center gap-2 bg-luxury-gold text-white hover:bg-luxury-gold-dark mb-4 py-5 text-lg font-bold">
              <ShoppingBag size={22} />
              Comprar Agora
            </Button>

            <p className="text-base text-center text-white/60">
              Pagamento processado com segurança • Entrega em 2-5 dias úteis
            </p>

            {/* Benefits List */}
            <div className="mt-6 pt-6 border-t border-white/20 space-y-3">
              {[
                'Trans-Resveratrol 99% pureza',
                'Sem aditivos artificiais',
                'Testado em laboratório independente',
                'Registro ANVISA'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-lg text-white/80">
                  <Check size={20} className="text-luxury-gold flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

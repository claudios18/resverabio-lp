import { useState } from 'react';
import { Container } from '../ui/Container';
import { Check, Truck } from 'lucide-react';

// Dados dos produtos atualizados - ordem: 1 pote, 3 potes (centro), 2 potes
const products = [
  {
    id: 1,
    title: 'Compre 1 Pote',
    image: '/resverabio-pote2(2).png',
    badge: null,
    treatment: '1 Mês de tratamento | 60 cápsulas',
    price: 178.0,
    installments: 12,
    installmentValue: 18.87,
    pixDiscount: 3,
    highlighted: false,
    freeShipping: false,
    checkoutUrl: 'https://mon.net.br/3u6oiu',
  },
  {
    id: 3,
    title: 'Compre 3 Potes',
    image: '/resverabio-combo3c(1).png',
    badge: 'CAMPEÃO DE VENDAS',
    treatment: '3 Meses de tratamento | 180 cápsulas',
    price: 435.4,
    installments: 12,
    installmentValue: 46.81,
    pixDiscount: 3,
    highlighted: true,
    freeShipping: true,
  },
  {
    id: 2,
    title: 'Compre 2 Potes',
    image: '/resverabio-combo2.png',
    badge: null,
    treatment: '2 Meses de tratamento | 120 cápsulas',
    price: 299.2,
    installments: 12,
    installmentValue: 32.21,
    pixDiscount: 3,
    highlighted: false,
    freeShipping: true,
  },
];

function formatPrice(value: number) {
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function PurchaseSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="comprar" className="py-20 md:py-28 bg-black force-visible" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-white mb-4">
            Aproveite os preços exclusivos do nosso site e escolha a melhor oferta para você!
          </h2>
        </div>

        {/* Cards Grid - 3 colunas - FORÇAR VISIBILIDADE MOBILE */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch cards-produto-wrapper force-visible">
          {products.map((product) => (
            <div
              key={product.id}
              id={`kit${product.id}`}
              className={`relative rounded-2xl p-6 transition-all duration-300 flex flex-col ${
                product.highlighted
                  ? 'bg-gradient-to-b from-luxury-gold/20 to-luxury-gold/5 border-2 border-luxury-gold scale-105 z-10'
                  : 'bg-gray-900/50 border border-gray-800'
              } ${hoveredCard === product.id ? 'transform -translate-y-2' : ''}`}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Badge Superior */}
              {product.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap bg-luxury-gold text-black">
                  {product.badge}
                </div>
              )}

              {/* Frete Grátis Badge */}
              {product.freeShipping && (
                <div className="absolute -top-3 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap bg-green-500 text-white flex items-center gap-1">
                  <Truck size={14} />
                  FRETE GRÁTIS
                </div>
              )}

              {/* Título */}
              <h3 className="text-xl font-semibold text-white text-center mb-4 pt-2">
                {product.title}
              </h3>

              {/* Imagem do Produto - Tamanho padronizado */}
              <div className="relative h-48 mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl"
                  style={{ maxHeight: '180px' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/resverabio-pote.png';
                  }}
                />
              </div>

              {/* Informações de Tratamento */}
              <div className="text-center mb-3">
                <p className="text-gray-400 text-sm">
                  {product.treatment.split(' | ')[0]}
                  <span className="text-luxury-gold">
                    {' '}
                    | {product.treatment.split(' | ')[1]}
                  </span>
                </p>
              </div>

              {/* Preço */}
              <div className="text-center mb-4">
                <p className="text-gray-400 text-sm mb-1">
                  Por{' '}
                  <span className="text-white font-semibold">
                    R$ {formatPrice(product.price)}
                  </span>{' '}
                  à vista ou
                </p>
                <p className="text-white text-2xl font-bold">
                  {product.installments}x{' '}
                  <span className="text-luxury-gold">
                    R$ {formatPrice(product.installmentValue)}
                  </span>
                </p>
              </div>

              {/* Botão Comprar - CLASSE DE LUXO */}
              {product.checkoutUrl ? (
                <a
                  href={product.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-compra-luxo mb-3 mt-auto text-center block ${
                    product.highlighted ? 'btn-compra-luxo-destaque' : ''
                  }`}
                >
                  Comprar Agora
                </a>
              ) : (
                <button
                  className={`btn-compra-luxo mb-3 mt-auto ${
                    product.highlighted ? 'btn-compra-luxo-destaque' : ''
                  }`}
                >
                  Comprar Agora
                </button>
              )}

              {/* Desconto PIX */}
              <div
                className={`text-center py-2 rounded-lg text-sm font-medium ${
                  product.highlighted
                    ? 'bg-luxury-gold/20 text-luxury-gold'
                    : 'bg-gray-800 text-gray-300'
                }`}
              >
                {product.pixDiscount}% de desconto no PIX
              </div>
            </div>
          ))}
        </div>

        {/* Benefícios Adicionais */}
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          {[
            'Frete Grátis para kits',
            'Entrega Rápida',
            'Pagamento Seguro',
            'Garantia de 7 dias',
          ].map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-400">
              <Check size={20} className="text-luxury-gold" />
              <span className="text-sm">{benefit}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Star, Shield, Brain, Heart, Sparkle } from 'lucide-react';
import { Container } from '../ui/Container';

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║                    BLOCO 2: HERO BANNER - RESVERABIO®                    ║
 * ║         NOVO LAYOUT | Premium Dark Theme | 20 Mar 2026                  ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    { icon: Sparkle, text: 'Poder antioxidante' },
    { icon: Shield, text: 'Pele mais lisa' },
    { icon: Brain, text: 'Intestino e Cérebro limpos' },
    { icon: Heart, text: 'Proteção Cardiovascular' },
  ];

  return (
    <section 
      className="relative w-full min-h-screen bg-black overflow-hidden"
    >
      {/* Background Gradient Roxo/Preto */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #1a0f1f 0%, #0d0d0d 50%, #000000 100%)',
        }}
      />
      
      {/* Glow Effect Roxo */}
      <div 
        className="absolute top-0 left-1/4 w-[600px] h-[600px] blur-[150px] opacity-30"
        style={{ background: '#6B4E7C' }}
      />
      <div 
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] blur-[120px] opacity-20"
        style={{ background: '#c9a962' }}
      />

      {/* Conteúdo Principal */}
      <Container className="relative z-10 h-full">
        <div className="min-h-screen flex items-center py-20 lg:py-0">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* ═══════════════════════════════════════════════════════════
                COLUNA ESQUERDA: Texto e CTA
            ═══════════════════════════════════════════════════════════ */}
            <div 
              className={`text-center lg:text-left transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Badge Superior */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ 
                  backgroundColor: 'rgba(107, 78, 124, 0.3)',
                  border: '1px solid rgba(107, 78, 124, 0.5)',
                }}
              >
                <Sparkles size={16} style={{ color: '#c9a962' }} />
                <span 
                  className="text-sm font-semibold tracking-wider uppercase"
                  style={{ color: '#c9a962' }}
                >
                  Resveratrol Premium
                </span>
              </div>

              {/* Título Principal */}
              <h1 
                className="font-serif mb-2 leading-none"
                style={{ 
                  fontSize: 'clamp(48px, 8vw, 80px)',
                  color: '#ffffff',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}
              >
                RESVERABIO
                <span 
                  style={{ 
                    color: '#c9a962', 
                    verticalAlign: 'super', 
                    fontSize: '0.35em', 
                    fontWeight: 400,
                    marginLeft: '4px'
                  }}
                >
                  ®
                </span>
              </h1>

              {/* Subtítulo */}
              <p 
                className="mb-6"
                style={{ 
                  fontSize: 'clamp(20px, 3vw, 32px)',
                  color: '#c9a962',
                  fontWeight: 400,
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontStyle: 'italic',
                }}
              >
                A Molécula da Longevidade
              </p>

              {/* Descrição */}
              <p 
                className="mb-8 max-w-lg mx-auto lg:mx-0"
                style={{ 
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: 1.7,
                }}
              >
                A verdadeira sofisticação não é um atributo externo; ela reside no 
                epicentro da vida celular. Bem-vindo à nova fronteira da performance 
                humana e do rejuvenescimento sistêmico.
              </p>

              {/* Botão CTA */}
              <a
                href="#produtos"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                style={{ 
                  background: 'linear-gradient(135deg, #c9a962 0%, #a88b4a 100%)',
                  color: '#000000',
                  boxShadow: '0 8px 32px rgba(201, 169, 98, 0.4)',
                }}
              >
                Quero Experimentar
                <ArrowRight 
                  size={22} 
                  className="transition-transform duration-300 group-hover:translate-x-1" 
                />
              </a>
            </div>

            {/* ═══════════════════════════════════════════════════════════
                COLUNA DIREITA: Card do Produto
            ═══════════════════════════════════════════════════════════ */}
            <div 
              className={`relative flex items-center justify-center lg:justify-end transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Card do Produto */}
              <div 
                className="relative w-full max-w-md rounded-3xl overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(107, 78, 124, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%)',
                  border: '1px solid rgba(107, 78, 124, 0.4)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 60px rgba(107, 78, 124, 0.2)',
                }}
              >
                {/* Imagem do Produto */}
                <div className="relative p-6 pb-0">
                  <div 
                    className="relative aspect-square rounded-2xl overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(107, 78, 124, 0.2) 0%, transparent 100%)',
                    }}
                  >
                    {!imageLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div 
                          className="w-12 h-12 rounded-full border-2 border-t-transparent animate-spin"
                          style={{ borderColor: '#c9a962', borderTopColor: 'transparent' }}
                        />
                      </div>
                    )}
                    <img
                      src="/resverabio-novohero.png"
                      alt="Resverabio® - Resveratrol Premium"
                      className="w-full h-full object-cover"
                      onLoad={() => setImageLoaded(true)}
                      style={{ 
                        opacity: imageLoaded ? 1 : 0,
                        transition: 'opacity 0.5s ease'
                      }}
                    />
                    
                    {/* Glow na imagem */}
                    <div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'radial-gradient(ellipse at center bottom, rgba(201, 169, 98, 0.15) 0%, transparent 70%)',
                      }}
                    />
                  </div>
                </div>

                {/* Informações do Produto */}
                <div className="p-6 pt-4">
                  {/* Preço */}
                  <div className="text-center mb-5">
                    <p 
                      className="text-sm font-medium uppercase tracking-wider mb-1"
                      style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                    >
                      Apenas
                    </p>
                    <p 
                      className="font-bold"
                      style={{ 
                        fontSize: 'clamp(36px, 5vw, 48px)',
                        color: '#c9a962',
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      R$ 187,00
                    </p>
                  </div>

                  {/* Lista de Benefícios */}
                  <div className="space-y-3 mb-5">
                    {benefits.map((benefit, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-3"
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                          transition: `all 0.5s ease ${0.5 + index * 0.1}s`,
                        }}
                      >
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: 'rgba(201, 169, 98, 0.15)' }}
                        >
                          <benefit.icon size={16} style={{ color: '#c9a962' }} />
                        </div>
                        <span 
                          className="text-sm font-medium"
                          style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                        >
                          {benefit.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Avaliação */}
                  <div className="flex items-center justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        fill="#c9a962" 
                        color="#c9a962" 
                      />
                    ))}
                    <span 
                      className="ml-2 text-sm font-medium"
                      style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                    >
                      (4.9/5)
                    </span>
                  </div>
                </div>
              </div>

              {/* Elementos Decorativos Flutuantes */}
              <div 
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-60"
                style={{
                  background: 'radial-gradient(circle, rgba(201, 169, 98, 0.3) 0%, transparent 70%)',
                  animation: 'pulse 3s ease-in-out infinite',
                }}
              />
              <div 
                className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-40"
                style={{
                  background: 'radial-gradient(circle, rgba(107, 78, 124, 0.4) 0%, transparent 70%)',
                  animation: 'pulse 4s ease-in-out infinite 1s',
                }}
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Keyframes para animações */}
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}

export default Hero;

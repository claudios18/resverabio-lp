import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Atom, Dna, Droplets, Shield } from 'lucide-react';
import { Container } from '../ui/Container';

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║                    BLOCO 2: HERO BANNER - RESVERABIO®                    ║
 * ║         VERSÃO 2.1 | Mobile Fix - Cards Contained | 26 Fev 2026          ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 * 
 * CORREÇÕES APLICADAS:
 * - Imagem: /resverabio-hero.png (caminho raiz)
 * - Layout 50/50: Texto (esq) | Imagem (dir)
 * - Altura: 100vh total
 * - Imagem: object-contain para não cortar
 * - Fundo: PRETO ABSOLUTO (#000000)
 */



export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pillars = [
    { icon: Atom, title: 'RESVERATROL', description: 'o poder Antioxidante' },
    { icon: Dna, title: 'COLÁGENO', description: 'o construtor de novas células' },
    { icon: Droplets, title: 'ÁC HIALURÔNICO', description: 'combate rugas e o envelhecimento da pele' },
    { icon: Shield, title: 'NIACINA', description: 'pele com saúde e cor homogenia' },
  ];

  return (
    <section 
      className="relative w-full bg-black overflow-hidden"
      style={{ 
        minHeight: '100vh',
        height: 'auto',
      }}
    >
      {/* ═══════════════════════════════════════════════════════════════════
          BACKGROUND: PRETO ABSOLUTO (#000000)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="absolute inset-0 bg-[#000000]" />

      {/* ═══════════════════════════════════════════════════════════════════
          CONTEÚDO PRINCIPAL: Grid 2 colunas 50/50
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="relative z-10 h-full flex flex-col">
        
        {/* Área Principal: Texto + Imagem */}
        <Container className="flex-1 flex items-center pt-4 md:pt-0">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center py-4 md:py-0">
            
            {/* COLUNA ESQUERDA: Texto Hero - 50% */}
            <div 
              className={`w-full text-center lg:text-left transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Label Superior */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ 
                  backgroundColor: 'rgba(201, 169, 98, 0.15)',
                  border: '1px solid rgba(201, 169, 98, 0.3)',
                }}
              >
                <Sparkles size={16} style={{ color: '#c9a962' }} />
                <span className="text-sm font-medium tracking-wider uppercase" style={{ color: '#c9a962' }}>
                  Resveratrol Premium
                </span>
              </div>

              {/* Título Principal */}
              <h1 
                className="font-serif mb-4 leading-none tracking-tight"
                style={{ 
                  fontSize: 'clamp(32px, 6vw, 56px)',
                  color: '#ffffff',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                }}
              >
                RESVERABIO
                <span style={{ color: '#ffffff', verticalAlign: 'super', fontSize: '0.4em', fontWeight: 400 }}>®</span>
              </h1>

              {/* Subtítulo Dourado */}
              <p 
                className="mb-6 italic"
                style={{ 
                  fontSize: 'clamp(20px, 3vw, 32px)',
                  color: '#c9a962',
                  fontWeight: 400,
                }}
              >
                A Molécula da Longevidade
              </p>

              {/* Descrição */}
              <p 
                className="mb-8 max-w-md mx-auto lg:mx-0"
                style={{ 
                  fontSize: 'clamp(16px, 2vw, 18px)',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.6,
                }}
              >
                Trans-Resveratrol 99% de pureza. Aumente a longevidade celular, 
                proteja seu coração e desperte sua mente com a ciência da vida.
              </p>

              {/* CTA Button */}
              <a
                href="#produtos"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#produtos');
                  if (element) {
                    const headerOffset = window.innerWidth < 768 ? 64 : 96;
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                style={{ 
                  backgroundColor: '#c9a962',
                  color: '#000000',
                  boxShadow: '0 8px 32px rgba(201, 169, 98, 0.4)',
                }}
              >
                Quero Experimentar
                <ArrowRight size={22} />
              </a>
            </div>

            {/* COLUNA DIREITA: Imagem Hero - 50% */}
            <div 
              className={`relative w-full h-full flex items-center justify-center lg:justify-end transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Glow Effect dourado sutil */}
              <div 
                className="absolute inset-0 blur-3xl opacity-30"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(201, 169, 98, 0.4) 0%, transparent 60%)',
                  transform: 'scale(1.2)',
                }}
              />

              {/* Container da Imagem */}
              <div className="relative w-full h-[50vh] lg:h-[80vh] flex items-center justify-center lg:justify-end">
                {!imageError ? (
                  <img
                    src="/resverabio-hero2.png"
                    alt="Resverabio®"
                    className="relative z-10 max-w-full max-h-full w-auto h-auto object-contain"
                    style={{
                      filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.8))',
                    }}
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div 
                    className="relative z-10 flex items-center justify-center rounded-xl border-2 border-dashed"
                    style={{
                      width: '100%',
                      height: '40vh',
                      borderColor: 'rgba(201, 169, 98, 0.3)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <div className="text-center">
                      <p className="text-white/40 text-lg font-medium">resverabio-hero.png</p>
                      <p className="text-white/30 text-sm mt-2">Imagem não encontrada</p>
                    </div>
                  </div>
                )}

                {/* Badge de Preço Flutuante */}
                <div 
                  className="absolute top-0 right-0 md:top-4 md:right-4 z-20 px-5 py-3 rounded-xl animate-bounce"
                  style={{
                    backgroundColor: '#c9a962',
                    boxShadow: '0 8px 32px rgba(201, 169, 98, 0.5)',
                  }}
                >
                  <p className="text-xs font-bold text-black uppercase tracking-wider">Apenas</p>
                  <p className="text-3xl font-bold text-black">R$ 187,00</p>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* ═══════════════════════════════════════════════════════════════════
            PILARES DE ATIVOS - 4 Cards Pretos (Mobile Contained)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="relative z-10 pb-8 md:pb-6 mt-4 md:mt-0">
          <Container>
            <div 
              className={`transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                  {pillars.map((pillar, index) => {
                    const Icon = pillar.icon;
                    return (
                      <div
                        key={pillar.title}
                        className="card-hover-glow group relative flex flex-col items-center rounded-2xl border border-white/10 bg-white/10 p-8 md:p-10 text-center min-h-[280px] md:min-h-[320px] justify-center"
                        style={{ animationDelay: `${600 + index * 100}ms` }}
                      >
                        {/* Efeito de luz blur no hover */}
                        <div 
                          className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                          style={{
                            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
                            filter: 'blur(20px)',
                          }}
                        />
                        {/* Ícone */}
                        <div className="mb-4 flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-[#c9a962]/20 transition-transform duration-300 ease-out group-hover:scale-110">
                          <Icon size={40} style={{ color: '#c9a962' }} />
                        </div>
                        {/* Título */}
                        <h3 
                          className="mb-2"
                          style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: 'clamp(16px, 2.5vw, 22px)',
                            fontWeight: 600,
                            color: '#ffffff',
                            letterSpacing: '0.02em',
                          }}
                        >
                          {pillar.title}
                        </h3>
                        {/* Descrição */}
                        <p 
                          style={{
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontSize: 'clamp(13px, 1.8vw, 17px)',
                            fontWeight: 300,
                            color: 'rgba(255, 255, 255, 0.8)',
                            lineHeight: 1.4,
                          }}
                        >
                          {pillar.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}

export default Hero;

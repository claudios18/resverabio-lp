
/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║                    BLOCO 3: BEAUTY SECTION - RESVERABIO®                 ║
 * ║          VERSÃO 2.0 | Sinergia do Blend Premium | 19 Mar 2026           ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { useEffect, useRef, useState } from 'react';
import { Container } from '../ui/Container';

const COLORS = {
  black: '#1a1a1a',
  gold: '#c9a962',
} as const;

export function BeautySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger animation para os itens da sinergia
          sinergiaItems.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, 150 * index);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const sinergiaItems = [
    {
      numero: '01',
      titulo: 'Colágeno Premium (Verisol®)',
      descricao: 'A referência clínica em estrutura e beleza de dentro para fora, reforçando a matriz extracelular.',
    },
    {
      numero: '02',
      titulo: 'Ácido Hialurônico',
      descricao: 'A sofisticação da hidratação celular, garantindo elasticidade e viço tecidual.',
    },
    {
      numero: '03',
      titulo: 'Niacina (B3) + Complexo Vitamínico',
      descricao: 'O suporte essencial para o metabolismo energético e o despertar da performance cognitiva.',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-16 md:py-24 lg:py-32"
      style={{ backgroundColor: '#faf9f7' }}
    >
      <Container>
        <div 
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* TÍTULO PRINCIPAL */}
          <div className="text-center mb-12 md:mb-16">
            <h2 
              className="font-serif font-semibold tracking-tight leading-tight"
              style={{ 
                fontSize: 'clamp(32px, 5vw, 48px)',
                color: '#000000',
                fontFamily: "'Playfair Display', Georgia, serif"
              }}
            >
              A SINERGIA DO BLEND RESVERABIO
              <span style={{ color: '#c9a962', verticalAlign: 'super', fontSize: '0.4em' }}>®</span>
            </h2>
            <p 
              className="mt-4 text-lg md:text-xl"
              style={{ 
                color: '#c9a962',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: 'italic',
              }}
            >
              Beleza que Vem de Dentro
            </p>
            
            {/* Linha decorativa */}
            <div className="mt-6 flex justify-center">
              <div 
                className="w-24 h-1 rounded-full"
                style={{ backgroundColor: '#c9a962' }}
              />
            </div>
          </div>

          {/* CONTEÚDO: IMAGEM + TEXTO */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            {/* IMAGEM - COM VERSÃO MOBILE */}
            <div className="relative order-2 md:order-1">
              {/* Glow effect sutil atrás da imagem */}
              <div 
                className="absolute inset-0 rounded-2xl blur-3xl opacity-40 scale-95 -z-10"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(201, 169, 98, 0.4) 0%, transparent 70%)',
                }}
              />
              
              {/* Desktop Image - 16:9 */}
              <div className="hidden md:block aspect-video overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <img 
                  src="/resverabio-belezaquevemdedentro.png" 
                  alt="Sinergia do Blend Resverabio®" 
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              
              {/* Mobile Image - 1:1 */}
              <div className="block md:hidden aspect-square overflow-hidden rounded-xl shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                <img 
                  src="/resverabio-lm1.png" 
                  alt="Sinergia do Blend Resverabio® - Mobile" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* TEXTO EXPLICATIVO */}
            <div className="order-1 md:order-2">
              <p 
                className="leading-relaxed mb-6"
                style={{ 
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: 'clamp(17px, 2vw, 20px)',
                  fontWeight: 300,
                  color: '#000000',
                  lineHeight: 1.8,
                }}
              >
                A potência do Resveratrol puro é elevada por uma <strong>sinergia inédita de ativos premium</strong>. 
                Cada componente foi selecionado para atuar como combustível essencial para a renovação sistêmica.
              </p>

              {/* Lista de Componentes */}
              <div className="space-y-4">
                {sinergiaItems.map((item, index) => (
                  <div 
                    key={index}
                    className={`flex gap-4 p-4 rounded-xl transition-all duration-500 ease-out hover:bg-white hover:shadow-xl hover:-translate-y-1 ${
                      visibleItems[index] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ 
                      backgroundColor: 'rgba(201, 169, 98, 0.05)',
                      border: '1px solid rgba(201, 169, 98, 0.2)',
                    }}
                  >
                    <span 
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ 
                        backgroundColor: COLORS.gold,
                        color: '#000',
                      }}
                    >
                      {item.numero}
                    </span>
                    <div>
                      <h4 
                        className="font-semibold mb-1"
                        style={{ 
                          color: COLORS.black,
                          fontSize: '16px',
                        }}
                      >
                        {item.titulo}
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ 
                          color: 'rgba(0,0,0,0.7)',
                          lineHeight: 1.5,
                        }}
                      >
                        {item.descricao}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SEÇÃO DE INVESTIMENTO - CENTRALIZADA E DESTACADA */}
          <div 
            className="relative rounded-3xl overflow-hidden mx-auto max-w-4xl"
            style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 80px rgba(201, 169, 98, 0.1)',
            }}
          >
            {/* Glow dourado superior - mais intenso */}
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at top, rgba(201, 169, 98, 0.35) 0%, transparent 55%)',
              }}
            />
            
            {/* Glow dourado inferior sutil */}
            <div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 pointer-events-none opacity-30"
              style={{
                background: 'radial-gradient(ellipse at bottom, rgba(201, 169, 98, 0.2) 0%, transparent 60%)',
              }}
            />

            <div className="relative px-4 sm:px-6 py-10 md:py-14 text-center">
              <p 
                className="text-sm uppercase tracking-widest mb-3"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                Assuma o Controle da Sua Biologia
              </p>
              
              <h3 
                className="text-2xl md:text-3xl font-bold text-white mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                O Investimento na Longevidade
              </h3>

              <p 
                className="max-w-2xl mx-auto mb-8"
                style={{ 
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '15px',
                  lineHeight: 1.6,
                }}
              >
                O RESVERABIO® é entregue em uma apresentação exclusiva de 60 cápsulas (500mg). 
                Com a dosagem recomendada de apenas 2 cápsulas por dia, você garante o aporte 
                necessário para despertar o potencial máximo das suas células.
              </p>

              {/* Preço Centralizado */}
              <div className="mb-8">
                <p 
                  className="text-sm uppercase tracking-wider mb-2"
                  style={{ color: '#c9a962' }}
                >
                  Investimento em Longevidade
                </p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-white/50 line-through text-xl">R$ 297</span>
                  <span 
                    className="text-5xl md:text-6xl font-bold"
                    style={{ 
                      color: '#c9a962',
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    R$ 187
                  </span>
                </div>
                <p className="text-white/60 text-sm mt-2">ou 12x de R$ 18,87</p>
              </div>

              {/* BOTÕES CTA - CENTRALIZADOS NO MOBILE */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#produtos"
                  className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 text-center group relative overflow-hidden"
                  style={{
                    backgroundColor: '#c9a962',
                    color: '#000000',
                    boxShadow: '0 8px 32px rgba(201, 169, 98, 0.4)',
                    letterSpacing: '0.05em',
                    minWidth: 'unset',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(201, 169, 98, 0.6), 0 0 30px rgba(201, 169, 98, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(201, 169, 98, 0.4)';
                  }}
                >
                  <span className="relative z-10">QUERO EXPERIMENTAR</span>
                  {/* Glow interno no hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
                    }}
                  />
                </a>
                <a
                  href="#produtos"
                  className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 text-center border-2 group relative overflow-hidden"
                  style={{
                    borderColor: '#c9a962',
                    color: '#c9a962',
                    letterSpacing: '0.05em',
                    minWidth: 'unset',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(201, 169, 98, 0.1)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(201, 169, 98, 0.2), inset 0 0 20px rgba(201, 169, 98, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span className="relative z-10">GARANTIR MEU BLEND RESVERABIO®</span>
                </a>
              </div>

              {/* Selos de garantia */}
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-white/50">
                <span>✓ 60 Cápsulas (500mg)</span>
                <span>✓ Dosagem: 2 cápsulas/dia</span>
                <span>✓ Frete Grátis</span>
                <span>✓ 30 dias de garantia</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║           BLOCO 5: CARDIOVASCULAR SECTION - RESVERABIO®                  ║
 * ║                                                                          ║
 *  VERSÃO 10.0 - CONTEÚDO ATUALIZADO COM TOM SOPHISTICADO                  ║
 *  • Título: RESVERABIO E AÇÃO CARDIOPROTETORA                              ║
 *  • Introdução elevada para fidelidade premium                             ║
 *  • Estética suíça premium aplicada                                        ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { useEffect, useRef, useState } from 'react';
import { Container } from '../ui/Container';


// Cores padronizadas
const COLORS = {
  gold: '#c9a962',
  black: '#1a1a1a',
} as const;

export function CardiovascularSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  return (
    <section
      ref={sectionRef}
      id="cardiovascular"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#faf9f7' }}
    >
      <Container className="py-10 md:py-12 lg:py-14">
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* 
            ═══════════════════════════════════════════════════════════════════
            TÍTULO PRINCIPAL - ATUALIZADO
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          */}
          <div className="mt-6 md:mt-8 lg:mt-10 text-center">
            <h2 
              className="font-serif font-semibold tracking-tight leading-tight"
              style={{ 
                fontSize: 'clamp(32px, 5vw, 48px)',
                color: '#000000',
                fontFamily: "'Playfair Display', Georgia, serif"
              }}
            >
              RESVERABIO E AÇÃO CARDIOPROTETORA
            </h2>
            
            {/* Linha decorativa dourada abaixo do título */}
            <div className="mt-6 flex justify-center">
              <div 
                className="w-24 h-1 rounded-full"
                style={{ backgroundColor: '#c9a962' }}
              />
            </div>

            {/* 
              ═══════════════════════════════════════════════════════════════════
              PARÁGRAFO DESCRITIVO - NOVO TEXTO SOPHISTICADO
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            */}
            <p 
              className="mt-8 md:mt-12 lg:mt-14 mx-auto leading-relaxed"
              style={{ 
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: 'clamp(19px, 2.2vw, 22px)',
                fontWeight: 300,
                color: '#000000',
                maxWidth: '768px',
                lineHeight: 1.85,
                letterSpacing: '0.01em'
              }}
            >
              A verdadeira sofisticação reside no equilíbrio do seu sistema circulatório. Além de prevenir o envelhecimento vascular, o RESVERABIO® atua na gestão da saúde cardíaca ao restaurar a integridade das células vasculares. Uma ação cardioprotetora inédita que transcende a suplementação comum, focando na eficácia e na proteção contínua do seu coração.
            </p>
          </div>

          {/* 
            ═══════════════════════════════════════════════════════════════════
            MOBILE (< md): LAYOUT VERTICAL
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          */}
          <div className="flex flex-col md:hidden mt-8 md:mt-12 space-y-6">
            {/* SUBTÍTULO DOURADO - Mobile */}
            <p
              className="font-serif text-center px-4"
              style={{
                fontSize: 'clamp(20px, 5vw, 28px)',
                color: COLORS.gold,
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 400,
                fontStyle: 'italic',
              }}
            >
              Ação Cardioprotetora
            </p>

            {/* IMAGEM CARDIOPROTETORA - maxHeight 65vh */}
            <div className="relative overflow-hidden" style={{ marginLeft: '-16px', marginRight: '-16px', width: 'calc(100% + 32px)' }}>
              <img
                src="/resverabio-coracao.png"
                alt="Resveratrol Cardioprotetor - Proteção Cardiovascular"
                className="w-full h-auto object-contain"
                style={{ maxHeight: '65vh' }}
                loading="lazy"
              />
            </div>

            {/* BENEFÍCIOS - Fontes nítidas */}
            <div className="px-4 pb-4">
              <h3
                className="font-bold text-center mb-5"
                style={{
                  fontSize: 'clamp(18px, 4.5vw, 22px)',
                  color: '#000000',
                  fontFamily: "'Inter', system-ui, sans-serif",
                }}
              >
                Benefícios Vasculares Diretos
              </h3>

              <ul className="space-y-4">
                {[
                  'Combate ao Estresse Oxidativo e Inflamação',
                  'Melhora da Função Endotelial',
                  'Equilíbrio dos Lipídios no Sangue',
                  'Vasodilatação e Flexibilidade',
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4"
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: 'clamp(16px, 4vw, 18px)',
                      fontWeight: 400,
                      color: COLORS.black,
                    }}
                  >
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ 
                        backgroundColor: COLORS.gold,
                        fontSize: '14px',
                      }}
                    >
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* BOTÃO CTA - MOBILE: Preto com texto dourado (Luxo) - Scroll nativo */}
            <div className="flex md:hidden justify-center mt-8 px-6">
              <a
                href="#produtos"
                className="w-full max-w-sm md:w-auto md:min-w-[320px] py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 text-center cursor-pointer"
                style={{
                  backgroundColor: COLORS.black,
                  color: COLORS.gold,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  letterSpacing: '0.05em',
                }}
              >
                GARANTIR MEU RESVERABIO®
              </a>
            </div>
          </div>

          {/* 
            ═══════════════════════════════════════════════════════════════════
            DESKTOP (md+): LAYOUT 50/50 - TEXTO (ESQ) | IMAGEM (DIR)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          */}
          <div className="hidden md:block mt-8 md:mt-12">
            <div className="grid grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* COLUNA ESQUERDA: TEXTO + BENEFÍCIOS + BOTÃO */}
              <div className="space-y-6 lg:space-y-8">
                {/* SUBTÍTULO DOURADO - Desktop */}
                <p
                  className="font-serif text-center"
                  style={{
                    fontSize: 'clamp(24px, 2.5vw, 32px)',
                    color: COLORS.gold,
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 400,
                    fontStyle: 'italic',
                  }}
                >
                  Ação Cardioprotetora
                </p>

                {/* BENEFÍCIOS */}
                <div>
                  <h3
                    className="font-bold mb-4 text-center"
                    style={{
                      fontSize: 'clamp(18px, 1.8vw, 22px)',
                      color: '#000000',
                      fontFamily: "'Inter', system-ui, sans-serif",
                    }}
                  >
                    Benefícios Vasculares Diretos
                  </h3>

                  <ul className="space-y-3">
                    {[
                      'Combate ao Estresse Oxidativo e Inflamação',
                      'Melhora da Função Endotelial',
                      'Equilíbrio dos Lipídios no Sangue',
                      'Vasodilatação e Flexibilidade',
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3"
                        style={{
                          fontFamily: "'Inter', system-ui, sans-serif",
                          fontSize: 'clamp(15px, 1.3vw, 17px)',
                          fontWeight: 400,
                          color: COLORS.black,
                        }}
                      >
                        <span
                          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ 
                            backgroundColor: COLORS.gold,
                            fontSize: '12px',
                          }}
                        >
                          {index + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BOTÃO CTA - DESKTOP: Preto com texto dourado - Scroll nativo */}
                <div className="pt-4 flex justify-center">
                  <a
                    href="#produtos"
                    className="py-4 px-10 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center cursor-pointer"
                    style={{
                      backgroundColor: COLORS.black,
                      color: COLORS.gold,
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.25)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    GARANTIR MEU RESVERABIO®
                  </a>
                </div>
              </div>

              {/* COLUNA DIREITA: IMAGEM */}
              <div className="relative flex items-center justify-center">
                <div className="relative overflow-hidden rounded-2xl shadow-xl" style={{ maxWidth: '90%' }}>
                  <img
                    src="/resverabio-coracao.png"
                    alt="RESVERATROL: Ação Cardioprotetora - O segredo do coração. Benefícios vasculares: combate ao estresse oxidativo, melhora endotelial, equilíbrio de lipídios e vasodilatação."
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

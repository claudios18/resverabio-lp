/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║           BLOCO 5: CARDIOVASCULAR SECTION - RESVERABIO®                  ║
 * ║                                                                          ║
 *  VERSÃO 8.0 - LAYOUT 50/50 DESKTOP:                                       ║
 *  • MOBILE (< md): Fontes grandes e nítidas (padrão Hero)                  ║
 *  • DESKTOP (md+): Layout 2 colunas - Texto (esq) | Imagem (dir)           ║
 *  • Botão: Preto com texto dourado (estilo luxo)                           ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { useEffect, useRef, useState } from 'react';
import { Container } from '../ui/Container';


// Cores padronizadas
const COLORS = {
  gold: '#c9a962',
  black: '#1a1a1a',
  primary: '#1E3A5F',
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

  const scrollToProducts = () => {
    const element = document.querySelector('#produtos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            MOBILE (< md): LAYOUT LUXO COM FONTES GRANDES
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          */}
          <div className="flex flex-col md:hidden space-y-6">
            {/* TÍTULO PRINCIPAL - Estilo Hero Luxo */}
            <h2
              className="font-serif font-bold tracking-tight leading-none text-center px-4"
              style={{
                fontSize: 'clamp(28px, 8vw, 36px)',
                color: COLORS.primary,
                fontFamily: "'Playfair Display', Georgia, serif",
                letterSpacing: '-0.02em',
              }}
            >
              RESVERATROL
            </h2>

            {/* SUBTÍTULO DOURADO */}
            <p
              className="font-serif text-center px-4"
              style={{
                fontSize: 'clamp(20px, 5vw, 28px)',
                color: COLORS.gold,
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 400,
                fontStyle: 'italic',
                marginTop: '-4px',
              }}
            >
              Ação Cardioprotetora
            </p>

            {/* Linha decorativa */}
            <div className="flex justify-center px-4" style={{ marginTop: '4px' }}>
              <div className="w-24 h-1 rounded-full" style={{ backgroundColor: COLORS.gold }} />
            </div>

            {/* IMAGEM CARDIOPROTETORA */}
            <div className="relative overflow-hidden" style={{ marginLeft: '-16px', marginRight: '-16px', width: 'calc(100% + 32px)' }}>
              <img
                src="/resverabio-cardioprotecao.png"
                alt="Resveratrol Cardioprotetor - Proteção Cardiovascular"
                className="w-full h-auto object-contain"
                style={{ maxHeight: '55vh' }}
                loading="lazy"
              />
            </div>

            {/* TEXTO DESCRITIVO - Fonte maior e nítida */}
            <p
              className="leading-relaxed text-center px-4"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: 'clamp(17px, 4vw, 20px)',
                fontWeight: 400,
                color: COLORS.black,
                lineHeight: 1.7,
              }}
            >
              O envelhecimento está associado ao comprometimento da função vascular
              e à alteração do equilíbrio redox. O resveratrol na ação
              cardioprotetora por ele demonstrada, foca na eficácia da prevenção e
              gestão de doenças cardiovasculares.
            </p>

            {/* BENEFÍCIOS - Fontes nítidas */}
            <div className="px-4 pb-4">
              <h3
                className="font-bold text-center mb-5"
                style={{
                  fontSize: 'clamp(18px, 4.5vw, 22px)',
                  color: COLORS.primary,
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

            {/* BOTÃO CTA - MOBILE: Preto com texto dourado (Luxo) */}
            <div className="flex md:hidden justify-center mt-8 px-6">
              <button
                onClick={scrollToProducts}
                className="w-full max-w-sm py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: COLORS.black,
                  color: COLORS.gold,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  letterSpacing: '0.05em',
                }}
              >
                GARANTIR MEU RESVERABIO®
              </button>
            </div>
          </div>

          {/* 
            ═══════════════════════════════════════════════════════════════════
            DESKTOP (md+): LAYOUT 50/50 - TEXTO (ESQ) | IMAGEM (DIR)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* COLUNA ESQUERDA: TEXTO + BENEFÍCIOS + BOTÃO */}
              <div className="space-y-6 lg:space-y-8">
                {/* TÍTULO PRINCIPAL */}
                <div>
                  <h2
                    className="font-serif font-bold tracking-tight leading-none"
                    style={{
                      fontSize: 'clamp(36px, 4vw, 52px)',
                      color: COLORS.primary,
                      fontFamily: "'Playfair Display', Georgia, serif",
                      letterSpacing: '-0.02em',
                    }}
                  >
                    RESVERATROL
                  </h2>

                  {/* SUBTÍTULO DOURADO */}
                  <p
                    className="font-serif mt-2"
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

                  {/* Linha decorativa */}
                  <div className="mt-4">
                    <div className="w-24 h-1 rounded-full" style={{ backgroundColor: COLORS.gold }} />
                  </div>
                </div>

                {/* TEXTO DESCRITIVO */}
                <p
                  className="leading-relaxed"
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: 'clamp(17px, 1.5vw, 20px)',
                    fontWeight: 400,
                    color: COLORS.black,
                    lineHeight: 1.7,
                  }}
                >
                  O envelhecimento está associado ao comprometimento da função vascular
                  e à alteração do equilíbrio redox. O resveratrol na ação
                  cardioprotetora por ele demonstrada, foca na eficácia da prevenção e
                  gestão de doenças cardiovasculares.
                </p>

                {/* BENEFÍCIOS */}
                <div>
                  <h3
                    className="font-bold mb-4"
                    style={{
                      fontSize: 'clamp(18px, 1.8vw, 22px)',
                      color: COLORS.primary,
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

                {/* BOTÃO CTA - DESKTOP: Preto com texto dourado */}
                <div className="pt-4">
                  <button
                    onClick={scrollToProducts}
                    className="py-4 px-10 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    style={{
                      backgroundColor: COLORS.black,
                      color: COLORS.gold,
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.25)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    GARANTIR MEU RESVERABIO®
                  </button>
                </div>
              </div>

              {/* COLUNA DIREITA: IMAGEM */}
              <div className="relative flex items-center justify-center">
                <div className="relative overflow-hidden rounded-2xl shadow-xl" style={{ maxWidth: '90%' }}>
                  <img
                    src="/resverabio-cardioprotecao.png"
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

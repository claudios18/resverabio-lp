/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║           BLOCO 5: CARDIOVASCULAR SECTION - RESVERABIO®                  ║
 * ║                                                                          ║
 *  VERSÃO 6.0 - MOBILE ASSET SWAP:                                          ║
 *  • MOBILE (< md): Texto e imagem SEPARADOS em pilha vertical              ║
 *                   + Asset: resverabio-coração.png (imagem do coração)     ║
 *  • DESKTOP (md+): Asset combinado resverabio-cardiovascular2.png          ║
 *  • Legibilidade garantida no mobile com fontes maiores                    ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { useEffect, useRef, useState } from 'react';
import { Container } from '../ui/Container';
import { CTAButton, CTAButtonMobile } from '../ui/CTAButton';

// Cores padronizadas
const COLORS = {
  textPrimary: '#1a1a1a',
  textBody: '#2d2d2d',
  accent: '#c9a962',
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
            MOBILE (< md): TEXTO E IMAGEM SEPARADOS EM PILHA VERTICAL
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          */}
          <div className="flex flex-col md:hidden space-y-6">
            {/* TÍTULO */}
            <h2
              className="font-serif font-semibold tracking-tight leading-tight text-center px-4"
              style={{
                fontSize: '26px',
                color: COLORS.primary,
                fontFamily: "'Playfair Display', Georgia, serif",
                wordBreak: 'keep-all',
                overflowWrap: 'break-word',
              }}
            >
              RESVERATROL: AÇÃO CARDIOPROTETORA
            </h2>

            {/* Subtítulo */}
            <p
              className="font-serif italic text-center px-4"
              style={{
                fontSize: '17px',
                color: COLORS.primary,
                fontFamily: "'Playfair Display', Georgia, serif",
                marginTop: '-8px',
              }}
            >
              O que a ciência diz
            </p>

            {/* Linha decorativa */}
            <div className="flex justify-center px-4" style={{ marginTop: '-4px' }}>
              <div className="w-20 h-1 rounded-full" style={{ backgroundColor: COLORS.accent }} />
            </div>

            {/* IMAGEM DO CORAÇÃO - MOBILE: resverabio-coração.png */}
            <div className="relative overflow-hidden" style={{ marginLeft: '-16px', marginRight: '-16px', width: 'calc(100% + 32px)' }}>
              <img
                src="/resverabio-coração.png"
                alt="O Segredo do Coração - Resveratrol Cardioprotetor"
                className="w-full h-auto object-contain"
                style={{ maxHeight: '50vh' }}
                loading="lazy"
              />
            </div>

            {/* TEXTO DESCRITIVO */}
            <p
              className="leading-relaxed text-center px-4"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: '16px',
                fontWeight: 300,
                color: COLORS.textBody,
                lineHeight: 1.7,
              }}
            >
              O envelhecimento está associado ao comprometimento da função vascular,
              e à alteração do equilíbrio redox (oxidativo). O resveratrol na ação
              cardioprotetora por ele demonstrada, foca na eficácia da prevenção e
              gestão de doenças cardiovasculares.
            </p>

            {/* BENEFÍCIOS */}
            <div className="px-4 pb-4">
              <h3
                className="font-semibold italic text-center mb-4"
                style={{
                  fontSize: '17px',
                  color: COLORS.primary,
                  fontFamily: "'Inter', system-ui, sans-serif",
                }}
              >
                Benefícios Vasculares Diretos:
              </h3>

              <ul className="space-y-3">
                {[
                  'O Combate ao Estresse Oxidativo e à Inflamação Crônica',
                  'Melhora Endotelial',
                  'Equilíbrio das Gorduras (Lipídios) no Sangue',
                  'Vasodilatação e Flexibilidade dos Vasos',
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: '15px',
                      fontWeight: 300,
                      color: COLORS.textBody,
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* BOTÃO CTA - MOBILE */}
            <div className="flex md:hidden justify-center mt-8 px-4">
              <CTAButtonMobile>GARANTIR MEU BLEND RESVERABIO®</CTAButtonMobile>
            </div>
          </div>

          {/* 
            ═══════════════════════════════════════════════════════════════════
            DESKTOP (md+): ASSET COMBINADO ORIGINAL
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          */}
          <div className="hidden md:block">
            <div className="w-full md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/resverabio-cardiovascular2.png"
                  alt="RESVERATROL: Ação Cardioprotetora - O segredo do coração. Benefícios vasculares: combate ao estresse oxidativo, melhora endotelial, equilíbrio de lipídios e vasodilatação."
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* BOTÃO CTA - DESKTOP */}
            <div className="hidden md:flex justify-center mt-10">
              <CTAButton>GARANTIR MEU BLEND RESVERABIO®</CTAButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

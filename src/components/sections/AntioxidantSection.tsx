/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║           BLOCO ANTIOXIDANTE: POTENCIALIZAÇÃO AO MÁXIMO                  ║
 * ║                                                                          ║
 *  VERSÃO 2.0 - LAYOUT SPLIT SECTION:                                       ║
 *  • DESKTOP (md+): Imagem ESQUERDA | Texto DIREITA (layout 50/50)          ║
 *  • MOBILE (< md): Empilhamento vertical (imagem topo → texto abaixo)      ║
 *  • Asset: resverabio-radlivres.png                                        ║
 *  • Fundo: Off-white (#faf9f7)                                             ║
 *  • Tipografia: Padrão BeautySection (cinza #1a1a1a, dourado #c9a962)      ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { useEffect, useRef, useState } from 'react';
import { Container } from '../ui/Container';

// Cores padronizadas - Padrão BeautySection
const COLORS = {
  textPrimary: '#000000',
  textBody: '#1a1a1a',
  accent: '#c9a962',
} as const;

export function AntioxidantSection() {
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
      id="antioxidante"
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
            TÍTULO PRINCIPAL - LARGURA TOTAL CENTRALIZADO
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Desktop: Largura total, centralizado
            • Mobile: Largura total, centralizado
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <div className="w-full mb-8 md:mb-12">
            <h2
              className="font-serif font-semibold tracking-tight leading-tight text-center"
              style={{
                fontSize: 'clamp(28px, 5vw, 48px)',
                color: COLORS.textPrimary,
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              ANTIOXIDANTE{" "}
              <span style={{ color: COLORS.accent }}>—</span>{" "}
              PROTEÇÃO AO MÁXIMO
            </h2>
            
            {/* Linha decorativa centralizada */}
            <div className="flex justify-center mt-6">
              <div 
                className="w-24 h-1 rounded-full" 
                style={{ backgroundColor: COLORS.accent }} 
              />
            </div>
            
            {/* Subtítulo - Playfair Display, itálico, dourado */}
            <p
              className="font-serif italic text-center mt-4"
              style={{
                fontSize: 'clamp(16px, 2vw, 20px)',
                color: COLORS.accent,
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              O que a ciência diz
            </p>
          </div>

          {/* 
            ═══════════════════════════════════════════════════════════════════
            MOBILE (< md): EMPILHAMENTO VERTICAL
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Imagem no topo
            • Texto abaixo
            • Largura total do viewport
          */}
          <div className="flex flex-col md:hidden space-y-6">
            {/* IMAGEM DOS RADICAIS LIVRES - MOBILE */}
            <div 
              className="relative overflow-hidden rounded-2xl shadow-xl mx-4"
            >
              <img
                src="/resverabio-radlivres.png"
                alt="Antioxidante Proteção ao Máximo - Combate aos Radicais Livres"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>

            {/* TEXTO DESCRITIVO - Padrão BeautySection */}
            <div className="px-4 space-y-5">
              <p
                className="text-center mx-auto"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: 'clamp(17px, 2.2vw, 20px)',
                  fontWeight: 300,
                  color: COLORS.textBody,
                  lineHeight: 1.8,
                  letterSpacing: '0.01em',
                  maxWidth: '768px',
                }}
              >
                O envelhecimento da pele não tem uma causa única; é um processo multifatorial, 
                resultado de fatores genéticos e ambientais, como o estresse oxidativo e a perda 
                de colágeno, entre outros. Por isso, uma "solução correta" deve ter múltiplos alvos.
              </p>

              {/* Subtítulo Conceito Inside-Out - Playfair Display, itálico */}
              <h3
                className="font-serif italic text-center pt-2"
                style={{
                  fontSize: '18px',
                  color: COLORS.textPrimary,
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}
              >
                O Conceito "Inside-Out": Por que um não vive sem o outro
              </h3>

              {/* Proteção */}
              <div className="space-y-2">
                <p
                  className="font-semibold text-center"
                  style={{
                    fontSize: '17px',
                    color: COLORS.textPrimary,
                    fontFamily: "'Inter', system-ui, sans-serif",
                  }}
                >
                  &gt; Proteção (Ação Antioxidante):
                </p>
                <p
                  className="text-center mx-auto"
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: '16px',
                    fontWeight: 300,
                    color: COLORS.textBody,
                    lineHeight: 1.75,
                    letterSpacing: '0.01em',
                    maxWidth: '768px',
                  }}
                >
                  O RSV funciona como um antioxidante, protegendo as células contra o estresse 
                  oxidativo e neutralizando os radicais livres (RL) que causam o fotoenvelhecimento.
                </p>
              </div>

              {/* Reparo */}
              <div className="space-y-2">
                <p
                  className="font-semibold text-center"
                  style={{
                    fontSize: '17px',
                    color: COLORS.textPrimary,
                    fontFamily: "'Inter', system-ui, sans-serif",
                  }}
                >
                  &gt; Reparo (Ação Estrutural):
                </p>
                <p
                  className="text-center mx-auto"
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: '16px',
                    fontWeight: 300,
                    color: COLORS.textBody,
                    lineHeight: 1.75,
                    letterSpacing: '0.01em',
                    maxWidth: '768px',
                  }}
                >
                  O RSV tem a capacidade de estimular a síntese de colágeno. Estudos tópicos com 
                  trans-resveratrol demonstraram o aumento da espessura epidérmica e dérmica, 
                  resultando em maior firmeza e elasticidade da pele.
                </p>
              </div>
            </div>
          </div>

          {/* 
            ═══════════════════════════════════════════════════════════════════
            DESKTOP (md+): LAYOUT SPLIT - IMAGEM ESQUERDA | TEXTO DIREITA
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Grid 50/50
            • Imagem à esquerda
            • Texto à direita
          */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* COLUNA ESQUERDA - IMAGEM */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/resverabio-radlivres.png"
                  alt="Antioxidante Proteção ao Máximo - Combate aos Radicais Livres"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>

              {/* COLUNA DIREITA - TEXTO */}
              <div className="flex flex-col space-y-5">
                {/* TEXTO PRINCIPAL - Padrão BeautySection */}
                <p
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: 'clamp(17px, 1.8vw, 20px)',
                    fontWeight: 300,
                    color: COLORS.textBody,
                    lineHeight: 1.8,
                    letterSpacing: '0.01em',
                  }}
                >
                  O envelhecimento da pele não tem uma causa única; é um processo multifatorial, 
                  resultado de fatores genéticos e ambientais, como o estresse oxidativo e a perda 
                  de colágeno, entre outros. Por isso, uma "solução correta" deve ter múltiplos alvos.
                </p>

                {/* Subtítulo Conceito Inside-Out - Playfair Display, itálico */}
                <h3
                  className="font-serif italic pt-2"
                  style={{
                    fontSize: 'clamp(18px, 2vw, 22px)',
                    color: COLORS.textPrimary,
                    fontFamily: "'Playfair Display', Georgia, serif",
                  }}
                >
                  O Conceito "Inside-Out": Por que um não vive sem o outro
                </h3>

                {/* Proteção */}
                <div className="space-y-2">
                  <p
                    className="font-semibold"
                    style={{
                      fontSize: 'clamp(16px, 1.8vw, 18px)',
                      color: COLORS.textPrimary,
                      fontFamily: "'Inter', system-ui, sans-serif",
                    }}
                  >
                    &gt; Proteção (Ação Antioxidante):
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: 'clamp(16px, 1.8vw, 18px)',
                      fontWeight: 300,
                      color: COLORS.textBody,
                      lineHeight: 1.75,
                      letterSpacing: '0.01em',
                    }}
                  >
                    O RSV funciona como um antioxidante, protegendo as células contra o estresse 
                    oxidativo e neutralizando os radicais livres (RL) que causam o fotoenvelhecimento.
                  </p>
                </div>

                {/* Reparo */}
                <div className="space-y-2">
                  <p
                    className="font-semibold"
                    style={{
                      fontSize: 'clamp(16px, 1.8vw, 18px)',
                      color: COLORS.textPrimary,
                      fontFamily: "'Inter', system-ui, sans-serif",
                    }}
                  >
                    &gt; Reparo (Ação Estrutural):
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: 'clamp(16px, 1.8vw, 18px)',
                      fontWeight: 300,
                      color: COLORS.textBody,
                      lineHeight: 1.75,
                      letterSpacing: '0.01em',
                    }}
                  >
                    O RSV tem a capacidade de estimular a síntese de colágeno. Estudos tópicos com 
                    trans-resveratrol demonstraram o aumento da espessura epidérmica e dérmica, 
                    resultando em maior firmeza e elasticidade da pele.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

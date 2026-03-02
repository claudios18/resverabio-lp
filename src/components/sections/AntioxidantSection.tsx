/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║           BLOCO ANTIOXIDANTE: POTENCIALIZAÇÃO AO MÁXIMO                  ║
 * ║                                                                          ║
 *  VERSÃO 1.0 - LAYOUT INVERSO:                                             ║
 *  • DESKTOP (md+): Imagem ESQUERDA | Texto DIREITA (layout 50/50)          ║
 *  • MOBILE (< md): Empilhamento vertical (imagem topo → texto abaixo)      ║
 *  • Asset: resverabio-radicaislivres.png                                   ║
 *  • Fundo: Off-white (#faf9f7)                                             ║
 *  • Tipografia: Azul Premium (#1E3A5F) - padrão Beleza que Vem de Dentro   ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { useEffect, useRef, useState } from 'react';
import { Container } from '../ui/Container';

// Cores padronizadas - Azul Premium
const COLORS = {
  textPrimary: '#1a1a1a',
  textBody: '#2d2d2d',
  accent: '#c9a962',
  primary: '#1E3A5F',
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
            MOBILE (< md): EMPILHAMENTO VERTICAL ABSOLUTO
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Imagem no topo
            • Texto abaixo
            • Largura total do viewport
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
              ANTIOXIDANTE: POTENCIALIZAÇÃO AO MÁXIMO
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

            {/* IMAGEM DOS RADICAIS LIVRES - MOBILE */}
            <div className="relative overflow-hidden" style={{ marginLeft: '-16px', marginRight: '-16px', width: 'calc(100% + 32px)' }}>
              <img
                src="/resverabio-radicaislivres.png"
                alt="Antioxidante Potencialização ao Máximo - Combate aos Radicais Livres"
                className="w-full h-auto object-contain"
                style={{ maxHeight: '50vh' }}
                loading="lazy"
              />
            </div>

            {/* TEXTO DESCRITIVO */}
            <div className="px-4 space-y-4">
              <p
                className="leading-relaxed text-center"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: '16px',
                  fontWeight: 300,
                  color: COLORS.textBody,
                  lineHeight: 1.7,
                }}
              >
                O envelhecimento da pele não tem uma causa única; é um processo multifatorial, 
                resultado de fatores genéticos e ambientais, como o estresse oxidativo e a perda 
                de colágeno, entre outros. Por isso, uma "solução correta" deve ter múltiplos alvos.
              </p>

              {/* Subtítulo Conceito Inside-Out */}
              <h3
                className="font-semibold text-center pt-2"
                style={{
                  fontSize: '17px',
                  color: COLORS.primary,
                  fontFamily: "'Inter', system-ui, sans-serif",
                }}
              >
                O Conceito "Inside-Out": Por que um não vive sem o outro
              </h3>

              {/* Proteção */}
              <div className="space-y-2">
                <p
                  className="font-semibold text-center"
                  style={{
                    fontSize: '15px',
                    color: COLORS.primary,
                    fontFamily: "'Inter', system-ui, sans-serif",
                  }}
                >
                  &gt; Proteção (Ação Antioxidante):
                </p>
                <p
                  className="leading-relaxed text-center"
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: '15px',
                    fontWeight: 300,
                    color: COLORS.textBody,
                    lineHeight: 1.6,
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
                    fontSize: '15px',
                    color: COLORS.primary,
                    fontFamily: "'Inter', system-ui, sans-serif",
                  }}
                >
                  &gt; Reparo (Ação Estrutural):
                </p>
                <p
                  className="leading-relaxed text-center"
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: '15px',
                    fontWeight: 300,
                    color: COLORS.textBody,
                    lineHeight: 1.6,
                  }}
                >
                  O RSV tem a capacidade de estimular a síntese de colágeno. Estudos tópicos com 
                  trans-resveratrol demonstraram o aumento da espessura epidérmica e dérmica. 
                  Esse aumento da espessura dérmica pode ser atribuído à essa maior produção de 
                  colágeno, resultando em maior firmeza e elasticidade da pele.
                </p>
              </div>
            </div>
          </div>

          {/* 
            ═══════════════════════════════════════════════════════════════════
            DESKTOP (md+): LAYOUT INVERSO - IMAGEM ESQUERDA | TEXTO DIREITA
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Grid 50/50
            • Imagem à esquerda (inversão do Cardiovascular)
            • Texto à direita
          */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* COLUNA ESQUERDA - IMAGEM */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/resverabio-radicaislivres.png"
                  alt="Antioxidante Potencialização ao Máximo - Combate aos Radicais Livres"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>

              {/* COLUNA DIREITA - TEXTO */}
              <div className="flex flex-col space-y-6">
                {/* TÍTULO - Alinhado com BeautySection: clamp(32px, 5vw, 48px) */}
                <h2
                  className="font-serif font-semibold tracking-tight leading-tight"
                  style={{
                    fontSize: 'clamp(32px, 5vw, 48px)',
                    color: COLORS.primary,
                    fontFamily: "'Playfair Display', Georgia, serif",
                  }}
                >
                  ANTIOXIDANTE: POTENCIALIZAÇÃO AO MÁXIMO
                </h2>

                {/* Subtítulo */}
                <p
                  className="font-serif italic"
                  style={{
                    fontSize: '18px',
                    color: COLORS.primary,
                    fontFamily: "'Playfair Display', Georgia, serif",
                  }}
                >
                  O que a ciência diz
                </p>

                {/* Linha decorativa */}
                <div className="w-20 h-1 rounded-full" style={{ backgroundColor: COLORS.accent }} />

                {/* TEXTO PRINCIPAL - Alinhado com BeautySection: clamp(19px, 2.2vw, 22px) */}
                <p
                  className="leading-relaxed"
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: 'clamp(19px, 2.2vw, 22px)',
                    fontWeight: 300,
                    color: COLORS.textBody,
                    lineHeight: 1.85,
                    letterSpacing: '0.01em',
                  }}
                >
                  O envelhecimento da pele não tem uma causa única; é um processo multifatorial, 
                  resultado de fatores genéticos e ambientais, como o estresse oxidativo e a perda 
                  de colágeno, entre outros. Por isso, uma "solução correta" deve ter múltiplos alvos.
                </p>

                {/* Subtítulo Conceito Inside-Out - Alinhado com parágrafo principal */}
                <h3
                  className="font-semibold pt-2"
                  style={{
                    fontSize: 'clamp(19px, 2.2vw, 22px)',
                    color: COLORS.primary,
                    fontFamily: "'Inter', system-ui, sans-serif",
                  }}
                >
                  O Conceito "Inside-Out": Por que um não vive sem o outro
                </h3>

                {/* Proteção - Alinhado com parágrafo principal */}
                <div className="space-y-2">
                  <p
                    className="font-semibold"
                    style={{
                      fontSize: 'clamp(19px, 2.2vw, 22px)',
                      color: COLORS.primary,
                      fontFamily: "'Inter', system-ui, sans-serif",
                    }}
                  >
                    &gt; Proteção (Ação Antioxidante):
                  </p>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: 'clamp(19px, 2.2vw, 22px)',
                      fontWeight: 300,
                      color: COLORS.textBody,
                      lineHeight: 1.85,
                      letterSpacing: '0.01em',
                    }}
                  >
                    O RSV funciona como um antioxidante, protegendo as células contra o estresse 
                    oxidativo e neutralizando os radicais livres (RL) que causam o fotoenvelhecimento.
                  </p>
                </div>

                {/* Reparo - Alinhado com parágrafo principal */}
                <div className="space-y-2">
                  <p
                    className="font-semibold"
                    style={{
                      fontSize: 'clamp(19px, 2.2vw, 22px)',
                      color: COLORS.primary,
                      fontFamily: "'Inter', system-ui, sans-serif",
                    }}
                  >
                    &gt; Reparo (Ação Estrutural):
                  </p>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: 'clamp(19px, 2.2vw, 22px)',
                      fontWeight: 300,
                      color: COLORS.textBody,
                      lineHeight: 1.85,
                      letterSpacing: '0.01em',
                    }}
                  >
                    O RSV tem a capacidade de estimular a síntese de colágeno. Estudos tópicos com 
                    trans-resveratrol demonstraram o aumento da espessura epidérmica e dérmica. 
                    Esse aumento da espessura dérmica pode ser atribuído à essa maior produção de 
                    colágeno, resultando em maior firmeza e elasticidade da pele.
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

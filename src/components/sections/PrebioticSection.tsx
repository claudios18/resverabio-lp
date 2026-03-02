/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║       BLOCO: EFEITO PREBIÓTICO DO RESVERATROL E INTESTINO               ║
 * ║                                                                          ║
 *  VERSÃO 1.0 - LAYOUT:                                                     ║
 *  • DESKTOP (md+): Texto ESQUERDA | Imagem DIREITA (layout 50/50)          ║
 *  • MOBILE (< md): Empilhamento vertical (imagem topo → texto abaixo)      ║
 *  • Asset: resverabio-intestino.png                                        ║
 *  • Fundo: Off-white (#faf9f7)                                             ║
 *  • Tipografia: Azul Premium (#1E3A5F)                                     ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { useEffect, useRef, useState } from 'react';
import { Container } from '../ui/Container';
import { CTAButton, CTAButtonMobile } from '../ui/CTAButton';

// Cores padronizadas - Azul Premium
const COLORS = {
  textPrimary: '#1a1a1a',
  textBody: '#2d2d2d',
  accent: '#c9a962',
  primary: '#1E3A5F',
} as const;

export function PrebioticSection() {
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
      id="prebiotico"
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
            MOBILE (< md): EMPILHAMENTO VERTICAL
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
              O Efeito Prebiótico do Resveratrol e Intestino
            </h2>

            {/* Linha decorativa */}
            <div className="flex justify-center px-4" style={{ marginTop: '-4px' }}>
              <div className="w-20 h-1 rounded-full" style={{ backgroundColor: COLORS.accent }} />
            </div>

            {/* IMAGEM DO INTESTINO - MOBILE */}
            <div className="relative overflow-hidden" style={{ marginLeft: '-16px', marginRight: '-16px', width: 'calc(100% + 32px)' }}>
              <img
                src="/resverabio-intestino.png"
                alt="Efeito Prebiótico do Resveratrol - Saúde Intestinal"
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
                Estudos recentes mostram que o Trans-Resveratrol atua como um Probiótico de luxo. 
                Ele não é apenas digerido; ele <strong>alimenta as bactérias boas</strong> e inibe as 
                bactérias patogênicas.
              </p>

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
                Um dos maiores vilões do envelhecimento moderno é o <strong>Leaky Gut (Intestino Permeável)</strong>. 
                Devido ao estresse e má alimentação, a parede do intestino fica "esburacada", 
                permitindo que toxinas vazem para o sangue.
              </p>

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
                O RSV regula a <strong>integridade da barreira intestinal</strong> e afeta a microbiota. 
                Com o intestino "blindado" e a flora equilibrada pelo resveratrol, a sinalização 
                que sobe pelo <strong>Nervo Vago</strong> muda. Em vez de sinais de estresse, 
                o cérebro recebe sinais de equilíbrio.
              </p>
            </div>

            {/* BOTÃO CTA - MOBILE */}
            <div className="flex md:hidden justify-center mt-8 px-4">
              <CTAButtonMobile text="GARANTIR MEU BLEND RESVERABIO®" />
            </div>
          </div>

          {/* 
            ═══════════════════════════════════════════════════════════════════
            DESKTOP (md+): LAYOUT - TEXTO ESQUERDA | IMAGEM DIREITA
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Grid 50/50
            • Texto à esquerda
            • Imagem à direita
          */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* COLUNA ESQUERDA - TEXTO */}
              <div className="flex flex-col space-y-6">
                {/* TÍTULO */}
                <h2
                  className="font-serif font-semibold tracking-tight leading-tight"
                  style={{
                    fontSize: 'clamp(32px, 5vw, 48px)',
                    color: COLORS.primary,
                    fontFamily: "'Playfair Display', Georgia, serif",
                  }}
                >
                  O Efeito Prebiótico do Resveratrol e Intestino
                </h2>

                {/* Linha decorativa */}
                <div className="w-20 h-1 rounded-full" style={{ backgroundColor: COLORS.accent }} />

                {/* TEXTO PRINCIPAL */}
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
                  Estudos recentes mostram que o Trans-Resveratrol atua como um Probiótico de luxo. 
                  Ele não é apenas digerido; ele <strong>alimenta as bactérias boas</strong> e inibe as 
                  bactérias patogênicas.
                </p>

                {/* TEXTO LEAKY GUT */}
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
                  Um dos maiores vilões do envelhecimento moderno é o <strong>Leaky Gut (Intestino Permeável)</strong>. 
                  Devido ao estresse e má alimentação, a parede do intestino fica "esburacada", 
                  permitindo que toxinas vazem para o sangue.
                </p>

                {/* TEXTO NERVO VAGO */}
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
                  O RSV regula a <strong>integridade da barreira intestinal</strong> e afeta a microbiota. 
                  Com o intestino "blindado" e a flora equilibrada pelo resveratrol, a sinalização 
                  que sobe pelo <strong>Nervo Vago</strong> muda. Em vez de sinais de estresse, 
                  o cérebro recebe sinais de equilíbrio.
                </p>

                {/* BOTÃO CTA - DESKTOP */}
                <div className="hidden md:flex justify-start pt-4">
                  <CTAButton text="GARANTIR MEU BLEND RESVERABIO®" />
                </div>
              </div>

              {/* COLUNA DIREITA - IMAGEM */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/resverabio-intestino.png"
                  alt="Efeito Prebiótico do Resveratrol - Saúde Intestinal"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

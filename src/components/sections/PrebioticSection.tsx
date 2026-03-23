/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║       BLOCO: INTESTINO - NOSSO SEGUNDO CÉREBRO                          ║
 * ║                                                                          ║
 *  VERSÃO 2.0 - LAYOUT SPLIT SECTION:                                       ║
 *  • DESKTOP (md+): Layout 50/50 - Texto ESQUERDA | Imagem DIREITA          ║
 *  • MOBILE (< md): Empilhamento vertical - Imagem TOPO → Texto BAIXO       ║
 *  • Asset: resverabio-newbrain.png                                         ║
 *  • Fundo: Off-white (#faf9f7)                                             ║
 *  • Tipografia: Padrão BeautySection                                       ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { useEffect, useRef, useState } from 'react';
import { Container } from '../ui/Container';

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
      {/* 
        ═══════════════════════════════════════════════════════════════════
        SPLIT SECTION: INTESTINO - NOSSO SEGUNDO CÉREBRO
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        • Layout janela dividida (50/50)
        • Desktop: Texto ESQUERDA | Imagem DIREITA
        • Mobile: Imagem TOPO → Texto BAIXO (estética de luxo)
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="relative w-full">
        {/* MOBILE: Layout empilhado - Imagem primeiro para impacto visual */}
        <div className="block md:hidden">
          {/* IMAGEM - FULL WIDTH NO MOBILE */}
          <div 
            className="relative w-full overflow-hidden"
            style={{ 
              background: 'linear-gradient(180deg, #faf9f7 0%, #f5f4f2 100%)'
            }}
          >
            <div className="px-4 py-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/resverabio-newbrain.png"
                  alt="Intestino - Nosso Segundo Cérebro"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* TEXTO - ABAIXO DA IMAGEM */}
          <Container className="py-8">
            <div className="flex flex-col space-y-6">
              {/* TÍTULO */}
              <h2
                className="font-serif font-semibold tracking-tight leading-tight text-center"
                style={{
                  fontSize: 'clamp(32px, 8vw, 42px)',
                  color: '#000000',
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}
              >
                O intestino{" "}
                <span style={{ color: '#c9a962' }}>—</span>{" "}
                Nosso "Segundo Cérebro"
              </h2>

              {/* Linha decorativa */}
              <div className="flex justify-center">
                <div 
                  className="w-24 h-1 rounded-full" 
                  style={{ backgroundColor: '#c9a962' }} 
                />
              </div>

              {/* TEXTOS */}
              <div className="space-y-5 pt-2">
                <p
                  className="text-center mx-auto"
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: '18px',
                    fontWeight: 300,
                    color: '#1a1a1a',
                    lineHeight: 1.8,
                    letterSpacing: '0.01em',
                  }}
                >
                  Estudos recentes mostram que o Trans-Resveratrol atua como um{" "}
                  <strong>Probiótico de luxo</strong>. Ele não é apenas digerido; ele{" "}
                  <strong>alimenta as bactérias boas</strong> e inibe as bactérias patogênicas.
                </p>

                <p
                  className="text-center mx-auto"
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: '18px',
                    fontWeight: 300,
                    color: '#1a1a1a',
                    lineHeight: 1.8,
                    letterSpacing: '0.01em',
                  }}
                >
                  Um dos maiores vilões do envelhecimento moderno é o{" "}
                  <strong>Leaky Gut (Intestino Permeável)</strong>. Devido ao estresse 
                  e má alimentação, a parede do intestino fica "esburacada", 
                  permitindo que toxinas vazem para o sangue.
                </p>

                <p
                  className="text-center mx-auto"
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: '18px',
                    fontWeight: 300,
                    color: '#1a1a1a',
                    lineHeight: 1.8,
                    letterSpacing: '0.01em',
                  }}
                >
                  O RSV regula a <strong>integridade da barreira intestinal</strong> e 
                  afeta a microbiota. Com o intestino "blindado" e a flora equilibrada 
                  pelo resveratrol, a sinalização que sobe pelo <strong>Nervo Vago</strong> muda. 
                  Em vez de sinais de estresse, o cérebro recebe sinais de equilíbrio.
                </p>
              </div>

              {/* BOTÃO CTA */}
              <div className="flex justify-center pt-4">
                <a
                  href="#produtos"
                  className="w-full max-w-sm py-4 px-8 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 text-center cursor-pointer"
                  style={{
                    backgroundColor: '#1a1a1a',
                    color: '#c9a962',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    letterSpacing: '0.05em',
                  }}
                >
                  QUERO INTESTINO SAUDÁVEL
                </a>
              </div>
            </div>
          </Container>
        </div>

        {/* DESKTOP: Layout Split 50/50 */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 min-h-[600px] lg:min-h-[700px]">
            {/* COLUNA ESQUERDA - TEXTO */}
            <div 
              className="flex flex-col justify-center px-8 lg:px-16 xl:px-20 py-12"
              style={{ backgroundColor: '#faf9f7' }}
            >
              <div className="max-w-xl">
                {/* TÍTULO */}
                <h2
                  className="font-serif font-semibold tracking-tight leading-tight mb-6"
                  style={{
                    fontSize: 'clamp(36px, 4vw, 52px)',
                    color: '#000000',
                    fontFamily: "'Playfair Display', Georgia, serif",
                  }}
                >
                  O intestino{" "}
                  <span style={{ color: '#c9a962' }}>—</span>{" "}
                  <br />
                  Nosso "Segundo Cérebro"
                </h2>

                {/* Linha decorativa */}
                <div 
                  className="w-20 h-1 rounded-full mb-8" 
                  style={{ backgroundColor: '#c9a962' }} 
                />

                {/* TEXTOS */}
                <div className="space-y-5">
                  <p
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: 'clamp(17px, 1.5vw, 20px)',
                      fontWeight: 300,
                      color: '#1a1a1a',
                      lineHeight: 1.75,
                      letterSpacing: '0.01em',
                    }}
                  >
                    Estudos recentes mostram que o Trans-Resveratrol atua como um{" "}
                    <strong>Probiótico de luxo</strong>. Ele não é apenas digerido; ele{" "}
                    <strong>alimenta as bactérias boas</strong> e inibe as bactérias patogênicas.
                  </p>

                  <p
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: 'clamp(17px, 1.5vw, 20px)',
                      fontWeight: 300,
                      color: '#1a1a1a',
                      lineHeight: 1.75,
                      letterSpacing: '0.01em',
                    }}
                  >
                    Um dos maiores vilões do envelhecimento moderno é o{" "}
                    <strong>Leaky Gut (Intestino Permeável)</strong>. Devido ao estresse 
                    e má alimentação, a parede do intestino fica "esburacada", 
                    permitindo que toxinas vazem para o sangue.
                  </p>

                  <p
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: 'clamp(17px, 1.5vw, 20px)',
                      fontWeight: 300,
                      color: '#1a1a1a',
                      lineHeight: 1.75,
                      letterSpacing: '0.01em',
                    }}
                  >
                    O RSV regula a <strong>integridade da barreira intestinal</strong> e 
                    afeta a microbiota. Com o intestino "blindado" e a flora equilibrada 
                    pelo resveratrol, a sinalização que sobe pelo <strong>Nervo Vago</strong> muda.
                  </p>
                </div>

                {/* BOTÃO CTA */}
                <div className="pt-8">
                  <a
                    href="#produtos"
                    className="inline-block py-4 px-10 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 text-center cursor-pointer"
                    style={{
                      backgroundColor: '#1a1a1a',
                      color: '#c9a962',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    QUERO INTESTINO SAUDÁVEL
                  </a>
                </div>
              </div>
            </div>

            {/* COLUNA DIREITA - IMAGEM */}
            <div 
              className="relative overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, #f5f4f2 0%, #faf9f7 100%)'
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-12">
                <div className="relative w-full h-full max-w-lg">
                  <img
                    src="/resverabio-newbrain.png"
                    alt="Intestino - Nosso Segundo Cérebro"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Elemento decorativo sutil */}
              <div 
                className="absolute top-0 left-0 w-px h-full opacity-20"
                style={{ backgroundColor: '#c9a962' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

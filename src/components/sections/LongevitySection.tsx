/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║              BLOCO DE DESTAQUE: PELE & ANTienvelhecimento                ║
 * ║                    "UM IMPORTANTE ALIADO DA LONGEVIDADE"                 ║
 * ║                                                                          ║
 * ║  VERSÃO 2.1 - POLIMENTO FINAL:                                           ║
 * ║  ✅ Gap superior reduzido (imagens mais próximas do elemento acima)      ║
 * ║  ✅ Tipografia 100% padronizada com BeautySection                        ║
 * ║  ✅ Colágeno reinserido no blend                                         ║
 * ║  ✅ Citação científica corrigida (sem "25 mil estudos")                  ║
 * ║  ✅ Cores consistentes com o restante do site                            ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 * 
 * PADRONIZAÇÃO TIPOGRÁFICA (igual ao BeautySection):
 * - Título: clamp(32px, 5vw, 48px), #1a1a1a, Playfair Display
 * - Parágrafo: clamp(19px, 2.2vw, 22px), #2d2d2d, Inter weight 300
 * - Line-height: 1.85, max-width: 768px
 */

import { useEffect, useRef, useState } from 'react';
import { Container } from '../ui/Container';

// ═══════════════════════════════════════════════════════════════════════════
// ASSETS OFICIAIS RESVERABIO® - IMAGENS PREMIUM DO BLOCO PELE
// ═══════════════════════════════════════════════════════════════════════════
const longevityImages = [
  {
    src: '/resverabio-pelemulher1.png',
    alt: 'Mulher com pele radiante protegida do sol - RESVERABIO®',
  },
  {
    src: '/resverabio-uvas(2).png',
    alt: 'Uvas roxas - Fonte natural de Resveratrol para rejuvenescimento celular - RESVERABIO®',
  },
];

// Cores padronizadas (consistentes com BeautySection)
const COLORS = {
  textPrimary: '#1a1a1a',    // Títulos (igual BeautySection)
  textBody: '#2d2d2d',       // Corpo do texto (igual BeautySection)
  textSecondary: '#4a4a4a',  // Texto secundário
  accent: '#c9a962',         // Dourado (linha decorativa - igual BeautySection)
  primary: '#1E3A5F',        // Azul Navy (para destaques e CTAs)
  light: '#E8EEF4',          // Azul claro (backgrounds)
  black: '#1a1a1a',          // Preto para botões
  gold: '#c9a962',           // Dourado para texto de botões
} as const;

export function LongevitySection() {
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
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="longevity"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#ffffff' }}
    >
      {/* ═══════════════════════════════════════════════════════════════════
          GRID DE 2 IMAGENS - PADRÃO BEAUTYSECTION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          • Gap superior REDUZIDO (pt-10 md:pt-12) para aproximar do elemento acima
          • Aspect ratio: 4/3 (igual BeautySection)
          • Bordas: rounded-2xl (16px) - padrão luxo
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <Container className="pt-10 md:pt-12 lg:pt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {longevityImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-700 ease-out hover:shadow-2xl hover:scale-[1.02] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                aspectRatio: '4/3',
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8] flex items-center justify-center">
                        <span class="text-[#9a9a9a] font-medium text-sm tracking-wider">RESVERABIO® ${index + 1}</span>
                      </div>
                    `;
                  }
                }}
              />
              
              {/* Overlay sutil no hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 60%)`,
                }}
              />
            </div>
          ))}
        </div>
      </Container>

      {/* ═══════════════════════════════════════════════════════════════════
          CONTEÚDO TEXTO - PADRONIZADO COM BEAUTYSECTION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <Container className="py-12 md:py-16 lg:py-20">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          {/* ═══════════════════════════════════════════════════════════════
              TÍTULO - 100% PADRONIZADO COM BEAUTYSECTION
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              • fontSize: clamp(32px, 5vw, 48px) 
              • color: #1a1a1a (cinza escuro - igual BeautySection)
              • fontFamily: 'Playfair Display', Georgia, serif
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <h2
            className="text-center font-semibold tracking-tight leading-tight"
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: COLORS.textPrimary,
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            UM IMPORTANTE ALIADO DA LONGEVIDADE
          </h2>

          {/* Linha decorativa dourada - igual BeautySection */}
          <div className="mt-6 flex justify-center">
            <div
              className="w-24 h-1 rounded-full"
              style={{ backgroundColor: COLORS.accent }}
            />
          </div>

          {/* ═══════════════════════════════════════════════════════════════
              TEXTO PRINCIPAL - DUAS COLUNAS + COLÁGENO REINSERIDO
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <div className="mt-8 md:mt-12 lg:mt-14 max-w-3xl mx-auto">
            {/* Parágrafo único padronizado com BeautySection */}
            <p
              className="leading-relaxed text-center"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: 'clamp(19px, 2.2vw, 22px)',
                fontWeight: 300,
                color: COLORS.textBody,
                lineHeight: 1.85,
                letterSpacing: '0.01em',
              }}
            >
              O <strong style={{ fontWeight: 600, color: COLORS.textPrimary }}>RESVERABIO®</strong> não é 
              apenas Resveratrol. É um <em>blend de luxo exclusivo</em> que combina a potência do{' '}
              <strong style={{ fontWeight: 500, color: COLORS.textPrimary }}>Resveratrol puro</strong>,{' '}
              <strong style={{ fontWeight: 500, color: COLORS.textPrimary }}>Colágeno premium</strong>,{' '}
              <strong style={{ fontWeight: 500, color: COLORS.textPrimary }}>Ácido Hialurônico</strong> e{' '}
              <strong style={{ fontWeight: 500, color: COLORS.textPrimary }}>Niacina</strong>, 
              potencializados por um complexo de Vitaminas essenciais.
            </p>

            <p
              className="mt-6 leading-relaxed text-center"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: 'clamp(19px, 2.2vw, 22px)',
                fontWeight: 300,
                color: COLORS.textBody,
                lineHeight: 1.85,
                letterSpacing: '0.01em',
              }}
            >
              Esta fórmula rara atua na <strong style={{ fontWeight: 500, color: COLORS.textPrimary }}>manutenção 
              da juventude celular</strong>. O <strong style={{ fontWeight: 500, color: COLORS.textPrimary }}>Colágeno</strong>, 
              como principal ativo estrutural após o Resveratrol, restaura a firmeza e elasticidade da pele, 
              enquanto o Ácido Hialurônico proporciona <strong style={{ fontWeight: 500, color: COLORS.textPrimary }}>
              hidratação profunda</strong> e a Niacina promove a <strong style={{ fontWeight: 500, color: COLORS.textPrimary }}>
              uniformização do tom</strong>.
            </p>

            {/* Citação científica corrigida */}
            <div
              className="mt-8 p-6 rounded-lg text-center"
              style={{
                backgroundColor: `${COLORS.light}`,
                borderLeft: `3px solid ${COLORS.primary}`,
                borderRight: `3px solid ${COLORS.primary}`,
              }}
            >
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(17px, 1.8vw, 20px)',
                  fontStyle: 'italic',
                  color: COLORS.primary,
                  lineHeight: 1.7,
                }}
              >
                "Estudos científicos comprovam a sinergia desses ativos no{' '}
                <strong style={{ fontWeight: 600 }}>RESVERABIO®</strong> oferecendo resultados 
                superiores aos ativos isolados."
              </p>
            </div>

            {/* Frase de fechamento */}
            <p
              className="mt-8 leading-relaxed text-center"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: 'clamp(17px, 1.8vw, 20px)',
                fontWeight: 400,
                color: COLORS.textSecondary,
                lineHeight: 1.7,
              }}
            >
              Afinal, viver é bom.{' '}
              <strong style={{ fontWeight: 600, color: COLORS.textPrimary }}>
                Mas viver com pele jovem é muito melhor.
              </strong>
            </p>
          </div>

          {/* ═══════════════════════════════════════════════════════════════════
              CALL TO ACTION - BOTÃO PRETO COM TEXTO DOURADO (Padrão Luxo)
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <div className="mt-10 md:mt-12 flex justify-center px-6">
            <a
              href="https://mon.net.br/3u6oiu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-sm md:w-auto md:min-w-[320px] py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 text-center"
              style={{
                backgroundColor: COLORS.black,
                color: COLORS.gold,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                letterSpacing: '0.05em',
              }}
            >
              QUERO REJUVENESCER
            </a>
          </div>
        </div>
      </Container>

      {/* Divisor sutil inferior */}
      <div 
        className="h-[1px]" 
        style={{
          background: `linear-gradient(to right, transparent, ${COLORS.accent}30, transparent)`,
        }}
      />
    </section>
  );
}

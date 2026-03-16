/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║              SEÇÃO BIOCIÊNCIA - RESVERABIO®                              ║
 * ║      VERSÃO 1.0 | Credencial Científica | Fundo Roxo Escuro Luxo         ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 * 
 * OBJETIVO: Ponte emocional → científica. Justificar os benefícios visuais
 * (pele, cabelos) com fundamentação celular, sem perder a elegância.
 * 
 * PALETA:
 * - Fundo: Roxo escuro profundo (#1a0a2e) - mistério, ciência, luxo
 * - Destaques: Dourado metálico (#c9a962) - identidade Resverabio®
 * - Texto: Branco e off-white para contraste elegante
 * - Efeitos: Gradientes sutis, glassmorphism nos cards
 */

import { Container } from '../ui/Container';

// Cores de luxo padronizadas
const COLORS = {
  purpleDeep: '#1a0a2e',
  purpleMid: '#2d1b4e',
  gold: '#c9a962',
  goldLight: '#e0c78a',
  white: '#ffffff',
  whiteSoft: 'rgba(255, 255, 255, 0.85)',
  whiteMuted: 'rgba(255, 255, 255, 0.60)',
} as const;

export function BioScienceSection() {
  return (
    <section 
      className="relative w-full py-20 md:py-28 lg:py-36 overflow-hidden"
      style={{ 
        backgroundColor: COLORS.purpleDeep,
        background: `linear-gradient(180deg, ${COLORS.purpleDeep} 0%, ${COLORS.purpleMid} 50%, ${COLORS.purpleDeep} 100%)`
      }}
    >
      {/* ═══════════════════════════════════════════════════════════════════
          EFEITO DE LUZ SUTIL (Overlay radial)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(201, 169, 98, 0.08) 0%, transparent 60%)'
        }}
      />

      {/* ═══════════════════════════════════════════════════════════════════
          PARTÍCULAS DECORATIVAS (Estrelas/Luzes sutis)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-pulse"
            style={{
              backgroundColor: COLORS.gold,
              opacity: 0.3 + (i * 0.1),
              top: `${15 + (i * 12)}%`,
              left: `${10 + (i * 15)}%`,
              animationDelay: `${i * 0.5}s`,
              boxShadow: `0 0 10px ${COLORS.gold}`,
            }}
          />
        ))}
      </div>

      <Container className="relative z-10">
        {/* ═══════════════════════════════════════════════════════════════════
            FRASE DE TRANSIÇÃO EMOCIONAL → CIENTÍFICA
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="text-center mb-10 md:mb-14">
          <p 
            className="text-lg md:text-xl lg:text-2xl font-light italic"
            style={{ 
              color: COLORS.whiteSoft,
              fontFamily: "'Playfair Display', Georgia, serif",
              letterSpacing: '0.02em',
            }}
          >
            "Você pode estar se perguntando:{' '}
            <span style={{ color: COLORS.gold }}>como</span>{' '}
            isso é possível?"
          </p>
          <p 
            className="mt-3 text-base md:text-lg"
            style={{ color: COLORS.whiteMuted }}
          >
            A resposta está na proteção profunda das suas células
          </p>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            IMAGEM BIOQUÍMICA COM MOLDURA DE LUXO
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Borda dourada sutil com glassmorphism
            • Sombra profunda para destacar do fundo
            • Efeito de brilho na borda ao passar o mouse
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div 
          className="relative mx-auto max-w-5xl group"
          style={{
            borderRadius: '20px',
            padding: '2px',
            background: `linear-gradient(135deg, ${COLORS.gold}40 0%, ${COLORS.gold}10 50%, ${COLORS.gold}40 100%)`,
          }}
        >
          {/* Efeito de brilho na borda */}
          <div 
            className="absolute -inset-1 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"
            style={{
              background: `linear-gradient(135deg, ${COLORS.gold}60 0%, transparent 50%, ${COLORS.gold}60 100%)`,
            }}
          />
          
          {/* Container da imagem */}
          <div 
            className="relative rounded-[18px] overflow-hidden"
            style={{
              backgroundColor: COLORS.purpleMid,
              boxShadow: `0 25px 80px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
              minHeight: '400px',
            }}
          >
            <img 
              src="/nivel-1-epicentro-celular.png" 
              alt="Nível 1: O Epicentro Celular - Proteção e Renovação do DNA"
              className="w-full h-auto block relative z-10"
              style={{ display: 'block' }}
            />
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            COPY DE PONTE EMOCIONAL
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Conecta a ciência abstrata aos benefícios tangíveis (pele/cabelo)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="mt-12 md:mt-16 text-center max-w-3xl mx-auto">
          <p 
            className="text-lg md:text-xl leading-relaxed"
            style={{ 
              color: COLORS.whiteSoft,
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            Enquanto outros produtos agem apenas na superfície, o{' '}
            <span style={{ color: COLORS.gold, fontWeight: 500 }}>Resverabio®</span>{' '}
            trabalha no{' '}
            <strong style={{ color: COLORS.white }}>epicentro do envelhecimento</strong>{' '}
            — preservando a juventude desde a origem.
          </p>
          
          <p 
            className="mt-6 text-base md:text-lg"
            style={{ color: COLORS.whiteMuted }}
          >
            É essa proteção celular profunda que permite a pele recuperar o viço 
            e os cabelos reterem sua força.
          </p>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            DIVISOR DECORATIVO COM ÍCONE
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="mt-12 md:mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-16 md:w-24" style={{ background: `linear-gradient(90deg, transparent, ${COLORS.gold}60)` }} />
          
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ 
              backgroundColor: 'rgba(201, 169, 98, 0.15)',
              border: `1px solid ${COLORS.gold}40`,
            }}
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke={COLORS.gold} 
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
              />
            </svg>
          </div>
          
          <div className="h-px w-16 md:w-24" style={{ background: `linear-gradient(90deg, ${COLORS.gold}60, transparent)` }} />
        </div>
      </Container>
    </section>
  );
}

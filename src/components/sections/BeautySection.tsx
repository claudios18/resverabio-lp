/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║                    BLOCO 3: BEAUTY SECTION - RESVERABIO®                 ║
 * ║             RESTAURAÇÃO DEFINITIVA | DESIGN DE LUXO E AGENTIC UI         ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { useRef } from 'react';
import { Container } from '../ui/Container';

const COLORS = {
  black: '#1a1a1a',
  gold: '#c9a962',
} as const;

export function BeautySection() {
  const sectionRef = useRef<HTMLElement>(null);

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
      className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#faf9f7' }}
    >
      {/* GLOW DOURADO DE FUNDO - ESTÉTICA PREMIUM */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c9a962]/5 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        {/* TÍTULO PRINCIPAL - COM CLAMP PARA MOBILE PERFEITO */}
        <div className="text-center mb-16 md:mb-20">
          <h2 
            className="font-serif font-semibold tracking-tight leading-tight text-black"
            style={{ 
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontFamily: "'Playfair Display', Georgia, serif"
            }}
          >
            A SINERGIA DO BLEND RESVERABIO
            <span style={{ color: '#c9a962', verticalAlign: 'super', fontSize: '0.4em' }}>®</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl italic font-serif text-[#c9a962]">
            Beleza que Vem de Dentro
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-[2px] bg-[#c9a962] rounded-full" />
          </div>
        </div>

        {/* CONTEÚDO: IMAGEM + TEXTO (RESOLVE O DESLOCAMENTO) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          
          {/* LÓGICA DE IMAGEM RESPONSIVA */}
          <div className="relative order-2 lg:order-1 w-full max-w-[550px] mx-auto">
            {/* Desktop: 16:9 */}
            <div className="hidden lg:block aspect-video rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5">
              <img 
                src="/resverabio-belezaquevemdedentro.png" 
                alt="Sinergia Desktop" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Mobile: 1:1 com Fundo Premium (lm1) */}
            <div className="block lg:hidden aspect-square rounded-2xl shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2d1f3d] to-[#1a0f1f]" />
              <img 
                src="/resverabio-lm1.png" 
                alt="Sinergia Mobile" 
                className="relative z-10 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* COLUNA DE TEXTO EXPLICATIVO */}
          <div className="order-1 lg:order-2 space-y-8">
            <p 
              className="leading-relaxed text-black font-light"
              style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.8 }}
            >
              A potência do Resveratrol puro é elevada por uma <strong className="text-[#c9a962] font-semibold">sinergia inédita de ativos premium</strong>. 
              Cada componente foi selecionado para renovação sistêmica.
            </p>

            {/* Lista de Componentes */}
            <div className="space-y-4">
              {sinergiaItems.map((item, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-5 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl border border-[#c9a962]/10 bg-[#c9a962]/5 group"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-[#c9a962] text-black group-hover:scale-110 transition-transform">
                    {item.numero}
                  </span>
                  <div>
                    <h4 className="font-serif font-semibold text-black">{item.titulo}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SEÇÃO DE INVESTIMENTO - RESTAURADA COM LÓGICA DE LUXO */}
        <div 
          className="relative rounded-3xl mx-auto max-w-4xl p-1 md:p-px"
          style={{ background: 'linear-gradient(135deg, #c9a962 0%, #1a1a1a 100%)' }}
        >
          <div 
            className="relative rounded-[22px] px-6 py-12 md:py-16 text-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)' }}
          >
            {/* Glow dourado radial */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#c9a962] via-transparent to-transparent" />

            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.3em] mb-4 text-[#c9a962]/70">Assuma o Controle da Sua Biologia</p>
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">O Investimento na Longevidade</h3>
              
              <div className="mb-10">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <span className="text-white/30 line-through text-xl">R$ 297</span>
                  <span className="text-5xl md:text-7xl font-serif text-[#c9a962] font-bold">R$ 187</span>
                </div>
                <p className="text-[#c9a962]/80 text-lg">ou 12x de <span className="font-bold">R$ 18,87</span></p>
              </div>

              {/* BOTÕES CTA RESPONSIVOS */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <a
                  href="#produtos"
                  className="w-full sm:w-auto px-10 py-5 rounded-xl font-bold text-lg bg-[#c9a962] text-black shadow-[0_10px_40px_rgba(201,169,98,0.3)] hover:scale-105 transition-all"
                >
                  QUERO EXPERIMENTAR
                </a>
                <a
                  href="#produtos"
                  className="w-full sm:w-auto px-10 py-5 rounded-xl font-bold text-lg border-2 border-[#c9a962] text-[#c9a962] hover:bg-[#c9a962]/10 transition-all"
                >
                  GARANTIR MEU BLEND RESVERABIO®
                </a>
              </div>

              {/* Selos de garantia */}
              <div className="mt-12 flex flex-wrap justify-center gap-6 text-[10px] md:text-xs uppercase tracking-widest text-white/40">
                <span>✓ 60 Cápsulas (500mg)</span>
                <span>✓ Frete Grátis</span>
                <span>✓ 30 Dias de Garantia</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║       BLOCO: INTESTINO - NOSSO SEGUNDO CÉREBRO + BANNER RESVERABIO®     ║
 * ║                                                                          ║
 *  VERSÃO 6.0 - TAILWIND CSS PURO, SEM HOOKS:                               ║
 *  • Mobile: flex-col (pilha vertical)                                      ║
 *  • Desktop: lg:flex-row (horizontal)                                      ║
 *  • Moldura dourada: border-2 border-[#c9a962]                             ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { Container } from '../ui/Container';

export function PrebioticSection() {
  return (
    <section id="prebiotico" className="relative w-full overflow-hidden bg-white">
      
      {/* ==========================================
          PARTE 1: INTESTINO (NEWBRAIN)
      ========================================== */}
      <div className="w-full">
        {/* Mobile */}
        <div className="flex flex-col lg:hidden">
          <div className="w-full px-4 py-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-b from-white to-gray-50">
              <img
                src="/resverabio-newbrain.png"
                alt="Intestino - Nosso Segundo Cérebro"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>

          <Container className="py-8">
            <div className="flex flex-col items-center space-y-6">
              <h2 
                className="font-serif font-semibold text-center text-[#000000]" 
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(32px, 8vw, 42px)' }}
              >
                O intestino <span className="text-[#c9a962]">—</span> Nosso "Segundo Cérebro"
              </h2>

              <div className="w-24 h-1 rounded-full bg-[#c9a962]" />

              <div className="space-y-5 text-center">
                <p className="text-[#1a1a1a] text-lg font-light leading-relaxed" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                  Estudos recentes mostram que o Trans-Resveratrol atua como um <strong>Probiótico de luxo</strong>. Ele não é apenas digerido; ele <strong>alimenta as bactérias boas</strong> e inibe as bactérias patogênicas.
                </p>
                <p className="text-[#1a1a1a] text-lg font-light leading-relaxed" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                  Um dos maiores vilões do envelhecimento moderno é o <strong>Leaky Gut (Intestino Permeável)</strong>. Devido ao estresse e má alimentação, a parede do intestino fica "esburacada", permitindo que toxinas vazem para o sangue.
                </p>
                <p className="text-[#1a1a1a] text-lg font-light leading-relaxed" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                  O RSV regula a <strong>integridade da barreira intestinal</strong> e afeta a microbiota. Com o intestino "blindado" e a flora equilibrada pelo resveratrol, a sinalização que sobe pelo <strong>Nervo Vago</strong> muda. Em vez de sinais de estresse, o cérebro recebe sinais de equilíbrio.
                </p>
              </div>

              <a
                href="#produtos"
                className="w-full max-w-sm py-4 px-8 rounded-xl font-bold text-base text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 bg-[#1a1a1a] text-[#c9a962] shadow-lg"
                style={{ letterSpacing: '0.05em' }}
              >
                QUERO INTESTINO SAUDÁVEL
              </a>
            </div>
          </Container>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-2 min-h-[600px] xl:min-h-[700px]">
          <div className="flex flex-col justify-center px-8 xl:px-16 py-12 bg-white">
            <div className="max-w-xl">
              <h2 
                className="font-serif font-semibold text-[#000000] mb-6" 
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(36px, 4vw, 52px)' }}
              >
                O intestino <span className="text-[#c9a962]">—</span><br />Nosso "Segundo Cérebro"
              </h2>

              <div className="w-20 h-1 rounded-full bg-[#c9a962] mb-8" />

              <div className="space-y-5">
                <p className="text-[#1a1a1a] font-light leading-relaxed" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(17px, 1.5vw, 20px)' }}>
                  Estudos recentes mostram que o Trans-Resveratrol atua como um <strong>Probiótico de luxo</strong>. Ele não é apenas digerido; ele <strong>alimenta as bactérias boas</strong> e inibe as bactérias patogênicas.
                </p>
                <p className="text-[#1a1a1a] font-light leading-relaxed" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(17px, 1.5vw, 20px)' }}>
                  Um dos maiores vilões do envelhecimento moderno é o <strong>Leaky Gut (Intestino Permeável)</strong>. Devido ao estresse e má alimentação, a parede do intestino fica "esburacada", permitindo que toxinas vazem para o sangue.
                </p>
                <p className="text-[#1a1a1a] font-light leading-relaxed" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(17px, 1.5vw, 20px)' }}>
                  O RSV regula a <strong>integridade da barreira intestinal</strong> e afeta a microbiota. Com o intestino "blindado" e a flora equilibrada pelo resveratrol, a sinalização que sobe pelo <strong>Nervo Vago</strong> muda.
                </p>
              </div>

              <a
                href="#produtos"
                className="inline-block mt-8 py-4 px-10 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 bg-[#1a1a1a] text-[#c9a962] shadow-lg"
                style={{ letterSpacing: '0.05em' }}
              >
                QUERO INTESTINO SAUDÁVEL
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center p-8 xl:p-12 bg-gradient-to-br from-gray-50 to-white">
            <img
              src="/resverabio-newbrain.png"
              alt="Intestino - Nosso Segundo Cérebro"
              className="w-full h-full max-w-lg object-contain"
              loading="lazy"
            />
            <div className="absolute top-0 left-0 w-px h-full bg-[#c9a962] opacity-20" />
          </div>
        </div>
      </div>

      {/* ==========================================
          PARTE 2: BANNER RESVERABIO®
          Mobile-First: flex-col (pilha)
          Desktop: lg:flex-row (lado a lado)
      ========================================== */}
      <div className="w-full py-8 lg:py-16 px-4 lg:px-8">
        <Container>
          {/* Container principal com moldura dourada */}
          <div className="max-w-6xl mx-auto rounded-xl lg:rounded-2xl overflow-hidden border-2 border-[#c9a962] bg-white shadow-xl">
            
            {/* 
              REGRA DE OURO DA RESPONSIVIDADE:
              • Mobile: flex-col (pilha vertical - imagem em cima, texto embaixo)
              • Desktop: lg:flex-row (horizontal - imagem esquerda, texto direita)
            */}
            <div className="flex flex-col lg:flex-row">
              
              {/* IMAGEM DA MULHER */}
              <div className="w-full lg:w-2/5 relative">
                <img
                  src="/resverabio-bannerend.jpg"
                  alt="Mulher segurando Resverabio"
                  className="w-full h-64 lg:h-full object-cover object-top lg:object-center"
                  style={{ minHeight: '300px' }}
                  loading="lazy"
                />
              </div>
              
              {/* CONTEÚDO TEXTUAL */}
              <div className="w-full lg:w-3/5 p-6 lg:p-10 xl:p-14 flex flex-col justify-center">
                
                {/* Título RESVERABIO® */}
                <h3 
                  className="font-serif font-semibold text-[#000000] text-center lg:text-left mb-4 lg:mb-6" 
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(28px, 4vw, 42px)' }}
                >
                  RESVERABIO<sup className="text-base lg:text-lg">®</sup>
                </h3>
                
                {/* Textos descritivos */}
                <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                  <p 
                    className="text-[#4a4a4a] text-sm lg:text-base leading-relaxed text-center lg:text-left" 
                    style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                  >
                    ATRAVÉS DO TRANS-RESVERATROL O RESVERABIO<sup>®</sup> TRANSCENDE A SUPLEMENTAÇÃO COMUM PARA ATUAR DIRETAMENTE NA RENOVAÇÃO DOS TELÔMEROS E NA PRESERVAÇÃO DA INTEGRIDADE DO SEU DNA.
                  </p>
                  <p 
                    className="text-[#4a4a4a] text-sm lg:text-base leading-relaxed text-center lg:text-left" 
                    style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                  >
                    NOSSA FÓRMULA PREMIUM FUNDE O PODER ANTIOXIDANTE À BIOTECNOLOGIA DE REJUVENESCIMENTO CELULAR, PROTEGENDO SUA SAÚDE.
                  </p>
                  <p 
                    className="text-[#000000] font-medium text-sm lg:text-base text-center lg:text-left" 
                    style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                  >
                    REJUVENESCIMENTO E BELEZA SÃO BÔNUS.
                  </p>
                </div>

                {/* 3 PILARES */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 pt-4 lg:pt-6 border-t border-gray-200">
                  
                  {/* EXPERIÊNCIA */}
                  <div className="text-center lg:text-left">
                    <h4 
                      className="font-semibold text-[#000000] mb-1 lg:mb-2 text-sm lg:text-xs tracking-wider" 
                      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                    >
                      EXPERIÊNCIA
                    </h4>
                    <p 
                      className="text-[#666666] text-xs lg:text-[11px] leading-relaxed lg:leading-snug" 
                      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                    >
                      SINTA A TRANSFORMAÇÃO EM CADA DOSE. ELEVAMOS SUA ROTINA DE AUTOCUIDADO A UM NOVO PATAMAR DE SOFISTICAÇÃO E BEM-ESTAR CELULAR.
                    </p>
                  </div>

                  {/* QUALIDADE */}
                  <div className="text-center lg:text-left">
                    <h4 
                      className="font-semibold text-[#000000] mb-1 lg:mb-2 text-sm lg:text-xs tracking-wider" 
                      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                    >
                      QUALIDADE
                    </h4>
                    <p 
                      className="text-[#666666] text-xs lg:text-[11px] leading-relaxed lg:leading-snug" 
                      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                    >
                      PUREZA ABSOLUTA EM CADA CÁPSULA. UTILIZAMOS TRANS-RESVERATROL 99% PURO, DESENVOLVIDO SOB OS MAIS RIGOROSOS PADRÕES CIENTÍFICOS INTERNACIONAIS
                    </p>
                  </div>

                  {/* ATENDIMENTO */}
                  <div className="text-center lg:text-left">
                    <h4 
                      className="font-semibold text-[#000000] mb-1 lg:mb-2 text-sm lg:text-xs tracking-wider" 
                      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                    >
                      ATENDIMENTO
                    </h4>
                    <p 
                      className="text-[#666666] text-xs lg:text-[11px] leading-relaxed lg:leading-snug" 
                      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                    >
                      EXCLUSIVIDADE EM CADA DETALHE. NOSSA EQUIPE ESTÁ PRONTA PARA OFERECER UM SUPORTE DEDICADO, GARANTINDO QUE SUA JORNADA DE LONGEVIDADE SEJA IMPECÁVEL
                    </p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </Container>
      </div>
    </section>
  );
}

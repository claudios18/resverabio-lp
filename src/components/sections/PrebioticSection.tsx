/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║       BLOCO: INTESTINO - NOSSO SEGUNDO CÉREBRO                          ║
 * ║                                                                          ║
 *  VERSÃO 5.0 - TAILWIND PURO, SEM HOOKS:                                   ║
 *  • Mobile: flex-col (pilha vertical)                                      ║
 *  • Desktop: lg:flex-row (horizontal)                                      ║
 *  • Asset: resverabio-newbrain.png + banner-mulher.jpg                     ║
 *  • Moldura dourada: border-2 border-[#c9a962]                             ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { Container } from '../ui/Container';

export function PrebioticSection() {
  return (
    <section id="prebiotico" className="relative w-full overflow-hidden bg-[#faf9f7]">
      
      {/* ==========================================
          SEÇÃO 1: INTESTINO (NEWBRAIN)
          Mobile: Imagem topo → Texto → Botão
          Desktop: Texto esquerda | Imagem direita
      ========================================== */}
      <div className="w-full">
        {/* Mobile */}
        <div className="flex flex-col lg:hidden">
          {/* Imagem Newbrain */}
          <div className="w-full px-4 py-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-b from-[#faf9f7] to-[#f5f4f2]">
              <img
                src="/resverabio-newbrain.png"
                alt="Intestino - Nosso Segundo Cérebro"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Texto */}
          <Container className="py-8">
            <div className="flex flex-col items-center space-y-6">
              <h2 className="font-serif font-semibold text-center text-[#000000]" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(32px, 8vw, 42px)' }}>
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
          {/* Texto */}
          <div className="flex flex-col justify-center px-8 xl:px-16 py-12 bg-[#faf9f7]">
            <div className="max-w-xl">
              <h2 className="font-serif font-semibold text-[#000000] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(36px, 4vw, 52px)' }}>
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

          {/* Imagem */}
          <div className="relative flex items-center justify-center p-8 xl:p-12 bg-gradient-to-br from-[#f5f4f2] to-[#faf9f7]">
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
          SEÇÃO 2: BANNER MULHER (RESVERABIO®)
          Moldura dourada + Conteúdo responsivo
      ========================================== */}
      <div className="w-full py-8 lg:py-16 px-4 lg:px-8">
        <Container>
          <div className="max-w-6xl mx-auto rounded-xl lg:rounded-2xl overflow-hidden border-2 border-[#c9a962] bg-white shadow-xl">
            
            {/* Mobile: Flex-col (pilha) */}
            <div className="flex flex-col lg:hidden">
              {/* Imagem */}
              <div className="w-full">
                <img
                  src="/banner-mulher.jpg"
                  alt="Mulher segurando Resverabio"
                  className="w-full h-64 object-cover object-top"
                  loading="lazy"
                />
              </div>
              
              {/* Conteúdo */}
              <div className="p-5 space-y-4">
                <h3 className="font-serif font-semibold text-2xl text-[#000000] text-center" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  RESVERABIO<sup className="text-sm">®</sup>
                </h3>
                
                <div className="space-y-3 text-sm text-[#4a4a4a] text-center" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                  <p className="leading-relaxed">
                    ATRAVÉS DO TRANS-RESVERATROL, O RESVERABIO<sup>®</sup> TRANSCENDE A SUPLEMENTAÇÃO COMUM PARA ATUAR DIRETAMENTE NA RENOVAÇÃO DOS TELÔMEROS E NA PRESERVAÇÃO DA INTEGRIDADE DO SEU DNA.
                  </p>
                  <p className="leading-relaxed">
                    NOSSA FÓRMULA PREMIUM FUNDE O PODER ANTIOXIDANTE E A BIOTECNOLOGIA DE REJUVENESCIMENTO CELULAR, PROTEGENDO SUA SAÚDE.
                  </p>
                  <p className="font-medium text-[#000000]">
                    REJUVENESCIMENTO E BELEZA SÃO BÔNUS.
                  </p>
                </div>

                {/* 3 Pilares */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <h4 className="font-semibold text-[10px] text-[#000000] mb-1 tracking-wide" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>EXPERIÊNCIA</h4>
                    <p className="text-[9px] text-[#666666] leading-tight">SAIA DA TRANSFORMAÇÃO EM CADA DOSE. ELEVAMOS SUA ROTINA.</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-[10px] text-[#000000] mb-1 tracking-wide" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>QUALIDADE</h4>
                    <p className="text-[9px] text-[#666666] leading-tight">PUREZA ABSOLUTA EM CADA CÁPSULA. POTÊNCIA MÁXIMA.</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-[10px] text-[#000000] mb-1 tracking-wide" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>ATENDIMENTO</h4>
                    <p className="text-[9px] text-[#666666] leading-tight">EXCLUSIVIDADE EM CADA DETALHE. SUPORTE DEDICADO.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Flex-row (horizontal) */}
            <div className="hidden lg:flex lg:flex-row">
              {/* Imagem - Esquerda */}
              <div className="w-2/5 relative">
                <img
                  src="/banner-mulher.jpg"
                  alt="Mulher segurando Resverabio"
                  className="w-full h-full object-cover"
                  style={{ minHeight: '450px' }}
                  loading="lazy"
                />
              </div>
              
              {/* Conteúdo - Direita */}
              <div className="w-3/5 p-10 xl:p-14 flex flex-col justify-center">
                <h3 className="font-serif font-semibold text-3xl xl:text-4xl text-[#000000] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  RESVERABIO<sup className="text-lg">®</sup>
                </h3>
                
                <div className="space-y-4 mb-8 text-sm xl:text-base text-[#4a4a4a]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                  <p className="leading-relaxed">
                    ATRAVÉS DO TRANS-RESVERATROL, O RESVERABIO<sup>®</sup> TRANSCENDE A SUPLEMENTAÇÃO COMUM PARA ATUAR DIRETAMENTE NA RENOVAÇÃO DOS TELÔMEROS E NA PRESERVAÇÃO DA INTEGRIDADE DO SEU DNA.
                  </p>
                  <p className="leading-relaxed">
                    NOSSA FÓRMULA PREMIUM FUNDE O PODER ANTIOXIDANTE E A BIOTECNOLOGIA DE REJUVENESCIMENTO CELULAR, PROTEGENDO SUA SAÚDE.
                  </p>
                  <p className="font-medium text-[#000000]">
                    REJUVENESCIMENTO E BELEZA SÃO BÔNUS.
                  </p>
                </div>

                {/* 3 Pilares */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <h4 className="font-semibold text-xs text-[#000000] mb-2 tracking-wider" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>EXPERIÊNCIA</h4>
                    <p className="text-xs text-[#666666] leading-snug">SAIA DA TRANSFORMAÇÃO EM CADA DOSE. ELEVAMOS SUA ROTINA DE AUTOCUIDADO.</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-xs text-[#000000] mb-2 tracking-wider" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>QUALIDADE</h4>
                    <p className="text-xs text-[#666666] leading-snug">PUREZA ABSOLUTA EM CADA CÁPSULA. POTÊNCIA MÁXIMA COM TRANS-RESVERATROL.</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-xs text-[#000000] mb-2 tracking-wider" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>ATENDIMENTO</h4>
                    <p className="text-xs text-[#666666] leading-snug">EXCLUSIVIDADE EM CADA DETALHE. EQUIPE PRONTA PARA OFERECER SUPORTE.</p>
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

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║       BLOCO: INTESTINO - NOSSO SEGUNDO CÉREBRO                          ║
 * ║                                                                          ║
 *  VERSÃO 4.0 - LAYOUT RESPONSIVO COM BANNER REFATORADO:                    ║
 *  • Banner Mulher: HTML/CSS responsivo (não imagem)                        ║
 *  • Desktop: Texto ESQUERDA | Imagem DIREITA                               ║
 *  • Mobile: Imagem TOPO → Texto BAIXO                                      ║
 *  • Moldura dourada em todo o bloco                                        ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { Container } from '../ui/Container';

export function PrebioticSection() {
  return (
    <section
      id="prebiotico"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#faf9f7' }}
    >
      {/* 
        ═══════════════════════════════════════════════════════════════════
        SPLIT SECTION: INTESTINO - NOSSO SEGUNDO CÉREBRO
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="relative w-full">
        {/* MOBILE: Layout empilhado */}
        <div className="block md:hidden">
          {/* IMAGEM NEWBRAIN - TOPO */}
          <div 
            className="relative w-full overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #faf9f7 0%, #f5f4f2 100%)' }}
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

          {/* TEXTO */}
          <Container className="py-8">
            <div className="flex flex-col space-y-6">
              <h2
                className="font-serif font-semibold tracking-tight leading-tight text-center"
                style={{
                  fontSize: 'clamp(32px, 8vw, 42px)',
                  color: '#000000',
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}
              >
                O intestino <span style={{ color: '#c9a962' }}>—</span> Nosso "Segundo Cérebro"
              </h2>

              <div className="flex justify-center">
                <div className="w-24 h-1 rounded-full" style={{ backgroundColor: '#c9a962' }} />
              </div>

              <div className="space-y-5 pt-2">
                <p className="text-center mx-auto" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '18px', fontWeight: 300, color: '#1a1a1a', lineHeight: 1.8 }}>
                  Estudos recentes mostram que o Trans-Resveratrol atua como um <strong>Probiótico de luxo</strong>. Ele não é apenas digerido; ele <strong>alimenta as bactérias boas</strong> e inibe as bactérias patogênicas.
                </p>
                <p className="text-center mx-auto" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '18px', fontWeight: 300, color: '#1a1a1a', lineHeight: 1.8 }}>
                  Um dos maiores vilões do envelhecimento moderno é o <strong>Leaky Gut (Intestino Permeável)</strong>. Devido ao estresse e má alimentação, a parede do intestino fica "esburacada", permitindo que toxinas vazem para o sangue.
                </p>
                <p className="text-center mx-auto" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '18px', fontWeight: 300, color: '#1a1a1a', lineHeight: 1.8 }}>
                  O RSV regula a <strong>integridade da barreira intestinal</strong> e afeta a microbiota. Com o intestino "blindado" e a flora equilibrada pelo resveratrol, a sinalização que sobe pelo <strong>Nervo Vago</strong> muda. Em vez de sinais de estresse, o cérebro recebe sinais de equilíbrio.
                </p>
              </div>

              {/* BOTÃO CTA */}
              <div className="flex justify-center pt-4">
                <a
                  href="#produtos"
                  className="w-full max-w-sm py-4 px-8 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 text-center cursor-pointer"
                  style={{ backgroundColor: '#1a1a1a', color: '#c9a962', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)', letterSpacing: '0.05em' }}
                >
                  QUERO INTESTINO SAUDÁVEL
                </a>
              </div>
            </div>
          </Container>

          {/* BANNER MULHER - MOBILE - REFATORADO COM HTML/CSS */}
          <div className="px-4 pb-8">
            <div 
              className="relative rounded-xl overflow-hidden"
              style={{ border: '2px solid #c9a962', backgroundColor: '#ffffff' }}
            >
              {/* Container Flex Mobile: Imagem topo, texto abaixo */}
              <div className="flex flex-col">
                {/* Imagem da Mulher - Topo no mobile */}
                <div className="w-full">
                  <img
                    src="/banner-mulher.jpg"
                    alt="Mulher segurando Resverabio"
                    className="w-full h-auto object-cover"
                    style={{ maxHeight: '300px', objectPosition: 'center top' }}
                    loading="lazy"
                  />
                </div>
                
                {/* Conteúdo Textual - Abaixo no mobile */}
                <div className="p-5 space-y-4">
                  {/* Título */}
                  <h3 
                    className="text-center font-serif font-semibold"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '24px', color: '#000000' }}
                  >
                    RESVERABIO<sup style={{ fontSize: '14px' }}>®</sup>
                  </h3>
                  
                  {/* Texto descritivo */}
                  <p 
                    className="text-center text-sm"
                    style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#4a4a4a', lineHeight: 1.6 }}
                  >
                    ATRAVÉS DO TRANS-RESVERATROL, O RESVERABIO<sup>®</sup> TRANSCENDE A SUPLEMENTAÇÃO COMUM PARA ATUAR DIRETAMENTE NA RENOVAÇÃO DOS TELÔMEROS E NA PRESERVAÇÃO DA INTEGRIDADE DO SEU DNA.
                  </p>
                  <p 
                    className="text-center text-sm"
                    style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#4a4a4a', lineHeight: 1.6 }}
                  >
                    NOSSA FÓRMULA PREMIUM FUNDE O PODER ANTIOXIDANTE E A BIOTECNOLOGIA DE REJUVENESCIMENTO CELULAR, PROTEGENDO SUA SAÚDE.
                  </p>
                  <p 
                    className="text-center text-sm font-medium"
                    style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#000000' }}
                  >
                    REJUVENESCIMENTO E BELEZA SÃO BÔNUS.
                  </p>

                  {/* Três Pilares */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t" style={{ borderColor: '#e5e5e5' }}>
                    {/* EXPERIÊNCIA */}
                    <div className="text-center">
                      <h4 
                        className="font-semibold text-xs mb-1"
                        style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#000000', letterSpacing: '0.05em' }}
                      >
                        EXPERIÊNCIA
                      </h4>
                      <p 
                        className="text-[10px] leading-tight"
                        style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#666666' }}
                      >
                        SAIA DA TRANSFORMAÇÃO EM CADA DOSE. ELEVAMOS SUA ROTINA DE AUTOCUIDADO A UM NOVO PATAMAR DE SOFISTICAÇÃO E BEM-ESTAR.
                      </p>
                    </div>

                    {/* QUALIDADE */}
                    <div className="text-center">
                      <h4 
                        className="font-semibold text-xs mb-1"
                        style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#000000', letterSpacing: '0.05em' }}
                      >
                        QUALIDADE
                      </h4>
                      <p 
                        className="text-[10px] leading-tight"
                        style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#666666' }}
                      >
                        PUREZA ABSOLUTA EM CADA CÁPSULA. POTÊNCIA MÁXIMA COM TRANS-RESVERATROL PURO.
                      </p>
                    </div>

                    {/* ATENDIMENTO */}
                    <div className="text-center">
                      <h4 
                        className="font-semibold text-xs mb-1"
                        style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#000000', letterSpacing: '0.05em' }}
                      >
                        ATENDIMENTO
                      </h4>
                      <p 
                        className="text-[10px] leading-tight"
                        style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#666666' }}
                      >
                        EXCLUSIVIDADE EM CADA DETALHE. NOSSA EQUIPE ESTÁ PRONTA PARA OFERECER SUPORTE DEDICADO.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                <h2
                  className="font-serif font-semibold tracking-tight leading-tight mb-6"
                  style={{ fontSize: 'clamp(36px, 4vw, 52px)', color: '#000000', fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  O intestino <span style={{ color: '#c9a962' }}>—</span><br />Nosso "Segundo Cérebro"
                </h2>

                <div className="w-20 h-1 rounded-full mb-8" style={{ backgroundColor: '#c9a962' }} />

                <div className="space-y-5">
                  <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(17px, 1.5vw, 20px)', fontWeight: 300, color: '#1a1a1a', lineHeight: 1.75 }}>
                    Estudos recentes mostram que o Trans-Resveratrol atua como um <strong>Probiótico de luxo</strong>. Ele não é apenas digerido; ele <strong>alimenta as bactérias boas</strong> e inibe as bactérias patogênicas.
                  </p>
                  <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(17px, 1.5vw, 20px)', fontWeight: 300, color: '#1a1a1a', lineHeight: 1.75 }}>
                    Um dos maiores vilões do envelhecimento moderno é o <strong>Leaky Gut (Intestino Permeável)</strong>. Devido ao estresse e má alimentação, a parede do intestino fica "esburacada", permitindo que toxinas vazem para o sangue.
                  </p>
                  <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(17px, 1.5vw, 20px)', fontWeight: 300, color: '#1a1a1a', lineHeight: 1.75 }}>
                    O RSV regula a <strong>integridade da barreira intestinal</strong> e afeta a microbiota. Com o intestino "blindado" e a flora equilibrada pelo resveratrol, a sinalização que sobe pelo <strong>Nervo Vago</strong> muda.
                  </p>
                </div>

                <div className="pt-8">
                  <a
                    href="#produtos"
                    className="inline-block py-4 px-10 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 text-center cursor-pointer"
                    style={{ backgroundColor: '#1a1a1a', color: '#c9a962', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)', letterSpacing: '0.05em' }}
                  >
                    QUERO INTESTINO SAUDÁVEL
                  </a>
                </div>
              </div>
            </div>

            {/* COLUNA DIREITA - IMAGEM NEWBRAIN */}
            <div 
              className="relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #f5f4f2 0%, #faf9f7 100%)' }}
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
              <div className="absolute top-0 left-0 w-px h-full opacity-20" style={{ backgroundColor: '#c9a962' }} />
            </div>
          </div>

          {/* BANNER MULHER - DESKTOP - REFATORADO COM HTML/CSS */}
          <div className="w-full py-12 lg:py-16">
            <Container>
              <div 
                className="relative rounded-xl md:rounded-2xl overflow-hidden max-w-6xl mx-auto"
                style={{ border: '2px solid #c9a962', backgroundColor: '#ffffff' }}
              >
                {/* Container Flex Desktop: Imagem esquerda, texto direita */}
                <div className="flex flex-row">
                  {/* Imagem da Mulher - Esquerda no desktop */}
                  <div className="w-2/5 relative">
                    <img
                      src="/banner-mulher.jpg"
                      alt="Mulher segurando Resverabio"
                      className="w-full h-full object-cover"
                      style={{ minHeight: '400px', objectPosition: 'center' }}
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Conteúdo Textual - Direita no desktop */}
                  <div className="w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                    {/* Título */}
                    <h3 
                      className="font-serif font-semibold mb-6"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '32px', color: '#000000' }}
                    >
                      RESVERABIO<sup style={{ fontSize: '16px' }}>®</sup>
                    </h3>
                    
                    {/* Texto descritivo */}
                    <div className="space-y-4 mb-8">
                      <p 
                        className="text-sm leading-relaxed"
                        style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#4a4a4a' }}
                      >
                        ATRAVÉS DO TRANS-RESVERATROL, O RESVERABIO<sup>®</sup> TRANSCENDE A SUPLEMENTAÇÃO COMUM PARA ATUAR DIRETAMENTE NA RENOVAÇÃO DOS TELÔMEROS E NA PRESERVAÇÃO DA INTEGRIDADE DO SEU DNA.
                      </p>
                      <p 
                        className="text-sm leading-relaxed"
                        style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#4a4a4a' }}
                      >
                        NOSSA FÓRMULA PREMIUM FUNDE O PODER ANTIOXIDANTE E A BIOTECNOLOGIA DE REJUVENESCIMENTO CELULAR, PROTEGENDO SUA SAÚDE.
                      </p>
                      <p 
                        className="text-sm font-medium"
                        style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#000000' }}
                      >
                        REJUVENESCIMENTO E BELEZA SÃO BÔNUS.
                      </p>
                    </div>

                    {/* Três Pilares */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t" style={{ borderColor: '#e5e5e5' }}>
                      {/* EXPERIÊNCIA */}
                      <div className="text-center">
                        <h4 
                          className="font-semibold text-xs mb-2"
                          style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#000000', letterSpacing: '0.05em' }}
                        >
                          EXPERIÊNCIA
                        </h4>
                        <p 
                          className="text-xs leading-snug"
                          style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#666666' }}
                        >
                          SAIA DA TRANSFORMAÇÃO EM CADA DOSE. ELEVAMOS SUA ROTINA DE AUTOCUIDADO A UM NOVO PATAMAR DE SOFISTICAÇÃO E BEM-ESTAR.
                        </p>
                      </div>

                      {/* QUALIDADE */}
                      <div className="text-center">
                        <h4 
                          className="font-semibold text-xs mb-2"
                          style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#000000', letterSpacing: '0.05em' }}
                        >
                          QUALIDADE
                        </h4>
                        <p 
                          className="text-xs leading-snug"
                          style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#666666' }}
                        >
                          PUREZA ABSOLUTA EM CADA CÁPSULA. POTÊNCIA MÁXIMA COM TRANS-RESVERATROL PURO.
                        </p>
                      </div>

                      {/* ATENDIMENTO */}
                      <div className="text-center">
                        <h4 
                          className="font-semibold text-xs mb-2"
                          style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#000000', letterSpacing: '0.05em' }}
                        >
                          ATENDIMENTO
                        </h4>
                        <p 
                          className="text-xs leading-snug"
                          style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#666666' }}
                        >
                          EXCLUSIVIDADE EM CADA DETALHE. NOSSA EQUIPE ESTÁ PRONTA PARA OFERECER SUPORTE DEDICADO.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
}

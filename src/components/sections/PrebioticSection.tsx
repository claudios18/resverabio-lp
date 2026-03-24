/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║       BLOCO: INTESTINO - NOSSO SEGUNDO CÉREBRO                          ║
 * ║                                                                          ║
 *  VERSÃO FINAL - LIMPA E ESTÁVEL:                                          ║
 *  • Sem hooks, sem animações, sem código morto                            ║
 *  • Mobile: Imagem topo → Texto baixo                                     ║
 *  • Desktop: Texto esquerda | Imagem direita                              ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { Container } from '../ui/Container';

export function PrebioticSection() {
  return (
    <section id="prebiotico" className="relative w-full overflow-hidden bg-white">
      
      {/* Mobile */}
      <div className="flex flex-col lg:hidden">
        <div className="w-full px-4 py-6">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-50">
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
              className="font-serif font-semibold text-center text-black" 
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(32px, 8vw, 42px)' }}
            >
              O intestino <span className="text-[#c9a962]">—</span> Nosso "Segundo Cérebro"
            </h2>

            <div className="w-24 h-1 rounded-full bg-[#c9a962]" />

            <div className="space-y-5 text-center">
              <p className="text-gray-900 text-lg font-light leading-relaxed" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                Estudos recentes mostram que o Trans-Resveratrol atua como um <strong>Probiótico de luxo</strong>. Ele não é apenas digerido; ele <strong>alimenta as bactérias boas</strong> e inibe as bactérias patogênicas.
              </p>
              <p className="text-gray-900 text-lg font-light leading-relaxed" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                Um dos maiores vilões do envelhecimento moderno é o <strong>Leaky Gut (Intestino Permeável)</strong>. Devido ao estresse e má alimentação, a parede do intestino fica "esburacada", permitindo que toxinas vazem para o sangue.
              </p>
              <p className="text-gray-900 text-lg font-light leading-relaxed" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                O RSV regula a <strong>integridade da barreira intestinal</strong> e afeta a microbiota. Com o intestino "blindado" e a flora equilibrada pelo resveratrol, a sinalização que sobe pelo <strong>Nervo Vago</strong> muda. Em vez de sinais de estresse, o cérebro recebe sinais de equilíbrio.
              </p>
            </div>

            <a
              href="#produtos"
              className="w-full max-w-sm py-4 px-8 rounded-xl font-bold text-base text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 bg-gray-900 text-[#c9a962] shadow-lg"
              style={{ letterSpacing: '0.05em' }}
            >
              QUERO INTESTINO SAUDÁVEL
            </a>
          </div>
        </Container>

        {/* BANNER FINAL - MOBILE ONLY */}
        <div className="block lg:hidden w-full pb-8 bg-white">
          <div className="px-4">
            <div 
              className="rounded-xl overflow-hidden border-2 border-[#c9a962] shadow-xl"
            >
              <img
                src="/resverabio-bannerendmobile.png"
                alt="Resverabio - Banner Mobile"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* TEXTO INSTITUCIONAL - MOBILE ONLY */}
        <div className="block lg:hidden w-full bg-white">
          <div className="px-6 py-10">
            <div className="max-w-lg mx-auto space-y-6">
              <p 
                className="text-black text-center leading-relaxed text-lg"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                <strong className="font-bold text-2xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>RESVERABIO<sup className="text-sm">®</sup></strong>{' '}
                Através do Trans-Resveratrol e associados, o RESVERABIO<sup>®</sup> transcende a suplementação comum para atuar diretamente na renovação dos telômeros e na preservação da integridade do seu DNA.
              </p>
              <p 
                className="text-black text-center leading-relaxed text-lg"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                Nossa fórmula Premium funde o poder antioxidante à biotecnologia de rejuvenescimento celular, protegendo sua saúde.
              </p>
              <p 
                className="text-black text-center font-medium text-xl"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Beleza e Bem Estar: são Bonus !
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:grid lg:grid-cols-2 min-h-[600px] xl:min-h-[700px]">
        <div className="flex flex-col justify-center px-8 xl:px-16 py-12 bg-white">
          <div className="max-w-xl">
            <h2 
              className="font-serif font-semibold text-black mb-6" 
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(36px, 4vw, 52px)' }}
            >
              O intestino <span className="text-[#c9a962]">—</span><br />Nosso "Segundo Cérebro"
            </h2>

            <div className="w-20 h-1 rounded-full bg-[#c9a962] mb-8" />

            <div className="space-y-5">
              <p className="text-gray-900 font-light leading-relaxed" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(17px, 1.5vw, 20px)' }}>
                Estudos recentes mostram que o Trans-Resveratrol atua como um <strong>Probiótico de luxo</strong>. Ele não é apenas digerido; ele <strong>alimenta as bactérias boas</strong> e inibe as bactérias patogênicas.
              </p>
              <p className="text-gray-900 font-light leading-relaxed" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(17px, 1.5vw, 20px)' }}>
                Um dos maiores vilões do envelhecimento moderno é o <strong>Leaky Gut (Intestino Permeável)</strong>. Devido ao estresse e má alimentação, a parede do intestino fica "esburacada", permitindo que toxinas vazem para o sangue.
              </p>
              <p className="text-gray-900 font-light leading-relaxed" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(17px, 1.5vw, 20px)' }}>
                O RSV regula a <strong>integridade da barreira intestinal</strong> e afeta a microbiota. Com o intestino "blindado" e a flora equilibrada pelo resveratrol, a sinalização que sobe pelo <strong>Nervo Vago</strong> muda.
              </p>
            </div>

            <a
              href="#produtos"
              className="inline-block mt-8 py-4 px-10 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 bg-gray-900 text-[#c9a962] shadow-lg"
              style={{ letterSpacing: '0.05em' }}
            >
              QUERO INTESTINO SAUDÁVEL
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center p-8 xl:p-12 bg-gray-50">
          <img
            src="/resverabio-newbrain.png"
            alt="Intestino - Nosso Segundo Cérebro"
            className="w-full h-full max-w-lg object-contain"
            loading="lazy"
          />
          <div className="absolute top-0 left-0 w-px h-full bg-[#c9a962] opacity-20" />
        </div>
      </div>

      {/* BANNER FINAL - DESKTOP ONLY */}
      <div className="hidden lg:block w-full py-12 xl:py-16 bg-white">
        <Container>
          <div 
            className="max-w-6xl mx-auto rounded-xl xl:rounded-2xl overflow-hidden border-2 border-[#c9a962] shadow-xl"
          >
            <img
              src="/resverabio-bannerend.jpg"
              alt="Resverabio - Banner Final"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </Container>
      </div>

    </section>
  );
}

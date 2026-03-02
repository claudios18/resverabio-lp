/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║                    BLOCO 3: BEAUTY SECTION - RESVERABIO®                 ║
 * ║          VERSÃO 1.1 | +Autoridade Científica | 26 Fev 2026               ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 * 
 * ESPECIFICAÇÕES DE LUXO:
 * - Fundo: Off-white (#faf9f7) - elegância suíça
 * - Grid: 3 colunas simétricas com gap harmonioso
 * - Imagens: Aspect ratio 4:3, bordas arredondadas (rounded-2xl)
 * - Tipografia: Título serif + Parágrafo sans-serif leve (revista premium)
 * - Parágrafo: Largura limitada (~60%), centralizado, espaçamento generoso
 * - Padding: Generoso para respiração visual
 */

import { Container } from '../ui/Container';
import { CTAButton, CTAButtonMobile } from '../ui/CTAButton';

// Dados das imagens do bloco
const beautyImages = [
  {
    src: '/resverabio-food.png',
    alt: 'Nutrição e bem-estar com Resverabio®',
  },
  {
    src: '/resverabio-saude.png',
    alt: 'Saúde e vitalidade com Resverabio®',
  },
  {
    src: '/resverabio-bloco3.png',
    alt: 'Beleza natural com Resverabio®',
  },
];

export function BeautySection() {
  return (
    <section 
      className="relative w-full py-16 md:py-24 lg:py-32"
      style={{ backgroundColor: '#faf9f7' }} // Off-white elegante
    >
      <Container>
        {/* ═══════════════════════════════════════════════════════════════════
            GRID DE 3 IMAGENS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Layout: 3 colunas em desktop, 1 coluna em mobile
            • Aspect ratio: 4:3 para uniformidade
            • Bordas: Arredondadas (rounded-2xl = 16px)
            • Sombra: Sutil para profundidade
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {beautyImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
              style={{ aspectRatio: '4/3' }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  // Fallback caso a imagem não carregue
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `
                    <div class="w-full h-full bg-gradient-to-br from-[#e8e6e3] to-[#d4d2cf] flex items-center justify-center">
                      <span class="text-[#9a9895] font-medium">Imagem ${index + 1}</span>
                    </div>
                  `;
                }}
              />
              {/* Overlay sutil no hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            TÍTULO FULL WIDTH
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Fonte: Playfair Display (serif elegante)
            • Tamanho: Responsivo (32px mobile → 48px desktop)
            • Cor: Cinza escuro sofisticado (#1a1a1a)
            • Espaçamento: Margem generosa acima
            • Alinhamento: Centro
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="mt-12 md:mt-16 lg:mt-20 text-center">
          <h2 
            className="font-serif font-semibold tracking-tight leading-tight"
            style={{ 
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: '#1a1a1a',
              fontFamily: "'Playfair Display', Georgia, serif"
            }}
          >
            BELEZA QUE VEM DE DENTRO
          </h2>
          
          {/* Linha decorativa dourada abaixo do título */}
          <div className="mt-6 flex justify-center">
            <div 
              className="w-24 h-1 rounded-full"
              style={{ backgroundColor: '#c9a962' }}
            />
          </div>

          {/* ═══════════════════════════════════════════════════════════════════
              PARÁGRAFO DE AUTORIDADE CIENTÍFICA
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              • Fonte: Sans-serif moderna (Inter), leve e elegante
              • Largura: ~60% do centro (max-w-3xl = 768px)
              • Espaçamento: Generoso após o título (mt-8 md:mt-12)
              • Cor: Cinza sofisticado (#4a4a4a) para leitura confortável
              • Estilo: Revista premium, alinhamento justificado/center
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <p 
            className="mt-8 md:mt-12 lg:mt-14 mx-auto leading-relaxed"
            style={{ 
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 'clamp(19px, 2.2vw, 22px)', /* +3px para legibilidade premium */
              fontWeight: 300,
              color: '#2d2d2d', /* Cinza profundo para contraste nítido */
              maxWidth: '768px',
              lineHeight: 1.85,
              letterSpacing: '0.01em'
            }}
          >
            A verdadeira sofisticação reside no epicentro da vida celular. RESVERABIO® transcende 
            a suplementação comum ao focar na renovação dos telômeros, preservando a integridade 
            do seu DNA. Através de uma ação sinergética inédita, fundimos a potência do Resveratrol 
            puro ao Colágeno premium, Ácido Hialurônico e Niacina, potencializados por um complexo 
            vitamínico essencial (A, B3 e C). Uma fórmula rara, desenhada para quem exige 
            longevidade sistêmica e beleza que emana de dentro.
          </p>

          {/* ═══════════════════════════════════════════════════════════════════
              CALL TO ACTION - BOTÃO DOURADO ELEGANTE
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <div className="mt-10 md:mt-12 hidden md:flex justify-center">
            <CTAButton text="Quero Beleza de Verdade" />
          </div>
          <div className="mt-10 md:mt-12 flex md:hidden justify-center px-6">
            <CTAButtonMobile text="Quero Beleza de Verdade" />
          </div>
        </div>
      </Container>
    </section>
  );
}

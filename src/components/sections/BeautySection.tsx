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

// Cores de luxo padronizadas
const COLORS = {
  black: '#1a1a1a',
  gold: '#c9a962',
} as const;

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
              color: '#000000',
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
              color: '#000000', /* Preto puro para máxima legibilidade */
              maxWidth: '768px',
              lineHeight: 1.85,
              letterSpacing: '0.01em'
            }}
          >
            RESVERABIO® transcende a suplementação comum ao focar na renovação dos telômeros 
            cromossômicos, preservando a integridade do seu DNA. Numa ação sinergética inédita, 
            alia a potência do Resveratrol puro ao Colágeno Premium, Ácido Hialurônico e Niacina, 
            potencializados por um complexo vitamínico essencial (Vitaminas A, B3 e C). Uma fórmula 
            rara e original, criada para quem exige longevidade sistêmica e beleza que emana de dentro.
          </p>

          {/* ═══════════════════════════════════════════════════════════════════
              CALL TO ACTION - BOTÃO PRETO COM TEXTO DOURADO (Padrão Luxo)
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          {/* CTA Button - Scroll nativo com scroll-margin CSS */}
          <div className="mt-10 md:mt-12 flex justify-center px-6">
            <a
              href="#produtos"
              className="w-full max-w-sm md:w-auto md:min-w-[320px] py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 text-center cursor-pointer"
              style={{
                backgroundColor: COLORS.black,
                color: COLORS.gold,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                letterSpacing: '0.05em',
              }}
            >
              GARANTIR MEU RESVERABIO®
            </a>
          </div>

          {/* ═══════════════════════════════════════════════════════════════════
              FAIXA DE DESTAQUE - FRETE GRÁTIS & ENTREGA NACIONAL
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              • Cor: Verde escuro sofisticado (#2d5a3d)
              • Texto: Branco em uppercase
              • Ícones: Caminhão + Mapa do Brasil
              • Separador: Linha vertical branca
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <div 
            className="mt-6 w-full py-3 px-4 rounded-lg flex flex-wrap items-center justify-center gap-3 md:gap-4"
            style={{ backgroundColor: '#2d5a3d' }}
          >
            {/* Ícone Caminhão + Frete Grátis */}
            <div className="flex items-center gap-2">
              <svg 
                className="w-5 h-5 text-white flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
              <span 
                className="text-white text-xs md:text-sm font-semibold tracking-wide uppercase whitespace-nowrap"
              >
                Frete Grátis: Acima de <span className="text-base md:text-lg font-bold">R$ 189</span>
              </span>
            </div>

            {/* Separador vertical */}
            <div className="hidden md:block w-px h-5 bg-white/60" />

            {/* Ícone Mapa + Entrega Brasil */}
            <div className="flex items-center gap-2">
              <svg 
                className="w-5 h-5 text-white flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" 
                />
              </svg>
              <span 
                className="text-white text-xs md:text-sm font-semibold tracking-wide uppercase whitespace-nowrap"
              >
                Entregamos em Todo o Brasil
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

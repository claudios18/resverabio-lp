/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║                    BLOCO 4: NUTRITION SECTION - RESVERABIO®              ║
 * ║   VERSÃO 3.0 | Rótulo Duplo Centralizado | 07 Mar 2026                   ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 * 
 * ESPECIFICAÇÕES DE LUXO:
 * - Fundo: Preto Absoluto (#000000) - contraste máximo
 * - Layout Superior: Centralizado, foco único no rótulo duplo
 * - Asset Principal: resverabio-rotuloduplo.png (rótulo duplo premium)
 * - Layout Inferior: 2 cards informativos (Alérgenos | Benefícios)
 * - Cards: Fundo cinza escuro (#0f0f0f) com borda dourada sutil
 * - Efeitos: Levitação + Glow branco blur no hover
 * - Padding: Elegante e respirável
 * 
 * REFINAMENTOS APLICADOS:
 * ✓ Asset atualizado: tabela nutricional → rótulo duplo
 * ✓ Layout simplificado: coluna única centralizada
 * ✓ Sinergia Box removida (asset antigo eliminado)
 * ✓ Foco total nas informações nutricionais oficiais
 * ✓ Lazy loading otimizado para performance
 */

import { Container } from '../ui/Container';

export function NutritionSection() {
  return (
    <section 
      className="relative w-full py-8 md:py-16 lg:py-24 overflow-hidden"
      style={{ backgroundColor: '#000000' }} // Preto absoluto
    >
      {/* Glow sutil dourado no background para sofisticação */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(201,169,98,0.15) 0%, transparent 70%)'
        }}
      />

      <Container className="relative z-10">
        {/* ═══════════════════════════════════════════════════════════════════
            TÍTULO PRINCIPAL
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Estilo: Padrão BeautySection
            • Cor: Dourado (#c9a962) para contraste com fundo preto
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="mt-12 md:mt-16 lg:mt-20 text-center mb-12 md:mb-16">
          <h2 
            className="font-serif font-semibold tracking-tight leading-tight"
            style={{ 
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: '#c9a962', // Dourado para contrastar com fundo preto
              fontFamily: "'Playfair Display', Georgia, serif"
            }}
          >
            Informações Nutricionais
          </h2>
          
          {/* Linha decorativa dourada */}
          <div className="mt-6 flex justify-center">
            <div 
              className="w-24 h-1 rounded-full"
              style={{ backgroundColor: '#c9a962' }}
            />
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            GRID CENTRALIZADO - RÓTULO DUPLO
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Layout: Centralizado, largura máxima controlada
            • Mobile: Responsivo com padding adequado
            • Alinhamento: Centro para destaque máximo do rótulo
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="flex justify-center items-center">
          
          {/* ═══════════════════════════════════════════════════════════════
              RÓTULO DUPLO NUTRICIONAL
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              • Imagem: resverabio-rotuloduplo.png (rótulo duplo premium)
              • Destaque: Contraste máximo contra fundo preto
              • Alinhamento: Centro para foco total no produto
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <div className="flex flex-col items-center">
            <div 
              className="relative w-full max-w-lg rounded-xl overflow-hidden shadow-2xl"
              style={{
                boxShadow: '0 25px 80px rgba(255,255,255,0.1), 0 0 60px rgba(201,169,98,0.15)'
              }}
            >
              <img
                src="/resverabio-rotuloduplo.png"
                alt="Rótulo Duplo Resverabio® - Informações Nutricionais e Tabela Completa"
                className="w-full h-auto object-contain"
                style={{ 
                  filter: 'drop-shadow(0 4px 20px rgba(255,255,255,0.1))'
                }}
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `
                    <div class="aspect-[4/5] bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center border border-[#c9a962]/20 rounded-xl">
                      <span class="text-[#c9a962] font-medium text-lg">Rótulo Nutricional</span>
                    </div>
                  `;
                }}
              />
            </div>
            
            {/* Label sutil abaixo da tabela */}
            <p 
              className="mt-6 text-sm tracking-widest uppercase"
              style={{ 
                color: 'rgba(201,169,98,0.7)',
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 400
              }}
            >
              Informação Nutricional Completa
            </p>
          </div>

        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            CARDS INFORMATIVOS - LINHA INFERIOR
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Layout: 2 cards lado a lado (grid 2 colunas)
            • Fundo: Cinza escuro elegante (#0f0f0f) com borda sutil
            • Tipografia: Mesma do Bloco 3 (Inter, legível)
            • Padding: Generoso para respiro visual
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="mt-8 md:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          
          {/* CARD 1: ALÉRGICOS */}
          <div 
            className="group relative rounded-2xl p-8 lg:p-10 transition-all duration-500 ease-out hover:-translate-y-2.5"
            style={{
              backgroundColor: '#0f0f0f', // Cinza quase preto
              border: '1px solid rgba(201,169,98,0.15)',
              boxShadow: '0 4px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)'
            }}
          >
            {/* Glow branco blur no hover */}
            <div 
              className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
              style={{
                background: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, transparent 70%)'
              }}
            />
            {/* Borda dourada sutil no topo */}
            <div 
              className="absolute top-0 left-8 right-8 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,98,0.4), transparent)' }}
            />
            
            <h3 
              className="mb-4 text-lg tracking-widest uppercase"
              style={{ 
                color: '#c9a962',
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 600,
                letterSpacing: '0.15em'
              }}
            >
              ALÉRGICOS
            </h3>
            
            <p 
              className="leading-relaxed"
              style={{ 
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: '16px',
                fontWeight: 300,
                color: '#e8e6e3', // Off-white elegante
                lineHeight: 1.75
              }}
            >
              PODE CONTER* AMÊNDOA, AMENDOIM, AVELÃS, CASTANHA-DE-CAJU, CASTANHA-DO-PARÁ, CASTANHAS, MACADÂMIAS, NOZES, PECÃS E PISTACHES. NÃO CONTÉM GLÚTEN.
            </p>
            
            <p 
              className="mt-4 text-sm italic"
              style={{ 
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 300,
                color: 'rgba(232,230,227,0.6)', // Mais sutil
                lineHeight: 1.6
              }}
            >
              *Não fazem parte da formulação do produto. No entanto, pode haver traços devido ao compartilhamento de equipamento em alguma etapa do processo produtivo.
            </p>
          </div>

          {/* CARD 2: BENEFÍCIOS */}
          <div 
            className="group relative rounded-2xl p-8 lg:p-10 transition-all duration-500 ease-out hover:-translate-y-2.5"
            style={{
              backgroundColor: '#0f0f0f', // Cinza quase preto
              border: '1px solid rgba(201,169,98,0.15)',
              boxShadow: '0 4px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)'
            }}
          >
            {/* Glow branco blur no hover */}
            <div 
              className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
              style={{
                background: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, transparent 70%)'
              }}
            />
            
            {/* Borda dourada sutil no topo */}
            <div 
              className="absolute top-0 left-8 right-8 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,98,0.4), transparent)' }}
            />
            
            <p 
              className="leading-relaxed text-center"
              style={{ 
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: '16px',
                fontWeight: 300,
                color: '#e8e6e3', // Off-white elegante
                lineHeight: 1.85
              }}
            >
              O Resverabio® é perfeito para quem deseja suplementar com um excelente 'blend' dos melhores ativos para rejuvenescimento celular de fácil absorção. É sem sabor, sem açúcar ou adoçantes. É leve, saudável e altamente versátil, sendo excelente para incrementar o aporte de saúde diário de diversas formas.
            </p>
          </div>

        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            BANNER PARADIGMA - TRANSIÇÃO VISUAL PREMIUM
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Estilo: Banner página inteira (full width)
            • Posicionamento: Final do bloco, transição para Próxima Seção
            • Respiro: Margens simétricas para elegância
            • Responsividade: Desktop e Mobile
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="mt-10 md:mt-14 lg:mt-16 mb-4 md:mb-6 w-full px-4 sm:px-0">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/resverabio-paradigma.jpg"
              alt="Resverabio - O Paradigma do Rejuvenescimento"
              className="w-full h-auto object-contain"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║                    BLOCO 5: SCIENCE SECTION - RESVERABIO®                ║
 * ║          Reconstrução 100% Código - Com Imagem Paradigma               ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 * 
 * ESPECIFICAÇÕES:
 * - Fundo: Off-white (#faf9f7)
 * - Layout: Mobile=Vertical | Desktop=Horizontal (2 colunas)
 * - Tipografia: Playfair Display + Inter (padrão BeautySection)
 * - Molduras douradas: Títulos das ações em containers elegantes
 * - Imagem Paradigma: Posicionada entre texto introdutório e janelas de ação
 */

import { Container } from '../ui/Container';

export function ScienceSection() {
  return (
    <section 
      className="relative w-full overflow-hidden py-16 md:py-24 lg:py-32"
      style={{ backgroundColor: '#faf9f7' }}
    >
      {/* ═══════════════════════════════════════════════════════════════════
          ELEMENTO DECORATIVO: Hexágonos Moleculares
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#c9a962]"
        >
          <path
            d="M200 50 L250 75 L250 125 L200 150 L150 125 L150 75 Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M260 100 L310 125 L310 175 L260 200 L210 175 L210 125 Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M170 140 L220 165 L220 215 L170 240 L120 215 L120 165 Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <line x1="200" y1="100" x2="210" y2="125" stroke="currentColor" strokeWidth="1" />
          <line x1="220" y1="165" x2="200" y2="150" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="100" r="4" fill="currentColor" />
          <circle cx="260" cy="150" r="4" fill="currentColor" />
          <circle cx="170" cy="190" r="4" fill="currentColor" />
        </svg>
      </div>

      <Container className="relative z-10">
        {/* ═══════════════════════════════════════════════════════════════════
            TÍTULO DA SEÇÃO - Centralizado, estilo BeautySection
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="font-serif font-semibold tracking-tight leading-tight"
            style={{ 
              fontSize: 'clamp(28px, 4.5vw, 48px)',
              color: '#000000',
              fontFamily: "'Playfair Display', Georgia, serif"
            }}
          >
            RESVERABIO®
          </h2>
          
          <p 
            className="mt-3 mb-6 font-bold"
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(27px, 3.75vw, 36px)',
              fontStyle: 'italic',
              color: '#000000'
            }}
          >
            O Duplo papel na Pele e no Rejuvenescimento
          </p>
          
          <div className="flex justify-center">
            <div 
              className="w-24 h-1 rounded-full"
              style={{ backgroundColor: '#c9a962' }}
            />
          </div>
        </div>

        {/* TEXTO INTRODUTÓRIO */}
        <p 
          className="leading-relaxed text-center mb-10 md:mb-12 max-w-4xl mx-auto"
          style={{ 
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 'clamp(19px, 2.2vw, 22px)',
            fontWeight: 300,
            color: '#000000',
            lineHeight: 1.85,
            letterSpacing: '0.01em'
          }}
        >
          Quando falamos em rejuvenescimento da pele, o Resveratrol se destaca como um 
          composto multifuncional que atua na pele de maneira completa. Para entender o poder do 
          resveratrol para pele, a dermatologia divide sua atuação em duas frentes de batalha: a 
          Defesa (contra o que vem de fora) e a Reestruturação (contra o desgaste de dentro).
        </p>

        {/* ═══════════════════════════════════════════════════════════════════
            IMAGEM PARADIGMA DA SUPLEMENTAÇÃO (ÚNICA INSTÂNCIA)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Posicionada entre o texto introdutório e as janelas de ação
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="w-full mb-12 md:mb-16">
          {/* Desktop: Imagem horizontal */}
          <div className="relative w-full rounded-xl md:rounded-2xl overflow-hidden shadow-2xl hidden md:block max-w-4xl mx-auto">
            <img
              src="/resverabio-paradigma.jpg"
              alt="Paradigma da Suplementação - Resverabio"
              className="w-full h-auto object-contain"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
          
          {/* Mobile: Imagem vertical */}
          <div className="relative w-full rounded-xl overflow-hidden shadow-xl block md:hidden max-w-md mx-auto">
            <img
              src="/resverabio-paradigmamobile.png"
              alt="Paradigma da Suplementação - Resverabio"
              className="w-full h-auto object-contain"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            AÇÕES EM MOLDURAS DOURADAS (APÓS A IMAGEM)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Mobile: Empilhado vertical (space-y)
            Desktop: Horizontal (grid-cols-2) - lado a lado
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          
          {/* AÇÃO PROTETORA EXTERNA - Moldura Dourada */}
          <div 
            className="relative rounded-xl overflow-hidden h-full"
            style={{
              border: '2px solid #c9a962',
              background: 'linear-gradient(135deg, #ffffff 0%, #faf9f7 100%)',
              boxShadow: '0 4px 20px rgba(201, 169, 98, 0.15), inset 0 1px 0 rgba(255,255,255,0.8)'
            }}
          >
            {/* Header com título e subtítulo */}
            <div 
              className="px-6 py-5 md:px-8 md:py-6 border-b"
              style={{ 
                borderColor: 'rgba(201, 169, 98, 0.3)',
                background: 'linear-gradient(90deg, rgba(201, 169, 98, 0.08) 0%, rgba(201, 169, 98, 0.03) 100%)'
              }}
            >
              <h3 
                className="text-center font-semibold tracking-wider mb-2"
                style={{ 
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: 'clamp(13px, 1.4vw, 15px)',
                  color: '#000000',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                AÇÃO PROTETORA EXTERNA
              </h3>
              <h4 
                className="text-center"
                style={{ 
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(18px, 2vw, 22px)',
                  fontWeight: 600,
                  fontStyle: 'italic',
                  color: '#c9a962'
                }}
              >
                Fotoproteção biológica
              </h4>
            </div>
            
            {/* Conteúdo */}
            <div className="px-6 py-5 md:px-8 md:py-6">
              <p 
                className="text-center lg:text-left leading-relaxed"
                style={{ 
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  fontWeight: 300,
                  color: '#000000',
                  lineHeight: 1.8
                }}
              >
                O RSV atua como uma fitoalexina (defesa da planta). Na pele humana, ele reforça a 
                resistência das células contra a radiação UV, prevenindo o fotoenvelhecimento e a 
                degradação das fibras elásticas.
              </p>
            </div>
          </div>

          {/* AÇÃO REPARADORA INTERNA - Moldura Dourada */}
          <div 
            className="relative rounded-xl overflow-hidden h-full"
            style={{
              border: '2px solid #c9a962',
              background: 'linear-gradient(135deg, #ffffff 0%, #faf9f7 100%)',
              boxShadow: '0 4px 20px rgba(201, 169, 98, 0.15), inset 0 1px 0 rgba(255,255,255,0.8)'
            }}
          >
            {/* Header com título e subtítulo */}
            <div 
              className="px-6 py-5 md:px-8 md:py-6 border-b"
              style={{ 
                borderColor: 'rgba(201, 169, 98, 0.3)',
                background: 'linear-gradient(90deg, rgba(201, 169, 98, 0.08) 0%, rgba(201, 169, 98, 0.03) 100%)'
              }}
            >
              <h3 
                className="text-center font-semibold tracking-wider mb-2"
                style={{ 
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: 'clamp(13px, 1.4vw, 15px)',
                  color: '#000000',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                AÇÃO REPARADORA INTERNA
              </h3>
              <h4 
                className="text-center"
                style={{ 
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(18px, 2vw, 22px)',
                  fontWeight: 600,
                  fontStyle: 'italic',
                  color: '#c9a962'
                }}
              >
                Estímulo ao colágeno
              </h4>
            </div>
            
            {/* Conteúdo */}
            <div className="px-6 py-5 md:px-8 md:py-6">
              <p 
                className="text-center lg:text-left leading-relaxed"
                style={{ 
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  fontWeight: 300,
                  color: '#000000',
                  lineHeight: 1.8
                }}
              >
                Estudos mostram que o RSV ajuda a modular receptores celulares que, com a 
                idade, param de funcionar. Isso reativa a síntese de colágeno novo, combatendo a 
                flacidez. O resveratrol estimula a proliferação dos fibroblastos, devolvendo 
                a densidade e o volume da derme.
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

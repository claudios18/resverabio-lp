/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║                    BLOCO 3: BEAUTY SECTION - RESVERABIO®                 ║
 * ║                    Layout Corrigido | Consistência Premium               ║
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
  // Animacao de scroll removida temporariamente para resolver tela preta
  // const [isVisible, setIsVisible] = useState(true);

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
      className="relative w-full py-16 md:py-24 lg:py-32 overflow-x-hidden"
      style={{ backgroundColor: '#faf9f7' }}
    >
      <Container>
        <div>
          {/* TÍTULO PRINCIPAL */}
          <div className="text-center mb-12 md:mb-16">
            <h2 
              className="font-serif font-semibold tracking-tight leading-tight"
              style={{ 
                fontSize: 'clamp(32px, 5vw, 48px)',
                color: '#000000',
                fontFamily: "'Playfair Display', Georgia, serif"
              }}
            >
              A SINERGIA DO BLEND RESVERABIO
              <span style={{ color: '#c9a962', verticalAlign: 'super', fontSize: '0.4em' }}>®</span>
            </h2>
            <p 
              className="mt-4 text-lg md:text-xl"
              style={{ 
                color: '#c9a962',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: 'italic',
              }}
            >
              Beleza que Vem de Dentro
            </p>
            
            {/* Linha decorativa */}
            <div className="mt-6 flex justify-center">
              <div 
                className="w-24 h-1 rounded-full"
                style={{ backgroundColor: '#c9a962' }}
              />
            </div>
          </div>

          {/* CONTEÚDO: IMAGEM + TEXTO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            {/* IMAGEM - Desktop: Esquerda, Mobile: Depois do texto */}
            <div className="relative order-2 md:order-1">
              {/* Desktop Image - 16:9 */}
              <div className="hidden md:block rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src="/resverabio-belezaquevemdedentro.png" 
                  alt="Sinergia do Blend Resverabio®" 
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>
              
              {/* Mobile Image - 1:1 com fundo integrado */}
              <div 
                className="block md:hidden rounded-xl shadow-xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #2d1f3d 0%, #1a0f1f 100%)',
                }}
              >
                <img 
                  src="/resverabio-lm1.png" 
                  alt="Sinergia do Blend Resverabio®" 
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>

            {/* TEXTO EXPLICATIVO - Desktop: Direita, Mobile: Primeiro */}
            <div className="order-1 md:order-2">
              <p 
                className="leading-relaxed mb-6"
                style={{ 
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: 'clamp(17px, 2vw, 20px)',
                  fontWeight: 300,
                  color: '#000000',
                  lineHeight: 1.8,
                }}
              >
                A potência do Resveratrol puro é elevada por uma <strong>sinergia inédita de ativos premium</strong>. 
                Cada componente foi selecionado para atuar como combustível essencial para a renovação sistêmica.
              </p>

              {/* Lista de Componentes */}
              <div className="space-y-4">
                {sinergiaItems.map((item, index) => (
                  <div 
                    key={index}
                    className="flex gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-lg"
                    style={{ 
                      backgroundColor: 'rgba(201, 169, 98, 0.05)',
                      border: '1px solid rgba(201, 169, 98, 0.2)',
                    }}
                  >
                    <span 
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ 
                        backgroundColor: COLORS.gold,
                        color: '#000',
                      }}
                    >
                      {item.numero}
                    </span>
                    <div>
                      <h4 
                        className="font-semibold mb-1"
                        style={{ 
                          color: COLORS.black,
                          fontSize: '16px',
                        }}
                      >
                        {item.titulo}
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ 
                          color: 'rgba(0,0,0,0.7)',
                          lineHeight: 1.5,
                        }}
                      >
                        {item.descricao}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SEÇÃO DE INVESTIMENTO - SEM overflow-hidden para evitar corte */}
          <div 
            className="relative rounded-3xl mx-auto max-w-4xl"
            style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            }}
          >
            {/* Glow dourado */}
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at top, rgba(201, 169, 98, 0.3) 0%, transparent 60%)',
              }}
            />

            <div className="relative px-4 sm:px-6 py-10 md:py-14 text-center">
              <p 
                className="text-sm uppercase tracking-widest mb-3"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                Assuma o Controle da Sua Biologia
              </p>
              
              <h3 
                className="text-2xl md:text-3xl font-bold text-white mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                O Investimento na Longevidade
              </h3>

              <p 
                className="max-w-2xl mx-auto mb-8"
                style={{ 
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '15px',
                  lineHeight: 1.6,
                }}
              >
                O RESVERABIO® é entregue em uma apresentação exclusiva de 60 cápsulas (500mg). 
                Com a dosagem recomendada de apenas 2 cápsulas por dia, você garante o aporte 
                necessário para despertar o potencial máximo das suas células.
              </p>

              {/* Preço Centralizado */}
              <div className="mb-8">
                <p 
                  className="text-sm uppercase tracking-wider mb-2"
                  style={{ color: '#c9a962' }}
                >
                  Investimento em Longevidade
                </p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-white/50 line-through text-xl">R$ 297</span>
                  <span 
                    className="text-5xl md:text-6xl font-bold"
                    style={{ 
                      color: '#c9a962',
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    R$ 187
                  </span>
                </div>
                <p className="text-white/60 text-sm mt-2">ou 12x de R$ 18,87</p>
              </div>

              {/* BOTÕES CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#produtos"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 text-center"
                  style={{
                    backgroundColor: '#c9a962',
                    color: '#000000',
                    boxShadow: '0 8px 32px rgba(201, 169, 98, 0.4)',
                    letterSpacing: '0.05em',
                    minWidth: '260px',
                  }}
                >
                  QUERO EXPERIMENTAR
                </a>
                <a
                  href="#produtos"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 text-center border-2"
                  style={{
                    borderColor: '#c9a962',
                    color: '#c9a962',
                    letterSpacing: '0.05em',
                    minWidth: '260px',
                  }}
                >
                  GARANTIR MEU BLEND RESVERABIO®
                </a>
              </div>

              {/* Selos de garantia */}
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-white/50">
                <span>✓ 60 Cápsulas (500mg)</span>
                <span>✓ Dosagem: 2 cápsulas/dia</span>
                <span>✓ Frete Grátis</span>
                <span>✓ 30 dias de garantia</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

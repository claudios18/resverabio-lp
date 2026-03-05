/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║               SEÇÃO CARDS DE CONFIANÇA - RESVERABIO®                     ║
 * ║                                                                          ║
 *  VERSÃO 1.0 - GRID 4 COLUNAS:                                             ║
 *  • Layout: Grid responsivo 2x2 mobile, 4x1 desktop                        ║
 *  • Fundos: Degradê em tons de roxo premium                                ║
 *  • Cores: #a98fff → #9079e7 → #7663ce → #5d4cb6                         ║
 *  • Ícones e textos: Branco/Dourado para contraste de luxo                 ║
 *  • Escala: Aumentada para leitura total no mobile                         ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { Container } from '../ui/Container';
import { Award, Leaf, FlaskConical, ShieldCheck } from 'lucide-react';

// Cores de degradê para cada card
const CARD_COLORS = [
  { bg: '#a98fff', icon: Award },      // Card 1 - Premium
  { bg: '#9079e7', icon: Leaf },       // Card 2 - Natural
  { bg: '#7663ce', icon: FlaskConical }, // Card 3 - Ciência
  { bg: '#5d4cb6', icon: ShieldCheck }, // Card 4 - Garantia
] as const;

const trustData = [
  {
    title: 'Premium',
    subtitle: 'Qualidade Superior',
    description: 'Ingredientes selecionados e testados',
  },
  {
    title: '100% Natural',
    subtitle: 'Sem Aditivos',
    description: 'Fórmula pura e natural',
  },
  {
    title: 'Cientificamente',
    subtitle: 'Comprovado',
    description: 'Baseado em estudos científicos',
  },
  {
    title: 'Garantia de',
    subtitle: 'Satisfação',
    description: '30 dias de garantia',
  },
];

export function TrustCards() {
  return (
    <section className="relative w-full py-8 md:py-12" style={{ backgroundColor: '#faf9f7' }}>
      <Container>
        {/* Grid de 4 Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {trustData.map((item, index) => {
            const IconComponent = CARD_COLORS[index].icon;
            const bgColor = CARD_COLORS[index].bg;
            
            return (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-center text-center rounded-2xl p-6 md:p-8 min-h-[200px] md:min-h-[240px] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ backgroundColor: bgColor }}
              >
                {/* Ícone Dourado */}
                <div 
                  className="mb-4 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                >
                  <IconComponent size={32} style={{ color: '#ffd700' }} />
                </div>
                
                {/* Título em Dourado */}
                <h3 
                  className="mb-1"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: 'clamp(16px, 2.5vw, 20px)',
                    fontWeight: 700,
                    color: '#ffd700',
                    letterSpacing: '0.02em',
                  }}
                >
                  {item.title}
                </h3>
                
                {/* Subtítulo em Branco */}
                <p 
                  className="mb-2"
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: 'clamp(13px, 1.8vw, 16px)',
                    fontWeight: 600,
                    color: '#ffffff',
                  }}
                >
                  {item.subtitle}
                </p>
                
                {/* Descrição em Branco */}
                <p 
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: 'clamp(11px, 1.5vw, 13px)',
                    fontWeight: 400,
                    color: 'rgba(255, 255, 255, 0.9)',
                    lineHeight: 1.4,
                  }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

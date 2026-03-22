/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║           BLOCO 5: CARDIOVASCULAR SECTION - RESVERABIO®                  ║
 * ║                                                                          ║
 *  VERSÃO 11.0 - ROTEIRO ESTRATÉGICO COMPLETO                               ║
 *  • Layout luxo com animações scroll-triggered                             ║
 *  • Imagens responsivas: mobile e desktop                                  ║
 *  • Tabela de benefícios vascular                                          ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { useEffect, useRef, useState } from 'react';
import { Container } from '../ui/Container';

const COLORS = {
  gold: '#c9a962',
  black: '#1a1a1a',
} as const;

export function CardiovascularSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const beneficios = [
    {
      titulo: 'Combate ao Estresse Oxidativo',
      descricao: 'Redução da carga inflamatória crônica e proteção celular.',
    },
    {
      titulo: 'Melhora Endotelial',
      descricao: 'Otimização da função vascular interna para um fluxo superior.',
    },
    {
      titulo: 'Equilíbrio de Lipídios',
      descricao: 'Harmonização lipídica para um perfil cardiovascular resiliente.',
    },
    {
      titulo: 'Vasodilatação e Flexibilidade',
      descricao: 'Maleabilidade dos vasos e maleabilidade circulatória otimizada.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="cardiovascular"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#faf9f7' }}
    >
      <Container className="py-16 md:py-20 lg:py-24">
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* HEADER */}
          <div className="text-center mb-12 md:mb-16">
            <h2 
              className="font-serif font-semibold tracking-tight leading-tight"
              style={{ 
                fontSize: 'clamp(32px, 5vw, 48px)',
                color: '#000000',
                fontFamily: "'Playfair Display', Georgia, serif"
              }}
            >
              RESVERABIO E AÇÃO CARDIOPROTETORA
            </h2>
            
            <div className="mt-6 flex justify-center">
              <div 
                className="w-24 h-1 rounded-full"
                style={{ backgroundColor: '#c9a962' }}
              />
            </div>

            <p 
              className="mt-8 md:mt-10 mx-auto leading-relaxed max-w-3xl"
              style={{ 
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: 'clamp(17px, 2vw, 20px)',
                fontWeight: 300,
                color: '#000000',
                lineHeight: 1.8,
              }}
            >
              A verdadeira sofisticação reside no equilíbrio do seu sistema circulatório. 
              Além de prevenir o envelhecimento vascular, o RESVERABIO® atua na gestão da 
              saúde cardíaca ao restaurar a integridade das células vasculares. 
              <span style={{ color: '#c9a962', fontWeight: 500 }}>
                Uma ação cardioprotetora inédita que transcende a suplementação comum, 
                focando na eficácia e na proteção contínua do seu coração.
              </span>
            </p>
          </div>

          {/* CONTEÚDO PRINCIPAL */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* COLUNA ESQUERDA: Tabela de Benefícios */}
            <div className="order-2 lg:order-1">
              <p
                className="font-serif text-center lg:text-left mb-8"
                style={{
                  fontSize: 'clamp(22px, 3vw, 28px)',
                  color: COLORS.gold,
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontStyle: 'italic',
                }}
              >
                Ação Cardioprotetora
              </p>

              {/* Tabela de Benefícios Vascular */}
              <div className="space-y-4 mb-8">
                <h3
                  className="font-bold text-center lg:text-left mb-6"
                  style={{
                    fontSize: '18px',
                    color: '#000000',
                    fontFamily: "'Inter', system-ui, sans-serif",
                  }}
                >
                  Benefícios Vasculares Diretos
                </h3>

                {beneficios.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-xl transition-all duration-300 hover:shadow-lg"
                    style={{
                      backgroundColor: 'rgba(201, 169, 98, 0.08)',
                      border: '1px solid rgba(201, 169, 98, 0.2)',
                    }}
                  >
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: COLORS.gold }}
                    >
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="font-semibold text-black mb-1">
                        {item.titulo}
                      </h4>
                      <p className="text-sm text-black/70">
                        {item.descricao}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex justify-center lg:justify-start">
                <a
                  href="#produtos"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{
                    backgroundColor: COLORS.black,
                    color: COLORS.gold,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    letterSpacing: '0.05em',
                    minWidth: '280px',
                  }}
                >
                  GARANTIR MEU RESVERABIO®
                </a>
              </div>
            </div>

            {/* COLUNA DIREITA: Imagem Cardioprotetora */}
            <div className="order-1 lg:order-2 flex items-center justify-center">
              <div 
                className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(201, 169, 98, 0.1) 0%, transparent 100%)',
                }}
              >
                <img
                  src="/resverabio-blococoraçao.png"
                  alt="Ação Cardioprotetora Resverabio®"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

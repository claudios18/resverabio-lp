/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║                    FOOTER - RESVERABIO®                                  ║
 * ║                                                                          ║
 *  VERSÃO 2.0 - Padrão de Luxo Suíço                                        ║
 *  • Fundo: Preto absoluto (#000000)                                        ║
 *  • Tipografia: Playfair Display + Inter                                   ║
 *  • Seção obrigatória: FONTES CIENTÍFICAS CONSULTADAS                      ║
 *  • Link funcional: resveratrolciencia.com                                 ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { Container } from '../ui/Container';
import { ExternalLink, BookOpen, Heart } from 'lucide-react';

// Cores de luxo padronizadas
const COLORS = {
  gold: '#c9a962',
  goldLight: '#e8d5a3',
  white: '#ffffff',
  whiteMuted: 'rgba(255, 255, 255, 0.6)',
  whiteSubtle: 'rgba(255, 255, 255, 0.4)',
  black: '#000000',
} as const;

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: COLORS.black }}>
      {/* ═══════════════════════════════════════════════════════════════════
          SEÇÃO OBRIGATÓRIA: FONTES CIENTÍFICAS CONSULTADAS
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          • Destaque especial com borda dourada
          • Link funcional para resveratrolciencia.com
          • Design de luxo com ícone de livro
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div 
        className="border-t border-b"
        style={{ 
          borderColor: 'rgba(201, 169, 98, 0.3)',
          backgroundColor: 'rgba(201, 169, 98, 0.05)'
        }}
      >
        <Container className="py-6 md:py-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            {/* Ícone e Label */}
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(201, 169, 98, 0.2)' }}
              >
                <BookOpen size={20} style={{ color: COLORS.gold }} />
              </div>
              <span 
                className="font-semibold tracking-wide uppercase text-sm md:text-base"
                style={{ 
                  color: COLORS.gold,
                  fontFamily: "'Inter', system-ui, sans-serif",
                  letterSpacing: '0.15em'
                }}
              >
                Fontes Científicas Consultadas
              </span>
            </div>
            
            {/* Link Funcional */}
            <a
              href="https://resveratrolciencia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: 'rgba(201, 169, 98, 0.15)',
                border: `1px solid ${COLORS.gold}40`,
              }}
            >
              <span 
                className="font-medium text-sm"
                style={{ color: COLORS.gold }}
              >
                resveratrolciencia.com
              </span>
              <ExternalLink size={14} style={{ color: COLORS.gold }} />
            </a>
          </div>
        </Container>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          CONTEÚDO PRINCIPAL DO FOOTER
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          • Layout minimalista e refinado
          • Logomarca centralizada
          • Informações essenciais
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
          
          {/* Coluna 1 - Brand */}
          <div className="text-center md:text-left space-y-4">
            <h3 
              className="font-serif text-2xl md:text-3xl font-semibold"
              style={{ 
                color: COLORS.white,
                fontFamily: "'Playfair Display', Georgia, serif"
              }}
            >
              Resverabio<span style={{ color: COLORS.gold }}>®</span>
            </h3>
            <p 
              className="text-sm md:text-base leading-relaxed"
              style={{ 
                color: COLORS.whiteMuted,
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 300,
                lineHeight: 1.8
              }}
            >
              A molécula da longevidade. Trans-Resveratrol 99% de pureza para quem busca qualidade de vida com base científica.
            </p>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div className="text-center space-y-4">
            <h4 
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ 
                color: COLORS.gold,
                fontFamily: "'Inter', system-ui, sans-serif",
                letterSpacing: '0.2em'
              }}
            >
              Navegação
            </h4>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {[
                { label: 'Benefícios', href: '#cardiovascular' },
                { label: 'Ciência', href: '#ciencia' },
                { label: 'Depoimentos', href: '#avaliacoes' },
                { label: 'Comprar', href: '#produtos' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-colors duration-200 hover:opacity-100"
                  style={{ 
                    color: COLORS.whiteMuted,
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontWeight: 400
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Coluna 3 - Contato */}
          <div className="text-center md:text-right space-y-4">
            <h4 
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ 
                color: COLORS.gold,
                fontFamily: "'Inter', system-ui, sans-serif",
                letterSpacing: '0.2em'
              }}
            >
              Contato
            </h4>
            <div className="space-y-2">
              <a
                href="mailto:contato@resverabio.com.br"
                className="block text-sm transition-colors duration-200"
                style={{ 
                  color: COLORS.whiteMuted,
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 300
                }}
              >
                contato@resverabio.com.br
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm transition-colors duration-200"
                style={{ 
                  color: COLORS.whiteMuted,
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 300
                }}
              >
                WhatsApp: (11) 99999-9999
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* ═══════════════════════════════════════════════════════════════════
          COPYRIGHT
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <Container className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p 
              className="text-xs text-center md:text-left"
              style={{ 
                color: COLORS.whiteSubtle,
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 300
              }}
            >
              © {currentYear} Resverabio®. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center gap-6">
              {['Termos de Uso', 'Política de Privacidade'].map((text) => (
                <a
                  key={text}
                  href={`#${text.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-xs transition-colors duration-200"
                  style={{ 
                    color: COLORS.whiteSubtle,
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontWeight: 300
                  }}
                >
                  {text}
                </a>
              ))}
            </div>
          </div>
          
          {/* Frase de amor */}
          <p 
            className="text-center mt-4 flex items-center justify-center gap-2"
            style={{ 
              color: 'rgba(255, 255, 255, 0.2)',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '11px',
              fontWeight: 300
            }}
          >
            Feito com <Heart size={10} style={{ color: COLORS.gold }} /> para sua longevidade
          </p>
        </Container>
      </div>
    </footer>
  );
};

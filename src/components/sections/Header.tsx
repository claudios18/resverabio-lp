import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from '../ui/Container';
import { CartDrawer } from '../cart/CartDrawer';
import { useCart } from '../../contexts/CartContext';

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║                    BLOCO 1: HEADER - RESVERABIO®                         ║
 * ║       VERSÃO 4.0 | Carrinho Funcional | 19 Mar 2026                      ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 * 
 * ESPECIFICAÇÕES DE LUXO:
 * - Fundo: Roxo Médio (#6B4E7C) com glow neon sutil
 * - Logo: 600x200px | Proporção 3:1 preservada
 * - Escala Mobile Otimizada: h-16 (64px) → compacto e premium
 * - Escala Desktop: h-24 (md) → h-28 (lg)
 * - Carrinho Mobile: Imagem customizada resverabio-carrinho.png (44x44px)
 * - Proporções Harmônicas: Logo(40px) | Menu(44px) | Carrinho(44px)
 * 
 * FUNCIONALIDADES:
 * ✓ Carrinho com contador dinâmico
 * ✓ Drawer lateral ao clicar no carrinho
 * ✓ Animações suaves de transição
 */

// Timestamp para cache-buster da imagem
const LOGO_TIMESTAMP = Date.now();
const CART_TIMESTAMP = Date.now();

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  
  // Integração com o contexto do carrinho
  const { totalItems, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Benefícios', href: '#beneficios', external: false },
    { label: 'Depoimentos', href: '#depoimentos', external: false },
    { label: 'Produtos', href: '#produtos', external: false },
    { label: 'Fórmula', href: 'https://resverabio.com/formula', external: true },
];

  const handleNavClick = (link: typeof navLinks[0], e?: React.MouseEvent) => {
    if (link.external) {
      // Links externos abrem em nova aba
      window.open(link.href, '_blank', 'noopener,noreferrer');
      setIsMobileMenuOpen(false);
    } else {
      // Links internos: fecha menu primeiro, depois deixa o navegador fazer o scroll nativo
      e?.preventDefault();
      setIsMobileMenuOpen(false);
      
      // Delay para o menu fechar e recalcular posições
      setTimeout(() => {
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-[#6B4E7C] ${isScrolled ? 'shadow-[0_0_40px_rgba(107,78,124,0.6),0_0_60px_rgba(107,78,124,0.4),0_4px_20px_rgba(0,0,0,0.3)]' : 'neon-glow'}`}
      >
        {/* Container Principal com Altura Monumental */}
        <div className="h-16 md:h-24 lg:h-28">
          <Container className="h-full">
            {/* ═════════════════════════════════════════════════════════════════
                LAYOUT HEADER: Grid 3 colunas no mobile, Flex no desktop
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                Mobile:  [LOGO] | [MENU] | [CARRINHO]  (3 pontos)
                Desktop: [LOGO] + [NAV] ........ [CARRINHO] (flex between)
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <div className="grid grid-cols-3 md:flex md:items-center md:justify-between h-full">
              
              {/* ═══════════════════════════════════════════════════════════════
                  COLUNA 1: Logo (Esquerda/Mobile e Desktop)
                  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
              <a 
                href="/" 
                className="flex items-center justify-start"
              >
                {!logoError ? (
                  <img
                    src={`/resverabio-logomarca.png?v=${LOGO_TIMESTAMP}`}
                    alt="Resverabio®"
                    className="h-10 md:h-12 w-auto object-contain"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <span className="text-white text-2xl font-semibold">
                    Resvera<span className="text-luxury-gold">bio</span>®
                  </span>
                )}
              </a>

              {/* ═══════════════════════════════════════════════════════════════
                  COLUNA 2: Menu Mobile (Centro, apenas mobile)
                  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
              <div className="flex items-center justify-center md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300"
                  style={{
                    backgroundColor: isMobileMenuOpen ? 'rgba(201,169,98,0.2)' : 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(201,169,98,0.3)',
                    boxShadow: isMobileMenuOpen 
                      ? '0 0 20px rgba(201,169,98,0.3), inset 0 1px 0 rgba(255,255,255,0.1)' 
                      : '0 4px 15px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)',
                  }}
                  aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                >
                  {isMobileMenuOpen ? (
                    <X size={20} strokeWidth={1.5} style={{ color: '#c9a962' }} />
                  ) : (
                    <Menu size={20} strokeWidth={1.5} style={{ color: '#ffffff' }} />
                  )}
                </button>
              </div>

              {/* ═══════════════════════════════════════════════════════════════
                  NAVEGAÇÃO DESKTOP (Central, apenas desktop)
                  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
              <nav className="hidden md:flex items-center gap-10 lg:gap-12">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={(e) => handleNavClick(link, e as unknown as React.MouseEvent)}
                    className="text-white/90 hover:text-[#c9a962] transition-colors duration-300 font-medium tracking-wide"
                    style={{ fontSize: '21px', lineHeight: '1.2' }}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              {/* ═══════════════════════════════════════════════════════════════
                  COLUNA 3: Carrinho (Direita, mobile e desktop)
                  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                  Mobile: Imagem customizada resverabio-carrinho.png
                  Desktop: Ícone ShoppingBag padrão
                  Funcionalidade: Abre drawer ao clicar
                  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
              <div className="flex items-center justify-end">
                <button 
                  onClick={toggleCart}
                  className="relative flex items-center justify-center transition-transform duration-300 hover:scale-105"
                  aria-label="Carrinho de compras"
                >
                  {/* Mobile: Imagem do carrinho */}
                  <img 
                    src={`/resverabio-carrinho.png?v=${CART_TIMESTAMP}`}
                    alt="Carrinho"
                    className="md:hidden h-10 w-auto object-contain"
                  />
                  {/* Desktop: Ícone ShoppingBag */}
                  <span className="hidden md:block relative">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="text-white hover:text-[#c9a962] transition-colors duration-300"
                    >
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
                      <path d="M3 6h18"/>
                      <path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                  </span>
                  
                  {/* Badge de contagem - animado */}
                  <span 
                    className={`absolute -top-1 -right-1 md:-top-1 md:-right-1 min-w-[20px] h-5 flex items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                      totalItems > 0 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                    }`}
                    style={{ 
                      backgroundColor: '#c9a962',
                      color: '#000000',
                      padding: totalItems > 9 ? '0 6px' : '0',
                    }}
                  >
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                </button>
              </div>

            </div>
          </Container>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════════════
          MENU MOBILE OVERLAY
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div
        className={`fixed left-0 right-0 z-30 md:hidden transition-all duration-500 neon-glow ${
          isMobileMenuOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-4 pointer-events-none'
        }`}
        style={{
          top: '64px',
          backgroundColor: '#6B4E7C',
          borderTop: '1px solid rgba(255, 255, 255, 0.15)',
        }}
      >
        <Container>
          <nav className="flex flex-col py-8">
            {navLinks.map((link, index) => (
              <button
                key={link.label}
                onClick={(e) => handleNavClick(link, e as unknown as React.MouseEvent)}
                className="py-4 text-white/80 hover:text-[#c9a962] transition-colors duration-300 font-medium text-left border-b last:border-0"
                style={{ 
                  fontSize: '20px',
                  borderColor: 'rgba(255, 255, 255, 0.06)',
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </Container>
      </div>

      {/* Cart Drawer - Componente funcional */}
      <CartDrawer />

      {/* Spacer para compensar header fixo */}
      <div className="h-16 md:h-24 lg:h-28" />
    </>
  );
}

export default Header;

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from '../ui/Container';
import { CartDrawer } from '../cart/CartDrawer';
import { useCart } from '../../contexts/CartContext';

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║                    BLOCO 1: HEADER - RESVERABIO®                         ║
 * ║       VERSÃO 4.2 | Carrinho 100% Funcional | 19 Mar 2026                 ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 * 
 * ESPECIFICAÇÕES:
 * - Ícone desktop: 36px (50% maior que o original de 24px)
 * - Container do ícone: sem restrições de largura
 * - Badge: posicionado absoluto, escala com o ícone
 */

const LOGO_TIMESTAMP = Date.now();
const CART_TIMESTAMP = Date.now();

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  
  // INTEGRAÇÃO COM CARTCONTEXT
  const { totalItems, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
      window.open(link.href, '_blank', 'noopener,noreferrer');
      setIsMobileMenuOpen(false);
    } else {
      e?.preventDefault();
      setIsMobileMenuOpen(false);
      setTimeout(() => {
        const element = document.querySelector(link.href);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-[#6B4E7C] ${
          isScrolled ? 'shadow-[0_0_40px_rgba(107,78,124,0.6),0_0_60px_rgba(107,78,124,0.4),0_4px_20px_rgba(0,0,0,0.3)]' : 'neon-glow'
        }`}
      >
        <div className="h-16 md:h-24 lg:h-28">
          <Container className="h-full">
            <div className="grid grid-cols-3 md:flex md:items-center md:justify-between h-full">
              
              {/* LOGO */}
              <a href="/" className="flex items-center justify-start">
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

              {/* MENU MOBILE (centro) */}
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

              {/* NAVEGAÇÃO DESKTOP */}
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

              {/* ═══════════════════════════════════════════════════════════════════
                  CARRINHO - INTEGRAÇÃO COM CARTCONTEXT
                  Desktop: Ícone 36px (50% maior) em container sem restrições
                  Mobile: Imagem original
                  Badge: Posicionado absolutamente, aparece quando totalItems > 0
                  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
              <div className="flex items-center justify-end">
                <button 
                  onClick={toggleCart}
                  className="relative flex items-center justify-center p-2 transition-transform duration-300 hover:scale-105"
                  aria-label="Carrinho de compras"
                  type="button"
                >
                  {/* Mobile: Imagem do carrinho */}
                  <img 
                    src={`/resverabio-carrinho.png?v=${CART_TIMESTAMP}`}
                    alt="Carrinho"
                    className="md:hidden h-10 w-auto object-contain"
                  />
                  
                  {/* Desktop: Ícone 36px (50% maior que 24px) */}
                  <span className="hidden md:block relative">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="36" 
                      height="36" 
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
                  
                  {/* Badge de contagem - aparece quando há itens */}
                  <span 
                    className={`absolute flex items-center justify-center rounded-full font-bold transition-all duration-300 bg-[#c9a962] text-black
                      md:-top-1 md:-right-1 md:min-w-[24px] md:h-6 md:text-sm
                      -top-1 -right-1 min-w-[20px] h-5 text-xs
                      ${totalItems > 0 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                    `}
                    style={{ padding: totalItems > 9 ? '0 6px' : '0' }}
                  >
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                </button>
              </div>

            </div>
          </Container>
        </div>
      </header>

      {/* MENU MOBILE OVERLAY */}
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

      {/* Cart Drawer */}
      <CartDrawer />

      {/* Spacer */}
      <div className="h-16 md:h-24 lg:h-28" />
    </>
  );
}

export default Header;

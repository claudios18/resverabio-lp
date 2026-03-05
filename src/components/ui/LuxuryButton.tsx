/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║                    LUXURY BUTTON - BOTÃO DE LUXO PRETO/DOURADO           ║
 * ║                                                                          ║
 * ║  Especificações de Luxo:                                                 ║
 * ║  • Fundo: Preto (#1a1a1a)                                                ║
 * ║  • Texto: Dourado (#c9a962)                                              ║
 * ║  • Efeitos: hover:scale-105, active:scale-95                             ║
 * ║  • Sombra: Sutil preta para profundidade                                 ║
 * ║  • Animação: Transição suave 300ms                                       ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import type { ReactNode } from 'react';

interface LuxuryButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
}

// Cores padronizadas
const COLORS = {
  black: '#1a1a1a',
  gold: '#c9a962',
} as const;

export function LuxuryButton({ 
  text = 'GARANTIR MEU RESVERABIO®', 
  onClick,
  className = '',
  children
}: LuxuryButtonProps) {
  const buttonContent = children ?? text;
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      const element = document.querySelector('#produtos');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        inline-flex 
        items-center 
        justify-center 
        py-4 
        px-10 
        rounded-xl 
        font-bold 
        text-lg 
        transition-all 
        duration-300 
        hover:scale-105 
        hover:shadow-2xl
        active:scale-95
        ${className}
      `}
      style={{
        backgroundColor: COLORS.black,
        color: COLORS.gold,
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.25)',
        letterSpacing: '0.08em',
      }}
    >
      {buttonContent}
    </button>
  );
}

// Versão mobile - largura total
export function LuxuryButtonMobile({ 
  text = 'GARANTIR MEU RESVERABIO®', 
  onClick,
  className = '',
  children
}: LuxuryButtonProps) {
  const buttonContent = children ?? text;
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      const element = document.querySelector('#produtos');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        w-full 
        max-w-sm 
        py-4 
        px-8 
        rounded-xl 
        font-bold 
        text-lg 
        transition-all 
        duration-300 
        hover:scale-105 
        active:scale-95
        ${className}
      `}
      style={{
        backgroundColor: COLORS.black,
        color: COLORS.gold,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        letterSpacing: '0.05em',
      }}
    >
      {buttonContent}
    </button>
  );
}

// Botão responsivo - se adapta a mobile/desktop
export function LuxuryButtonResponsive({ 
  text = 'GARANTIR MEU RESVERABIO®', 
  onClick,
  className = '',
  children
}: LuxuryButtonProps) {
  const buttonContent = children ?? text;
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      const element = document.querySelector('#produtos');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        w-full 
        max-w-sm 
        md:w-auto 
        md:min-w-[320px] 
        py-4 
        px-8 
        rounded-xl 
        font-bold 
        text-lg 
        transition-all 
        duration-300 
        hover:scale-105 
        hover:shadow-2xl
        active:scale-95
        ${className}
      `}
      style={{
        backgroundColor: COLORS.black,
        color: COLORS.gold,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        letterSpacing: '0.05em',
      }}
    >
      {buttonContent}
    </button>
  );
}

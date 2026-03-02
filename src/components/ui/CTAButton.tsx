/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║                    CTAButton - BOTÃO DOURADO ELEGANTE                    ║
 * ║                                                                          ║
 * ║  Especificações:                                                         ║
 * ║  • Cor: Dourado padrão (#c9a962)                                         ║
 * ║  • Estilo: Clássico, elegante, levemente maior                           ║
 * ║  • Sombra: Discreta para profundidade                                    ║
 * ║  • Hover: Efeito de flutuação suave + escurecimento                      ║
 * ║  • Responsivo: Largura adequada no mobile                                ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import type { ReactNode } from 'react';

interface CTAButtonProps {
  text?: string;
  href?: string;
  className?: string;
  children?: ReactNode;
}

export function CTAButton({ 
  text = 'Quero Começar Minha Transformação', 
  href = '#produtos',
  className = '',
  children
}: CTAButtonProps) {
  // Usa children se fornecido, senão usa text
  const buttonContent = children ?? text;
  return (
    <a
      href={href}
      className={`
        group 
        relative 
        inline-flex 
        items-center 
        justify-center 
        overflow-hidden 
        transition-all 
        duration-500 
        ease-out
        hover:-translate-y-1
        ${className}
      `}
      style={{
        padding: '20px 48px',
        backgroundColor: '#c9a962',
        borderRadius: '4px',
        boxShadow: '0 8px 30px rgba(201, 169, 98, 0.35), 0 4px 15px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Efeito de brilho no hover */}
      <span 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(0,0,0,0.05) 100%)',
        }}
      />
      
      {/* Efeito de escurecimento sutil no hover */}
      <span 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          backgroundColor: 'rgba(0,0,0,0.08)',
        }}
      />

      {/* Texto do botão */}
      <span
        className="relative z-10 font-semibold tracking-wider uppercase transition-transform duration-500 group-hover:scale-[1.02]"
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: 'clamp(11px, 1.2vw, 13px)',
          letterSpacing: '0.15em',
          color: '#ffffff',
          textShadow: '0 1px 2px rgba(0,0,0,0.1)',
        }}
      >
        {buttonContent}
      </span>

      {/* Ícone de seta */}
      <svg
        className="relative z-10 ml-3 w-5 h-5 transition-all duration-500 group-hover:translate-x-1"
        fill="none"
        stroke="#ffffff"
        viewBox="0 0 24 24"
        style={{ 
          filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))',
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </a>
  );
}

// Versão responsiva para mobile (largura total com padding)
export function CTAButtonMobile({ 
  text = 'Quero Começar Minha Transformação', 
  href = '#produtos',
  className = '',
  children
}: CTAButtonProps) {
  // Usa children se fornecido, senão usa text
  const buttonContent = children ?? text;
  return (
    <a
      href={href}
      className={`
        group 
        relative 
        flex 
        w-full 
        max-w-sm
        mx-auto
        items-center 
        justify-center 
        overflow-hidden 
        transition-all 
        duration-500 
        ease-out
        hover:-translate-y-1
        ${className}
      `}
      style={{
        padding: '18px 32px',
        backgroundColor: '#c9a962',
        borderRadius: '4px',
        boxShadow: '0 8px 30px rgba(201, 169, 98, 0.35), 0 4px 15px rgba(0, 0, 0, 0.1)',
      }}
    >
      <span 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(0,0,0,0.05) 100%)',
        }}
      />
      
      <span 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          backgroundColor: 'rgba(0,0,0,0.08)',
        }}
      />

      <span
        className="relative z-10 font-semibold tracking-wider uppercase transition-transform duration-500 group-hover:scale-[1.02]"
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: '12px',
          letterSpacing: '0.12em',
          color: '#ffffff',
          textShadow: '0 1px 2px rgba(0,0,0,0.1)',
        }}
      >
        {buttonContent}
      </span>

      <svg
        className="relative z-10 ml-3 w-5 h-5 transition-all duration-500 group-hover:translate-x-1 flex-shrink-0"
        fill="none"
        stroke="#ffffff"
        viewBox="0 0 24 24"
        style={{ 
          filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))',
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </a>
  );
}

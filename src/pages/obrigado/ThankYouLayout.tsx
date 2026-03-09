/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║              THANK YOU LAYOUT - LAYOUT DE PÁGINAS DE OBRIGADO            ║
 * ║                                                                          ║
 * ║  Design de Luxo:                                                         ║
 * ║  • Fundo: Preto absoluto (#000000) com gradiente sutil                   ║
 * ║  • Detalhes: Dourado (#c9a962)                                           ║
 * ║  • Tipografia: Playfair Display + Inter                                  ║
 * ║  • Botão WhatsApp: Fixo no canto inferior direito                        ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import type { ReactNode } from 'react';
import { MessageCircle, CheckCircle, ArrowLeft, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

// Cores de luxo padronizadas
const COLORS = {
  gold: '#c9a962',
  goldLight: '#e8d5a3',
  goldDark: '#a88b4a',
  white: '#ffffff',
  whiteMuted: 'rgba(255, 255, 255, 0.7)',
  whiteSubtle: 'rgba(255, 255, 255, 0.5)',
  black: '#000000',
  blackLight: '#0a0a0a',
  blackElevated: '#111111',
} as const;

interface ThankYouLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
  icon?: ReactNode;
}

export function ThankYouLayout({
  children,
  title,
  subtitle,
  showBackButton = true,
  icon,
}: ThankYouLayoutProps) {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: `linear-gradient(180deg, ${COLORS.black} 0%, ${COLORS.blackLight} 50%, ${COLORS.blackElevated} 100%)`,
      }}
    >
      {/* Header com Logo */}
      <header
        className="w-full py-6 px-4 md:px-8"
        style={{
          backgroundColor: COLORS.black,
          borderBottom: `1px solid ${COLORS.gold}20`,
        }}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-80"
          >
            <Sparkles size={24} style={{ color: COLORS.gold }} />
            <span
              className="text-xl md:text-2xl font-semibold tracking-tight"
              style={{
                color: COLORS.white,
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              Resverabio<span style={{ color: COLORS.gold }}>®</span>
            </span>
          </Link>
          
          {showBackButton && (
            <Link
              to="/"
              className="flex items-center gap-2 text-sm transition-all duration-200 hover:opacity-80"
              style={{ color: COLORS.whiteMuted }}
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Voltar ao site</span>
            </Link>
          )}
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 flex items-center justify-center px-4 py-12 md:py-20">
        <div className="w-full max-w-2xl">
          {/* Card Principal */}
          <div
            className="rounded-2xl p-8 md:p-12"
            style={{
              backgroundColor: COLORS.blackElevated,
              border: `1px solid ${COLORS.gold}30`,
              boxShadow: `0 25px 80px -20px rgba(0, 0, 0, 0.8), 0 0 60px ${COLORS.gold}10`,
            }}
          >
            {/* Ícone/Status */}
            <div className="flex justify-center mb-8">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: `${COLORS.gold}15`,
                  border: `2px solid ${COLORS.gold}40`,
                  boxShadow: `0 0 40px ${COLORS.gold}20`,
                }}
              >
                {icon || (
                  <CheckCircle
                    size={40}
                    style={{ color: COLORS.gold }}
                    strokeWidth={1.5}
                  />
                )}
              </div>
            </div>

            {/* Título */}
            <h1
              className="text-2xl md:text-4xl font-semibold text-center mb-4"
              style={{
                color: COLORS.white,
                fontFamily: "'Playfair Display', Georgia, serif",
                lineHeight: 1.2,
              }}
            >
              {title}
            </h1>

            {/* Subtítulo */}
            {subtitle && (
              <p
                className="text-center text-base md:text-lg mb-8"
                style={{
                  color: COLORS.whiteMuted,
                  fontFamily: "'Inter', system-ui, sans-serif",
                }}
              >
                {subtitle}
              </p>
            )}

            {/* Divisor dourado */}
            <div className="flex justify-center mb-8">
              <div
                className="w-24 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${COLORS.gold}, transparent)`,
                }}
              />
            </div>

            {/* Conteúdo específico da página */}
            {children}
          </div>

          {/* Selo de Segurança */}
          <div className="mt-8 text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                backgroundColor: `${COLORS.gold}10`,
                border: `1px solid ${COLORS.gold}20`,
              }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: COLORS.gold,
                  boxShadow: `0 0 8px ${COLORS.gold}`,
                }}
              />
              <span
                className="text-xs uppercase tracking-widest"
                style={{
                  color: COLORS.gold,
                  fontFamily: "'Inter', system-ui, sans-serif",
                }}
              >
                Ambiente Seguro
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Minimalista */}
      <footer
        className="py-6 px-4"
        style={{
          backgroundColor: COLORS.black,
          borderTop: `1px solid ${COLORS.gold}15`,
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-sm"
            style={{
              color: COLORS.whiteSubtle,
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            Naturalbio Suplementos Ltda • CNPJ: 50.482.086/0001-04
          </p>
          <p
            className="text-xs mt-1"
            style={{
              color: 'rgba(255, 255, 255, 0.3)',
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            ©2024 RESVERABIO® Todos os direitos Reservados
          </p>
        </div>
      </footer>

      {/* Botão Flutuante WhatsApp */}
      <a
        href="https://wa.me/5521979582229"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        style={{
          backgroundColor: '#25D366',
          color: COLORS.white,
          boxShadow: '0 8px 32px rgba(37, 211, 102, 0.4)',
        }}
      >
        <MessageCircle size={22} fill="white" />
        <span
          className="hidden sm:inline font-medium text-sm"
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          Suporte via WhatsApp
        </span>
      </a>
    </div>
  );
}

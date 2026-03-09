/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║                    OBRIGADO - PÁGINA GERAL DE AGRADECIMENTO              ║
 * ║                                                                          ║
 * ║  Rota: /obrigado                                                         ║
 * ║  Mensagem de boas-vindas à jornada de longevidade                        ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { Heart, Clock, Mail, Sparkles } from 'lucide-react';
import { ThankYouLayout } from './ThankYouLayout';

const COLORS = {
  gold: '#c9a962',
  goldLight: '#e8d5a3',
  white: '#ffffff',
  whiteMuted: 'rgba(255, 255, 255, 0.7)',
  whiteSubtle: 'rgba(255, 255, 255, 0.5)',
} as const;

export function Obrigado() {
  return (
    <ThankYouLayout
      title="Bem-vindo à Jornada da Longevidade"
      subtitle="Seu pedido foi recebido com sucesso"
      icon={<Sparkles size={40} style={{ color: COLORS.gold }} />}
    >
      {/* Mensagem Principal */}
      <div className="space-y-6">
        <p
          className="text-center text-base md:text-lg leading-relaxed"
          style={{
            color: COLORS.whiteMuted,
            fontFamily: "'Inter', system-ui, sans-serif",
            lineHeight: 1.8,
          }}
        >
          Parabéns por dar o primeiro passo rumo a uma vida mais saudável e
          vibrante. O <strong style={{ color: COLORS.gold }}>Resverabio®</strong>{' '}
          será seu aliado nessa jornada de rejuvenescimento celular.
        </p>

        {/* Card de Confirmação */}
        <div
          className="rounded-xl p-6 my-8"
          style={{
            backgroundColor: 'rgba(201, 169, 98, 0.08)',
            border: `1px solid ${COLORS.gold}25`,
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${COLORS.gold}20` }}
            >
              <Mail size={20} style={{ color: COLORS.gold }} />
            </div>
            <div>
              <h3
                className="font-semibold mb-1"
                style={{
                  color: COLORS.goldLight,
                  fontFamily: "'Inter', system-ui, sans-serif",
                }}
              >
                E-mail de Confirmação Enviado
              </h3>
              <p
                className="text-sm"
                style={{
                  color: COLORS.whiteSubtle,
                  fontFamily: "'Inter', system-ui, sans-serif",
                }}
              >
                Verifique sua caixa de entrada (e spam) para acessar os detalhes
                do seu pedido e instruções de uso do Resverabio®.
              </p>
            </div>
          </div>
        </div>

        {/* Informações de Entrega */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            className="rounded-xl p-5 text-center"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <Clock
              size={24}
              style={{ color: COLORS.gold }}
              className="mx-auto mb-3"
            />
            <h4
              className="font-medium mb-1"
              style={{
                color: COLORS.white,
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
            >
              Prazo de Entrega
            </h4>
            <p
              className="text-sm"
              style={{
                color: COLORS.whiteSubtle,
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
            >
              3 a 7 dias úteis
            </p>
          </div>

          <div
            className="rounded-xl p-5 text-center"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <Heart
              size={24}
              style={{ color: COLORS.gold }}
              className="mx-auto mb-3"
            />
            <h4
              className="font-medium mb-1"
              style={{
                color: COLORS.white,
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
            >
              Garantia de Satisfação
            </h4>
            <p
              className="text-sm"
              style={{
                color: COLORS.whiteSubtle,
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
            >
              90 dias de garantia
            </p>
          </div>
        </div>

        {/* Mensagem de Encerramento */}
        <div className="text-center pt-4">
          <p
            className="text-sm italic"
            style={{
              color: COLORS.whiteSubtle,
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            "A longevidade começa com uma única decisão. Você acabou de tomar a
            sua."
          </p>
        </div>
      </div>
    </ThankYouLayout>
  );
}

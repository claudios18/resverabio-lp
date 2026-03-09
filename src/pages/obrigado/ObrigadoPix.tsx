/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║                    OBRIGADO PIX - PÁGINA DE PAGAMENTO PIX                ║
 * ║                                                                          ║
 * ║  Rota: /obrigado-pix                                                     ║
 * ║  Destaque a urgência da reserva e instruções para pagamento PIX          ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { QrCode, AlertCircle, Copy, Timer, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { ThankYouLayout } from './ThankYouLayout';

const COLORS = {
  gold: '#c9a962',
  goldLight: '#e8d5a3',
  white: '#ffffff',
  whiteMuted: 'rgba(255, 255, 255, 0.7)',
  whiteSubtle: 'rgba(255, 255, 255, 0.5)',
  red: '#ef4444',
} as const;

export function ObrigadoPix() {
  const [copied, setCopied] = useState(false);

  // Simulação de um código PIX (em produção, virá da API de pagamento)
  const pixCode =
    '00020126580014BR.GOV.BCB.PIX0136resverabio@naturalbio.com.br5204000053039865404187.005802BR5925Naturalbio Suplementos Ltda6009CABO FRIO62070503***6304E2CA';

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <ThankYouLayout
      title="Aguardando Pagamento PIX"
      subtitle="Complete seu pagamento para garantir sua reserva"
      icon={<QrCode size={40} style={{ color: COLORS.gold }} />}
    >
      <div className="space-y-6">
        {/* Alerta de Urgência */}
        <div
          className="rounded-xl p-4 flex items-start gap-3"
          style={{
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
          }}
        >
          <AlertCircle
            size={20}
            style={{ color: COLORS.red }}
            className="flex-shrink-0 mt-0.5"
          />
          <div>
            <h3
              className="font-semibold text-sm mb-1"
              style={{ color: COLORS.red }}
            >
              Reserva por Tempo Limitado
            </h3>
            <p
              className="text-sm"
              style={{
                color: COLORS.whiteMuted,
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
            >
              Seu pedido está reservado por{' '}
              <strong style={{ color: COLORS.gold }}>30 minutos</strong>. Após
              esse período, os itens podem ser liberados para outros clientes.
            </p>
          </div>
        </div>

        {/* Timer */}
        <div
          className="rounded-xl p-6 text-center"
          style={{
            backgroundColor: 'rgba(201, 169, 98, 0.08)',
            border: `1px solid ${COLORS.gold}25`,
          }}
        >
          <Timer
            size={32}
            style={{ color: COLORS.gold }}
            className="mx-auto mb-3"
          />
          <p
            className="text-sm mb-1"
            style={{
              color: COLORS.whiteSubtle,
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            Tempo restante para pagamento
          </p>
          <p
            className="text-3xl font-bold"
            style={{
              color: COLORS.gold,
              fontFamily: "'Inter', system-ui, sans-serif",
              letterSpacing: '0.1em',
            }}
          >
            29:59
          </p>
        </div>

        {/* Código PIX */}
        <div
          className="rounded-xl p-5"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <h3
            className="font-semibold mb-3 text-center"
            style={{
              color: COLORS.goldLight,
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            Código PIX Copia e Cola
          </h3>

          <div
            className="rounded-lg p-4 mb-4 font-mono text-xs break-all"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              color: COLORS.whiteMuted,
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {pixCode}
          </div>

          <button
            onClick={handleCopyPix}
            className="w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
            style={{
              backgroundColor: copied ? 'rgba(34, 197, 94, 0.2)' : COLORS.gold,
              color: copied ? '#22c55e' : COLORS.white,
              border: copied ? '1px solid #22c55e' : 'none',
            }}
          >
            <Copy size={18} />
            {copied ? 'Código Copiado!' : 'Copiar Código PIX'}
          </button>
        </div>

        {/* Passos */}
        <div className="space-y-3">
          <h4
            className="font-medium text-center text-sm uppercase tracking-wider"
            style={{
              color: COLORS.whiteSubtle,
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            Como pagar
          </h4>

          {[
            'Abra o aplicativo do seu banco',
            'Escolha pagamento via PIX',
            'Cole o código ou escaneie o QR Code',
            'Confirme o pagamento',
          ].map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 rounded-lg"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
              }}
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                style={{
                  backgroundColor: `${COLORS.gold}20`,
                  color: COLORS.gold,
                }}
              >
                {index + 1}
              </div>
              <span
                className="text-sm"
                style={{
                  color: COLORS.whiteMuted,
                  fontFamily: "'Inter', system-ui, sans-serif",
                }}
              >
                {step}
              </span>
            </div>
          ))}
        </div>

        {/* Segurança */}
        <div
          className="rounded-xl p-4 flex items-center gap-3"
          style={{
            backgroundColor: 'rgba(34, 197, 94, 0.08)',
            border: '1px solid rgba(34, 197, 94, 0.2)',
          }}
        >
          <ShieldCheck
            size={20}
            style={{ color: '#22c55e' }}
            className="flex-shrink-0"
          />
          <p
            className="text-sm"
            style={{
              color: COLORS.whiteMuted,
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            Após a confirmação do pagamento, você receberá um e-mail com a
            confirmação em até 5 minutos.
          </p>
        </div>
      </div>
    </ThankYouLayout>
  );
}

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║                 OBRIGADO BOLETO - PÁGINA DE PAGAMENTO BOLETO             ║
 * ║                                                                          ║
 * ║  Rota: /obrigado-boleto                                                  ║
 * ║  Informe o prazo de 3 dias para pagamento e compensação bancária         ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import {
  FileText,
  Calendar,
  Clock,
  AlertTriangle,
  Download,
  Banknote,
  Copy,
} from 'lucide-react';
import { useState } from 'react';
import { ThankYouLayout } from './ThankYouLayout';

const COLORS = {
  gold: '#c9a962',
  goldLight: '#e8d5a3',
  white: '#ffffff',
  whiteMuted: 'rgba(255, 255, 255, 0.7)',
  whiteSubtle: 'rgba(255, 255, 255, 0.5)',
  orange: '#f97316',
} as const;

export function ObrigadoBoleto() {
  const [copied, setCopied] = useState(false);

  // Data de vencimento (3 dias corridos)
  const hoje = new Date();
  const vencimento = new Date(hoje);
  vencimento.setDate(hoje.getDate() + 3);

  const dataFormatada = vencimento.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const diaSemana = vencimento.toLocaleDateString('pt-BR', {
    weekday: 'long',
  });

  // Simulação de linha digitável do boleto
  const linhaDigitavel =
    '34191.79001 01043.510047 91020.150008 6 93450000018700';

  const handleCopyBoleto = () => {
    navigator.clipboard.writeText(linhaDigitavel.replace(/\s/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <ThankYouLayout
      title="Boleto Gerado com Sucesso"
      subtitle="Realize o pagamento para confirmar seu pedido"
      icon={<FileText size={40} style={{ color: COLORS.gold }} />}
    >
      <div className="space-y-6">
        {/* Data de Vencimento */}
        <div
          className="rounded-xl p-6 text-center"
          style={{
            backgroundColor: 'rgba(201, 169, 98, 0.08)',
            border: `1px solid ${COLORS.gold}25`,
          }}
        >
          <Calendar
            size={28}
            style={{ color: COLORS.gold }}
            className="mx-auto mb-3"
          />
          <p
            className="text-sm mb-1"
            style={{
              color: COLORS.whiteSubtle,
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            Vencimento do Boleto
          </p>
          <p
            className="text-xl font-semibold"
            style={{
              color: COLORS.gold,
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            {dataFormatada}
          </p>
          <p
            className="text-sm mt-1"
            style={{
              color: COLORS.whiteSubtle,
              fontFamily: "Inter, system-ui, sans-serif",
              textTransform: 'capitalize',
            }}
          >
            {diaSemana}
          </p>
        </div>

        {/* Alerta de Prazo */}
        <div
          className="rounded-xl p-4 flex items-start gap-3"
          style={{
            backgroundColor: 'rgba(249, 115, 22, 0.1)',
            border: '1px solid rgba(249, 115, 22, 0.3)',
          }}
        >
          <AlertTriangle
            size={20}
            style={{ color: COLORS.orange }}
            className="flex-shrink-0 mt-0.5"
          />
          <div>
            <h3
              className="font-semibold text-sm mb-1"
              style={{ color: COLORS.orange }}
            >
              Prazo Importante
            </h3>
            <p
              className="text-sm"
              style={{
                color: COLORS.whiteMuted,
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              Você tem <strong style={{ color: COLORS.gold }}>3 dias</strong>{" "}
              para realizar o pagamento. Após o vencimento, o boleto perde a
              validade e o pedido será cancelado automaticamente.
            </p>
          </div>
        </div>

        {/* Linha Digitável */}
        <div
          className="rounded-xl p-5"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Banknote size={18} style={{ color: COLORS.gold }} />
            <h3
              className="font-semibold text-sm"
              style={{
                color: COLORS.goldLight,
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              Linha Digitável
            </h3>
          </div>

          <div
            className="rounded-lg p-4 mb-4 font-mono text-sm tracking-wider text-center"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              color: COLORS.whiteMuted,
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {linhaDigitavel}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleCopyBoleto}
              className="py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
              style={{
                backgroundColor: copied
                  ? 'rgba(34, 197, 94, 0.2)'
                  : 'rgba(255, 255, 255, 0.08)',
                color: copied ? '#22c55e' : COLORS.white,
                border: copied ? '1px solid #22c55e' : '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <Copy size={16} />
              <span className="text-sm">{copied ? 'Copiado!' : 'Copiar'}</span>
            </button>

            <button
              className="py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
              style={{
                backgroundColor: COLORS.gold,
                color: '#000',
              }}
            >
              <Download size={16} />
              <span className="text-sm">Download PDF</span>
            </button>
          </div>
        </div>

        {/* Compensação Bancária */}
        <div
          className="rounded-xl p-5"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div className="flex items-start gap-3">
            <Clock
              size={20}
              style={{ color: COLORS.gold }}
              className="flex-shrink-0 mt-1"
            />
            <div>
              <h3
                className="font-semibold mb-2"
                style={{
                  color: COLORS.goldLight,
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                Prazo de Compensação Bancária
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: COLORS.whiteMuted,
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                Após o pagamento, o boleto leva até{" "}
                <strong style={{ color: COLORS.gold }}>48 horas úteis</strong>{" "}
                para compensar no sistema bancário. Somente após essa
                confirmação seu pedido será liberado para envio.
              </p>
            </div>
          </div>
        </div>

        {/* Dicas */}
        <div className="space-y-3">
          <h4
            className="font-medium text-center text-sm uppercase tracking-wider"
            style={{
              color: COLORS.whiteSubtle,
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            Dicas Importantes
          </h4>

          {[
            'Pague em qualquer banco, casa lotérica ou internet banking',
            'Guarde o comprovante de pagamento até a confirmação',
            'Não deixe para pagar no último dia para evitar atrasos',
            'Após o pagamento, você receberá a confirmação por e-mail',
          ].map((tip, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 rounded-lg"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
              }}
            >
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5"
                style={{
                  backgroundColor: `${COLORS.gold}20`,
                  color: COLORS.gold,
                }}
              >
                ✓
              </div>
              <span
                className="text-sm"
                style={{
                  color: COLORS.whiteMuted,
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                {tip}
              </span>
            </div>
          ))}
        </div>
      </div>
    </ThankYouLayout>
  );
}

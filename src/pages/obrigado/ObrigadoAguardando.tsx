/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║           OBRIGADO AGUARDANDO - PÁGINA DE ANÁLISE DE SEGURANÇA           ║
 * ║                                                                          ║
 * ║  Rota: /obrigado-aguardando                                              ║
 * ║  Explica que a operadora está analisando a segurança da compra           ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import {
  Shield,
  Clock,
  Mail,
  AlertCircle,
  CheckCircle2,
  RefreshCw,
  Lock,
  Eye,
} from 'lucide-react';
import { ThankYouLayout } from './ThankYouLayout';

const COLORS = {
  gold: '#c9a962',
  goldLight: '#e8d5a3',
  white: '#ffffff',
  whiteMuted: 'rgba(255, 255, 255, 0.7)',
  whiteSubtle: 'rgba(255, 255, 255, 0.5)',
  blue: '#3b82f6',
} as const;

export function ObrigadoAguardando() {
  return (
    <ThankYouLayout
      title="Análise de Segurança em Andamento"
      subtitle="Estamos verificando os detalhes da sua compra"
      icon={<Shield size={40} style={{ color: COLORS.gold }} />}
    >
      <div className="space-y-6">
        {/* Status da Análise */}
        <div
          className="rounded-xl p-6 text-center"
          style={{
            backgroundColor: 'rgba(59, 130, 246, 0.08)',
            border: '1px solid rgba(59, 130, 246, 0.25)',
          }}
        >
          <div className="relative inline-block mb-4">
            <RefreshCw
              size={40}
              style={{ color: COLORS.blue }}
              className="animate-spin"
            />
            <div
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow: `0 0 30px ${COLORS.blue}40`,
              }}
            />
          </div>
          <h3
            className="font-semibold mb-2"
            style={{
              color: COLORS.blue,
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            Análise em Progresso
          </h3>
          <p
            className="text-sm"
            style={{
              color: COLORS.whiteMuted,
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            Nossa equipe de segurança está revisando os dados da transação
          </p>
        </div>

        {/* Tempo Estimado */}
        <div
          className="rounded-xl p-5"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${COLORS.gold}15` }}
            >
              <Clock size={24} style={{ color: COLORS.gold }} />
            </div>
            <div className="flex-1">
              <h3
                className="font-semibold mb-1"
                style={{
                  color: COLORS.goldLight,
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                Prazo de Análise
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: COLORS.whiteMuted,
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                A análise de segurança pode levar até{" "}
                <strong style={{ color: COLORS.gold }}>24 horas úteis</strong>.
                Este é um procedimento padrão para garantir a proteção dos seus
                dados e prevenir fraudes.
              </p>
            </div>
          </div>
        </div>

        {/* Por que a análise? */}
        <div className="space-y-4">
          <h4
            className="font-medium text-center text-sm uppercase tracking-wider"
            style={{
              color: COLORS.whiteSubtle,
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            Por que isso acontece?
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                icon: Lock,
                title: 'Verificação de Dados',
                desc: 'Confirmamos a validade das informações do cartão',
              },
              {
                icon: Eye,
                title: 'Prevenção a Fraudes',
                desc: 'Protegemos você contra transações não autorizadas',
              },
              {
                icon: Shield,
                title: 'Validação de Identidade',
                desc: 'Confirmamos que você é o titular do cartão',
              },
              {
                icon: CheckCircle2,
                title: 'Conformidade PCI',
                desc: 'Seguimos rigorosos padrões de segurança',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl p-4"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <item.icon
                  size={20}
                  style={{ color: COLORS.gold }}
                  className="mb-2"
                />
                <h5
                  className="font-medium text-sm mb-1"
                  style={{
                    color: COLORS.white,
                    fontFamily: "Inter, system-ui, sans-serif",
                  }}
                >
                  {item.title}
                </h5>
                <p
                  className="text-xs"
                  style={{
                    color: COLORS.whiteSubtle,
                    fontFamily: "Inter, system-ui, sans-serif",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Notificação */}
        <div
          className="rounded-xl p-4 flex items-start gap-3"
          style={{
            backgroundColor: 'rgba(201, 169, 98, 0.08)',
            border: `1px solid ${COLORS.gold}25`,
          }}
        >
          <Mail
            size={20}
            style={{ color: COLORS.gold }}
            className="flex-shrink-0 mt-0.5"
          />
          <div>
            <h3
              className="font-semibold text-sm mb-1"
              style={{ color: COLORS.goldLight }}
            >
              Você será notificado
            </h3>
            <p
              className="text-sm"
              style={{
                color: COLORS.whiteMuted,
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              Assim que a análise for concluída, você receberá um e-mail com o
              resultado. Se aprovado, seu pedido será processado
              imediatamente.
            </p>
          </div>
        </div>

        {/* Alerta */}
        <div
          className="rounded-xl p-4 flex items-start gap-3"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <AlertCircle
            size={20}
            style={{ color: COLORS.whiteSubtle }}
            className="flex-shrink-0 mt-0.5"
          />
          <div>
            <h3
              className="font-semibold text-sm mb-1"
              style={{ color: COLORS.whiteMuted }}
            >
              Não se preocupe
            </h3>
            <p
              className="text-sm"
              style={{
                color: COLORS.whiteSubtle,
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              Esta é uma medida de segurança normal. A maioria das análises é
              concluída em poucas horas. Se precisarmos de alguma informação
              adicional, entraremos em contato.
            </p>
          </div>
        </div>

        {/* Status Tracker */}
        <div
          className="rounded-xl p-5"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <h4
            className="font-medium text-sm mb-4 text-center"
            style={{
              color: COLORS.whiteMuted,
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            Status do Pedido
          </h4>

          <div className="relative">
            {/* Linha de progresso */}
            <div
              className="absolute top-4 left-0 right-0 h-0.5"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <div
                className="h-full transition-all duration-1000"
                style={{
                  width: '50%',
                  backgroundColor: COLORS.gold,
                  boxShadow: `0 0 10px ${COLORS.gold}`,
                }}
              />
            </div>

            {/* Steps */}
            <div className="relative flex justify-between">
              {[
                { label: 'Pedido', status: 'completed' },
                { label: 'Análise', status: 'current' },
                { label: 'Aprovação', status: 'pending' },
                { label: 'Envio', status: 'pending' },
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mb-2"
                    style={{
                      backgroundColor:
                        step.status === 'completed'
                          ? COLORS.gold
                          : step.status === 'current'
                          ? `${COLORS.gold}30`
                          : 'rgba(255, 255, 255, 0.1)',
                      border:
                        step.status === 'current'
                          ? `2px solid ${COLORS.gold}`
                          : 'none',
                    }}
                  >
                    {step.status === 'completed' ? (
                      <CheckCircle2 size={16} style={{ color: '#000' }} />
                    ) : step.status === 'current' ? (
                      <RefreshCw
                        size={14}
                        style={{ color: COLORS.gold }}
                        className="animate-spin"
                      />
                    ) : (
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                      />
                    )}
                  </div>
                  <span
                    className="text-xs"
                    style={{
                      color:
                        step.status === 'pending'
                          ? COLORS.whiteSubtle
                          : COLORS.whiteMuted,
                      fontFamily: "Inter, system-ui, sans-serif",
                    }}
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ThankYouLayout>
  );
}

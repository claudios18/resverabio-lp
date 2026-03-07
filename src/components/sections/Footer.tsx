/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║                    FOOTER - RESVERABIO®                                  ║
 * ║                                                                          ║
 *  VERSÃO 3.1 - Layout Mobile Refinado + Modais Legais                      ║
 *  • Fundo: Preto absoluto (#000000)                                        ║
 *  • Tipografia: Playfair Display + Inter                                   ║
 *  • Mobile-first: Stack elegante com hierarquia clara                      ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { useState } from 'react';
import { Container } from '../ui/Container';
import { ExternalLink, BookOpen, Heart, X, Shield, FileText, RefreshCw, Mail, MessageCircle } from 'lucide-react';

// Cores de luxo padronizadas
const COLORS = {
  gold: '#c9a962',
  goldLight: '#e8d5a3',
  white: '#ffffff',
  whiteMuted: 'rgba(255, 255, 255, 0.7)',
  whiteSubtle: 'rgba(255, 255, 255, 0.5)',
  whiteGhost: 'rgba(255, 255, 255, 0.25)',
  black: '#000000',
  blackLight: '#1a1a1a',
  blackElevated: '#0d0d0d',
} as const;

type ModalType = 'privacy' | 'terms' | 'returns' | null;

// ═══════════════════════════════════════════════════════════════════════════
// CONTEÚDOS LEGAIS - LGPD E CDC
// ═══════════════════════════════════════════════════════════════════════════

const LEGAL_CONTENT = {
  privacy: {
    title: 'Política de Privacidade',
    icon: Shield,
    content: `
      <h3 style="color: #c9a962; font-size: 1.1rem; margin: 1.5rem 0 0.75rem; font-weight: 600;">1. INTRODUÇÃO</h3>
      <p style="margin-bottom: 1rem; line-height: 1.7;">A Naturalbio Suplementos Ltda, CNPJ 50.482.086/0001-04, com sede em Rua Piloto 5, Cabo Frio - RJ, inscrita no RESVERABIO®, valoriza a privacidade e a segurança dos dados pessoais de seus clientes. Esta Política de Privacidade estabelece as diretrizes para coleta, uso, armazenamento e proteção de informações, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).</p>

      <h3 style="color: #c9a962; font-size: 1.1rem; margin: 1.5rem 0 0.75rem; font-weight: 600;">2. DADOS COLETADOS</h3>
      <p style="margin-bottom: 0.5rem;">Coletamos os seguintes dados pessoais:</p>
      <ul style="margin-left: 1.5rem; margin-bottom: 1rem; line-height: 1.7;">
        <li>Dados de identificação: nome completo, CPF, data de nascimento</li>
        <li>Dados de contato: e-mail, telefone, endereço completo</li>
        <li>Dados de pagamento: informações de cartão de crédito (processadas de forma criptografada)</li>
        <li>Dados de navegação: cookies, endereço IP, histórico de compras</li>
      </ul>

      <h3 style="color: #c9a962; font-size: 1.1rem; margin: 1.5rem 0 0.75rem; font-weight: 600;">3. FINALIDADE DO TRATAMENTO</h3>
      <p style="margin-bottom: 0.5rem;">Utilizamos seus dados para:</p>
      <ul style="margin-left: 1.5rem; margin-bottom: 1rem; line-height: 1.7;">
        <li>Processamento e entrega de pedidos</li>
        <li>Emissão de notas fiscais</li>
        <li>Atendimento ao cliente e suporte pós-venda</li>
        <li>Envio de comunicações sobre pedidos e entregas</li>
        <li>Marketing direto (com consentimento prévio)</li>
        <li>Prevenção a fraudes e segurança da plataforma</li>
      </ul>

      <h3 style="color: #c9a962; font-size: 1.1rem; margin: 1.5rem 0 0.75rem; font-weight: 600;">4. COMPARTILHAMENTO DE DADOS</h3>
      <p style="margin-bottom: 1rem; line-height: 1.7;">Seus dados podem ser compartilhados com: empresas de logística para entrega dos produtos; instituições financeiras para processamento de pagamentos; autoridades competentes quando legalmente exigido. Não vendemos seus dados a terceiros.</p>

      <h3 style="color: #c9a962; font-size: 1.1rem; margin: 1.5rem 0 0.75rem; font-weight: 600;">5. SEGURANÇA DA INFORMAÇÃO</h3>
      <p style="margin-bottom: 1rem; line-height: 1.7;">Adotamos medidas técnicas e administrativas adequadas para proteger seus dados contra acessos não autorizados, vazamentos, alterações ou destruição. Utilizamos criptografia SSL/TLS em todas as transações.</p>

      <h3 style="color: #c9a962; font-size: 1.1rem; margin: 1.5rem 0 0.75rem; font-weight: 600;">6. DIREITOS DO TITULAR</h3>
      <p style="margin-bottom: 0.5rem;">Conforme a LGPD, você tem direito a:</p>
      <ul style="margin-left: 1.5rem; margin-bottom: 1rem; line-height: 1.7;">
        <li>Acessar seus dados pessoais</li>
        <li>Corrigir dados incompletos ou desatualizados</li>
        <li>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários</li>
        <li>Revogar consentimento a qualquer momento</li>
        <li>Solicitar portabilidade dos dados</li>
      </ul>

      <h3 style="color: #c9a962; font-size: 1.1rem; margin: 1.5rem 0 0.75rem; font-weight: 600;">7. CONTATO DO DPO</h3>
      <p style="margin-bottom: 1rem; line-height: 1.7;">Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato pelo e-mail: <strong style="color: #c9a962;">privacidade@resverabio.com</strong></p>

      <h3 style="color: #c9a962; font-size: 1.1rem; margin: 1.5rem 0 0.75rem; font-weight: 600;">8. ATUALIZAÇÕES</h3>
      <p style="margin-bottom: 1rem; line-height: 1.7;">Esta política pode ser atualizada periodicamente. A data da última revisão será sempre indicada no final do documento.</p>

      <p style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid rgba(201,169,98,0.3); font-size: 0.85rem; color: rgba(255,255,255,0.5);">Última atualização: 06 de março de 2024</p>
    `,
  },
  terms: {
    title: 'Termos e Condições de Uso',
    icon: FileText,
    content: `
      <h3 style="color: #c9a962; font-size: 1.1rem; margin: 1.5rem 0 0.75rem; font-weight: 600;">1. ACEITAÇÃO DOS TERMOS</h3>
      <p style="margin-bottom: 1rem; line-height: 1.7;">Ao acessar e utilizar o site RESVERABIO®, você concorda em cumprir e estar vinculado aos seguintes Termos e Condições de Uso. Se não concordar com qualquer parte destes termos, solicitamos que não utilize nossos serviços.</p>

      <h3 style="color: #c9a962; font-size: 1.1rem; margin: 1.5rem 0 0.75rem; font-weight: 600;">2. IDENTIFICAÇÃO DA EMPRESA</h3>
      <p style="margin-bottom: 1rem; line-height: 1.7;"><strong style="color: #c9a962;">Razão Social:</strong> Naturalbio Suplementos Ltda<br>
      <strong style="color: #c9a962;">CNPJ:</strong> 50.482.086/0001-04<br>
      <strong style="color: #c9a962;">Endereço:</strong> Rua Piloto 5, Cabo Frio - RJ<br>
      <strong style="color: #c9a962;">E-mail:</strong> contato@resverabio.com<br>
      <strong style="color: #c9a962;">WhatsApp:</strong> (21) 97958-2229</p>

      <h3 style="color: #c9a962; font-size: 1.1rem; margin: 1.5rem 0 0.75rem; font-weight: 600;">3. PRODUTOS E SERVIÇOS</h3>
      <p style="margin-bottom: 1rem; line-height: 1.7;">O RESVERABIO® comercializa suplementos alimentares à base de Trans-Resveratrol. Todas as informações sobre composição, benefícios e modo de uso são fornecidas de boa-fé e baseadas em estudos científicos disponíveis. Os produtos não substituem orientação médica.</p>

      <h3 style="color: #c9a962; font-size: 1.1rem; margin: 1.5rem 0 0.75rem; font-weight: 600;">4. PREÇOS E PAGAMENTO</h3>
      <p style="margin-bottom: 1rem; line-height: 1.7;">Os preços estão em Reais (R$) e incluem impostos. Aceitamos pagamento via cartão de crédito (parcelamento disponível), boleto bancário e PIX. As condições de pagamento são apresentadas no checkout e devem ser cumpridas para confirmação do pedido.</p>

      <h3 style="color: #c9a962; font-size: 1.1rem; margin: 1.5rem 0 0.75rem; font-weight: 600;">5. ENVIO E ENTREGA</h3>
      <p style="margin-bottom: 1rem; line-height: 1.7;">O prazo de entrega varia conforme a localidade e é informado no momento da compra. O frete é calculado automaticamente com base no CEP informado. Oferecemos frete grátis para compras acima de valores específicos, conforme indicado nas promoções vigentes.</p>

      <h3 style="color: #c9a962; font-size: 1.1rem; margin: 1.5rem 0 0.75rem; font-weight: 600;">6. RESPONSABILIDADES DO USUÁRIO</h3>
      <p style="margin-bottom: 0.5rem;">O usuário se compromete a:</p>
      <ul style="margin-left: 1.5rem; margin-bottom: 1rem; line-height: 1.7;">
        <li>Fornecer informações verdadeiras e atualizadas</li>
        <li>Manter confidencialidade de dados de acesso</li>
        <li>Não utilizar o site para fins ilícitos</li>
        <li>Respeitar direitos de propriedade intelectual</li>
      </ul>

      <h3 style="color: #c9a962; font-size: 1.1rem; margin: 1.5rem 0 0.75rem; font-weight: 600;">7. PROPRIEDADE INTELECTUAL</h3>
      <p style="margin-bottom: 1rem; line-height: 1.7;">Todo o conteúdo do site (logos, imagens, textos, layout) é propriedade exclusiva da Naturalbio Suplementos Ltda ou de seus licenciadores. É proibida a reprodução, distribuição ou modificação sem autorização prévia e expressa.</p>

      <h3 style="color: #c9a962; font-size: 1.1rem; margin: 1.5rem 0 0.75rem; font-weight: 600;">8. LIMITAÇÃO DE RESPONSABILIDADE</h3>
      <p style="margin-bottom: 1rem; line-height: 1.7;">A empresa não se responsabiliza por danos decorrentes de uso indevido dos produtos, alergias não informadas previamente ou interações medicamentosas. Recomendamos consulta médica antes do uso de qualquer suplemento.</p>

      <h3 style="color: #c9a962; font-size: 1.1rem; margin: 1.5rem 0 0.75rem; font-weight: 600;">9. FORO E LEGISLAÇÃO APLICÁVEL</h3>
      <p style="margin-bottom: 1rem; line-height: 1.7;">Estes termos são regidos pela legislação brasileira. Quaisquer disputas serão resolvidas no foro da comarca de Cabo Frio - RJ, com renúncia a qualquer outro, por mais privilegiado que seja.</p>

      <p style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid rgba(201,169,98,0.3); font-size: 0.85rem; color: rgba(255,255,255,0.5);">Versão atualizada em: 06 de março de 2024</p>
    `,
  },
  returns: {
    title: 'Política de Trocas e Devoluções',
    icon: RefreshCw,
    content: `
      <h3 style="color: #c9a962; font-size: 1.1rem; margin: 1.5rem 0 0.75rem; font-weight: 600;">1. DIREITO DE ARREPENDIMENTO (LEI 8.078/90)</h3>
      <p style="margin-bottom: 1rem; line-height: 1.7;">Conforme o Código de Defesa do Consumidor, você tem até <strong style="color: #c9a962;">7 (sete) dias corridos</strong> a contar do recebimento do produto para exercer o direito de arrependimento, sem necessidade de justificativa. O valor será integralmente reembolsado.</p>

      <h3 style="color: #c9a962; font-size: 1.1rem; margin: 1.5rem 0 0.75rem; font-weight: 600;">2. CONDIÇÕES PARA DEVOLUÇÃO</h3>
      <p style="margin-bottom: 0.5rem;">Para que a devolução seja aceita, o produto deve estar:</p>
      <ul style="margin-left: 1.5rem; margin-bottom: 1rem; line-height: 1.7;">
        <li>Na embalagem original, sem violação do lacre</li>
        <li>Sem sinais de uso ou consumo</li>
        <li>Acompanhado de nota fiscal ou comprovante de compra</li>
        <li>Com todos os acessórios e manuais (se aplicável)</li>
      </ul>

      <h3 style="color: #c9a962; font-size: 1.1rem; margin: 1.5rem 0 0.75rem; font-weight: 600;">3. PRODUTOS COM DEFEITO</h3>
      <p style="margin-bottom: 1rem; line-height: 1.7;">Se o produto apresentar defeito de fabricação, você tem direito à troca ou restituição do valor pago dentro do prazo de garantia legal de <strong style="color: #c9a962;">90 (noventa) dias</strong>, conforme Art. 26 do CDC. Entre em contato imediatamente pelo WhatsApp (21) 97958-2229.</p>

      <h3 style="color: #c9a962; font-size: 1.1rem; margin: 1.5rem 0 0.75rem; font-weight: 600;">4. COMO SOLICITAR DEVOLUÇÃO</h3>
      <p style="margin-bottom: 0.5rem;">Siga os passos:</p>
      <ol style="margin-left: 1.5rem; margin-bottom: 1rem; line-height: 1.7;">
        <li>Envie e-mail para <strong style="color: #c9a962;">trocas@resverabio.com</strong> ou WhatsApp (21) 97958-2229</li>
        <li>Informe número do pedido, CPF e motivo da devolução</li>
        <li>Aguarde autorização com instruções de envio</li>
        <li>Poste o produto conforme orientações recebidas</li>
        <li>Após análise, o reembolso será processado em até 10 dias úteis</li>
      </ol>

      <h3 style="color: #c9a962; font-size: 1.1rem; margin: 1.5rem 0 0.75rem; font-weight: 600;">5. REEMBOLSO</h3>
      <p style="margin-bottom: 1rem; line-height: 1.7;">O reembolso será efetuado pela mesma forma de pagamento utilizada na compra:</p>
      <ul style="margin-left: 1.5rem; margin-bottom: 1rem; line-height: 1.7;">
        <li><strong>Cartão de crédito:</strong> estorno em até 2 faturas subsequentes</li>
        <li><strong>Boleto/PIX:</strong> depósito em conta em até 10 dias úteis após análise</li>
      </ul>

      <h3 style="color: #c9a962; font-size: 1.1rem; margin: 1.5rem 0 0.75rem; font-weight: 600;">6. CUSTOS DE ENVIO</h3>
      <p style="margin-bottom: 1rem; line-height: 1.7;">Em caso de arrependimento, o custo do envio de retorno é do consumidor. Em caso de produto com defeito, a Naturalbio Suplementos Ltda arca com todos os custos de envio.</p>

      <h3 style="color: #c9a962; font-size: 1.1rem; margin: 1.5rem 0 0.75rem; font-weight: 600;">7. PRODUTOS NÃO ELEGÍVEIS</h3>
      <p style="margin-bottom: 1rem; line-height: 1.7;">Produtos com lacre violado, embalagem danificada por mau uso ou fora do prazo de garantia não serão aceitos para devolução.</p>

      <h3 style="color: #c9a962; font-size: 1.1rem; margin: 1.5rem 0 0.75rem; font-weight: 600;">8. ATENDIMENTO</h3>
      <p style="margin-bottom: 1rem; line-height: 1.7;">Dúvidas sobre trocas e devoluções podem ser esclarecidas pelo e-mail <strong style="color: #c9a962;">trocas@resverabio.com</strong> ou WhatsApp <strong style="color: #c9a962;">(21) 97958-2229</strong>, de segunda a sexta, das 9h às 18h.</p>

      <p style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid rgba(201,169,98,0.3); font-size: 0.85rem; color: rgba(255,255,255,0.5);">Documento atualizado em: 06 de março de 2024</p>
    `,
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENTE MODAL
// ═══════════════════════════════════════════════════════════════════════════

const LegalModal = ({ 
  isOpen, 
  onClose, 
  type 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  type: ModalType;
}) => {
  if (!isOpen || !type) return null;

  const content = LEGAL_CONTENT[type];
  const IconComponent = content.icon;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-2xl"
        style={{ 
          backgroundColor: COLORS.blackLight,
          border: `1px solid ${COLORS.gold}40`,
          boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 60px ${COLORS.gold}15`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div 
          className="flex items-center justify-between px-6 py-4 border-b"
          style={{ borderColor: 'rgba(201, 169, 98, 0.2)' }}
        >
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(201, 169, 98, 0.15)' }}
            >
              <IconComponent size={20} style={{ color: COLORS.gold }} />
            </div>
            <h2 
              className="text-lg md:text-xl font-semibold"
              style={{ 
                color: COLORS.gold,
                fontFamily: "'Playfair Display', Georgia, serif"
              }}
            >
              {content.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
            style={{ 
              backgroundColor: 'rgba(201, 169, 98, 0.1)',
              border: `1px solid ${COLORS.gold}30`,
            }}
            aria-label="Fechar modal"
          >
            <X size={20} style={{ color: COLORS.gold }} />
          </button>
        </div>

        {/* Content */}
        <div 
          className="px-6 py-6 overflow-y-auto"
          style={{ 
            maxHeight: 'calc(90vh - 140px)',
            scrollbarWidth: 'thin',
            scrollbarColor: `${COLORS.gold}40 transparent`,
          }}
        >
          <div 
            className="text-sm md:text-base"
            style={{ 
              color: COLORS.whiteMuted,
              fontFamily: "'Inter', system-ui, sans-serif",
              lineHeight: 1.8,
            }}
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
        </div>

        {/* Footer */}
        <div 
          className="px-6 py-4 border-t flex justify-end"
          style={{ borderColor: 'rgba(201, 169, 98, 0.2)' }}
        >
          <button
            onClick={onClose}
            className="px-8 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ 
              backgroundColor: COLORS.gold,
              color: COLORS.black,
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENTE FOOTER PRINCIPAL - MOBILE REFINADO
// ═══════════════════════════════════════════════════════════════════════════

export const Footer = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = (type: ModalType) => {
    setActiveModal(type);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      {/* Modais Legais */}
      <LegalModal 
        isOpen={activeModal !== null} 
        onClose={closeModal} 
        type={activeModal} 
      />

      <footer style={{ backgroundColor: COLORS.black }}>
        {/* ═══════════════════════════════════════════════════════════════════
            SEÇÃO: FONTES CIENTÍFICAS
        ═══════════════════════════════════════════════════════════════════ */}
        <div 
          className="border-t border-b"
          style={{ 
            borderColor: 'rgba(201, 169, 98, 0.25)',
            backgroundColor: COLORS.blackElevated,
          }}
        >
          <Container className="py-5 md:py-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
              <div className="flex items-center gap-2.5">
                <div 
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(201, 169, 98, 0.15)' }}
                >
                  <BookOpen size={18} style={{ color: COLORS.gold }} />
                </div>
                <span 
                  className="font-semibold tracking-wide uppercase text-xs sm:text-sm"
                  style={{ 
                    color: COLORS.gold,
                    fontFamily: "'Inter', system-ui, sans-serif",
                    letterSpacing: '0.12em'
                  }}
                >
                  Fontes Científicas
                </span>
              </div>
              
              <a
                href="https://resveratrolciencia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: 'rgba(201, 169, 98, 0.1)',
                  border: `1px solid ${COLORS.gold}35`,
                }}
              >
                <span 
                  className="font-medium text-xs sm:text-sm"
                  style={{ color: COLORS.goldLight }}
                >
                  resveratrolciencia.com
                </span>
                <ExternalLink size={12} style={{ color: COLORS.gold }} />
              </a>
            </div>
          </Container>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            CONTEÚDO PRINCIPAL - LAYOUT MOBILE REFINADO
        ═══════════════════════════════════════════════════════════════════ */}
        <Container className="py-10 md:py-14">
          {/* Stack principal para mobile */}
          <div className="flex flex-col items-center gap-10">
            
            {/* SEÇÃO 1 - BRAND */}
            <div className="text-center space-y-3 max-w-sm">
              <h3 
                className="font-serif text-2xl md:text-3xl font-semibold tracking-tight"
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
                  lineHeight: 1.7
                }}
              >
                A molécula da longevidade. Trans-Resveratrol 99% de pureza para quem busca qualidade de vida com base científica.
              </p>
            </div>

            {/* Divisor sutil */}
            <div 
              className="w-16 h-px"
              style={{ backgroundColor: 'rgba(201, 169, 98, 0.3)' }}
            />

            {/* SEÇÃO 2 - NAVEGAÇÃO */}
            <div className="text-center space-y-4 w-full">
              <h4 
                className="text-xs font-semibold uppercase"
                style={{ 
                  color: COLORS.gold,
                  fontFamily: "'Inter', system-ui, sans-serif",
                  letterSpacing: '0.25em'
                }}
              >
                Navegação
              </h4>
              <nav 
                className="flex flex-wrap justify-center gap-x-6 gap-y-3"
                style={{ rowGap: '0.75rem' }}
              >
                {[
                  { label: 'Benefícios', href: '#cardiovascular' },
                  { label: 'Ciência', href: 'https://resveratrolciencia.com', external: true },
                  { label: 'Depoimentos', href: '#avaliacoes' },
                  { label: 'Comprar', href: '#vendas' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                    className="text-sm transition-colors duration-200 hover:opacity-100 py-1"
                    style={{ 
                      color: COLORS.whiteMuted,
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontWeight: 400,
                      minHeight: '44px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Divisor sutil */}
            <div 
              className="w-16 h-px"
              style={{ backgroundColor: 'rgba(201, 169, 98, 0.3)' }}
            />

            {/* SEÇÃO 3 - CONTATO COM TOUCH TARGETS AMPLIADOS */}
            <div className="text-center space-y-4 w-full">
              <h4 
                className="text-xs font-semibold uppercase"
                style={{ 
                  color: COLORS.gold,
                  fontFamily: "'Inter', system-ui, sans-serif",
                  letterSpacing: '0.25em'
                }}
              >
                Contato
              </h4>
              <div className="flex flex-col items-center gap-3">
                <a
                  href="mailto:contato@resverabio.com"
                  className="flex items-center gap-2.5 text-sm transition-colors duration-200 hover:text-white px-4 py-3 rounded-lg"
                  style={{ 
                    color: COLORS.whiteMuted,
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontWeight: 400,
                    minHeight: '48px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  }}
                >
                  <Mail size={16} style={{ color: COLORS.gold }} />
                  contato@resverabio.com
                </a>
                <a
                  href="https://wa.me/5521979582229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm font-medium transition-all duration-200 hover:scale-105 px-5 py-3.5 rounded-full"
                  style={{ 
                    backgroundColor: 'rgba(201, 169, 98, 0.15)',
                    color: COLORS.goldLight,
                    fontFamily: "'Inter', system-ui, sans-serif",
                    border: `1px solid ${COLORS.gold}40`,
                    minHeight: '52px',
                  }}
                >
                  <MessageCircle size={18} style={{ color: COLORS.gold }} />
                  WhatsApp (21) 97958-2229
                </a>
              </div>
            </div>
          </div>
        </Container>

        {/* ═══════════════════════════════════════════════════════════════════
            SEÇÃO JURÍDICA - LAYOUT MOBILE OTIMIZADO
        ═══════════════════════════════════════════════════════════════════ */}
        <div 
          className="border-t"
          style={{ 
            borderColor: 'rgba(255, 255, 255, 0.08)',
            backgroundColor: COLORS.blackElevated,
          }}
        >
          <Container className="py-8 md:py-10">
            <div className="flex flex-col items-center gap-6">
              
              {/* DADOS DA EMPRESA - STACK VERTICAL NO MOBILE */}
              <div 
                className="text-center space-y-2 px-4 py-4 rounded-xl w-full max-w-md"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
              >
                <p 
                  className="text-sm font-medium"
                  style={{ 
                    color: COLORS.gold,
                    fontFamily: "'Inter', system-ui, sans-serif",
                  }}
                >
                  Naturalbio Suplementos Ltda
                </p>
                <p 
                  className="text-xs"
                  style={{ 
                    color: COLORS.whiteSubtle,
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontWeight: 400,
                    letterSpacing: '0.02em',
                  }}
                >
                  CNPJ: 50.482.086/0001-04
                </p>
                <p 
                  className="text-xs"
                  style={{ 
                    color: COLORS.whiteSubtle,
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  Rua Piloto 5 - Cabo Frio - RJ
                </p>
              </div>

              {/* LINKS LEGAIS - STACK VERTICAL COM TOUCH TARGETS AMPLIADOS */}
              <div className="flex flex-col items-center gap-2 w-full">
                {[
                  { label: 'Política de Privacidade', type: 'privacy' as const },
                  { label: 'Termos e Condições', type: 'terms' as const },
                  { label: 'Política de Trocas', type: 'returns' as const },
                ].map((link) => (
                  <button
                    key={link.label}
                    onClick={() => openModal(link.type)}
                    className="w-full max-w-xs text-sm py-3.5 px-4 rounded-lg transition-all duration-200 hover:bg-white/5"
                    style={{ 
                      color: COLORS.whiteSubtle,
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontWeight: 400,
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      minHeight: '48px',
                    }}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              {/* COPYRIGHT */}
              <div className="text-center pt-4">
                <p 
                  className="text-xs"
                  style={{ 
                    color: COLORS.whiteGhost,
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontWeight: 300,
                    letterSpacing: '0.03em',
                  }}
                >
                  ©2024 RESVERABIO® Todos os direitos Reservados
                </p>
              </div>
              
              {/* FRASE DE AMOR */}
              <p 
                className="text-center flex items-center justify-center gap-2"
                style={{ 
                  color: 'rgba(255, 255, 255, 0.15)',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: '11px',
                  fontWeight: 300,
                }}
              >
                Feito com <Heart size={10} style={{ color: COLORS.gold }} fill={COLORS.gold} /> para sua longevidade
              </p>
            </div>
          </Container>
        </div>
      </footer>
    </>
  );
};

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║                    FOOTER - RESVERABIO®                                  ║
 * ║                                                                          ║
 *  VERSÃO 3.0 - Padrão de Luxo Suíço + Modais Legais                        ║
 *  • Fundo: Preto absoluto (#000000)                                        ║
 *  • Tipografia: Playfair Display + Inter                                   ║
 *  • Seção obrigatória: FONTES CIENTÍFICAS CONSULTADAS                      ║
 *  • Modais LGPD/CDC implementados                                          ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { useState } from 'react';
import { Container } from '../ui/Container';
import { ExternalLink, BookOpen, Heart, X, Shield, FileText, RefreshCw } from 'lucide-react';

// Cores de luxo padronizadas
const COLORS = {
  gold: '#c9a962',
  goldLight: '#e8d5a3',
  white: '#ffffff',
  whiteMuted: 'rgba(255, 255, 255, 0.6)',
  whiteSubtle: 'rgba(255, 255, 255, 0.4)',
  black: '#000000',
  blackLight: '#1a1a1a',
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
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-2xl"
        style={{ 
          backgroundColor: COLORS.blackLight,
          border: `1px solid ${COLORS.gold}40`,
          boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px ${COLORS.gold}20`,
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
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
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
            maxHeight: 'calc(85vh - 80px)',
            scrollbarWidth: 'thin',
            scrollbarColor: `${COLORS.gold}40 transparent`,
          }}
        >
          <div 
            className="text-sm md:text-base"
            style={{ 
              color: COLORS.whiteMuted,
              fontFamily: "'Inter', system-ui, sans-serif",
              lineHeight: 1.7,
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
            className="px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
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
// COMPONENTE FOOTER PRINCIPAL
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
            SEÇÃO OBRIGATÓRIA: FONTES CIENTÍFICAS CONSULTADAS
        ═══════════════════════════════════════════════════════════════════ */}
        <div 
          className="border-t border-b"
          style={{ 
            borderColor: 'rgba(201, 169, 98, 0.3)',
            backgroundColor: 'rgba(201, 169, 98, 0.05)'
          }}
        >
          <Container className="py-6 md:py-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(201, 169, 98, 0.2)' }}
                >
                  <BookOpen size={20} style={{ color: COLORS.gold }} />
                </div>
                <span 
                  className="font-semibold tracking-wide uppercase text-sm md:text-base"
                  style={{ 
                    color: COLORS.gold,
                    fontFamily: "'Inter', system-ui, sans-serif",
                    letterSpacing: '0.15em'
                  }}
                >
                  Fontes Científicas Consultadas
                </span>
              </div>
              
              <a
                href="https://resveratrolciencia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: 'rgba(201, 169, 98, 0.15)',
                  border: `1px solid ${COLORS.gold}40`,
                }}
              >
                <span 
                  className="font-medium text-sm"
                  style={{ color: COLORS.gold }}
                >
                  resveratrolciencia.com
                </span>
                <ExternalLink size={14} style={{ color: COLORS.gold }} />
              </a>
            </div>
          </Container>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            CONTEÚDO PRINCIPAL DO FOOTER
        ═══════════════════════════════════════════════════════════════════ */}
        <Container className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
            
            {/* Coluna 1 - Brand */}
            <div className="text-center md:text-left space-y-4">
              <h3 
                className="font-serif text-2xl md:text-3xl font-semibold"
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
                  lineHeight: 1.8
                }}
              >
                A molécula da longevidade. Trans-Resveratrol 99% de pureza para quem busca qualidade de vida com base científica.
              </p>
            </div>

            {/* Coluna 2 - Links Rápidos */}
            <div className="text-center space-y-4">
              <h4 
                className="text-sm font-semibold uppercase tracking-widest"
                style={{ 
                  color: COLORS.gold,
                  fontFamily: "'Inter', system-ui, sans-serif",
                  letterSpacing: '0.2em'
                }}
              >
                Navegação
              </h4>
              <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {[
                  { label: 'Benefícios', href: '#cardiovascular' },
                  { label: 'Referências Científicas', href: 'https://resveratrolciencia.com', external: true },
                  { label: 'Depoimentos', href: '#avaliacoes' },
                  { label: 'Comprar', href: '#vendas' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                    className="text-sm transition-colors duration-200 hover:opacity-100"
                    style={{ 
                      color: COLORS.whiteMuted,
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontWeight: 400
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Coluna 3 - Contato */}
            <div className="text-center md:text-right space-y-4">
              <h4 
                className="text-sm font-semibold uppercase tracking-widest"
                style={{ 
                  color: COLORS.gold,
                  fontFamily: "'Inter', system-ui, sans-serif",
                  letterSpacing: '0.2em'
                }}
              >
                Contato
              </h4>
              <div className="space-y-2">
                <a
                  href="mailto:contato@resverabio.com"
                  className="block text-sm transition-colors duration-200"
                  style={{ 
                    color: COLORS.whiteMuted,
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontWeight: 300
                  }}
                >
                  contato@resverabio.com
                </a>
                <a
                  href="https://wa.me/5521979582229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm transition-colors duration-200"
                  style={{ 
                    color: COLORS.whiteMuted,
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontWeight: 300
                  }}
                >
                  WhatsApp: (21) 97958-2229
                </a>
              </div>
            </div>
          </div>
        </Container>

        {/* ═══════════════════════════════════════════════════════════════════
            COPYRIGHT & DADOS JURÍDICOS
        ═══════════════════════════════════════════════════════════════════ */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Container className="py-8">
            {/* Dados da Empresa */}
            <div className="text-center mb-6">
              <p 
                className="text-xs leading-relaxed"
                style={{ 
                  color: COLORS.whiteSubtle,
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 300
                }}
              >
                <span style={{ color: COLORS.gold }}>Naturalbio Suplementos Ltda</span>
                <span className="mx-2" style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
                CNPJ: 50.482.086/0001-04
                <span className="mx-2" style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
                Rua Piloto 5 - Cabo Frio - RJ
              </p>
            </div>

            {/* Links Obrigatórios - Com Modais */}
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-6">
              {[
                { label: 'Política de Privacidade', type: 'privacy' as const },
                { label: 'Termos e Condições', type: 'terms' as const },
                { label: 'Política de Trocas', type: 'returns' as const },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => openModal(link.type)}
                  className="text-xs transition-all duration-200 hover:tracking-wider"
                  style={{ 
                    color: COLORS.whiteSubtle,
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontWeight: 400,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center mb-4">
              <p 
                className="text-xs"
                style={{ 
                  color: 'rgba(255, 255, 255, 0.3)',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 300
                }}
              >
                ©2024 RESVERABIO® Todos os direitos Reservados
              </p>
            </div>
            
            {/* Frase de amor */}
            <p 
              className="text-center flex items-center justify-center gap-2"
              style={{ 
                color: 'rgba(255, 255, 255, 0.2)',
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: '11px',
                fontWeight: 300
              }}
            >
              Feito com <Heart size={10} style={{ color: COLORS.gold }} /> para sua longevidade
            </p>
          </Container>
        </div>
      </footer>
    </>
  );
};

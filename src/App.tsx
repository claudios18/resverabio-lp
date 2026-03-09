import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { BeautySection } from './components/sections/BeautySection';
import { LongevitySection } from './components/sections/LongevitySection';
import { CardiovascularSection } from './components/sections/CardiovascularSection';
import { AntioxidantSection } from './components/sections/AntioxidantSection';
import { NutritionSection } from './components/sections/NutritionSection';
import { ScienceSection } from './components/sections/ScienceSection';
import { PrebioticSection } from './components/sections/PrebioticSection';
import { CustomerReviews } from './components/sections/CustomerReviews';
import { PurchaseSection } from './components/sections/PurchaseSection';
import { Footer } from './components/sections/Footer';
import { TrustCards } from './components/sections/TrustCards';

// Páginas de Obrigado
import {
  Obrigado,
  ObrigadoPix,
  ObrigadoBoleto,
  ObrigadoAguardando,
} from './pages/obrigado';

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║               RESVERABIO® LANDING PAGE - VERSÃO 3.0 COM ROTAS            ║
 * ║                                                                          ║
 * ║  Estrutura de Rotas:                                                     ║
 * ║  - /                    → Landing Page principal                         ║
 * ║  - /obrigado            → Página de agradecimento geral                  ║
 * ║  - /obrigado-pix        → Página de pagamento PIX                        ║
 * ║  - /obrigado-boleto     → Página de pagamento Boleto                     ║
 * ║  - /obrigado-aguardando → Página de análise de segurança                 ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

/**
 * Componente da Landing Page Principal
 * Todas as seções da página inicial em uma única rota
 */
function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ═══════════════════════════════════════════════════════════════════
          BLOCO 1: HEADER
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <Header />

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCO 2: HERO BANNER
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <Hero />

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCO 3: BEAUTY SECTION (Puravida Inspired)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          • 3 imagens alinhadas horizontalmente
          • Fundo off-white (#faf9f7)
          • Título: "BELEZA QUE VEM DE DENTRO"
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <BeautySection />

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCO 4: LONGEVITY SECTION (Pele & Antienvelhecimento)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          • Layout Puravida: 2 imagens + texto largura total
          • Título: "UM IMPORTANTE ALIADO DA LONGEVIDADE"
          • CTA: "QUERO MEU REJUVENESCIMENTO CELULAR"
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <LongevitySection />

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCO 5: CARDIOVASCULAR SECTION (Benefícios Adicionais)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          • Fundo off-white (#faf9f7)
          • Layout 50/50: Imagem | Texto
          • Asset: resverabio-cardiovascular.png
          • Título: "PROTEÇÃO CARDIOVASCULAR" (Azul Premium)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <CardiovascularSection />

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCO 5.5: ANTIOXIDANTE SECTION (Potencialização ao Máximo)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          • Fundo off-white (#faf9f7)
          • Layout INVERSO Desktop: Imagem ESQUERDA | Texto DIREITA
          • Layout Mobile: Empilhamento vertical (imagem topo → texto)
          • Asset: resverabio-radicaislivres.png
          • Título: "ANTIOXIDANTE: POTENCIALIZAÇÃO AO MÁXIMO" (Azul Premium)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <AntioxidantSection />

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCO 5.6: CARDS DE CONFIANÇA
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          • Grid 4 colunas com fundos em degradê roxo
          • Ícones dourados e textos brancos
          • Posição: Entre Antioxidante e Nutrição
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <TrustCards />

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCO 6: NUTRITION SECTION (Puravida Inspired)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          • Layout 50/50: Tabela nutricional | Embalagem
          • Fundo: Preto absoluto (#000)
          • Assets: resverabio-tabnutri.png + resverabio-box.png
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <NutritionSection />

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCO 7: SCIENCE SECTION (Puravida Inspired)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          • Fundo off-white (#faf9f7)
          • Asset: resverabio-RESVERATROL.png
          • Objetivo: Educação sobre Resveratrol
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <ScienceSection />

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCO 8: EFEITO PREBIÓTICO E INTESTINO
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          • Fundo off-white (#faf9f7)
          • Layout Desktop: Texto ESQUERDA | Imagem DIREITA
          • Layout Mobile: Empilhamento vertical
          • Asset: resverabio-intestino.png
          • CTA: Botão dourado ao final
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <PrebioticSection />

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCO 9: AVALIAÇÕES DOS CLIENTES
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          • Fundo branco (#ffffff)
          • Layout: Sidebar (estatísticas) + Lista de avaliações
          • Nota média 4.9/5 com gráfico de distribuição
          • Cards de avaliações com avatar, nome, data e conteúdo
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <CustomerReviews />

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCO 10: VENDAS (OFERTAS)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          • Fundo preto (#000000)
          • Grid de 4 cards de produtos
          • Preços, parcelas e desconto PIX
          • Badge "Campeão de Vendas" no kit 3 potes
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <PurchaseSection />

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCO 11: FOOTER
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          • Fundo: Preto absoluto (#000000)
          • Seção obrigatória: FONTES CIENTÍFICAS CONSULTADAS
          • Link: resveratrolciencia.com
          • Design: Padrão de luxo suíço
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <Footer />
    </div>
  );
}

/**
 * Componente Principal com React Router
 * Define todas as rotas da aplicação
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page Principal */}
        <Route path="/" element={<LandingPage />} />

        {/* Páginas de Obrigado */}
        <Route path="/obrigado" element={<Obrigado />} />
        <Route path="/obrigado-pix" element={<ObrigadoPix />} />
        <Route path="/obrigado-boleto" element={<ObrigadoBoleto />} />
        <Route path="/obrigado-aguardando" element={<ObrigadoAguardando />} />

        {/* Redirecionamento para rota não encontrada */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

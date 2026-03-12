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
 * ║  - /obrigado-aguardando → Página análise de segurança                    ║
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
          BLOCO 1: HEADER (Fixo no topo)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <Header />

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCO 2: HERO BANNER - IMPACTO INICIAL
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <Hero />

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCO 3: SEÇÃO BENEFÍCIOS - ANCORAGEM #beneficios
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          • scroll-mt-24: Compensa o header fixo (96px) + margem de respiro
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="beneficios" className="scroll-mt-24">
        <BeautySection />
        <LongevitySection />
        <CardiovascularSection />
        <AntioxidantSection />
        <TrustCards />
        <NutritionSection />
        <ScienceSection />
        <PrebioticSection />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCO 4: DEPOIMENTOS - ANCORAGEM #depoimentos
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          • scroll-mt-24: Compensa o header fixo (96px) + margem de respiro
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="depoimentos" className="scroll-mt-24">
        <CustomerReviews />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCO 5: PRODUTOS (VITRINE) - ANCORAGEM #produtos
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          • scroll-mt-24: Compensa o header fixo (96px) + margem de respiro
          • Esta é a seção destino dos CTAs de navegação
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="produtos" className="scroll-mt-24">
        <PurchaseSection />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCO 6: RODAPÉ FINAL
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

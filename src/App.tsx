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

/*const MaintenancePage = () => (
  <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-6 text-center">
    <h1 className="text-4xl md:text-6xl font-serif mb-4 tracking-tighter">RESVERABIO®</h1>
    <div className="w-20 h-px bg-[#bfa67a] mb-8"></div>
    <h2 className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase mb-6">Site em Manutenção</h2>
    <p className="text-gray-400 max-w-lg leading-relaxed">
      Estamos aprimorando nossa plataforma para oferecer a melhor experiência em longevidade celular. 
      Retornaremos em breve.
    </p>
  </div>
);*/

// Paginas de Obrigado
import {
  Obrigado,
  ObrigadoPix,
  ObrigadoBoleto,
  ObrigadoAguardando,
} from './pages/obrigado';

/**
 * =============================================================================
 *               RESVERABIO LANDING PAGE - VERSAO 3.0 COM ROTAS
 * 
 *  Estrutura de Rotas:
 *  - /                    -> Landing Page principal
 *  - /obrigado            -> Pagina de agradecimento geral
 *  - /obrigado-pix        -> Pagina de pagamento PIX
 *  - /obrigado-boleto     -> Pagina de pagamento Boleto
 *  - /obrigado-aguardando -> Pagina analise de seguranca
 * =============================================================================
 */

/**
 * Componente da Landing Page Principal
 * Todas as secoes da pagina inicial em uma unica rota
 */
function LandingPage() {
   //return <MaintenancePage />;
  return (
    <div className="min-h-screen bg-black">
      {/* =========================================================================
          BLOCO 1: HEADER (Fixo no topo)
      ========================================================================= */}
      <Header />

      {/* =========================================================================
          BLOCO 2: HERO BANNER - IMPACTO INICIAL
      ========================================================================= */}
      <Hero />

      {/* =========================================================================
          BLOCO 3: SECAO BENEFICIOS - ANCORAGEM #beneficios
          
          - scroll-mt-16 (64px mobile): Header 64px + respiro minimo
          - scroll-mt-20 (80px desktop): Header 96px otimizado
      ========================================================================= */}
      <section id="beneficios" className="scroll-mt-16 md:scroll-mt-20 bg-white">
        <BeautySection />
        <LongevitySection />
        <CardiovascularSection />
        <AntioxidantSection />
        <TrustCards />
        <NutritionSection />
        <ScienceSection />
        <PrebioticSection />
      </section>

      {/* =========================================================================
          BLOCO 4: DEPOIMENTOS - ANCORAGEM #depoimentos
          
          - scroll-mt-16 (64px mobile): Header 64px + respiro minimo
          - scroll-mt-20 (80px desktop): Header 96px otimizado
      ========================================================================= */}
      <section id="depoimentos" className="scroll-mt-16 md:scroll-mt-20 bg-gray-50">
        <CustomerReviews />
      </section>

      {/* =========================================================================
          BLOCO 5: PRODUTOS (VITRINE) - ANCORAGEM #produtos
          
          - scroll-mt-16 (64px mobile): Header 64px + respiro minimo
          - scroll-mt-20 (80px desktop): Header 96px otimizado
      ========================================================================= */}
      <section id="produtos" className="scroll-mt-16 md:scroll-mt-20 bg-white">
        <PurchaseSection />
      </section>

      {/* =========================================================================
          BLOCO 6: RODAPE FINAL
      ========================================================================= */}
      <Footer />
    </div>
  );
}

/**
 * Componente Principal com React Router
 * Define todas as rotas da aplicacao
 * 
 * NOTA: O CartProvider esta em main.tsx, envolvendo todo o App
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page Principal */}
        <Route path="/" element={<LandingPage />} />

        {/* Paginas de Obrigado */}
        <Route path="/obrigado" element={<Obrigado />} />
        <Route path="/obrigado-pix" element={<ObrigadoPix />} />
        <Route path="/obrigado-boleto" element={<ObrigadoBoleto />} />
        <Route path="/obrigado-aguardando" element={<ObrigadoAguardando />} />

        {/* Redirecionamento para rota nao encontrada */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

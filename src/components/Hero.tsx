import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#1a1a2e] via-[#16162a] to-[#0f0f1a]">
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(201, 169, 98, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(201, 169, 98, 0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Hero Main Content */}
        <div className="flex flex-1 items-center px-4 sm:px-6 lg:px-12 xl:px-20 pt-24 pb-12">
          <div className="mx-auto w-full max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Left Column - Text Content */}
              <div 
                className={`flex flex-col items-center text-center lg:items-start lg:text-left transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Badge Premium */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c9a962]/30 bg-[#c9a962]/10 px-4 py-2 backdrop-blur-sm">
                  <span className="text-[#c9a962] text-xs">✨</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a962]">
                    Resveratrol Premium
                  </span>
                </div>

                {/* Main Title */}
                <h1 className="mb-2 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
                  RESVERABIO<span className="text-[#c9a962]">®</span>
                </h1>

                {/* Subtitle */}
                <p className="mb-6 text-xl font-light italic text-[#c9a962] sm:text-2xl md:text-3xl tracking-wide">
                  A Molécula da Longevidade
                </p>

                {/* Description */}
                <p className="mb-8 max-w-lg text-base leading-relaxed text-gray-300 sm:text-lg">
                  A verdadeira sofisticação não é um atributo externo; ela reside no epicentro da vida celular. Bem-vindo à nova fronteira da performance humana e do rejuvenescimento sistêmico.
                </p>

                {/* CTA Button */}
                <button
                  onClick={scrollToProducts}
                  className="group relative mb-8 overflow-hidden rounded-full bg-[#c9a962] px-10 py-4 text-sm font-bold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,169,98,0.4)] hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Quero Experimentar
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </button>
              </div>

              {/* Right Column - Hero Image */}
              <div 
                className={`flex items-center justify-center transition-all duration-1000 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="relative">
                  {/* Glow Effect Behind Image */}
                  <div className="absolute inset-0 -m-8 rounded-full bg-[#c9a962]/10 blur-[80px]" />
                  
                  {/* Card Container */}
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm shadow-2xl">
                    {/* Product Info Overlay - Top Right */}
                    <div className="absolute top-4 right-4 z-20 text-right">
                      <p className="text-[#c9a962] text-sm md:text-base leading-tight max-w-[180px]">
                        Aumente a longe-<br/>vidade celular, proteja seu coração e desperte sua mente
                      </p>
                      <div className="mt-3 space-y-1">
                        <div className="flex items-center gap-2 justify-end text-white/80 text-xs">
                          <span>60 Cápsulas (500mg)</span>
                          <span className="text-[#c9a962]">✓</span>
                        </div>
                        <div className="flex items-center gap-2 justify-end text-white/80 text-xs">
                          <span>Dose Ideal: 2 por dia (50mg)</span>
                          <span className="text-[#c9a962]">✓</span>
                        </div>
                        <div className="flex items-center gap-2 justify-end text-white/80 text-xs">
                          <span>1 Mês de Tratamento Completo</span>
                          <span className="text-[#c9a962]">✓</span>
                        </div>
                      </div>
                    </div>

                    {/* Main Hero Image */}
                    <img
                      src="/resverabio-hero2.png"
                      alt="Resverabio Premium - Resveratrol de Alta Potência"
                      className="relative z-10 w-full max-w-[450px] object-contain p-6 pt-16"
                    />
                    
                    {/* Price Badge - Floating */}
                    <div className="absolute right-4 top-1/2 z-20 transform translate-y-8">
                      <div className="relative">
                        {/* Badge Background */}
                        <div className="bg-[#c9a962] rounded-full px-4 py-3 shadow-[0_0_30px_rgba(201,169,98,0.5)] transform rotate-[-5deg]">
                          <p className="text-[10px] uppercase tracking-tighter text-black/70 font-bold text-center">Apenas</p>
                          <p className="text-xl font-serif font-bold text-black text-center">R$ 187</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA on Card */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                      <button 
                        onClick={scrollToProducts}
                        className="bg-[#c9a962] hover:bg-[#b8944f] text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg"
                      >
                        Garantir Meu Blend Resveratrol
                      </button>
                    </div>
                  </div>

                  {/* Price Display Below Card */}
                  <div className="mt-6 text-center">
                    <p className="text-gray-400 text-sm uppercase tracking-wider">Apenas</p>
                    <p className="text-4xl font-serif font-bold text-[#c9a962]">R$ 187,00</p>
                  </div>

                  {/* Benefits Icons */}
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-3 text-white/80 text-sm">
                      <div className="w-6 h-6 rounded-full bg-[#c9a962]/20 flex items-center justify-center">
                        <span className="text-[#c9a962] text-xs">✦</span>
                      </div>
                      <span>Poder antioxidante</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80 text-sm">
                      <div className="w-6 h-6 rounded-full bg-[#c9a962]/20 flex items-center justify-center">
                        <span className="text-[#c9a962] text-xs">◎</span>
                      </div>
                      <span>Pele mais lisa</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80 text-sm">
                      <div className="w-6 h-6 rounded-full bg-[#c9a962]/20 flex items-center justify-center">
                        <span className="text-[#c9a962] text-xs">☯</span>
                      </div>
                      <span>Intestino e Cérebro limpos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

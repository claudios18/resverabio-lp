import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
        <div className="flex flex-1 items-center px-6 sm:px-8 lg:px-12 xl:px-16 pt-24 pb-12">
          <div className="mx-auto w-full max-w-7xl">
            {/* Desktop: grid-cols-2 | Mobile: stack vertical */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
              
              {/* Left Column - Text Content */}
              <div 
                className={`flex flex-col items-center text-center lg:items-center lg:text-center transition-all duration-1000 order-2 lg:order-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Badge Premium */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c9a962]/40 bg-[#c9a962]/10 px-4 py-2 backdrop-blur-sm">
                  <span className="text-[#c9a962] text-xs">✨</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a962]">
                    Resveratrol Premium
                  </span>
                </div>

                {/* Main Title - Tamanho equilibrado */}
                <h1 className="mb-3 font-serif text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl lg:text-[80px] tracking-tight">
                  RESVERABIO<span className="text-[#c9a962]">®</span>
                </h1>

                {/* Subtitle */}
                <p className="mb-6 text-xl font-light italic text-[#c9a962] sm:text-2xl md:text-3xl tracking-wide">
                  A Molécula da Longevidade
                </p>

                {/* Description */}
                <p className="max-w-lg text-base leading-relaxed text-gray-300 sm:text-lg">
                  A verdadeira sofisticação não é um atributo externo; ela reside no epicentro da vida celular. Bem-vindo à nova fronteira da performance humana e do rejuvenescimento sistêmico.
                </p>
              </div>

              {/* Right Column - Hero Image */}
              <div 
                className={`flex items-center justify-center transition-all duration-1000 delay-300 order-1 lg:order-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="relative w-full flex justify-center">
                  {/* Glow Effect Behind Image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[80%] h-[80%] rounded-full bg-[#c9a962]/10 blur-[80px]" />
                  </div>
                  
                  {/* Image Container - Tamanho aumentado */}
                  <div className="relative">
                    <img
                      src="/resverabio-hero2.png"
                      alt="Resverabio Premium - Resveratrol de Alta Potência"
                      className="relative z-10 w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[550px] xl:max-w-[600px] object-contain drop-shadow-2xl"
                    />
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

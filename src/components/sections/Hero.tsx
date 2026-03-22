import { useEffect, useState } from 'react';

export const Hero = () => {
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
        <div className="flex flex-1 items-center px-4 sm:px-8 lg:px-16 xl:px-24 pt-24 pb-12">
          <div className="mx-auto w-full max-w-7xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              
              {/* Left Column - Text Content */}
              <div 
                className={`flex flex-col items-center text-center lg:items-center lg:text-center transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Badge Premium */}
                <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#c9a962]/40 bg-[#c9a962]/10 px-5 py-2.5 backdrop-blur-sm">
                  <span className="text-[#c9a962] text-sm">✨</span>
                  <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c9a962]">
                    Resveratrol Premium
                  </span>
                </div>

                {/* Main Title - Massivo e Luxuoso */}
                <h1 className="mb-4 font-serif text-6xl font-bold leading-[0.95] text-white sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[130px] tracking-tight">
                  RESVERABIO<span className="text-[#c9a962]">®</span>
                </h1>

                {/* Subtitle - Elegante e Destacado */}
                <p className="mb-8 text-2xl font-light italic text-[#c9a962] sm:text-3xl md:text-4xl lg:text-[42px] tracking-wide">
                  A Molécula da Longevidade
                </p>

                {/* Description - Tamanho Aumentado */}
                <p className="mb-10 max-w-xl text-lg leading-relaxed text-gray-300 sm:text-xl md:text-[22px]">
                  A verdadeira sofisticação não é um atributo externo; ela reside no epicentro da vida celular. Bem-vindo à nova fronteira da performance humana e do rejuvenescimento sistêmico.
                </p>
              </div>

              {/* Right Column - Hero Image */}
              <div 
                className={`flex items-center justify-center transition-all duration-1000 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="relative">
                  {/* Glow Effect Behind Image */}
                  <div className="absolute inset-0 -m-12 rounded-full bg-[#c9a962]/10 blur-[100px]" />
                  
                  {/* Image Container */}
                  <div className="relative">
                    <img
                      src="/resverabio-hero2.png"
                      alt="Resverabio Premium - Resveratrol de Alta Potência"
                      className="relative z-10 w-full max-w-[520px] object-contain drop-shadow-2xl"
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

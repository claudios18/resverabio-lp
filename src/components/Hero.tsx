import { useEffect, useState } from 'react';
import { Shield, Leaf, Award, Clock, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pillars = [
    {
      icon: Shield,
      title: 'Anti-Envelhecimento',
      description: 'Combate os radicais livres',
    },
    {
      icon: Leaf,
      title: '100% Natural',
      description: 'Extrato puro de uva',
    },
    {
      icon: Award,
      title: 'Registro ANVISA',
      description: 'Segurança garantida',
    },
    {
      icon: Clock,
      title: 'Resultados Rápidos',
      description: 'Em poucas semanas',
    },
  ];

  const trustBadges = [
    'ANVISA',
    '100% Natural',
    'GMP',
    'Vegano',
  ];

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050818] to-[#0a0e27]" />

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
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
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              {/* Left Column - Text Content */}
              <div 
                className={`flex flex-col items-center text-center lg:items-start lg:text-left transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c9a962]/30 bg-[#c9a962]/10 px-4 py-2 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-[#c9a962] animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#c9a962]">
                    Premium
                  </span>
                </div>

                {/* Main Title */}
                <h1 className="mb-4 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-[72px]">
                  Resverabio
                  <span className="block text-[#c9a962]">Premium</span>
                </h1>

                {/* Subtitle */}
                <p className="mb-6 text-xl font-light text-[#c9a962] sm:text-2xl md:text-3xl">
                  O Poder do Resveratrol Suíço
                </p>

                {/* Description */}
                <p className="mb-8 max-w-lg text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
                  Descubra o segredo da longevidade com nossa fórmula exclusiva de 
                  alta potência. Cada cápsula é uma dose de rejuvenescimento celular.
                </p>

                {/* CTA Button */}
                <button
                  onClick={scrollToProducts}
                  className="group relative mb-8 overflow-hidden rounded-full bg-[#c9a962] px-10 py-4 text-base font-bold text-black transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,169,98,0.4)] hover:scale-105 sm:text-lg"
                >
                  <span className="relative z-10">Quero Comprar Agora</span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                </button>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                  {trustBadges.map((badge, index) => (
                    <div
                      key={badge}
                      className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm"
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <Award className="h-4 w-4 text-[#c9a962]" />
                      <span className="text-xs font-medium text-white/90">
                        {badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Hero Image */}
              <div 
                className={`flex items-center justify-center transition-all duration-1000 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="relative">
                  {/* Glow Effect Behind Image */}
                  <div className="absolute inset-0 -m-8 rounded-full bg-[#c9a962]/20 blur-3xl" />
                  
                  {/* Main Hero Image */}
                  <div className="relative">
                    <img
                      src="/src/assets/resverabio-hero.png"
                      alt="Resverabio Premium - Resveratrol de Alta Potência"
                      className="relative z-10 w-full max-w-md rounded-2xl shadow-[0_0_60px_rgba(201,169,98,0.3)] transition-transform duration-500 hover:scale-[1.02] animate-float sm:max-w-lg lg:max-w-xl"
                    />
                    
                    {/* Reflection Effect */}
                    <div className="absolute -bottom-4 left-4 right-4 h-8 rounded-full bg-[#c9a962]/20 blur-2xl" />
                  </div>

                  {/* Floating Badge - Price */}
                  <div className="absolute -right-4 top-1/4 z-20 animate-bounce-slow rounded-full bg-black/80 border border-[#c9a962]/50 px-4 py-3 shadow-xl backdrop-blur-md sm:right-0">
                    <p className="text-xs text-gray-400">A partir de</p>
                    <p className="text-xl font-bold text-[#c9a962]">R$ 178</p>
                  </div>

                  {/* Floating Badge - Discount */}
                  <div className="absolute -left-4 bottom-1/4 z-20 animate-bounce-slow-delayed rounded-full bg-[#c9a962] px-4 py-3 shadow-xl sm:left-0">
                    <p className="text-xs font-bold text-black">Frete Grátis</p>
                    <p className="text-sm font-bold text-black">+ Brinde</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Section */}
        <div 
          className={`border-t border-white/10 bg-black/20 px-4 py-8 backdrop-blur-sm transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="group flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-4 text-center transition-all duration-300 hover:border-[#c9a962]/30 hover:bg-white/10 sm:p-6"
                    style={{
                      animationDelay: `${600 + index * 100}ms`,
                    }}
                  >
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#c9a962]/10 transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                      <Icon className="h-6 w-6 text-[#c9a962] sm:h-7 sm:w-7" />
                    </div>
                    <h3 className="mb-1 text-sm font-bold text-white sm:text-base">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-gray-400 sm:text-sm">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-[#c9a962]/60" />
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-bounce-slow-delayed {
          animation: bounce-slow 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  );
};

export default Hero;

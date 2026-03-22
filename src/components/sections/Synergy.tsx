import { useEffect, useState } from 'react';

const Synergy = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('synergy-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const ativos = [
    {
      nome: 'Ácido Hialurônico',
      descricao: 'Hidratação profunda e preenchimento celular para uma pele visivelmente mais jovem e radiante.',
      icone: '✦'
    },
    {
      nome: 'Colágeno',
      descricao: 'Estrutura e firmeza para a pele, fortalecendo a matriz celular e combatendo a flacidez.',
      icone: '◈'
    },
    {
      nome: 'Niacina + Complexo Vitamínico',
      descricao: 'Proteção antioxidante e revitalização celular completa para o organismo.',
      icone: '✹'
    }
  ];

  return (
    <section 
      id="synergy-section"
      className="relative w-full py-24 md:py-32 bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a] overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201, 169, 98, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div 
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-[#c9a962]/60"></span>
            <span className="text-[#c9a962] text-xs font-semibold uppercase tracking-[0.3em]">
              Ação Sinérgica
            </span>
            <span className="h-px w-8 bg-[#c9a962]/60"></span>
          </div>

          {/* Main Title */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Sinergia <span className="text-[#c9a962]">Perfeita</span>
          </h2>

          {/* Subtitle */}
          <p className="text-[#c9a962] text-lg md:text-xl font-light italic tracking-wide mb-10">
            Quando a ciência encontra a natureza
          </p>
        </div>

        {/* Main Text - Centralized and Larger */}
        <div 
          className={`max-w-4xl mx-auto text-center mb-16 md:mb-24 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-xl md:text-2xl lg:text-[26px] leading-relaxed text-gray-200 font-light">
            A fórmula exclusiva do <span className="text-[#c9a962] font-medium">Resverabio®</span> combina ativos premium que 
            trabalham em <span className="text-white font-normal">harmonia biológica</span>. Cada ingrediente potencializa o outro, 
            criando um efeito sinérgico que multiplica os benefícios para sua pele, coração e mente. 
            Uma sinfonia molecular de rejuvenescimento celular.
          </p>
        </div>

        {/* Three Active Components - Side by Side */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {ativos.map((ativo, index) => (
            <div
              key={ativo.nome}
              className="group relative"
              style={{ transitionDelay: `${600 + index * 150}ms` }}
            >
              {/* Card */}
              <div className="relative h-full p-8 md:p-10 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:border-[#c9a962]/30 hover:bg-white/[0.06]">
                
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full border border-[#c9a962]/30 bg-[#c9a962]/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <span className="text-[#c9a962] text-2xl">{ativo.icone}</span>
                  </div>
                </div>

                {/* Name */}
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-white text-center mb-4 tracking-wide">
                  {ativo.nome}
                </h3>

                {/* Divider */}
                <div className="w-12 h-px bg-[#c9a962]/40 mx-auto mb-4"></div>

                {/* Description */}
                <p className="text-gray-400 text-center text-sm md:text-base leading-relaxed">
                  {ativo.descricao}
                </p>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#c9a962]/20 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#c9a962]/20 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div 
          className={`mt-20 flex justify-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#c9a962]/40"></span>
            <span className="text-[#c9a962]/40 text-lg">◆</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#c9a962]/40"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Synergy;

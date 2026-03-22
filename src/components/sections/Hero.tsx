import React from 'react';

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] bg-black flex flex-col md:flex-row items-center justify-between px-6 py-12 md:px-20 overflow-hidden text-white font-sans">
      {/* Lado Esquerdo - Texto de Luxo */}
      <div className="w-full md:w-1/2 z-10 text-left space-y-6">
        <div className="inline-block px-4 py-1 border border-[#bfa67a]/30 rounded-full">
          <span className="text-[#bfa67a] text-xs tracking-[0.3em] uppercase font-light">
            ✨ Resveratrol Premium
          </span>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-serif tracking-tighter leading-tight uppercase">
          RESVERABIO®
        </h1>
        
        <p className="text-[#bfa67a] text-xl md:text-2xl font-light italic tracking-wide">
          A Molécula da Longevidade
        </p>
        
        <p className="text-gray-400 text-lg max-w-md leading-relaxed font-light">
          Trans-Resveratrol 99% de pureza. Aumente a longevidade celular, proteja seu coração e desperte sua mente com a ciência da vida.
        </p>

        <button className="bg-[#bfa67a] hover:bg-[#a68d5f] text-black px-8 py-4 rounded-sm flex items-center gap-3 transition-all duration-500 group">
          <span className="uppercase tracking-[0.2em] text-sm font-bold">Quero Experimentar</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>

      {/* Lado Direito - Imagem Hero */}
      <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center relative">
        <div className="relative group">
          <div className="absolute inset-0 bg-[#bfa67a]/10 blur-[100px] rounded-full"></div>
          <img 
            src="/resverabio-hero2.png" 
            alt="Resverabio Premium" 
            className="relative w-full h-auto max-w-[500px] object-contain drop-shadow-2xl"
          />
          <div className="absolute top-0 right-0 bg-[#bfa67a] p-4 shadow-xl translate-x-4 -translate-y-4">
            <p className="text-[10px] uppercase tracking-tighter text-black font-bold">Apenas</p>
            <p className="text-xl text-black font-serif">R$ 187</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
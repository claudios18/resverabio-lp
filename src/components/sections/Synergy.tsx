/**
 * =============================================================================
 * SEÇÃO SINERGIA - AÇÃO SINERGÉTICA DOS ATIVOS
 * =============================================================================
 * 
 * Design Premium:
 * - Fundo das janelas: preto profundo
 * - Efeito blur lilás/roxo suave para profundidade tecnológica
 * - Tipografia branca com números em dourado
 * - Interatividade hover com elevação
 * - Layout horizontal 3 colunas
 * =============================================================================
 */

const ingredients = [
  {
    name: 'Ácido Hialurônico',
    description: 'Hidratação profunda e preenchimento celular para uma pele visivelmente mais jovem e revitalizada.',
  },
  {
    name: 'Colágeno',
    description: 'Estrutura proteica essencial para firmeza, elasticidade e resistência da pele e articulações.',
  },
  {
    name: 'Niacina + Complexo Vitamínico',
    description: 'Sinergia potente de vitaminas que energiza, protege e revitaliza cada célula do seu corpo.',
  },
];

export default function Synergy() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção - Texto Centralizado Luxuoso */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-sm md:text-base tracking-[0.3em] uppercase text-[#bfa67a] font-semibold mb-4">
            Sinergia Perfeita
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tight mb-8">
            Ação Sinergética
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed font-light">
            A combinação exclusiva de ativos de alta performance trabalha em harmonia 
            para potencializar seus resultados. Cada ingrediente foi cuidadosamente 
            selecionado para complementar e amplificar os efeitos dos demais, 
            criando uma sinergia que transforma sua beleza de dentro para fora.
          </p>
        </div>

        {/* Grid de 3 Cards Horizontais - Estilo Luxo Tecnológico */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="group relative bg-black rounded-2xl p-8 lg:p-10 transition-all duration-500 ease-out hover:scale-[1.03] hover:-translate-y-3 cursor-pointer overflow-hidden"
              style={{
                boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
              }}
            >
              {/* Efeito de blur lilás/roxo suave - profundidade tecnológica */}
              <div 
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-40 blur-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-60"
                style={{
                  background: 'radial-gradient(circle, rgba(168, 130, 220, 0.5) 0%, rgba(139, 92, 246, 0.3) 40%, transparent 70%)',
                }}
              />
              <div 
                className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full opacity-30 blur-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-50"
                style={{
                  background: 'radial-gradient(circle, rgba(196, 181, 253, 0.4) 0%, rgba(167, 139, 250, 0.2) 40%, transparent 70%)',
                }}
              />

              {/* Borda sutil dourada no hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  border: '1px solid rgba(191, 166, 122, 0.5)',
                }}
              />

              {/* Número do Card - Dourado (#bfa67a) */}
              <div className="relative w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-[#bfa67a]/30">
                <span className="text-[#bfa67a] font-bold text-xl">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Título do Ativo - Branco */}
              <h3 className="relative text-xl md:text-2xl font-semibold text-white mb-4 tracking-tight group-hover:text-[#f5f5f5] transition-colors duration-300">
                {ingredient.name}
              </h3>

              {/* Divisória dourada sutil */}
              <div className="relative w-12 h-[2px] bg-gradient-to-r from-[#bfa67a] to-transparent mb-4 rounded-full group-hover:w-20 transition-all duration-500" />

              {/* Descrição - Branco/cinza claro para legibilidade */}
              <p className="relative text-base md:text-lg text-gray-200 leading-relaxed font-light">
                {ingredient.description}
              </p>
            </div>
          ))}
        </div>

        {/* Botão CTA - Comprar Agora */}
        <div className="flex justify-center pt-6 pb-6 md:pt-8 md:pb-8">
          <a
            href="#produtos"
            className="inline-flex items-center px-10 md:px-12 py-4 md:py-5 bg-black text-[#bfa67a] text-base md:text-lg font-semibold tracking-[0.2em] uppercase rounded-xl border border-[#bfa67a]/30 shadow-lg shadow-black/20 transition-all duration-300 hover:bg-[#1a1a1a] hover:scale-105 hover:shadow-xl hover:shadow-black/30 hover:border-[#bfa67a]/60"
          >
            Compre Agora
          </a>
        </div>
      </div>
    </section>
  );
}

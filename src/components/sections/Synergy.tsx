/**
 * =============================================================================
 * SEÇÃO SINERGIA - AÇÃO SINERGÉTICA DOS ATIVOS
 * =============================================================================
 * 
 * Especificações de Luxo:
 * - Cores douradas (#bfa67a) em bordas e detalhes
 * - Fundo com leve contraste, texto em preto
 * - Sombreamento discreto (efeito relevo)
 * - Interatividade hover com elevação
 * - Layout horizontal 3 colunas
 * - Sem imagens
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

        {/* Grid de 3 Cards Horizontais - Estilo Luxo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-[#faf9f7] to-[#f5f3ef] rounded-xl p-8 lg:p-10 transition-all duration-500 ease-out hover:scale-[1.03] hover:-translate-y-2 cursor-pointer"
              style={{
                boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.8), inset 0 -2px 4px rgba(0,0,0,0.03), 0 4px 20px rgba(0,0,0,0.06), 0 1px 3px rgba(191,166,122,0.1)',
                border: '1px solid rgba(191,166,122,0.4)',
              }}
            >
              {/* Borda dourada superior decorativa */}
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[3px] bg-gradient-to-r from-transparent via-[#bfa67a] to-transparent rounded-full opacity-60 group-hover:opacity-100 group-hover:w-3/4 transition-all duration-500"
              />

              {/* Número do Card - Dourado */}
              <div 
                className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"
                style={{
                  boxShadow: '0 4px 15px rgba(191,166,122,0.25), inset 0 2px 4px rgba(255,255,255,0.8)',
                  border: '2px solid #bfa67a',
                }}
              >
                <span className="text-[#bfa67a] font-bold text-xl">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Título do Ativo - Preto puro */}
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4 tracking-tight group-hover:text-[#1a1a1a] transition-colors duration-300">
                {ingredient.name}
              </h3>

              {/* Divisória dourada sutil */}
              <div className="w-12 h-[2px] bg-gradient-to-r from-[#bfa67a] to-transparent mb-4 rounded-full group-hover:w-20 transition-all duration-500" />

              {/* Descrição - Preto/Cinza escuro para legibilidade */}
              <p className="text-base md:text-lg text-gray-900 leading-relaxed font-normal">
                {ingredient.description}
              </p>

              {/* Sombra interna sutil no hover */}
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 30px rgba(191,166,122,0.08)',
                }}
              />
            </div>
          ))}
        </div>

        {/* Call to Action sutil - Dourado */}
        <div className="text-center mt-16">
          <p className="text-sm md:text-base text-[#bfa67a] tracking-[0.2em] uppercase font-medium">
            Tecnologia avançada em cada cápsula
          </p>
        </div>
      </div>
    </section>
  );
}

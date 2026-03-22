/**
 * =============================================================================
 * SEÇÃO SINERGIA - AÇÃO SINERGÉTICA DOS ATIVOS
 * =============================================================================
 * 
 * Especificações:
 * - Sem imagens
 * - Texto centralizado sobre Ação Sinergética
 * - 3 cards horizontais: Ácido Hialurônico, Colágeno, Niacina + Complexo Vitamínico
 * - Grid de 3 colunas no desktop
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
          <span className="inline-block text-sm md:text-base tracking-[0.3em] uppercase text-[#4A6B8F] font-medium mb-4">
            Sinergia Perfeita
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1E3A5F] tracking-tight mb-8">
            Ação Sinergética
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            A combinação exclusiva de ativos de alta performance trabalha em harmonia 
            para potencializar seus resultados. Cada ingrediente foi cuidadosamente 
            selecionado para complementar e amplificar os efeitos dos demais, 
            criando uma sinergia que transforma sua beleza de dentro para fora.
          </p>
        </div>

        {/* Grid de 3 Cards Horizontais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:shadow-xl hover:border-[#1E3A5F]/20 hover:-translate-y-1"
            >
              {/* Número do Card */}
              <div className="w-12 h-12 rounded-full bg-[#1E3A5F] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-semibold text-lg">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Título do Ativo */}
              <h3 className="text-xl md:text-2xl font-semibold text-[#1E3A5F] mb-4 tracking-tight">
                {ingredient.name}
              </h3>

              {/* Descrição */}
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {ingredient.description}
              </p>

              {/* Linha decorativa no hover */}
              <div className="mt-6 h-0.5 w-0 bg-[#1E3A5F] group-hover:w-full transition-all duration-500 ease-out" />
            </div>
          ))}
        </div>

        {/* Call to Action sutil */}
        <div className="text-center mt-16">
          <p className="text-sm md:text-base text-[#4A6B8F] tracking-wide">
            Tecnologia avançada em cada cápsula
          </p>
        </div>
      </div>
    </section>
  );
}

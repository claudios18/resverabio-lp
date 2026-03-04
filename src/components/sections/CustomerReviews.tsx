import { Container } from '../ui/Container';
import { Star, ThumbsUp, Check, ChevronDown } from 'lucide-react';

// Dados das avaliações
const reviewStats = {
  average: 4.9,
  total: 41,
  distribution: [
    { stars: 5, count: 37 },
    { stars: 4, count: 3 },
    { stars: 3, count: 1 },
    { stars: 2, count: 0 },
    { stars: 1, count: 0 },
  ],
  recommendPercentage: 97,
};

const reviews = [
  {
    id: 1,
    initials: 'AB',
    name: 'Anaede B.',
    verified: true,
    date: '15/01/2026',
    rating: 5,
    title: 'O que me atende também é o custo e a segurança na entrega',
    text: 'Sempre cuidei de minha pele. E com o Resverabio® me sinto mais segura. Pois o resultado é visível já nas primeiras semanas de uso.',
    helpful: 1,
    recommends: true,
  },
  {
    id: 2,
    initials: 'RJ',
    name: 'Ronaldo J.',
    verified: true,
    date: '24/12/2025',
    rating: 5,
    title: 'Gostei bons resultados recomendo',
    text: 'Pelo observável aumento da minha concentração e na pele do rosto some um pouco os sinais de rugas. Estou usando há 3 meses.',
    helpful: 1,
    recommends: true,
  },
  {
    id: 3,
    initials: 'MC',
    name: 'Maria C.',
    verified: true,
    date: '10/12/2025',
    rating: 5,
    title: 'Produto excelente!',
    text: 'Estou usando há 2 meses e já percebi melhora na minha disposição e na pele. Super recomendo! A entrega foi super rápida também.',
    helpful: 3,
    recommends: true,
  },
  {
    id: 4,
    initials: 'FL',
    name: 'Fernanda L.',
    verified: true,
    date: '05/12/2025',
    rating: 5,
    title: 'Melhor resveratrol que já usei',
    text: 'Já experimentei outras marcas, mas o Resverabio® é superior. A qualidade é perceptível, minha energia aumentou muito.',
    helpful: 2,
    recommends: true,
  },
  {
    id: 5,
    initials: 'CS',
    name: 'Carlos S.',
    verified: true,
    date: '28/11/2025',
    rating: 4,
    title: 'Bom produto, demorou um pouco para chegar',
    text: 'O produto é ótimo, já estou sentindo diferença na minha disposição. Só demorou uns dias a mais na entrega, mas valeu a espera.',
    helpful: 0,
    recommends: true,
  },
];

export function CustomerReviews() {
  const maxCount = Math.max(...reviewStats.distribution.map(d => d.count));

  return (
    <section id="avaliacoes" className="py-20 md:py-28 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Veja o que estão falando sobre este produto
          </h2>
          <span className="inline-block bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm">
            {reviewStats.total} avaliações de clientes
          </span>
        </div>

        <div className="grid lg:grid-cols-[340px_1fr] gap-12 max-w-6xl mx-auto">
          {/* Sidebar - Estatísticas */}
          <div className="space-y-8">
            {/* Nota Média */}
            <div className="text-center lg:text-left">
              <div className="flex items-baseline justify-center lg:justify-start gap-1 mb-3">
                <span className="text-6xl font-bold text-gray-800">
                  {reviewStats.average}
                </span>
                <span className="text-xl text-gray-400 font-medium">/ 5</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={22}
                    className={
                      i < Math.floor(reviewStats.average)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'fill-gray-200 text-gray-200'
                    }
                  />
                ))}
                <span className="text-gray-500 ml-2 text-sm">({reviewStats.total})</span>
              </div>
            </div>

            {/* Distribuição de Estrelas */}
            <div className="space-y-2">
              {reviewStats.distribution.map((item) => (
                <div key={item.stars} className="flex items-center gap-3">
                  <span className="text-sm text-gray-600 w-6 font-medium">{item.stars} ★</span>
                  <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full transition-all duration-500"
                      style={{
                        width: `${(item.count / maxCount) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Porcentagem de Recomendação */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
              <div className="relative w-16 h-16">
                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#c9a962"
                    strokeWidth="3"
                    strokeDasharray={`${reviewStats.recommendPercentage}, 100`}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gray-800">
                  {reviewStats.recommendPercentage}%
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-tight">
                dos clientes recomendam<br />este produto
              </p>
            </div>

            {/* Selo Reclame Aqui */}
            <div className="flex items-center gap-2 pt-4">
              <Star size={16} className="fill-green-500 text-green-500" />
              <span className="text-sm text-gray-600">
                Avaliações confiáveis do{' '}
                <span className="text-green-600 font-bold">ReclameAQUI</span>
              </span>
            </div>
          </div>

          {/* Lista de Avaliações */}
          <div>
            {/* Ordenar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
              <span className="text-gray-700 font-medium">Ordenar por:</span>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:border-gray-400 transition-colors text-sm bg-white">
                Mais recentes
                <ChevronDown size={16} />
              </button>
            </div>

            {/* Reviews */}
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="pb-6 border-b border-gray-200 last:border-0">
                  <div className="flex gap-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 border border-gray-200">
                      <span className="text-gray-600 font-semibold text-sm">
                        {review.initials}
                      </span>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1 min-w-0">
                      {/* Nome e Verificação */}
                      <div className="mb-1">
                        <h4 className="font-semibold text-gray-900">{review.name}</h4>
                        {review.verified && (
                          <span className="inline-flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded mt-1">
                            <Check size={12} />
                            Compra Verificada
                          </span>
                        )}
                        <p className="text-xs text-gray-400 mt-1">{review.date}</p>
                      </div>

                      {/* Estrelas */}
                      <div className="flex gap-0.5 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={
                              i < review.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'fill-gray-200 text-gray-200'
                            }
                          />
                        ))}
                      </div>

                      {/* Título e Texto */}
                      <h5 className="font-semibold text-gray-900 mb-1 text-base">{review.title}</h5>
                      <p className="text-gray-600 mb-3 leading-relaxed text-sm">{review.text}</p>

                      {/* Recomendação */}
                      {review.recommends && (
                        <div className="flex items-center gap-1.5 text-green-600 text-sm mb-3">
                          <Check size={16} className="text-green-500" />
                          <span>Recomendo este produto</span>
                        </div>
                      )}

                      {/* Útil */}
                      <button className="inline-flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:bg-gray-50 transition-colors text-sm">
                        <span>Útil</span>
                        <ThumbsUp size={14} />
                        <span className="font-medium">{review.helpful}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Ver mais avaliações */}
            <div className="mt-8 text-center">
              <button className="text-gray-600 hover:text-gray-800 font-medium text-sm underline underline-offset-4 transition-colors">
                Ver mais avaliações
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

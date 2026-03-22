/**
 * =============================================================================
 * TRIPLE GRID SECTION - GALERIA VISUAL PREMIUM
 * =============================================================================
 * 
 * Layout:
 * - Desktop: 3 colunas lado a lado (grid-cols-3)
 * - Mobile: Empilhamento vertical (grid-cols-1)
 * 
 * Estética:
 * - Bordas arredondadas elegantes
 * - Efeito hover com zoom suave
 * - Sombra sutil para profundidade
 * - Gap harmônico entre imagens
 * =============================================================================
 */

const galleryImages = [
  {
    src: '/resverabio-trio1.jpeg',
    alt: 'Resverabio - Imagem 1 - Benefícios Premium',
  },
  {
    src: '/resverabio-trio2.png',
    alt: 'Resverabio - Imagem 2 - Fórmula Avançada',
  },
  {
    src: '/resverabio-trio3.png',
    alt: 'Resverabio - Imagem 3 - Resultados Premium',
  },
];

export default function TripleGridSection() {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Responsivo - 3 colunas Desktop / 1 coluna Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg transition-all duration-500 ease-out hover:shadow-2xl"
              style={{
                aspectRatio: '4/3',
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <span class="text-gray-400 font-medium text-sm tracking-wider">RESVERABIO® ${index + 1}</span>
                      </div>
                    `;
                  }
                }}
              />
              
              {/* Overlay sutil no hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 50%)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

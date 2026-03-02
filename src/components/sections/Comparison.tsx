import { Container } from '../ui/Container';
import { SectionLabel } from '../ui/SectionLabel';
import { comparisonProducts } from '../../data/product';
import { Check } from 'lucide-react';

export function Comparison() {
  return (
    <section id="comparacao" className="py-16 md:py-24 bg-white overflow-x-auto">
      <Container>
        <div className="text-center mb-12">
          <SectionLabel className="mb-4 block">LINHA DE PROTEÍNAS</SectionLabel>
          <h2 className="heading-lg text-luxury-dark">
            Proteínas Resverabio<span className="text-luxury-gold">®</span>:<br />
            Conheça e Compare.
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A Resverabio oferece inúmeros tipos e formatos de proteína para você. 
            Todas com altíssima qualidade, compostas apenas de ingredientes puros e naturais.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="min-w-[800px] lg:min-w-0">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-luxury-dark">
                <th className="text-left py-4 px-4 font-serif text-lg">Produto</th>
                <th className="text-left py-4 px-4 font-serif text-lg">Variantes</th>
                <th className="text-center py-4 px-4 font-serif text-lg">Proteína</th>
                <th className="text-left py-4 px-4 font-serif text-lg">Diferenciais</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {comparisonProducts.map((product) => (
                <tr 
                  key={product.id} 
                  className={`hover:bg-gray-50 transition-colors ${
                    product.id === 'collagen-protein' ? 'bg-luxury-cream/30' : ''
                  }`}
                >
                  <td className="py-6 px-4">
                    <div>
                      <span className="font-semibold text-luxury-dark">{product.name}</span>
                      {product.id === 'collagen-protein' && (
                        <span className="ml-2 text-xs bg-luxury-gold text-white px-2 py-0.5 rounded">VOCÊ</span>
                      )}
                    </div>
                  </td>
                  <td className="py-6 px-4">
                    <ul className="space-y-1">
                      {product.variants.map((variant, vIndex) => (
                        <li key={vIndex} className="text-sm text-gray-600">
                          {variant}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-6 px-4 text-center">
                    <span className="font-semibold text-lg">{product.proteinPerServing}</span>
                    <span className="text-sm text-gray-500"> / porção</span>
                  </td>
                  <td className="py-6 px-4">
                    <ul className="space-y-1">
                      {product.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check size={14} className="text-luxury-gold flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-gray-500 text-center">
          Não existe "pior ou melhor" nessa lista. Mas sim, diferentes usos para cada objetivo e diferente adaptabilidade para cada pessoa.
        </p>
      </Container>
    </section>
  );
}

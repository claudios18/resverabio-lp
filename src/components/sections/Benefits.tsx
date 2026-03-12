import { Container } from '../ui/Container';
import { SectionLabel } from '../ui/SectionLabel';
import { benefitSections } from '../../data/product';

export function Benefits() {
  return (
    <section id="beneficios-detalhes" className="py-16 md:py-24 bg-white">
      <Container>
        <div className="space-y-24 md:space-y-32">
          {benefitSections.map((section) => (
            <div 
              key={section.id}
              className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                section.layout === 'right' ? 'md:grid-flow-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${section.layout === 'right' ? 'md:col-start-2' : ''}`}>
                <SectionLabel>{section.label}</SectionLabel>
                
                <h2 className="heading-lg text-luxury-dark">
                  {section.title}
                </h2>
                
                {section.subtitle && (
                  <p className="text-sm uppercase tracking-wider text-gray-500 font-medium">
                    {section.subtitle}
                  </p>
                )}
                
                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-body">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Image Placeholder */}
              <div className={`${section.layout === 'right' ? 'md:col-start-1' : ''}`}>
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 text-xs">IMG</span>
                    </div>
                    <p className="text-sm text-gray-400">Imagem: {section.label}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

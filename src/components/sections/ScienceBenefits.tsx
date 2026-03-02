import { Container } from '../ui/Container';
import { SectionLabel } from '../ui/SectionLabel';
import { benefitPillars, scientificSources } from '../../data/scientificData';
import { Sparkles, Heart, Brain, Shield, ExternalLink } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Heart,
  Brain,
  Shield
};

export function ScienceBenefits() {
  return (
    <section id="beneficios" className="py-24 md:py-32 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionLabel className="mb-4 block text-luxury-gold">BASE CIENTÍFICA</SectionLabel>
          <h2 className="heading-lg text-luxury-dark mb-6">
            Os 4 Pilares da Longevidade Resverabio<span className="text-luxury-gold">®</span>
          </h2>
          <p className="text-body">
            Todos os benefícios são baseados em estudos científicos disponíveis em{' '}
            <a 
              href={`https://${scientificSources.main}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxury-gold hover:underline inline-flex items-center gap-1 font-medium"
            >
              {scientificSources.main}
              <ExternalLink size={16} />
            </a>
            , portal mantido pela Naturalbio / Pesquisa e Desenvolvimento.
          </p>
          <p className="text-base text-gray-500 mt-3">
            {scientificSources.studiesCount}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="space-y-24">
          {benefitPillars.map((pillar, index) => {
            const IconComponent = iconMap[pillar.icon] || Shield;
            const isEven = index % 2 === 0;

            return (
              <div 
                key={pillar.id}
                id={pillar.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Content */}
                <div className={isEven ? '' : 'lg:col-start-2'}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-luxury-cream flex items-center justify-center">
                      <IconComponent size={28} className="text-luxury-gold" />
                    </div>
                    <SectionLabel className="text-luxury-gold">{pillar.label}</SectionLabel>
                  </div>

                  <h3 className="heading-md text-luxury-dark mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-base uppercase tracking-wider text-gray-500 mb-6 font-medium">
                    {pillar.subtitle}
                  </p>

                  <p className="text-body mb-8">
                    {pillar.description}
                  </p>

                  <a 
                    href={`https://${pillar.source}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-base text-luxury-gold hover:underline mb-10 font-medium"
                  >
                    <ExternalLink size={16} />
                    Ver estudos científicos em {scientificSources.main}
                  </a>

                  {/* Benefits List */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    {pillar.benefits.slice(0, 4).map((benefit, bIndex) => (
                      <div 
                        key={bIndex}
                        className="p-5 bg-gray-50 rounded-xl border border-gray-100 hover:bg-luxury-cream/30 transition-colors"
                      >
                        <h4 className="font-semibold text-luxury-dark text-base mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-base text-gray-600 line-clamp-2 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image/Visual with Blur Light Effect */}
                <div className={isEven ? '' : 'lg:col-start-1'}>
                  <div className="relative blur-light-effect">
                    {/* Luz Blur - Travesseiro branco suave */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-40 bg-white rounded-full blur-[60px] opacity-80" />
                    
                    {/* Main Visual */}
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center overflow-hidden border border-gray-100 shadow-lg">
                      <div className="text-center p-10">
                        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white shadow-lg flex items-center justify-center">
                          <IconComponent size={40} className="text-luxury-gold" />
                        </div>
                        <p className="font-serif text-2xl text-luxury-dark">{pillar.title}</p>
                        <p className="text-sm text-gray-400 mt-2 uppercase tracking-wider">{pillar.label}</p>
                      </div>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -bottom-5 -right-5 bg-luxury-gold text-white px-5 py-3 rounded-xl shadow-xl">
                      <p className="text-sm font-semibold">{pillar.benefits.length} Benefícios Comprovados</p>
                    </div>

                    {/* Source Badge */}
                    <div className="absolute top-5 left-5 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-gray-100">
                      <p className="text-xs text-gray-500 font-medium">Fonte: {scientificSources.main}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

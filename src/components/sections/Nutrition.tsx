import { Container } from '../ui/Container';
import { SectionLabel } from '../ui/SectionLabel';
import { scientificSources } from '../../data/scientificData';
import { Check } from 'lucide-react';

export function Nutrition() {
  const formulaHighlights = [
    { 
      name: 'Trans-Resveratrol', 
      amount: '500mg',
      description: 'Forma mais biodisponível do resveratrol, extraída da raiz de Polygonum cuspidatum'
    },
    { 
      name: 'Piperina (Pimenta Preta)', 
      amount: '10mg',
      description: 'Aumenta a biodisponibilidade do resveratrol em até 2000%'
    },
    { 
      name: 'Quercetina', 
      amount: '50mg',
      description: 'Sinergia antioxidante e anti-inflamatória com o resveratrol'
    },
    { 
      name: 'Vitamina C', 
      amount: '60mg',
      description: 'Potencializa a ação antioxidante e proteção celular'
    }
  ];

  return (
    <section id="nutricao" className="py-24 md:py-32 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Info */}
          <div>
            <SectionLabel className="mb-4 block text-luxury-gold">FÓRMULA AVANÇADA</SectionLabel>
            <h2 className="heading-lg text-luxury-dark mb-8">
              A Ciência por trás da <br />
              <span className="text-luxury-gold">Molécula da Longevidade</span>
            </h2>
            <p className="text-body mb-10">
              O Resveratrol (RSV), quimicamente conhecido como 3,4′,5-trihidroxiestilbeno, 
              é um polifenol da classe dos estilbenos. Atua como fitoalexina, sendo produzido 
              por plantas em resposta a estresses, como infecções e radiação UV. 
              <br /><br />
              <a href={`https://${scientificSources.main}`} target="_blank" rel="noopener noreferrer" className="text-luxury-gold hover:underline font-medium">
                Fonte: {scientificSources.main}
              </a>
            </p>

            <div className="space-y-5">
              <h3 className="font-bold text-xl mb-6 text-luxury-dark">Nossa Fórmula Exclusiva:</h3>
              {formulaHighlights.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-luxury-gold/20 flex items-center justify-center flex-shrink-0">
                    <Check size={20} className="text-luxury-gold" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <h4 className="font-semibold text-luxury-dark text-lg">{item.name}</h4>
                      <span className="text-luxury-gold text-base font-bold">{item.amount}</span>
                    </div>
                    <p className="text-base text-gray-600 mt-1 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Benefits Cards */}
          <div className="grid gap-6">
            {[
              {
                title: 'Trans-Resveratrol 99%',
                description: 'Máxima pureza e concentração para resultados cientificamente comprovados.',
                stat: '99%'
              },
              {
                title: 'Biodisponibilidade',
                description: 'Com piperina para aumentar absorção em até 2000%.',
                stat: '2000%'
              },
              {
                title: 'Ação Sinérgica',
                description: 'Quercetina e Vitamina C potencializam os efeitos antioxidantes.',
                stat: '4x'
              },
              {
                title: 'Sem Aditivos',
                description: 'Fórmula clean: sem corantes, aromatizantes ou conservantes artificiais.',
                stat: '0%'
              }
            ].map((card, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl flex items-center gap-6 border border-gray-100 shadow-sm">
                <div className="w-20 h-20 rounded-2xl bg-luxury-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-serif font-bold text-luxury-gold">{card.stat}</span>
                </div>
                <div>
                  <h4 className="font-bold text-luxury-dark text-lg mb-2">{card.title}</h4>
                  <p className="text-base text-gray-600 leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}

            {/* Scientific Reference */}
            <div className="mt-8 p-6 border border-gray-200 rounded-xl bg-gray-50">
              <p className="text-base text-gray-500 leading-relaxed">
                <strong className="text-luxury-dark">Fonte Científica:</strong> Todos os dados baseados em estudos disponíveis em{' '}
                <a 
                  href={`https://${scientificSources.main}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-luxury-gold hover:underline font-medium"
                >
                  {scientificSources.main}
                </a>
                , portal de conteúdo científico mantido pela Naturalbio / Pesquisa e Desenvolvimento.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

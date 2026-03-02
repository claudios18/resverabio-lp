import { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionLabel } from '../ui/SectionLabel';
import { testimonials } from '../../data/scientificData';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-gray-50">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel className="mb-4 block text-luxury-gold">SOCIAL PROOF</SectionLabel>
          <h2 className="heading-lg text-luxury-dark mb-6">
            O que dizem sobre o Resverabio<span className="text-luxury-gold">®</span>
          </h2>
          <p className="text-body">
            Depoimentos reais de profissionais de saúde e clientes que experimentaram 
            os benefícios científicos do Resverabio® no dia a dia.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 relative border border-gray-100">
            {/* Quote Icon */}
            <div className="absolute -top-8 left-10 w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center shadow-lg">
              <Quote size={32} className="text-white" />
            </div>

            <div className="grid md:grid-cols-[auto_1fr] gap-10 items-center">
              {/* Avatar */}
              <div className="text-center">
                <div className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-5 border-4 border-white shadow-lg">
                  <span className="text-gray-400 text-sm font-medium">FOTO</span>
                </div>
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>
                <span className="inline-block bg-luxury-cream text-luxury-dark text-sm px-4 py-2 rounded-full font-medium">
                  {currentTestimonial.product}
                </span>
              </div>

              {/* Content */}
              <div>
                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-serif italic">
                  "{currentTestimonial.text}"
                </blockquote>
                <div>
                  <p className="font-bold text-luxury-dark text-lg">{currentTestimonial.name}</p>
                  <p className="text-base text-gray-500">{currentTestimonial.role}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-10 pt-8 border-t border-gray-100">
              <button
                onClick={prevTestimonial}
                className="flex items-center gap-2 text-gray-400 hover:text-luxury-gold transition-colors font-medium"
              >
                <ChevronLeft size={24} />
                <span className="text-base">Anterior</span>
              </button>

              {/* Dots */}
              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-luxury-gold w-8'
                        : 'bg-gray-300 w-3 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="flex items-center gap-2 text-gray-400 hover:text-luxury-gold transition-colors font-medium"
              >
                <span className="text-base">Próximo</span>
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { value: '50.000+', label: 'Clientes Satisfeitos' },
            { value: '4.9/5', label: 'Avaliação Média' },
            { value: '25.000+', label: 'Estudos Científicos' },
            { value: '98%', label: 'Recomendam' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-serif font-semibold text-luxury-gold">
                {stat.value}
              </p>
              <p className="text-base text-gray-500 uppercase tracking-wider mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

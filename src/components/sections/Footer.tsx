import { useState } from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export const Footer = () => {
  const [logoError, setLogoError] = useState(false);

  const currentYear = new Date().getFullYear();

  const beneficiosLinks = [
    { label: 'Antioxidante Natural', href: '#beneficios' },
    { label: 'Saúde Cardiovascular', href: '#beneficios' },
    { label: 'Longevidade Celular', href: '#beneficios' },
    { label: 'Pele Mais Jovem', href: '#beneficios' },
  ];

  const suporteLinks = [
    { label: 'Perguntas Frequentes', href: '#faq' },
    { label: 'Como Usar', href: '#como-usar' },
    { label: 'Envio e Entrega', href: '#envio' },
    { label: 'Garantia de 30 Dias', href: '#garantia' },
  ];

  const contatoInfo = [
    { label: 'contato@resverabio.com.br', href: 'mailto:contato@resverabio.com.br' },
    { label: 'WhatsApp: (11) 99999-9999', href: 'https://wa.me/5511999999999' },
    { label: 'Atendimento: Seg-Sex, 9h-18h', href: '#' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/resverabio', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/resverabio', label: 'Facebook' },
    { icon: Youtube, href: 'https://youtube.com/resverabio', label: 'Youtube' },
  ];

  return (
    <footer className="bg-black">
      {/* Banner de Referência Científica */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-center text-sm text-white/50">
            Conteúdo científico baseado em{' '}
            <span className="text-luxury-gold">resveratrolciencia.com</span>
          </p>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Coluna 1 - Brand */}
          <div className="space-y-6">
            <div className="flex items-center">
              {!logoError ? (
                <img
                  src="/resverabio-logomarca.png"
                  alt="Resverabio®"
                  className="h-14 w-auto"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="text-2xl font-bold text-white">
                  Resverabio<span className="text-luxury-gold">®</span>
                </span>
              )}
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Suplemento premium de resveratrol trans-policetileno 98% de pureza. 
              Desenvolvido para quem busca qualidade de vida, longevidade e 
              bem-estar com base científica.
            </p>
            
            {/* Redes Sociais */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center
                           text-white transition-all duration-300 ease-in-out
                           hover:bg-luxury-gold hover:text-black"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2 - Benefícios */}
          <div>
            <h3 className="text-white font-semibold mb-6">Benefícios</h3>
            <ul className="space-y-3">
              {beneficiosLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-luxury-gold transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 - Suporte */}
          <div>
            <h3 className="text-white font-semibold mb-6">Suporte</h3>
            <ul className="space-y-3">
              {suporteLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-luxury-gold transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 - Contato */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contato</h3>
            <ul className="space-y-3">
              {contatoInfo.map((info) => (
                <li key={info.label}>
                  <a
                    href={info.href}
                    className="text-white/60 text-sm hover:text-luxury-gold transition-colors duration-200"
                  >
                    {info.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40 text-center md:text-left">
              © {currentYear} Resverabio®. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#termos"
                className="text-xs text-white/40 hover:text-luxury-gold transition-colors duration-200"
              >
                Termos de Uso
              </a>
              <a
                href="#privacidade"
                className="text-xs text-white/40 hover:text-luxury-gold transition-colors duration-200"
              >
                Política de Privacidade
              </a>
              <a
                href="#cookies"
                className="text-xs text-white/40 hover:text-luxury-gold transition-colors duration-200"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};



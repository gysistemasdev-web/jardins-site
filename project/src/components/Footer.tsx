import React from 'react';
import { Instagram, Phone, Mail, MapPin, Heart, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div
              className="flex items-center mb-6 cursor-pointer justify-center lg:justify-start"
              onClick={scrollToTop}
            >
              <div className="bg-white p-3 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                <img
                  src="https://github.com/gysistemasdev-web/JARDINS-S-O-PAULO/blob/17c524d0b9d0851df189e1d8c50049bc75b7dc38/logoJSP-1cor.png?raw=true"
                  alt="Logo Jardins São Paulo"
                  className="h-16 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
                Jardinagem, paisagismo e serviços especializados
            </p>
            <div className="flex items-center space-x-4">
              {/* Instagram */}
              <a
                href="https://instagram.com/jardinssaopaulopt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/351939363007"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-emerald-400 mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center text-slate-300">
                <Phone className="w-5 h-5 mr-3 text-emerald-400 flex-shrink-0" />
                <a href="tel:+351939363007" className="hover:text-emerald-400 transition-colors">
                  939 363 007
                </a>
              </div>
              <div className="flex items-start text-slate-300">
                <Mail className="w-5 h-5 mr-3 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a
                    href="mailto:flavir@jardinssaopaulo.pt"
                    className="block hover:text-emerald-400 transition-colors"
                  >
                    flavir@jardinssaopaulo.pt
                  </a>
                  <a
                    href="mailto:jacque@jardinssaopaulo.pt"
                    className="block hover:text-emerald-400 transition-colors"
                  >
                    jacque@jardinssaopaulo.pt
                  </a>
                </div>
              </div>
              <div className="flex items-center text-slate-300">
                <MapPin className="w-5 h-5 mr-3 text-emerald-400 flex-shrink-0" />
                <span>Cascais, Portugal</span>
              </div>
            </div>
          </div>

          {/* Services & Areas */}
          <div>
            <h4 className="text-lg font-bold text-emerald-400 mb-6">Áreas de Atuação</h4>
            <div className="space-y-2 text-slate-300">
              <p>• Cascais</p>
              <p>• Sintra</p>
              <p>• Oeiras</p>
              <p>• Lisboa</p>
            </div>
            
            <h4 className="text-lg font-bold text-emerald-400 mb-4 mt-8">Serviços</h4>
            <div className="space-y-2 text-slate-300 text-sm">
              <p>• Paisagismo</p>
              <p>• Manutenção</p>
              <p>• Carpintaria</p>
              <p>• Projetos 2D</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {currentYear} Jardins São Paulo. Todos os direitos reservados.
            </p>
            <div className="flex items-center text-slate-400 text-sm mt-4 md:mt-0">
              <span>Desenvolvido com</span>
              <Heart className="w-4 h-4 mx-1 text-emerald-400 fill-current" />
              <span>para transformar jardins</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

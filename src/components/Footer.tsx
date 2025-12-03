import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#3F2F1C] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Logo + descrição */}
          <div className="lg:col-span-1">
            <div
              className="flex items-center mb-6 cursor-pointer justify-center lg:justify-start"
              onClick={scrollToTop}
            >
              <img
                src="https://github.com/gysistemasdev-web/JARDINS-S-O-PAULO/blob/1152df9deab2eac2f66a71ac00bf7b6257f4b0c7/logoJSP-branco.png?raw=true"
                alt="Logo Jardins São Paulo"
                className="h-20 w-auto object-contain"
              />
            </div>

            <p className="text-[#E8E2D9] leading-relaxed max-w-md">
              Jardinagem, paisagismo e serviços especializados.
            </p>

            {/* Socials */}
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="https://instagram.com/jardinssaopaulopt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#4A3A28] rounded-xl flex items-center justify-center hover:bg-[#75624C] transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>

              <a
                href="https://wa.me/351939363007"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#4A3A28] rounded-xl flex items-center justify-center hover:bg-[#75624C] transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Áreas de atuação */}
          <div>
            <h4 className="text-lg font-bold text-[#D4C8B8] mb-6">
              Áreas de Atuação
            </h4>

            <div className="space-y-2 text-[#E8E2D9] text-sm">
              <p>• Cascais</p>
              <p>• Sintra</p>
            </div>
          </div>

          {/* Espaço vazio (removido: contactos + serviços) */}
          <div></div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#4A3A28] mt-12 pt-8 text-center">
          <p className="text-[#C6BAA6] text-sm">
            © {currentYear} Jardins São Paulo. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

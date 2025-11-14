import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background with Parallax */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute inset-0 bg-[url('https://github.com/gysistemasdev-web/JARDINS-S-O-PAULO/blob/17c524d0b9d0851df189e1d8c50049bc75b7dc38/Fundo-certo.jpeg?raw=true')] bg-cover bg-center"></div>

        {/* Overlay bege/areia + escurecimento suave */}
        <div className="absolute inset-0 bg-[rgba(40,40,20,0.45)] mix-blend-multiply"></div>
      </div>

      {/* Floating Elements (verde musgo suave) */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-[#556B2F]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-16 w-48 h-48 bg-[#6B8E23]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Jardinagem, paisagismo e
                <span className="block text-[#C6D5B9]">
                  serviços adicionais
                </span>
              </h1>

            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group flex items-center justify-center px-8 py-4 
                bg-[#556B2F] text-white font-bold rounded-2xl text-lg 
                hover:bg-[#465726] transform hover:-translate-y-1 
                transition-all duration-300 shadow-lg"
              >
                Visita Gratuita
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#F5F0E6]/20 backdrop-blur-xl rounded-3xl p-6 border border-[#556B2F]/30">
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-[#D7DBC8]">Anos de experiência</div>
            </div>

            <div className="bg-[#F5F0E6]/20 backdrop-blur-xl rounded-3xl p-6 border border-[#556B2F]/30">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-[#D7DBC8]">Projetos realizados</div>
            </div>

            <div className="bg-[#F5F0E6]/20 backdrop-blur-xl rounded-3xl p-6 border border-[#556B2F]/30">
              <div className="text-3xl font-bold text-white mb-2">2</div>
              <div className="text-[#D7DBC8]">Países atendidos</div>
            </div>

            <div className="bg-[#F5F0E6]/20 backdrop-blur-xl rounded-3xl p-6 border border-[#556B2F]/30">
              <div className="text-3xl font-bold text-white mb-2">24h</div>
              <div className="text-[#D7DBC8]">Resposta rápida</div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

    </section>
  );
};

export default Hero;

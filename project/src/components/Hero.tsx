import React, { useEffect, useState } from 'react';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';

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
        {/* Foto de fundo personalizada */}
        <div className="absolute inset-0 bg-[url('https://github.com/gysistemasdev-web/JARDINS-S-O-PAULO/blob/17c524d0b9d0851df189e1d8c50049bc75b7dc38/Fundo-certo.jpeg?raw=true')] bg-cover bg-center"></div>
        
        {/* Overlay verde mais claro */}
        <div className="absolute inset-0 bg-emerald-900/30"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-16 w-48 h-48 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Jardins que
                <span className="block bg-gradient-to-r from-emerald-300 to-green-200 bg-clip-text text-transparent">
                  inspiram
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-emerald-100 leading-relaxed max-w-2xl">
                Desde 2019, transformamos espaços em Londres e Cascais em jardins únicos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-400 text-white font-bold rounded-2xl text-lg hover:shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                Visita Gratuita
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center space-x-4 text-emerald-200">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Desde 2019</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Londres & Portugal</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">6+</div>
              <div className="text-emerald-200">Anos de experiência</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-emerald-200">Projetos realizados</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">2</div>
              <div className="text-emerald-200">Países atendidos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">24h</div>
              <div className="text-emerald-200">Resposta rápida</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

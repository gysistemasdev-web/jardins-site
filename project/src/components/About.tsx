import React from 'react';
import { Award, Users, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Título da seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#e5e2d8] text-[#556B2F] rounded-full font-medium mb-4">
            Sobre nós
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Gardening around the globe
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Imagem */}
          <div className="relative">
            <div className="relative rounded-3xl bg-slate-50 border border-slate-200 p-2">
              <img
                src="https://github.com/gysistemasdev-web/JARDINS-S-O-PAULO/blob/17c524d0b9d0851df189e1d8c50049bc75b7dc38/montagem.jpg?raw=true"
                alt="Equipe Jardins São Paulo em ação"
                className="w-full h-auto max-h-[560px] sm:max-h-[600px] object-contain rounded-2xl mx-auto"
                loading="lazy"
              />
            </div>

            {/* Selo flutuante */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#556B2F] rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-slate-800">Qualidade</div>
                  <div className="text-sm text-slate-600">Garantida</div>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800">
                JARDINS SÃO PAULO
              </h3>

              <div className="space-y-4 text-slate-600 leading-relaxed text-justify">
                <p>
                  Uma história que começa em 2019 no norte de Londres, através da assistência
                  à uma garden designer da região, fomos desenvolvendo técnicas e adquirindo experiência.
                  E com o passar do tempo, começamos a atender clientes locais, na região de Finchley,
                  com projetos de paisagismo e serviços personalizados como: sitting area, summer houses,
                  mini golf pit, canteiros em deck, jardim vertical, área externa em deck; dentre outros
                  serviços de manutenção.
                </p>

                <p>
                  Desde 2022, atendemos a região de Cascais e Sintra, nos mais variados serviços como soluções
                  em deck, colocação de relva artificial, instalação e manutenção de tapetes de relva natural,
                  implementação de sistema de rega, canteiros em deck, projetos 2D, plantações, manutenção de lago
                  e manutenção regular de jardim.
                </p>
              </div>
            </div>

            {/* Métricas */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-2xl p-6 text-center">
                <Users className="w-8 h-8 text-[#556B2F] mx-auto mb-3" />
                <div className="font-bold text-2xl text-slate-800 mb-1">5+</div>
                <div className="text-slate-600 text-sm">Anos de experiência</div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 text-center">
                <MapPin className="w-8 h-8 text-[#556B2F] mx-auto mb-3" />
                <div className="font-bold text-2xl text-slate-800 mb-1">2</div>
                <div className="text-slate-600 text-sm">Países atendidos</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

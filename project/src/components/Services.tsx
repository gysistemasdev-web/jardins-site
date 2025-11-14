import React from 'react';
import { Leaf, Hammer, Sparkles } from 'lucide-react';

const Services = () => {
  // Helper de lista com verde musgo
  const ListItem = ({ text }: { text: string }) => (
    <li className="flex items-start space-x-3">
      <div className="w-2.5 h-2.5 bg-[#556B2F] rounded-full mt-2 flex-shrink-0"></div>
      <span className="text-slate-700 leading-relaxed">{text}</span>
    </li>
  );

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#E2E8E2] text-[#3F4A3C] rounded-full font-medium mb-4">
            Nossos serviços
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">
            Nossos serviços
          </h2>
        </div>

        {/* Pilares */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Paisagismo */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#556B2F] to-[#3F4A3C] rounded-xl flex items-center justify-center">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Paisagismo</h3>
            </div>
            <ul className="space-y-3">
              <ListItem text="Design 2D sob medida" />
              <ListItem text="Lista de espécies e quantidades para o projeto" />
              <ListItem text="Orçamento e cronograma" />
            </ul>
          </div>

          {/* Construção & Manutenção */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#3F4A3C] to-[#556B2F] rounded-xl flex items-center justify-center">
                <Hammer className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">
                Construção & Manutenção
              </h3>
            </div>
            <ul className="space-y-3">
              <ListItem text="Preparação de solo e canteiros" />
              <ListItem text="Plantação e adubação" />
              <ListItem text="Relvas e arbustos" />
              <ListItem text="Sistema de rega" />
              <ListItem text="Deck e carpintaria" />
              <ListItem text="Podas de árvores e sebes" />
              <ListItem text="Manutenção contínua de relva e arbustos" />
              <ListItem text="Ajustes sistema de regas" />
            </ul>
          </div>

          {/* Serviços Especializados */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#556B2F] to-[#3F4A3C] rounded-xl flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">
                Serviços Especializados
              </h3>
            </div>
            <ul className="space-y-3">
              <ListItem text="Deck sob medida: projeto, execução, tratamento e integração" />
              <ListItem text="Lagos e fontes" />
              <ListItem text="Mini golf pit" />
              <ListItem text="Fire pit / lareira de chão" />
              <ListItem text="E mais" />
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#556B2F] to-[#3F4A3C] rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Precisa de um serviço específico?
            </h3>
            <p className="text-[#DDE4D8] mb-6">
              Contacte-nos para um orçamento personalizado
            </p>
            <button
              onClick={() =>
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-3 bg-white text-[#3F4A3C] font-semibold rounded-2xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

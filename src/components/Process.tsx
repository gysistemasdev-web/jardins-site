import React from 'react';
import { Phone, Search, FileText, Wrench, ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Phone,
      number: '01',
      title: 'Primeiro Contacto',
      description: 'Entre em contacto connosco e agendamos uma visita técnica gratuita.',
      color: 'from-[#556B2F] to-[#3F4A3C]'
    },
    {
      icon: Search,
      number: '02',
      title: 'Visita Técnica',
      description: 'Fazemos o levantamento completo de medidas e necessidades do espaço.',
      color: 'from-[#3F4A3C] to-[#556B2F]'
    },
    {
      icon: FileText,
      number: '03',
      title: 'Orçamento Detalhado',
      description: 'Apresentamos proposta completa em 3-5 dias úteis com todos os detalhes.',
      color: 'from-[#556B2F] to-[#3F4A3C]'
    },
    {
      icon: Wrench,
      number: '04',
      title: 'Execução',
      description: 'Realizamos o projeto com planeamento, execução e registo fotográfico.',
      color: 'from-[#3F4A3C] to-[#556B2F]'
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#F6F3EC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#E2E8E2] text-[#3F4A3C] rounded-full font-medium mb-4">
            Como Trabalhamos
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Processo Simples e Transparente
          </h2>

          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Do primeiro contacto à entrega final, cada etapa é cuidadosamente planeada
          </p>
        </div>

        <div className="relative">

          {/* Linha de ligação no desktop (tom verde-musgo claro) */}
          <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-[#D9D6CC] via-[#CFCBBF] to-[#D9D6CC]"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">

                {/* Step Card */}
                <div className="bg-white rounded-3xl p-8 text-center group-hover:bg-[#FCFAF7] group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border border-[#E2E2DD]">

                  {/* Ícones */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-4 border-[#556B2F] flex items-center justify-center text-[#3F4A3C] font-bold text-sm shadow-md">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-[#3F4A3C] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Setinha */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-4 z-10">
                    <div className="w-8 h-8 bg-white rounded-full border-2 border-[#CFCBBF] flex items-center justify-center shadow-md">
                      <ArrowRight className="w-4 h-4 text-[#556B2F]" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#3F4A3C] to-[#556B2F] rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para começar?
            </h3>

            <p className="text-[#E5E2D5] mb-6 max-w-2xl mx-auto">
              Contacte-nos hoje mesmo e dê o primeiro passo para transformar o seu jardim
            </p>

            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-white text-[#3F4A3C] font-semibold rounded-2xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Marcar Visita Gratuita
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;

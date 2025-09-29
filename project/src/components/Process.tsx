import React from 'react';
import { Phone, Search, FileText, Wrench, ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Phone,
      number: '01',
      title: 'Primeiro Contacto',
      description: 'Entre em contacto connosco e agendamos uma visita técnica gratuita.',
      color: 'from-emerald-500 to-green-400'
    },
    {
      icon: Search,
      number: '02',
      title: 'Visita Técnica',
      description: 'Fazemos o levantamento completo de medidas e necessidades do espaço.',
      color: 'from-green-500 to-lime-400'
    },
    {
      icon: FileText,
      number: '03',
      title: 'Orçamento Detalhado',
      description: 'Apresentamos proposta completa em 3-5 dias úteis com todos os detalhes.',
      color: 'from-lime-500 to-green-400'
    },
    {
      icon: Wrench,
      number: '04',
      title: 'Execução',
      description: 'Realizamos o projeto com planeamento, execução e registo fotográfico.',
      color: 'from-teal-500 to-emerald-400'
    }
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full font-medium mb-4">
            Como Trabalhamos
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Processo Simples e Transparente
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Do primeiro contacto à entrega final, cada etapa é cuidadosamente planeada
          </p>
        </div>

        <div className="relative">
          {/* Desktop Connection Line */}
          <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-emerald-200 via-green-300 to-emerald-200"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Card */}
                <div className="bg-slate-50 rounded-3xl p-8 text-center group-hover:bg-white group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border border-slate-100">
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-4 border-emerald-500 flex items-center justify-center text-emerald-700 font-bold text-sm shadow-md">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-emerald-700 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-4 z-10">
                    <div className="w-8 h-8 bg-white rounded-full border-2 border-emerald-300 flex items-center justify-center shadow-md">
                      <ArrowRight className="w-4 h-4 text-emerald-600" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Pronto para começar?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Contacte-nos hoje mesmo e dê o primeiro passo para transformar o seu jardim
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-400 text-white font-semibold rounded-2xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
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
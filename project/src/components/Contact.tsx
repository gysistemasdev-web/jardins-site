import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, Instagram, Clock, Star } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    alert('Mensagem enviada com sucesso! Entraremos em contacto em breve.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Telefone',
      value: '+351 939 363 007',
      href: 'tel:+351939363007',
      color: 'from-emerald-500 to-green-400'
    },
    {
      icon: Mail,
      label: 'E-mail Principal',
      value: 'flavir@jardinssaopaulo.pt',
      href: 'mailto:flavir@jardinssaopaulo.pt',
      color: 'from-green-500 to-lime-400'
    },
    {
      icon: Mail,
      label: 'E-mail Secundário',
      value: 'jacque@jardinssaopaulo.pt',
      href: 'mailto:jacque@jardinssaopaulo.pt',
      color: 'from-lime-500 to-green-400'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Cascais, Portugal',
      href: '#',
      color: 'from-teal-500 to-emerald-400'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full font-medium mb-4">
            Fale Connosco
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Vamos Conversar
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Marque a sua visita técnica gratuita ou esclareça as suas dúvidas
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-600 font-medium">{info.label}</p>
                      {info.href.startsWith('tel:') || info.href.startsWith('mailto:') ? (
                        <a 
                          href={info.href} 
                          className="text-slate-800 font-semibold hover:text-emerald-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-800 font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <a
                href="https://wa.me/351939363007?text=Olá!%20Vim%20pelo%20site.%20Quero%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-400 text-white font-semibold rounded-2xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                WhatsApp Direto
              </a>
              
              <a
                href="https://instagram.com/jardinssaopaulopt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-2xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Instagram className="w-5 h-5 mr-3" />
                Seguir no Instagram
              </a>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-100">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-emerald-600 mr-3" />
                <h3 className="font-bold text-slate-800">Horário de Atendimento</h3>
              </div>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>Segunda - Sexta</span>
                  <span className="font-medium">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado</span>
                  <span className="font-medium">9:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo</span>
                  <span className="font-medium">Fechado</span>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-slate-800 rounded-2xl p-6 text-white">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 italic mb-4">
                "Serviço impecável! Transformaram completamente o nosso jardim."
              </p>
              <p className="text-sm text-slate-400">- Cliente satisfeito, Cascais</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Envie uma Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white"
                      placeholder="O seu nome"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white"
                      placeholder="O seu telefone"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white"
                    placeholder="O seu e-mail"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none bg-white"
                    placeholder="Conte-nos sobre o seu projeto..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-500 text-white font-bold rounded-2xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-3" />
                  Enviar Mensagem
                </button>
              </form>

              <p className="text-sm text-slate-500 mt-4 text-center">
                Responderemos em até 24 horas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
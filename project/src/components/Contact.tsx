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
      color: 'bg-[#556B2F]'
    },
    {
      icon: Mail,
      label: 'E-mail Principal',
      value: 'flavir@jardinssaopaulo.pt',
      href: 'mailto:flavir@jardinssaopaulo.pt',
      color: 'bg-[#3F4A3C]'
    },
    {
      icon: Mail,
      label: 'E-mail Secundário',
      value: 'jacque@jardinssaopaulo.pt',
      href: 'mailto:jacque@jardinssaopaulo.pt',
      color: 'bg-[#6B593A]'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Cascais, Portugal',
      href: '#',
      color: 'bg-[#5A6E3A]'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#F6F3EC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#3F4A3C] mb-6">
            Vamos Conversar
          </h2>
          <p className="text-xl text-[#5A6E3A] max-w-3xl mx-auto">
            Marque a sua visita técnica gratuita ou esclareça as suas dúvidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 shadow-sm border border-[#DDD3C2]"
                >
                  <div className="flex items-center">
                    <div className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center mr-4 shadow-md`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm text-[#6F6A60] font-medium">{info.label}</p>
                      {info.href.startsWith('tel:') || info.href.startsWith('mailto:') ? (
                        <a 
                          href={info.href} 
                          className="text-[#3F4A3C] font-semibold hover:text-[#556B2F] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[#3F4A3C] font-semibold">{info.value}</p>
                      )}
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp & Instagram */}
            <div className="space-y-4">
              
              <a
                href="https://wa.me/351939363007?text=Olá!%20Vim%20pelo%20site.%20Quero%20um%20orçamento."
                target="_blank"
                className="flex items-center justify-center w-full px-6 py-4 bg-[#556B2F] text-white font-semibold rounded-2xl hover:opacity-90 transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                WhatsApp Direto
              </a>

              <a
                href="https://instagram.com/jardinssaopaulopt"
                target="_blank"
                className="flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-[#603813] to-[#8E735B] text-white font-semibold rounded-2xl hover:opacity-90 transition-all"
              >
                <Instagram className="w-5 h-5 mr-3" />
                Seguir no Instagram
              </a>

            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl p-6 border border-[#DDD3C2]">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-[#556B2F] mr-3" />
                <h3 className="font-bold text-[#3F4A3C]">Horário de Atendimento</h3>
              </div>

              <p className="text-sm text-[#6F6A60]">
                <strong>Segunda à sexta-feira:</strong> 9h às 18h
              </p>
            </div>

            {/* Avaliações — Zaask */}
            <div className="bg-white rounded-2xl p-6 border border-[#DDD3C2]">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>

              <p className="text-[#6F6A60] mb-3">
                Avaliações reais dos nossos clientes:
              </p>

              <a 
                href="https://www.zaask.pt/avaliar-sp/713072"
                target="_blank"
                className="text-[#556B2F] font-semibold underline hover:text-[#3F4A3C]"
              >
                Ver avaliações no Zaask
              </a>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 border border-[#DDD3C2]">

              <h3 className="text-2xl font-bold text-[#3F4A3C] mb-6">
                Envie uma Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid md:grid-cols-2 gap-6">
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#3F4A3C] mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#C7BBA8] rounded-xl bg-[#FAF7F2] focus:ring-2 focus:ring-[#556B2F]"
                      placeholder="O seu nome"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#3F4A3C] mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#C7BBA8] rounded-xl bg-[#FAF7F2] focus:ring-2 focus:ring-[#556B2F]"
                      placeholder="O seu telefone"
                    />
                  </div>

                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#3F4A3C] mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[#C7BBA8] rounded-xl bg-[#FAF7F2] focus:ring-2 focus:ring-[#556B2F]"
                    placeholder="O seu e-mail"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#3F4A3C] mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-[#C7BBA8] rounded-xl bg-[#FAF7F2] focus:ring-2 focus:ring-[#556B2F]"
                    placeholder="Conte-nos sobre o seu projeto..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 bg-[#556B2F] text-white font-bold rounded-2xl hover:opacity-90 transition-all"
                >
                  <Send className="w-5 h-5 mr-3" />
                  Enviar Mensagem
                </button>

              </form>

              <p className="text-sm text-[#6F6A60] mt-4 text-center">
                Responderemos em até 24h
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

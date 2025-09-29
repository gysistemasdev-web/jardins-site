import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const portfolioItems = [
    {
      image: 'https://github.com/gysistemasdev-web/JARDINS-S-O-PAULO/blob/17c524d0b9d0851df189e1d8c50049bc75b7dc38/Canteiro%20em%20deck%20com%20planta%C3%A7%C3%A3o%20e%20vasos%20de%20madeira%20em%20cliente%20fixo%20de%20manuten%C3%A7%C3%A3o.%20Centr.jpeg?raw=true',
      title: 'Canteiro em deck com vasos de madeira',
      location: 'Cliente fixo de manutenção',
      category: 'Paisagismo'
    },
    {
      image: 'https://github.com/gysistemasdev-web/JARDINS-S-O-PAULO/blob/17c524d0b9d0851df189e1d8c50049bc75b7dc38/caixas_madeira_plantacao_londres_2021.jpg?raw=true',
      title: 'Caixas de madeira com plantação',
      location: 'Londres (2021)',
      category: 'Paisagismo'
    },
    {
      image: 'https://github.com/gysistemasdev-web/JARDINS-S-O-PAULO/blob/17c524d0b9d0851df189e1d8c50049bc75b7dc38/deck.jpg?raw=true',
      title: 'Deck em madeira',
      location: 'Execução recente',
      category: 'Carpintaria'
    },
    {
      image: 'https://github.com/gysistemasdev-web/JARDINS-S-O-PAULO/blob/17c524d0b9d0851df189e1d8c50049bc75b7dc38/caixa.jpg?raw=true',
      title: 'Caixa decorativa',
      location: 'Detalhe de projeto',
      category: 'Jardinagem'
    },
    {
      image: 'https://github.com/gysistemasdev-web/JARDINS-S-O-PAULO/blob/17c524d0b9d0851df189e1d8c50049bc75b7dc38/Imagem%20do%20WhatsApp%20de%202025-08-29%20%C3%A0(s)%2012.37.49_9130461b.jpg?raw=true',
      title: 'Jardim natural',
      location: 'Execução recente',
      category: 'Paisagismo'
    },
    {
      image: 'https://github.com/gysistemasdev-web/JARDINS-S-O-PAULO/blob/17c524d0b9d0851df189e1d8c50049bc75b7dc38/Imagem%20do%20WhatsApp%20de%202025-08-29%20%C3%A0(s)%2010.47.19_9b253284.jpg?raw=true',
      title: 'Jardinagem personalizada',
      location: 'Serviço contínuo',
      category: 'Manutenção'
    }
  ];

  const categories = ['Todos', 'Paisagismo', 'Carpintaria', 'Jardinagem', 'Manutenção'];
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredItems =
    activeCategory === 'Todos'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;

    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(
        selectedImage === filteredItems.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full font-medium mb-4">
            Nossos Trabalhos
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Projetos Realizados
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Cada projeto é único e reflete nossa dedicação à excelência
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-emerald-50 hover:text-emerald-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 bg-white"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-emerald-500 text-white text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-emerald-200 text-sm">{item.location}</p>
              </div>

              {/* View Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">
            Gostou do que viu? Vamos criar algo único para si também.
          </p>
          <button
            onClick={() =>
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-green-500 text-white font-semibold rounded-2xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Iniciar Meu Projeto
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-full">
            <img
              src={filteredItems[selectedImage].image}
              alt={filteredItems[selectedImage].title}
              className="max-w-full max-h-screen rounded-2xl"
            />

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Caption */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <div className="bg-black/50 backdrop-blur-sm rounded-2xl py-3 px-6 inline-block">
                <h3 className="text-white font-bold text-lg">
                  {filteredItems[selectedImage].title}
                </h3>
                <p className="text-emerald-200">{filteredItems[selectedImage].location}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;

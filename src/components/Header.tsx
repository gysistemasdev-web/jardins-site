import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#services', label: 'Serviços' },
    { href: '#process', label: 'Processo' },
    { href: '#portfolio', label: 'portfolio' },
    { href: '#contact', label: 'contacto' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // Força troca de idioma com checagem do combo do Google Translate
  const changeLanguage = (lang: string) => {
    const interval = setInterval(() => {
      const select: any = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event('change'));
        clearInterval(interval);
      }
    }, 300);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-2xl border-b border-emerald-100'
            : 'bg-white/80 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo sem texto "Desde 2019" */}
            <div className="flex items-center">
              <img
                src="https://raw.githubusercontent.com/gysistemasdev-web/JARDINS-S-O-PAULO/2f0787c6d3668599d4a809b4aa5dc1a7df9475e6/logoJSP-1cor.png"
                alt="Logo Jardins São Paulo"
                className="h-14 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-slate-700 hover:text-emerald-600 font-medium transition-all duration-300 rounded-xl hover:bg-emerald-50 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2"></span>
                </button>
              ))}

              {/* Botões idioma */}
              <div className="flex items-center space-x-2 ml-4">
                <button
                  onClick={() => changeLanguage('pt')}
                  className="w-9 h-9 rounded-full overflow-hidden border border-slate-200 shadow hover:scale-105 transition"
                >
                  <img src="https://flagcdn.com/pt.svg" alt="Português" className="w-full h-full object-cover" />
                </button>

                <button
                  onClick={() => changeLanguage('en')}
                  className="w-9 h-9 rounded-full overflow-hidden border border-slate-200 shadow hover:scale-105 transition"
                >
                  <img src="https://flagcdn.com/us.svg" alt="English" className="w-full h-full object-cover" />
                </button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 text-slate-700 hover:text-emerald-600 transition-colors rounded-xl hover:bg-emerald-50"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        <div
          className={`absolute top-20 right-6 left-6 bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 transform transition-all duration-300 ${
            isMobileMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-4 scale-95'
          }`}
        >
          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-slate-700 hover:text-emerald-600 font-medium transition-colors rounded-xl hover:bg-emerald-50"
              >
                {item.label}
              </button>
            ))}

            {/* Botões idioma no mobile */}
            <div className="flex justify-center space-x-3 mt-6">
              <button
                onClick={() => changeLanguage('pt')}
                className="w-10 h-10 rounded-full overflow-hidden border border-slate-200 shadow hover:scale-105 transition"
              >
                <img src="https://flagcdn.com/pt.svg" alt="Português" className="w-full h-full object-cover" />
              </button>

              <button
                onClick={() => changeLanguage('en')}
                className="w-10 h-10 rounded-full overflow-hidden border border-slate-200 shadow hover:scale-105 transition"
              >
                <img src="https://flagcdn.com/us.svg" alt="English" className="w-full h-full object-cover" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;

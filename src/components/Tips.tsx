import React, { useState, useEffect } from 'react';
import { Lightbulb, ChevronLeft, ChevronRight, CreditCard as Edit3, Save, CheckCircle } from 'lucide-react';

const Tips = () => {
  const defaultTips = [
    'Regue as plantas ao amanhecer para reduzir evaporação.',
    'Pode as sebes na primavera para estimular crescimento.',
    'Use adubo orgânico para melhorar o solo.',
    'Mantenha mulch nos canteiros para conservar humidade.',
    'Verifique o sistema de rega regularmente.',
    'Evite pisar na relva molhada para não danificar as folhas.'
  ];

  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [customTip, setCustomTip] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState('');
  const [tipDate, setTipDate] = useState('');

  useEffect(() => {
    const savedIndex = localStorage.getItem('jsp_tip_index');
    const savedTip = localStorage.getItem('jsp_tip_text');
    const savedDate = localStorage.getItem('jsp_tip_date');

    if (savedIndex) setCurrentTipIndex(parseInt(savedIndex));
    if (savedTip) setCustomTip(savedTip);
    if (savedDate) setTipDate(new Date(savedDate).toLocaleDateString('pt-PT'));
  }, []);

  const getCurrentTip = () => {
    return customTip || defaultTips[currentTipIndex % defaultTips.length];
  };

  const nextTip = () => {
    const newIndex = (currentTipIndex + 1) % defaultTips.length;
    setCurrentTipIndex(newIndex);
    localStorage.setItem('jsp_tip_index', newIndex.toString());
    if (customTip) {
      setCustomTip('');
      localStorage.removeItem('jsp_tip_text');
    }
  };

  const prevTip = () => {
    const newIndex = (currentTipIndex - 1 + defaultTips.length) % defaultTips.length;
    setCurrentTipIndex(newIndex);
    localStorage.setItem('jsp_tip_index', newIndex.toString());
    if (customTip) {
      setCustomTip('');
      localStorage.removeItem('jsp_tip_text');
    }
  };

  const startEditing = () => {
    setEditText(getCurrentTip());
    setIsEditing(true);
  };

  const saveTip = () => {
    if (editText.trim()) {
      setCustomTip(editText.trim());
      localStorage.setItem('jsp_tip_text', editText.trim());
      localStorage.setItem('jsp_tip_date', new Date().toISOString());
      setTipDate(new Date().toLocaleDateString('pt-PT'));
      setIsEditing(false);
    }
  };

  const checklist = [
    'Defina claramente o problema ou objetivo',
    'Meça a área do espaço a trabalhar',
    'Verifique condições de luz, solo e água',
    'Peça orçamento detalhado por escrito',
    'Avalie o plano de manutenção proposto'
  ];

  return (
    <section id="tips" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Dicas Jardins São Paulo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dica do dia e checklist para contratar com segurança.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Dica do Dia */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center mr-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Dica do Dia</h3>
                <p className="text-gray-600">
                  {tipDate ? `Atualizada em ${tipDate}` : 'Hoje'}
                </p>
              </div>
            </div>

            {isEditing ? (
              <div className="space-y-4">
                <textarea
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-xl resize-none h-32 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Escreva a sua dica..."
                />
                <div className="flex gap-3">
                  <button
                    onClick={saveTip}
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-400 text-white rounded-full font-semibold hover:shadow-lg transition-all"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Salvar
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
                <p className="text-sm text-gray-500">
                  A dica fica guardada no seu navegador (localStorage).
                </p>
              </div>
            ) : (
              <>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {getCurrentTip()}
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={prevTip}
                    className="flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold hover:bg-green-200 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Anterior
                  </button>
                  <button
                    onClick={nextTip}
                    className="flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold hover:bg-green-200 transition-colors"
                  >
                    Próxima
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                  <button
                    onClick={startEditing}
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-400 text-white rounded-full font-semibold hover:shadow-lg transition-all"
                  >
                    <Edit3 className="w-4 h-4 mr-2" />
                    Atualizar dica
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Checklist */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-400 rounded-xl flex items-center justify-center mr-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Checklist para contratar</h3>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Antes de contratar um serviço de jardinagem, certifique-se de que cumpre estes pontos essenciais:
            </p>
            
            <ul className="space-y-4">
              {checklist.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips;
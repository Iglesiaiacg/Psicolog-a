import React, { useState } from 'react';
import { ClipboardList, BarChart, Sparkles } from 'lucide-react';
import { CEPER_QUESTIONS_LIST } from '../../utils/constants';

const Ceper = ({ formData, setFormData, handleChange, resultados, generarInterpretacionCeper }) => {
    const [ceperView, setCeperView] = useState('cuestionario');

    return (
        <div className="space-y-4">
            <h3 className="font-bold text-lg text-blue-900 flex items-center gap-2"><ClipboardList size={24} /> Cuestionario CEPER III</h3>
            <div className="flex gap-2 border-b">
                <button onClick={() => setCeperView('cuestionario')} className={`px-4 py-2 font-bold border-t border-l border-r rounded-t transition-colors ${ceperView === 'cuestionario' ? 'text-blue-900 bg-white border-b-white translate-y-[1px]' : 'text-gray-500 bg-gray-100 hover:text-blue-900'}`}>Cuestionario</button>
                <button onClick={() => { setCeperView('resultados'); }} className={`px-4 py-2 font-bold border-t border-l border-r rounded-t transition-colors ${ceperView === 'resultados' ? 'text-blue-900 bg-white border-b-white translate-y-[1px]' : 'text-gray-500 bg-gray-100 hover:text-blue-900'}`}>Ver Resultados</button>
            </div>
            {ceperView === 'cuestionario' && (
                <div className="space-y-1 h-[50vh] overflow-y-auto pr-2 border rounded p-2 bg-gray-50 scrollbar-thin scrollbar-thumb-gray-300">
                    {Array.from({ length: 170 }, (_, i) => i + 1).map((qNum) => (
                        <div key={qNum} className="bg-white p-2 border-b last:border-0 hover:bg-blue-50 flex justify-between items-center transition-colors">
                            <span className="font-bold text-sm text-gray-500 w-8">{qNum}.</span>
                            <span className="text-sm flex-1 font-medium mx-2">{CEPER_QUESTIONS_LIST[qNum - 1] || `Pregunta ${qNum}`}</span>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5, 6, 7].map(val => (
                                    <button key={val} onClick={() => setFormData(prev => ({ ...prev, [`ceperQ${qNum}`]: val }))} className={`w-6 h-6 rounded-full text-[10px] font-bold border transition-all transform hover:scale-110 ${formData[`ceperQ${qNum}`] == val ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100'}`}>{val}</button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {ceperView === 'resultados' && (
                <div className="bg-white border rounded p-4 shadow-sm animate-fade-in">
                    <h4 className="font-bold text-lg text-blue-900 mb-4 flex items-center gap-2"><BarChart size={20} /> Perfil de Personalidad (Simulado)</h4>
                    <div className="space-y-3">
                        {Object.entries(resultados.ceper).map(([style, score]) => (
                            <div key={style} className="flex items-center text-sm group">
                                <span className="w-32 font-bold text-gray-600 group-hover:text-blue-800 transition-colors">{style}</span>
                                <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden shadow-inner">
                                    <div className="bg-blue-600 h-full transition-all duration-1000 ease-out" style={{ width: `${Math.min((score / 120) * 100, 100)}%` }}></div>
                                </div>
                                <span className="w-10 text-right font-mono font-bold text-gray-700">{score}</span>
                            </div>
                        ))}
                    </div>
                    <button onClick={generarInterpretacionCeper} className="mt-6 mb-2 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 text-xs font-bold flex items-center gap-2 self-start transition-all transform hover:scale-105 active:scale-95"><Sparkles size={16} /> Generar Perfil Automático</button>
                    <textarea name="ceperInterpretacion" placeholder="Interpretación clínica..." value={formData.ceperInterpretacion} onChange={handleChange} className="border p-2 rounded w-full h-24 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                </div>
            )}
        </div>
    );
};

export default Ceper;

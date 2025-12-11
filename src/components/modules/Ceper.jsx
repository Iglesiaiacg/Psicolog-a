import React, { useState } from 'react';
import { ClipboardList, BarChart, Sparkles } from 'lucide-react';
import { CEPER_QUESTIONS_LIST } from '../../utils/constants';

const Ceper = ({ formData, setFormData, handleChange, resultados, generarInterpretacionCeper }) => {
    const [ceperView, setCeperView] = useState('cuestionario');

    return (
        <div className="space-y-4 w-full">
            <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2"><ClipboardList size={24} /> Cuestionario CEPER III</h3>
            <div className="flex gap-2 border-b border-slate-200">
                <button onClick={() => setCeperView('cuestionario')} className={`px-4 py-2 font-bold border-t border-l border-r rounded-t transition-colors ${ceperView === 'cuestionario' ? 'text-slate-900 bg-white border-b-white border-slate-300 translate-y-[1px]' : 'text-slate-500 bg-slate-50 border-slate-200 hover:text-slate-800'}`}>Cuestionario</button>
                <button onClick={() => { setCeperView('resultados'); }} className={`px-4 py-2 font-bold border-t border-l border-r rounded-t transition-colors ${ceperView === 'resultados' ? 'text-slate-900 bg-white border-b-white border-slate-300 translate-y-[1px]' : 'text-slate-500 bg-slate-50 border-slate-200 hover:text-slate-800'}`}>Ver Resultados</button>
            </div>
            {ceperView === 'cuestionario' && (
                <div className="space-y-1 h-[50vh] overflow-y-auto pr-2 border rounded p-2 bg-slate-50 border-slate-200 scrollbar-thin scrollbar-thumb-slate-300">
                    {Array.from({ length: 170 }, (_, i) => i + 1).map((qNum) => (
                        <div key={qNum} className="bg-white p-2 border-b border-slate-100 last:border-0 hover:bg-slate-100 flex justify-between items-center transition-colors">
                            <span className="font-bold text-sm text-slate-500 w-8">{qNum}.</span>
                            <span className="text-sm flex-1 font-medium mx-2 text-slate-700">{CEPER_QUESTIONS_LIST[qNum - 1] || `Pregunta ${qNum}`}</span>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5, 6, 7].map(val => (
                                    <button key={val} onClick={() => setFormData(prev => ({ ...prev, [`ceperQ${qNum}`]: val }))} className={`w-6 h-6 rounded-full text-[10px] font-bold border transition-all transform hover:scale-110 ${formData[`ceperQ${qNum}`] == val ? 'bg-slate-700 text-white shadow-md border-slate-700' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'}`}>{val}</button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {ceperView === 'resultados' && (
                <div className="bg-white border border-slate-200 rounded p-4 shadow-sm animate-fade-in">
                    <h4 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2"><BarChart size={20} /> Perfil de Personalidad (Simulado)</h4>
                    <div className="space-y-3">
                        {Object.entries(resultados.ceper).map(([style, score]) => (
                            <div key={style} className="flex items-center text-sm group">
                                <span className="w-32 font-bold text-slate-600 group-hover:text-slate-900 transition-colors">{style}</span>
                                <div className="flex-1 bg-slate-100 rounded-full h-3 overflow-hidden shadow-inner">
                                    <div className="bg-slate-600 h-full transition-all duration-1000 ease-out" style={{ width: `${Math.min((score / 120) * 100, 100)}%` }}></div>
                                </div>
                                <span className="w-10 text-right font-mono font-bold text-slate-700">{score}</span>
                            </div>
                        ))}
                    </div>
                    <button onClick={generarInterpretacionCeper} className="mt-6 mb-2 bg-slate-800 text-white px-4 py-2 rounded shadow hover:bg-slate-700 text-xs font-bold flex items-center gap-2 self-start transition-all transform hover:scale-105 active:scale-95"><Sparkles size={16} /> Generar Perfil Automático</button>
                    <textarea name="ceperInterpretacion" placeholder="Interpretación clínica..." value={formData.ceperInterpretacion} onChange={handleChange} className="border p-2 rounded w-full h-24 border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 outline-none" />
                </div>
            )}
        </div>
    );
};

export default Ceper;

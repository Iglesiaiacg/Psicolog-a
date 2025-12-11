import React from 'react';
import { PieChart, Sparkles } from 'lucide-react';
import { AREA_COLORS, ESFERAS_QUESTIONS } from '../../utils/constants';
import GraficaEsferasVisual from '../visuals/GraficaEsferasVisual';

const EsferasVida = ({ formData, setFormData, handleChange, resultados, generarInterpretacionEsferas }) => {
    return (
        <div className="space-y-6 w-full">
            <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2"><PieChart size={24} /> Escala de Esferas de la Vida</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-300">
                    {['Personal', 'Interpersonal', 'Pareja', 'Familiar', 'Laboral', 'Virtual'].map(area => (
                        <div key={area} className="bg-slate-50 p-4 rounded border border-slate-200">
                            <h4 className={`font-bold mb-2 border-b border-slate-200 pb-1`} style={{ color: AREA_COLORS[area] }}>{area.toUpperCase()}</h4>
                            {ESFERAS_QUESTIONS.filter(q => q.area === area).map(q => (
                                <div key={q.id} className="mb-3 last:mb-0">
                                    <label className="block text-xs text-slate-700 mb-1">{q.text}</label>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold text-slate-400">1</span>
                                        <input type="range" min="1" max="5" value={formData[`esferaQ${q.id}`]} onChange={(e) => setFormData(prev => ({ ...prev, [`esferaQ${q.id}`]: e.target.value }))} className="flex-grow h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-600" />
                                        <span className="text-xs font-bold text-slate-400">5</span>
                                        <span className="font-bold text-slate-800 w-6 text-center">{formData[`esferaQ${q.id}`]}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-full max-w-sm aspect-square bg-white shadow-lg rounded-xl p-4 border border-slate-200 mb-4 flex items-center justify-center">
                        <div className="w-64 h-64"><GraficaEsferasVisual data={resultados.esferas} /></div>
                    </div>
                    <button onClick={generarInterpretacionEsferas} className="mb-2 bg-slate-800 text-white px-4 py-2 rounded shadow hover:bg-slate-700 text-xs font-bold flex items-center gap-2 self-start transition-all transform hover:scale-105 active:scale-95"><Sparkles size={16} /> Generar Análisis Automático</button>
                    <textarea name="esferasInterpretacion" placeholder="Análisis global de las esferas..." value={formData.esferasInterpretacion} onChange={handleChange} className="border p-2 rounded w-full h-48 text-sm border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 outline-none" />
                </div>
            </div>
        </div>
    );
};

export default EsferasVida;

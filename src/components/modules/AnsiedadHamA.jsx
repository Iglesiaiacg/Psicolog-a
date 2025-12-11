import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { HAMA_QUESTIONS } from '../../utils/constants';

const AnsiedadHamA = ({ formData, handleChange, resultados }) => {
    const [hamaView, setHamaView] = useState('cuestionario');

    return (
        <div className="space-y-4 w-full">
            <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2"><Heart size={24} /> Escala Hamilton (HAM-A)</h3>
            <div className="flex gap-2 border-b border-slate-200">
                <button onClick={() => setHamaView('cuestionario')} className={`px-4 py-2 font-bold border-t border-l border-r rounded-t transition-colors ${hamaView === 'cuestionario' ? 'text-slate-900 bg-white border-b-white border-slate-300 translate-y-[1px]' : 'text-slate-500 bg-slate-50 border-slate-200 hover:text-slate-800'}`}>Cuestionario</button>
                <button onClick={() => setHamaView('resultados')} className={`px-4 py-2 font-bold border-t border-l border-r rounded-t transition-colors ${hamaView === 'resultados' ? 'text-slate-900 bg-white border-b-white border-slate-300 translate-y-[1px]' : 'text-slate-500 bg-slate-50 border-slate-200 hover:text-slate-800'}`}>Ver Resultados</button>
            </div>
            {hamaView === 'cuestionario' && (
                <div className="grid grid-cols-1 gap-2 h-[50vh] overflow-y-auto pr-2 border rounded p-2 bg-slate-50 border-slate-200 scrollbar-thin scrollbar-thumb-slate-300">
                    {HAMA_QUESTIONS.map((q, i) => (
                        <div key={i} className="flex justify-between items-center bg-white p-3 border-b border-slate-100 last:border-0 hover:bg-slate-100 transition-colors">
                            <span className="text-sm font-medium w-2/3 text-slate-700">{q}</span>
                            <select name={`hama${i + 1}`} value={formData[`hama${i + 1}`]} onChange={handleChange} className="border p-2 rounded w-1/3 text-sm border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 outline-none cursor-pointer">
                                <option value="0">0 - Ausente</option>
                                <option value="1">1 - Leve</option>
                                <option value="2">2 - Moderado</option>
                                <option value="3">3 - Grave</option>
                                <option value="4">4 - Muy Grave</option>
                            </select>
                        </div>
                    ))}
                </div>
            )}
            {hamaView === 'resultados' && (
                <div className="bg-white border text-center rounded p-6 shadow-sm animate-fade-in border-slate-200">
                    <div className="flex flex-col items-center justify-center mb-6">
                        <div className="text-4xl font-black text-yellow-600 mb-2">{resultados.hama.score} <span className="text-sm text-slate-400 font-normal">/ 56</span></div>
                        <div className="text-xl font-bold text-slate-700">{resultados.hama.text}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AnsiedadHamA;

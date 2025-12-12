import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { HAMA_QUESTIONS, HAMA_INTERPRETATIONS } from '../../utils/constants';

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
                <div className="bg-white border rounded p-6 shadow-sm animate-fade-in border-slate-200">
                    <div className="flex flex-col items-center justify-center mb-6">
                        <div className="text-4xl font-black text-yellow-600 mb-2">{resultados.hama.score} <span className="text-sm text-slate-400 font-normal">/ 56</span></div>
                        <div className="text-xl font-bold text-slate-700 mb-4">{resultados.hama.text}</div>

                        <div className="w-full text-left bg-slate-50 p-4 rounded border border-slate-100 mb-4">
                            <h4 className="font-bold text-slate-700 mb-2 text-sm border-b pb-1">Análisis de Subtipos (Experto)</h4>
                            {(() => {
                                // Psíquica: 1-6, 14 (Indices 0-5, 13)
                                // Somática: 7-13 (Indices 6-12)
                                let psiquica = 0;
                                [0, 1, 2, 3, 4, 5, 13].forEach(i => psiquica += parseInt(formData[`hama${i + 1}`] || 0));

                                let somatica = 0;
                                [6, 7, 8, 9, 10, 11, 12].forEach(i => somatica += parseInt(formData[`hama${i + 1}`] || 0));

                                const predominio = psiquica > somatica ? HAMA_INTERPRETATIONS.psiquica : (somatica > psiquica ? HAMA_INTERPRETATIONS.somatica : HAMA_INTERPRETATIONS.mixta);

                                return (
                                    <div className="text-xs space-y-2">
                                        <div className="flex justify-between"><span>Ansiedad Psíquica:</span> <b>{psiquica} pts</b></div>
                                        <div className="flex justify-between"><span>Ansiedad Somática:</span> <b>{somatica} pts</b></div>
                                        <p className="mt-2 text-slate-600 italic border-l-2 border-slate-400 pl-2">{predominio}</p>
                                    </div>
                                );
                            })()}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AnsiedadHamA;

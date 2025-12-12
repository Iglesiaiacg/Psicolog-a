import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { BDI_ITEMS, BDI_RISK_ALERTS } from '../../utils/constants';

const DepresionBDI = ({ formData, handleChange, resultados }) => {
    const [bdiView, setBdiView] = useState('cuestionario');

    return (
        <div className="space-y-4 w-full">
            <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2"><AlertCircle size={24} /> Inventario Beck (BDI-II)</h3>
            <div className="flex gap-2 border-b border-slate-200">
                <button onClick={() => setBdiView('cuestionario')} className={`px-4 py-2 font-bold border-t border-l border-r rounded-t transition-colors ${bdiView === 'cuestionario' ? 'text-slate-900 bg-white border-b-white border-slate-300 translate-y-[1px]' : 'text-slate-500 bg-slate-50 border-slate-200 hover:text-slate-800'}`}>Cuestionario</button>
                <button onClick={() => setBdiView('resultados')} className={`px-4 py-2 font-bold border-t border-l border-r rounded-t transition-colors ${bdiView === 'resultados' ? 'text-slate-900 bg-white border-b-white border-slate-300 translate-y-[1px]' : 'text-slate-500 bg-slate-50 border-slate-200 hover:text-slate-800'}`}>Ver Resultados</button>
            </div>
            {bdiView === 'cuestionario' && (
                <div className="grid grid-cols-1 gap-2 h-[50vh] overflow-y-auto pr-2 border rounded p-2 bg-slate-50 border-slate-200 scrollbar-thin scrollbar-thumb-slate-300">
                    {BDI_ITEMS.map((label, i) => (
                        <div key={i} className="flex justify-between items-center bg-white p-3 border-b border-slate-100 last:border-0 hover:bg-slate-100 transition-colors">
                            <span className="text-sm font-medium w-2/3 text-slate-700">{label}</span>
                            <select name={`bdi${i + 1}`} value={formData[`bdi${i + 1}`]} onChange={handleChange} className="border p-2 rounded w-1/3 font-bold text-slate-800 text-sm border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 outline-none cursor-pointer">
                                <option value="0">0 - No</option>
                                <option value="1">1 - Leve</option>
                                <option value="2">2 - Moderado</option>
                                <option value="3">3 - Severo</option>
                            </select>
                        </div>
                    ))}
                </div>
            )}
            {bdiView === 'resultados' && (
                <div className="bg-white border rounded p-6 shadow-sm animate-fade-in border-slate-200">
                    <div className="flex flex-col items-center justify-center mb-6">
                        <div className="text-4xl font-black text-slate-700 mb-2">{resultados.bdi.score} <span className="text-sm text-slate-400 font-normal">/ 63</span></div>
                        <div className="text-xl font-bold text-slate-700">{resultados.bdi.text}</div>

                        <div className="w-full mt-4 space-y-2">
                            {/* Alerta de Suicidio: Item 9 (Index 8) */}
                            {parseInt(formData.bdi9 || 0) > 0 && (
                                <div className="bg-red-50 border-l-4 border-red-500 p-4 text-left rounded shadow-sm">
                                    <p className="font-bold text-red-700 text-sm animate-pulse">{BDI_RISK_ALERTS.suicidio}</p>
                                </div>
                            )}

                            {/* Alerta de Severidad */}
                            {resultados.bdi.score > 28 && (
                                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 text-left rounded shadow-sm">
                                    <p className="font-bold text-orange-700 text-sm">{BDI_RISK_ALERTS.severo}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DepresionBDI;

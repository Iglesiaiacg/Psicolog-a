import React, { useState } from 'react';
import { ListChecks } from 'lucide-react';
import { OTIS_QUESTIONS } from '../../utils/constants';

const InteligenciaOtis = ({ formData, handleChange }) => {
    const [otisView, setOtisView] = useState('cuestionario');

    return (
        <div className="space-y-4 w-full">
            <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2"><ListChecks size={24} /> OTIS Sencillo</h3>
            <div className="flex gap-2 border-b border-slate-200">
                <button onClick={() => setOtisView('cuestionario')} className={`px-4 py-2 font-bold border-t border-l border-r rounded-t transition-colors ${otisView === 'cuestionario' ? 'text-slate-900 bg-white border-b-white border-slate-300 translate-y-[1px]' : 'text-slate-500 bg-slate-50 border-slate-200 hover:text-slate-800'}`}>Cuestionario</button>
                <button onClick={() => setOtisView('resultados')} className={`px-4 py-2 font-bold border-t border-l border-r rounded-t transition-colors ${otisView === 'resultados' ? 'text-slate-900 bg-white border-b-white border-slate-300 translate-y-[1px]' : 'text-slate-500 bg-slate-50 border-slate-200 hover:text-slate-800'}`}>Ver Resultados</button>
            </div>
            {otisView === 'cuestionario' && (
                <div className="grid grid-cols-1 gap-2 h-[50vh] overflow-y-auto pr-2 border rounded p-2 bg-slate-50 border-slate-200 scrollbar-thin scrollbar-thumb-slate-300">
                    {OTIS_QUESTIONS.map((q, i) => (
                        <div key={i} className="flex flex-col bg-white p-3 border-b border-slate-100 last:border-0 hover:bg-slate-100 transition-colors">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-medium flex-1 mr-4 text-slate-700">{q}</span>
                                <input name={`otis${i + 1}`} value={formData[`otis${i + 1}`]} onChange={handleChange} className="border p-2 rounded w-16 text-center font-bold text-slate-900 border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 outline-none" placeholder="Resp." />
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {otisView === 'resultados' && (
                <div className="space-y-6 animate-fade-in">
                    <div className="flex gap-4 mb-4 bg-slate-50 p-6 rounded shadow-sm border border-slate-200">
                        <div className="flex-1 text-center border-r border-slate-200">
                            <label className="block font-bold text-slate-500 text-xs uppercase mb-1">Aciertos</label>
                            <input name="otisAciertos" value={formData.otisAciertos} onChange={handleChange} className="border p-2 w-24 text-center text-2xl font-black rounded border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 outline-none text-slate-700" />
                        </div>
                        <div className="flex-1 text-center border-r border-slate-200">
                            <label className="block font-bold text-slate-500 text-xs uppercase mb-1">Errores</label>
                            <input name="otisErrores" value={formData.otisErrores} onChange={handleChange} className="border p-2 w-24 text-center text-2xl font-black rounded text-red-500 border-slate-300 focus:ring-2 focus:ring-red-400 focus:border-red-400 outline-none" />
                        </div>
                        <div className="flex-[2] text-center">
                            <label className="block font-bold text-slate-500 text-xs uppercase mb-1">Diagnóstico Final</label>
                            <input name="otisDiagnostico" value={formData.otisDiagnostico} onChange={handleChange} className="border p-2 w-full text-center text-xl font-bold text-slate-800 rounded bg-white border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 outline-none" placeholder="Ej. Superior, Promedio..." />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InteligenciaOtis;

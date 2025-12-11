import React, { useState } from 'react';
import { ListChecks } from 'lucide-react';
import { OTIS_QUESTIONS } from '../../utils/constants';

const InteligenciaOtis = ({ formData, handleChange }) => {
    const [otisView, setOtisView] = useState('cuestionario');

    return (
        <div className="space-y-4">
            <h3 className="font-bold text-lg text-blue-900 flex items-center gap-2"><ListChecks size={24} /> OTIS Sencillo</h3>
            <div className="flex gap-2 border-b">
                <button onClick={() => setOtisView('cuestionario')} className={`px-4 py-2 font-bold border-t border-l border-r rounded-t transition-colors ${otisView === 'cuestionario' ? 'text-blue-900 bg-white border-b-white translate-y-[1px]' : 'text-gray-500 bg-gray-100 hover:text-blue-900'}`}>Cuestionario</button>
                <button onClick={() => setOtisView('resultados')} className={`px-4 py-2 font-bold border-t border-l border-r rounded-t transition-colors ${otisView === 'resultados' ? 'text-blue-900 bg-white border-b-white translate-y-[1px]' : 'text-gray-500 bg-gray-100 hover:text-blue-900'}`}>Ver Resultados</button>
            </div>
            {otisView === 'cuestionario' && (
                <div className="grid grid-cols-1 gap-2 h-[50vh] overflow-y-auto pr-2 border rounded p-2 bg-gray-50 scrollbar-thin scrollbar-thumb-gray-300">
                    {OTIS_QUESTIONS.map((q, i) => (
                        <div key={i} className="flex flex-col bg-white p-3 border-b last:border-0 hover:bg-gray-50 transition-colors">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-medium flex-1 mr-4 text-gray-700">{q}</span>
                                <input name={`otis${i + 1}`} value={formData[`otis${i + 1}`]} onChange={handleChange} className="border p-1 rounded w-16 text-center font-bold text-blue-900 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Resp." />
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {otisView === 'resultados' && (
                <div className="space-y-6 animate-fade-in">
                    <div className="flex gap-4 mb-4 bg-gray-50 p-6 rounded shadow-sm border">
                        <div className="flex-1 text-center border-r border-gray-200">
                            <label className="block font-bold text-gray-500 text-xs uppercase mb-1">Aciertos</label>
                            <input name="otisAciertos" value={formData.otisAciertos} onChange={handleChange} className="border p-2 w-24 text-center text-2xl font-black rounded border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                        </div>
                        <div className="flex-1 text-center border-r border-gray-200">
                            <label className="block font-bold text-gray-500 text-xs uppercase mb-1">Errores</label>
                            <input name="otisErrores" value={formData.otisErrores} onChange={handleChange} className="border p-2 w-24 text-center text-2xl font-black rounded text-red-500 border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none" />
                        </div>
                        <div className="flex-[2] text-center">
                            <label className="block font-bold text-gray-500 text-xs uppercase mb-1">Diagnóstico Final</label>
                            <input name="otisDiagnostico" value={formData.otisDiagnostico} onChange={handleChange} className="border p-2 w-full text-center text-xl font-bold text-blue-900 rounded bg-white border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Ej. Superior, Promedio..." />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InteligenciaOtis;

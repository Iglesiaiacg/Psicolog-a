import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { BDI_ITEMS } from '../../utils/constants';

const DepresionBDI = ({ formData, handleChange, resultados }) => {
    const [bdiView, setBdiView] = useState('cuestionario');

    return (
        <div className="space-y-4">
            <h3 className="font-bold text-lg text-blue-900 flex items-center gap-2"><AlertCircle size={24} /> Inventario Beck (BDI-II)</h3>
            <div className="flex gap-2 border-b">
                <button onClick={() => setBdiView('cuestionario')} className={`px-4 py-2 font-bold border-t border-l border-r rounded-t transition-colors ${bdiView === 'cuestionario' ? 'text-blue-900 bg-white border-b-white translate-y-[1px]' : 'text-gray-500 bg-gray-100 hover:text-blue-900'}`}>Cuestionario</button>
                <button onClick={() => setBdiView('resultados')} className={`px-4 py-2 font-bold border-t border-l border-r rounded-t transition-colors ${bdiView === 'resultados' ? 'text-blue-900 bg-white border-b-white translate-y-[1px]' : 'text-gray-500 bg-gray-100 hover:text-blue-900'}`}>Ver Resultados</button>
            </div>
            {bdiView === 'cuestionario' && (
                <div className="grid grid-cols-1 gap-2 h-[50vh] overflow-y-auto pr-2 border rounded p-2 bg-gray-50 scrollbar-thin scrollbar-thumb-gray-300">
                    {BDI_ITEMS.map((label, i) => (
                        <div key={i} className="flex justify-between items-center bg-white p-3 border-b last:border-0 hover:bg-gray-50 transition-colors">
                            <span className="text-sm font-medium w-2/3 text-gray-700">{label}</span>
                            <select name={`bdi${i + 1}`} value={formData[`bdi${i + 1}`]} onChange={handleChange} className="border p-2 rounded w-1/3 font-bold text-blue-900 text-sm border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none cursor-pointer">
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
                <div className="bg-white border rounded p-6 shadow-sm animate-fade-in">
                    <div className="flex flex-col items-center justify-center mb-6">
                        <div className="text-4xl font-black text-blue-600 mb-2">{resultados.bdi.score} <span className="text-sm text-gray-400 font-normal">/ 63</span></div>
                        <div className="text-xl font-bold text-gray-700">{resultados.bdi.text}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DepresionBDI;

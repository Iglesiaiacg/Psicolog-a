import React from 'react';
import { FilePlus, Trash2 } from 'lucide-react';

const NotasClinicas = ({ formData, setFormData }) => {
    const handleNotaChange = (idx, field, value) => { const n = [...formData.notasClinicas]; n[idx][field] = value; setFormData({ ...formData, notasClinicas: n }); };
    const addNota = () => setFormData({ ...formData, notasClinicas: [...formData.notasClinicas, { fecha: new Date().toLocaleDateString(), s: "", o: "", a: "", p: "" }] });
    const removeNota = (idx) => setFormData({ ...formData, notasClinicas: formData.notasClinicas.filter((_, i) => i !== idx) });

    return (
        <div className="space-y-4 w-full">
            <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2"><FilePlus size={24} /> Notas Clínicas (Formato S.O.A.P.)</h3>
            {formData.notasClinicas.map((nota, idx) => (
                <div key={idx} className="bg-white p-4 rounded shadow border border-slate-200 space-y-3 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-2 bg-slate-50 p-2 rounded-t">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-slate-700 uppercase tracking-wide">Sesión {idx + 1}</span>
                            <input type="text" value={nota.fecha} onChange={(e) => handleNotaChange(idx, 'fecha', e.target.value)} className="border p-1.5 rounded w-32 text-xs font-bold text-center bg-white border-slate-300 focus:ring-1 focus:ring-slate-400 outline-none" placeholder="Fecha" />
                        </div>
                        <button onClick={() => removeNota(idx)} className="text-red-500 text-xs hover:text-red-700 font-bold flex items-center gap-1 transition-colors"><Trash2 size={14} /> Eliminar</button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        <div className="col-span-2 md:col-span-1">
                            <label className="block font-bold text-slate-700 mb-1">S - Subjetivo (Lo que refiere el paciente):</label>
                            <textarea value={nota.s} onChange={(e) => handleNotaChange(idx, 's', e.target.value)} className="w-full border p-2 rounded h-24 resize-none border-slate-300 focus:ring-1 focus:ring-slate-400 outline-none" placeholder="Síntomas, preocupaciones, narrativa del paciente..." />
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <label className="block font-bold text-slate-700 mb-1">O - Objetivo (Lo que se observa/mide):</label>
                            <textarea value={nota.o} onChange={(e) => handleNotaChange(idx, 'o', e.target.value)} className="w-full border p-2 rounded h-24 resize-none border-slate-300 focus:ring-1 focus:ring-slate-400 outline-none" placeholder="Pruebas aplicadas, conducta observable, apariencia..." />
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <label className="block font-bold text-slate-700 mb-1">A - Análisis/Avalúo (Impresión Diagnóstica):</label>
                            <textarea value={nota.a} onChange={(e) => handleNotaChange(idx, 'a', e.target.value)} className="w-full border p-2 rounded h-24 resize-none bg-slate-50 border-slate-200 focus:ring-1 focus:ring-slate-400 outline-none" placeholder="Interpretación clínica, códigos DSM/CIE..." />
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <label className="block font-bold text-slate-700 mb-1">P - Plan (Tratamiento/Seguimiento):</label>
                            <textarea value={nota.p} onChange={(e) => handleNotaChange(idx, 'p', e.target.value)} className="w-full border p-2 rounded h-24 resize-none border-slate-300 focus:ring-1 focus:ring-slate-400 outline-none" placeholder="Tareas, próximas pruebas, intervenciones..." />
                        </div>
                    </div>
                </div>
            ))}
            <button onClick={addNota} className="w-full bg-slate-50 text-slate-700 py-3 rounded-lg font-bold hover:bg-slate-100 border border-slate-200 flex justify-center items-center gap-2 transition-all shadow-sm hover:shadow-md border-dashed border-2 hover:border-slate-400">+ Agregar Nueva Nota S.O.A.P.</button>
        </div>
    );
};

export default NotasClinicas;

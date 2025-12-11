import React from 'react';
import { Users, PlusCircle, Trash2, Sparkles } from 'lucide-react';
import { ROLES_FAMILIA } from '../../utils/constants';
import GenogramaVisual from '../visuals/GenogramaVisual';

const Familiograma = ({ formData, handleChange, agregarFamiliar, eliminarFamiliar, updateFamiliar, generarInterpretacionFamiliograma }) => {
    return (
        <div className="space-y-4 w-full">
            <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2"><Users size={24} /> Familiograma</h3>
            <div className="bg-slate-50 p-4 rounded border border-slate-200">
                <h4 className="font-bold text-sm mb-2 text-slate-700">Agregar Miembro:</h4>
                <div className="flex gap-2 flex-wrap mb-2 items-end">
                    <select id="selectRol" className="border p-2 rounded text-sm w-40 border-slate-300 focus:ring-2 focus:ring-slate-400 outline-none">
                        {ROLES_FAMILIA.map(r => <option key={r.id} value={r.id}>{r.label}</option>)}
                    </select>
                    <button onClick={() => agregarFamiliar(document.getElementById('selectRol').value)} className="bg-slate-800 text-white px-4 py-2 rounded text-sm flex items-center gap-1 hover:bg-slate-700 transition-colors shadow-sm"><PlusCircle size={16} /> Agregar</button>
                </div>
            </div>
            <div className="bg-white rounded border border-slate-200 overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                    <thead className="bg-slate-100 text-slate-700 uppercase text-xs font-bold">
                        <tr><th className="p-2 text-left">Rol</th><th className="p-2 text-left">Nombre</th><th className="p-2 w-16">Edad</th><th className="p-2 w-16">Finado</th><th className="p-2 w-10"></th></tr>
                    </thead>
                    <tbody>
                        {formData.familia.map(f => (
                            <tr key={f.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                                <td className="p-2 font-bold text-slate-600 text-xs">{f.rol}</td>
                                <td className="p-2"><input value={f.nombre} onChange={(e) => updateFamiliar(f.id, 'nombre', e.target.value)} className="border p-1.5 rounded w-full text-xs border-slate-300 focus:outline-none focus:border-slate-500" /></td>
                                <td className="p-2"><input value={f.edad} onChange={(e) => updateFamiliar(f.id, 'edad', e.target.value)} className="border p-1.5 rounded w-full text-xs text-center border-slate-300 focus:outline-none focus:border-slate-500" /></td>
                                <td className="p-2 text-center"><input type="checkbox" checked={f.finado} onChange={(e) => updateFamiliar(f.id, 'finado', e.target.checked)} className="rounded text-slate-600 focus:ring-slate-500" /></td>
                                <td className="p-2 text-center">{f.rol !== 'Paciente' && (<button onClick={() => eliminarFamiliar(f.id)} className="text-red-500 hover:text-red-700 transition-colors"><Trash2 size={14} /></button>)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="border border-slate-200 rounded p-4 bg-slate-50 h-64 overflow-hidden relative shadow-inner">
                <GenogramaVisual familia={formData.familia} />
            </div>
            <button onClick={generarInterpretacionFamiliograma} className="mb-2 bg-slate-800 text-white px-4 py-2 rounded shadow hover:bg-slate-700 text-xs font-bold flex items-center gap-2 self-start transition-all transform hover:scale-105 active:scale-95"><Sparkles size={16} /> Generar Interpretación Sistémica</button>
            <textarea name="familiogramaInterpretacion" placeholder="Interpretación Sistémica..." value={formData.familiogramaInterpretacion} onChange={handleChange} className="border p-2 rounded w-full h-32 text-sm border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 outline-none" />
        </div>
    );
};

export default Familiograma;

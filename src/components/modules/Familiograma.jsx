import React, { useState } from 'react';
import { Users, PlusCircle, Trash2, Sparkles, HeartHandshake } from 'lucide-react';
import { ROLES_FAMILIA, RELATIONSHIP_TYPES } from '../../utils/constants';
import GenogramaVisual from '../visuals/GenogramaVisual';

const Familiograma = ({ formData, handleChange, agregarFamiliar, eliminarFamiliar, updateFamiliar, generarInterpretacionFamiliograma }) => {
    const [relacion, setRelacion] = useState({ from: '', to: '', type: 'estrecha' });

    const agregarRelacion = () => {
        if (!relacion.from || !relacion.to || !relacion.type || relacion.from === relacion.to) return;
        const newRels = [...(formData.familiaRelaciones || []), relacion];
        handleChange({ target: { name: 'familiaRelaciones', value: newRels } });
        setRelacion(prev => ({ ...prev, from: '', to: '' }));
    };

    const eliminarRelacion = (index) => {
        const newRels = [...(formData.familiaRelaciones || [])];
        newRels.splice(index, 1);
        handleChange({ target: { name: 'familiaRelaciones', value: newRels } });
    };

    return (
        <div className="space-y-4 w-full">
            <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2"><Users size={24} /> Familiograma</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Panel Miembros */}
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="font-bold text-sm mb-2 text-slate-700">1. Agregar Miembro:</h4>
                    <div className="flex gap-2 flex-wrap mb-2 items-end">
                        <select id="selectRol" className="border p-2 rounded text-sm w-40 border-slate-300 focus:ring-2 focus:ring-slate-400 outline-none">
                            {ROLES_FAMILIA.map(r => <option key={r.id} value={r.id}>{r.label}</option>)}
                        </select>
                        <button onClick={() => agregarFamiliar(document.getElementById('selectRol').value)} className="bg-slate-800 text-white px-4 py-2 rounded text-sm flex items-center gap-1 hover:bg-slate-700 transition-colors shadow-sm"><PlusCircle size={16} /> Agregar</button>
                    </div>
                </div>

                {/* Panel Relaciones */}
                <div className="bg-blue-50 p-4 rounded border border-blue-100">
                    <h4 className="font-bold text-sm mb-2 text-blue-800 flex items-center gap-2"><HeartHandshake size={16} /> 2. Definir Dinámica:</h4>
                    <div className="flex gap-2 items-end flex-wrap">
                        <select className="border p-1.5 rounded text-xs w-24" value={relacion.from} onChange={e => setRelacion({ ...relacion, from: e.target.value })}>
                            <option value="">De...</option>
                            {formData.familia.map(f => <option key={f.id} value={f.id}>{f.rol} ({f.nombre || '?'})</option>)}
                        </select>
                        <select className="border p-1.5 rounded text-xs w-24" value={relacion.to} onChange={e => setRelacion({ ...relacion, to: e.target.value })}>
                            <option value="">Para...</option>
                            {formData.familia.map(f => <option key={f.id} value={f.id}>{f.rol} ({f.nombre || '?'})</option>)}
                        </select>
                        <select className="border p-1.5 rounded text-xs w-24" value={relacion.type} onChange={e => setRelacion({ ...relacion, type: e.target.value })}>
                            {RELATIONSHIP_TYPES.map(t => <option key={t.id} value={t.id}>{t.label.split('/')[0]}</option>)}
                        </select>
                        <button onClick={agregarRelacion} className="bg-blue-600 text-white p-1.5 rounded hover:bg-blue-700"><PlusCircle size={16} /></button>
                    </div>
                    {/* Lista de Relaciones Activas (Chips) */}
                    <div className="flex flex-wrap gap-2 mt-2">
                        {(formData.familiaRelaciones || []).map((rel, i) => {
                            const f1 = formData.familia.find(f => f.id === rel.from);
                            const f2 = formData.familia.find(f => f.id === rel.to);
                            if (!f1 || !f2) return null;
                            return (
                                <span key={i} className="bg-white border border-blue-200 text-[10px] px-2 py-1 rounded-full flex items-center gap-1 shadow-sm text-slate-600">
                                    <b>{f1.rol}</b> ↔ <b>{f2.rol}</b> ({rel.type})
                                    <button onClick={() => eliminarRelacion(i)} className="text-red-400 hover:text-red-600"><Trash2 size={12} /></button>
                                </span>
                            );
                        })}
                    </div>
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
                <GenogramaVisual familia={formData.familia} relaciones={formData.familiaRelaciones} />
            </div>
            <button onClick={generarInterpretacionFamiliograma} className="mb-2 bg-slate-800 text-white px-4 py-2 rounded shadow hover:bg-slate-700 text-xs font-bold flex items-center gap-2 self-start transition-all transform hover:scale-105 active:scale-95"><Sparkles size={16} /> Generar Interpretación Sistémica (Auto)</button>
            <textarea name="familiogramaInterpretacion" placeholder="Interpretación Sistémica..." value={formData.familiogramaInterpretacion} onChange={handleChange} className="border p-2 rounded w-full h-32 text-sm border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 outline-none" />
        </div>
    );
};

export default Familiograma;

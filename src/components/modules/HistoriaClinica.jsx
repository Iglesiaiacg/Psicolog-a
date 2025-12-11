import React from 'react';

const HistoriaClinica = ({ formData, handleChange }) => {
    return (
        <div className="space-y-6 w-full">
            <h3 className="font-bold text-lg text-slate-800 border-b border-slate-200 pb-2">Historia Clínica Psicológica</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2"><label className="font-bold text-sm text-slate-700 block mb-2">II. Filiación (Presentación del consultante):</label><textarea name="filiacionPresentacion" value={formData.filiacionPresentacion} onChange={handleChange} className="border p-3 rounded w-full h-24 text-sm border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 outline-none transition-all" /></div>
                <div className="md:col-span-2"><label className="font-bold text-sm text-slate-700 block mb-2">Modo de relacionarse con el clínico:</label><textarea name="filiacionRelacion" value={formData.filiacionRelacion} onChange={handleChange} className="border p-3 rounded w-full h-24 text-sm border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 outline-none transition-all" /></div>
                <div className="md:col-span-2"><label className="font-bold text-sm text-slate-700 block mb-2">VII. Motivo de Consulta:</label><textarea name="motivoConsulta" value={formData.motivoConsulta} onChange={handleChange} className="border p-3 rounded w-full h-32 text-sm border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 outline-none transition-all" /></div>
            </div>
            <h4 className="font-bold text-md text-slate-600 mt-6 border-b border-slate-200 pb-2">Antecedentes</h4>
            <div className="space-y-6">
                <div><label className="font-bold text-sm text-slate-700 mb-2 block">Antecedentes Heredofamiliares:</label><textarea name="antecedentesHeredofamiliares" value={formData.antecedentesHeredofamiliares} onChange={handleChange} className="border p-3 rounded w-full h-24 text-sm border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 outline-none transition-all" /></div>
                <div><label className="font-bold text-sm text-slate-700 mb-2 block">Factores Biológicos / Personales Patológicos (Salud, Sueño, Medicamentos):</label><textarea name="antecedentesPersonalesPatologicos" value={formData.antecedentesPersonalesPatologicos} onChange={handleChange} className="border p-3 rounded w-full h-24 text-sm border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 outline-none transition-all" /></div>
                <div><label className="font-bold text-sm text-slate-700 mb-2 block">Historia del Padecimiento Actual:</label><textarea name="historiaPadecimientoActual" value={formData.historiaPadecimientoActual} onChange={handleChange} className="border p-3 rounded w-full h-32 text-sm border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 outline-none transition-all" /></div>
            </div>
        </div>
    );
};

export default HistoriaClinica;

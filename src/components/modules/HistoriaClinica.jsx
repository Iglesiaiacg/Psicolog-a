import React from 'react';

const HistoriaClinica = ({ formData, handleChange }) => {
    return (
        <div className="space-y-6">
            <h3 className="font-bold text-lg text-blue-900 border-b pb-2">Historia Clínica Psicológica</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2"><label className="font-bold text-sm text-gray-700 block mb-1">II. Filiación (Presentación del consultante):</label><textarea name="filiacionPresentacion" value={formData.filiacionPresentacion} onChange={handleChange} className="border p-2 rounded w-full h-20 text-sm border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" /></div>
                <div className="md:col-span-2"><label className="font-bold text-sm text-gray-700 block mb-1">Modo de relacionarse con el clínico:</label><textarea name="filiacionRelacion" value={formData.filiacionRelacion} onChange={handleChange} className="border p-2 rounded w-full h-20 text-sm border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" /></div>
                <div className="md:col-span-2"><label className="font-bold text-sm text-gray-700 block mb-1">VII. Motivo de Consulta:</label><textarea name="motivoConsulta" value={formData.motivoConsulta} onChange={handleChange} className="border p-2 rounded w-full h-24 text-sm border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" /></div>
            </div>
            <h4 className="font-bold text-md text-gray-600 mt-4 border-b pb-1">Antecedentes</h4>
            <div className="space-y-4">
                <div><label className="font-bold text-sm text-gray-700">Antecedentes Heredofamiliares:</label><textarea name="antecedentesHeredofamiliares" value={formData.antecedentesHeredofamiliares} onChange={handleChange} className="border p-2 rounded w-full h-20 text-sm border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" /></div>
                <div><label className="font-bold text-sm text-gray-700">Factores Biológicos / Personales Patológicos (Salud, Sueño, Medicamentos):</label><textarea name="antecedentesPersonalesPatologicos" value={formData.antecedentesPersonalesPatologicos} onChange={handleChange} className="border p-2 rounded w-full h-20 text-sm border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" /></div>
                <div><label className="font-bold text-sm text-gray-700">Historia del Padecimiento Actual:</label><textarea name="historiaPadecimientoActual" value={formData.historiaPadecimientoActual} onChange={handleChange} className="border p-2 rounded w-full h-24 text-sm border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" /></div>
            </div>
        </div>
    );
};

export default HistoriaClinica;

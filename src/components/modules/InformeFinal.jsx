import React from 'react';
import { FileText, Sparkles } from 'lucide-react';

const InformeFinal = ({ formData, setFormData, handleChange, resultados }) => {
    const generarInformeFinal = () => {
        let resumen = `Paciente ${formData.sexo === 'F' ? 'femenina' : 'masculino'} de ${formData.edad} años, ocupación ${formData.ocupacion}. Acude a consulta refiriendo: "${formData.motivoConsulta}".\n\n`;
        let diagnostico = `IMPRESIÓN DIAGNÓSTICA MULTIAXIAL\n\n- Ansiedad: ${resultados.hama.text} (${resultados.hama.score}).\n- Depresión: ${resultados.bdi.text} (${resultados.bdi.score}).\n- Personalidad: Rasgos ${Object.entries(resultados.ceper).sort((a, b) => b[1] - a[1])[0][0]}.\n- Esferas críticas: ${Object.entries(resultados.esferas).filter(x => x[1] <= 15).map(x => x[0]).join(', ') || 'Ninguna'}.`;

        setFormData(prev => ({ ...prev, informeResumen: resumen, informeDiagnostico: diagnostico }));
    };

    return (
        <div className="space-y-4">
            <h3 className="font-bold text-lg text-blue-900 flex items-center gap-2"><FileText size={24} /> Informe Final</h3>
            <button onClick={generarInformeFinal} className="w-full bg-indigo-600 text-white px-4 py-3 rounded-lg shadow-lg hover:bg-indigo-700 text-sm font-bold flex items-center justify-center gap-2 transition-all mb-6 border-2 border-indigo-400 transform hover:scale-[1.02] active:scale-[0.98]"><Sparkles size={20} /> INTEGRAR EXPEDIENTE COMPLETO</button>
            <label className="font-bold text-sm text-gray-700">Resumen del Caso:</label><textarea name="informeResumen" value={formData.informeResumen} onChange={handleChange} className="border p-2 rounded w-full h-24 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
            <label className="font-bold text-sm text-gray-700">Impresión Diagnóstica:</label><textarea name="informeDiagnostico" value={formData.informeDiagnostico} onChange={handleChange} className="border p-2 rounded w-full h-24 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
            <label className="font-bold text-sm text-gray-700">Pronóstico:</label><textarea name="informePronostico" value={formData.informePronostico} onChange={handleChange} className="border p-2 rounded w-full h-24 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
            <label className="font-bold text-sm text-gray-700">Recomendaciones:</label><textarea name="informeRecomendaciones" value={formData.informeRecomendaciones} onChange={handleChange} className="border p-2 rounded w-full h-24 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
        </div>
    );
};

export default InformeFinal;

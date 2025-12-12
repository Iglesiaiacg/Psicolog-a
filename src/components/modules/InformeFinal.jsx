import React from 'react';
import { FileText, Sparkles } from 'lucide-react';

const InformeFinal = ({ formData, setFormData, handleChange, resultados }) => {
    const generarInformeFinal = () => {
        let resumen = `Paciente ${formData.sexo === 'F' ? 'femenina' : 'masculino'} de ${formData.edad} años, ocupación ${formData.ocupacion}. Acude a consulta refiriendo: "${formData.motivoConsulta}".\n\n`;

        // Formato Multiaxial DSM-IV (Estándar solicitado para expedientes completos)
        let diagnostico = `DIAGNÓSTICO MULTIAXIAL\n\n`;
        diagnostico += `EJE I (Trastornos Clínicos y Otros Problemas): \n- \n\n`;
        diagnostico += `EJE II (Trastornos de la Personalidad y Retraso Mental): \n- Rasgos predominantes: ${Object.entries(resultados.ceper).sort((a, b) => b[1] - a[1])[0][0]}.\n\n`;
        diagnostico += `EJE III (Enfermedades Médicas): \n- \n\n`;
        diagnostico += `EJE IV (Problemas Psicosociales y Ambientales): \n- \n\n`;
        diagnostico += `EJE V (Evaluación de la Actividad Global - EAG): \n- \n\n`;
        diagnostico += `SUSTENTO PSICOMÉTRICO:\n- Ansiedad (HAM-A): ${resultados.hama.text} (${resultados.hama.score})\n- Depresión (BDI-II): ${resultados.bdi.text} (${resultados.bdi.score})\n- Esferas Críticas: ${Object.entries(resultados.esferas).filter(x => x[1] <= 15).map(x => x[0]).join(', ') || 'Sin esferas críticas'}`;

        setFormData(prev => ({ ...prev, informeResumen: resumen, informeDiagnostico: diagnostico }));
    };

    return (
        <div className="space-y-4 w-full">
            <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2"><FileText size={24} /> Informe Final</h3>
            <button onClick={generarInformeFinal} className="w-full bg-slate-900 text-white px-4 py-3 rounded-lg shadow-lg hover:bg-slate-800 text-sm font-bold flex items-center justify-center gap-2 transition-all mb-6 border-2 border-slate-700 transform hover:scale-[1.02] active:scale-[0.98]"><Sparkles size={20} /> INTEGRAR EXPEDIENTE COMPLETO</button>
            <label className="font-bold text-sm text-slate-700">Resumen del Caso:</label><textarea name="informeResumen" value={formData.informeResumen} onChange={handleChange} className="border p-3 rounded w-full h-24 border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 outline-none transition-all" />
            <label className="font-bold text-sm text-slate-700">Impresión Diagnóstica:</label><textarea name="informeDiagnostico" value={formData.informeDiagnostico} onChange={handleChange} className="border p-3 rounded w-full h-24 border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 outline-none transition-all" />
            <label className="font-bold text-sm text-slate-700">Pronóstico:</label><textarea name="informePronostico" value={formData.informePronostico} onChange={handleChange} className="border p-3 rounded w-full h-24 border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 outline-none transition-all" />
            <label className="font-bold text-sm text-slate-700">Recomendaciones:</label><textarea name="informeRecomendaciones" value={formData.informeRecomendaciones} onChange={handleChange} className="border p-3 rounded w-full h-24 border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 outline-none transition-all" />
        </div>
    );
};

export default InformeFinal;

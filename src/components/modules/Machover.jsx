import React from 'react';
import { Brain } from 'lucide-react';
import { MACHOVER_INDICADORES } from '../../utils/constants';
import { interpretarRasgoMachover } from '../../utils/machoverLogic';

const Machover = ({ formData, setFormData, handleChange }) => {

    const handleMachoverChange = (idx, type, value) => {
        setFormData(prev => ({ ...prev, [`machover${type}${idx}`]: value }));
    };

    const autoAnalizarMachover = () => {
        let nuevasInter = {};
        let resumenGlobal = "ANÁLISIS PROYECTIVO INTEGRAL (Sugerido):\n\n";
        let rasgosDetectados = [];

        MACHOVER_INDICADORES.forEach((ind, i) => {
            const desc = formData[`machoverInd${i}`];
            if (desc && !formData[`machoverInt${i}`]) { // Solo si hay descripción y no hay interpretación manual
                const sugerencia = interpretarRasgoMachover(ind, desc);
                nuevasInter[`machoverInt${i}`] = sugerencia;
                rasgosDetectados.push(`- ${ind}: ${sugerencia}`);
            } else if (formData[`machoverInt${i}`]) {
                rasgosDetectados.push(`- ${ind}: ${formData[`machoverInt${i}`]}`);
            }
        });

        resumenGlobal += "El análisis de los rasgos gráficos sugiere la presencia de indicadores asociados a:\n" + rasgosDetectados.join("\n") + "\n\nSe recomienda correlacionar estos hallazgos proyectivos con la historia clínica y pruebas psicométricas para confirmar hipótesis sobre autoimagen, control de impulsos y dinámica emocional.";

        setFormData(prev => ({
            ...prev,
            ...nuevasInter,
            machoverInterpretacionGlobal: prev.machoverInterpretacionGlobal || resumenGlobal
        }));
    };

    return (
        <div className="space-y-6 w-full">
            <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                <h3 className="font-bold text-lg text-slate-800">Análisis de la Figura Humana (Machover)</h3>
                <button onClick={autoAnalizarMachover} className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded text-xs font-bold flex items-center gap-2 shadow-lg transition-all transform hover:scale-105 active:scale-95"><Brain size={16} /> Asistente de Interpretación Automática</button>
            </div>

            <div className="bg-slate-50 p-4 rounded border mb-4 border-slate-200">
                <label className="block font-bold text-sm mb-2 text-slate-700">Historia del dibujo (Título y Relato):</label>
                <textarea name="machoverHistoria" value={formData.machoverHistoria} onChange={handleChange} className="border p-3 rounded w-full h-24 text-sm border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 outline-none transition-all" placeholder="Escriba aquí la historia que el paciente narró sobre su dibujo..." />
            </div>

            <div className="overflow-x-auto border rounded bg-white shadow-sm border-slate-200">
                <table className="w-full text-sm">
                    <thead className="bg-slate-100 text-slate-800 font-bold uppercase text-xs">
                        <tr>
                            <th className="p-3 text-left w-1/4">Indicador Gráfico</th>
                            <th className="p-3 text-left w-1/3">Descripción del Dibujo</th>
                            <th className="p-3 text-left w-1/3">Interpretación Psicológica</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MACHOVER_INDICADORES.map((indicador, i) => (
                            <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                                <td className="p-3 font-bold text-slate-600">{indicador}</td>
                                <td className="p-3">
                                    <textarea
                                        value={formData[`machoverInd${i}`]}
                                        onChange={(e) => handleMachoverChange(i, 'Ind', e.target.value)}
                                        className="w-full border p-2 rounded text-xs h-12 resize-none border-slate-300 focus:ring-1 focus:ring-slate-400 outline-none"
                                        placeholder="Describa el rasgo (ej. ojos cerrados, trazo débil...)"
                                    />
                                </td>
                                <td className="p-3">
                                    <textarea
                                        value={formData[`machoverInt${i}`]}
                                        onChange={(e) => handleMachoverChange(i, 'Int', e.target.value)}
                                        className="w-full border p-2 rounded text-xs h-12 resize-none bg-slate-50 focus:bg-white border-slate-200 focus:border-slate-400 focus:ring-1 focus:ring-slate-400 outline-none"
                                        placeholder="Interpretación..."
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-4">
                <label className="font-bold text-sm text-slate-800 mb-2 block">Interpretación Global Integrada:</label>
                <textarea name="machoverInterpretacionGlobal" value={formData.machoverInterpretacionGlobal} onChange={handleChange} className="border p-3 rounded w-full h-32 text-sm mt-1 border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 outline-none transition-all" />
            </div>
        </div>
    );
};

export default Machover;

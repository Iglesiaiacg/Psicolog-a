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
        <div className="space-y-6">
            <div className="flex justify-between items-center border-b pb-2">
                <h3 className="font-bold text-lg text-blue-900">Análisis de la Figura Humana (Machover)</h3>
                <button onClick={autoAnalizarMachover} className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-xs font-bold flex items-center gap-2 shadow-lg transition-all transform hover:scale-105 active:scale-95"><Brain size={16} /> Asistente de Interpretación Automática</button>
            </div>

            <div className="bg-gray-50 p-4 rounded border mb-4 border-gray-200">
                <label className="block font-bold text-sm mb-1 text-blue-900">Historia del dibujo (Título y Relato):</label>
                <textarea name="machoverHistoria" value={formData.machoverHistoria} onChange={handleChange} className="border p-2 rounded w-full h-24 text-sm border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Escriba aquí la historia que el paciente narró sobre su dibujo..." />
            </div>

            <div className="overflow-x-auto border rounded bg-white shadow-sm">
                <table className="w-full text-sm">
                    <thead className="bg-blue-100 text-blue-900 font-bold uppercase text-xs">
                        <tr>
                            <th className="p-2 text-left w-1/4">Indicador Gráfico</th>
                            <th className="p-2 text-left w-1/3">Descripción del Dibujo</th>
                            <th className="p-2 text-left w-1/3">Interpretación Psicológica</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MACHOVER_INDICADORES.map((indicador, i) => (
                            <tr key={i} className="border-b last:border-0 hover:bg-gray-50 transition-colors">
                                <td className="p-2 font-bold text-gray-700">{indicador}</td>
                                <td className="p-2">
                                    <textarea
                                        value={formData[`machoverInd${i}`]}
                                        onChange={(e) => handleMachoverChange(i, 'Ind', e.target.value)}
                                        className="w-full border p-1 rounded text-xs h-10 resize-none border-gray-300 focus:ring-1 focus:ring-blue-500 outline-none"
                                        placeholder="Describa el rasgo (ej. ojos cerrados, trazo débil...)"
                                    />
                                </td>
                                <td className="p-2">
                                    <textarea
                                        value={formData[`machoverInt${i}`]}
                                        onChange={(e) => handleMachoverChange(i, 'Int', e.target.value)}
                                        className="w-full border p-1 rounded text-xs h-10 resize-none bg-blue-50 focus:bg-white border-blue-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                                        placeholder="Interpretación..."
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-4">
                <label className="font-bold text-sm text-blue-900">Interpretación Global Integrada:</label>
                <textarea name="machoverInterpretacionGlobal" value={formData.machoverInterpretacionGlobal} onChange={handleChange} className="border p-2 rounded w-full h-32 text-sm mt-1 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
            </div>
        </div>
    );
};

export default Machover;

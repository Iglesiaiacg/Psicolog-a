import React from 'react';
import { ArrowLeft } from 'lucide-react';
import PaginaBase from '../layout/PaginaBase';
import GenogramaVisual from '../visuals/GenogramaVisual';
import GraficaEsferasVisual from '../visuals/GraficaEsferasVisual';
import { AVISO_PRIVACIDAD_TEXT, CONSENTIMIENTO_INFORMADO_TEXT, MACHOVER_INDICADORES } from '../../utils/constants';

const PrintView = ({ formData, resultados, setPrintMode }) => {
    return (
        <div className="print-container bg-gray-500 p-8 print:p-0 print:bg-white flex flex-col items-center gap-8 relative">
            <div className="fixed top-4 left-4 print:hidden z-50">
                <button onClick={() => setPrintMode(false)} className="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 hover:bg-gray-100"><ArrowLeft size={20} /> Volver al Editor</button>
            </div>

            {/* --- PÁGINAS DE IMPRESIÓN --- */}
            <PaginaBase title="Portada" showHeader={false} showFooter={false} headerInfo={formData}>
                <div className="flex flex-col items-center h-full text-center justify-between py-12">
                    <div className="space-y-4">
                        <div className="text-5xl font-black text-blue-900 tracking-tighter italic">ives</div>
                        <div className="text-xl font-bold text-gray-600 uppercase tracking-widest">Universidad IVES</div>
                        <div className="w-32 h-1 bg-blue-900 mx-auto mt-4"></div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-gray-800 uppercase">{formData.especialidad}</h2>
                        <p className="text-gray-500 text-sm uppercase tracking-wider">Facultad de Posgrados</p>
                    </div>
                    <div className="my-8">
                        <h1 className="text-4xl font-black text-blue-900 uppercase leading-tight">Expediente Clínico<br />Integral</h1>
                        <div className="text-gray-400 mt-2 font-mono">Folio: {formData.folio}</div>
                    </div>
                    <div className="space-y-6 w-full max-w-lg">
                        <div className="mb-4">
                            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Catedrático</p>
                            <p className="text-lg font-bold text-gray-800">{formData.catedratico}</p>
                        </div>
                        <div className="border-t border-gray-300 pt-6">
                            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Presenta</p>
                            <p className="text-xl font-bold text-gray-800">{formData.pasanteHeader.replace('Pasante: ', '')}</p>
                            <div className="flex justify-center gap-4 text-sm text-gray-600 mt-1">
                                <span>Matrícula: {formData.presentaMatricula}</span>
                                <span>•</span>
                                <span>Grupo: {formData.grupo}</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-sm text-gray-500 font-bold uppercase">
                        Xalapa, Ver. a {formData.fechaElaboracion}
                    </div>
                </div>
            </PaginaBase>

            <PaginaBase title="Introducción" headerInfo={formData}>
                <div className="p-8 text-justify leading-relaxed whitespace-pre-wrap font-serif text-sm">
                    {formData.introduccionTexto}
                </div>
            </PaginaBase>

            <PaginaBase title="Aviso de Privacidad" headerInfo={formData}>
                <div className="space-y-4 p-4 text-[10px] text-justify flex flex-col h-full">
                    <h3 className="font-bold text-center border-b pb-1 text-sm bg-gray-50 p-2">AVISO DE PRIVACIDAD INTEGRAL</h3>
                    <p className="whitespace-pre-wrap flex-1">{AVISO_PRIVACIDAD_TEXT}</p>
                    <div className="mt-8 pt-8">
                        <div className="border-t border-black w-64 mx-auto pt-1 text-center font-bold">Firma de Aceptación (Paciente)</div>
                    </div>
                </div>
            </PaginaBase>

            <PaginaBase title="Consentimiento Informado" headerInfo={formData}>
                <div className="space-y-4 p-4 text-[10px] text-justify flex flex-col h-full">
                    <h3 className="font-bold text-center border-b pb-1 text-sm bg-gray-50 p-2">CARTA DE CONSENTIMIENTO INFORMADO</h3>
                    <p className="whitespace-pre-wrap flex-1">{CONSENTIMIENTO_INFORMADO_TEXT}</p>
                    <div className="mt-8 pt-12 flex justify-between px-8">
                        <div className="border-t border-black w-48 text-center pt-1 font-bold">Firma del Paciente</div>
                        <div className="border-t border-black w-48 text-center pt-1 font-bold">Firma del Psicólogo</div>
                    </div>
                </div>
            </PaginaBase>

            <PaginaBase title="Datos Generales e Historia Clínica" headerInfo={formData}>
                <div className="grid grid-cols-2 gap-4 text-xs mb-4 p-4 border-b">
                    <div><span className="font-bold">Paciente:</span> {formData.pacienteNombre}</div>
                    <div><span className="font-bold">Edad:</span> {formData.edad}</div>
                    <div><span className="font-bold">Teléfono:</span> {formData.telefono}</div>
                    <div><span className="font-bold">Ocupación:</span> {formData.ocupacion}</div>
                </div>
                <div className="space-y-4 p-4">
                    <h3 className="font-bold border-b pb-1 text-sm bg-gray-50">Filiación y Presentación:</h3><p className="text-sm text-justify">{formData.filiacionPresentacion}</p>
                    <h3 className="font-bold border-b pb-1 text-sm bg-gray-50">Relación con el Clínico:</h3><p className="text-sm text-justify">{formData.filiacionRelacion}</p>
                    <h3 className="font-bold border-b pb-1 text-sm bg-gray-50">Motivo Consulta:</h3><p className="text-sm text-justify">{formData.motivoConsulta}</p>
                    <h3 className="font-bold border-b pb-1 text-sm bg-gray-50">Antecedentes Heredofamiliares:</h3><p className="text-sm text-justify">{formData.antecedentesHeredofamiliares}</p>
                    <h3 className="font-bold border-b pb-1 text-sm bg-gray-50">Antecedentes Personales:</h3><p className="text-sm text-justify">{formData.antecedentesPersonalesPatologicos}</p>
                    <h3 className="font-bold border-b pb-1 text-sm bg-gray-50">Padecimiento Actual:</h3><p className="text-sm text-justify">{formData.historiaPadecimientoActual}</p>
                </div>
            </PaginaBase>

            <PaginaBase title="Familiograma" headerInfo={formData}><div className="flex flex-col h-full"><div className="flex-grow border flex items-center justify-center"><GenogramaVisual familia={formData.familia} /></div><div className="border-t p-4 mt-4"><p className="font-bold">Interpretación:</p><p className="text-sm text-justify">{formData.familiogramaInterpretacion}</p></div></div></PaginaBase>

            <PaginaBase title="Escalas de Esferas de Vida" headerInfo={formData}>
                <div className="flex flex-col items-center h-full p-4">
                    <div className="w-[12cm] h-[12cm] mb-4"><GraficaEsferasVisual data={resultados.esferas} /></div>

                    <div className="w-full mb-4">
                        <h4 className="font-bold border-b mb-2 text-sm">Puntajes Totales por Esfera (Max 25):</h4>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                            {Object.entries(resultados.esferas).map(([k, v]) => (
                                <div key={k} className="border p-2 rounded flex justify-between"><span>{k}:</span> <strong>{v}</strong></div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-4 border p-4 w-full bg-gray-50">
                        <p className="font-bold text-sm">Interpretación de Resultados:</p>
                        <p className="text-xs text-justify mt-1">{formData.esferasInterpretacion}</p>
                    </div>
                </div>
            </PaginaBase>

            <PaginaBase title="CEPER III - Resultados" headerInfo={formData}>
                <div className="p-4">
                    <h3 className="font-bold mb-4">Perfil de Personalidad:</h3>
                    {Object.entries(resultados.ceper).map(([s, v]) => <div key={s} className="flex mb-1 items-center"><span className="w-32 text-xs font-bold">{s}</span><div className="bg-gray-200 h-2 flex-1 rounded"><div className="bg-blue-600 h-full" style={{ width: `${(v / 120) * 100}%` }}></div></div><span className="w-6 text-xs text-right">{v}</span></div>)}
                    <div className="mt-8 border-t pt-4">
                        <p className="font-bold">Interpretación:</p>
                        <p className="text-sm text-justify">{formData.ceperInterpretacion}</p>
                    </div>
                </div>
            </PaginaBase>

            <PaginaBase title="Pruebas Psicométricas" headerInfo={formData}>
                <div className="grid grid-cols-2 gap-8 p-4">
                    <div className="border p-4 rounded bg-gray-50">
                        <h4 className="font-bold text-blue-900 border-b mb-2">Ansiedad (HAM-A)</h4>
                        <p className="text-2xl font-black">{resultados.hama.score} Pts</p>
                        <p className="font-bold text-gray-600">{resultados.hama.text}</p>
                    </div>
                    <div className="border p-4 rounded bg-gray-50">
                        <h4 className="font-bold text-blue-900 border-b mb-2">Depresión (BDI-II)</h4>
                        <p className="text-2xl font-black">{resultados.bdi.score} Pts</p>
                        <p className="font-bold text-gray-600">{resultados.bdi.text}</p>
                    </div>
                    <div className="col-span-2 border p-4 rounded bg-gray-50">
                        <h4 className="font-bold text-blue-900 border-b mb-2">Inteligencia (OTIS)</h4>
                        <div className="flex gap-4">
                            <div>Aciertos: <strong>{formData.otisAciertos}</strong></div>
                            <div>Errores: <strong>{formData.otisErrores}</strong></div>
                            <div>Diagnóstico: <strong>{formData.otisDiagnostico}</strong></div>
                        </div>
                    </div>
                </div>
            </PaginaBase>

            <PaginaBase title="Análisis Figura Humana (Machover)" headerInfo={formData}>
                <div className="p-4 space-y-4">
                    {formData.machoverHistoria && (
                        <div className="bg-gray-50 p-3 rounded border text-sm italic mb-4">"{formData.machoverHistoria}"</div>
                    )}
                    <table className="w-full text-xs border-collapse">
                        <thead>
                            <tr className="bg-blue-100">
                                <th className="border p-1 w-1/4">Indicador</th>
                                <th className="border p-1 w-1/3">Descripción</th>
                                <th className="border p-1 w-1/3">Interpretación</th>
                            </tr>
                        </thead>
                        <tbody>
                            {MACHOVER_INDICADORES.map((ind, i) => (
                                <tr key={i}>
                                    <td className="border p-1 font-bold">{ind}</td>
                                    <td className="border p-1">{formData[`machoverInd${i}`]}</td>
                                    <td className="border p-1">{formData[`machoverInt${i}`]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="border-t pt-2">
                        <p className="font-bold text-sm">Integración Global:</p>
                        <p className="text-xs text-justify">{formData.machoverInterpretacionGlobal}</p>
                    </div>
                </div>
            </PaginaBase>

            <PaginaBase title="Notas Clínicas S.O.A.P." headerInfo={formData}>
                <div className="space-y-6 p-4">
                    {formData.notasClinicas.map((n, i) => (
                        <div key={i} className="border rounded-lg overflow-hidden mb-6 break-inside-avoid shadow-sm">
                            <div className="bg-gray-100 p-2 font-bold text-sm border-b flex justify-between">
                                <span>SESIÓN {i + 1}</span>
                                <span>FECHA: {n.fecha}</span>
                            </div>
                            <div className="p-4 grid grid-cols-1 gap-3 text-xs">
                                <div><strong className="text-blue-900 block mb-1">S (Subjetivo):</strong> <p className="text-justify">{n.s}</p></div>
                                <div><strong className="text-blue-900 block mb-1">O (Objetivo):</strong> <p className="text-justify">{n.o}</p></div>
                                <div className="bg-blue-50 p-2 rounded"><strong className="text-blue-900 block mb-1">A (Análisis/Diagnóstico):</strong> <p className="text-justify font-medium">{n.a}</p></div>
                                <div><strong className="text-blue-900 block mb-1">P (Plan):</strong> <p className="text-justify">{n.p}</p></div>
                            </div>
                        </div>
                    ))}
                </div>
            </PaginaBase>

            <PaginaBase title="Informe Final" headerInfo={formData}><div className="space-y-4 p-4"><h3 className="font-bold bg-gray-50 p-1">Resumen:</h3><p className="text-sm text-justify">{formData.informeResumen}</p><h3 className="font-bold bg-gray-50 p-1">Diagnóstico:</h3><p className="text-sm text-justify">{formData.informeDiagnostico}</p><h3 className="font-bold bg-gray-50 p-1">Pronóstico:</h3><p className="text-sm text-justify">{formData.informePronostico}</p><h3 className="font-bold bg-gray-50 p-1">Recomendaciones:</h3><p className="text-sm text-justify">{formData.informeRecomendaciones}</p></div></PaginaBase>
        </div>
    );
};

export default PrintView;

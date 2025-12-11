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

            <PaginaBase title="Datos Generales" headerInfo={formData}>
                <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-xs p-4">
                    <div className="border-b pb-1"><span className="font-bold block text-gray-500 uppercase text-[10px]">Nombre Completo</span> <span className="text-sm">{formData.pacienteNombre}</span></div>
                    <div className="border-b pb-1"><span className="font-bold block text-gray-500 uppercase text-[10px]">Edad</span> <span className="text-sm">{formData.edad} años</span></div>
                    <div className="border-b pb-1"><span className="font-bold block text-gray-500 uppercase text-[10px]">Fecha de Nacimiento</span> <span className="text-sm">{formData.fechaNacimiento}</span></div>
                    <div className="border-b pb-1"><span className="font-bold block text-gray-500 uppercase text-[10px]">Sexo</span> <span className="text-sm">{formData.sexo === 'F' ? 'Femenino' : 'Masculino'}</span></div>
                    <div className="border-b pb-1"><span className="font-bold block text-gray-500 uppercase text-[10px]">Estado Civil</span> <span className="text-sm">{formData.estadoCivil}</span></div>
                    <div className="border-b pb-1"><span className="font-bold block text-gray-500 uppercase text-[10px]">Ocupación</span> <span className="text-sm">{formData.ocupacion}</span></div>
                    <div className="border-b pb-1"><span className="font-bold block text-gray-500 uppercase text-[10px]">Escolaridad</span> <span className="text-sm">{formData.escolaridad}</span></div>
                    <div className="border-b pb-1"><span className="font-bold block text-gray-500 uppercase text-[10px]">Religión</span> <span className="text-sm">{formData.religion}</span></div>
                    <div className="border-b pb-1 col-span-2"><span className="font-bold block text-gray-500 uppercase text-[10px]">Domicilio</span> <span className="text-sm">{formData.domicilio}</span></div>
                    <div className="border-b pb-1"><span className="font-bold block text-gray-500 uppercase text-[10px]">Teléfono</span> <span className="text-sm">{formData.telefono}</span></div>
                    <div className="border-b pb-1"><span className="font-bold block text-gray-500 uppercase text-[10px]">Lugar de Origen</span> <span className="text-sm">{formData.lugarOrigen}</span></div>
                    <div className="border-b pb-1 col-span-2"><span className="font-bold block text-gray-500 uppercase text-[10px]">Referido Por</span> <span className="text-sm">{formData.referidoPor}</span></div>
                </div>
            </PaginaBase>

            <PaginaBase title="Historia Clínica" headerInfo={formData}>
                <div className="space-y-6 p-4">
                    <div className="space-y-2">
                        <h3 className="font-bold border-b border-gray-300 pb-1 text-sm bg-gray-50 p-1">1. Filiación y Presentación</h3>
                        <p className="text-xs text-justify leading-relaxed whitespace-pre-wrap">{formData.filiacionPresentacion}</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold border-b border-gray-300 pb-1 text-sm bg-gray-50 p-1">2. Relación con el Clínico</h3>
                        <p className="text-xs text-justify leading-relaxed whitespace-pre-wrap">{formData.filiacionRelacion}</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold border-b border-gray-300 pb-1 text-sm bg-gray-50 p-1">3. Motivo de Consulta</h3>
                        <p className="text-xs text-justify leading-relaxed whitespace-pre-wrap">{formData.motivoConsulta}</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold border-b border-gray-300 pb-1 text-sm bg-gray-50 p-1">4. Historia del Padecimiento Actual</h3>
                        <p className="text-xs text-justify leading-relaxed whitespace-pre-wrap">{formData.historiaPadecimientoActual}</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold border-b border-gray-300 pb-1 text-sm bg-gray-50 p-1">5. Antecedentes Heredofamiliares</h3>
                        <p className="text-xs text-justify leading-relaxed whitespace-pre-wrap">{formData.antecedentesHeredofamiliares}</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold border-b border-gray-300 pb-1 text-sm bg-gray-50 p-1">6. Antecedentes Personales Patológicos</h3>
                        <p className="text-xs text-justify leading-relaxed whitespace-pre-wrap">{formData.antecedentesPersonalesPatologicos}</p>
                    </div>
                </div>
            </PaginaBase>

            <PaginaBase title="Familiograma y Dinámica Familiar" headerInfo={formData}>
                <div className="flex flex-col h-full gap-4">
                    <div className="flex-grow border flex items-center justify-center p-4 min-h-[400px]">
                        <GenogramaVisual familia={formData.familia} />
                    </div>
                    <div className="border p-4 bg-gray-50 rounded">
                        <p className="font-bold text-sm mb-2 border-b pb-1">Interpretación Sistémica:</p>
                        <p className="text-xs text-justify whitespace-pre-wrap">{formData.familiogramaInterpretacion}</p>
                    </div>
                </div>
            </PaginaBase>

            {/* --- CUESTIONARIOS COMPLETOS --- */}

            <PaginaBase title="Escala de Esferas de Vida (Cuestionario)" headerInfo={formData}>
                <div className="p-4">
                    <div className="grid grid-cols-1 gap-2 text-[10px]">
                        {/* Import ESFERAS_QUESTIONS logic needs access to constants. Assuming available via closure or props if not directly imported. Using hardcoded mock or re-importing in component file. */}
                        {/* Since I can't easily re-import inside this snippet, I will rely on existing imports or use the implementation pattern.*/}
                        {/* Note: In previous step I saw ESFERAS_QUESTIONS is imported. */}
                        {require('../../utils/constants').ESFERAS_QUESTIONS.map(q => (
                            <div key={q.id} className="flex justify-between items-center border-b border-gray-100 py-1">
                                <span className="flex-1 mr-2">{q.text}</span>
                                <span className="font-bold border px-2 rounded bg-gray-50">{formData[`esferaQ${q.id}`]}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </PaginaBase>

            <PaginaBase title="Escala de Esferas de Vida (Resultados)" headerInfo={formData}>
                <div className="flex flex-col items-center h-full p-4">
                    <div className="w-[10cm] h-[10cm] mb-6"><GraficaEsferasVisual data={resultados.esferas} /></div>
                    <div className="w-full mb-6">
                        <h4 className="font-bold border-b mb-2 text-sm">Puntajes Totales por Área:</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                            {Object.entries(resultados.esferas).map(([k, v]) => (
                                <div key={k} className="border p-2 rounded flex justify-between bg-gray-50"><span>{k}</span> <strong>{v} / 25</strong></div>
                            ))}
                        </div>
                    </div>
                    <div className="border p-4 w-full bg-gray-50 rounded">
                        <p className="font-bold text-sm mb-1">Interpretación:</p>
                        <p className="text-xs text-justify whitespace-pre-wrap">{formData.esferasInterpretacion}</p>
                    </div>
                </div>
            </PaginaBase>

            <PaginaBase title="CEPER III - Cuestionario de Personalidad" headerInfo={formData}>
                <div className="p-4">
                    <p className="text-[10px] text-gray-500 mb-4 italic text-center">* Se muestran las respuestas registradas (Valor del 0 al 7, donde 0=Falso/Nunca y 7=Verdadero/Siempre) *</p>
                    <div className="grid grid-cols-4 gap-2 text-[9px]">
                        {Array.from({ length: 170 }, (_, i) => i + 1).map(num => (
                            <div key={num} className="border p-1 rounded flex justify-between items-center break-inside-avoid">
                                <span className="text-gray-500 font-bold">Item {num}</span>
                                <span className="font-black bg-gray-100 px-1 rounded">{formData[`ceperQ${num}`] || '-'}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </PaginaBase>

            <PaginaBase title="CEPER III - Perfil de Resultados" headerInfo={formData}>
                <div className="p-4">
                    <h3 className="font-bold mb-4 border-b pb-2">Perfil Gráfico de Estilos de Personalidad</h3>
                    <div className="space-y-2 mb-8">
                        {Object.entries(resultados.ceper).map(([s, v]) => (
                            <div key={s} className="flex items-center text-xs">
                                <span className="w-32 font-bold truncate">{s}</span>
                                <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden mx-2">
                                    <div className="h-full bg-slate-700" style={{ width: `${Math.min((v / 140) * 100, 100)}%` }}></div>
                                </div>
                                <span className="w-8 text-right font-mono">{v}</span>
                            </div>
                        ))}
                    </div>
                    <div className="border-t pt-4">
                        <p className="font-bold text-sm mb-2">Interpretación Clínica:</p>
                        <p className="text-xs text-justify leading-relaxed whitespace-pre-wrap">{formData.ceperInterpretacion}</p>
                    </div>
                </div>
            </PaginaBase>

            <PaginaBase title="Escala de Ansiedad de Hamilton (HAM-A)" headerInfo={formData}>
                <div className="p-4">
                    <div className="mb-6 border-b pb-4">
                        <div className="flex justify-between items-end mb-2">
                            <h4 className="font-bold text-lg">Puntaje Total: {resultados.hama.score}</h4>
                            <span className="bg-slate-100 px-3 py-1 rounded-full font-bold text-sm">{resultados.hama.text}</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2 text-xs">
                        {require('../../utils/constants').HAMA_QUESTIONS.map((q, i) => (
                            <div key={i} className="flex justify-between items-center border-b border-gray-100 py-2 last:border-0">
                                <span className="font-medium">{q}</span>
                                <span className="font-bold bg-gray-50 px-3 py-1 rounded min-w-[3rem] text-center">{formData[`hama${i + 1}`]}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </PaginaBase>

            <PaginaBase title="Inventario de Depresión de Beck (BDI-II)" headerInfo={formData}>
                <div className="p-4">
                    <div className="mb-6 border-b pb-4">
                        <div className="flex justify-between items-end mb-2">
                            <h4 className="font-bold text-lg">Puntaje Total: {resultados.bdi.score}</h4>
                            <span className="bg-slate-100 px-3 py-1 rounded-full font-bold text-sm">{resultados.bdi.text}</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-1 text-[10px]">
                        {require('../../utils/constants').BDI_ITEMS.map((label, i) => (
                            <div key={i} className="flex justify-between items-center border-b border-gray-100 py-1 last:border-0">
                                <span className="font-medium truncate pr-4">{label}</span>
                                <span className="font-bold bg-gray-50 px-2 py-0.5 rounded min-w-[2rem] text-center">{formData[`bdi${i + 1}`]}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </PaginaBase>

            <PaginaBase title="Test de Inteligencia OTIS" headerInfo={formData}>
                <div className="p-4 space-y-6">
                    <div className="grid grid-cols-3 gap-4 border p-4 rounded bg-gray-50 text-center">
                        <div>
                            <span className="block text-[10px] uppercase font-bold text-gray-500">Aciertos</span>
                            <span className="text-xl font-black">{formData.otisAciertos}</span>
                        </div>
                        <div>
                            <span className="block text-[10px] uppercase font-bold text-gray-500">Errores</span>
                            <span className="text-xl font-black">{formData.otisErrores}</span>
                        </div>
                        <div>
                            <span className="block text-[10px] uppercase font-bold text-gray-500">Diagnóstico</span>
                            <span className="text-lg font-bold text-blue-900">{formData.otisDiagnostico}</span>
                        </div>
                    </div>

                    <div className="text-[10px]">
                        <h4 className="font-bold border-b mb-2">Hoja de Respuestas:</h4>
                        <div className="grid grid-cols-5 md:grid-cols-10 gap-1">
                            {Array.from({ length: 75 }, (_, i) => i + 1).map(num => (
                                <div key={num} className="border p-1 flex justify-between items-center rounded px-2">
                                    <span className="text-gray-400 font-bold">{num}</span>
                                    <span className="font-black">{formData[`otis${num}`]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </PaginaBase>

            <PaginaBase title="Test de la Figura Humana (Machover)" headerInfo={formData}>
                <div className="p-4 space-y-4">
                    <div className="bg-gray-50 p-4 rounded border">
                        <h4 className="font-bold text-xs uppercase mb-2 text-gray-500">Historia Narrativa del Dibujo</h4>
                        <p className="text-sm italic text-justify whitespace-pre-wrap">"{formData.machoverHistoria || 'Sin historia registrada'}"</p>
                    </div>

                    <table className="w-full text-xs border-collapse">
                        <thead>
                            <tr className="bg-slate-100">
                                <th className="border p-2 w-1/4 text-left">Indicador</th>
                                <th className="border p-2 w-1/3 text-left">Descripción Observada</th>
                                <th className="border p-2 w-1/3 text-left">Interpretación</th>
                            </tr>
                        </thead>
                        <tbody>
                            {MACHOVER_INDICADORES.map((ind, i) => (
                                <tr key={i} className="border-b last:border-0 hover:bg-gray-50">
                                    <td className="border p-2 font-bold text-gray-700">{ind}</td>
                                    <td className="border p-2">{formData[`machoverInd${i}`]}</td>
                                    <td className="border p-2 bg-slate-50/50">{formData[`machoverInt${i}`]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="border border-slate-200 p-4 rounded mt-4">
                        <p className="font-bold text-sm mb-2 uppercase text-slate-700">Integración Global del Test:</p>
                        <p className="text-xs text-justify leading-relaxed whitespace-pre-wrap">{formData.machoverInterpretacionGlobal}</p>
                    </div>
                </div>
            </PaginaBase>

            <PaginaBase title="Notas de Evolución (S.O.A.P.)" headerInfo={formData}>
                <div className="space-y-4 p-4">
                    {formData.notasClinicas.length === 0 && <p className="text-center text-gray-400 italic py-8">No hay notas clínicas registradas.</p>}
                    {formData.notasClinicas.map((n, i) => (
                        <div key={i} className="border border-gray-300 rounded-lg overflow-hidden break-inside-avoid shadow-sm mb-4">
                            <div className="bg-slate-100 p-2 font-bold text-xs border-b flex justify-between items-center text-slate-800">
                                <span className="uppercase">Sesión {i + 1}</span>
                                <span>{n.fecha}</span>
                            </div>
                            <div className="p-3 grid grid-cols-1 gap-2 text-xs bg-white">
                                <div className="grid grid-cols-[20px_1fr] gap-2"><strong className="text-slate-900">S</strong> <p className="text-justify text-gray-700">{n.s}</p></div>
                                <div className="grid grid-cols-[20px_1fr] gap-2"><strong className="text-slate-900">O</strong> <p className="text-justify text-gray-700">{n.o}</p></div>
                                <div className="grid grid-cols-[20px_1fr] gap-2 bg-slate-50 py-1 rounded"><strong className="text-slate-900 pl-1">A</strong> <p className="text-justify font-medium text-slate-800">{n.a}</p></div>
                                <div className="grid grid-cols-[20px_1fr] gap-2"><strong className="text-slate-900">P</strong> <p className="text-justify text-gray-700">{n.p}</p></div>
                            </div>
                        </div>
                    ))}
                </div>
            </PaginaBase>

            <PaginaBase title="Informe Clínico Final" headerInfo={formData}>
                <div className="space-y-6 p-4">
                    <div className="space-y-2">
                        <h3 className="font-bold text-sm bg-slate-100 p-2 border-l-4 border-slate-500 uppercase">Resumen del Caso</h3>
                        <p className="text-xs text-justify leading-relaxed whitespace-pre-wrap pl-2">{formData.informeResumen}</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-sm bg-slate-100 p-2 border-l-4 border-slate-500 uppercase">Impresión Diagnóstica Multiaxial</h3>
                        <p className="text-xs text-justify leading-relaxed whitespace-pre-wrap pl-2 font-medium">{formData.informeDiagnostico}</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-sm bg-slate-100 p-2 border-l-4 border-slate-500 uppercase">Pronóstico</h3>
                        <p className="text-xs text-justify leading-relaxed whitespace-pre-wrap pl-2">{formData.informePronostico}</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-sm bg-slate-100 p-2 border-l-4 border-slate-500 uppercase">Recomendaciones Terapéuticas</h3>
                        <p className="text-xs text-justify leading-relaxed whitespace-pre-wrap pl-2">{formData.informeRecomendaciones}</p>
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-300 text-center w-64 mx-auto">
                        <div className="font-bold text-sm text-slate-900">{formData.pasanteHeader.replace('Pasante: ', '')}</div>
                        <div className="text-xs text-gray-500 uppercase mt-1">Nombre y Firma del Responsable</div>
                    </div>
                </div>
            </PaginaBase>
        </div>
    );
};


export default PrintView;

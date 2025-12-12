import React from 'react';
import { ArrowLeft } from 'lucide-react';
import PaginaBase from '../layout/PaginaBase';
import GenogramaVisual from '../visuals/GenogramaVisual';
import GraficaEsferasVisual from '../visuals/GraficaEsferasVisual';
import { AVISO_PRIVACIDAD_TEXT, CONSENTIMIENTO_INFORMADO_TEXT, MACHOVER_INDICADORES, ESFERAS_QUESTIONS, HAMA_QUESTIONS, BDI_ITEMS, OTIS_QUESTIONS } from '../../utils/constants';

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
                        <div className="text-6xl font-black text-slate-900 tracking-tighter italic font-serif">ives</div>
                        <div className="text-xl font-bold text-slate-600 uppercase tracking-[0.2em] border-t border-slate-300 pt-4 mt-2">Universidad IVES</div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-slate-800 uppercase font-serif">{formData.especialidad}</h2>
                        <p className="text-slate-500 text-sm uppercase tracking-wider font-semibold">Facultad de Posgrados</p>
                    </div>
                    <div className="my-8 py-8 border-y-2 border-slate-900 w-full">
                        <h1 className="text-5xl font-black text-slate-900 uppercase leading-none font-sans">Expediente Clínico<br /><span className="text-blue-900">Integral</span></h1>
                        <div className="text-slate-500 mt-4 font-mono text-lg">Folio: <span className="text-slate-900 font-bold">{formData.folio}</span></div>
                    </div>
                    <div className="space-y-8 w-full max-w-lg">
                        <div className="mb-4">
                            <p className="text-xs text-slate-400 uppercase tracking-widest mb-1 font-bold">Catedrático Supervisor</p>
                            <p className="text-xl font-bold text-slate-800">{formData.catedratico}</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 uppercase tracking-widest mb-1 font-bold">Psicólogo en Formación</p>
                            <p className="text-2xl font-bold text-slate-900">{formData.pasanteHeader.replace('Pasante: ', '')}</p>
                            <div className="flex justify-center gap-6 text-sm text-slate-600 mt-2 font-medium">
                                <span>Matrícula: {formData.presentaMatricula}</span>
                                <span>|</span>
                                <span>Grupo: {formData.grupo}</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-sm text-slate-500 font-bold uppercase mt-auto">
                        Xalapa, Ver. a {formData.fechaElaboracion}
                    </div>
                </div>
            </PaginaBase>

            <PaginaBase title="Introducción" headerInfo={formData}>
                <div className="p-8 text-justify leading-loose whitespace-pre-wrap font-serif text-base">
                    {formData.introduccionTexto}
                </div>
            </PaginaBase>

            <PaginaBase title="Documentos Legales" headerInfo={formData}>
                <div className="space-y-8 p-4 text-xs text-justify flex flex-col h-full">
                    <div className="space-y-2">
                        <h3 className="font-bold text-center border-b-2 border-slate-800 pb-1 text-sm uppercase">Aviso de Privacidad Integral</h3>
                        <p className="whitespace-pre-wrap leading-tight text-gray-600">{AVISO_PRIVACIDAD_TEXT}</p>
                        <div className="pt-4 break-inside-avoid">
                            <div className="border-t border-black w-64 mx-auto pt-1 text-center font-bold">Firma de Aceptación (Paciente)</div>
                        </div>
                    </div>

                    <div className="border-t-2 border-dashed border-gray-300 my-4"></div>

                    <div className="space-y-2">
                        <h3 className="font-bold text-center border-b-2 border-slate-800 pb-1 text-sm uppercase">Consentimiento Informado</h3>
                        <p className="whitespace-pre-wrap leading-tight text-gray-600">{CONSENTIMIENTO_INFORMADO_TEXT}</p>
                        <div className="pt-8 flex justify-between px-8 break-inside-avoid">
                            <div className="border-t border-black w-48 text-center pt-1 font-bold">Firma del Paciente</div>
                            <div className="border-t border-black w-48 text-center pt-1 font-bold">Firma del Psicólogo</div>
                        </div>
                    </div>
                </div>
            </PaginaBase>

            <PaginaBase title="I. Datos Generales" headerInfo={formData}>
                <div className="grid grid-cols-2 gap-y-6 gap-x-12 text-sm p-6">
                    <div className="border-b border-gray-200 pb-1"><span className="font-bold block text-slate-500 uppercase text-[10px] tracking-wide">Nombre Completo</span> <span className="text-base font-semibold text-slate-900">{formData.pacienteNombre}</span></div>
                    <div className="border-b border-gray-200 pb-1"><span className="font-bold block text-slate-500 uppercase text-[10px] tracking-wide">Edad</span> <span className="text-base font-semibold text-slate-900">{formData.edad} años</span></div>
                    <div className="border-b border-gray-200 pb-1"><span className="font-bold block text-slate-500 uppercase text-[10px] tracking-wide">Fecha de Nacimiento</span> <span className="text-base font-semibold text-slate-900">{formData.fechaNacimiento}</span></div>
                    <div className="border-b border-gray-200 pb-1"><span className="font-bold block text-slate-500 uppercase text-[10px] tracking-wide">Sexo</span> <span className="text-base font-semibold text-slate-900">{formData.sexo === 'F' ? 'Femenino' : 'Masculino'}</span></div>
                    <div className="border-b border-gray-200 pb-1"><span className="font-bold block text-slate-500 uppercase text-[10px] tracking-wide">Estado Civil</span> <span className="text-base font-semibold text-slate-900">{formData.estadoCivil}</span></div>
                    <div className="border-b border-gray-200 pb-1"><span className="font-bold block text-slate-500 uppercase text-[10px] tracking-wide">Ocupación</span> <span className="text-base font-semibold text-slate-900">{formData.ocupacion}</span></div>
                    <div className="border-b border-gray-200 pb-1"><span className="font-bold block text-slate-500 uppercase text-[10px] tracking-wide">Escolaridad</span> <span className="text-base font-semibold text-slate-900">{formData.escolaridad}</span></div>
                    <div className="border-b border-gray-200 pb-1"><span className="font-bold block text-slate-500 uppercase text-[10px] tracking-wide">Religión</span> <span className="text-base font-semibold text-slate-900">{formData.religion}</span></div>
                    <div className="border-b border-gray-200 pb-1 col-span-2"><span className="font-bold block text-slate-500 uppercase text-[10px] tracking-wide">Domicilio</span> <span className="text-base font-semibold text-slate-900">{formData.domicilio}</span></div>
                    <div className="border-b border-gray-200 pb-1"><span className="font-bold block text-slate-500 uppercase text-[10px] tracking-wide">Teléfono</span> <span className="text-base font-semibold text-slate-900">{formData.telefono}</span></div>
                    <div className="border-b border-gray-200 pb-1"><span className="font-bold block text-slate-500 uppercase text-[10px] tracking-wide">Lugar de Origen</span> <span className="text-base font-semibold text-slate-900">{formData.lugarOrigen}</span></div>
                    <div className="border-b border-gray-200 pb-1 col-span-2 bg-slate-50 p-2"><span className="font-bold block text-slate-500 uppercase text-[10px] tracking-wide">Referido Por</span> <span className="text-base font-bold text-blue-900">{formData.referidoPor}</span></div>
                </div>
            </PaginaBase>

            <PaginaBase title="II. Historia Clínica" headerInfo={formData}>
                <div className="space-y-8 p-6">
                    <div className="space-y-2 break-inside-avoid">
                        <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider border-b-2 border-slate-200 mb-2">1. Filiación y Presentación</h3>
                        <p className="text-sm text-justify leading-relaxed whitespace-pre-wrap font-serif text-slate-800">{formData.filiacionPresentacion}</p>
                    </div>
                    <div className="space-y-2 break-inside-avoid">
                        <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider border-b-2 border-slate-200 mb-2">2. Relación con el Clínico</h3>
                        <p className="text-sm text-justify leading-relaxed whitespace-pre-wrap font-serif text-slate-800">{formData.filiacionRelacion}</p>
                    </div>
                    <div className="space-y-2 break-inside-avoid">
                        <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider border-b-2 border-slate-200 mb-2">3. Motivo de Consulta</h3>
                        <p className="text-sm text-justify leading-relaxed whitespace-pre-wrap font-serif text-slate-800 italic bg-slate-50 p-4 border-l-4 border-slate-400">"{formData.motivoConsulta}"</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider border-b-2 border-slate-200 mb-2">4. Historia del Padecimiento Actual</h3>
                        <p className="text-sm text-justify leading-relaxed whitespace-pre-wrap font-serif text-slate-800">{formData.historiaPadecimientoActual}</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider border-b-2 border-slate-200 mb-2">5. Antecedentes Heredofamiliares</h3>
                        <p className="text-sm text-justify leading-relaxed whitespace-pre-wrap font-serif text-slate-800">{formData.antecedentesHeredofamiliares}</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider border-b-2 border-slate-200 mb-2">6. Antecedentes Personales Patológicos</h3>
                        <p className="text-sm text-justify leading-relaxed whitespace-pre-wrap font-serif text-slate-800">{formData.antecedentesPersonalesPatologicos}</p>
                    </div>
                </div>
            </PaginaBase>

            <PaginaBase title="III. Familiograma y Dinámica Familiar" headerInfo={formData}>
                <div className="flex flex-col h-full gap-8 p-4">
                    <div className="flex-grow border-2 border-slate-100 flex items-center justify-center p-4 min-h-[400px]">
                        <GenogramaVisual familia={formData.familia} />
                    </div>
                    <div className="border-t-4 border-slate-200 pt-4">
                        <p className="font-bold text-sm mb-2 uppercase text-slate-700">Interpretación Sistémica:</p>
                        <p className="text-sm text-justify whitespace-pre-wrap font-serif leading-relaxed">{formData.familiogramaInterpretacion}</p>
                    </div>
                </div>
            </PaginaBase>

            {/* --- CUESTIONARIOS COMPLETOS --- */}

            <PaginaBase title="IV. Batería Psicométrica (Resultados)" headerInfo={formData}>
                <div className="space-y-12 p-4">
                    {/* ESFERAS */}
                    <div className="break-inside-avoid">
                        <h3 className="text-lg font-bold border-b-2 border-slate-800 mb-4 uppercase">1. Escala de Esferas de Vida</h3>
                        <div className="flex gap-8 items-start">
                            <div className="w-1/3"><GraficaEsferasVisual data={resultados.esferas} /></div>
                            <div className="w-2/3 space-y-4">
                                <div className="grid grid-cols-2 gap-2 text-xs">
                                    {Object.entries(resultados.esferas).map(([k, v]) => (
                                        <div key={k} className="border-b flex justify-between"><span>{k}</span> <strong>{v}</strong></div>
                                    ))}
                                </div>
                                <div className="bg-slate-50 p-4 rounded text-sm text-justify font-serif">
                                    {formData.esferasInterpretacion}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CEPER */}
                    <div className="break-inside-avoid">
                        <h3 className="text-lg font-bold border-b-2 border-slate-800 mb-4 uppercase">2. Perfil de Personalidad (CEPER III)</h3>
                        <div className="mb-4">
                            {Object.entries(resultados.ceper).slice(0, 5).map(([s, v]) => (
                                <div key={s} className="flex items-center text-xs mb-1">
                                    <span className="w-32 font-bold truncate">{s}</span>
                                    <div className="flex-1 h-2 bg-gray-100 mx-2"><div className="h-full bg-slate-800" style={{ width: `${Math.min((v / 140) * 100, 100)}%` }}></div></div>
                                    <span className="w-8 font-mono">{v}</span>
                                </div>
                            ))}
                            <div className="text-xs text-gray-400 italic mt-1">(Extracto de puntajes más altos)</div>
                        </div>
                        <div className="bg-slate-50 p-4 rounded text-sm text-justify font-serif">
                            {formData.ceperInterpretacion}
                        </div>
                    </div>

                    {/* HAMA & BDI */}
                    <div className="grid grid-cols-2 gap-8 break-inside-avoid">
                        <div>
                            <h3 className="text-md font-bold border-b border-slate-400 mb-2 uppercase">3. Ansiedad (HAM-A)</h3>
                            <div className="text-3xl font-black text-slate-800 mb-2">{resultados.hama.score} pts</div>
                            <div className="font-bold text-slate-600 bg-slate-100 p-2 text-center rounded">{resultados.hama.text}</div>
                        </div>
                        <div>
                            <h3 className="text-md font-bold border-b border-slate-400 mb-2 uppercase">4. Depresión (BDI-II)</h3>
                            <div className="text-3xl font-black text-slate-800 mb-2">{resultados.bdi.score} pts</div>
                            <div className="font-bold text-slate-600 bg-slate-100 p-2 text-center rounded">{resultados.bdi.text}</div>
                        </div>
                    </div>

                    {/* OTIS */}
                    <div className="break-inside-avoid">
                        <h3 className="text-lg font-bold border-b-2 border-slate-800 mb-4 uppercase">5. Inteligencia (OTIS Sencillo)</h3>
                        <div className="flex justify-between items-center bg-slate-50 p-6 border rounded">
                            <div className="text-center">
                                <div className="text-xs uppercase font-bold text-gray-500">Aciertos</div>
                                <div className="text-4xl font-black">{formData.otisAciertos}</div>
                            </div>
                            <div className="text-center flex-1 px-8">
                                <div className="text-xs uppercase font-bold text-gray-500 mb-1">Diagnóstico Intelectual</div>
                                <div className="text-xl font-bold text-blue-900 border-b-2 border-blue-900 pb-1">{formData.otisDiagnostico}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xs uppercase font-bold text-gray-500">Errores</div>
                                <div className="text-4xl font-black text-gray-400">{formData.otisErrores}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </PaginaBase>


            <PaginaBase title="V. Test de la Figura Humana (Machover)" headerInfo={formData}>
                <div className="p-6 space-y-6">
                    <div className="bg-slate-50 p-6 border-l-4 border-slate-800">
                        <h4 className="font-bold text-xs uppercase mb-3 text-slate-500 tracking-widest">Narrativa del Paciente</h4>
                        <p className="text-sm italic text-justify whitespace-pre-wrap font-serif leading-relaxed">"{formData.machoverHistoria || 'Sin historia registrada'}"</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm uppercase mb-3 text-slate-800">Indicadores Proyectivos Relevantes</h4>
                        <table className="w-full text-xs border border-slate-300">
                            <thead className="bg-slate-800 text-white">
                                <tr>
                                    <th className="p-3 w-1/4 text-left uppercase tracking-wider">Indicador</th>
                                    <th className="p-3 w-1/3 text-left uppercase tracking-wider">Descripción</th>
                                    <th className="p-3 w-1/3 text-left uppercase tracking-wider">Interpretación Dinámica</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                {MACHOVER_INDICADORES.map((ind, i) => (
                                    <tr key={i} className="hover:bg-slate-50">
                                        <td className="p-3 font-bold text-slate-700 bg-slate-50">{ind}</td>
                                        <td className="p-3">{formData[`machoverInd${i}`]}</td>
                                        <td className="p-3 italic text-slate-600">{formData[`machoverInt${i}`]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="border-t-4 border-slate-800 pt-6">
                        <p className="font-bold text-sm mb-3 uppercase text-slate-900 tracking-wider">Integración Global de la Prueba:</p>
                        <p className="text-sm text-justify leading-relaxed whitespace-pre-wrap font-serif">{formData.machoverInterpretacionGlobal}</p>
                    </div>
                </div>
            </PaginaBase>

            <PaginaBase title="VI. Notas de Evolución (S.O.A.P.)" headerInfo={formData}>
                <div className="space-y-6 p-6">
                    {formData.notasClinicas.length === 0 && <p className="text-center text-gray-400 italic py-8">No hay notas clínicas registradas.</p>}
                    {formData.notasClinicas.map((n, i) => (
                        <div key={i} className="border-2 border-slate-200 rounded-none break-inside-avoid">
                            <div className="bg-slate-800 text-white p-3 font-bold text-xs flex justify-between items-center">
                                <span className="uppercase tracking-widest">Sesión {i + 1}</span>
                                <span className="font-mono">{n.fecha}</span>
                            </div>
                            <div className="p-4 grid grid-cols-1 gap-3 text-sm">
                                <div className="grid grid-cols-[30px_1fr] gap-2 border-b border-dashed border-slate-200 pb-2"><strong className="text-slate-900 font-black text-lg">S</strong> <p className="text-justify text-slate-700 font-serif">{n.s}</p></div>
                                <div className="grid grid-cols-[30px_1fr] gap-2 border-b border-dashed border-slate-200 pb-2"><strong className="text-slate-900 font-black text-lg">O</strong> <p className="text-justify text-slate-700 font-serif">{n.o}</p></div>
                                <div className="grid grid-cols-[30px_1fr] gap-2 border-b border-dashed border-slate-200 pb-2 bg-blue-50/50 -mx-4 px-4 py-2"><strong className="text-blue-900 font-black text-lg">A</strong> <p className="text-justify font-bold text-blue-900 font-serif">{n.a}</p></div>
                                <div className="grid grid-cols-[30px_1fr] gap-2 pt-1"><strong className="text-green-700 font-black text-lg">P</strong> <p className="text-justify text-slate-700 font-serif">{n.p}</p></div>
                            </div>
                        </div>
                    ))}
                </div>
            </PaginaBase>

            <PaginaBase title="VII. Informe Clínico Final" headerInfo={formData}>
                <div className="space-y-8 p-8">
                    <div className="space-y-3 break-inside-avoid">
                        <h3 className="font-black text-base text-slate-900 uppercase tracking-widest border-b-4 border-slate-900 pb-2 mb-4">1. Resumen del Caso</h3>
                        <p className="text-sm text-justify leading-loose whitespace-pre-wrap font-serif text-slate-800">{formData.informeResumen}</p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-black text-base text-slate-900 uppercase tracking-widest border-b-4 border-slate-900 pb-2 mb-4">2. Diagnóstico Multiaxial</h3>
                        <div className="bg-slate-50 p-6 border-l-8 border-slate-900">
                            <p className="text-sm text-justify leading-relaxed whitespace-pre-wrap font-medium font-mono text-slate-800">{formData.informeDiagnostico}</p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-black text-base text-slate-900 uppercase tracking-widest border-b-4 border-slate-900 pb-2 mb-4">3. Pronóstico</h3>
                        <p className="text-sm text-justify leading-loose whitespace-pre-wrap font-serif text-slate-800">{formData.informePronostico}</p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-black text-base text-slate-900 uppercase tracking-widest border-b-4 border-slate-900 pb-2 mb-4">4. Recomendaciones</h3>
                        <p className="text-sm text-justify leading-loose whitespace-pre-wrap font-serif text-slate-800">{formData.informeRecomendaciones}</p>
                    </div>

                    <div className="mt-24 pt-8 border-t-2 border-slate-900 text-center w-80 mx-auto break-inside-avoid">
                        <div className="font-bold text-base text-slate-900 uppercase">{formData.pasanteHeader.replace('Pasante: ', '')}</div>
                        <div className="text-xs text-slate-500 uppercase mt-2 tracking-widest font-bold">Psicólogo Responsable</div>
                        <div className="text-[10px] text-slate-400 uppercase mt-1">Cédula Profesional: {formData.presentaMatricula}</div>
                    </div>
                </div>
            </PaginaBase>
        </div>
        </div >
    );
};


export default PrintView;

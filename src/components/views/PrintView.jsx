import React from 'react';
import { ArrowLeft } from 'lucide-react';
import PaginaBase from '../layout/PaginaBase';
import GenogramaVisual from '../visuals/GenogramaVisual';
import GraficaEsferasVisual from '../visuals/GraficaEsferasVisual';
import { AVISO_PRIVACIDAD_TEXT, CONSENTIMIENTO_INFORMADO_TEXT, MACHOVER_INDICADORES } from '../../utils/constants';

const PrintView = ({ formData, resultados, setPrintMode }) => {
    return (
        <div className="print-container bg-slate-100 min-h-screen">
            {/* Global Print Styles */}
            <style>{`
                @media print {
                    @page {
                        size: letter;
                        margin: 1.5cm;
                    }
                    body {
                        background-color: white;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                    .print-container {
                        background: white;
                    }
                    /* Forced Page Breaks for Main Sections */
                    .print-section-start {
                        break-before: page;
                        page-break-before: always;
                    }
                    /* Prevent breaking inside content atoms */
                    .avoid-break {
                        break-inside: avoid;
                        page-break-inside: avoid;
                    }
                    /* Utilities */
                    .no-print {
                        display: none !important;
                    }
                    /* Ensure PaginaBase fits within @page margins without extra padding doubling up */
                    /* Note: PaginaBase uses styled divs, we might need to override if it has hardcoded padding */
                }
            `}</style>

            {/* Floating Back Button */}
            <div className="fixed top-6 left-6 z-50 no-print">
                <button
                    onClick={() => setPrintMode(false)}
                    className="bg-slate-900 text-white px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-3 hover:bg-slate-800 transition-all"
                >
                    <ArrowLeft size={20} />
                    Volver al Editor
                </button>
            </div>

            <div className="flex flex-col items-center gap-8 py-8 print:block print:p-0 print:gap-0">

                {/* --- PORTADA --- */}
                <div className="print-section-start first:break-before-auto">
                    <PaginaBase title="Portada" showHeader={false} showFooter={false} headerInfo={formData}>
                        <div className="flex flex-col items-center h-[22cm] text-center justify-between py-12">
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
                                </div>
                            </div>
                            <div className="text-sm text-slate-500 font-bold uppercase mt-auto">
                                Xalapa, Ver. a {formData.fechaElaboracion}
                            </div>
                        </div>
                    </PaginaBase>
                </div>

                {/* --- INTRODUCCIÓN --- */}
                <div className="print-section-start">
                    <PaginaBase title="Introducción" headerInfo={formData}>
                        <div className="p-8 text-justify leading-loose whitespace-pre-wrap font-serif text-base">
                            {formData.introduccionTexto}
                        </div>
                    </PaginaBase>
                </div>

                {/* --- AVISO DE PRIVACIDAD --- */}
                <div className="print-section-start">
                    <PaginaBase title="Aviso de Privacidad" headerInfo={formData}>
                        <div className="flex flex-col p-8 print:block">
                            <div className="space-y-6 flex-grow">
                                <div className="text-center border-b-2 border-slate-900 pb-2 mb-8">
                                    <h3 className="font-bold text-lg uppercase tracking-widest text-slate-900">Aviso de Privacidad Integral</h3>
                                </div>
                                <div className="whitespace-pre-wrap leading-relaxed text-justify text-xs text-slate-700 font-serif">
                                    {AVISO_PRIVACIDAD_TEXT}
                                </div>
                            </div>
                            <div className="mt-16 pt-8 avoid-break">
                                <div className="border-t border-slate-900 w-64 mx-auto pt-2 text-center font-bold text-sm uppercase tracking-wide text-slate-800">Firma de Aceptación (Paciente)</div>
                            </div>
                        </div>
                    </PaginaBase>
                </div>

                {/* --- CONSENTIMIENTO INFORMADO --- */}
                <div className="print-section-start">
                    <PaginaBase title="Consentimiento Informado" headerInfo={formData}>
                        <div className="flex flex-col p-8 print:block">
                            <div className="space-y-6 flex-grow">
                                <div className="text-center border-b-2 border-slate-900 pb-2 mb-8">
                                    <h3 className="font-bold text-lg uppercase tracking-widest text-slate-900">Consentimiento Informado</h3>
                                </div>
                                <div className="whitespace-pre-wrap leading-relaxed text-justify text-xs text-slate-700 font-serif">
                                    {CONSENTIMIENTO_INFORMADO_TEXT}
                                </div>
                            </div>
                            <div className="mt-16 pt-8 flex justify-between px-12 avoid-break gap-8">
                                <div className="flex-1">
                                    <div className="border-t border-slate-900 w-full pt-2 text-center font-bold text-sm uppercase tracking-wide text-slate-800">Firma del Paciente</div>
                                </div>
                                <div className="flex-1">
                                    <div className="border-t border-slate-900 w-full pt-2 text-center font-bold text-sm uppercase tracking-wide text-slate-800">Firma del Psicólogo</div>
                                </div>
                            </div>
                        </div>
                    </PaginaBase>
                </div>

                {/* --- I. DATOS GENERALES --- */}
                <div className="print-section-start">
                    <PaginaBase title="I. Datos Generales" headerInfo={formData}>
                        <div className="grid grid-cols-2 gap-y-8 gap-x-12 text-sm p-8 bg-white">
                            <div className="border-b border-gray-300 pb-1"><span className="font-bold block text-slate-500 uppercase text-[10px] tracking-widest mb-1">Nombre Completo</span> <span className="text-lg font-serif font-medium text-slate-900">{formData.pacienteNombre}</span></div>
                            <div className="border-b border-gray-300 pb-1"><span className="font-bold block text-slate-500 uppercase text-[10px] tracking-widest mb-1">Edad</span> <span className="text-lg font-serif font-medium text-slate-900">{formData.edad} años</span></div>
                            <div className="border-b border-gray-300 pb-1"><span className="font-bold block text-slate-500 uppercase text-[10px] tracking-widest mb-1">Fecha de Nacimiento</span> <span className="text-lg font-serif font-medium text-slate-900">{formData.fechaNacimiento}</span></div>
                            <div className="border-b border-gray-300 pb-1"><span className="font-bold block text-slate-500 uppercase text-[10px] tracking-widest mb-1">Sexo</span> <span className="text-lg font-serif font-medium text-slate-900">{formData.sexo === 'F' ? 'Femenino' : 'Masculino'}</span></div>
                            <div className="border-b border-gray-300 pb-1"><span className="font-bold block text-slate-500 uppercase text-[10px] tracking-widest mb-1">Estado Civil</span> <span className="text-lg font-serif font-medium text-slate-900">{formData.estadoCivil}</span></div>
                            <div className="border-b border-gray-300 pb-1"><span className="font-bold block text-slate-500 uppercase text-[10px] tracking-widest mb-1">Ocupación</span> <span className="text-lg font-serif font-medium text-slate-900">{formData.ocupacion}</span></div>
                            <div className="border-b border-gray-300 pb-1"><span className="font-bold block text-slate-500 uppercase text-[10px] tracking-widest mb-1">Escolaridad</span> <span className="text-lg font-serif font-medium text-slate-900">{formData.escolaridad}</span></div>
                            <div className="border-b border-gray-300 pb-1"><span className="font-bold block text-slate-500 uppercase text-[10px] tracking-widest mb-1">Religión</span> <span className="text-lg font-serif font-medium text-slate-900">{formData.religion}</span></div>
                            <div className="border-b border-gray-300 pb-1 col-span-2"><span className="font-bold block text-slate-500 uppercase text-[10px] tracking-widest mb-1">Domicilio</span> <span className="text-lg font-serif font-medium text-slate-900">{formData.domicilio}</span></div>
                            <div className="border-b border-gray-300 pb-1 col-span-2 bg-slate-50 p-4 border rounded mt-4"><span className="font-bold block text-slate-500 uppercase text-[10px] tracking-widest mb-1">Referido Por</span> <span className="text-lg font-bold text-blue-900 font-serif">{formData.referidoPor}</span></div>
                        </div>
                    </PaginaBase>
                </div>

                {/* --- II. HISTORIA CLÍNICA --- */}
                <div className="print-section-start">
                    <PaginaBase title="II. Historia Clínica Psicológica" headerInfo={formData}>
                        <div className="text-[11px] space-y-8">

                            {/* Filiación */}
                            <div className="space-y-4 avoid-break">
                                <h3 className="font-bold text-sm bg-slate-100 p-2 border-l-4 border-slate-800 print:bg-gray-100">II. Filiación</h3>
                                <div className="border border-slate-800 p-0 shadow-sm">
                                    <div className="grid grid-cols-2">
                                        <div className="border-r border-slate-800 p-2 bg-slate-100 font-bold text-[10px] uppercase tracking-wide text-center">Presentación del Consultante</div>
                                        <div className="p-2 bg-slate-100 font-bold text-[10px] uppercase tracking-wide text-center">Relación con el clínico</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="border-r border-slate-800 border-t border-slate-800 p-3 text-justify leading-snug whitespace-pre-wrap font-serif text-[11px]">
                                            {formData.filiacionPresentacion}
                                        </div>
                                        <div className="p-3 border-t border-slate-800 text-justify leading-snug whitespace-pre-wrap font-serif text-[11px]">
                                            {formData.filiacionRelacion}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Datos Biográficos */}
                            <div className="space-y-6">
                                <h3 className="font-bold text-sm bg-slate-100 p-2 border-l-4 border-slate-800 avoid-break print:bg-gray-100">III. Datos Biográficos</h3>

                                <div className="avoid-break">
                                    <h4 className="mb-2 font-bold uppercase text-[10px] tracking-widest text-slate-500 border-b border-slate-200">1. Familia de origen</h4>
                                    <div className="space-y-4 pl-4">
                                        {[
                                            { q: "a) ¿Con quién vive actualmente y como es la dinámica en casa?", a: formData.bioFamiliaDinama },
                                            { q: "b) ¿Cómo describiría su relación con cada uno de los miembros de su familia?", a: formData.bioFamiliaRelacion },
                                            { q: "c) ¿Ha habido eventos significativos en la familia?", a: formData.bioFamiliaEventos },
                                            { q: "d) ¿Qué papel ocupa usted dentro de su familia y como se siente respecto a ese rol?", a: formData.bioFamiliaRol },
                                        ].map((item, idx) => (
                                            <div key={idx} className="avoid-break group">
                                                <div className="mb-1 font-bold text-[10px] text-slate-700">{item.q}</div>
                                                <div className="w-full border-b border-dotted border-slate-400 text-serif text-[11px] whitespace-pre-wrap pb-1 min-h-[1.5em]">{item.a}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="avoid-break">
                                    <h4 className="mb-2 font-bold uppercase text-[10px] tracking-widest text-slate-500 border-b border-slate-200">2. Amistades</h4>
                                    <div className="space-y-4 pl-4">
                                        {[
                                            { q: "a) ¿Cuenta con amigos cercanos a una red de apoyo social?", a: formData.bioAmistadesRed },
                                            { q: "b) ¿Cómo describiría la calidad de sus relaciones de amistad?", a: formData.bioAmistadesCalidad },
                                            { q: "c) ¿Suele compartir sus problemas o emociones con sus amigos?", a: formData.bioAmistadesCompartir },
                                            { q: "d) ¿Ha tenido conflictos recientes de amistad importantes?", a: formData.bioAmistadesConflictos },
                                            { q: "e) ¿Con que frecuencia convive o se comunica con sus amistades?", a: formData.bioAmistadesFrecuencia },
                                        ].map((item, idx) => (
                                            <div key={idx} className="avoid-break">
                                                <div className="mb-1 font-bold text-[10px] text-slate-700">{item.q}</div>
                                                <div className="w-full border-b border-dotted border-slate-400 text-serif text-[11px] whitespace-pre-wrap pb-1 min-h-[1.5em]">{item.a}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </PaginaBase>
                </div>

                {/* --- HISTORIA CLÍNICA CONT --- */}
                <div className="print-section-start">
                    <PaginaBase title="Historia Clínica Psicológica (Cont.)" headerInfo={formData}>
                        <div className="text-[11px] space-y-8">
                            <div className="avoid-break">
                                <h4 className="mb-2 font-bold uppercase text-[10px] tracking-widest text-slate-500 border-b border-slate-200">3. Relación de pareja</h4>
                                <div className="space-y-4 pl-4">
                                    {[
                                        { q: "a) ¿Tiene pareja actualmente? (Si/No) ¿Cuándo fue su última relación significativa?", a: formData.bioParejaActual },
                                        { q: "b) ¿Cómo describiría la relación (comunicación, apoyo, convivencia)?", a: formData.bioParejaRelacion },
                                        { q: "c) ¿Qué tan satisfecha (o) se siente con su vida afectiva y de pareja?", a: formData.bioParejaSatisfaccion },
                                        { q: "d) ¿Han existido conflictos importantes, como rupturas?", a: formData.bioParejaConflictos },
                                        { q: "e) ¿Qué expectativas tiene respecto a sus relaciones de pareja?", a: formData.bioParejaExpectativas },
                                    ].map((item, idx) => (
                                        <div key={idx} className="avoid-break">
                                            <div className="mb-1 font-bold text-[10px] text-slate-700">{item.q}</div>
                                            <div className="w-full border-b border-dotted border-slate-400 text-serif text-[11px] whitespace-pre-wrap pb-1 min-h-[1.5em]">{item.a}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="font-bold text-sm bg-slate-100 p-2 border-l-4 border-slate-800 avoid-break print:bg-gray-100">IV. Factores Biológicos</h3>
                                <div className="space-y-4 pl-4">
                                    {[
                                        { q: "a) ¿Tiene alguna preocupación acerca de su salud? Especifíquelo:", a: formData.bioSaludPreocupacion },
                                        { q: "b) Enliste los medicamentos que actualmente toma o ha tomado durante los últimos tres meses:", a: formData.bioMedicamentos },
                                        { q: "c) ¿Practica alguna actividad deportiva o relajante? ¿Con que frecuencia?", a: formData.bioDeporte },
                                    ].map((item, idx) => (
                                        <div key={idx} className="avoid-break">
                                            <div className="mb-1 font-bold text-[10px] text-slate-700">{item.q}</div>
                                            <div className="w-full border-b border-dotted border-slate-400 text-serif text-[11px] whitespace-pre-wrap pb-1 min-h-[1.5em]">{item.a}</div>
                                        </div>
                                    ))}
                                    <div className="avoid-break">
                                        <div className="mb-1 font-bold text-[10px] text-slate-700">d) ¿Cuántas horas de sueño tiene?</div>
                                        <div className="w-full border-b border-dotted border-slate-400 text-serif text-[11px] whitespace-pre-wrap pb-1 relative">
                                            {formData.bioSuenoHoras} <span className="absolute right-0 bottom-1 text-slate-400 text-[9px]">hrs.</span>
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 p-3 border border-slate-200 rounded mt-2 avoid-break print:bg-gray-50 print:border-gray-300">
                                        <div className="font-bold mb-2 uppercase text-[10px] text-slate-500 tracking-wider">Perfil Médico</div>
                                        <div className="flex gap-2 items-end mb-2">
                                            <span className="w-40 font-bold text-[10px] text-slate-800">• Estado de salud actual:</span>
                                            <div className="flex-1 border-b border-slate-300 min-h-[16px] font-serif pl-2">{formData.bioSaludActual}</div>
                                        </div>
                                        <div className="flex gap-2 items-end">
                                            <span className="w-40 font-bold text-[10px] text-slate-800">• Diagnósticos previos:</span>
                                            <div className="flex-1 border-b border-slate-300 min-h-[16px] font-serif pl-2">{formData.bioDiagnosticosPrevios}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="font-bold text-sm bg-slate-100 p-2 border-l-4 border-slate-800 avoid-break print:bg-gray-100">V. Antecedentes Escolares</h3>
                                <div className="space-y-4 pl-4">
                                    {[
                                        { q: "a) ¿Cuál fue el último grado de estudios que completo?", a: formData.escGrado },
                                        { q: "b) ¿Cómo fue el desempeño académico en general (Bueno, regular, con dificultades)?", a: formData.escDesempeno },
                                        { q: "c) ¿Experimento problemas de conducta o adaptación en la escuela? SI o No, ¿Por qué?", a: formData.escConducta },
                                        { q: "d) ¿Hubo situaciones significativas en su etapa escolar (bullying, cambios de escuela)?", a: formData.escSituaciones },
                                        { q: "e) ¿Cómo considera que su experiencia escolar influyo en su vida actual?", a: formData.escExperiencia },
                                    ].map((item, idx) => (
                                        <div key={idx} className="avoid-break">
                                            <div className="mb-1 font-bold text-[10px] text-slate-700">{item.q}</div>
                                            <div className="w-full border-b border-dotted border-slate-400 text-serif text-[11px] whitespace-pre-wrap pb-1 min-h-[1.5em]">{item.a}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </PaginaBase>
                </div>

                {/* --- HISTORIA CLÍNICA CONT 2 --- */}
                <div className="print-section-start">
                    <PaginaBase title="Historia Clínica Psicológica (Cont.)" headerInfo={formData}>
                        <div className="text-[11px] space-y-8">
                            <div className="space-y-6">
                                <h3 className="font-bold text-sm bg-slate-100 p-2 border-l-4 border-slate-800 avoid-break print:bg-gray-100">VI. Antecedentes Laborales</h3>
                                <div className="space-y-4 pl-4">
                                    {[
                                        { q: "a) ¿A qué edad tuvo su primer trabajo? / ¿Qué tiempo duró?", a: formData.labPrimerTrabajo },
                                        { q: "b) En general, ¿Cómo describe la relación con sus jefes y compañeros?", a: formData.labRelacionJefes },
                                        { q: "c) ¿Ha experimentado estrés, ansiedad o malestar emocional relacionado con algún trabajo?", a: formData.labEstres },
                                        { q: "d) ¿Cómo describiría el ambiente de trabajo?", a: formData.labAmbiente },
                                        { q: "e) ¿Ha tenido conflictos recientes en el trabajo?", a: formData.labConflictos },
                                        { q: "f) ¿Cómo se ha sentido en su trabajo últimamente?", a: formData.labSentido },
                                    ].map((item, idx) => (
                                        <div key={idx} className="avoid-break">
                                            <div className="mb-1 font-bold text-[10px] text-slate-700">{item.q}</div>
                                            <div className="w-full border-b border-dotted border-slate-400 text-serif text-[11px] whitespace-pre-wrap pb-1 min-h-[1.5em]">{item.a}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4 mt-6 avoid-break">
                                <h3 className="font-bold text-sm bg-slate-100 p-2 border-l-4 border-slate-800 print:bg-gray-100">VII. Motivo de Consulta</h3>
                                <div className="border border-slate-800 rounded shadow-sm overflow-hidden">
                                    {[
                                        { l: "Que le ocurre", v: formData.motivoQueOcurre },
                                        { l: "Desde cuándo", v: formData.motivoDesdeCuando },
                                        { l: "Como afecta su vida", v: formData.motivoComoAfecta },
                                        { l: "Expectativas", v: formData.motivoExpectativas },
                                    ].map((field, idx) => (
                                        <div key={idx} className="grid grid-cols-[120px_1fr] border-b border-slate-300 last:border-0 avoid-break">
                                            <div className="p-3 font-bold bg-slate-100 border-r border-slate-300 flex items-center justify-center text-center text-[10px] uppercase text-slate-700 print:bg-gray-100">{field.l}</div>
                                            <div className="p-3 min-h-[3em] text-justify font-serif text-[11px] bg-white">{field.v}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2 mt-6 avoid-break">
                                <h3 className="font-bold text-sm bg-slate-100 p-2 border-l-4 border-slate-800 print:bg-gray-100">VIII. Observaciones Generales</h3>
                                <div className="border border-slate-800 rounded p-4 min-h-[8em] bg-white font-serif text-justify whitespace-pre-wrap shadow-inner text-xs leading-relaxed">
                                    {formData.observacionesGenerales}
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 mb-4 avoid-break">
                            <div className="border-t border-black w-64 pt-2 font-bold text-xs uppercase text-center mx-auto">Firma del Clínico</div>
                        </div>
                    </PaginaBase>
                </div>

                {/* --- FAMILIOGRAMA --- */}
                <div className="print-section-start">
                    <PaginaBase title="III. Familiograma y Dinámica Familiar" headerInfo={formData}>
                        <div className="flex flex-col gap-8 p-4 print:block">
                            <div className="flex-grow border-2 border-slate-100 flex items-center justify-center p-4 min-h-[10cm] print:min-h-[8cm]">
                                <GenogramaVisual familia={formData.familia} relaciones={formData.familiaRelaciones} />
                            </div>
                            <div className="border-t-4 border-slate-200 pt-4 avoid-break">
                                <p className="font-bold text-sm mb-2 uppercase text-slate-700">Interpretación Sistémica:</p>
                                <p className="text-sm text-justify whitespace-pre-wrap font-serif leading-relaxed">{formData.familiogramaInterpretacion}</p>
                            </div>
                        </div>
                    </PaginaBase>
                </div>

                {/* --- BATERÍA PSICOMÉTRICA --- */}
                <div className="print-section-start">
                    <PaginaBase title="IV. Batería Psicométrica (Resultados)" headerInfo={formData}>
                        <div className="space-y-12 p-4">
                            <div className="avoid-break">
                                <h3 className="text-lg font-bold border-b-2 border-slate-800 mb-4 uppercase">1. Escala de Esferas de Vida</h3>
                                <div className="flex gap-8 items-start">
                                    <div className="w-1/3"><GraficaEsferasVisual data={resultados.esferas} /></div>
                                    <div className="w-2/3 space-y-4">
                                        <div className="grid grid-cols-2 gap-2 text-xs">
                                            {Object.entries(resultados.esferas).map(([k, v]) => (
                                                <div key={k} className="border-b flex justify-between"><span>{k}</span> <strong>{v}</strong></div>
                                            ))}
                                        </div>
                                        <div className="bg-slate-50 p-4 rounded text-sm text-justify font-serif border border-slate-200 print:bg-gray-50">
                                            {formData.esferasInterpretacion}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="avoid-break">
                                <h3 className="text-lg font-bold border-b-2 border-slate-800 mb-4 uppercase">2. Perfil de Personalidad (CEPER III)</h3>
                                <div className="mb-4">
                                    {Object.entries(resultados.ceper).slice(0, 5).map(([s, v]) => (
                                        <div key={s} className="flex items-center text-xs mb-1">
                                            <span className="w-32 font-bold truncate">{s}</span>
                                            <div className="flex-1 h-2 bg-gray-100 mx-2 border border-slate-200"><div className="h-full bg-slate-800 print:bg-black" style={{ width: `${Math.min((v / 140) * 100, 100)}%` }}></div></div>
                                            <span className="w-8 font-mono text-right">{v}</span>
                                        </div>
                                    ))}
                                    <div className="text-xs text-gray-400 italic mt-1">(Extracto de puntajes más altos)</div>
                                </div>
                                <div className="bg-slate-50 p-4 rounded text-sm text-justify font-serif border border-slate-200 print:bg-gray-50">
                                    {formData.ceperInterpretacion}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-8 avoid-break">
                                <div>
                                    <h3 className="text-md font-bold border-b border-slate-400 mb-2 uppercase">3. Ansiedad (HAM-A)</h3>
                                    <div className="text-3xl font-black text-slate-800 mb-2">{resultados.hama.score} pts</div>
                                    <div className="font-bold text-slate-600 bg-slate-100 p-2 text-center rounded border border-slate-200 print:bg-gray-100">{resultados.hama.text}</div>
                                </div>
                                <div>
                                    <h3 className="text-md font-bold border-b border-slate-400 mb-2 uppercase">4. Depresión (BDI-II)</h3>
                                    <div className="text-3xl font-black text-slate-800 mb-2">{resultados.bdi.score} pts</div>
                                    <div className="font-bold text-slate-600 bg-slate-100 p-2 text-center rounded border border-slate-200 print:bg-gray-100">{resultados.bdi.text}</div>
                                </div>
                            </div>

                            <div className="avoid-break">
                                <h3 className="text-lg font-bold border-b-2 border-slate-800 mb-4 uppercase">5. Inteligencia (OTIS Sencillo)</h3>
                                <div className="flex justify-between items-center bg-slate-50 p-6 border rounded shadow-sm print:bg-gray-50">
                                    <div className="text-center">
                                        <div className="text-xs uppercase font-bold text-gray-500">Aciertos</div>
                                        <div className="text-4xl font-black">{formData.otisAciertos}</div>
                                    </div>
                                    <div className="text-center flex-1 px-8">
                                        <div className="text-xs uppercase font-bold text-gray-500 mb-1">Diagnóstico Intelectual</div>
                                        <div className="text-xl font-bold text-blue-900 border-b-2 border-blue-900 pb-1 print:text-black print:border-black">{formData.otisDiagnostico}</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-xs uppercase font-bold text-gray-500">Errores</div>
                                        <div className="text-4xl font-black text-gray-400">{formData.otisErrores}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </PaginaBase>
                </div>

                {/* --- MACHOVER --- */}
                <div className="print-section-start">
                    <PaginaBase title="V. Test de la Figura Humana (Machover)" headerInfo={formData}>
                        <div className="p-6 space-y-6">
                            <div className="bg-slate-50 p-6 border-l-4 border-slate-800 avoid-break print:bg-gray-50">
                                <h4 className="font-bold text-xs uppercase mb-3 text-slate-500 tracking-widest">Narrativa del Paciente</h4>
                                <p className="text-sm italic text-justify whitespace-pre-wrap font-serif leading-relaxed">"{formData.machoverHistoria || 'Sin historia registrada'}"</p>
                            </div>

                            <div className="avoid-break">
                                <h4 className="font-bold text-sm uppercase mb-3 text-slate-800">Indicadores Proyectivos Relevantes</h4>
                                <table className="w-full text-xs border border-slate-300">
                                    <thead className="bg-slate-800 text-white print:bg-black print:text-white">
                                        <tr>
                                            <th className="p-3 w-1/4 text-left uppercase tracking-wider">Indicador</th>
                                            <th className="p-3 w-1/3 text-left uppercase tracking-wider">Descripción</th>
                                            <th className="p-3 w-1/3 text-left uppercase tracking-wider">Interpretación Dinámica</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200">
                                        {MACHOVER_INDICADORES.map((ind, i) => (
                                            <tr key={i} className="hover:bg-slate-50 avoid-break">
                                                <td className="p-3 font-bold text-slate-700 bg-slate-50 print:bg-gray-100">{ind}</td>
                                                <td className="p-3 align-top">{formData[`machoverInd${i}`]}</td>
                                                <td className="p-3 italic text-slate-600 align-top">{formData[`machoverInt${i}`]}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="border-t-4 border-slate-800 pt-6 avoid-break">
                                <p className="font-bold text-sm mb-3 uppercase text-slate-900 tracking-wider">Integración Global de la Prueba:</p>
                                <p className="text-sm text-justify leading-relaxed whitespace-pre-wrap font-serif">{formData.machoverInterpretacionGlobal}</p>
                            </div>
                        </div>
                    </PaginaBase>
                </div>

                {/* --- NOTAS CLINICAS --- */}
                <div className="print-section-start">
                    <PaginaBase title="VI. Notas de Evolución (S.O.A.P.)" headerInfo={formData}>
                        <div className="space-y-6 p-6">
                            {formData.notasClinicas.length === 0 && <p className="text-center text-gray-400 italic py-8">No hay notas clínicas registradas.</p>}
                            {formData.notasClinicas.map((n, i) => (
                                <div key={i} className="border border-slate-200 rounded-sm mb-6 avoid-break shadow-sm print:shadow-none print:border-slate-300">
                                    <div className="bg-slate-50 p-2 flex justify-between items-center border-b border-slate-200 print:bg-gray-100 print:border-slate-300">
                                        <div className="font-bold text-slate-700 text-xs uppercase tracking-wide">SESIÓN {i + 1}</div>
                                        <div className="bg-white border border-slate-300 px-3 py-1 rounded text-xs font-mono font-bold text-slate-600">{n.fecha}</div>
                                    </div>

                                    <div className="grid grid-cols-2 divide-x divide-y divide-slate-200 border-b border-slate-200 print:divide-slate-300 print:border-slate-300">
                                        {/* S */}
                                        <div className="p-3 min-h-[100px] flex flex-col gap-1">
                                            <h4 className="font-bold text-[10px] text-slate-500 uppercase">S - Subjetivo (Lo que refiere el paciente):</h4>
                                            <p className="text-xs text-justify font-serif leading-relaxed text-slate-800">{n.s}</p>
                                        </div>

                                        {/* O */}
                                        <div className="p-3 min-h-[100px] flex flex-col gap-1">
                                            <h4 className="font-bold text-[10px] text-slate-500 uppercase">O - Objetivo (Lo que se observa/mide):</h4>
                                            <p className="text-xs text-justify font-serif leading-relaxed text-slate-800">{n.o}</p>
                                        </div>

                                        {/* A */}
                                        <div className="p-3 min-h-[100px] flex flex-col gap-1">
                                            <h4 className="font-bold text-[10px] text-slate-500 uppercase">A - Análisis/Avalúo (Impresión Diagnóstica):</h4>
                                            <p className="text-xs text-justify font-serif leading-relaxed text-slate-800">{n.a}</p>
                                        </div>

                                        {/* P */}
                                        <div className="p-3 min-h-[100px] flex flex-col gap-1">
                                            <h4 className="font-bold text-[10px] text-slate-500 uppercase">P - Plan (Tratamiento/Seguimiento):</h4>
                                            <p className="text-xs text-justify font-serif leading-relaxed text-slate-800 whitespace-pre-wrap">{n.p}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </PaginaBase>
                </div>

                {/* --- INFORME FINAL --- */}
                <div className="print-section-start">
                    <PaginaBase title="VII. Informe Clínico Final" headerInfo={formData}>
                        <div className="space-y-8 p-8">
                            {[
                                { t: "1. Resumen del Caso", c: formData.informeResumen },
                                { t: "3. Pronóstico", c: formData.informePronostico },
                                { t: "4. Recomendaciones", c: formData.informeRecomendaciones },
                            ].map((sec, idx) => (
                                <div key={idx} className="space-y-3 avoid-break">
                                    <h3 className="font-black text-base text-slate-900 uppercase tracking-widest border-b-4 border-slate-900 pb-2 mb-4">{sec.t}</h3>
                                    <p className="text-sm text-justify leading-loose whitespace-pre-wrap font-serif text-slate-800">{sec.c}</p>
                                </div>
                            ))}

                            {/* Diagnostico special case */}
                            <div className="space-y-3 avoid-break order-2">
                                <h3 className="font-black text-base text-slate-900 uppercase tracking-widest border-b-4 border-slate-900 pb-2 mb-4">2. Diagnóstico Multiaxial</h3>
                                <div className="bg-slate-50 p-6 border-l-8 border-slate-900 print:bg-gray-50">
                                    <p className="text-sm text-justify leading-relaxed whitespace-pre-wrap font-medium font-mono text-slate-800">{formData.informeDiagnostico}</p>
                                </div>
                            </div>

                            <div className="mt-24 pt-8 border-t-2 border-slate-900 text-center w-80 mx-auto avoid-break">
                                <div className="font-bold text-base text-slate-900 uppercase">{formData.pasanteHeader.replace('Pasante: ', '')}</div>
                                <div className="text-xs text-slate-500 uppercase mt-2 tracking-widest font-bold">Psicólogo Responsable</div>
                                <div className="text-[10px] text-slate-400 uppercase mt-1">Cédula Profesional: {formData.presentaMatricula}</div>
                            </div>
                        </div>
                    </PaginaBase>
                </div>
            </div>
        </div>
    );
};

export default PrintView;

import React, { useState } from 'react';
import { ArrowLeft, Printer, FileText, CheckSquare, Brain, Activity, Heart, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PaginaBase from '../layout/PaginaBase';
import { AVISO_PRIVACIDAD_TEXT, CONSENTIMIENTO_INFORMADO_TEXT, BDI_ITEMS, HAMA_QUESTIONS, CEPER_QUESTIONS_LIST, ESFERAS_QUESTIONS, OTIS_QUESTIONS, OTIS_FULL_CONTENT, MACHOVER_INDICADORES } from '../../utils/constants';

const BlankFormsView = () => {
    const navigate = useNavigate();
    const [selectedForm, setSelectedForm] = useState('legales');

    // Dummy data for Virgin Forms (Empty Headers)
    const blankHeader = {
        pasanteHeader: "Psicólogo: __________________________________________________",
        presentaMatricula: "__________",
        especialidad: "_____________________________",
        fechaElaboracion: "___/___/_____",
        folio: "_______",
        pacienteNombre: "__________________________________________________",
        edad: "_____",
        grupo: "_______"
    };

    const handlePrint = () => window.print();

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
            {/* Header de Navegación (No sale en impresión) */}
            <div className="bg-slate-900 text-white p-4 flex justify-between items-center shadow-md print:hidden sticky top-0 z-50">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate('/')} className="flex items-center gap-2 hover:bg-slate-700 px-3 py-2 rounded transition-colors text-sm font-bold">
                        <ArrowLeft size={18} /> Volver
                    </button>
                    <h1 className="text-xl font-bold flex items-center gap-2"><Printer size={24} /> Banco de Formatos</h1>
                </div>
                <button onClick={handlePrint} className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold shadow hover:bg-slate-100 flex items-center gap-2">
                    <Printer size={18} /> IMPRIMIR FORMATO ACTUAL
                </button>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar de Selección (No sale en impresión) */}
                <aside className="w-64 bg-white border-r border-slate-200 overflow-y-auto print:hidden flex flex-col">
                    <div className="p-4">
                        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Instrumentos Disponibles</h2>
                        <nav className="space-y-1">
                            <MenuButton id="legales" label="Legales (Aviso/Consent.)" icon={<FileText size={18} />} current={selectedForm} set={setSelectedForm} />
                            <MenuButton id="historia" label="Historia Clínica" icon={<FileText size={18} />} current={selectedForm} set={setSelectedForm} />
                            <MenuButton id="bdi" label="Depresión (BDI-II)" icon={<Activity size={18} />} current={selectedForm} set={setSelectedForm} />
                            <MenuButton id="hama" label="Ansiedad (HAM-A)" icon={<Heart size={18} />} current={selectedForm} set={setSelectedForm} />
                            <MenuButton id="esferas" label="Esferas de Vida" icon={<Users size={18} />} current={selectedForm} set={setSelectedForm} />
                            <MenuButton id="ceper" label="Personalidad (CEPER)" icon={<Brain size={18} />} current={selectedForm} set={setSelectedForm} />
                            <MenuButton id="otis" label="Inteligencia (OTIS)" icon={<Brain size={18} />} current={selectedForm} set={setSelectedForm} />
                            <MenuButton id="machover" label="Machover (Hojas)" icon={<FileText size={18} />} current={selectedForm} set={setSelectedForm} />
                        </nav>
                    </div>
                </aside>

                {/* Área de Previsualización / Impresión */}
                <main className="flex-1 bg-slate-100 overflow-y-auto p-8 print:p-0 print:bg-white print:overflow-visible">
                    <div className="max-w-[21.59cm] mx-auto print:w-full">

                        {/* --- LEGALES --- */}
                        {selectedForm === 'legales' && (
                            <>
                                <PaginaBase title="Aviso de Privacidad Integral" headerInfo={blankHeader} showFooter={false}>
                                    <div className="text-xs text-justify leading-relaxed flex flex-col h-full justify-between">
                                        <div className="whitespace-pre-wrap font-serif mb-8">{AVISO_PRIVACIDAD_TEXT}</div>
                                        <div className="mt-8 mb-12">
                                            <div className="border-t border-black w-64 mx-auto pt-2 text-center font-bold text-xs uppercase">Nombre y Firma del Paciente</div>
                                            <div className="text-center mt-2 text-xs">Fecha: _____ / ________________ / _________</div>
                                        </div>
                                    </div>
                                </PaginaBase>
                                <PaginaBase title="Consentimiento Informado" headerInfo={blankHeader} showFooter={false}>
                                    <div className="text-xs text-justify leading-relaxed flex flex-col h-full justify-between">
                                        <div className="whitespace-pre-wrap font-serif mb-8">{CONSENTIMIENTO_INFORMADO_TEXT}</div>
                                        <div className="mt-16 flex justify-between px-8">
                                            <div className="text-center">
                                                <div className="border-t border-black w-48 pt-2 font-bold uppercase text-[10px]">Nombre y Firma del Paciente</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="border-t border-black w-48 pt-2 font-bold uppercase text-[10px]">Nombre y Firma del Psicólogo</div>
                                            </div>
                                        </div>
                                    </div>
                                </PaginaBase>
                            </>
                        )}

                        {/* --- HISTORIA CLINICA --- */}
                        {selectedForm === 'historia' && (
                            <>
                                {/* Pagina 1 */}
                                <PaginaBase title="Historia Clínica Psicológica" headerInfo={blankHeader}>
                                    <div className="text-[11px] space-y-4">
                                        {/* I. Datos de Identificación */}
                                        <div>
                                            <h3 className="bg-blue-900 text-white font-bold px-2 py-1 mb-2">I. Datos de Identificación</h3>
                                            <div className="border border-slate-400">
                                                <div className="flex border-b border-slate-400">
                                                    <div className="w-2/3 border-r border-slate-400 p-1 flex gap-2">
                                                        <span className="font-bold">Nombre:</span>
                                                        <div className="flex-1 border-b border-black"></div>
                                                    </div>
                                                    <div className="w-1/3 p-1 flex gap-2">
                                                        <span className="font-bold">Edad:</span>
                                                        <div className="flex-1 border-b border-black"></div>
                                                    </div>
                                                </div>
                                                <div className="flex border-b border-slate-400">
                                                    <div className="w-2/3 border-r border-slate-400 p-1 flex gap-2">
                                                        <span className="font-bold">Fecha de Nacimiento:</span>
                                                        <div className="flex-1 border-b border-black"></div>
                                                    </div>
                                                    <div className="w-1/3 p-1 flex gap-2">
                                                        <span className="font-bold">Sexo:</span>
                                                        <div className="flex-1 border-b border-black"></div>
                                                    </div>
                                                </div>
                                                <div className="flex border-b border-slate-400">
                                                    <div className="w-2/3 border-r border-slate-400 p-1 flex gap-2">
                                                        <span className="font-bold">Estado Civil:</span>
                                                        <div className="flex-1 border-b border-black"></div>
                                                    </div>
                                                    <div className="w-1/3 p-1 flex gap-2">
                                                        <span className="font-bold">Escolaridad:</span>
                                                        <div className="flex-1 border-b border-black"></div>
                                                    </div>
                                                </div>
                                                <div className="flex border-b border-slate-400">
                                                    <div className="w-2/3 border-r border-slate-400 p-1 flex gap-2">
                                                        <span className="font-bold">Domicilio:</span>
                                                        <div className="flex-1 border-b border-black"></div>
                                                    </div>
                                                    <div className="w-1/3 p-1 flex gap-2">
                                                        <span className="font-bold">Ocupación:</span>
                                                        <div className="flex-1 border-b border-black"></div>
                                                    </div>
                                                </div>
                                                <div className="flex border-b border-slate-400">
                                                    <div className="w-2/3 border-r border-slate-400 p-1 flex gap-2">
                                                        <span className="font-bold">Teléfono celular:</span>
                                                        <div className="flex-1 border-b border-black"></div>
                                                    </div>
                                                    <div className="w-1/3 p-1 flex gap-2">
                                                        <span className="font-bold">Nacionalidad:</span>
                                                        <div className="flex-1 border-b border-black"></div>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <div className="w-2/3 border-r border-slate-400 p-1 flex gap-2">
                                                        <span className="font-bold">Lugar de origen:</span>
                                                        <div className="flex-1 border-b border-black"></div>
                                                    </div>
                                                    <div className="w-1/3 p-1 flex gap-2">
                                                        <span className="font-bold">Fecha elaboración:</span>
                                                        <div className="flex-1 border-b border-black"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* II. Filiación */}
                                        <div className="space-y-4">
                                            <h3 className="font-bold text-sm">II. Filiación</h3>

                                            <div className="flex gap-4">
                                                <div className="w-1/2 flex items-center gap-2">
                                                    <span className="font-bold text-[10px]">El consultante acude por su propia cuenta/ referido por:</span>
                                                </div>
                                                <div className="flex-1 border-b border-black"></div>
                                            </div>

                                            <div className="border border-slate-800 p-0">
                                                <div className="grid grid-cols-2">
                                                    <div className="border-r border-slate-800 p-2 bg-slate-100 font-bold bg-opacity-50">Presentación del Consultante:</div>
                                                    <div className="p-2 bg-slate-100 font-bold bg-opacity-50">Modo de relacionarse con el clínico:</div>
                                                </div>
                                                <div className="grid grid-cols-2 h-40">
                                                    <div className="border-r border-slate-800 border-t border-slate-800 p-2">
                                                        <div className="w-full border-b border-gray-300 h-6"></div>
                                                        <div className="w-full border-b border-gray-300 h-6"></div>
                                                        <div className="w-full border-b border-gray-300 h-6"></div>
                                                        <div className="w-full border-b border-gray-300 h-6"></div>
                                                        <div className="w-full border-b border-gray-300 h-6"></div>
                                                        <div className="w-full border-b border-gray-300 h-6"></div>
                                                    </div>
                                                    <div className="p-2 border-t border-slate-800">
                                                        <div className="w-full border-b border-gray-300 h-6"></div>
                                                        <div className="w-full border-b border-gray-300 h-6"></div>
                                                        <div className="w-full border-b border-gray-300 h-6"></div>
                                                        <div className="w-full border-b border-gray-300 h-6"></div>
                                                        <div className="w-full border-b border-gray-300 h-6"></div>
                                                        <div className="w-full border-b border-gray-300 h-6"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* III. Datos Biográficos */}
                                        <div>
                                            <h3 className="font-bold text-sm mb-2">III. Datos Biográficos (Relaciones Interpersonales)</h3>

                                            <div className="mb-2 font-bold">1. Familia de origen</div>

                                            <div className="space-y-3 pl-2">
                                                <div>
                                                    <div className="mb-1">a) ¿Con quién vive actualmente y como es la dinámica en casa?</div>
                                                    <div className="w-full border-b border-black h-4"></div>
                                                    <div className="w-full border-b border-black h-4"></div>
                                                </div>
                                                <div>
                                                    <div className="mb-1">b) ¿Cómo describiría su relación con cada uno de los miembros de su familia?</div>
                                                    <div className="w-full border-b border-black h-4"></div>
                                                    <div className="w-full border-b border-black h-4"></div>
                                                </div>
                                                <div>
                                                    <div className="mb-1">c) ¿Ha habido eventos significativos en la familia?</div>
                                                    <div className="w-full border-b border-black h-4"></div>
                                                </div>
                                                <div>
                                                    <div className="mb-1">d) ¿Qué papel ocupa usted dentro de su familia y como se siente respecto a ese rol?</div>
                                                    <div className="w-full border-b border-black h-4"></div>
                                                    <div className="w-full border-b border-black h-4"></div>
                                                </div>
                                            </div>

                                            <div className="mt-4 mb-2 font-bold">2. Amistades</div>
                                            <div className="space-y-3 pl-2">
                                                <div>
                                                    <div className="mb-1">a) ¿Cuenta con amigos cercanos a una red de apoyo social?</div>
                                                    <div className="w-full border-b border-black h-4"></div>
                                                </div>
                                                <div>
                                                    <div className="mb-1">b) ¿Cómo describiría la calidad de sus relaciones de amistad?</div>
                                                    <div className="w-full border-b border-black h-4"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </PaginaBase>

                                {/* Pagina 2 */}
                                <PaginaBase title="Historia Clínica Psicológica (Cont.)" headerInfo={blankHeader}>
                                    <div className="text-[11px] space-y-4">
                                        {/* Amistades Restante */}
                                        <div className="space-y-3 pl-2">
                                            <div>
                                                <div className="mb-1">c) ¿Suele compartir sus problemas o emociones con sus amigos?</div>
                                                <div className="w-full border-b border-black h-4"></div>
                                            </div>
                                            <div>
                                                <div className="mb-1">d) ¿Ha tenido conflictos recientes de amistad importantes?</div>
                                                <div className="w-full border-b border-black h-4"></div>
                                            </div>
                                            <div>
                                                <div className="mb-1">e) ¿Con que frecuencia convive o se comunica con sus amistades?</div>
                                                <div className="w-full border-b border-black h-4"></div>
                                            </div>
                                        </div>

                                        {/* 3. Relación de pareja */}
                                        <div>
                                            <div className="mb-2 font-bold mt-4">3. Relación de pareja</div>
                                            <div className="space-y-3 pl-2">
                                                <div>
                                                    <div className="mb-1">a) ¿Tiene pareja actualmente? (Si/No) ¿Cuándo fue su última relación significativa?</div>
                                                    <div className="w-full border-b border-black h-4"></div>
                                                </div>
                                                <div>
                                                    <div className="mb-1">b) ¿Cómo describiría la relación (comunicación, apoyo, convivencia)?</div>
                                                    <div className="w-full border-b border-black h-4"></div>
                                                    <div className="w-full border-b border-black h-4"></div>
                                                </div>
                                                <div>
                                                    <div className="mb-1">c) ¿Qué tan satisfecha (o) se siente con su vida afectiva y de pareja?</div>
                                                    <div className="w-full border-b border-black h-4"></div>
                                                </div>
                                                <div>
                                                    <div className="mb-1">d) ¿Han existido conflictos importantes, como rupturas?</div>
                                                    <div className="w-full border-b border-black h-4"></div>
                                                    <div className="w-full border-b border-black h-4"></div>
                                                </div>
                                                <div>
                                                    <div className="mb-1">e) ¿Qué expectativas tiene respecto a sus relaciones de pareja?</div>
                                                    <div className="w-full border-b border-black h-4"></div>
                                                    <div className="w-full border-b border-black h-4"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* IV. Factores Biológicos */}
                                        <div className="space-y-3">
                                            <h3 className="font-bold text-sm mt-4">IV. Factores Biológicos</h3>
                                            <div className="space-y-3 pl-2">
                                                <div>
                                                    <div className="mb-1">a) ¿Tiene alguna preocupación acerca de su salud? Especifíquelo:</div>
                                                    <div className="w-full border-b border-black h-4"></div>
                                                </div>
                                                <div>
                                                    <div className="mb-1">b) Enliste los medicamentos que actualmente toma o ha tomado durante los últimos tres meses:</div>
                                                    <div className="w-full border-b border-black h-4"></div>
                                                    <div className="w-full border-b border-black h-4"></div>
                                                </div>
                                                <div>
                                                    <div className="mb-1">c) ¿Practica alguna actividad deportiva o relajante? ¿Con que frecuencia?</div>
                                                    <div className="w-full border-b border-black h-4"></div>
                                                </div>
                                                <div>
                                                    <div className="mb-1">d) ¿Cuántas horas de sueño tiene?</div>
                                                    <div className="w-full border-b border-black h-4 relative">
                                                        <span className="absolute right-0 bottom-0 text-slate-400">hrs.</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-slate-50 p-2 border border-slate-300 rounded mt-2">
                                                <div className="font-bold mb-2">4.1 Datos médicos relevantes:</div>
                                                <div className="flex gap-2 items-end mb-2">
                                                    <span className="w-40">• Estado de salud actual:</span>
                                                    <div className="flex-1 border-b border-black h-4"></div>
                                                </div>
                                                <div className="flex gap-2 items-end">
                                                    <span className="w-40">• Diagnósticos previos:</span>
                                                    <div className="flex-1 border-b border-black h-4"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* V. Antecedentes Escolares */}
                                        <div className="space-y-3">
                                            <h3 className="font-bold text-sm mt-4">V. Antecedentes Escolares</h3>
                                            <div className="space-y-3 pl-2">
                                                <div>
                                                    <div className="mb-1">a) ¿Cuál fue el último grado de estudios que completo?</div>
                                                    <div className="w-full border-b border-black h-4"></div>
                                                </div>
                                                <div>
                                                    <div className="mb-1">b) ¿Cómo fue el desempeño académico en general (Bueno, regular, con dificultades)?</div>
                                                    <div className="w-full border-b border-black h-4"></div>
                                                </div>
                                                <div>
                                                    <div className="mb-1">c) ¿Experimento problemas de conducta o adaptación en la escuela? SI o No, ¿Por qué?</div>
                                                    <div className="w-full border-b border-black h-4"></div>
                                                </div>
                                                <div>
                                                    <div className="mb-1">d) ¿Hubo situaciones significativas en su etapa escolar (bullying, cambios de escuela)?</div>
                                                    <div className="w-full border-b border-black h-4"></div>
                                                    <div className="w-full border-b border-black h-4"></div>
                                                </div>
                                                <div>
                                                    <div className="mb-1">e) ¿Cómo considera que su experiencia escolar influyo en su vida actual?</div>
                                                    <div className="w-full border-b border-black h-4"></div>
                                                    <div className="w-full border-b border-black h-4"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </PaginaBase>

                                {/* Pagina 3 */}
                                <PaginaBase title="Historia Clínica Psicológica (Cont.)" headerInfo={blankHeader}>
                                    <div className="text-[11px] space-y-4 h-full flex flex-col justify-between">
                                        <div>
                                            {/* VI. Antecedentes Laborales */}
                                            <div className="space-y-3">
                                                <h3 className="font-bold text-sm">VI. Antecedentes Laborales</h3>
                                                <div className="space-y-3 pl-2">
                                                    <div>
                                                        <div className="mb-1">a) ¿A qué edad tuvo su primer trabajo? / ¿Qué tiempo duró?</div>
                                                        <div className="w-full border-b border-black h-4"></div>
                                                    </div>
                                                    <div>
                                                        <div className="mb-1">b) En general, ¿Cómo describe la relación con sus jefes y compañeros?</div>
                                                        <div className="w-full border-b border-black h-4"></div>
                                                        <div className="w-full border-b border-black h-4"></div>
                                                    </div>
                                                    <div>
                                                        <div className="mb-1">c) ¿Ha experimentado estrés, ansiedad o malestar emocional relacionado con algún trabajo?</div>
                                                        <div className="w-full border-b border-black h-4"></div>
                                                        <div className="w-full border-b border-black h-4"></div>
                                                    </div>
                                                    <div>
                                                        <div className="mb-1">d) ¿Cómo describiría el ambiente de trabajo?</div>
                                                        <div className="w-full border-b border-black h-4"></div>
                                                    </div>
                                                    <div>
                                                        <div className="mb-1">e) ¿Ha tenido conflictos recientes en el trabajo?</div>
                                                        <div className="w-full border-b border-black h-4"></div>
                                                    </div>
                                                    <div>
                                                        <div className="mb-1">f) ¿Cómo se ha sentido en su trabajo últimamente?</div>
                                                        <div className="w-full border-b border-black h-4"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* VII. Motivo de Consulta */}
                                            <div className="space-y-2 mt-6">
                                                <h3 className="font-bold text-sm">VII. Motivo de Consulta</h3>
                                                <div className="border border-slate-800 rounded">
                                                    <div className="grid grid-cols-[120px_1fr] border-b border-slate-300">
                                                        <div className="p-2 font-bold bg-slate-50 border-r border-slate-300 flex items-center">Que le ocurre:</div>
                                                        <div className="p-2 h-16 border-b border-dotted border-slate-200"></div>
                                                    </div>
                                                    <div className="grid grid-cols-[120px_1fr] border-b border-slate-300">
                                                        <div className="p-2 font-bold bg-slate-50 border-r border-slate-300 flex items-center">Desde cuándo:</div>
                                                        <div className="p-2 h-12 border-b border-dotted border-slate-200"></div>
                                                    </div>
                                                    <div className="grid grid-cols-[120px_1fr] border-b border-slate-300">
                                                        <div className="p-2 font-bold bg-slate-50 border-r border-slate-300 flex items-center text-[10px]">Como afecta su vida personal, familiar, social o laboral:</div>
                                                        <div className="p-2 h-16 border-b border-dotted border-slate-200"></div>
                                                    </div>
                                                    <div className="grid grid-cols-[120px_1fr]">
                                                        <div className="p-2 font-bold bg-slate-50 border-r border-slate-300 flex items-center">Que espera del proceso terapéutico:</div>
                                                        <div className="p-2 h-12"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* VIII. Observaciones generales */}
                                            <div className="space-y-2 mt-6">
                                                <h3 className="font-bold text-sm">VIII. Observaciones generales</h3>
                                                <div className="border border-slate-800 rounded p-4 h-48 bg-white">
                                                    {/* Espacio en blanco */}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 mb-4">
                                            <div className="border-t border-black w-64 pt-2 font-bold text-xs uppercase">Firma del Clínico:</div>
                                        </div>
                                    </div>
                                </PaginaBase>
                            </>
                        )}

                        {/* --- BDI --- */}
                        {selectedForm === 'bdi' && (
                            <PaginaBase title="Inventario de Depresión de Beck (BDI-II)" headerInfo={blankHeader}>
                                <div className="text-xs">
                                    <p className="mb-4 italic">Instrucciones: Este cuestionario consta de 21 grupos de afirmaciones. Lea con atención cada uno de ellos y elija la frase que mejor describa cómo se ha sentido DURANTE LAS ÚLTIMAS DOS SEMANAS, incluyendo el día de hoy.</p>
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                        {BDI_ITEMS.map((item, i) => (
                                            <div key={i} className="break-inside-avoid mb-2">
                                                <div className="font-bold mb-1 border-b border-gray-300">{item}</div>
                                                <div className="space-y-1 ml-2">
                                                    <div className="flex items-center gap-2"><div className="w-3 h-3 border border-black"></div> 0 No me siento...</div>
                                                    <div className="flex items-center gap-2"><div className="w-3 h-3 border border-black"></div> 1 Me siento... (Leve)</div>
                                                    <div className="flex items-center gap-2"><div className="w-3 h-3 border border-black"></div> 2 Me siento... (Moderado)</div>
                                                    <div className="flex items-center gap-2"><div className="w-3 h-3 border border-black"></div> 3 Me siento... (Severo)</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </PaginaBase>
                        )}

                        {/* --- HAMA --- */}
                        {selectedForm === 'hama' && (
                            <PaginaBase title="Escala de Ansiedad de Hamilton (HAM-A)" headerInfo={blankHeader}>
                                <div className="text-xs">
                                    <p className="mb-6 italic">Instrucciones: Evalúe la intensidad de los siguientes síntomas marcando con una X la casilla correspondiente (0=Ausente, 4=Muy Grave).</p>
                                    <table className="w-full border-collapse border border-slate-900">
                                        <thead>
                                            <tr className="bg-slate-200">
                                                <th className="border border-slate-900 p-2 text-left">Síntoma / Item</th>
                                                <th className="border border-slate-900 p-2 w-8 text-center">0</th>
                                                <th className="border border-slate-900 p-2 w-8 text-center">1</th>
                                                <th className="border border-slate-900 p-2 w-8 text-center">2</th>
                                                <th className="border border-slate-900 p-2 w-8 text-center">3</th>
                                                <th className="border border-slate-900 p-2 w-8 text-center">4</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {HAMA_QUESTIONS.map((q, i) => (
                                                <tr key={i}>
                                                    <td className="border border-slate-900 p-2 text-[10px]">{q}</td>
                                                    <td className="border border-slate-900 p-2"></td>
                                                    <td className="border border-slate-900 p-2"></td>
                                                    <td className="border border-slate-900 p-2"></td>
                                                    <td className="border border-slate-900 p-2"></td>
                                                    <td className="border border-slate-900 p-2"></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr className="bg-slate-100 font-bold">
                                                <td className="border border-slate-900 p-2 text-right uppercase text-[10px]">Sumas Parciales</td>
                                                <td className="border border-slate-900 p-2 h-8"></td>
                                                <td className="border border-slate-900 p-2 h-8"></td>
                                                <td className="border border-slate-900 p-2 h-8"></td>
                                                <td className="border border-slate-900 p-2 h-8"></td>
                                                <td className="border border-slate-900 p-2 h-8"></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <div className="flex justify-end mt-4">
                                        <div className="border-2 border-slate-900 p-4 w-48 text-center rounded">
                                            <div className="uppercase font-black text-sm mb-2">Puntuación Total</div>
                                            <div className="h-12 border-b border-black"></div>
                                        </div>
                                    </div>
                                </div>
                            </PaginaBase>
                        )}

                        {/* --- ESFERAS --- */}
                        {selectedForm === 'esferas' && (
                            <PaginaBase title="Cuestionario de Esferas de Vida" headerInfo={blankHeader}>
                                <div className="text-xs">
                                    <p className="mb-4 italic">Instrucciones: Califique del 1 al 5 qué tanto está de acuerdo con las siguientes afirmaciones (1=Totalmente en desacuerdo, 5=Totalmente de acuerdo).</p>
                                    <div className="space-y-4">
                                        {['Personal', 'Interpersonal', 'Pareja', 'Familiar', 'Laboral', 'Virtual'].map(area => (
                                            <div key={area} className="break-inside-avoid">
                                                <h3 className="font-bold border-b border-black mb-2 uppercase bg-slate-100 p-1">{area}</h3>
                                                {ESFERAS_QUESTIONS.filter(q => q.area === area).map(q => (
                                                    <div key={q.id} className="flex justify-between items-end border-b border-dotted border-gray-400 py-1">
                                                        <span className="w-3/4">{q.text}</span>
                                                        <div className="flex gap-4">
                                                            <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </PaginaBase>
                        )}

                        {/* --- CEPER --- */}
                        {selectedForm === 'ceper' && (
                            <PaginaBase title="Cuestionario Exploratorio de Personalidad (CEPER-III)" headerInfo={blankHeader}>
                                <div className="text-[10px]">
                                    <p className="mb-4 italic font-bold">Instrucciones: Califique del 1 al 7 el grado en que cada frase le describe. (1=Nada, 7=Totalmente).</p>
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                                        {CEPER_QUESTIONS_LIST.map((q, i) => (
                                            <div key={i} className="flex justify-between items-end border-b border-gray-200">
                                                <span className="truncate w-[85%]">{i + 1}. {q.substring(q.indexOf('.') + 1)}</span>
                                                <span className="w-[15%] h-4 border-b border-black"></span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </PaginaBase>
                        )}

                        {/* --- OTIS --- */}
                        {selectedForm === 'otis' && (
                            <>
                                <PaginaBase title="Test de Inteligencia OTIS (Cuestionario)" headerInfo={blankHeader}>
                                    <div className="text-[10px] space-y-3 columns-2 gap-8">
                                        {OTIS_FULL_CONTENT.map((item, i) => (
                                            <div key={i} className="break-inside-avoid">
                                                <div className="font-bold mb-1 text-slate-900 whitespace-pre-wrap">{item.q}</div>
                                                {item.opts.length > 0 && (
                                                    <div className="pl-4 space-y-0.5 text-slate-700">
                                                        {item.opts.map((opt, idx) => (
                                                            <div key={idx} className="leading-tight">{opt}</div>
                                                        ))}
                                                    </div>
                                                )}
                                                {/* Espacio visual para preguntas abiertas */}
                                                {item.opts.length === 0 && <div className="h-4"></div>}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4 text-[10px] italic text-center w-full bg-slate-100 p-2 break-inside-avoid">
                                        Nota: Para las preguntas de figuras geométricas (65-67), consulte el anexo visual correspondiente si está disponible.
                                    </div>
                                </PaginaBase>
                                <PaginaBase title="Test OTIS - Hoja de Respuestas" headerInfo={{ ...blankHeader }}>
                                    <div className="grid grid-cols-4 gap-4 p-8">
                                        {Array.from({ length: 75 }, (_, i) => (
                                            <div key={i} className="flex items-center gap-2 border-b border-gray-300 pb-1">
                                                <span className="font-bold w-6">{i + 1}.</span>
                                                <div className="w-full h-6 border border-black bg-white"></div>
                                            </div>
                                        ))}
                                    </div>
                                </PaginaBase>
                            </>
                        )}

                        {/* --- MACHOVER --- */}
                        {selectedForm === 'machover' && (
                            <PaginaBase title="Test de la Figura Humana (Machover)" headerInfo={blankHeader}>
                                <div className="flex flex-col h-full items-center justify-center space-y-24">
                                    <div className="text-center space-y-4">
                                        <h2 className="text-2xl font-bold uppercase">Instrucciones</h2>
                                        <p className="text-lg">Por favor, dibuje una <span className="font-bold">Figura Humana Completa</span> en esta hoja.</p>
                                        <p className="text-sm text-gray-500">(Puede usar el reverso si es necesario)</p>
                                    </div>
                                    <div className="w-full h-[500px] border-2 border-dashed border-gray-300 rounded flex items-center justify-center text-gray-200 uppercase font-bold text-4xl">
                                        Espacio para Dibujo
                                    </div>
                                </div>
                            </PaginaBase>
                        )}

                    </div>
                </main>
            </div>
        </div>
    );
};

const MenuButton = ({ id, label, icon, current, set }) => (
    <button
        onClick={() => set(id)}
        className={`w-full text-left px-4 py-3 rounded-lg font-medium flex items-center gap-3 transition-all ${current === id ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-600 hover:bg-slate-100'}`}
    >
        {icon}
        <span className="text-sm">{label}</span>
    </button>
);

export default BlankFormsView;

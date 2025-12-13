import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePatients } from '../../context/PatientsContext';
import { ROLES_FAMILIA, ESFERAS_QUESTIONS, MACHOVER_INDICADORES, CEPER_STYLES_MAP } from '../../utils/constants';
import { ArrowLeft, Save } from 'lucide-react';

// UI Components
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import PrintView from './PrintView';

// Modules
import DatosGenerales from '../modules/DatosGenerales';
import HistoriaClinica from '../modules/HistoriaClinica';
import Familiograma from '../modules/Familiograma';
import EsferasVida from '../modules/EsferasVida';
import Ceper from '../modules/Ceper';
import AnsiedadHamA from '../modules/AnsiedadHamA';
import DepresionBDI from '../modules/DepresionBDI';
import InteligenciaOtis from '../modules/InteligenciaOtis';
import Machover from '../modules/Machover';
import NotasClinicas from '../modules/NotasClinicas';
import InformeFinal from '../modules/InformeFinal';

const INITIAL_STATE = {
    pasanteHeader: "Pasante: Erika Reboull del Moral",
    presentaMatricula: "201210171371",
    especialidad: "Especialidad en Orientación Psicológica",
    fechaElaboracion: new Date().toLocaleDateString('es-MX'),
    folio: "001",
    catedratico: "Dr. Sergio Vladimir Ríos",
    grupo: "EOP 101",
    introduccionTexto: "El expediente clínico psicológico constituye un recurso fundamental dentro del proceso de evaluación e intervención terapéutica. Su función principal es organizar, integrar y documentar de manera sistemática toda la información relacionada con el consultante...",

    pacienteNombre: "", edad: "", fechaNacimiento: "", sexo: "F", estadoCivil: "", domicilio: "",
    telefono: "", lugarOrigen: "", escolaridad: "", ocupacion: "", religion: "", referidoPor: "",

    motivoConsulta: "",
    antecedentesHeredofamiliares: "",
    antecedentesPersonalesPatologicos: "",
    antecedentesPersonalesNoPatologicos: "",
    historiaPadecimientoActual: "",
    filiacionPresentacion: "",
    filiacionRelacion: "",

    // III. Datos Biográficos
    bioFamiliaDinama: "", bioFamiliaRelacion: "", bioFamiliaEventos: "", bioFamiliaRol: "",
    bioAmistadesRed: "", bioAmistadesCalidad: "", bioAmistadesCompartir: "", bioAmistadesConflictos: "", bioAmistadesFrecuencia: "",
    bioParejaActual: "", bioParejaRelacion: "", bioParejaSatisfaccion: "", bioParejaConflictos: "", bioParejaExpectativas: "",

    // IV. Factores Biológicos
    bioSaludPreocupacion: "", bioMedicamentos: "", bioDeporte: "", bioSuenoHoras: "",
    bioSaludActual: "", bioDiagnosticosPrevios: "",

    // V. Antecedentes Escolares
    escGrado: "", escDesempeno: "", escConducta: "", escSituaciones: "", escExperiencia: "",

    // VI. Antecedentes Laborales
    labPrimerTrabajo: "", labRelacionJefes: "", labEstres: "", labAmbiente: "", labConflictos: "", labSentido: "",

    // VII. Motivo de Consulta (Estructurado)
    motivoQueOcurre: "", motivoDesdeCuando: "", motivoComoAfecta: "", motivoExpectativas: "",
    motivoConsulta: "", // Keeping for backward compatibility or summary

    // VIII. Observaciones
    observacionesGenerales: "",

    familiogramaInterpretacion: "",
    familia: [{ id: 'paciente', rol: 'Paciente', nombre: '', edad: '', genero: 'F', finado: false }],
    familiaRelaciones: [],

    esferasInterpretacion: "",
    ...Object.fromEntries(Array.from({ length: 30 }, (_, i) => [`esferaQ${i + 1}`, 3])),

    ...Object.fromEntries(Array.from({ length: 170 }, (_, i) => [`ceperQ${i + 1}`, ""])),
    ceperInterpretacion: "",

    ...Object.fromEntries(MACHOVER_INDICADORES.map((ind, i) => [`machoverInd${i}`, ""])),
    ...Object.fromEntries(MACHOVER_INDICADORES.map((ind, i) => [`machoverInt${i}`, ""])),
    machoverHistoria: "",
    machoverInterpretacionGlobal: "",

    ...Object.fromEntries(Array.from({ length: 14 }, (_, i) => [`hama${i + 1}`, "0"])),

    bdiFecha: "",
    ...Object.fromEntries(Array.from({ length: 21 }, (_, i) => [`bdi${i + 1}`, "0"])),

    otisAciertos: "", otisErrores: "", otisDiagnostico: "",
    ...Object.fromEntries(Array.from({ length: 75 }, (_, i) => [`otis${i + 1}`, ""])),

    notasClinicas: [
        {
            fecha: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toLocaleDateString(),
            s: "Paciente acude refiriendo irritabilidad constante y 'nervios' que le impiden dormir. Menciona problemas laborales recientes.",
            o: "Se observa inquietud motora, habla acelerada. HAM-A: 28 pts (Ansiedad Moderada-Severa).",
            a: "Trastorno de ansiedad generalizada con síntomas somáticos predominantes. Mecanismos de afrontamiento deficientes.",
            p: "1. Psicoeducación sobre ansiedad.\n2. Entrenamiento en respiración diafragmática.\n3. Cita en 1 semana para evaluación profunda."
        },
        {
            fecha: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
            s: "Reporta ligera mejoría en el sueño tras aplicar respiración, pero sigue preocupado por 'el futuro'.",
            o: "Menor agitación que la sesión anterior. Se aplica BDI-II: 18 pts (Depresión Leve).",
            a: "Ansiedad persistente con rasgos depresivos reactivos al estrés crónico. Riesgo suicida bajo.",
            p: "1. Iniciar reestructuración cognitiva (Identificación de pensamientos catastróficos).\n2. Continuar ejercicios de relajación diario."
        },
        {
            fecha: new Date().toLocaleDateString(),
            s: "Se siente más en control. Ha logrado identificar detonantes de su ansiedad en el trabajo.",
            o: "Discurso más coherente y pausado. Afecto modulado. Realiza role-playing de asertividad.",
            a: "Evolución favorable. Adquisición de herramientas de regulación emocional.",
            p: "1. Fortalecer técnicas asertivas.\n2. Mantener sesiones quincenales.\n3. Revaluación psicométrica en 1 mes."
        }
    ],
    informeResumen: "", informeDiagnostico: "", informePronostico: "", informeRecomendaciones: "",

    avisoPrivacidadAceptado: false,
    consentimientoInformadoAceptado: false
};

const DEMO_DATA = {
    pacienteNombre: "Daniela Almazan Perez",
    edad: "34",
    fechaNacimiento: "19/Junio/1991",
    sexo: "F",
    estadoCivil: "Unión Libre",
    escolaridad: "Licenciatura",
    ocupacion: "Nutriologa",
    domicilio: "Chihuahua #207",
    telefono: "2281882819",
    nacionalidad: "Mexicana",
    lugarOrigen: "Tlanepantla, Edo. Mexico",
    referidoPor: "Propia Cuenta",

    filiacionPresentacion: "La consultante llega puntual a la entrevista inicial, se presenta de manera cordial. Expresa de manera clara que presenta periodos constantes de llanto e inseguridad relacionado con la pérdida de embarazo ocurrida hace 4 meses. Menciona que este evento ha generado inestabilidad emocional y conflictos en la relación de pareja.",
    filiacionRelacion: "Durante la entrevista, la consultante mantiene una actitud cooperadora y respetuosa. Responde de manera clara y coherente a lo que se le pregunta, sin embargo, al abordar el tema relacionado con la pérdida del embarazo, muestra pausas prolongadas y tono de voz bajo. Mantiene contacto visual intermitente y postura tensa.",

    bioFamiliaDinama: "Con su pareja, la consultante refiere que la dinámica de pareja es conflictiva.",
    bioFamiliaRelacion: "Menciona sentir inseguridad y poca comunicación (pareja).",
    bioFamiliaEventos: "Pérdida de un bebé.",
    bioFamiliaRol: "Ama de casa, aunque es Profesional refiere que se siente frustrada.",

    bioAmistadesRed: "Si",
    bioAmistadesCalidad: "Menciona que sus redes de apoyo son sólidas.",
    bioAmistadesCompartir: "Si",
    bioAmistadesConflictos: "No",
    bioAmistadesFrecuencia: "Una vez a la semana",

    bioParejaActual: "Si. Hace 2 años.",
    bioParejaRelacion: "Poca comunicación y hay roces en la convivencia (inseguridad).",
    bioParejaSatisfaccion: "Poco satisfecha.",
    bioParejaConflictos: "Si, violencia verbal.",
    bioParejaExpectativas: "Idealización, que sea una relación estable y una fuente de seguridad.",

    bioSaludPreocupacion: "Si. Artritis Reumatoide.",
    bioMedicamentos: "Diclofenaco 100 mg. Prednisona 5 mg.",
    bioDeporte: "Si. Ocasionalmente.",
    bioSuenoHoras: "7",
    bioSaludActual: "Artritis Reumatoide",
    bioDiagnosticosPrevios: "Miomas",

    escGrado: "Posgrado",
    escDesempeno: "Bueno",
    escConducta: "No",
    escSituaciones: "Si. Cambio de residencia.",
    escExperiencia: "Si influyo en continuar con la autoexigencia en su vida personal.",

    labPrimerTrabajo: "24 años. 1 año.",
    labRelacionJefes: "Buena",
    labEstres: "Si, mucho estrés por conductas perfeccionistas.",
    labAmbiente: "Buena colaboración y de respeto.",
    labConflictos: "No",
    labSentido: "Un espacio seguro donde encuentra apoyo.",

    motivoQueOcurre: "\"Desde la pérdida de mi bebé me siento triste y lloro\".",
    motivoDesdeCuando: "\"Esto me pasa desde hace 4 meses\". \"Han sido muy difíciles y aun más porque mi pareja no me comprende\".",
    motivoComoAfecta: "\"Me afecto mucho en lo personal y con mi pareja\". \"El trabajo es mi único espacio seguro ya que me siento ocupada\".",
    motivoExpectativas: "\"Quiero sentirme mejor y entender cómo manejar esto\". \"Espero apoyo emocional para superar mi duelo y mejorar mi relación de pareja\".",

    observacionesGenerales: "Refiere que desde la pérdida de su embarazo tiene episodios de llanto, inseguridad y pensamientos recurrentes sobre lo ocurrido. Expresa que este evento ha afectado su vida personal, generando sentimientos de tristeza y dificultad para regular sus emociones. Señala que su relación de pareja se ha visto deteriorada, percibe distanciamiento y falta de compresión por parte de su pareja, lo cual le genera temor a perderlo y aumenta sus conflictos. Menciona que en el ámbito laboral logra mantenerse funcional y considera un espacio que le permite distraerse y no pensar en su situación.",

    // Calculated scores match the narrative
    hama1: "2", hama2: "3", hama3: "1", hama4: "1", hama5: "2", hama6: "2",
    bdi1: "1", bdi2: "2", bdi3: "1", bdi4: "2", bdi5: "1"
};

const ClinicalRecordView = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getPatient, updatePatient } = usePatients();

    const [activeTab, setActiveTab] = useState('datos-generales');
    const [printMode, setPrintMode] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    // Initialize with default template, then load patient data
    const [formData, setFormData] = useState(INITIAL_STATE);

    useEffect(() => {
        if (id) {
            const patient = getPatient(id);
            if (patient) {
                // Merge initial state with saved patient data to ensure new fields are present
                setFormData(prev => ({ ...prev, ...patient }));
            } else {
                navigate('/'); // Redirect if not found
            }
        }
    }, [id, getPatient, navigate]);

    // Debounced save
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (id) {
                setIsSaving(true);
                updatePatient(id, formData);
                setTimeout(() => setIsSaving(false), 500);
            }
        }, 1000); // Auto-save after 1 second of inactivity
        return () => clearTimeout(timeoutId);
    }, [formData, id, updatePatient]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const resultados = useMemo(() => {
        const esferas = {};
        const areas = ['Personal', 'Interpersonal', 'Pareja', 'Familiar', 'Laboral', 'Virtual'];
        areas.forEach(area => {
            const qs = ESFERAS_QUESTIONS.filter(q => q.area === area);
            const sum = qs.reduce((acc, q) => acc + parseInt(formData[`esferaQ${q.id}`] || 3), 0);
            esferas[area] = sum;
        });

        let hamaTotal = 0;
        for (let i = 1; i <= 14; i++) hamaTotal += parseInt(formData[`hama${i}`] || 0);
        let hamaInter = "Ansiedad Leve";
        if (hamaTotal >= 17 && hamaTotal < 25) hamaInter = "Ansiedad Leve a Moderada";
        else if (hamaTotal >= 25 && hamaTotal < 30) hamaInter = "Ansiedad Moderada a Severa";
        else if (hamaTotal >= 30) hamaInter = "Ansiedad Severa";

        let bdiTotal = 0;
        for (let i = 1; i <= 21; i++) bdiTotal += parseInt(formData[`bdi${i}`] || 0);
        let bdiInter = "Depresión Mínima";
        if (bdiTotal > 13 && bdiTotal <= 19) bdiInter = "Depresión Leve";
        else if (bdiTotal > 19 && bdiTotal <= 28) bdiInter = "Depresión Moderada";
        else if (bdiTotal > 28) bdiInter = "Depresión Grave";

        const ceper = {};
        Object.entries(CEPER_STYLES_MAP).forEach(([style, questions]) => {
            let score = 0;
            questions.forEach(qIndex => {
                const val = formData[`ceperQ${qIndex}`];
                score += (typeof val === 'number' || !isNaN(parseInt(val))) ? parseInt(val || 0) : 0;
            });
            ceper[style] = score;
        });

        return { esferas, hama: { score: hamaTotal, text: hamaInter }, bdi: { score: bdiTotal, text: bdiInter }, ceper };
    }, [formData]);

    // --- ACTIONS ---
    const agregarFamiliar = (rolId) => {
        const rolInfo = ROLES_FAMILIA.find(r => r.id === rolId);
        let genero = rolInfo.genero;
        if (genero === 'Opuesto') genero = formData.sexo === 'F' ? 'M' : 'F';
        setFormData(prev => ({ ...prev, familia: [...prev.familia, { id: Date.now().toString(), rol: rolId, nombre: '', edad: '', genero: genero, finado: false, label: rolInfo.label }] }));
    };
    const eliminarFamiliar = (id) => setFormData(prev => ({ ...prev, familia: prev.familia.filter(f => f.id !== id) }));
    const updateFamiliar = (id, field, value) => setFormData(prev => ({ ...prev, familia: prev.familia.map(f => f.id === id ? { ...f, [field]: value } : f) }));

    const generarInterpretacionEsferas = () => {
        const scores = Object.entries(resultados.esferas).map(([area, val]) => ({ area, score: val }));
        scores.sort((a, b) => b.score - a.score);
        const fortalezas = scores.filter(s => s.score >= 20).map(s => `${s.area} (${s.score}/25)`);
        const debilidades = scores.filter(s => s.score <= 15).map(s => `${s.area} (${s.score}/25)`);
        let analisis = `ANÁLISIS DE ESFERAS DE VIDA\n\nLos puntajes muestran un funcionamiento desigual en el equilibrio vital del consultante. `;
        if (fortalezas.length > 0) analisis += `Se identifican como áreas de fortaleza: ${fortalezas.join(", ")}, lo que sugiere recursos adaptativos y satisfacción en estos ámbitos. `;
        if (debilidades.length > 0) analisis += `Por otro lado, las esferas con mayor vulnerabilidad son: ${debilidades.join(", ")}, indicando afectación emocional y necesidad de intervención específica.`;
        setFormData(prev => ({ ...prev, esferasInterpretacion: analisis }));
    };

    const generarInterpretacionFamiliograma = () => {
        const tamano = formData.familia.length;
        const rels = formData.familiaRelaciones || [];
        const padre = formData.familia.find(f => f.rol === 'Padre');
        const madre = formData.familia.find(f => f.rol === 'Madre');
        const paciente = formData.familia.find(f => f.rol === 'Paciente');

        let analisis = `INTERPRETACIÓN SISTÉMICA ESTRUCTURAL\n\n`;
        analisis += `ESTRUCTURA: Sistema familiar compuesto por ${tamano} miembros. `;

        // Subsistema Conyugal / Parental
        if (padre && madre) {
            const relPadres = rels.find(r => (r.from === padre.id && r.to === madre.id) || (r.from === madre.id && r.to === padre.id));
            if (relPadres) {
                if (relPadres.type === 'conflictiva') analisis += `Se observa un subsistema parental con interacciones conflictivas, lo que sugiere dificultad en la resolución de problemas conjunta. `;
                else if (relPadres.type === 'distante') analisis += `El subsistema conyugal presenta distanciamiento emocional, pudiendo afectar la cohesión familiar. `;
                else if (relPadres.type === 'ruptura') analisis += `Existe una ruptura o separación explícita en el subsistema parental. `;
            }
        }

        // Relación con el Paciente (Límites)
        const relsPaciente = rels.filter(r => r.from === paciente?.id || r.to === paciente?.id);
        if (relsPaciente.length > 0) {
            analisis += `\n\nDINÁMICA DEL PACIENTE: `;
            relsPaciente.forEach(r => {
                const otherId = r.from === paciente.id ? r.to : r.from;
                const other = formData.familia.find(f => f.id === otherId);
                if (other) {
                    if (r.type === 'conflictiva') analisis += `Mantiene una relación conflictiva con ${other.label || other.rol}, indicando posibles tensiones no resueltas. `;
                    if (r.type === 'estrecha') analisis += `Vínculo estrecho con ${other.label || other.rol}, que podría sugerir alianzas o dependencia. `;
                    if (r.type === 'ruptura') analisis += `Corte emocional (cutoff) con ${other.label || other.rol}. `;
                }
            });
        }

        // Triangulacion
        // (Simple heuristic: Conflict Parent-Parent AND Close Patient-Parent)
        if (padre && madre && paciente) {
            const relPadres = rels.find(r => (r.from === padre.id && r.to === madre.id) || (r.from === madre.id && r.to === padre.id));
            const relPacMadre = rels.find(r => (r.from === paciente.id && r.to === madre.id) || (r.from === madre.id && r.to === paciente.id));

            if (relPadres?.type === 'conflictiva' && relPacMadre?.type === 'estrecha') {
                analisis += `\n\nHIPÓTESIS SISTÉMICA: Posible triangulación donde el paciente podría estar funcionando como aliado de la figura materna ante el conflicto conyugal.`;
            }
        }

        analisis += `\n\nSe recomienda explorar la flexibilidad de los límites y la presencia de jerarquías funcionales.`;

        setFormData(prev => ({ ...prev, familiogramaInterpretacion: analisis }));
    };

    const generarInterpretacionCeper = () => {
        const scores = Object.entries(resultados.ceper).map(([estilo, puntaje]) => ({ estilo, puntaje }));
        scores.sort((a, b) => b.puntaje - a.puntaje);
        const top3 = scores.slice(0, 3);
        let texto = `PERFIL DE PERSONALIDAD (CEPER III)\n\nPredomina el estilo ${top3[0].estilo} (${top3[0].puntaje} pts). Secundariamente aparecen rasgos del estilo ${top3[1].estilo} y ${top3[2].estilo}.\n\n`;
        setFormData(prev => ({ ...prev, ceperInterpretacion: texto }));
    };

    // --- PRINTING LOGIC ---
    useEffect(() => {
        if (printMode) {
            const timer = setTimeout(() => {
                window.print();
                setPrintMode(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [printMode]);

    const handlePrint = () => { setPrintMode(true); };
    const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col font-sans text-gray-800">
            {!printMode && (
                <div className="bg-slate-900 text-white p-2 flex justify-between items-center px-4 shadow-md sticky top-0 z-50">
                    <button onClick={() => navigate('/')} className="flex items-center gap-2 hover:bg-slate-700 px-3 py-1.5 rounded transition-colors text-sm font-semibold">
                        <ArrowLeft size={16} /> Volver al Tablero
                    </button>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setFormData(prev => ({ ...prev, ...DEMO_DATA }))}
                            className="bg-slate-700 hover:bg-slate-600 text-xs px-3 py-1 rounded transition-colors border border-slate-600"
                        >
                            🪄 Llenar Ejemplo
                        </button>
                        {isSaving && <span className="text-xs text-yellow-400 flex items-center gap-1 animate-pulse"><Save size={12} /> Guardando...</span>}
                        {!isSaving && <span className="text-xs text-green-400 flex items-center gap-1"><Save size={12} /> Guardado</span>}
                    </div>
                </div>
            )}

            {!printMode && (
                <Header
                    setPrintMode={setPrintMode}
                    handlePrint={handlePrint}
                    toggleSidebar={toggleSidebar}
                    isSidebarOpen={isSidebarOpen}
                />
            )}

            <div className={`flex flex-1 w-full ${printMode ? 'overflow-visible h-auto block' : 'overflow-hidden'}`}>
                {!printMode && (
                    <Sidebar
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        isOpen={isSidebarOpen}
                        toggleSidebar={toggleSidebar}
                    />
                )}

                <main className={`flex-1 flex flex-col min-w-0 bg-white relative ${printMode ? 'w-full h-auto overflow-visible block' : 'overflow-y-auto'}`}>
                    {printMode ? (
                        <PrintView formData={formData} resultados={resultados} setPrintMode={setPrintMode} />
                    ) : (
                        <div className="flex-1 w-full bg-slate-50 h-full p-4 md:p-8">
                            {activeTab === 'datos-generales' && <DatosGenerales formData={formData} handleChange={handleChange} />}
                            {activeTab === 'historia-clinica' && <HistoriaClinica formData={formData} handleChange={handleChange} />}
                            {activeTab === 'familiograma' && <Familiograma formData={formData} handleChange={handleChange} agregarFamiliar={agregarFamiliar} eliminarFamiliar={eliminarFamiliar} updateFamiliar={updateFamiliar} generarInterpretacionFamiliograma={generarInterpretacionFamiliograma} />}
                            {activeTab === 'esferas' && <EsferasVida formData={formData} setFormData={setFormData} handleChange={handleChange} resultados={resultados} generarInterpretacionEsferas={generarInterpretacionEsferas} />}
                            {activeTab === 'ceper' && <Ceper formData={formData} setFormData={setFormData} handleChange={handleChange} resultados={resultados} generarInterpretacionCeper={generarInterpretacionCeper} />}
                            {activeTab === 'hama' && <AnsiedadHamA formData={formData} handleChange={handleChange} resultados={resultados} />}
                            {activeTab === 'bdi' && <DepresionBDI formData={formData} handleChange={handleChange} resultados={resultados} />}
                            {activeTab === 'otis' && <InteligenciaOtis formData={formData} handleChange={handleChange} />}
                            {activeTab === 'machover' && <Machover formData={formData} setFormData={setFormData} handleChange={handleChange} />}
                            {activeTab === 'notas' && <NotasClinicas formData={formData} setFormData={setFormData} />}
                            {activeTab === 'informe' && <InformeFinal formData={formData} setFormData={setFormData} handleChange={handleChange} resultados={resultados} />}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default ClinicalRecordView;

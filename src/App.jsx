import React, { useState, useMemo, useEffect } from 'react';
import { ROLES_FAMILIA, ESFERAS_QUESTIONS, MACHOVER_INDICADORES } from './utils/constants';

// UI Components
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import PrintView from './components/views/PrintView';

// Modules
import DatosGenerales from './components/modules/DatosGenerales';
import HistoriaClinica from './components/modules/HistoriaClinica';
import Familiograma from './components/modules/Familiograma';
import EsferasVida from './components/modules/EsferasVida';
import Ceper from './components/modules/Ceper';
import AnsiedadHamA from './components/modules/AnsiedadHamA';
import DepresionBDI from './components/modules/DepresionBDI';
import InteligenciaOtis from './components/modules/InteligenciaOtis';
import Machover from './components/modules/Machover';
import NotasClinicas from './components/modules/NotasClinicas';
import InformeFinal from './components/modules/InformeFinal';

const ClinicalRecordApp = () => {
    const [activeTab, setActiveTab] = useState('datos-generales');
    const [printMode, setPrintMode] = useState(false);

    // --- STATE INITIALIZATION ---
    const [formData, setFormData] = useState({
        pasanteHeader: "Pasante: Erika Reboull del Moral",
        presentaMatricula: "201210171371",
        especialidad: "Especialidad en Orientación Psicológica",
        fechaElaboracion: "06 de diciembre de 2025",
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

        familiogramaInterpretacion: "",
        familia: [{ id: 'paciente', rol: 'Paciente', nombre: '', edad: '', genero: 'F', finado: false }],

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
                fecha: "04-nov-25",
                s: "La consultante refiere sentirse triste y presentar episodios constantes de llanto e inseguridad relacionados con la pérdida de embarazo ocurrida hace 4 meses. Menciona que este evento ha generado inestabilidad y conflictos en la relación de pareja.",
                o: "Se estableció rapport. Consultante puntual y cordial. Actitud cooperadora y respetuosa durante la entrevista. Responde de manera coherente pero con tono de voz bajo y pausas prolongadas al hablar del duelo. Se aplicó Historia Clínica, Consentimiento Informado y Aviso de Privacidad.",
                a: "309.24 Trastorno adaptativo con ansiedad (DSM-5) / F43.2 Reacción a estrés (CIE-10). Se identifican mecanismos de defensa y duelo no resuelto.",
                p: "Continuar con evaluación. Aplicación de Familiograma y pruebas psicométricas iniciales en la siguiente sesión."
            },
            {
                fecha: "12-nov-25",
                s: "Refiere incomodidad leve al explorar áreas personales y de pareja. Manifiesta sentimientos de fracaso y pérdida de interés.",
                o: "Se elaboró Familiograma. Aplicación de Escala Likert de Esferas de Vida y BDI-II. Actitud colaborativa pero con expresión facial seria e introspectiva. Ritmo de respuesta constante en pruebas.",
                a: "309.24 Trastorno adaptativo con ansiedad y síntomas depresivos mixtos. BDI-II sugiere sintomatología depresiva moderada.",
                p: "Profundizar en evaluación de personalidad y dinámica inconsciente mediante pruebas proyectivas."
            },
            {
                fecha: "19-nov-25",
                s: "Expresa nostalgia y dificultad para asignar título a su dibujo. Muestra necesidad de confirmación durante la evaluación.",
                o: "Aplicación de Test de la Figura Humana (Machover) y CEPER III. En DFH: inseguridad, trazos suaves, énfasis en cabello. En CEPER III: ritmo lento (>1 hora), titubeos en ítems de autodemanda.",
                a: "309.24 Trastorno adaptativo con ansiedad y estado de ánimo deprimido. Indicadores proyectivos de inseguridad y bloqueo emocional.",
                p: "Completar batería con evaluación de ansiedad (HAM-A) e inteligencia (OTIS)."
            },
            {
                fecha: "26-nov-25",
                s: "Menciona sentirse mejor que otros días.",
                o: "Aplicación de HAM-A y OTIS Sencillo. Respuestas ágiles en HAM-A. Desempeño fluido en OTIS (45 min). Actitud más relajada, lenguaje corporal abierto y espontáneo.",
                a: "309.24 Trastorno adaptativo con ansiedad. Mejora en la disposición emocional sugiere alianza terapéutica positiva o disminución temporal de síntomas.",
                p: "Integración del Informe Final y sesión de devolución de resultados."
            }
        ],
        informeResumen: "", informeDiagnostico: "", informePronostico: "", informeRecomendaciones: "",

        avisoPrivacidadAceptado: false,
        consentimientoInformadoAceptado: false
    });

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

        const perfiles = ["Paranoide", "Esquizoide", "Esquizotípico", "Histriónico", "Narcisista", "Antisocial", "Límite", "Evitativo", "Dependiente", "Obsesivo-C"];
        const ceper = {};
        perfiles.forEach((perfil, idx) => {
            let score = 0;
            for (let i = 1; i <= 170; i++) {
                if ((i - 1) % perfiles.length === idx) {
                    const val = formData[`ceperQ${i}`];
                    score += (typeof val === 'number' || !isNaN(parseInt(val))) ? parseInt(val || 0) : 0;
                }
            }
            ceper[perfil] = score;
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
        let interpretacion = `INTERPRETACIÓN SISTÉMICA ESTRUCTURAL\n\nSistema familiar compuesto por ${tamano} miembros. Se recomienda explorar la dinámica de los subsistemas y los límites generacionales detectados en el gráfico.`;
        setFormData(prev => ({ ...prev, familiogramaInterpretacion: interpretacion }));
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
            // Wait for render cycle to complete and browser to repaint
            const timer = setTimeout(() => {
                window.print();
                setPrintMode(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [printMode]);

    const handlePrint = () => { setPrintMode(true); };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col font-sans text-gray-800">
            {!printMode && (
                <Header
                    setPrintMode={setPrintMode}
                    handlePrint={handlePrint}
                    toggleSidebar={toggleSidebar}
                    isSidebarOpen={isSidebarOpen}
                />
            )}

            <div className={`flex flex-1 w-full overflow-hidden ${printMode ? '' : ''}`}>
                {!printMode && (
                    <Sidebar
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        isOpen={isSidebarOpen}
                        toggleSidebar={toggleSidebar}
                    />
                )}

                <main className={`flex-1 flex flex-col min-w-0 bg-white relative overflow-y-auto ${printMode ? 'w-full' : ''}`}>
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

export default ClinicalRecordApp;
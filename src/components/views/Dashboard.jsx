import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePatients } from '../../context/PatientsContext';
import { Plus, Search, User, Trash2, FileText, Calendar, Sparkles } from 'lucide-react';

const Dashboard = () => {
    const { patients, addPatient, deletePatient } = usePatients();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleCreatePatient = () => {
        const id = addPatient({
            pacienteNombre: '',
            fechaElaboracion: new Date().toLocaleDateString('es-MX'),
            status: 'Borrador'
        });
        navigate(`/expediente/${id}`);
    };

    const handleCreateDemo = () => {
        // Generar respuestas dummy para Esferas (30 items)
        const esferasData = {};
        for (let i = 1; i <= 30; i++) esferasData[`esferaQ${i}`] = Math.random() > 0.3 ? 3 : 2;
        esferasData.esferasInterpretacion = "ANÁLISIS DE ESFERAS DE VIDA:\n\nEl sujeto muestra un funcionamiento adaptativo en las esferas laboral y familiar (Slaikeu, 2000), reportando satisfacción con su desempeño profesional y el apoyo de su núcleo primario. Sin embargo, se identifican áreas de oportunidad significativas en la esfera Personal e Introspectiva (Ítems 5, 8, 12), donde reporta descuidos en su autocuidado y falta de tiempo para la reflexión personal. La esfera Social se encuentra ligeramente disminuida, limitando sus interacciones a lo estrictamente necesario por 'falta de tiempo'. Se recomienda fomentar actividades lúdicas y de autoconocimiento para restablecer la homeostasis biopsicosocial (Caballo, 2008).";

        // Generar respuestas dummy para CEPER (170 items)
        const ceperData = {};
        for (let i = 1; i <= 170; i++) ceperData[`ceperQ${i}`] = Math.random() > 0.8 ? 6 : 1;
        // Forzar rasgo obsesivo y paranoide leve
        [10, 24, 38, 52, 67, 81, 95].forEach(q => ceperData[`ceperQ${q}`] = 7);
        [1, 15, 29].forEach(q => ceperData[`ceperQ${q}`] = 6);
        ceperData.ceperInterpretacion = "PERFIL DE PERSONALIDAD (Cuestionario Exploratorio de Personalidad III - Caballo, V. E.):\n\nEl análisis cuantitativo arroja una elevación significativa en el estilo Obsesivo-Compulsivo (75 puntos). Según Caballo (2004), este patrón se caracteriza por una excesiva preocupación por el orden, perfeccionismo, rigidez mental y una fuerte necesidad de control interpersonal y ambiental. El sujeto tiende a ser hipercrítico consigo mismo y con los demás, lo cual es congruente con la 'Teoría de los Estilos de Personalidad' de Millon (citado en Caballo, 2011).\n\nSecundariamente, se observa una elevación moderada en el estilo Paranoide (55 puntos), lo que sugiere cierta suspicacia y cautela excesiva (Caballo y Salazar, 2019). No se observan indicadores psicóticos.";

        // Generar respuestas dummy para OTIS (75 items)
        const otisData = {};
        for (let i = 1; i <= 75; i++) otisData[`otis${i}`] = ['a', 'b', 'c', 'd'][Math.floor(Math.random() * 4)];
        otisData.otisAciertos = 48;
        otisData.otisErrores = 27;
        otisData.otisDiagnostico = "Superior al Término Medio (CI aprox. 110-119) [Referencia: Baremos Otis Sencillo]";

        // Machover dummy
        const machoverData = {
            machoverHistoria: "Esta es la historia de Roberto, un arquitecto que trabaja mucho. En el dibujo está parado frente a un edificio que él mismo diseñó. Se siente orgulloso pero también muy cansado porque su jefe le exige demasiado. Está pensando en que ojalá tuviera más tiempo para ver a su familia, pero tiene miedo de fallar en su trabajo y que 'todo se derrumbe'. A pesar del estrés, cree que si se esfuerza lo suficiente (mecanismo de sublimación), todo saldrá bien al final.",
            machoverInterpretacionGlobal: "ANÁLISIS PROYECTIVO INTEGRAL (Test de la Figura Humana - Machover, 1949):\n\n1. ASPECTOS ESTRUCTURALES: Figura de tamaño mediano ubicada al centro de la página, lo que denota un adecuado equilibrio entre introversión y extraversión (Portuondo, 2007). El trazo es fuerte y remarcado, lo cual es interpretado por Koppitz como indicador de ansiedad y tensión interna acumulada.\n\n2. INDICADORES DE CONTENIDO: La cabeza aparece desproporcionadamente grande, un signo clásico de intelectualización y sobrevaloración de las capacidades cognitivas como refugio ante lo afectivo (Rasgo Obsesivo; Esquivel, 2010). Los ojos cerrados sugieren una tendencia a la evasión de la realidad dolorosa (introversión defensiva). La omisión de las manos refuerza la hipótesis de dificultades en el contacto interpersonal o sentimientos de culpa relacionados con el 'hacer' (Machover, 1949).\n\n3. SINTESIS: Se proyecta una personalidad neurótica de tipo obsesivo según la clasificación dinámica, con ansiedad latente y defensas intelectuales."
        };
        // Llenar indicadores específicos
        machoverData[`machoverInd0`] = "Cabeza desproporcionadamente grande"; machoverData[`machoverInt0`] = "Intelectualización, énfasis en el pensamiento sobre la emoción (Portuondo, 2007).";
        machoverData[`machoverInd1`] = "Ojos cerrados o sin pupilas"; machoverData[`machoverInt1`] = "Evasión de la realidad, egocentrismo, negativa a 'ver' problemas dolorosos (Machover, 1949).";
        machoverData[`machoverInd2`] = "Línea media marcada (botones, cierre)"; machoverData[`machoverInt2`] = "Dependencia materna, preocupación somática, inseguridad (Esquivel, 2010).";
        machoverData[`machoverInd3`] = "Manos ocultas en bolsillos"; machoverData[`machoverInt3`] = "Evasión de contacto, culpa o agresividad reprimida (Koppitz).";
        machoverData[`machoverInd4`] = "Pies pequeños y en punta"; machoverData[`machoverInt4`] = "Inseguridad, falta de arraigo, dependencia.";

        const id = addPatient({
            pacienteNombre: 'Juan Pérez Demo',
            edad: '35',
            sexo: 'M',
            ocupacion: 'Arquitecto y Docente Universitario',
            escolaridad: 'Maestría en Urbanismo',
            estadoCivil: 'Casado',
            religion: 'Católico no practicante',
            lateralidad: 'Diestro',
            lugarOrigen: 'Xalapa, Veracruz',
            telefono: '228-123-4567',
            domicilio: 'Av. Araucarias #123, Col. Indeco Ánimas, Xalapa, Ver.',
            referidoPor: 'Dr. Simi (Médico General)',
            grupo: 'Clínica Lunes 10am',
            folio: 'EXP-2023-001',
            catedratico: 'Dra. María Fernanda Psicóloga',

            introduccionTexto: "El presente expediente clínico psicológico integra los resultados de la evaluación diagnóstica realizada al paciente masculino de 35 años, quien acude a consulta de manera voluntaria. El proceso constó de 4 sesiones de entrevista clínica inicial y 3 sesiones de aplicación de baterías psicométricas. El objetivo del presente documento es establecer un diagnóstico nosológico y funcional, así como proponer un plan de tratamiento acorde a las necesidades detectadas, siguiendo los lineamientos éticos de la Sociedad Mexicana de Psicología (2010).",

            filiacionPresentacion: "Paciente masculino de 35 años de edad cronológica y aparente, de complexión ectobizarra, tez morena clara y aliño personal adecuado. Se presenta a consulta de forma puntual, consciente, orientado en tiempo, lugar y persona (Estado Mental preservado). Su lenguaje es fluido, coherente y congruente, con un vocabulario amplio acorde a su nivel de instrucción. No se observan movimientos estereotipados ni tics. Mantiene una postura ligeramente rígida al inicio de la entrevista, lo cual podría denotar mecanismos de control (Lowen, 1975).",

            filiacionRelacion: "El paciente establece un raport adecuado desde el inicio, aunque se muestra ligeramente defensivo al abordar temas familiares (resistencias). Mantiene contacto visual constante. Su actitud es de colaboración, respondiendo ampliamente a las preguntas. Se percibe una transferencia positiva inicial, buscando validación por parte del clínico (Greenson, 1967), situando al terapeuta en un lugar de 'saber'.",

            motivoConsulta: "El paciente refiere textualmente al inicio de la entrevista: 'Vengo porque ya no aguanto la ansiedad. Todo el día estoy pensando en el trabajo y siento que si no reviso los planos diez veces algo va a salir mal. Además, mi esposa dice que estoy insoportable y que nunca tengo tiempo para ella. He tenido insomnio las últimas semanas y me siento muy tenso del cuello y la espalda'.",

            historiaPadecimientoActual: "El padecimiento inicia aproximadamente hace 6 meses (Criterio temporal DSM-IV-TR para TAG), coincidiendo con un ascenso laboral a Coordinador de Proyectos. El paciente reporta un incremento progresivo en los niveles de ansiedad (subjetiva 8/10), caracterizada por pensamientos intrusivos de tipo catastrófico ('Preocupación excesiva', Criterio A) relacionados con errores laborales. Presenta sintomatología fisiológica (Criterio C): tensión muscular en trapecios, taquicardia ocasional y bruxismo nocturno. El cuadro se ha exacerbado en el último mes, agregándose insomnio de conciliación (tarda +2 horas en dormir) y cierta irritabilidad con su cónyuge e hijos, lo que ha generado disfunción en la dinámica familiar (Criterio D: Malestar clínicamente significativo).",

            antecedentesHeredofamiliares: "Madre viva de 60 años, padece Hipertensión Arterial Sistémica controlada; se describe como una figura 'aprensiva y nerviosa'. Padre finado hace 5 años por Infarto Agudo al Miocardio, descrito como 'estricto y distante'. Abuela materna con antecedentes de 'nervios' (posible trastorno de ansiedad no diagnosticado). Carga genética para ansiedad probable.",

            antecedentesPersonalesPatologicos: "Niega enfermedades crónico-degenerativas, alergias, transfusiones o cirugías recientes. Niega antecedentes de traumatismo craneoencefálico. Tabaquismo positivo (3 cigarrillos diarios) desde hace 2 años como estrategia de afrontamiento desadaptativa. Alcoholismo social (2-3 copas los fines de semana). Niega consumo de otras sustancias psicoactivas.",

            familiogramaInterpretacion: "ANÁLISIS SISTÉMICO ESTRUCTURAL (Minuchin, 1974):\n\nSistema familiar nuclear en etapa de 'Hijos escolares' (Ciclo Vital de Duvall). Se identifica un subsistema conyugal con interacciones conflictivas, caracterizadas por problemas de comunicación y expectativas no cumplidas. El paciente mantiene una lealtad invisible y una relación estrecha (posiblemente aglutinada) con la familia de origen materna, lo que genera tensión en la relación de pareja (Triangulación). \n\nSe observa una estructura rígida con roles tradicionales. El paciente asume un rol de 'proveedor responsable' que le genera sobrecarga, cumpliendo mandatos familiares implícitos de 'perfección y esfuerzo' (Boszormenyi-Nagy).",

            fechaElaboracion: new Date().toLocaleDateString('es-MX'),
            status: 'Demo',
            pasanteHeader: 'Pasante: Lic. Juan Carlos Pérez (En Formación)', presentsMatricula: 'UV-12345678', especialidad: 'Maestría en Psicoterapia Clínica',
            avisoPrivacidadAceptado: true,
            consentimientoInformadoAceptado: true,

            // Familia
            familia: [
                { id: 'paciente', rol: 'Paciente', nombre: 'Juan', edad: '35', genero: 'M', finado: false, x: 400, y: 300 },
                { id: 'f1', rol: 'Padre', nombre: 'Pedro', edad: '65', genero: 'M', finado: true, x: 300, y: 100 },
                { id: 'f2', rol: 'Madre', nombre: 'Ana', edad: '60', genero: 'F', finado: false, x: 500, y: 100 },
                { id: 'f3', rol: 'Pareja', nombre: 'Luisa', edad: '32', genero: 'F', finado: false, x: 200, y: 300 },
                { id: 'f4', rol: 'Hijo', nombre: 'Mateo', edad: '8', genero: 'M', finado: false, x: 300, y: 450 },
                { id: 'f5', rol: 'Hija', nombre: 'Sofía', edad: '5', genero: 'F', finado: false, x: 100, y: 450 }
            ],
            familiaRelaciones: [
                { from: 'paciente', to: 'f3', type: 'conflictiva' },
                { from: 'paciente', to: 'f2', type: 'estrecha' },
                { from: 'f1', to: 'f2', type: 'distante' },
                { from: 'paciente', to: 'f4', type: 'distante' }
            ],

            // HAMA
            hama1: 3, hama2: 3, hama3: 2, hama4: 4, hama5: 1, hama6: 2, hama7: 2, hama8: 1, hama9: 2, hama10: 1, hama11: 2, hama12: 1, hama13: 2, hama14: 1,

            // BDI
            bdi1: 1, bdi2: 1, bdi3: 1, bdi4: 1, bdi5: 2, bdi6: 1, bdi7: 1, bdi8: 1, bdi9: 0, bdi10: 1, bdi11: 2, bdi12: 1, bdi13: 2, bdi14: 0, bdi15: 2, bdi16: 3, bdi17: 2, bdi18: 0, bdi19: 1, bdi20: 1, bdi21: 0,

            ...esferasData,
            ...ceperData,
            ...otisData,
            ...machoverData,

            // Notas Clínicas
            notasClinicas: [
                { fecha: "10/10/2023", s: "Paciente refiere sentirse 'muy abrumado' por la carga laboral. Menciona que ayer discutió con su esposa por llegar tarde.", o: "Se presenta aliñado. Facies de preocupación. Inquietud motora leve.", a: "Sintomatología ansiosa persistente compatible con F41.1. Rasgos obsesivos dificultan la delegación (Caballo, 2008).", p: "1. Psicoeducación (Modelo TCC de Clark y Beck, 2010).\n2. Entrenamiento en Respiración (Caballo, 1998).\n3. Registro de Pensamientos Automáticos." },
                { fecha: "17/10/2023", s: "Reporta ligera mejoría en el sueño, pero sigue despertando a las 3am.", o: "Más tranquilo al inicio, contacto visual adecuado. Muestra su registro.", a: "Identificación de distorsiones: 'Catastrofización' y 'Deberías' (Burns, 1990).", p: "1. Revisión de registro.\n2. Reestructuración Cognitiva (Debate Socrático).\n3. Higiene del sueño (Echeburúa, 1998)." },
                { fecha: "24/10/2023", s: "'Tuve una semana difícil en la oficina, pero logré no gritarles a mis compañeros'.", o: "Llanto silente al hablar de su autoexigencia.", a: "Activación de Creencia Central de Insuficiencia (Beck, 1995).", p: "1. Trabajar sobre Creencia Central de Valor Personal.\n2. Experimentos conductuales." }
            ],

            // Informe
            informeResumen: 'Paciente masculino de 35 años, arquitecto, que acude a consulta por cuadro ansiedad generalizada y conflictos conyugales. La evaluación revela perfil obsesivo (Caballo, 2011) que se descompensa ante estresores laborales.',

            informeDiagnostico: 'DIAGNÓSTICO MULTIAXIAL (DSM-IV-TR; APA, 2002):\n\nEJE I: Trastornos Clínicos\nF41.1 Trastorno de Ansiedad Generalizada [300.02]. Cumple criterios A (ansiedad excesiva), B (difícil control), y C (inquietud, fatigabilidad, tensión).\nZ63.0 Problemas en la relación con el cónyuge [V61.10].\n\nEJE II: Trastornos de la Personalidad\nRasgos de Personalidad Obsesiva-Compulsiva (Cluster C). Congruente con perfil CEPER (Caballo, 2011).\n\nEJE III: Enfermedades Médicas\nNinguna reportada.\n\nEJE IV: Problemas Psicosociales\n- Problemas relativos al grupo primario (conflictos conyugales).\n- Problemas laborales (sobrecarga).\n\nEJE V: Evaluación de la Actividad Global\nEAG = 65. Síntomas leves a moderados (APA, 2000).',

            informePronostico: 'FAVORABLE RESERVADO.\nPronóstico favorable por buena capacidad intelectual y red de apoyo. La rigidez de los rasgos obsesivos (Millon, 2006) podría generar resistencia ("intelectualización").',

            informeRecomendaciones: 'PLAN DE TRATAMIENTO MULTIMODAL (Basado en Caballo, 2008):\n\n1. Psicoterapia Cognitivo-Conductual (16 sesiones). Objetivos:\n   - Reestructuración de esquemas de perfeccionismo (Beck).\n   - Entrenamiento en inoculación de estrés (Meichenbaum).\n   - Asertividad (Caballo).\n\n2. Valoración por Psiquiatría si persiste insomnio severo.\n\n3. Terapia de Pareja sistémica (Minuchin) en fase posterior.'
        });
        navigate(`/expediente/${id}`);
    };

    const handleDelete = (id, e) => {
        e.stopPropagation();
        if (window.confirm('¿Estás seguro de que deseas eliminar este expediente? Esta acción no se puede deshacer.')) {
            deletePatient(id);
        }
    };

    const filteredPatients = patients.filter(p =>
        (p.pacienteNombre || 'Sin Nombre').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.folio || '').toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
            <div className="max-w-7xl mx-auto p-4 md:p-8">
                <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">Expedientes Clínicos</h1>
                        <p className="text-slate-500">Gestión de pacientes y evaluaciones psicológicas</p>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={handleCreateDemo}
                            className="bg-slate-200 hover:bg-slate-300 text-slate-800 px-4 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors"
                        >
                            <Sparkles size={20} /> Demo Completo
                        </button>
                        <button
                            onClick={() => navigate('/formatos')}
                            className="bg-slate-800 hover:bg-slate-900 text-white px-4 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors border border-slate-700"
                        >
                            <User size={20} /> Banco de Formatos
                        </button>
                        <button
                            onClick={handleCreatePatient}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            <Plus size={20} /> Nuevo Expediente
                        </button>
                    </div>
                </header>

                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-8 flex items-center gap-3">
                    <Search className="text-slate-400" size={20} />
                    <input
                        type="text"
                        placeholder="Buscar por nombre o folio..."
                        className="flex-1 outline-none text-slate-700"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {filteredPatients.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
                        <div className="mx-auto bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-slate-400">
                            <User size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-700 mb-2">No se encontraron expedientes</h3>
                        <p className="text-slate-500 mb-6">Comienza creando un nuevo registro para tu primer paciente.</p>
                        <button onClick={handleCreatePatient} className="text-blue-600 font-bold hover:underline">Crear nuevo expediente</button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredPatients.map(patient => (
                            <div
                                key={patient.id}
                                onClick={() => navigate(`/expediente/${patient.id}`)}
                                className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group relative"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        {(patient.pacienteNombre || '?').charAt(0).toUpperCase()}
                                    </div>
                                    <button
                                        onClick={(e) => handleDelete(patient.id, e)}
                                        className="text-slate-300 hover:text-red-500 p-2 transition-colors"
                                        title="Eliminar expediente"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                                <h3 className="font-bold text-lg text-slate-800 mb-1 truncate">
                                    {patient.pacienteNombre || 'Paciente Sin Nombre'}
                                </h3>
                                <p className="text-sm text-slate-500 mb-4 flex items-center gap-1">
                                    <FileText size={14} /> Folio: {patient.folio || 'S/N'}
                                </p>
                                <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={12} /> {new Date(patient.lastModified).toLocaleDateString()}
                                    </span>
                                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold">
                                        Activo
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;

import React, { useState, useMemo } from 'react';
import { 
  FileText, User, Printer, Book, LayoutTemplate, PenTool, Heart, 
  Users, Monitor, ListChecks, AlertCircle, FilePlus, PlusCircle, 
  Trash2, PieChart, ClipboardList, BarChart, ArrowLeft, Sparkles, ShieldCheck, FileSignature, Edit3, Brain 
} from 'lucide-react';

// --- CONSTANTES DE DOCUMENTOS LEGALES (MÉXICO) ---

const AVISO_PRIVACIDAD_TEXT = `AVISO DE PRIVACIDAD INTEGRAL

De conformidad con lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), su Reglamento y demás normatividad aplicable en los Estados Unidos Mexicanos, se hace de su conocimiento el presente Aviso de Privacidad.

1. IDENTIDAD Y DOMICILIO DEL RESPONSABLE
El profesional de la salud mental identificado en la sección de "Datos del Profesional" de este expediente (en adelante "EL RESPONSABLE"), recaba y trata sus datos personales para las finalidades establecidas en el presente aviso.

2. DATOS PERSONALES QUE SE RECABAN
Para la prestación de los servicios de orientación psicológica, evaluación psicométrica y/o intervención clínica, EL RESPONSABLE podrá recabar las siguientes categorías de datos personales:
a) Datos de identificación y contacto (Nombre, edad, domicilio, teléfono, etc.).
b) Datos académicos y laborales.
c) Datos patrimoniales o financieros (en caso de cobro de honorarios).
d) DATOS SENSIBLES: Estado de salud físico y mental presente y futuro, antecedentes heredo-familiares, creencias religiosas, filosóficas o morales, preferencia sexual, y cualquier otro dato necesario para la integración del expediente clínico psicológico.

3. FINALIDADES DEL TRATAMIENTO
Sus datos personales serán utilizados para las siguientes finalidades primarias, necesarias para el servicio solicitado:
a) Prestación de servicios de atención psicológica y orientación.
b) Creación, estudio, análisis, actualización y conservación del expediente clínico.
c) Aplicación, calificación e interpretación de pruebas psicométricas.
d) Elaboración de informes, interconsultas o referencias a otros especialistas si el caso lo amerita.
e) Facturación y cobro por los servicios prestados.

4. TRANSFERENCIA DE DATOS
EL RESPONSABLE se compromete a no transferir su información personal a terceros sin su consentimiento, salvo las excepciones previstas en el artículo 37 de la LFPDPPP (ej. requerimiento de autoridad competente, urgencia médica, prevención de diagnóstico médico).

5. DERECHOS ARCO
Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición).

6. CAMBIOS AL AVISO DE PRIVACIDAD
El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los servicios que ofrecemos; de nuestras prácticas de privacidad o por otras causas.

Al firmar el presente documento, otorgo mi consentimiento expreso para el tratamiento de mis datos personales, incluidos los sensibles, de acuerdo con los términos y condiciones establecidos.`;

const CONSENTIMIENTO_INFORMADO_TEXT = `CARTA DE CONSENTIMIENTO INFORMADO PARA ATENCIÓN PSICOLÓGICA

Por medio de la presente, yo (el paciente o tutor legal), en pleno uso de mis facultades mentales, manifiesto que he sido informado/a detalladamente sobre las características del servicio de atención psicológica que voy a recibir.

DECLARO CONOCER Y ACEPTAR LOS SIGUIENTES PUNTOS:

1. NATURALEZA DEL SERVICIO:
Entiendo que recibiré servicios de evaluación, orientación o intervención psicológica. El objetivo es promover mi bienestar emocional, conductual y/o cognitivo. Comprendo que la psicología no es una ciencia exacta y que los resultados dependen de múltiples factores, incluyendo mi participación activa y compromiso con el proceso.

2. CONFIDENCIALIDAD Y SECRETO PROFESIONAL:
Toda la información que yo proporcione durante las sesiones, así como los resultados de mis evaluaciones, serán tratados con estricta confidencialidad conforme al Código Ético del Psicólogo y las leyes mexicanas vigentes.
EXCEPCIONES A LA CONFIDENCIALIDAD: Entiendo que el secreto profesional podrá ser levantado únicamente en los siguientes casos críticos:
a) Si existe un riesgo inminente de daño grave hacia mi propia persona (riesgo suicida).
b) Si existe un riesgo inminente de daño grave hacia terceras personas (riesgo homicida o agresiones).
c) Si se detecta una situación de abuso, maltrato o negligencia hacia menores de edad, adultos mayores o personas con discapacidad.
d) Por orden judicial expresa emitida por una autoridad competente.

3. PROCEDIMIENTOS Y PRUEBAS:
Autorizo la aplicación de entrevistas, cuestionarios, tests psicométricos y proyectivos (como Rueda de la Vida, CEPER, HAM-A, BDI, OTIS, Machover, etc.) necesarios para la integración de mi diagnóstico y plan de trabajo.

4. VOLUNTARIEDAD Y DERECHO A RETIRARSE:
Mi participación es totalmente voluntaria. Tengo el derecho de finalizar el tratamiento o revocar este consentimiento en cualquier momento que lo desee, sin que esto implique represalias, aunque se recomienda una sesión de cierre para dar por concluido el proceso adecuadamente.

5. HONORARIOS Y HORARIOS (Si aplica):
He sido informado/a sobre el costo de las sesiones, la duración de las mismas (aprox. 45-60 minutos) y las políticas de cancelación o inasistencia.

6. ACADÉMICO / SUPERVISIÓN (Si aplica):
En caso de que este servicio sea parte de un programa de formación universitaria (ej. Universidad IVES), acepto que la información de mi caso pueda ser supervisada por docentes calificados con fines estrictamente académicos y profesionales, resguardando siempre mi anonimato.

Habiendo leído y comprendido todo lo anterior, y habiendo tenido la oportunidad de aclarar todas mis dudas, acepto recibir la atención psicológica bajo estos términos.`;

const CEPER_QUESTIONS_LIST = [
  "1. Creo que hay personas que intentan aprovecharse de mis ideas...", "2. No me atraen las fiestas ni las reuniones sociales.", "3. Con frecuencia tengo pensamientos extraños...",
  "4. Cuando quiero algo intento conseguirlo como sea...", "5. A veces tengo explosiones de ira o de cólera...", "6. Cuando estoy en reuniones sociales me gusta llamar la atención...",
  "7. Considero que mi inteligencia es superior a la de la mayoría.", "8. Soy una persona tímida...", "9. Me encuentro cómodo/a cuando los demás toman decisiones...",
  "10. Lo más importante para mí es seguir un procedimiento...", "11. Con frecuencia estoy irritado/a y de mal humor.", "12. Al final siempre termino relacionándome con amigos/as que me tratan mal.",
  "13. Me paso la vida preocupándome por una u otra cosa.", "14. A veces digo cosas crueles a los demás...", "15. Cuando alguien me critica por cometer un error...",
  "16. Hay pocas cosas en la vida que me hacen disfrutar.", "17. Cuando estoy solo/a siento, a veces, la presencia...", "18. Me gusta hacer cosas que nadie se atreve a hacer...",
  "19. Algunas veces me he causado daño...", "20. Cuando una reunión social se está poniendo aburrida...",
  ...Array.from({length: 150}, (_, i) => `Pregunta ${i+21} del cuestionario CEPER (Ver formato impreso para texto completo)`),
];

const HAMA_QUESTIONS = [
  "1. Humor ansioso", "2. Tensión", "3. Temores", "4. Insomnio", "5. Intelectual", "6. Humor depresivo", "7. Síntomas somáticos (musculares)", 
  "8. Síntomas somáticos (sensoriales)", "9. Síntomas cardiovasculares", "10. Síntomas respiratorios", "11. Síntomas gastrointestinales", 
  "12. Síntomas genitourinarios", "13. Síntomas autónomos", "14. Comportamiento en la entrevista"
];

const BDI_ITEMS = [
  "1. Tristeza", "2. Pesimismo", "3. Sentimientos de Fracaso", "4. Pérdida de Placer", 
  "5. Sentimientos de Culpa", "6. Sentimientos de Castigo", "7. Disconformidad con uno mismo", 
  "8. Autocrítica", "9. Pensamientos o Deseos Suicidas", "10. Llanto", "11. Agitación", 
  "12. Pérdida de Interés", "13. Indecisión", "14. Desvalorización", "15. Pérdida de Energía", 
  "16. Cambios en el Patrón de Sueño", "17. Irritabilidad", "18. Cambios en el Apetito", 
  "19. Dificultad de Concentración", "20. Cansancio o Fatiga", "21. Pérdida de Interés en el Sexo"
];

const OTIS_QUESTIONS = [
  "1. Lo opuesto al odio es:",
  "2. Si 3 lápices cuestan 5 pesos, ¿cuánto costarán 24 lápices?",
  "3. Pájaro es a aire como pez es a:",
  "4. Lo opuesto a honor es:",
  "5. El zorro se parece más a:",
  "6. El silencio es a escuchar como el ruido es a:",
  "7. De las siguientes palabras, ¿cuál es la intrusa?",
  "8. El amor es a odio como amigo es a:",
  "9. ¿Cuál de las siguientes palabras no encaja con las demás?",
  "10. Fe es a creencia como duda es a:",
  ...Array.from({length: 65}, (_, i) => `${i+11}. Pregunta ${i+11} del Test de Inteligencia OTIS (Texto completo en manual)...`)
];

const ROLES_FAMILIA = [
  { id: 'Padre', label: 'Padre', genero: 'M' }, { id: 'Madre', label: 'Madre', genero: 'F' },
  { id: 'Pareja', label: 'Pareja (Matrimonio)', genero: 'Opuesto' }, { id: 'ExPareja', label: 'Ex-Pareja', genero: 'Opuesto' }, { id: 'UnionLibre', label: 'Pareja (Unión Libre)', genero: 'Opuesto' },
  { id: 'Hijo', label: 'Hijo', genero: 'M' }, { id: 'Hija', label: 'Hija', genero: 'F' },
  { id: 'Hermano', label: 'Hermano', genero: 'M' }, { id: 'Hermana', label: 'Hermana', genero: 'F' },
  { id: 'AbueloP', label: 'Abuelo P', genero: 'M' }, { id: 'AbuelaP', label: 'Abuela P', genero: 'F' },
  { id: 'AbueloM', label: 'Abuelo M', genero: 'M' }, { id: 'AbuelaM', label: 'Abuela M', genero: 'F' },
];

const AREA_COLORS = {
  'Personal': '#60A5FA', // Azul claro
  'Interpersonal': '#F87171', // Rojo claro
  'Pareja': '#A78BFA', // Violeta
  'Familiar': '#FBBF24', // Ambar
  'Laboral': '#34D399', // Verde esmeralda
  'Virtual': '#9CA3AF' // Gris
};

const ESFERAS_QUESTIONS = [
  { id: 1, area: 'Personal', text: "1. Me siento satisfecho/a con mi desarrollo personal." },
  { id: 2, area: 'Personal', text: "2. Realizo actividades que cuiden mi salud física y emocional." },
  { id: 3, area: 'Personal', text: "3. Manejo adecuadamente mis emociones en situaciones difíciles." },
  { id: 4, area: 'Personal', text: "4. Tengo metas personales claras y trabajo por ellas." },
  { id: 5, area: 'Personal', text: "5. Reconozco mis fortalezas y mis debilidades." },
  { id: 6, area: 'Interpersonal', text: "6. Me siento apoyado/a por personas fuera de mi familia." },
  { id: 7, area: 'Interpersonal', text: "7. Mantengo relaciones respetuosas y cooperativas con mi entorno social." },
  { id: 8, area: 'Interpersonal', text: "8. Puedo expresar mis ideas sin temor a ser juzgado/a." },
  { id: 9, area: 'Interpersonal', text: "9. Me comunico de forma asertiva cuando tengo desacuerdos." },
  { id: 10, area: 'Interpersonal', text: "10. Mantengo vínculos que aportan positivamente a mi bienestar." },
  { id: 11, area: 'Pareja', text: "11. Mi pareja y yo nos comunicamos de forma abierta y respetuosa." },
  { id: 12, area: 'Pareja', text: "12. La relación me brinda seguridad emocional y apoyo." },
  { id: 13, area: 'Pareja', text: "13. Resolvemos conflictos mediante el dialogo y sin agresiones." },
  { id: 14, area: 'Pareja', text: "14. Existe equilibrio entre mi autonomía personal y la relación." },
  { id: 15, area: 'Pareja', text: "15. Ambos dedicamos tiempo y energía a fortalecer nuestra relación." },
  { id: 16, area: 'Familiar', text: "16. Me siento escuchado/a y tratado/a con respeto en mi familia." },
  { id: 17, area: 'Familiar', text: "17. Podemos dialogar y resolver desacuerdos." },
  { id: 18, area: 'Familiar', text: "18. Recibo apoyo emocional o practico cuando lo necesito." },
  { id: 19, area: 'Familiar', text: "19. La convivencia familiar suele ser armoniosa y segura." },
  { id: 20, area: 'Familiar', text: "20. Participó activamente en actividades familiares." },
  { id: 21, area: 'Laboral', text: "21. Me siento capaz de cumplir responsabilidades laborales o escolares." },
  { id: 22, area: 'Laboral', text: "22. Mis capacidades son valoradas por mis compañeros o superiores." },
  { id: 23, area: 'Laboral', text: "23. Tengo oportunidades de aprendizaje o crecimiento." },
  { id: 24, area: 'Laboral', text: "24. Manejo adecuadamente el estrés derivado de mis actividades." },
  { id: 25, area: 'Laboral', text: "25. Mantengo un equilibrio entre mi vida personal y laboral." },
  { id: 26, area: 'Virtual', text: "26. Uso la tecnología sin afectar mis actividades cotidianas." },
  { id: 27, area: 'Virtual', text: "27. Mantengo interacciones respetuosas en redes y plataformas." },
  { id: 28, area: 'Virtual', text: "28. Regulo el tiempo en dispositivos para evitar excesos." },
  { id: 29, area: 'Virtual', text: "29. Evito compartir información personal que comprometa mi seguridad." },
  { id: 30, area: 'Virtual', text: "30. El uso de medios virtuales complementan mi vida, no la sustituye." },
];

const MACHOVER_INDICADORES = [
    "Ubicación de la hoja", "Tamaño de la figura", "Cabeza", "Rostro", 
    "Cuello", "Extremidades superiores", "Tronco", "Extremidades inferiores", 
    "Sombreado / Cabello", "Línea de base (piso)", "Simetría", "Presión del trazo", "Vestimenta"
];

const MENU_ITEMS = [
  { id: 'datos-generales', icon: User, label: 'Datos Generales' },
  { id: 'historia-clinica', icon: Book, label: 'Historia Clínica' },
  { id: 'familiograma', icon: Users, label: 'Familiograma' },
  { id: 'esferas', icon: PieChart, label: 'Esferas de Vida' }, 
  { id: 'ceper', icon: ClipboardList, label: 'Cuestionario CEPER' },
  { id: 'hama', icon: Heart, label: 'Ansiedad (HAM-A)' },
  { id: 'bdi', icon: AlertCircle, label: 'Depresión (BDI-II)' },
  { id: 'otis', icon: ListChecks, label: 'Inteligencia (OTIS)' },
  { id: 'machover', icon: PenTool, label: 'Machover (DFH)' },
  { id: 'notas', icon: FilePlus, label: 'Notas Clínicas' },
  { id: 'informe', icon: FileText, label: 'Informe Final' },
];

// --- LOGICA DE INTERPRETACION MACHOVER ---
const interpretarRasgoMachover = (indicador, descripcion) => {
    const d = descripcion.toLowerCase();
    
    // Ubicación
    if (indicador.includes("Ubicación")) {
        if (d.includes("arriba")) return "Tendencia a la fantasía, idealismo, refugio en lo intelectual.";
        if (d.includes("abajo")) return "Necesidad de apoyo, depresión, apego a lo concreto.";
        if (d.includes("centro") || d.includes("centrad")) return "Equilibrio, adaptación, o rigidez si es muy exacta.";
        if (d.includes("izquierda")) return "Introversión, apego al pasado, fijación materna.";
        if (d.includes("derecha")) return "Extraversión, orientación al futuro, figura paterna.";
    }
    // Tamaño
    if (indicador.includes("Tamaño")) {
        if (d.includes("pequeñ")) return "Timidez, retraimiento, sentimientos de inferioridad o inadecuación.";
        if (d.includes("grande")) return "Expansividad, narcisismo o agresividad compensatoria.";
        if (d.includes("mediana")) return "Adecuada autopercepción y adaptación.";
    }
    // Cabeza
    if (indicador.includes("Cabeza")) {
        if (d.includes("grande")) return "Intelectualización, preocupaciones por rendimiento mental o fantasía excesiva.";
        if (d.includes("pequeñ")) return "Sentimientos de inadecuación intelectual o social.";
        if (d.includes("sin rasgos") || d.includes("borrosa")) return "Evasión social, timidez extrema.";
    }
    // Rostro / Ojos / Boca
    if (indicador.includes("Rostro")) {
        let inter = "";
        if (d.includes("ojos cerrados")) inter += "Evasión de la realidad, rechazo a ver el mundo. ";
        if (d.includes("ojos grandes")) inter += "Curiosidad, suspicacia o tendencias paranoides. ";
        if (d.includes("sin pupilas")) inter += "Egocentrismo, inmadurez. ";
        if (d.includes("boca caída") || d.includes("triste")) inter += "Depresión, pesimismo. ";
        if (d.includes("boca línea") || d.includes("recta")) inter += "Tensión, agresividad verbal reprimida. ";
        if (d.includes("dientes")) inter += "Agresividad oral. ";
        return inter || "Evaluación de la comunicación y contacto social.";
    }
    // Cuello
    if (indicador.includes("Cuello")) {
        if (d.includes("largo")) return "Rigidez, intento de control racional sobre los impulsos.";
        if (d.includes("corto")) return "Impulsividad, dificultad para separar intelecto de emoción.";
        if (d.includes("ausente")) return "Inmadurez, poco control de impulsos.";
    }
    // Extremidades superiores (Brazos/Manos)
    if (indicador.includes("Extremidades superiores")) {
        if (d.includes("pegados") || d.includes("cuerpo")) return "Inhibición, rigidez, pasividad.";
        if (d.includes("abiertos") || d.includes("extendidos")) return "Necesidad de afecto o interacción.";
        if (d.includes("cortos")) return "Sentimiento de falta de alcance o ambición.";
        if (d.includes("sin manos") || d.includes("ocultas")) return "Sentimiento de culpa, dificultad de contacto o evasión.";
        if (d.includes("puños")) return "Agresividad contenida.";
    }
    // Extremidades inferiores (Piernas/Pies)
    if (indicador.includes("Extremidades inferiores")) {
        if (d.includes("juntas")) return "Rigidez, tensión, control sexual.";
        if (d.includes("separadas")) return "Necesidad de estabilidad y base firme.";
        if (d.includes("sin pies") || d.includes("inestables")) return "Falta de seguridad, sensación de 'no pisar firme'.";
    }
    // Presión
    if (indicador.includes("Presión")) {
        if (d.includes("fuerte") || d.includes("marcada")) return "Tensión, energía alta, posible agresividad.";
        if (d.includes("débil") || d.includes("suave") || d.includes("tenue")) return "Baja energía, depresión, inseguridad, timidez.";
    }
    // Línea base
    if (indicador.includes("Línea de base")) {
        if (d.includes("no") || d.includes("ausente")) return "Inestabilidad, falta de arraigo.";
        if (d.includes("suelo") || d.includes("piso")) return "Necesidad de seguridad y apoyo.";
    }
    // Sombreado
    if (indicador.includes("Sombreado")) {
        if (d.includes("cabello")) return "Preocupación por la virilidad/feminidad, ansiedad sexual o mental.";
        if (d.includes("cuerpo")) return "Ansiedad focalizada en el área sombreada.";
    }

    return "Rasgo a correlacionar con historia clínica.";
};

// --- COMPONENTES VISUALES ---

const GenogramaVisual = ({ familia }) => {
  const paciente = familia.find(f => f.rol === 'Paciente') || {};
  const padre = familia.find(f => f.rol === 'Padre');
  const madre = familia.find(f => f.rol === 'Madre');
  const pareja = familia.find(f => f.rol === 'Pareja' || f.rol === 'UnionLibre');
  const hijos = familia.filter(f => f.rol === 'Hijo' || f.rol === 'Hija');
  
  const Figura = ({ x, y, genero, nombre, edad, finado, rol, isPaciente }) => (
      <g transform={`translate(${x},${y})`}>
          {genero === 'M' ? <rect x={-15} y={-15} width={30} height={30} fill="white" stroke="black" strokeWidth="1.5" /> : <circle cx={0} cy={0} r={15} fill="white" stroke="black" strokeWidth="1.5" />}
          {isPaciente && (genero === 'M' ? <rect x={-11} y={-11} width={22} height={22} fill="none" stroke="black" strokeWidth="1.5" /> : <circle cx={0} cy={0} r={11} fill="none" stroke="black" strokeWidth="1.5" />)}
          {finado && <g stroke="black" strokeWidth="1.5"><line x1={-15} y1={-15} x2={15} y2={15} /><line x1={15} y1={-15} x2={-15} y2={15} /></g>}
          <text y={40} textAnchor="middle" fontSize="8" fontWeight="bold">{rol}</text>
          <text y={50} textAnchor="middle" fontSize="8">{nombre ? nombre.split(' ')[0] : ''}</text>
          <text y={-25} textAnchor="middle" fontSize="8" fill="gray">{edad}</text>
      </g>
  );

  return (
      <svg width="100%" height="100%" viewBox="0 0 600 450">
          <defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#000" /></marker></defs>
          <text x={300} y={20} textAnchor="middle" fontSize="12" fill="#9ca3af">Generación Automática</text>
          {(padre && madre) && <path d={`M200,100 L400,100 M300,100 L300,220`} stroke="black" strokeWidth="1.5" fill="none" />}
          {pareja && <path d={`M300,250 L450,250`} stroke="black" strokeWidth="1.5" fill="none" strokeDasharray={pareja.rol==='UnionLibre' ? "4 4" : "0"} />}
          {hijos.length > 0 && <g><line x1={200} y1={320} x2={550} y2={320} stroke="black" strokeWidth="1.5" />{hijos.map((h, i) => <line key={`l-${i}`} x1={250+(i*60)} y1={320} x2={250+(i*60)} y2={350} stroke="black" strokeWidth="1.5" />)}</g>}
          {padre && <Figura x={200} y={100} {...padre} />}
          {madre && <Figura x={400} y={100} {...madre} />}
          <Figura x={300} y={250} {...paciente} isPaciente={true} rol="PACIENTE" />
          {pareja && <Figura x={450} y={250} {...pareja} />}
          {hijos.map((h, i) => <Figura key={h.id} x={250+(i*60)} y={350} {...h} />)}
      </svg>
  );
};

const GraficaEsferasVisual = ({ data }) => {
  const areas = [
      {k:'Personal',c:'#60A5FA'}, {k:'Interpersonal',c:'#F87171'}, {k:'Pareja',c:'#A78BFA'}, 
      {k:'Familiar',c:'#FBBF24'}, {k:'Laboral',c:'#34D399'}, {k:'Virtual',c:'#9CA3AF'}
  ];
  const total = Object.values(data).reduce((acc, val) => acc + parseFloat(val), 0) || 1;

  return (
      <svg width="100%" height="100%" viewBox="0 0 300 300">
          {areas.map((a, i) => {
              const val = parseFloat(data[a.k]) || 0;
              const barHeight = (val / 25) * 100;
              const angleRad = (i * (360 / areas.length) - 90) * (Math.PI / 180);
              const x = 150 + (barHeight + 20) * Math.cos(angleRad);
              const y = 150 + (barHeight + 20) * Math.sin(angleRad);
              
              return (
                <g key={i}>
                   <line x1="150" y1="150" x2={150 + 100 * Math.cos(angleRad)} y2={150 + 100 * Math.sin(angleRad)} stroke="#e5e7eb" strokeWidth="1" />
                   <circle cx={x} cy={y} r="15" fill={a.c} />
                   <text x={x} y={y} dy="4" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">{val}</text>
                   <text x={150 + 130 * Math.cos(angleRad)} y={150 + 130 * Math.sin(angleRad)} textAnchor="middle" fontSize="10" fill="gray">{a.k}</text>
                </g>
              );
          })}
          <circle cx="150" cy="150" r="10" fill="#374151" />
      </svg>
  );
};

// --- COMPONENTE DE PÁGINA IMPRIMIBLE ---
const PaginaBase = ({ title, children, showHeader = true, showFooter = true, headerInfo }) => (
  <div className="w-[21.59cm] min-h-[27.94cm] relative p-12 flex flex-col bg-white shadow-md mb-8 mx-auto print:shadow-none print:mb-0 print:w-full print:min-h-0 print:h-auto print:break-after-page print:p-12">
      {showHeader && (
          <div className="flex justify-between items-start mb-4 text-xs font-bold text-gray-800 font-sans border-b-2 border-blue-900 pb-2">
              <div><p>{headerInfo.pasanteHeader}</p><p>Matrícula: {headerInfo.presentaMatricula}</p></div>
              <div className="text-right"><p>Folio: {headerInfo.folio}</p><p>Fecha: {headerInfo.fechaElaboracion}</p></div>
          </div>
      )}
      {title && <h2 className="text-center font-bold text-xl uppercase mb-6 bg-gray-100 p-2 text-blue-900">{title}</h2>}
      <div className="flex-1">{children}</div>
      {showFooter && (
           <div className="mt-8 pt-4 border-t border-gray-300 flex justify-between items-end text-xs font-bold text-gray-700">
              <div className="flex items-center gap-2"><span className="text-blue-900 font-black text-lg italic">ives</span><span>Universidad IVES</span></div>
              <div className="flex items-center gap-2"><span>{headerInfo.especialidad}</span><div className="bg-blue-900 text-white p-1 text-[8px] rounded-sm">Posgrado<br/>ives</div></div>
          </div>
      )}
  </div>
);

// --- COMPONENTE PRINCIPAL ---

const ClinicalRecordApp = () => {
  const [activeTab, setActiveTab] = useState('datos-generales'); 
  const [ceperView, setCeperView] = useState('cuestionario');
  const [hamaView, setHamaView] = useState('cuestionario');
  const [bdiView, setBdiView] = useState('cuestionario');
  const [otisView, setOtisView] = useState('cuestionario');
  const [printMode, setPrintMode] = useState(false);

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
    ...Object.fromEntries(Array.from({length: 30}, (_, i) => [`esferaQ${i+1}`, 3])), 

    ...Object.fromEntries(Array.from({length: 170}, (_, i) => [`ceperQ${i+1}`, ""])), 
    ceperInterpretacion: "",

    ...Object.fromEntries(MACHOVER_INDICADORES.map((ind, i) => [`machoverInd${i}`, ""])), 
    ...Object.fromEntries(MACHOVER_INDICADORES.map((ind, i) => [`machoverInt${i}`, ""])), 
    machoverHistoria: "", 
    machoverInterpretacionGlobal: "",

    ...Object.fromEntries(Array.from({length: 14}, (_, i) => [`hama${i+1}`, "0"])),

    bdiFecha: "",
    ...Object.fromEntries(Array.from({length: 21}, (_, i) => [`bdi${i+1}`, "0"])),

    otisAciertos: "", otisErrores: "", otisDiagnostico: "",
    ...Object.fromEntries(Array.from({length: 75}, (_, i) => [`otis${i+1}`, ""])),

    // --- NOTAS CLÍNICAS EN FORMATO S.O.A.P. ---
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
    for(let i=1; i<=14; i++) hamaTotal += parseInt(formData[`hama${i}`] || 0);
    let hamaInter = "Ansiedad Leve";
    if (hamaTotal >= 17 && hamaTotal < 25) hamaInter = "Ansiedad Leve a Moderada";
    else if (hamaTotal >= 25 && hamaTotal < 30) hamaInter = "Ansiedad Moderada a Severa";
    else if (hamaTotal >= 30) hamaInter = "Ansiedad Severa";

    let bdiTotal = 0;
    for(let i=1; i<=21; i++) bdiTotal += parseInt(formData[`bdi${i}`] || 0);
    let bdiInter = "Depresión Mínima";
    if (bdiTotal > 13 && bdiTotal <= 19) bdiInter = "Depresión Leve";
    else if (bdiTotal > 19 && bdiTotal <= 28) bdiInter = "Depresión Moderada";
    else if (bdiTotal > 28) bdiInter = "Depresión Grave";

    const perfiles = ["Paranoide", "Esquizoide", "Esquizotípico", "Histriónico", "Narcisista", "Antisocial", "Límite", "Evitativo", "Dependiente", "Obsesivo-C"];
    const ceper = {};
    perfiles.forEach((perfil, idx) => {
        let score = 0;
        for(let i=1; i<=170; i++) {
            if ((i-1) % perfiles.length === idx) {
                const val = formData[`ceperQ${i}`];
                score += (typeof val === 'number' || !isNaN(parseInt(val))) ? parseInt(val || 0) : 0;
            }
        }
        ceper[perfil] = score;
    });

    return { esferas, hama: { score: hamaTotal, text: hamaInter }, bdi: { score: bdiTotal, text: bdiInter }, ceper };
  }, [formData]);

  const agregarFamiliar = (rolId) => {
      const rolInfo = ROLES_FAMILIA.find(r => r.id === rolId);
      let genero = rolInfo.genero;
      if (genero === 'Opuesto') genero = formData.sexo === 'F' ? 'M' : 'F';
      setFormData(prev => ({ ...prev, familia: [...prev.familia, { id: Date.now().toString(), rol: rolId, nombre: '', edad: '', genero: genero, finado: false, label: rolInfo.label }] }));
  };
  const eliminarFamiliar = (id) => setFormData(prev => ({ ...prev, familia: prev.familia.filter(f => f.id !== id) }));
  const updateFamiliar = (id, field, value) => setFormData(prev => ({ ...prev, familia: prev.familia.map(f => f.id === id ? { ...f, [field]: value } : f) }));
  
  const handleNotaChange = (idx, field, value) => { const n = [...formData.notasClinicas]; n[idx][field] = value; setFormData({...formData, notasClinicas:n}); };
  const addNota = () => setFormData({...formData, notasClinicas: [...formData.notasClinicas, { fecha: new Date().toLocaleDateString(), s: "", o: "", a: "", p: "" }]});
  const removeNota = (idx) => setFormData({...formData, notasClinicas: formData.notasClinicas.filter((_, i) => i !== idx)});
  
  const handleMachoverChange = (idx, type, value) => {
      setFormData(prev => ({ ...prev, [`machover${type}${idx}`]: value }));
  };

  const handlePrint = () => { setPrintMode(true); setTimeout(() => { window.print(); setPrintMode(false); }, 100); };

  // --- AUTOMATIZACION MACHOVER ---
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

  const generarInformeFinal = () => {
    let resumen = `Paciente ${formData.sexo === 'F' ? 'femenina' : 'masculino'} de ${formData.edad} años, ocupación ${formData.ocupacion}. Acude a consulta refiriendo: "${formData.motivoConsulta}".\n\n`;
    let diagnostico = `IMPRESIÓN DIAGNÓSTICA MULTIAXIAL\n\n- Ansiedad: ${resultados.hama.text} (${resultados.hama.score}).\n- Depresión: ${resultados.bdi.text} (${resultados.bdi.score}).\n- Personalidad: Rasgos ${Object.entries(resultados.ceper).sort((a,b)=>b[1]-a[1])[0][0]}.\n- Esferas críticas: ${Object.entries(resultados.esferas).filter(x=>x[1]<=15).map(x=>x[0]).join(', ') || 'Ninguna'}.`;
    setFormData(prev => ({ ...prev, informeResumen: resumen, informeDiagnostico: diagnostico }));
  };

  const renderFormularioActivo = () => {
    switch(activeTab) {
        case 'datos-generales': return (
            <div className="space-y-8">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h3 className="font-bold text-lg text-blue-900 mb-4 flex items-center gap-2"><User size={20}/> Datos del Profesional y Académicos</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div><label className="block text-xs font-bold text-gray-700 mb-1">Nombre Pasante</label><input name="pasanteHeader" value={formData.pasanteHeader} onChange={handleChange} className="border p-2 rounded w-full" /></div>
                        <div><label className="block text-xs font-bold text-gray-700 mb-1">Matrícula</label><input name="presentaMatricula" value={formData.presentaMatricula} onChange={handleChange} className="border p-2 rounded w-full" /></div>
                        <div><label className="block text-xs font-bold text-gray-700 mb-1">Catedrático</label><input name="catedratico" value={formData.catedratico} onChange={handleChange} className="border p-2 rounded w-full" /></div>
                        <div><label className="block text-xs font-bold text-gray-700 mb-1">Grupo</label><input name="grupo" value={formData.grupo} onChange={handleChange} className="border p-2 rounded w-full" /></div>
                        <div><label className="block text-xs font-bold text-gray-700 mb-1">Folio Expediente</label><input name="folio" value={formData.folio} onChange={handleChange} className="border p-2 rounded w-full" /></div>
                        <div><label className="block text-xs font-bold text-gray-700 mb-1">Fecha Elaboración</label><input name="fechaElaboracion" value={formData.fechaElaboracion} onChange={handleChange} className="border p-2 rounded w-full" /></div>
                    </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-lg text-gray-800 mb-2 flex items-center gap-2">Introducción del Expediente</h3>
                    <textarea name="introduccionTexto" value={formData.introduccionTexto} onChange={handleChange} className="border p-2 rounded w-full h-32 text-sm text-justify" />
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="font-bold text-lg text-green-900 mb-6 flex items-center gap-2 border-b pb-2"><Users size={20}/> Datos del Paciente</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="md:col-span-2"><label className="block text-xs font-bold text-gray-700 mb-1">Nombre Completo</label><input name="pacienteNombre" value={formData.pacienteNombre} onChange={handleChange} className="border p-2 rounded w-full" /></div>
                        <div><label className="block text-xs font-bold text-gray-700 mb-1">Edad</label><input name="edad" value={formData.edad} onChange={handleChange} className="border p-2 rounded w-full" /></div>
                        <div><label className="block text-xs font-bold text-gray-700 mb-1">Fecha Nacimiento</label><input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} className="border p-2 rounded w-full" /></div>
                        <div><label className="block text-xs font-bold text-gray-700 mb-1">Sexo</label><select name="sexo" value={formData.sexo} onChange={handleChange} className="border p-2 rounded w-full"><option value="F">Femenino</option><option value="M">Masculino</option></select></div>
                        <div><label className="block text-xs font-bold text-gray-700 mb-1">Estado Civil</label><input name="estadoCivil" value={formData.estadoCivil} onChange={handleChange} className="border p-2 rounded w-full" /></div>
                        <div><label className="block text-xs font-bold text-gray-700 mb-1">Teléfono</label><input name="telefono" value={formData.telefono} onChange={handleChange} className="border p-2 rounded w-full" /></div>
                        <div><label className="block text-xs font-bold text-gray-700 mb-1">Ocupación</label><input name="ocupacion" value={formData.ocupacion} onChange={handleChange} className="border p-2 rounded w-full" /></div>
                        <div><label className="block text-xs font-bold text-gray-700 mb-1">Escolaridad</label><input name="escolaridad" value={formData.escolaridad} onChange={handleChange} className="border p-2 rounded w-full" /></div>
                        <div><label className="block text-xs font-bold text-gray-700 mb-1">Religión</label><input name="religion" value={formData.religion} onChange={handleChange} className="border p-2 rounded w-full" /></div>
                        <div className="md:col-span-3"><label className="block text-xs font-bold text-gray-700 mb-1">Domicilio</label><input name="domicilio" value={formData.domicilio} onChange={handleChange} className="border p-2 rounded w-full" /></div>
                        <div className="md:col-span-3"><label className="block text-xs font-bold text-gray-700 mb-1">Referido Por</label><input name="referidoPor" value={formData.referidoPor} onChange={handleChange} className="border p-2 rounded w-full" /></div>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2 border-b pb-2"><ShieldCheck size={20}/> Aviso de Privacidad</h3>
                        <div className="h-48 overflow-y-auto border p-4 bg-gray-50 text-xs text-justify mb-4 rounded whitespace-pre-wrap">{AVISO_PRIVACIDAD_TEXT}</div>
                        <label className="flex items-center gap-2 cursor-pointer bg-blue-50 p-3 rounded border border-blue-100 hover:bg-blue-100 transition-all"><input type="checkbox" name="avisoPrivacidadAceptado" checked={formData.avisoPrivacidadAceptado} onChange={handleChange} className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"/><span className="text-sm font-bold text-gray-700">He leído y acepto el Aviso de Privacidad.</span></label>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2 border-b pb-2"><FileSignature size={20}/> Consentimiento Informado</h3>
                        <div className="h-64 overflow-y-auto border p-4 bg-gray-50 text-xs text-justify mb-4 rounded whitespace-pre-wrap">{CONSENTIMIENTO_INFORMADO_TEXT}</div>
                        <label className="flex items-center gap-2 cursor-pointer bg-green-50 p-3 rounded border border-green-100 hover:bg-green-100 transition-all"><input type="checkbox" name="consentimientoInformadoAceptado" checked={formData.consentimientoInformadoAceptado} onChange={handleChange} className="w-5 h-5 text-green-600 rounded focus:ring-green-500"/><span className="text-sm font-bold text-gray-700">He leído, comprendo y acepto los términos del Consentimiento Informado.</span></label>
                    </div>
                </div>
            </div>
        );
        case 'historia-clinica': return (
             <div className="space-y-6">
                <h3 className="font-bold text-lg text-blue-900 border-b pb-2">Historia Clínica Psicológica</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2"><label className="font-bold text-sm text-gray-700 block mb-1">II. Filiación (Presentación del consultante):</label><textarea name="filiacionPresentacion" value={formData.filiacionPresentacion} onChange={handleChange} className="border p-2 rounded w-full h-20 text-sm" /></div>
                    <div className="md:col-span-2"><label className="font-bold text-sm text-gray-700 block mb-1">Modo de relacionarse con el clínico:</label><textarea name="filiacionRelacion" value={formData.filiacionRelacion} onChange={handleChange} className="border p-2 rounded w-full h-20 text-sm" /></div>
                    <div className="md:col-span-2"><label className="font-bold text-sm text-gray-700 block mb-1">VII. Motivo de Consulta:</label><textarea name="motivoConsulta" value={formData.motivoConsulta} onChange={handleChange} className="border p-2 rounded w-full h-24 text-sm" /></div>
                </div>
                <h4 className="font-bold text-md text-gray-600 mt-4 border-b pb-1">Antecedentes</h4>
                <div className="space-y-4">
                    <div><label className="font-bold text-sm text-gray-700">Antecedentes Heredofamiliares:</label><textarea name="antecedentesHeredofamiliares" value={formData.antecedentesHeredofamiliares} onChange={handleChange} className="border p-2 rounded w-full h-20 text-sm" /></div>
                    <div><label className="font-bold text-sm text-gray-700">Factores Biológicos / Personales Patológicos (Salud, Sueño, Medicamentos):</label><textarea name="antecedentesPersonalesPatologicos" value={formData.antecedentesPersonalesPatologicos} onChange={handleChange} className="border p-2 rounded w-full h-20 text-sm" /></div>
                    <div><label className="font-bold text-sm text-gray-700">Historia del Padecimiento Actual:</label><textarea name="historiaPadecimientoActual" value={formData.historiaPadecimientoActual} onChange={handleChange} className="border p-2 rounded w-full h-24 text-sm" /></div>
                </div>
            </div>
        );
        case 'familiograma': return (
             <div className="space-y-4">
                <h3 className="font-bold text-lg text-blue-900 flex items-center gap-2"><Users size={24}/> Familiograma</h3>
                <div className="bg-blue-50 p-4 rounded border border-blue-200"><h4 className="font-bold text-sm mb-2 text-blue-900">Agregar Miembro:</h4><div className="flex gap-2 flex-wrap mb-2 items-end"><select id="selectRol" className="border p-1.5 rounded text-sm w-40">{ROLES_FAMILIA.map(r => <option key={r.id} value={r.id}>{r.label}</option>)}</select><button onClick={() => agregarFamiliar(document.getElementById('selectRol').value)} className="bg-blue-600 text-white px-4 py-1.5 rounded text-sm flex items-center gap-1"><PlusCircle size={16}/> Agregar</button></div></div>
                <div className="bg-white rounded border overflow-hidden shadow-sm"><table className="w-full text-sm"><thead className="bg-gray-100"><tr><th className="p-2 text-left">Rol</th><th className="p-2 text-left">Nombre</th><th className="p-2 w-16">Edad</th><th className="p-2 w-16">Finado</th><th className="p-2 w-10"></th></tr></thead><tbody>{formData.familia.map(f => (<tr key={f.id} className="border-b last:border-0 hover:bg-gray-50"><td className="p-2 font-bold text-gray-600 text-xs">{f.rol}</td><td className="p-2"><input value={f.nombre} onChange={(e) => updateFamiliar(f.id, 'nombre', e.target.value)} className="border p-1 rounded w-full text-xs" /></td><td className="p-2"><input value={f.edad} onChange={(e) => updateFamiliar(f.id, 'edad', e.target.value)} className="border p-1 rounded w-full text-xs text-center" /></td><td className="p-2 text-center"><input type="checkbox" checked={f.finado} onChange={(e) => updateFamiliar(f.id, 'finado', e.target.checked)}/></td><td className="p-2 text-center">{f.rol !== 'Paciente' && (<button onClick={() => eliminarFamiliar(f.id)} className="text-red-500 hover:text-red-700"><Trash2 size={14}/></button>)}</td></tr>))}</tbody></table></div>
                <div className="border-2 border-gray-200 rounded p-4 bg-gray-50 h-64 overflow-hidden relative"><GenogramaVisual familia={formData.familia} /></div>
                <button onClick={generarInterpretacionFamiliograma} className="mb-2 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 text-xs font-bold flex items-center gap-2 self-start transition-all"><Sparkles size={16}/> Generar Interpretación Sistémica</button>
                <textarea name="familiogramaInterpretacion" placeholder="Interpretación Sistémica..." value={formData.familiogramaInterpretacion} onChange={handleChange} className="border p-2 rounded w-full h-32 text-sm" />
            </div>
        );
        case 'esferas': return (
            <div className="space-y-6">
                <h3 className="font-bold text-lg text-blue-900 flex items-center gap-2"><PieChart size={24}/> Escala de Esferas de la Vida</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">{['Personal', 'Interpersonal', 'Pareja', 'Familiar', 'Laboral', 'Virtual'].map(area => (<div key={area} className="bg-gray-50 p-4 rounded border border-gray-200"><h4 className={`font-bold mb-2 border-b pb-1 text-[${AREA_COLORS[area]}]`}>{area.toUpperCase()}</h4>{ESFERAS_QUESTIONS.filter(q => q.area === area).map(q => (<div key={q.id} className="mb-3 last:mb-0"><label className="block text-xs text-gray-700 mb-1">{q.text}</label><div className="flex items-center gap-2"><span className="text-xs font-bold text-gray-400">1</span><input type="range" min="1" max="5" value={formData[`esferaQ${q.id}`]} onChange={(e) => setFormData(prev => ({...prev, [`esferaQ${q.id}`]: e.target.value}))} className="flex-grow h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"/><span className="text-xs font-bold text-gray-400">5</span><span className="font-bold text-blue-900 w-6 text-center">{formData[`esferaQ${q.id}`]}</span></div></div>))}</div>))}</div>
                    <div className="flex flex-col items-center"><div className="w-full max-w-sm aspect-square bg-white shadow-lg rounded-xl p-4 border mb-4 flex items-center justify-center"><div className="w-64 h-64"><GraficaEsferasVisual data={resultados.esferas} /></div></div><button onClick={generarInterpretacionEsferas} className="mb-2 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 text-xs font-bold flex items-center gap-2 self-start transition-all"><Sparkles size={16}/> Generar Análisis Automático</button><textarea name="esferasInterpretacion" placeholder="Análisis global de las esferas..." value={formData.esferasInterpretacion} onChange={handleChange} className="border p-2 rounded w-full h-48 text-sm" /></div>
                </div>
            </div>
        );
        case 'ceper': return (
             <div className="space-y-4">
                <h3 className="font-bold text-lg text-blue-900 flex items-center gap-2"><ClipboardList size={24}/> Cuestionario CEPER III</h3>
                <div className="flex gap-2 border-b"><button onClick={() => setCeperView('cuestionario')} className={`px-4 py-2 font-bold border-t border-l border-r rounded-t ${ceperView === 'cuestionario' ? 'text-blue-900 bg-white' : 'text-gray-500 bg-gray-100 hover:text-blue-900'}`}>Cuestionario</button><button onClick={() => { setCeperView('resultados'); }} className={`px-4 py-2 font-bold border-t border-l border-r rounded-t ${ceperView === 'resultados' ? 'text-blue-900 bg-white' : 'text-gray-500 bg-gray-100 hover:text-blue-900'}`}>Ver Resultados</button></div>
                {ceperView === 'cuestionario' && (<div className="space-y-1 h-[50vh] overflow-y-auto pr-2 border rounded p-2 bg-gray-50">{Array.from({length: 170}, (_, i) => i + 1).map((qNum) => (<div key={qNum} className="bg-white p-2 border-b last:border-0 hover:bg-blue-50 flex justify-between items-center"><span className="font-bold text-sm text-gray-500 w-8">{qNum}.</span><span className="text-sm flex-1 font-medium mx-2">{CEPER_QUESTIONS_LIST[qNum-1] || `Pregunta ${qNum}`}</span><div className="flex gap-1">{[1,2,3,4,5,6,7].map(val => (<button key={val} onClick={() => setFormData(prev => ({ ...prev, [`ceperQ${qNum}`]: val }))} className={`w-6 h-6 rounded-full text-[10px] font-bold border transition-all ${formData[`ceperQ${qNum}`] == val ? 'bg-blue-600 text-white' : 'bg-white'}`}>{val}</button>))}</div></div>))}</div>)}
                {ceperView === 'resultados' && (<div className="bg-white border rounded p-4 shadow-sm"><h4 className="font-bold text-lg text-blue-900 mb-4 flex items-center gap-2"><BarChart size={20}/> Perfil de Personalidad (Simulado)</h4><div className="space-y-3">{Object.entries(resultados.ceper).map(([style, score]) => (<div key={style} className="flex items-center text-sm"><span className="w-32 font-bold text-gray-600">{style}</span><div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden"><div className="bg-blue-600 h-full transition-all duration-500" style={{width: `${Math.min((score/120)*100, 100)}%`}}></div></div><span className="w-10 text-right font-mono">{score}</span></div>))}</div><button onClick={generarInterpretacionCeper} className="mt-6 mb-2 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 text-xs font-bold flex items-center gap-2 self-start transition-all"><Sparkles size={16}/> Generar Perfil Automático</button><textarea name="ceperInterpretacion" placeholder="Interpretación clínica..." value={formData.ceperInterpretacion} onChange={handleChange} className="border p-2 rounded w-full h-24" /></div>)}
            </div>
        );
        case 'hama': return (
            <div className="space-y-4">
               <h3 className="font-bold text-lg text-blue-900 flex items-center gap-2"><Heart size={24}/> Escala Hamilton (HAM-A)</h3>
               <div className="flex gap-2 border-b"><button onClick={() => setHamaView('cuestionario')} className={`px-4 py-2 font-bold border-t border-l border-r rounded-t ${hamaView === 'cuestionario' ? 'text-blue-900 bg-white' : 'text-gray-500 bg-gray-100 hover:text-blue-900'}`}>Cuestionario</button><button onClick={() => setHamaView('resultados')} className={`px-4 py-2 font-bold border-t border-l border-r rounded-t ${hamaView === 'resultados' ? 'text-blue-900 bg-white' : 'text-gray-500 bg-gray-100 hover:text-blue-900'}`}>Ver Resultados</button></div>
               {hamaView === 'cuestionario' && (<div className="grid grid-cols-1 gap-2 h-[50vh] overflow-y-auto pr-2 border rounded p-2 bg-gray-50">{HAMA_QUESTIONS.map((q, i) => (<div key={i} className="flex justify-between items-center bg-white p-3 border-b last:border-0 hover:bg-gray-50"><span className="text-sm font-medium w-2/3">{q}</span><select name={`hama${i+1}`} value={formData[`hama${i+1}`]} onChange={handleChange} className="border p-2 rounded w-1/3 text-sm"><option value="0">0 - Ausente</option><option value="1">1 - Leve</option><option value="2">2 - Moderado</option><option value="3">3 - Grave</option><option value="4">4 - Muy Grave</option></select></div>))}</div>)}
               {hamaView === 'resultados' && (<div className="bg-white border rounded p-6 shadow-sm"><div className="flex flex-col items-center justify-center mb-6"><div className="text-4xl font-black text-yellow-600 mb-2">{resultados.hama.score} <span className="text-sm text-gray-400 font-normal">/ 56</span></div><div className="text-xl font-bold text-gray-700">{resultados.hama.text}</div></div></div>)}
            </div>
        );
        case 'bdi': return (
            <div className="space-y-4">
               <h3 className="font-bold text-lg text-blue-900 flex items-center gap-2"><AlertCircle size={24}/> Inventario Beck (BDI-II)</h3>
               <div className="flex gap-2 border-b"><button onClick={() => setBdiView('cuestionario')} className={`px-4 py-2 font-bold border-t border-l border-r rounded-t ${bdiView === 'cuestionario' ? 'text-blue-900 bg-white' : 'text-gray-500 bg-gray-100 hover:text-blue-900'}`}>Cuestionario</button><button onClick={() => setBdiView('resultados')} className={`px-4 py-2 font-bold border-t border-l border-r rounded-t ${bdiView === 'resultados' ? 'text-blue-900 bg-white' : 'text-gray-500 bg-gray-100 hover:text-blue-900'}`}>Ver Resultados</button></div>
               {bdiView === 'cuestionario' && (<div className="grid grid-cols-1 gap-2 h-[50vh] overflow-y-auto pr-2 border rounded p-2 bg-gray-50">{BDI_ITEMS.map((label, i) => (<div key={i} className="flex justify-between items-center bg-white p-3 border-b last:border-0 hover:bg-gray-50"><span className="text-sm font-medium w-2/3">{label}</span><select name={`bdi${i+1}`} value={formData[`bdi${i+1}`]} onChange={handleChange} className="border p-2 rounded w-1/3 font-bold text-blue-900 text-sm"><option value="0">0 - No</option><option value="1">1 - Leve</option><option value="2">2 - Moderado</option><option value="3">3 - Severo</option></select></div>))}</div>)}
               {bdiView === 'resultados' && (<div className="bg-white border rounded p-6 shadow-sm"><div className="flex flex-col items-center justify-center mb-6"><div className="text-4xl font-black text-blue-600 mb-2">{resultados.bdi.score} <span className="text-sm text-gray-400 font-normal">/ 63</span></div><div className="text-xl font-bold text-gray-700">{resultados.bdi.text}</div></div></div>)}
            </div>
        );
        case 'otis': return (
            <div className="space-y-4">
               <h3 className="font-bold text-lg text-blue-900 flex items-center gap-2"><ListChecks size={24}/> OTIS Sencillo</h3>
               <div className="flex gap-2 border-b"><button onClick={() => setOtisView('cuestionario')} className={`px-4 py-2 font-bold border-t border-l border-r rounded-t ${otisView === 'cuestionario' ? 'text-blue-900 bg-white' : 'text-gray-500 bg-gray-100 hover:text-blue-900'}`}>Cuestionario</button><button onClick={() => setOtisView('resultados')} className={`px-4 py-2 font-bold border-t border-l border-r rounded-t ${otisView === 'resultados' ? 'text-blue-900 bg-white' : 'text-gray-500 bg-gray-100 hover:text-blue-900'}`}>Ver Resultados</button></div>
               {otisView === 'cuestionario' && (<div className="grid grid-cols-1 gap-2 h-[50vh] overflow-y-auto pr-2 border rounded p-2 bg-gray-50">{OTIS_QUESTIONS.map((q, i) => (<div key={i} className="flex flex-col bg-white p-3 border-b last:border-0 hover:bg-gray-50"><div className="flex justify-between items-center mb-1"><span className="text-sm font-medium flex-1 mr-4">{q}</span><input name={`otis${i+1}`} value={formData[`otis${i+1}`]} onChange={handleChange} className="border p-1 rounded w-16 text-center font-bold text-blue-900" placeholder="Resp." /></div></div>))}</div>)}
               {otisView === 'resultados' && (<div className="space-y-6"><div className="flex gap-4 mb-4 bg-gray-50 p-6 rounded shadow-sm border"><div className="flex-1 text-center border-r"><label className="block font-bold text-gray-500 text-xs uppercase mb-1">Aciertos</label><input name="otisAciertos" value={formData.otisAciertos} onChange={handleChange} className="border p-2 w-24 text-center text-2xl font-black rounded" /></div><div className="flex-1 text-center border-r"><label className="block font-bold text-gray-500 text-xs uppercase mb-1">Errores</label><input name="otisErrores" value={formData.otisErrores} onChange={handleChange} className="border p-2 w-24 text-center text-2xl font-black rounded text-red-500" /></div><div className="flex-[2] text-center"><label className="block font-bold text-gray-500 text-xs uppercase mb-1">Diagnóstico Final</label><input name="otisDiagnostico" value={formData.otisDiagnostico} onChange={handleChange} className="border p-2 w-full text-center text-xl font-bold text-blue-900 rounded bg-white" placeholder="Ej. Superior, Promedio..." /></div></div></div>)}
            </div>
        );
        case 'machover': return (
             <div className="space-y-6">
                <div className="flex justify-between items-center border-b pb-2">
                    <h3 className="font-bold text-lg text-blue-900">Análisis de la Figura Humana (Machover)</h3>
                    <button onClick={autoAnalizarMachover} className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-xs font-bold flex items-center gap-2 shadow-lg transition-all"><Brain size={16}/> Asistente de Interpretación Automática</button>
                </div>
                
                <div className="bg-gray-50 p-4 rounded border mb-4">
                    <label className="block font-bold text-sm mb-1 text-blue-900">Historia del dibujo (Título y Relato):</label>
                    <textarea name="machoverHistoria" value={formData.machoverHistoria} onChange={handleChange} className="border p-2 rounded w-full h-24 text-sm" placeholder="Escriba aquí la historia que el paciente narró sobre su dibujo..." />
                </div>

                <div className="overflow-x-auto border rounded">
                    <table className="w-full text-sm">
                        <thead className="bg-blue-100 text-blue-900">
                            <tr>
                                <th className="p-2 text-left w-1/4">Indicador Gráfico</th>
                                <th className="p-2 text-left w-1/3">Descripción del Dibujo</th>
                                <th className="p-2 text-left w-1/3">Interpretación Psicológica</th>
                            </tr>
                        </thead>
                        <tbody>
                            {MACHOVER_INDICADORES.map((indicador, i) => (
                                <tr key={i} className="border-b last:border-0 hover:bg-gray-50">
                                    <td className="p-2 font-bold text-gray-700">{indicador}</td>
                                    <td className="p-2">
                                        <textarea 
                                            value={formData[`machoverInd${i}`]} 
                                            onChange={(e) => handleMachoverChange(i, 'Ind', e.target.value)}
                                            className="w-full border p-1 rounded text-xs h-10 resize-none"
                                            placeholder="Describa el rasgo (ej. ojos cerrados, trazo débil...)"
                                        />
                                    </td>
                                    <td className="p-2">
                                        <textarea 
                                            value={formData[`machoverInt${i}`]} 
                                            onChange={(e) => handleMachoverChange(i, 'Int', e.target.value)}
                                            className="w-full border p-1 rounded text-xs h-10 resize-none bg-blue-50 focus:bg-white"
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
                    <textarea name="machoverInterpretacionGlobal" value={formData.machoverInterpretacionGlobal} onChange={handleChange} className="border p-2 rounded w-full h-32 text-sm mt-1" />
                </div>
            </div>
        );
        case 'notas': return (
            <div className="space-y-4">
                <h3 className="font-bold text-lg text-blue-900 flex items-center gap-2"><FilePlus size={24}/> Notas Clínicas (Formato S.O.A.P.)</h3>
                {formData.notasClinicas.map((nota, idx) => (
                    <div key={idx} className="bg-white p-4 rounded shadow border border-gray-200 space-y-3">
                        <div className="flex justify-between items-center border-b pb-2 bg-gray-50 p-2 rounded-t">
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-sm text-gray-700 uppercase tracking-wide">Sesión {idx + 1}</span>
                                <input type="text" value={nota.fecha} onChange={(e) => handleNotaChange(idx, 'fecha', e.target.value)} className="border p-1 rounded w-32 text-xs font-bold text-center bg-white" placeholder="Fecha" />
                            </div>
                            <button onClick={() => removeNota(idx)} className="text-red-500 text-xs hover:text-red-700 font-bold flex items-center gap-1 transition-colors"><Trash2 size={14}/> Eliminar</button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                            <div className="col-span-2 md:col-span-1">
                                <label className="block font-bold text-blue-800 mb-1">S - Subjetivo (Lo que refiere el paciente):</label>
                                <textarea value={nota.s} onChange={(e) => handleNotaChange(idx, 's', e.target.value)} className="w-full border p-2 rounded h-24 resize-none focus:ring-1 focus:ring-blue-300 outline-none" placeholder="Síntomas, preocupaciones, narrativa del paciente..." />
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <label className="block font-bold text-blue-800 mb-1">O - Objetivo (Lo que se observa/mide):</label>
                                <textarea value={nota.o} onChange={(e) => handleNotaChange(idx, 'o', e.target.value)} className="w-full border p-2 rounded h-24 resize-none focus:ring-1 focus:ring-blue-300 outline-none" placeholder="Pruebas aplicadas, conducta observable, apariencia..." />
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <label className="block font-bold text-blue-800 mb-1">A - Análisis/Avalúo (Impresión Diagnóstica):</label>
                                <textarea value={nota.a} onChange={(e) => handleNotaChange(idx, 'a', e.target.value)} className="w-full border p-2 rounded h-24 resize-none focus:ring-1 focus:ring-blue-300 outline-none bg-blue-50" placeholder="Interpretación clínica, códigos DSM/CIE..." />
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <label className="block font-bold text-blue-800 mb-1">P - Plan (Tratamiento/Seguimiento):</label>
                                <textarea value={nota.p} onChange={(e) => handleNotaChange(idx, 'p', e.target.value)} className="w-full border p-2 rounded h-24 resize-none focus:ring-1 focus:ring-blue-300 outline-none" placeholder="Tareas, próximas pruebas, intervenciones..." />
                            </div>
                        </div>
                    </div>
                ))}
                <button onClick={addNota} className="w-full bg-indigo-50 text-indigo-700 py-3 rounded-lg font-bold hover:bg-indigo-100 border border-indigo-200 flex justify-center items-center gap-2 transition-all shadow-sm">+ Agregar Nueva Nota S.O.A.P.</button>
            </div>
        );
        case 'informe': return (
             <div className="space-y-4">
                <h3 className="font-bold text-lg text-blue-900 flex items-center gap-2"><FileText size={24}/> Informe Final</h3>
                <button onClick={generarInformeFinal} className="w-full bg-indigo-600 text-white px-4 py-3 rounded-lg shadow-lg hover:bg-indigo-700 text-sm font-bold flex items-center justify-center gap-2 transition-all mb-6 border-2 border-indigo-400"><Sparkles size={20}/> INTEGRAR EXPEDIENTE COMPLETO</button>
                <label className="font-bold text-sm">Resumen del Caso:</label><textarea name="informeResumen" value={formData.informeResumen} onChange={handleChange} className="border p-2 rounded w-full h-24" />
                <label className="font-bold text-sm">Impresión Diagnóstica:</label><textarea name="informeDiagnostico" value={formData.informeDiagnostico} onChange={handleChange} className="border p-2 rounded w-full h-24" />
                <label className="font-bold text-sm">Pronóstico:</label><textarea name="informePronostico" value={formData.informePronostico} onChange={handleChange} className="border p-2 rounded w-full h-24" />
                <label className="font-bold text-sm">Recomendaciones:</label><textarea name="informeRecomendaciones" value={formData.informeRecomendaciones} onChange={handleChange} className="border p-2 rounded w-full h-24" />
            </div>
        );
        default: return <div className="p-4">Seleccione una opción del menú.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans text-gray-800">
      {!printMode && (
        <header className="bg-indigo-900 text-white p-4 shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center"><h1 className="text-xl font-bold flex gap-2 items-center"><LayoutTemplate /> Expediente Clínico</h1><div className="flex gap-4"><button onClick={() => setPrintMode(true)} className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded font-bold flex gap-2 items-center"><Monitor size={20} /> Vista Previa</button><button onClick={handlePrint} className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded font-bold flex gap-2 items-center shadow-lg"><Printer size={20} /> Imprimir Todo</button></div></div>
        </header>
      )}

      <div className="flex flex-1 max-w-7xl mx-auto w-full p-6 gap-8">
        {!printMode && (
          <aside className="w-64 space-y-2 h-fit sticky top-24 overflow-y-auto max-h-[80vh] pr-2">
            <div className="bg-white p-4 rounded-xl shadow mb-4">
                <h2 className="font-bold text-gray-500 text-xs uppercase tracking-wider mb-2">Módulos</h2>
                {MENU_ITEMS.map(item => (<button key={item.id} onClick={() => setActiveTab(item.id)} className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-all mb-1 ${activeTab===item.id ? 'bg-blue-100 text-blue-900 font-bold border-l-4 border-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}><item.icon size={18} /> <span className="text-sm">{item.label}</span></button>))}
            </div>
          </aside>
        )}

        <main className={`flex-1 ${printMode ? 'w-full' : ''}`}>
          {!printMode ? (<div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">{renderFormularioActivo()}</div>) : (
            <div className="print-container bg-gray-500 p-8 print:p-0 print:bg-white flex flex-col items-center gap-8 relative">
                <div className="fixed top-4 left-4 print:hidden z-50">
                    <button onClick={() => setPrintMode(false)} className="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 hover:bg-gray-100"><ArrowLeft size={20}/> Volver al Editor</button>
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
                            <h1 className="text-4xl font-black text-blue-900 uppercase leading-tight">Expediente Clínico<br/>Integral</h1>
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

                <PaginaBase title="Familiograma" headerInfo={formData}><div className="flex flex-col h-full"><div className="flex-grow border flex items-center justify-center"><GenogramaVisual familia={formData.familia}/></div><div className="border-t p-4 mt-4"><p className="font-bold">Interpretación:</p><p className="text-sm text-justify">{formData.familiogramaInterpretacion}</p></div></div></PaginaBase>
                
                <PaginaBase title="Escalas de Esferas de Vida" headerInfo={formData}>
                    <div className="flex flex-col items-center h-full p-4">
                        <div className="w-[12cm] h-[12cm] mb-4"><GraficaEsferasVisual data={resultados.esferas}/></div>
                        
                        <div className="w-full mb-4">
                            <h4 className="font-bold border-b mb-2 text-sm">Puntajes Totales por Esfera (Max 25):</h4>
                            <div className="grid grid-cols-3 gap-2 text-xs">
                                {Object.entries(resultados.esferas).map(([k,v]) => (
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
                        {Object.entries(resultados.ceper).map(([s,v])=><div key={s} className="flex mb-1 items-center"><span className="w-32 text-xs font-bold">{s}</span><div className="bg-gray-200 h-2 flex-1 rounded"><div className="bg-blue-600 h-full" style={{width:`${(v/120)*100}%`}}></div></div><span className="w-6 text-xs text-right">{v}</span></div>)}
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
                        {formData.notasClinicas.map((n,i) => (
                            <div key={i} className="border rounded-lg overflow-hidden mb-6 break-inside-avoid shadow-sm">
                                <div className="bg-gray-100 p-2 font-bold text-sm border-b flex justify-between">
                                    <span>SESIÓN {i+1}</span>
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
          )}
        </main>
      </div>
    </div>
  );
};

export default ClinicalRecordApp;
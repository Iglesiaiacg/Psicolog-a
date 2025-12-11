export const interpretarRasgoMachover = (indicador, descripcion) => {
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

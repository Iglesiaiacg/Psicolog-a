import React from 'react';

const HistoriaClinica = ({ formData, handleChange }) => {
    const sections = [
        {
            title: "II. Filiación",
            fields: [
                { label: "Presentación del Consultante", name: "filiacionPresentacion", rows: 3 },
                { label: "Modo de relacionarse con el clínico", name: "filiacionRelacion", rows: 3 }
            ]
        },
        {
            title: "III. Datos Biográficos (Relaciones Interpersonales)",
            subsections: [
                {
                    subtitle: "1. Familia de origen",
                    fields: [
                        { label: "a) ¿Con quién vive actualmente y como es la dinámica en casa?", name: "bioFamiliaDinama", rows: 2 },
                        { label: "b) ¿Cómo describiría su relación con cada uno de los miembros de su familia?", name: "bioFamiliaRelacion", rows: 2 },
                        { label: "c) ¿Ha habido eventos significativos en la familia?", name: "bioFamiliaEventos", rows: 2 },
                        { label: "d) ¿Qué papel ocupa usted dentro de su familia y como se siente respecto a ese rol?", name: "bioFamiliaRol", rows: 2 }
                    ]
                },
                {
                    subtitle: "2. Amistades",
                    fields: [
                        { label: "a) ¿Cuenta con amigos cercanos a una red de apoyo social?", name: "bioAmistadesRed", rows: 2 },
                        { label: "b) ¿Cómo describiría la calidad de sus relaciones de amistad?", name: "bioAmistadesCalidad", rows: 2 },
                        { label: "c) ¿Suele compartir sus problemas o emociones con sus amigos?", name: "bioAmistadesCompartir", rows: 2 },
                        { label: "d) ¿Ha tenido conflictos recientes de amistad importantes?", name: "bioAmistadesConflictos", rows: 2 },
                        { label: "e) ¿Con que frecuencia convive o se comunica con sus amistades?", name: "bioAmistadesFrecuencia", rows: 2 }
                    ]
                },
                {
                    subtitle: "3. Relación de pareja",
                    fields: [
                        { label: "a) ¿Tiene pareja actualmente? (Si/No) ¿Cuándo fue su última relación significativa?", name: "bioParejaActual", rows: 2 },
                        { label: "b) ¿Cómo describiría la relación (comunicación, apoyo, convivencia)?", name: "bioParejaRelacion", rows: 2 },
                        { label: "c) ¿Qué tan satisfecha (o) se siente con su vida afectiva y de pareja?", name: "bioParejaSatisfaccion", rows: 2 },
                        { label: "d) ¿Han existido conflictos importantes, como rupturas?", name: "bioParejaConflictos", rows: 2 },
                        { label: "e) ¿Qué expectativas tiene respecto a sus relaciones de pareja?", name: "bioParejaExpectativas", rows: 2 }
                    ]
                }
            ]
        },
        {
            title: "IV. Factores Biológicos",
            fields: [
                { label: "a) ¿Tiene alguna preocupación acerca de su salud? Especifíquelo:", name: "bioSaludPreocupacion", rows: 2 },
                { label: "b) Enliste los medicamentos que actualmente toma o ha tomado durante los últimos tres meses:", name: "bioMedicamentos", rows: 2 },
                { label: "c) ¿Practica alguna actividad deportiva o relajante? ¿Con que frecuencia?", name: "bioDeporte", rows: 2 },
                { label: "d) ¿Cuántas horas de sueño tiene?", name: "bioSuenoHoras", rows: 1 },
                { label: "Estado de salud actual:", name: "bioSaludActual", rows: 2 },
                { label: "Diagnósticos previos:", name: "bioDiagnosticosPrevios", rows: 2 }
            ]
        },
        {
            title: "V. Antecedentes Escolares",
            fields: [
                { label: "a) ¿Cuál fue el último grado de estudios que completo?", name: "escGrado", rows: 1 },
                { label: "b) ¿Cómo fue el desempeño académico en general (Bueno, regular, con dificultades)?", name: "escDesempeno", rows: 2 },
                { label: "c) ¿Experimento problemas de conducta o adaptación en la escuela? SI o No, ¿Por qué?", name: "escConducta", rows: 2 },
                { label: "d) ¿Hubo situaciones significativas en su etapa escolar (bullying, cambios de escuela)?", name: "escSituaciones", rows: 2 },
                { label: "e) ¿Cómo considera que su experiencia escolar influyo en su vida actual?", name: "escExperiencia", rows: 2 }
            ]
        },
        {
            title: "VI. Antecedentes Laborales",
            fields: [
                { label: "a) ¿A qué edad tuvo su primer trabajo? / ¿Qué tiempo duró?", name: "labPrimerTrabajo", rows: 1 },
                { label: "b) En general, ¿Cómo describe la relación con sus jefes y compañeros?", name: "labRelacionJefes", rows: 2 },
                { label: "c) ¿Ha experimentado estrés, ansiedad o malestar emocional relacionado con algún trabajo?", name: "labEstres", rows: 2 },
                { label: "d) ¿Cómo describiría el ambiente de trabajo?", name: "labAmbiente", rows: 2 },
                { label: "e) ¿Ha tenido conflictos recientes en el trabajo?", name: "labConflictos", rows: 2 },
                { label: "f) ¿Cómo se ha sentido en su trabajo últimamente?", name: "labSentido", rows: 2 }
            ]
        },
        {
            title: "VII. Motivo de Consulta",
            fields: [
                { label: "Que le ocurre:", name: "motivoQueOcurre", rows: 3 },
                { label: "Desde cuándo:", name: "motivoDesdeCuando", rows: 2 },
                { label: "Como afecta su vida personal, familiar, social o laboral:", name: "motivoComoAfecta", rows: 3 },
                { label: "Que espera del proceso terapéutico:", name: "motivoExpectativas", rows: 2 }
            ]
        },
        {
            title: "VIII. Observaciones Generales",
            fields: [
                { label: "Observaciones:", name: "observacionesGenerales", rows: 6 }
            ]
        }
    ];

    return (
        <div className="space-y-8 w-full max-w-5xl mx-auto pb-12">
            <h3 className="font-bold text-2xl text-slate-800 border-b-2 border-slate-900 pb-4 mb-8">Historia Clínica Psicológica</h3>

            {sections.map((section, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                    <h4 className="font-bold text-lg text-slate-900 mb-6 border-l-4 border-blue-900 pl-3 uppercase tracking-wide">{section.title}</h4>

                    {section.fields && (
                        <div className="space-y-6">
                            {section.fields.map((field, fIdx) => (
                                <div key={fIdx}>
                                    <label className="font-bold text-sm text-slate-700 block mb-2">{field.label}</label>
                                    <textarea
                                        name={field.name}
                                        value={formData[field.name] || ''}
                                        onChange={handleChange}
                                        rows={field.rows}
                                        className="w-full p-3 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-shadow bg-slate-50 focus:bg-white"
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {section.subsections && (
                        <div className="space-y-8">
                            {section.subsections.map((sub, sIdx) => (
                                <div key={sIdx} className="pl-4 border-l-2 border-slate-100">
                                    <h5 className="font-bold text-md text-slate-800 mb-4">{sub.subtitle}</h5>
                                    <div className="space-y-5">
                                        {sub.fields.map((field, fIdx) => (
                                            <div key={fIdx}>
                                                <label className="font-medium text-sm text-slate-600 block mb-1">{field.label}</label>
                                                <textarea
                                                    name={field.name}
                                                    value={formData[field.name] || ''}
                                                    onChange={handleChange}
                                                    rows={field.rows}
                                                    className="w-full p-2 text-sm border border-slate-200 rounded focus:ring-1 focus:ring-blue-900 focus:border-blue-900 outline-none transition-shadow focus:bg-white"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default HistoriaClinica;

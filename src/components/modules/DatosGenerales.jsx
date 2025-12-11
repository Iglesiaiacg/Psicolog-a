import React from 'react';
import { User, Users, ShieldCheck, FileSignature } from 'lucide-react';
import { AVISO_PRIVACIDAD_TEXT, CONSENTIMIENTO_INFORMADO_TEXT } from '../../utils/constants';

const DatosGenerales = ({ formData, handleChange }) => {
    return (
        <div className="space-y-8 w-full">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="font-bold text-lg text-slate-800 mb-6 flex items-center gap-2"><User size={20} /> Datos del Profesional y Académicos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div><label className="block text-xs font-bold text-slate-600 mb-2">Nombre Pasante</label><input name="pasanteHeader" value={formData.pasanteHeader} onChange={handleChange} className="border p-2.5 rounded w-full border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition-all outline-none" /></div>
                    <div><label className="block text-xs font-bold text-slate-600 mb-2">Matrícula</label><input name="presentaMatricula" value={formData.presentaMatricula} onChange={handleChange} className="border p-2.5 rounded w-full border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition-all outline-none" /></div>
                    <div><label className="block text-xs font-bold text-slate-600 mb-2">Catedrático</label><input name="catedratico" value={formData.catedratico} onChange={handleChange} className="border p-2.5 rounded w-full border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition-all outline-none" /></div>
                    <div><label className="block text-xs font-bold text-slate-600 mb-2">Grupo</label><input name="grupo" value={formData.grupo} onChange={handleChange} className="border p-2.5 rounded w-full border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition-all outline-none" /></div>
                    <div><label className="block text-xs font-bold text-slate-600 mb-2">Folio Expediente</label><input name="folio" value={formData.folio} onChange={handleChange} className="border p-2.5 rounded w-full border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition-all outline-none" /></div>
                    <div><label className="block text-xs font-bold text-slate-600 mb-2">Fecha Elaboración</label><input name="fechaElaboracion" value={formData.fechaElaboracion} onChange={handleChange} className="border p-2.5 rounded w-full border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition-all outline-none" /></div>
                </div>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">Introducción del Expediente</h3>
                <textarea name="introduccionTexto" value={formData.introduccionTexto} onChange={handleChange} className="border p-3 rounded w-full h-32 text-sm text-justify border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition-all outline-none" />
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-slate-800 mb-6 flex items-center gap-2 border-b border-slate-100 pb-2"><Users size={20} /> Datos del Paciente</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="md:col-span-2"><label className="block text-xs font-bold text-slate-600 mb-2">Nombre Completo</label><input name="pacienteNombre" value={formData.pacienteNombre} onChange={handleChange} className="border p-2.5 rounded w-full border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition-all outline-none" /></div>
                    <div><label className="block text-xs font-bold text-slate-600 mb-2">Edad</label><input name="edad" value={formData.edad} onChange={handleChange} className="border p-2.5 rounded w-full border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition-all outline-none" /></div>
                    <div><label className="block text-xs font-bold text-slate-600 mb-2">Fecha Nacimiento</label><input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} className="border p-2.5 rounded w-full border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition-all outline-none" /></div>
                    <div><label className="block text-xs font-bold text-slate-600 mb-2">Sexo</label><select name="sexo" value={formData.sexo} onChange={handleChange} className="border p-2.5 rounded w-full border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition-all outline-none"><option value="F">Femenino</option><option value="M">Masculino</option></select></div>
                    <div><label className="block text-xs font-bold text-slate-600 mb-2">Estado Civil</label><input name="estadoCivil" value={formData.estadoCivil} onChange={handleChange} className="border p-2.5 rounded w-full border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition-all outline-none" /></div>
                    <div><label className="block text-xs font-bold text-slate-600 mb-2">Teléfono</label><input name="telefono" value={formData.telefono} onChange={handleChange} className="border p-2.5 rounded w-full border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition-all outline-none" /></div>
                    <div><label className="block text-xs font-bold text-slate-600 mb-2">Ocupación</label><input name="ocupacion" value={formData.ocupacion} onChange={handleChange} className="border p-2.5 rounded w-full border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition-all outline-none" /></div>
                    <div><label className="block text-xs font-bold text-slate-600 mb-2">Escolaridad</label><input name="escolaridad" value={formData.escolaridad} onChange={handleChange} className="border p-2.5 rounded w-full border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition-all outline-none" /></div>
                    <div><label className="block text-xs font-bold text-slate-600 mb-2">Religión</label><input name="religion" value={formData.religion} onChange={handleChange} className="border p-2.5 rounded w-full border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition-all outline-none" /></div>
                    <div className="md:col-span-3"><label className="block text-xs font-bold text-slate-600 mb-2">Domicilio</label><input name="domicilio" value={formData.domicilio} onChange={handleChange} className="border p-2.5 rounded w-full border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition-all outline-none" /></div>
                    <div className="md:col-span-3"><label className="block text-xs font-bold text-slate-600 mb-2">Referido Por</label><input name="referidoPor" value={formData.referidoPor} onChange={handleChange} className="border p-2.5 rounded w-full border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition-all outline-none" /></div>
                </div>
            </div>
            <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2 border-b border-slate-100 pb-2"><ShieldCheck size={20} /> Aviso de Privacidad</h3>
                    <div className="h-48 overflow-y-auto border p-4 bg-slate-50 text-xs text-justify mb-4 rounded whitespace-pre-wrap font-serif text-slate-600 leading-relaxed border-slate-200">{AVISO_PRIVACIDAD_TEXT}</div>
                    <label className="flex items-center gap-2 cursor-pointer bg-slate-50 p-3 rounded border border-slate-200 hover:bg-slate-100 transition-all select-none"><input type="checkbox" name="avisoPrivacidadAceptado" checked={formData.avisoPrivacidadAceptado} onChange={handleChange} className="w-5 h-5 text-slate-600 rounded focus:ring-slate-400 cursor-pointer" /><span className="text-sm font-bold text-slate-700">He leído y acepto el Aviso de Privacidad.</span></label>
                </div>
                <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2 border-b border-slate-100 pb-2"><FileSignature size={20} /> Consentimiento Informado</h3>
                    <div className="h-64 overflow-y-auto border p-4 bg-slate-50 text-xs text-justify mb-4 rounded whitespace-pre-wrap font-serif text-slate-600 leading-relaxed border-slate-200">{CONSENTIMIENTO_INFORMADO_TEXT}</div>
                    <label className="flex items-center gap-2 cursor-pointer bg-slate-50 p-3 rounded border border-slate-200 hover:bg-slate-100 transition-all select-none"><input type="checkbox" name="consentimientoInformadoAceptado" checked={formData.consentimientoInformadoAceptado} onChange={handleChange} className="w-5 h-5 text-slate-600 rounded focus:ring-slate-400 cursor-pointer" /><span className="text-sm font-bold text-slate-700">He leído, comprendo y acepto los términos del Consentimiento Informado.</span></label>
                </div>
            </div>
        </div>
    );
};

export default DatosGenerales;

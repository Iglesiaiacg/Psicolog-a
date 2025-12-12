import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePatients } from '../../context/PatientsContext';
import { Plus, Search, User, Trash2, FileText, Calendar } from 'lucide-react';

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
                    <button
                        onClick={handleCreatePatient}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                    >
                        <Plus size={20} /> Nuevo Expediente
                    </button>
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

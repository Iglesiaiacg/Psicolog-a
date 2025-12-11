import React from 'react';
import { LayoutTemplate, Monitor, Printer } from 'lucide-react';

const Header = ({ setPrintMode, handlePrint }) => {
    return (
        <header className="bg-indigo-900 text-white p-4 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold flex gap-2 items-center">
                    <LayoutTemplate /> Expediente Clínico
                </h1>
                <div className="flex gap-4">
                    <button
                        onClick={() => setPrintMode(true)}
                        className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded font-bold flex gap-2 items-center text-sm transition-colors"
                    >
                        <Monitor size={20} /> Vista Previa
                    </button>
                    <button
                        onClick={handlePrint}
                        className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded font-bold flex gap-2 items-center shadow-lg text-sm transition-colors"
                    >
                        <Printer size={20} /> Imprimir Todo
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;

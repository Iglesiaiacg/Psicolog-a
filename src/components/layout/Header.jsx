import React from 'react';
import { LayoutTemplate, Monitor, Printer, Menu, X } from 'lucide-react';

const Header = ({ setPrintMode, handlePrint, toggleSidebar, isSidebarOpen }) => {
    return (
        <header className="bg-indigo-900 text-white p-4 shadow-md sticky top-0 z-50">
            <div className="w-full px-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <button onClick={toggleSidebar} className="md:hidden p-1 hover:bg-indigo-800 rounded">
                        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <h1 className="text-xl font-bold flex gap-2 items-center">
                        <LayoutTemplate />
                        <span className="hidden sm:inline">Expediente Clínico</span>
                        <span className="sm:hidden">Expediente</span>
                    </h1>
                </div>
                <div className="flex gap-2 sm:gap-4">
                    <button
                        onClick={() => setPrintMode(true)}
                        className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded font-bold flex gap-2 items-center text-xs sm:text-sm transition-colors"
                    >
                        <Monitor size={18} /> <span className="hidden sm:inline">Vista Previa</span>
                    </button>
                    <button
                        onClick={handlePrint}
                        className="bg-green-500 hover:bg-green-600 px-3 py-2 rounded font-bold flex gap-2 items-center shadow-lg text-xs sm:text-sm transition-colors"
                    >
                        <Printer size={18} /> <span className="hidden sm:inline">Imprimir</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;

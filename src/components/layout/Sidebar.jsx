import React from 'react';
import { MENU_ITEMS } from '../../utils/menuItems';

const Sidebar = ({ activeTab, setActiveTab, isOpen, toggleSidebar }) => {
    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={toggleSidebar}
                />
            )}

            <aside className={`
                w-64 space-y-2 h-screen overflow-y-auto pr-2
                fixed md:sticky top-0 md:top-24 left-0 z-50 md:z-auto
                bg-gray-100 md:bg-transparent p-4 md:p-0
                transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full md:translate-x-0'}
            `}>
                <div className="bg-white p-4 rounded-xl shadow mb-4">
                    <div className="flex justify-between items-center md:hidden mb-4">
                        <h2 className="font-bold text-gray-500 text-xs uppercase tracking-wider">Módulos</h2>
                    </div>
                    <h2 className="hidden md:block font-bold text-gray-500 text-xs uppercase tracking-wider mb-2">Módulos</h2>

                    {MENU_ITEMS.map(item => (
                        <button
                            key={item.id}
                            onClick={() => {
                                setActiveTab(item.id);
                                if (window.innerWidth < 768) toggleSidebar();
                            }}
                            className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-all mb-1 ${activeTab === item.id ? 'bg-blue-100 text-blue-900 font-bold border-l-4 border-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                            <item.icon size={18} />
                            <span className="text-sm">{item.label}</span>
                        </button>
                    ))}
                </div>
            </aside>
        </>
    );
};

export default Sidebar;

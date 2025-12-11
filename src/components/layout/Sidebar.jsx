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
                w-64 space-y-2 overflow-y-auto pr-2 bg-gray-100 md:bg-white border-r border-gray-200
                fixed md:static top-0 left-0 z-50 md:z-auto h-screen md:h-full
                p-4 md:p-4
                transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full md:translate-x-0'}
            `}>
                <div className="md:bg-transparent md:p-0 rounded-xl md:rounded-none md:shadow-none mb-4">
                    <div className="flex justify-between items-center md:hidden mb-4">
                        <h2 className="font-bold text-gray-500 text-xs uppercase tracking-wider">Módulos</h2>
                    </div>
                    <h2 className="hidden md:block font-bold text-gray-500 text-xs uppercase tracking-wider mb-2 px-2">Módulos</h2>

                    {MENU_ITEMS.map(item => (
                        <button
                            key={item.id}
                            onClick={() => {
                                setActiveTab(item.id);
                                if (window.innerWidth < 768) toggleSidebar();
                            }}
                            className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-all mb-1 ${activeTab === item.id ? 'bg-slate-200 text-slate-900 font-bold border-l-4 border-slate-600' : 'text-slate-600 hover:bg-slate-50'}`}
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

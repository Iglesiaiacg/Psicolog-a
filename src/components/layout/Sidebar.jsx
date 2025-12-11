import React from 'react';
import { MENU_ITEMS } from '../../utils/menuItems';

const Sidebar = ({ activeTab, setActiveTab }) => {
    return (
        <aside className="w-64 space-y-2 h-fit sticky top-24 overflow-y-auto max-h-[80vh] pr-2">
            <div className="bg-white p-4 rounded-xl shadow mb-4">
                <h2 className="font-bold text-gray-500 text-xs uppercase tracking-wider mb-2">Módulos</h2>
                {MENU_ITEMS.map(item => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-all mb-1 ${activeTab === item.id ? 'bg-blue-100 text-blue-900 font-bold border-l-4 border-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                        <item.icon size={18} />
                        <span className="text-sm">{item.label}</span>
                    </button>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;

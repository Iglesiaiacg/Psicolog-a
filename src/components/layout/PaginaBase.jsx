import React from 'react';

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
                <div className="flex items-center gap-2"><span>{headerInfo.especialidad}</span><div className="bg-blue-900 text-white p-1 text-[8px] rounded-sm">Posgrado<br />ives</div></div>
            </div>
        )}
    </div>
);

export default PaginaBase;

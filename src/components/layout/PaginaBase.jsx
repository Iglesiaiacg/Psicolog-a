import React from 'react';

const PaginaBase = ({ title, children, showHeader = true, showFooter = true, headerInfo }) => (
    <div className="w-[21.59cm] min-h-[27.94cm] relative p-12 flex flex-col bg-white shadow-md mb-8 mx-auto print:shadow-none print:mb-0 print:m-0 print:w-full print:min-h-[27.5cm] print:break-after-page print:p-[2cm] print:pt-[1.5cm]">
        {showHeader && (
            <div className="flex justify-between items-start mb-6 text-xs font-bold text-gray-800 font-sans border-b-2 border-slate-900 pb-2 print:text-black">
                <div><div className="text-sm">{headerInfo.pasanteHeader}</div><div className="text-sm">Matrícula: {headerInfo.presentaMatricula}</div></div>
                <div className="text-right"><div className="text-sm">Folio: {headerInfo.folio}</div><div className="text-sm">Fecha: {headerInfo.fechaElaboracion}</div></div>
            </div>
        )}
        {title && <h2 className="text-center font-bold text-xl uppercase mb-8 bg-gray-50 p-2 text-slate-900 border-b border-gray-300 print:text-black print:border-black">{title}</h2>}
        <div className="flex-1 space-y-4 text-justify print:text-black">{children}</div>
        {showFooter && (
            <div className="mt-auto pt-6 border-t-2 border-slate-900 flex justify-between items-end text-xs font-bold text-gray-700 print:text-black">
                <div className="flex items-center gap-2"><span className="text-slate-900 font-black text-lg italic">ives</span><span>Universidad IVES</span></div>
                <div className="flex items-center gap-2"><span>{headerInfo.especialidad}</span><div className="bg-slate-900 text-white p-1 text-[8px] rounded-sm print:bg-black print:text-white">Posgrado<br />ives</div></div>
            </div>
        )}
    </div>
);

export default PaginaBase;

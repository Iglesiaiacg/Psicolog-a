import React from 'react';

const Figura = ({ x, y, genero, nombre, edad, finado, rol, isPaciente }) => (
    <g transform={`translate(${x},${y})`}>
        {genero === 'M' ? <rect x={-15} y={-15} width={30} height={30} fill="white" stroke="black" strokeWidth="1.5" /> : <circle cx={0} cy={0} r={15} fill="white" stroke="black" strokeWidth="1.5" />}
        {isPaciente && (genero === 'M' ? <rect x={-11} y={-11} width={22} height={22} fill="none" stroke="black" strokeWidth="1.5" /> : <circle cx={0} cy={0} r={11} fill="none" stroke="black" strokeWidth="1.5" />)}
        {finado && <g stroke="black" strokeWidth="1.5"><line x1={-15} y1={-15} x2={15} y2={15} /><line x1={15} y1={-15} x2={-15} y2={15} /></g>}
        <text y={40} textAnchor="middle" fontSize="8" fontWeight="bold">{rol}</text>
        <text y={50} textAnchor="middle" fontSize="8">{nombre ? nombre.split(' ')[0] : ''}</text>
        <text y={-25} textAnchor="middle" fontSize="8" fill="gray">{edad}</text>
    </g>
);

const GenogramaVisual = ({ familia }) => {
    const paciente = familia.find(f => f.rol === 'Paciente') || {};
    const padre = familia.find(f => f.rol === 'Padre');
    const madre = familia.find(f => f.rol === 'Madre');
    const pareja = familia.find(f => f.rol === 'Pareja' || f.rol === 'UnionLibre');
    const hijos = familia.filter(f => f.rol === 'Hijo' || f.rol === 'Hija');

    return (
        <svg width="100%" height="100%" viewBox="0 0 600 450">
            <defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#000" /></marker></defs>
            <text x={300} y={20} textAnchor="middle" fontSize="12" fill="#9ca3af">Generación Automática</text>
            {(padre && madre) && <path d={`M200,100 L400,100 M300,100 L300,220`} stroke="black" strokeWidth="1.5" fill="none" />}
            {pareja && <path d={`M300,250 L450,250`} stroke="black" strokeWidth="1.5" fill="none" strokeDasharray={pareja.rol === 'UnionLibre' ? "4 4" : "0"} />}
            {hijos.length > 0 && <g><line x1={200} y1={320} x2={550} y2={320} stroke="black" strokeWidth="1.5" />{hijos.map((h, i) => <line key={`l-${i}`} x1={250 + (i * 60)} y1={320} x2={250 + (i * 60)} y2={350} stroke="black" strokeWidth="1.5" />)}</g>}
            {padre && <Figura x={200} y={100} {...padre} />}
            {madre && <Figura x={400} y={100} {...madre} />}
            <Figura x={300} y={250} {...paciente} isPaciente={true} rol="PACIENTE" />
            {pareja && <Figura x={450} y={250} {...pareja} />}
            {hijos.map((h, i) => <Figura key={h.id} x={250 + (i * 60)} y={350} {...h} />)}
        </svg>
    );
};

export default GenogramaVisual;

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

const GenogramaVisual = ({ familia, relaciones = [] }) => { // Default to empty array if undefined
    // Map of fixed positions for standard roles to simplify visualization
    const positions = {};

    const padre = familia.find(f => f.rol === 'Padre');
    const madre = familia.find(f => f.rol === 'Madre');
    const paciente = familia.find(f => f.rol === 'Paciente'); // or 'Paciente'
    const pareja = familia.find(f => f.rol === 'Pareja' || f.rol === 'UnionLibre');
    const hijos = familia.filter(f => f.rol === 'Hijo' || f.rol === 'Hija');

    // Assign Positions
    if (padre) positions[padre.id] = { x: 200, y: 100 };
    if (madre) positions[madre.id] = { x: 400, y: 100 };
    if (paciente) positions[paciente.id] = { x: 300, y: 250 };
    else positions['temp-p'] = { x: 300, y: 250 };
    if (pareja) positions[pareja.id] = { x: 450, y: 250 };

    // Dynamic calculation for children to center them
    const childrenCount = hijos.length;
    const startX = 300 - ((childrenCount - 1) * 30); // Center children under patient
    if (hijos.length > 0) {
        hijos.forEach((h, i) => positions[h.id] = { x: startX + (i * 60), y: 350 });
    }

    // Calculate Bounds for ViewBox
    const allX = Object.values(positions).map(p => p.x);
    const allY = Object.values(positions).map(p => p.y);

    // Default bounds if empty
    const minX = allX.length ? Math.min(...allX) : 0;
    const maxX = allX.length ? Math.max(...allX) : 600;
    const minY = allY.length ? Math.min(...allY) : 0;
    const maxY = allY.length ? Math.max(...allY) : 450;

    const padding = 50;
    const vbX = minX - padding;
    const vbY = minY - padding;
    const vbW = (maxX - minX) + (padding * 2);
    const vbH = (maxY - minY) + (padding * 2);

    // Helper to get relationship style
    const getRelStyle = (type) => {
        const styles = {
            'estrecha': { color: 'green', width: 3, dash: '0' },
            'distante': { color: 'gray', width: 1.5, dash: '4 4' },
            'conflictiva': { color: 'red', width: 2, dash: '0', zigzag: true },
            'ruptura': { color: 'black', width: 1.5, dash: '0', cutoff: true }
        };
        return styles[type] || { color: 'black', width: 1 };
    };

    const renderRelationship = (rel, i) => {
        const p1 = positions[rel.from];
        const p2 = positions[rel.to];
        if (!p1 || !p2) return null;

        const style = getRelStyle(rel.type);
        const midX = (p1.x + p2.x) / 2;
        const midY = (p1.y + p2.y) / 2;

        if (style.zigzag) {
            return <path key={i} d={`M${p1.x},${p1.y} L${midX},${midY} L${p2.x},${p2.y}`} stroke={style.color} strokeWidth={style.width} fill="none" className="animate-pulse" strokeDasharray="5,5" />;
        }

        return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke={style.color} strokeWidth={style.width} strokeDasharray={style.dash} opacity={0.7} />;
    };

    return (
        <svg width="100%" height="100%" viewBox={`${vbX} ${vbY} ${vbW} ${vbH}`} preserveAspectRatio="xMidYMid meet">
            <defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#000" /></marker></defs>
            <text x={(minX + maxX) / 2} y={minY - 20} textAnchor="middle" fontSize="12" fill="#9ca3af">Generación Automática</text>

            {/* Structural Lines (Legacy) */}
            {(padre && madre) && <path d={`M200,100 L400,100 M300,100 L300,220`} stroke="black" strokeWidth="1.5" fill="none" />}
            {pareja && <path d={`M300,250 L450,250`} stroke="black" strokeWidth="1.5" fill="none" strokeDasharray={pareja.rol === 'UnionLibre' ? "4 4" : "0"} />}
            {hijos.length > 0 && <g>
                <line x1={startX} y1={320} x2={startX + ((childrenCount - 1) * 60)} y2={320} stroke="black" strokeWidth="1.5" />
                <line x1={300} y1={250} x2={300} y2={320} stroke="black" strokeWidth="1.5" />
                {hijos.map((h, i) => <line key={`l-${i}`} x1={startX + (i * 60)} y1={320} x2={startX + (i * 60)} y2={350} stroke="black" strokeWidth="1.5" />)}
            </g>}

            {/* Dynamic Relationships */}
            {relaciones.map((r, i) => renderRelationship(r, i))}

            {padre && <Figura {...padre} x={positions[padre.id].x} y={positions[padre.id].y} />}
            {madre && <Figura {...madre} x={positions[madre.id].x} y={positions[madre.id].y} />}
            <Figura {...(paciente || {})} isPaciente={true} rol="PACIENTE" x={positions[paciente ? paciente.id : 'temp-p'].x} y={positions[paciente ? paciente.id : 'temp-p'].y} />
            {pareja && <Figura {...pareja} x={positions[pareja.id].x} y={positions[pareja.id].y} />}
            {hijos.map((h, i) => <Figura key={h.id} {...h} x={positions[h.id].x} y={positions[h.id].y} />)}
        </svg>
    );
};

export default GenogramaVisual;

import React from 'react';

const GraficaEsferasVisual = ({ data }) => {
    const areas = [
        { k: 'Personal', c: '#60A5FA' }, { k: 'Interpersonal', c: '#F87171' }, { k: 'Pareja', c: '#A78BFA' },
        { k: 'Familiar', c: '#FBBF24' }, { k: 'Laboral', c: '#34D399' }, { k: 'Virtual', c: '#9CA3AF' }
    ];
    // Removed unused 'total' variable

    return (
        <svg width="100%" height="100%" viewBox="0 0 300 300">
            {areas.map((a, i) => {
                const val = parseFloat(data[a.k]) || 0;
                const barHeight = (val / 25) * 100;
                const angleRad = (i * (360 / areas.length) - 90) * (Math.PI / 180);
                const x = 150 + (barHeight + 20) * Math.cos(angleRad);
                const y = 150 + (barHeight + 20) * Math.sin(angleRad);

                return (
                    <g key={i}>
                        <line x1="150" y1="150" x2={150 + 100 * Math.cos(angleRad)} y2={150 + 100 * Math.sin(angleRad)} stroke="#e5e7eb" strokeWidth="1" />
                        <circle cx={x} cy={y} r="15" fill={a.c} />
                        <text x={x} y={y} dy="4" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">{val}</text>
                        <text x={150 + 130 * Math.cos(angleRad)} y={150 + 130 * Math.sin(angleRad)} textAnchor="middle" fontSize="10" fill="gray">{a.k}</text>
                    </g>
                );
            })}
            <circle cx="150" cy="150" r="10" fill="#374151" />
        </svg>
    );
};

export default GraficaEsferasVisual;

import React from 'react';

const OportunidadesPrimera = ({ partido }) => {
    if (!partido || !partido.estadisticas) {
        return <p className='mensaje-no-cambios'>No hay estadísticas disponibles.</p>;
    }

    const { estadisticas } = partido;

    const estadisticasLista = [
        { label: 'Posesión (%)', local: estadisticas.posesionLocal, visitante: estadisticas.posesionVisitante, esPorcentaje: true },
        { label: 'Tiros al arco', local: estadisticas.tirosAlArcoLocal, visitante: estadisticas.tirosAlArcoVisitante, esPorcentaje: false },
        { label: 'Disparos totales', local: estadisticas.disparosTotalesLocal, visitante: estadisticas.disparosTotalesVisitante, esPorcentaje: false },
        { label: 'Duelos ganados', local: estadisticas.duelosGanadosLocal, visitante: estadisticas.duelosGanadosVisitante, esPorcentaje: false },
        { label: 'Faltas', local: estadisticas.faltasLocal, visitante: estadisticas.faltasVisitante, esPorcentaje: false },
    ];

    return (
        <div className='oportunidades-del-partido'>
            {estadisticasLista.map((item, index) => (
                <div className="estadistica-linea" key={index}>
                    <div className="nombre-estadistica">{item.label}</div>
                    <div className="barra-estadistica">
                        <span className="valor-local">{item.local}{item.esPorcentaje ? '%' : ''}</span>
                        <progress className="progress-local" max={item.local + item.visitante} value={item.local}></progress>
                        <span className="valor-visitante">{item.visitante}{item.esPorcentaje ? '%' : ''}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OportunidadesPrimera;

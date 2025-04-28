import React from 'react';

const UltimosPartidosPrimera = ({ partido }) => {
    return (
        <div className="ultimos-partidos">
            <h2 className="titulo-partidos">Últimos 5 partidos</h2>
            
            {/* Partidos como Local */}
            <div className="partidos-lista local">
                <h3>{partido.equipo1} - Últimos Partidos</h3>
                <div className="partidos-grid">
                    {partido.ultimosPartidosLocal.map((partidoItem, index) => {
                        const resultadoLocal = partidoItem.termino; // ahora usamos "termino"

                        return (
                            <div className="partido" key={index}>
                                <div className="resultado">
                                    <span className={`resultado-${resultadoLocal.toLowerCase()}`}>{resultadoLocal}</span>
                                </div>
                                <div className="marcador">
                                    <span className="goles-local">{partidoItem.golesLocal}</span> - <span className="goles-visitante">{partidoItem.golesVisitante}</span>
                                </div>
                                <div className="escudos">
                                    <img src={partidoItem.escudoLocal} alt={partidoItem.local} className="escudo-local" />
                                    <img src={partidoItem.escudoVisitante} alt={partidoItem.visitante} className="escudo-visitante" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Partidos como Visitante */}
            <div className="partidos-lista visitante">
                <h3>{partido.equipo2} - Últimos Partidos</h3>
                <div className="partidos-grid">
                    {partido.ultimosPartidosVisitante.map((partidoItem, index) => {
                        const resultadoVisitante = partidoItem.termino; // también usamos "termino"

                        return (
                            <div className="partido" key={index}>
                                <div className="resultado">
                                    <span className={`resultado-${resultadoVisitante.toLowerCase()}`}>{resultadoVisitante}</span>
                                </div>
                                <div className="marcador">
                                    <span className="goles-local">{partidoItem.golesLocal}</span> - <span className="goles-visitante">{partidoItem.golesVisitante}</span>
                                </div>
                                <div className="escudos">
                                    <img src={partidoItem.escudoLocal} alt={partidoItem.local} className="escudo-local" />
                                    <img src={partidoItem.escudoVisitante} alt={partidoItem.visitante} className="escudo-visitante" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default UltimosPartidosPrimera;

import React from 'react'

const UltimosPartidosAscenso = ({ partido }) => {

    // Esta función ayuda a determinar si el equipo local ganó, perdió o empató en cada partido
    const obtenerResultado = (local, visitante) => {
        if (local > visitante) {
            return 'Victoria';
        } else if (local === visitante) {
            return 'Empate';
        } else {
            return 'Derrota';
        }
    };

    return (
        <div className="ultimos-partidos">
            <h2 className="titulo-partidos">Últimos 5 partidos de {partido.equipo1}</h2>
            
            {/* Partidos como Local */}
            <div className="partidos-lista local">
                <h3>{partido.equipo1} - Últimos Partidos</h3>
                <div className="partidos-grid">
                    {partido.ultimosPartidosLocal.map((partido, index) => {
                        const resultadoLocal = obtenerResultado(partido.golesLocal, partido.golesVisitante);

                        return (
                            <div className="partido" key={index}>
                                <div className="resultado">
                                    <span className={`resultado-${resultadoLocal.toLowerCase()}`}>{resultadoLocal}</span>
                                </div>
                                <div className="marcador">
                                    <span className="goles-local">{partido.golesLocal}</span> - <span className="goles-visitante">{partido.golesVisitante}</span>
                                </div>
                                <div className="escudos">
                                    <img src={partido.escudoLocal} alt={partido.local} className="escudo-local" />
                                    <img src={partido.escudoVisitante} alt={partido.visitante} className="escudo-visitante" />
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
                    {partido.ultimosPartidosVisitante.map((partido, index) => {
                        const resultadoVisitante = obtenerResultado(partido.golesLocal, partido.golesVisitante);

                        return (
                            <div className="partido" key={index}>
                                <div className="resultado">
                                    <span className={`resultado-${resultadoVisitante.toLowerCase()}`}>{resultadoVisitante}</span>
                                </div>
                                <div className="marcador">
                                    <span className="goles-local">{partido.golesLocal}</span> - <span className="goles-visitante">{partido.golesVisitante}</span>
                                </div>
                                <div className="escudos">
                                    <img src={partido.escudoLocal} alt={partido.local} className="escudo-local" />
                                    <img src={partido.escudoVisitante} alt={partido.visitante} className="escudo-visitante" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default UltimosPartidosAscenso
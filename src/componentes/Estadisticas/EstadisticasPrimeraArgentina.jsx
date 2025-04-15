import React from 'react';
import primera from "../Arrays/ArrayPrimeraDivicion";

const EstadisticasPrimeraArgentina = () => {
    return (
        <div className='estadisticas-primera-divicion'>
            <h1 className='titulo-principal'>Estadísticas Primera División</h1>
            <table className='tabla-de-posiciones'>
                <thead className='listado'>
                    <tr className='categoria'>
                        <th className='puestos'>Pos.</th>
                        <th className='nombre-de-equipo'>Equipos</th>
                        <th className='puntos'>PTS</th>
                        <th className='jugados'>J</th>
                        <th className='ganados'>G</th>
                        <th className='perdidos'>P</th>
                        <th className='diferencia-de-gol'>+/-</th>
                    </tr>
                </thead>
                <tbody className='listado-de-equipos'>
                    {primera.map((equipo) => {
                        let clasePosicion = "";

                        if (equipo.posicion >= 1 && equipo.posicion <= 6) {
                            clasePosicion = "equipo-libertadores";
                        } else if (equipo.posicion >= 7 && equipo.posicion <= 12) {
                            clasePosicion = "equipo-sudamericana";
                        } else if (equipo.posicion >= 21 && equipo.posicion <= 24) {
                            clasePosicion = "equipo-descenso";
                        }

                        return (
                            <tr className={`datos-de-equipos ${clasePosicion}`} key={equipo.id}>
                                <td className='posicion'>{equipo.posicion}</td>
                                <td className='informacion-del-equipo'>
                                    <img className='imagen-de-club' src={equipo.imagen} alt={equipo.nombre} />
                                    <span className='nombre-de-club'>{equipo.nombre}</span>
                                </td>
                                <td className='puntaje'>{equipo.puntos}</td>
                                <td className='partidos-jugados'>{equipo.jugados}</td>
                                <td className='partidos-ganados'>{equipo.ganados}</td>
                                <td className='partidos-perdidos'>{equipo.perdidos}</td>
                                <td className='diferencial'>{equipo.diferencia}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="fecha-importante">
                <h2 className="titulo-del-partido">Partido del día</h2>
                <div className="partido-del-dia">
                    <div className="info-del-dia">
                        <p className="dia-del-partido">17/05/2027</p>
                        <p className="fin-partido">Finalizado</p>
                    </div>
                    <div className="equipos-que-juegan">
                        <div className="equipo">
                            <img className="equipo-del-dia" src="https://api.promiedos.com.ar/images/team/fjgi/4" alt="Rafaela" />
                            <p className="nombre-equipo">Rafaela</p>
                        </div>
                        <div className="equipo">
                            <img className="equipo-del-dia" src="data:image/png;base64,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" alt="Boca" />
                            <p className="nombre-equipo">Boca</p>
                        </div>
                    </div>
                    <div className="resultado-del-dia">
                        <p className="resultado">1</p>
                        <p className="resultado">0</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default EstadisticasPrimeraArgentina;

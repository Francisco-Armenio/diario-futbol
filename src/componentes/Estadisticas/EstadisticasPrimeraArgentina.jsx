import React, { useState } from 'react';
import primera from "../Arrays/ArrayPrimeraDivicion";
import ascenso from "../Arrays/ArrayAscenso";

const EstadisticasPrimeraArgentina = () => {
    const [mostrarTabla, setMostrarTabla] = useState('primera');

    const renderTabla = (equipos, titulo, tipo) => (
        <div className='seccion-de-tabla'>
            <h1 className='titulo-principal'>{titulo}</h1>
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
                    {equipos.map((equipo) => {
                        let clasePosicion = "";

                        if (tipo === 'primera') {
                            if (equipo.posicion >= 1 && equipo.posicion <= 6) {
                                clasePosicion = "equipo-libertadores";
                            } else if (equipo.posicion >= 7 && equipo.posicion <= 12) {
                                clasePosicion = "equipo-sudamericana";
                            } else if (equipo.posicion >= 21 && equipo.posicion <= 28) {
                                clasePosicion = "equipo-descenso";
                            }
                        }

                        if (tipo === 'ascenso') {
                            if (equipo.posicion === 1) {
                                clasePosicion = "equipo-ascenso-directo";
                            } else if (equipo.posicion >= 2 && equipo.posicion <= 5) {
                                clasePosicion = "equipo-reducido";
                            } else if (equipo.posicion >= 19 && equipo.posicion <= 24) {
                                clasePosicion = "equipo-descenso";
                            }
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
        </div>
    );

    return (
        <div className='estadisticas-primera-divicion'>
            <div className='botones-de-tabla'>
                <button onClick={() => setMostrarTabla('primera')}>Primera División</button>
                <button onClick={() => setMostrarTabla('ascenso')}>Ascenso</button>
            </div>

            {mostrarTabla === 'primera' && renderTabla(primera, "Estadísticas Primera División", 'primera')}
            {mostrarTabla === 'ascenso' && renderTabla(ascenso, "Estadísticas Ascenso", 'ascenso')}
        </div>
    );
};

export default EstadisticasPrimeraArgentina;

import React from 'react';
import primera from "./Arrays/ArrayPrimeraDivicion";

const Primera = () => {
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

        </div>
    );
};

export default Primera
import React from 'react';
import primera from "./Arrays/ArrayPrimeraDivicion";

const EstadisticasPrimeraArgentina = () => {
    return (
        <div className='estadisticas-primera-divicion'>
            <h1 className='titulo-principal'>Estadísticas Primera División</h1>
            <table className='tabla-de-posiciones'>
                <thead className='listado'>
                    <tr className='categoria'>
                        <th className='puestos'>#</th>
                        <th className='nombre-de-equipo'>Equipos</th>
                        <th className='puntos'>PTS</th>
                        <th className='jugados'>J</th>
                        <th className='ganados'>G</th>
                        <th className='empatados'>E</th>
                        <th className='perdidos'>P</th>
                        <th className='goles-a-favor'>GF</th>
                        <th className='goles-en-contra'>GC</th>
                        <th className='diferencia-de-gol'>+/-</th>
                    </tr>
                </thead>
                <tbody className='listado-de-equipos'>
                    {primera.map((equipo, index) => {
                        const clasePosicion =
                            index < 4
                                ? "equipo-destacado-azul"
                                : index >= primera.length - 4
                                ? "equipo-destacado-rojo"
                                : "";

                        return (
                            <tr
                                className={`datos-de-equipos ${clasePosicion}`}
                                key={equipo.id}
                            >
                                <td className='posicion'>{equipo.posicion}</td>
                                <td className='imagen-de-club'>
                                    <img src={equipo.imagen} alt="" />
                                    <h2 className='nombre-de-club'>{equipo.nombre}</h2>
                                </td>
                                <td className='partidos-jugados'>{equipo.jugados}</td>
                                <td className='partidos-ganados'>{equipo.ganados}</td>
                                <td className='partidos-empatados'>{equipo.empatados}</td>
                                <td className='partidos-perdidos'>{equipo.perdidos}</td>
                                <td className='favor'>{equipo.favor}</td>
                                <td className='contra'>{equipo.contra}</td>
                                <td className='diferencial'>{equipo.diferencia}</td>
                                <td className='puntaje'>{equipo.puntos}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default EstadisticasPrimeraArgentina;

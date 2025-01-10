import React from 'react';
import primera from './Arrays/ArrayPrimeraDivicion';

const EstadisticasPrimeraArgentina = () => {
    return (
        <div>
            <h1>Estadísticas Primera División</h1>
            <table>
                <thead>
                    <tr>
                        <th>Posición</th>
                        <th>Nombre</th>
                        <th>Jugados</th>
                        <th>Ganados</th>
                        <th>Empatados</th>
                        <th>Perdidos</th>
                        <th>Goles a Favor</th>
                        <th>Goles en Contra</th>
                        <th>Diferencia</th>
                        <th>Puntos</th>
                    </tr>
                </thead>
                <tbody>
                    {primera.map((equipo) => (
                        <tr key={equipo.id}>
                            <td>{equipo.pocision}</td>
                            <td>{equipo.imagen}</td>
                            <td>{equipo.nombre}</td>
                            <td>{equipo.jugados}</td>
                            <td>{equipo.ganados}</td>
                            <td>{equipo.empatados}</td>
                            <td>{equipo.perdidos}</td>
                            <td>{equipo.favor}</td>
                            <td>{equipo.contra}</td>
                            <td>{equipo.diferencia}</td>
                            <td>{equipo.puntos}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EstadisticasPrimeraArgentina;

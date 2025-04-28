import React from 'react';

const EventosAscenso = ({ eventos }) => {
    if (!eventos || eventos.length === 0) {
        return <p className="sin-eventos">No hay eventos registrados.</p>;
    }

    return (
        <div className="eventos-primera">
            {eventos.map((evento, index) => (
                <div key={index} className="evento-linea">
                    {evento.equipo === 'Local' ? (
                        <>
                            <div>
                                <p className="evento-local descripcion">
                                    {evento.tipo === 'gol' && '⚽ Gol de '}
                                    {evento.tipo === 'amarilla' && '🟨 Amarilla para '}
                                    {evento.tipo === 'roja' && '🟥 Roja para '}
                                    {evento.tipo === 'cambio' && '🔁 Cambio: '}
                                    <strong>{evento.jugador}</strong>
                                </p>
                                {evento.tipo === 'gol' && evento.asistencia && (
                                    <p className="evento-asistencia-local">
                                        <strong className="asistencia-local">Asistencia:</strong> {evento.asistencia}
                                    </p>
                                )}
                            </div>
                            <p className="minuto-central">{evento.minuto}'</p>
                            <div className="evento-visita" />
                        </>
                    ) : (
                        <>
                            <div className="evento-local" />
                            <p className="minuto-central">{evento.minuto}'</p>
                            <div>
                                <p className="evento-visita descripcion">
                                    {evento.tipo === 'gol' && '⚽ Gol de '}
                                    {evento.tipo === 'amarilla' && '🟨 Amarilla para '}
                                    {evento.tipo === 'roja' && '🟥 Roja para '}
                                    {evento.tipo === 'cambio' && '🔁 Cambio: '}
                                    <strong>{evento.jugador}</strong>
                                </p>
                                {evento.tipo === 'gol' && evento.asistencia && (
                                    <p className="evento-asistencia-visitante">
                                        <strong className="asistencia-visitante">Asistencia:</strong> {evento.asistencia}
                                    </p>
                                )}
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default EventosAscenso;

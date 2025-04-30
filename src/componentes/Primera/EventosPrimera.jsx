import React from 'react';

const EventosPrimera = ({ eventos }) => {
    if (!eventos || eventos.length === 0) {
        return <p className="mensaje-no-cambios">No hay eventos registrados.</p>;
    }

    return (
        <div className="eventos-primera">
            {eventos.map((evento, index) => (
                <div key={index} className="evento-linea">
                    {evento.equipo === 'Local' ? (
                        <>
                            <div className="evento-local evento-box">
                                <p className="descripcion">
                                    {evento.tipo === 'gol' && '⚽ Gol de '}
                                    {evento.tipo === 'amarilla' && '🟨 Amarilla para '}
                                    {evento.tipo === 'roja' && '🟥 Roja para '}
                                    {evento.tipo === 'cambio' && '🔁 Cambio: '}
                                    <strong>{evento.jugador}</strong>
                                </p>
                                {evento.tipo === 'gol' && evento.asistencia && (
                                    <p className="asistencia">Asistencia: {evento.asistencia}</p>
                                )}
                            </div>
                            <div className="minuto-central">
                                <span>{evento.minuto}'</span>
                            </div>
                            <div className="evento-visita evento-box" />
                        </>
                    ) : (
                        <>
                            <div className="evento-local evento-box" />
                            <div className="minuto-central">
                                <span>{evento.minuto}'</span>
                            </div>
                            <div className="evento-visita evento-box">
                                <p className="descripcion">
                                    {evento.tipo === 'gol' && '⚽ Gol de '}
                                    {evento.tipo === 'amarilla' && '🟨 Amarilla para '}
                                    {evento.tipo === 'roja' && '🟥 Roja para '}
                                    {evento.tipo === 'cambio' && '🔁 Cambio: '}
                                    <strong>{evento.jugador}</strong>
                                </p>
                                {evento.tipo === 'gol' && evento.asistencia && (
                                    <p className="asistencia">Asistencia: {evento.asistencia}</p>
                                )}
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default EventosPrimera;

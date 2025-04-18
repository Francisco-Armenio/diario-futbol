import React from 'react';

const EventosPrimera = ({ eventos }) => {
    if (!eventos || eventos.length === 0) {
        return <p className="sin-eventos">No hay eventos registrados.</p>;
    }

    return (
        <div className="eventos-primera">
            {eventos.map((evento, index) => (
                <div key={index} className={`evento evento-${evento.tipo}`}>
                    <p className="minuto">⏱️ {evento.minuto}'</p>
                    <p className="descripcion">
                        {evento.tipo === 'gol' && '⚽ Gol de '}
                        {evento.tipo === 'amarilla' && '🟨 Amarilla para '}
                        {evento.tipo === 'roja' && '🟥 Roja para '}
                        {evento.tipo === 'cambio' && '🔁 Cambio: '}
                        <strong>{evento.jugador}</strong> ({evento.equipo})
                    </p>
                </div>
            ))}
        </div>
    );
};

export default EventosPrimera;

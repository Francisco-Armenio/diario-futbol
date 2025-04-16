import React from 'react';
import { useParams } from 'react-router-dom';
import partidos from '../Arrays/ArrayPartidosPrimera';

const DatosDelPartido = () => {
    const { id } = useParams();
    const partido = partidos.find(p => p.id.toString() === id);

    if (!partido) {
        return <div>Partido no encontrado</div>;
    }

    return (
        <div className="datos-partido">
            <h2>Detalles del Partido</h2>
            <p><strong>Local:</strong> {partido.equipo1}</p>
            <p><strong>Visitante:</strong> {partido.equipo2}</p>
            <p><strong>Estado:</strong> {partido.estado}</p>
        </div>
    );
};

export default DatosDelPartido;

import React from 'react';
import partidos from '../Arrays/ArrayPartidosPrimera';
import { Link } from 'react-router-dom';

const PartidosDePrimera = () => {
    const partidosEnVivo = partidos.filter(partido => partido.estado === "En vivo");

    return (
        <div className="contenedor-vivo-moderno">
            {partidosEnVivo.map(partido => (
                <Link to={`/partido/${partido.id}`} key={partido.id} className="partido-link">
                    <div className="partido-vivo">
                        <div className="columna imagenes">
                            <img src={partido.imagen1} alt={partido.equipo1} className="escudo-vivo" />
                            <img src={partido.imagen2} alt={partido.equipo2} className="escudo-vivo" />
                        </div>

                        <div className="columna nombres">
                            <p>{partido.equipo1}</p>
                            <p>{partido.equipo2}</p>
                        </div>

                        <div className="columna resultados">
                            <p>{partido.resultado1}</p>
                            <p>{partido.resultado2}</p>
                        </div>

                        <div className="columna estado">
                            <p className="estado-vivo">{partido.estado}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default PartidosDePrimera;

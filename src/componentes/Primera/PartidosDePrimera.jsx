import React from 'react'
import { Link } from 'react-router-dom'
import partidos from '../Arrays/ArrayPartidosPrimera';
import primera from '../Arrays/ArrayPrimeraDivicion';

const PartidosDePrimera = () => {
    return (
        <div className="fechas-partidos">
            {partidos.map((partido) => {
                const equipo1 = primera.find((e) => e.nombre === partido.equipo1);
                const equipo2 = primera.find((e) => e.nombre === partido.equipo2);

                return (
                    <Link to={`/partido/${partido.id}`} key={partido.id} className="partido-link">
                        <div className={`partido ${partido.estado === "en vivo" ? "en-vivo" : "finalizado"}`}>
                            <div className="equipo equipo-local">
                                <img src={equipo1?.imagen} alt={partido.equipo1} />
                                <span>{partido.equipo1}</span>
                            </div>
                            <span className="estado">{partido.estado}</span>
                            <div className="equipo equipo-visitante">
                                <span>{partido.equipo2}</span>
                                <img src={equipo2?.imagen} alt={partido.equipo2} />
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    )
}

export default PartidosDePrimera

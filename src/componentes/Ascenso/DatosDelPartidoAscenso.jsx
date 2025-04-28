import React from 'react';
import { useParams } from 'react-router-dom';
import partidos from '../Arrays/ArrayPartidosSegunda'; 
import EventosAscenso from './EventosAscenso';
import InfoPartidoAscenso from './InfoPartidoAscenso';
import OportunidadesAscenso from './OportunidadesAscenso';
import UltimosPartidosAscenso from './UltimosPartidosAscenso';

const DatosDelPartidoAscenso = () => {
    const { id } = useParams(); // Obtén el id de la URL
    const partido = partidos.find(p => p.id.toString() === id); // Busca el partido por su id

    if (!partido) {
        return <div>Partido no encontrado</div>;
    }

    return (
        <div className="datos-partido">
            <div className="logotipo">
                <img className="imagen-dato" src="https://image-service.onefootball.com/transform?w=64&dpr=2&image=https://images.onefootball.com/icons/leagueColoredCompetition/128/164.png" />
                <h2 className="titulo-dato">Primera Nacional</h2>
            </div>

            <div className="info-partido-dato">
                <p className="equipo1-dato">{partido.equipo1}</p>
                <img className="imagen1-dato" src={partido.imagen1} alt="" />
                <p className="resultado1-dato">{partido.resultado1}</p>
                <p className="separador">:</p>
                <p className="resultado1-dato">{partido.resultado2}</p>
                <img className="imagen2-dato" src={partido.imagen2} alt="" />
                <p className="equipo2-dato">{partido.equipo2}</p>
            </div>

            <div className='info-partido-tiempo'>
                <p className='info-partido-estado'>{partido.estado}</p>
                <p className='info-partido-minuto'>{partido.minuto}</p>
            </div>

            <EventosAscenso eventos={partido.eventos}/>

            <div className='informacion-del-partido'>
                <InfoPartidoAscenso partido={partido} />
            </div>
            <div className='oportunidades-equipos-general'>
                <OportunidadesAscenso partido={partido} />
            </div>
            <div className='ultimos-partidos-de-los-equipos'>
                <UltimosPartidosAscenso partido={partido}/>
            </div>
        </div>
    );
}

export default DatosDelPartidoAscenso;

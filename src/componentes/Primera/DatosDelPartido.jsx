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
            <div className='logotipo'>
                <img className='imagen-dato' src="https://api.promiedos.com.ar/images/team/fjgi/4" />
                <h2 className='titulo-dato'>Liga Profesional Argentina</h2>
            </div>

            <div className='info-partido-dato'>
                <p className='equipo1-dato'>{partido.equipo1}</p>
                <img className='imagen1-dato' src={partido.imagen1} alt="" />
                <p className='resultado1-dato'>{partido.resultado1}</p>
                <p className='separador'>:</p>
                <p className='resultado1-dato'>{partido.resultado2}</p>
                <img className='imagen2-dato' src={partido.imagen2} alt="" />
                <p className='equipo2-dato'>{partido.equipo2}</p>
            </div>

            <div className='estado-del-partido'>
                <p className='estado-dato'>{partido.estado}</p>
                <p className='minuto-dato'>{partido.minuto}</p>
            </div>
        </div>
    );
};

export default DatosDelPartido;

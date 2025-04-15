import React from 'react';
import { useParams } from 'react-router-dom';
import infoPrimera from './Arrays/ArrayPrimeraNoticias';

const PrimeraExtendida = () => {
    const { id } = useParams();
    const noticia = infoPrimera.find((item) => item.id.toString() === id);

    if (!noticia) {
        return <div>Noticia no encontrada</div>;
    }

    return (
        <div className="noticia-extendida">
            <div className="informacion-superior">
                <span className="extendido-minititulo">{noticia.minititulo}</span>
                <h1 className="extendido-titulo">{noticia.titulo}</h1>
                <p className="extendido-autor">Por {noticia.autor}</p>
                <img className="extendido-imagen" src={noticia.imagen} alt="" />
            </div>

            <div className="informacion-inferior">
                <p className="extendido-info">{noticia.info}</p>
            </div>
        </div>
    );
};

export default PrimeraExtendida;

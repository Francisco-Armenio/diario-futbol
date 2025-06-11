import React from 'react';
import { useParams } from 'react-router-dom';
import noticias from '../Arrays/ArrayNoticiasLibertadores';

const LibertadoresExtendida = () => {
    const { id } = useParams();
    const noticia = noticias.find((item) => item.id.toString() === id);

    if (!noticia) {
        return <div>Noticia no encontrada</div>;
    }

    return (
        <div className="noticia-extendida">
            <div className="informacion-superior">
                <span className="extendido-minititulo">{noticia.minititulo}</span>
                <h1 className="extendido-titulo">{noticia.titulo}</h1>
                <p className="extendido-autor">Por {noticia.autor}</p>
                <img className="extendido-imagen" src={noticia.imagen} alt={noticia.titulo} />
            </div>

            <div className="informacion-inferior">
                <p className="extendido-info">{noticia.info}</p>
            </div>
        </div>
    );
};

export default LibertadoresExtendida;

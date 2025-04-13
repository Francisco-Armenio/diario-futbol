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
        <div className='noticia-extendida'>
            <h1>{noticia.titulo}</h1>
            <img src={noticia.imagen} alt={noticia.titulo} />
            <p>{noticia.descripcionExtendida || noticia.descripcion}</p>
        </div>
    );
};

export default PrimeraExtendida;

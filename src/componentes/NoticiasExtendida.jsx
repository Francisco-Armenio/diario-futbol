import React from 'react';
import { useParams } from 'react-router-dom';
import noticias from './Arrays/ArrayNoticias';

const NoticiasExtendida = () => {
    // Obtener el id de la noticia de la URL
    const { id } = useParams();

    // Buscar la noticia correspondiente en el array
    const noticia = noticias.find(noticia => noticia.id === parseInt(id));

    return (
        <div className="noticia-extendida">
            {noticia ? (
                <>
                    <h1>{noticia.titulo}</h1>
                    <img src={noticia.imagen} alt={noticia.titulo} />
                    <p>{noticia.contenido}</p>
                    <p><strong>Autor:</strong> {noticia.autor}</p>
                    <p><strong>Fecha:</strong> {noticia.fecha}</p>
                    <p><strong>Likes:</strong> {noticia.likes}</p>
                </>
            ) : (
                <p>Noticia no encontrada</p>
            )}
        </div>
    );
};

export default NoticiasExtendida;

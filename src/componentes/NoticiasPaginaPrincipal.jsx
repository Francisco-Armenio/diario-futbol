import React from 'react';
import noticias from './Arrays/ArrayNoticias';

const NoticiasPaginaPrincipal = () => {
    return (
        <div>
            <h1>Noticias</h1>
            <div>
                {noticias.map((noticia) => (
                    <div key={noticia.id}>
                        <h2>{noticia.titulo}</h2>
                        <p>{noticia.resumen}</p>
                        <img src={noticia.imagenUrl} alt={noticia.titulo} />
                        <p>Autor: {noticia.autor}</p>
                        <p>Fecha: {noticia.fecha}</p>
                        <button>Leer más</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NoticiasPaginaPrincipal;

import React from 'react';
import noticias from './ArrayDeNoticias/ArrayNoticias'; // Ajusta la ruta si está en otra carpeta

const NoticiasPaginaPrincipal = () => {
    return (
        <div>
            <h1>Noticias</h1>
            <div>
                {noticias.map((noticia) => (
                    <div key={noticia.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
                        <h2>{noticia.titulo}</h2>
                        <p>{noticia.resumen}</p>
                        <img src={noticia.imagenUrl} alt={noticia.titulo} style={{ width: '150px', height: 'auto' }} />
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

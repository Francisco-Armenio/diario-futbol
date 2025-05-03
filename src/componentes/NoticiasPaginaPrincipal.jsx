import React from 'react';
import noticias from './Arrays/ArrayNoticias';
import { Link } from 'react-router-dom';

const NoticiasPaginaPrincipal = () => {
    const noticiaDestacada = noticias[0];
    const noticiasSecundarias = noticias.slice(1, 7);

    return (
        <div className="noticias-pagina-principal">
            <Link to={`/noticia/${noticiaDestacada.id}`} className='noticia-destacada'>
                <img className='imagen-grande' src={noticiaDestacada.imagen} alt="" />
                <div className="info-destacada">
                    <div className="top-info">
                        <h2 className='titulo-grande'>{noticiaDestacada.titulo}</h2>
                        <p className='contenido-destacado-principal'>{noticiaDestacada.miniinfo}</p>
                        <p className='autor-destacado'>por {noticiaDestacada.autor} · {noticiaDestacada.fecha}</p>
                    </div>
                </div>
            </Link>



            <div className="noticias-secundarias">
                {noticiasSecundarias.map((noticia) => (
                    <Link to={`/noticia/${noticia.id}`} key={noticia.id} className='card-noticia-secundaria'>
                        <img className='imagen-chica' src={noticia.imagen} alt="" />
                        <p className='fecha-secundaria'>{noticia.fecha}</p>
                        <div className='info-secundaria'>
                            <p className='minititulo'>{noticia.minititulo}</p>
                            <h3 className='titulo-chico'>{noticia.titulo}</h3>
                            <p className='contenido-secundario'>{noticia.miniinfo}</p>
                            <p className='autor-secundario'>por {noticia.autor}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default NoticiasPaginaPrincipal;

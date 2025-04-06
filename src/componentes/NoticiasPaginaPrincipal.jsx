import React from 'react';
import noticias from './Arrays/ArrayNoticias';
import { Link } from 'react-router-dom';

const NoticiasPaginaPrincipal = () => {
    return (
        <div className="noticias-principales">
            {noticias.map((noticia) => (
                <Link to={`/noticia/${noticia.id}`} key={noticia.id} className='card-de-noticia'>
                    <img className='imagen-de-la-noticia' src={noticia.imagen} alt="" />
                    <div className='informacion-de-noticia'>
                        <div className='texto-superior-de-noticia'>
                            <p className='minititulo'>{noticia.minititulo}</p>
                            <p className='fecha'>{noticia.fecha}</p>
                        </div>
                        <h2 className='titulo-noticia'>{noticia.titulo}</h2>
                        <p className='contenido-de-noticia'>{noticia.miniinfo}</p>
                        <div className='texto-inferior-de-noticia'>
                            <p className='autor'>por {noticia.autor}</p>
                            <p className='likes'>
                                <img className='img-de-likes' src="https://cdn-icons-png.flaticon.com/128/18280/18280312.png" alt="like" /> {noticia.likes}
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default NoticiasPaginaPrincipal;

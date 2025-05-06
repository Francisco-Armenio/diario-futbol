import React from 'react';
import noticias from './Arrays/ArrayNoticias';
import { Link } from 'react-router-dom';

const NoticiasPaginaPrincipal = () => {
    const noticiaDestacada = noticias[0];
    const noticiasSecundarias = noticias.slice(1, 7);

    return (
        <div className="noticias-pagina-principal">
            <Link to={`/noticia/${noticiaDestacada.id}`} className='noticia-destacada'>
                <div className="noticia-destacada-img">
                    <img src={noticiaDestacada.imagen} alt={noticiaDestacada.titulo} />
                </div>
                <div className="noticia-destacada-info">
                    <h2 className="nd-titulo">{noticiaDestacada.titulo}</h2>
                    <p className="nd-miniinfo">{noticiaDestacada.miniinfo}</p>
                    <p className="nd-autor">Por <span>{noticiaDestacada.autor}</span> · <span className="nd-fecha">{noticiaDestacada.fecha}</span></p>
                </div>
            </Link>

            <div className="noticias-secundarias-grid">
                {noticiasSecundarias.map((noticia) => (
                    <Link to={`/noticia/${noticia.id}`} key={noticia.id} className="card-noticia-secundaria">
                        <div className="card-secundaria-img">
                            <img src={noticia.imagen} alt={noticia.titulo} />
                        </div>
                        <div className="card-secundaria-content">
                            <div className="card-secundaria-header">
                                <p className="card-minititulo">{noticia.minititulo}</p>
                                <p className="card-fecha">{noticia.fecha}</p>
                            </div>
                            <h2 className="card-titulo">{noticia.titulo}</h2>
                            <p className="card-miniinfo">{noticia.miniinfo}</p>
                            <div className="card-secundaria-footer">
                                <p className="card-autor">por {noticia.autor}</p>
                                <p className="card-likes">
                                    <img src="https://cdn-icons-png.flaticon.com/128/18280/18280312.png" alt="like" /> {noticia.likes}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default NoticiasPaginaPrincipal;
/**/
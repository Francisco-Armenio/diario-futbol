import React from 'react'
import infoSegunda from '../Arrays/ArrayAscensoNoticias';
import { Link } from 'react-router-dom';

const Ascenso = () => {
    return (
        <div className='contenedor-noticias'>
            {infoSegunda.map((noticia) => (
                <div className='card-noticia-campeonato' key={noticia.id}>
                    <Link to={`/ascenso/${noticia.id}`} key={noticia.id} className='noticia-extendida'>
                    <img className='imagenes-noticia-campeonato' src={noticia.imagen} alt="" />
                    <div className='data-noticia'>
                        <div className='mini-informacion'>
                            <p className='minititulo-de-noticia'>{noticia.minititulo}</p>
                            <p className='frcha-de-nocticia'>{noticia.fecha}</p>
                        </div>
                        <h2 className='titulo-noticia-campeonato'>{noticia.titulo}</h2>
                        <p className='miniinfo-campeonato'>{noticia.miniinfo}</p>
                        <div className='informacion-creador-de-nota'>
                            <p className='autor-noticia-campeonato'>por {noticia.autor}</p>
                            <p className='like-noticia-campeonato'>
                                <img className='' src="https://cdn-icons-png.flaticon.com/128/18280/18280312.png" alt="like" /> {noticia.likes}
                            </p>
                        </div>
                    </div>
                </Link>
                </div>
            ))}
        </div>
    );
};

export default Ascenso
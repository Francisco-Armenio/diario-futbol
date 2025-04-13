import React from 'react';
import infoPrimera from './Arrays/ArrayPrimeraNoticias';
import { Link } from 'react-router-dom';

const Primera = () => {
    return (
        <div className='contenedor-noticias-primera'>
            {infoPrimera.map((noticia) => (
                <div className='' key={noticia.id}>
                    <Link to={`/primera/${noticia.id}`} key={noticia.id} className=''>
                    <img className='' src={noticia.imagen} alt="" />
                    <div className=''>
                        <div className=''>
                            <p className=''>{noticia.minititulo}</p>
                            <p className=''>{noticia.fecha}</p>
                        </div>
                        <h2 className=''>{noticia.titulo}</h2>
                        <p className=''>{noticia.miniinfo}</p>
                        <div className=''>
                            <p className=''>por {noticia.autor}</p>
                            <p className=''>
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

export default Primera;

import React from 'react'
import { Link } from 'react-router-dom';

const NavbarEstadisticas = () => {
    return (
        <div className='navbar'>
            <div className='navbar-superior'>
                <div className='mis-redes-parte-izquierda'>
                    <a href="https://www.linkedin.com/in/francisco-armenio/" className='perfil-linkedin'><img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="Logo de Linkedin" /></a>
                    <a href="https://github.com/Francisco-Armenio" className='perfil-github'><img src="https://cdn-icons-png.flaticon.com/128/733/733553.png" alt="Logo de Github" /></a>
                    <p className='mi-gmail'>franciscoarmenio1@gmail.com<img src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt="Logo de Gmail" /></p>
                </div>
                <div className='informacion-ligas-parte-derecha'>
                    <Link to="/estadisticas" className='estadisticas'><img src="https://cdn-icons-png.flaticon.com/128/15594/15594544.png" alt="Estadisticas" />Estadiscticas</Link>
                    <Link to="/agenda" className='agenda'><img src="https://cdn-icons-png.flaticon.com/128/2738/2738169.png" alt="Agenda" />Agenda</Link>
                </div>
            </div>
            <div className='navbar-central'>
                <Link to="/" className='logo'>Futbol para todos</Link>
                <h2 className='titulo-primera'>Estadísticas deportivas</h2>
            </div>
            <div className='navbar-inferior'>
                <p className='noticia-del-dia'>Noticias del dia:</p>
                <p className='mini-noticia' >Rafaela cada vez más cerca del título</p>
                <p className='mini-noticia' >¡Sorpresa! Belgrano se mete en el podio y va por todo</p>
                <p className='mini-noticia' >Tigre, a 3 del descenso, lucha para no tocar fondo</p>
            </div>
        </div>
    )
}

export default NavbarEstadisticas
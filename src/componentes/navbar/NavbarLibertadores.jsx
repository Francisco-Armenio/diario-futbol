import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLibertadores = () => {
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
                <img className='logo-ligas-profecionales' src="https://api.promiedos.com.ar/images/league/bac/1" alt="Primera Nacional" />
                <h2 className='titulo-primera'>Libertadores</h2>
            </div>
            <div className='navbar-inferior'>
                <p className='noticia-del-dia'>Noticias del dia:</p>
                <p className='mini-noticia' >Cuenta regresiva para los cuartos de final</p>
                <p className='mini-noticia' >River y Sao Paulo se preparan para un cruce de gigantes por un lugar en semifinales.</p>
                <p className='mini-noticia' >Los ocho mejores de América afinan detalles</p>
            </div>
            </div>
    )
}

export default NavbarLibertadores
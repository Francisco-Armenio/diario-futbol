import React from 'react'
import { Link } from 'react-router-dom';


const NavbarPaginaPrincipal = () => {
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
                    <Link to="/" className='agenda'><img src="https://cdn-icons-png.flaticon.com/128/2738/2738169.png" alt="Agenda" />Agenda</Link>
                </div>
            </div>
            <div className='navbar-central'>
                <div className='logotipo'>
                    <Link to="/" className='logo'>Futbol para todos</Link>
                </div>
                <div className='navbar-menu'>
                    <ul className='navbar-menu-lista'>
                        <li className='navbar-menu-item'>
                            <Link to="/primera" className='menu-item-link'>PRIMERA</Link>
                        </li>
                        <li className='navbar-menu-item'>
                            <Link to="/ascenso" className='menu-item-link'>ASCENSO</Link>
                        </li>
                        <li className='navbar-menu-item'>
                            <Link to="/" className='menu-item-link'>LIBERTADORES</Link>
                        </li>
                        <li className='navbar-menu-item'>
                            <Link to="/" className='menu-item-link'>INTERNACIONAL</Link>
                        </li>
                        <li className='navbar-menu-item'>
                            <Link to="/" className='menu-item-link'>SELECCION</Link>
                        </li>
                        <li className='navbar-menu-item'>
                            <Link to="/" className='menu-item-link'>FORMULA 1</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='navbar-inferior'>
                <p>Noticias del dia:</p>
                <Link to="/">a definir</Link>
                <Link to="/">a definir</Link>
                <Link to="/">a definir</Link>
            </div>
        </div>
    )
}

export default NavbarPaginaPrincipal
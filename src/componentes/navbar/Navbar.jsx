import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-superior'>
                <div className='mis-redes'>
                    <a href="/">a<img src="./imagenes/linkedin" alt="" /></a>
                    <a href="/">b<img src="" alt="" /></a>
                    <a href="/">c<img src="" alt="" /></a>
                </div>
                <div className='informacion-ligas'>
                    <Link to="/" className='estadisticas'>Estadiscticas</Link>
                    <Link to="/" className='agenda'>Agenda</Link>
                </div>
            </div>
            <div className='navbar-central'>
                <div className='logotipo'>
                    <Link to="/" className='logo'>Por definir</Link>
                </div>
                <div className='navbar-menu'>
                    <ul className='navbar-menu-lista'>
                        <li className='navbar-menu-item'>
                            <Link to="/" className='menu-item-link'>PRIMERA</Link>
                        </li>
                        <li className='navbar-menu-item'>
                            <Link to="/" className='menu-item-link'>ACENSO</Link>
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

export default Navbar
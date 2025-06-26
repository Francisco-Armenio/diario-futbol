import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ascenso from '../Arrays/ArrayAscenso'; // 👈 Asegurate que la ruta sea correcta

const NavbarAscenso = () => {
    const [equipoSeleccionado, setEquipoSeleccionado] = useState(null);

    const noticiasPorEquipo = {
        quilmes: ["Quilmes busca volver a primera", "Refuerzos confirmados"],
        ferro: ["Ferro juega amistoso con Morón", "Obras en el estadio"],
        allboys: ["All Boys presenta nueva camiseta", "Renovación de plantel"],
    };

    const volverANoticiasGenerales = () => {
        setEquipoSeleccionado(null);
    };

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
                <img className='logo-ligas-profecionales' src="https://api.promiedos.com.ar/images/league/ebj/1" alt="Primera Nacional" />
                <h2 className='titulo-primera'>Primera Nacional</h2>
            </div>
            <div className='navbar-inferior'>
                <p className='noticia-del-dia'>Noticias del dia:</p>
                <p className='mini-noticia' >Ferro gana 2-1 a Chacarita en un duelo caliente con 10 por lado</p>
                <p className='mini-noticia' >Quilmes pierde 3-1 con Godoy Cruz y se aleja del repechaje</p>
                <p className='mini-noticia' >All Boys activa plan de emergencia por lesiones</p>
            </div>

            <div className='equipo-navbar-ascenso'>
                <ul className='linea-equipos-ascenso'>
                    {ascenso.map((equipo) => (
                        <li
                            key={equipo.id}
                            className="equipos-ascenso"
                            onClick={() => setEquipoSeleccionado(equipo.nombre)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img
                                src={equipo.imagen}
                                alt={`Escudo de ${equipo.nombre}`}
                                className="escudo-equipo-ascenso"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NavbarAscenso;

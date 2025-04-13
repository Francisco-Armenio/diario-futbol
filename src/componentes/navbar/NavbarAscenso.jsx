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
        <div className='navbar-ascenso'>
            <div className='mis-redes-parte-izquierda'>
                <a href="https://www.linkedin.com/in/francisco-armenio/" className='perfil-linkedin'>
                    <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="Logo de Linkedin" />
                </a>
                <a href="https://github.com/Francisco-Armenio" className='perfil-github'>
                    <img src="https://cdn-icons-png.flaticon.com/128/733/733553.png" alt="Logo de Github" />
                </a>
                <p className='mi-gmail'>
                    franciscoarmenio1@gmail.com
                    <img src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt="Logo de Gmail" />
                </p>
            </div>

            <div className='navbar-logo-ascenso'>
                <Link to="/" className='logo-ascenso'>Futbol para todos</Link>
                <img className='logo-ligas-profecionales' src="https://image-service.onefootball.com/transform?w=128&dpr=2&image=https://images.onefootball.com/icons/leagueColoredCompetition/128/164.png" alt="Primera Nacional" />
                <h2 className='titulo-ascenso'>Primera Nacional</h2>
            </div>

            <div className='noticias-dia-ascenso'>
                {equipoSeleccionado ? (
                    <>
                        <h2>Noticias de {equipoSeleccionado}</h2>
                        {noticiasPorEquipo[equipoSeleccionado.toLowerCase()]?.map((noticia, i) => (
                            <p key={i}>{noticia}</p>
                        ))}
                        <button onClick={volverANoticiasGenerales}>Volver a noticias generales</button>
                    </>
                ) : (
                    <>
                        <h2 className='noticia-del-dia-navbar-ascenso'>Noticia del día</h2>
                        <p className='mini-noticia-ascenso'>📢 Quilmes se prepara para el torneo</p>
                        <p className='mini-noticia-ascenso'>⚽ Ferro enfrenta a All Boys</p>
                        <p className='mini-noticia-ascenso'>🔥 Chicago arranca con todo</p>
                    </>
                )}
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

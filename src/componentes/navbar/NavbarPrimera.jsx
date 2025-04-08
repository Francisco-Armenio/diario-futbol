import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import primera from '../Arrays/ArrayPrimeraDivicion';

const NavbarPrimera = () => {
  const [equipoSeleccionado, setEquipoSeleccionado] = useState(null);

  const noticiasPorEquipo = {
    boca: ["Boca entrena con plantel completo", "Se define el 11 titular"],
    river: ["River presenta nueva camiseta", "Demichelis prueba esquema nuevo"],
    independiente: ["Independiente busca refuerzos", "Festejos por aniversario"],
    racing: ["Racing confirma amistoso internacional", "Gago vuelve al banco"],
    sanlorenzo: ["San Lorenzo cierra pretemporada", "Nuevos juveniles se suman"],
    // Agregá más según tu array
  };

  const volverANoticiasGenerales = () => {
    setEquipoSeleccionado(null);
  };

  return (
    <div className='navbar-primera'>
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

      <div className='navbar-logo-primera'>
        <Link to="/" className='logo-primera'>Futbol para todos</Link>
        <h2 className='titulo-primera'>Primera</h2>
      </div>

      <div className='noticias-dia-primera'>
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
            <h2 className='noticia-del-dia-navbar'>Noticia del día</h2>
            <p className='mini-noticia'>⚽ Boca prepara su debut</p>
            <p className='mini-noticia'>📢 River presenta nueva camiseta</p>
            <p className='mini-noticia'>🔥 Clásico rosarino confirmado</p>
          </>
        )}
      </div>

      <div className='equipo-navbar'>
        <ul className='linea-equipos'>
          {primera.map((equipo) => (
            <li
              key={equipo.id}
              className="equipos"
              onClick={() => setEquipoSeleccionado(equipo.nombre)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={equipo.imagen}
                alt={`Escudo de ${equipo.nombre}`}
                className="escudo-equipo"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarPrimera;

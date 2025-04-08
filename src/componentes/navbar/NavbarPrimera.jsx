import React from 'react';
import primera from '../Arrays/ArrayPrimeraDivicion'; // Asegurate de que esta sea la ruta correcta

const NavbarPrimera = () => {
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

      <div className='navbar-equipos'>
        <h1>Primera</h1>
        <ul>
          {primera.map((equipo) => (
            <li key={equipo.id} className="equipo-navbar">
              <img src={equipo.imagen} alt={`Escudo de ${equipo.nombre}`} className="escudo-equipo" />
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default NavbarPrimera;

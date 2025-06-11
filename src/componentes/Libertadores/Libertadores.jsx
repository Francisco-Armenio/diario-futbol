import React, { useState } from 'react';
import CalificacionLibertadores from './CalificacionLibertadores';
import NoticiasLibertadores from './NoticiasLibertadores';

const Libertadores = () => {
  const [seccionActiva, setSeccionActiva] = useState('noticias'); // ← Cambiado a 'noticias'

  return (
    <div className="libertadores-container">

      <div className="botones-seccion">
        <button
          className={seccionActiva === 'noticias' ? 'activo' : ''}
          onClick={() => setSeccionActiva('noticias')}
        >
          Noticias
        </button>
        <button
          className={seccionActiva === 'calificacion' ? 'activo' : ''}
          onClick={() => setSeccionActiva('calificacion')}
        >
          Calificación
        </button>
      </div>

      <div className="contenido-libertadores">
        {seccionActiva === 'calificacion' && <CalificacionLibertadores />}
        {seccionActiva === 'noticias' && <NoticiasLibertadores />}
      </div>
    </div>
  );
};

export default Libertadores;

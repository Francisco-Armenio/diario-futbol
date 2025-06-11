import React, { useState } from 'react';
import faseLibertadores from '../Arrays/ArrayLibertadores';

const CalificacionLibertadores = () => {
    const [faseSeleccionada, setFaseSeleccionada] = useState("grupo");

    const fases = ["grupo", "octavos", "cuartos", "semis", "final"];
    const datosFiltrados = faseLibertadores.filter(fase => fase.categoria === faseSeleccionada);

    return (
        <div className="libertadores">
            <h2 className="titulo">🏆 Copa Libertadores</h2>

            <div className="fase-selector">
                {fases.map((fase) => (
                    <button
                        key={fase}
                        onClick={() => setFaseSeleccionada(fase)}
                        className={fase === faseSeleccionada ? 'activo' : ''}
                    >
                        {fase.toUpperCase()}
                    </button>
                ))}
            </div>

            <div className="contenido-fase">
                {datosFiltrados.map((item) => (
                    <div key={item.id} className="tarjeta-fase">
                        {item.categoria === 'grupo' ? (
                            <>
                                <h3 className="grupo">{item.grupo}</h3>
                                <div className="tabla-posiciones">
                                    <div className="fila encabezado">
                                        <span className="col equipo">Equipo</span>
                                        <span>J</span>
                                        <span>G</span>
                                        <span>E</span>
                                        <span>P</span>
                                        <span>DIF</span>
                                        <span>PTS</span>
                                    </div>
                                    {[1, 2, 3, 4].map((n, index) => (
                                        <div
                                            key={n}
                                            className={`fila ${index < 2 ? 'clasificado' : ''}`}
                                        >
                                            <span className="col equipo">
                                                <img
                                                    src={item[`imagen${n}`]}
                                                    alt={item[`nombre${n}`]}
                                                    className="escudo"
                                                />
                                                {item[`nombre${n}`]}
                                            </span>
                                            <span>{item[`jugados${n}`]}</span>
                                            <span>{item[`ganados${n}`]}</span>
                                            <span>{item[`empatados${n}`]}</span>
                                            <span>{item[`perdidos${n}`]}</span>
                                            <span>{item[`diferencia${n}`]}</span>
                                            <span>{item[`puntos${n}`]}</span>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="duelo-eliminatoria">
  {/* Bloque 1: Imagen equipo 1 */}
  <div className="bloque bloque1">
    <img src={item.imagen1} alt={item.nombre1} className="escudo grande" />
  </div>

  {/* Bloque 2: Nombre equipo 1 */}
  <div className="bloque bloque2">
    <strong className="nombre-libertadores-eliminatoria">{item.nombre1}</strong>
  </div>

  {/* Bloque 3: Resultado equipo 1 */}
  <div className="bloque bloque3">
    <p className="resultado-libertadores-eliminatorias">{item.resultado1}</p>
  </div>

  {/* Bloque 4: Global equipo 1 */}
  <div className="bloque bloque4">
    {'global1' in item && (
      <p className="global-libertadores-eliminatoria">{item.global1}</p>
    )}
  </div>

  {/* VS */}
  <div className="bloque bloque-vs">
    <span className="vs">VS</span>
  </div>

  {/* Bloque 4: Global equipo 2 */}
  <div className="bloque bloque4">
    {'global2' in item && (
      <p className="global-libertadores-eliminatoria">{item.global2}</p>
    )}
  </div>

  {/* Bloque 3: Resultado equipo 2 */}
  <div className="bloque bloque3">
    <p className="resultado-libertadores-eliminatorias">{item.resultado2}</p>
  </div>

  {/* Bloque 2: Nombre equipo 2 */}
  <div className="bloque bloque2">
    <strong className="nombre-libertadores-eliminatoria">{item.nombre2}</strong>
  </div>

  {/* Bloque 1: Imagen equipo 2 */}
  <div className="bloque bloque1">
    <img src={item.imagen2} alt={item.nombre2} className="escudo grande" />
  </div>
</div>



                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CalificacionLibertadores;

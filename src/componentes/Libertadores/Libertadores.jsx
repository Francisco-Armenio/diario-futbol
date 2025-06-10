import React, { useState } from 'react';
import faseLibertadores from '../Arrays/ArrayLibertadores';

const Libertadores = () => {
  const [faseSeleccionada, setFaseSeleccionada] = useState("grupo");

  const fases = ["grupo", "octavos", "cuartos", "semis", "final"];
  const datosFiltrados = faseLibertadores.filter(fase => fase.categoria === faseSeleccionada);

  return (
    <div>
      <h2>Copa Libertadores</h2>

      <div style={{ marginBottom: '1rem' }}>
        {fases.map(fase => (
          <button
            key={fase}
            onClick={() => setFaseSeleccionada(fase)}
          >
            {fase.toUpperCase()}
          </button>
        ))}
      </div>

      <div>
        {datosFiltrados.map((item) => (
          <div key={item.id} style={{ marginBottom: '2rem' }}>
            {item.categoria === "grupo" ? (
              <>
                <h3>{item.grupo}</h3>
                <table border="1" cellPadding="8" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Equipo</th>
                      <th>J</th>
                      <th>G</th>
                      <th>E</th>
                      <th>P</th>
                      <th>DIF</th>
                      <th>PTS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4].map(n => (
                      <tr key={n}>
                        <td>
                          <img
                            src={item[`imagen${n}`]}
                            alt={item[`nombre${n}`]}
                            style={{ width: '24px', height: '24px', marginRight: '6px', verticalAlign: 'middle' }}
                          />
                          {item[`nombre${n}`]}
                        </td>
                        <td>{item[`jugados${n}`]}</td>
                        <td>{item[`ganados${n}`]}</td>
                        <td>{item[`empatados${n}`]}</td>
                        <td>{item[`perdidos${n}`]}</td>
                        <td>{item[`diferencia${n}`]}</td>
                        <td>{item[`puntos${n}`]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            ) : (
              <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', maxWidth: '500px', margin: 'auto' }}>
                <div style={{ textAlign: 'center' }}>
                  <img
                    src={item.imagen1}
                    alt={item.nombre1}
                    style={{ width: '40px', height: '40px' }}
                  />
                  <p><strong>{item.nombre1 || "Equipo 1"}</strong></p>
                  <p>Resultado: {item.resultado1}</p>
                  {'global1' in item && <p>Global: {item.global1}</p>}
                </div>

                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>VS</span>

                <div style={{ textAlign: 'center' }}>
                  <img
                    src={item.imagen2}
                    alt={item.nombre2}
                    style={{ width: '40px', height: '40px' }}
                  />
                  <p><strong>{item.nombre2 || "Equipo 2"}</strong></p>
                  <p>Resultado: {item.resultado2}</p>
                  {'global2' in item && <p>Global: {item.global2}</p>}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Libertadores;

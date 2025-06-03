import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import partidosPrimera from "../Arrays/ArrayPartidosPrimera";
import partidosAscenso from "../Arrays/ArrayPartidosSegunda";

const Agenda = () => {
    const navigate = useNavigate();

    const partidosPrimeraMarcados = partidosPrimera.map(p => ({ ...p, categoria: "Primera" }));
    const partidosAscensoMarcados = partidosAscenso.map(p => ({ ...p, categoria: "Ascenso" }));

    const todosLosPartidos = [...partidosPrimeraMarcados, ...partidosAscensoMarcados];

    const [filtro, setFiltro] = useState("Todos");

    const filtrarPartidos = () => {
        if (filtro === "Todos") return todosLosPartidos;
        return todosLosPartidos.filter((partido) => partido.estado === filtro);
    };

    const ordenarPorEstado = (partidos) => {
        const orden = { "En vivo": 1, "Proximo": 2, "Finalizado": 3 };
        return [...partidos].sort((a, b) => orden[a.estado] - orden[b.estado]);
    };

    const partidosFiltrados = ordenarPorEstado(filtrarPartidos());

    return (
        <div className="agenda-container">
            <h2 className="agenda-de-partido">Agenda de Partidos</h2>

            <div className="botones-filtro-agenda">
                <button onClick={() => setFiltro("Todos")}>Todos</button>
                <button onClick={() => setFiltro("En vivo")}>En vivo</button>
                <button onClick={() => setFiltro("Proximo")}>Próximos</button>
                <button onClick={() => setFiltro("Finalizado")}>Finalizados</button>
            </div>

            {["Primera", "Ascenso"].map((categoria) => (
                <div className="division-header-agenda" key={categoria}>
                    <div className="divisiones-agenda">
                        <img
                            src={categoria === "Primera" ? "" : ""}
                            alt={`Logo ${categoria}`}
                            className="logo-division-agenda"
                        />
                        <h3 className="titulo-categoria-agenda">{categoria}</h3>
                    </div>

                    <div className="lista-partidos-agenda">
                        {partidosFiltrados
                            .filter((p) => p.categoria === categoria)
                            .map((partido) => (
                                <div
                                    key={`${partido.id}-${partido.categoria}`}
                                    className="card-partido-agenda"
                                    onClick={() => {
                                        if (partido.categoria === "Primera") {
                                            navigate(`/partido/${partido.id}`);
                                        } else if (partido.categoria === "Ascenso") {
                                            navigate(`/partidosSegunda/${partido.id}`);
                                        }
                                    }}
                                    style={{ cursor: "pointer" }}
                                >
                                    <div className="linea-superior-partido">
                                        <img className="imagen-equipos-agenda" src={partido.imagen1} alt={partido.equipo1} />
                                        <p className="nombre-equipos-agenda">{partido.equipo1}</p>
                                        <p className="resultado-agenda">{partido.resultado1} - {partido.resultado2}</p>
                                        <p className="nombre-equipos-agenda">{partido.equipo2}</p>
                                        <img className="imagen-equipos-agenda" src={partido.imagen2} alt={partido.equipo2} />
                                    </div>

                                    <div className="linea-inferior-partido">
                                        {partido.estado === "En vivo" && <p>{partido.minuto}</p>}
                                        {partido.estado === "Proximo" && <p>{partido.fecha}</p>}
                                        <p className={`estado-agenda ${partido.estado === "En vivo" ? "estado-en-vivo" : ""}`}>
                                            {partido.estado}
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>

                    {partidosFiltrados.filter((p) => p.categoria === categoria).length === 0 && (
                        <p className="mensaje-sin-partidos">No hay partidos {filtro.toLowerCase()} en {categoria.toLowerCase()}.</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Agenda;

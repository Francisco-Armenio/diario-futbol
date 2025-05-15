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
                            src={categoria === "Primera" ? "data:image/png;base64,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" : "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Primera_Nacional_Logo.svg/1200px-Primera_Nacional_Logo.svg.png"}
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
                                    onClick={() => navigate(`/partido/${partido.id}`)}
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

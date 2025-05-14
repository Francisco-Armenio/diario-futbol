import partidosPrimera from "../Arrays/ArrayPartidosPrimera";
import partidosAscenso from "../Arrays/ArrayPartidosSegunda";

const Agenda = () => {
    const todosLosPartidos = [...partidosPrimera, ...partidosAscenso];

    const partidosOrdenados = todosLosPartidos.sort(
        (a, b) => new Date(a.fecha) - new Date(b.fecha)
    );

    const jugados = partidosOrdenados.filter((p) => p.estado === "Finalizado");
    const enJuego = partidosOrdenados.filter((p) => p.estado === "En vivo");
    const porJugar = partidosOrdenados.filter((p) => p.porJugar === "Por jugar");

    return (
        <div className="agenda-container">
            <h2>Agenda de Partidos</h2>

            {/* Sección de partidos en vivo */}
            <section>
                <h3>🔴 En juego</h3>
                {enJuego.map((partido) => (
                    <div key={partido.id} className="card-partido">
                        <p><strong>{partido.equipo1}</strong> vs <strong>{partido.equipo2}</strong></p>
                        <p>Minuto: {partido.minuto}</p>
                        <p>Resultado: {partido.resultado1} - {partido.resultado2}</p>
                        <p>Estado: {partido.estado}</p>
                    </div>
                ))}
            </section>

            {/* Sección de partidos por jugar */}
            <section>
                <h3>🟡 Por jugar</h3>
                {porJugar.map((partido) => (
                    <div key={partido.id} className="card-partido">
                        <p><strong>{partido.equipo1}</strong> vs <strong>{partido.equipo2}</strong></p>
                        <p>Fecha: {partido.fecha}</p>
                        <p>Estado: {partido.estado}</p>
                    </div>
                ))}
            </section>

            {/* Sección de partidos jugados */}
            <section>
                <h3>🟢 Jugados</h3>
                {jugados.map((partido) => (
                    <div key={partido.id} className="card-partido">
                        <p><strong>{partido.equipo1}</strong> vs <strong>{partido.equipo2}</strong></p>
                        <p>Resultado: {partido.resultado1} - {partido.resultado2}</p>
                        <p>Estado: {partido.estado}</p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Agenda;
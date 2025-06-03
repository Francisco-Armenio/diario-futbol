import React from 'react'

const InfoPartidoAscenso = ({ partido }) => {
    if (!partido || !partido.cambios) {
        return <p className='mensaje-no-cambios'>No hay cambios registrados.</p>;
    }

    const cambiosLocal = partido.cambios.filter(cambio => cambio.equipo === 'Local');
    const cambiosVisitante = partido.cambios.filter(cambio => cambio.equipo === 'Visitante');

    return (
        <div className="informacion-detallada-del-partido">
            <div className="cambios-local">
                <h3 className="titulo-de-cambios-general">Cambios del {partido.equipo1}</h3>
                {cambiosLocal.length > 0 ? (
                    cambiosLocal.map((cambio, index) => (
                        <p key={index}>
                            {cambio.jugadorSaliente} ➡️ {cambio.jugadorEntrante} ({cambio.minuto}')
                        </p>
                    ))
                ) : (
                    <p className='no-hay-cambios-general'>No hay cambios del Local.</p>
                )}
            </div>

            <div className="cambios-visitante">
                <h3 className="titulo-de-cambios-general">Cambios del {partido.equipo2}</h3>
                {cambiosVisitante.length > 0 ? (
                    cambiosVisitante.map((cambio, index) => (
                        <p key={index}>
                            {cambio.jugadorSaliente} ➡️ {cambio.jugadorEntrante} ({cambio.minuto}')
                        </p>
                    ))
                ) : (
                    <p className='no-hay-cambios-general'>No hay cambios del Visitante.</p>
                )}
            </div>
        </div>
    );
};
export default InfoPartidoAscenso
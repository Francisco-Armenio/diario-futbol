import React from 'react'
import Ascenso from './Ascenso'
import PartidosDeSegunda from './PartidosDeSegunda'

const AscensoPrincipal = () => {
    return (
        <div className="contenedor-primera">
            <div className="primera">
                <Ascenso/>
            </div>
            <div className="partidos-de-primera">
                <PartidosDeSegunda/>
            </div>
        </div>
    )
}

export default AscensoPrincipal
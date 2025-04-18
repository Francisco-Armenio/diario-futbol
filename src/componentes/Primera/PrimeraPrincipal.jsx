import React from 'react'
import Primera from './Primera'
import PartidosDePrimera from './PartidosDePrimera'

const PrimeraPrincipal = () => {
    return (
        <div className="contenedor-primera">
            <div className="primera">
                <Primera />
            </div>
            <div className="partidos-de-primera">
                <PartidosDePrimera />
            </div>
        </div>
    )
}


export default PrimeraPrincipal

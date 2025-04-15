import React from 'react';
import NoticiasPaginaPrincipal from './NoticiasPaginaPrincipal';
import TablaDePosiciones from './Estadisticas/EstadisticasPrimeraArgentina';

const PaginaPrincipal = () => {
    return (
        <div className="contenedor-principal">
            <NoticiasPaginaPrincipal />
            <TablaDePosiciones />
        </div>
    );
};

export default PaginaPrincipal;

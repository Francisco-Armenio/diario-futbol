import React from 'react';
import { Link } from 'react-router-dom';

const NoticiaCentra = () => {
    return (
        <Link to="/noticiaCentral" className="noticia-card">
            <div className="noticia-contenido">
                <img
                    src="https://www.infobae.com/resizer/v2/3GKINY6VHNHSXOCBHV2VCW4Z5Q?auth=fefde4c7b3f36bc0850a278a3adb721cb7c7b7b22bb784c272cd1db040cb3fb0&smart=true&width=992&height=558&quality=85"
                    alt="Noticia Central"
                    className="imagen-noticia"
                />
                <h1 className="titulo-noticia">Alan Velasco, uno de los objetivos de Boca para este mercado de pases</h1>
            </div>
        </Link>
    );
};

export default NoticiaCentra;

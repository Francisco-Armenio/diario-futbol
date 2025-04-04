import { useState } from 'react';
import './App.css';
import './componentes/Diseño/Navbar.css';
import './componentes/Diseño/NoticiasPaginaPrincipal.css';
import './componentes/Diseño/EstadisticasPrimeraArgentina.css';
import './componentes/Diseño/PaginaPrincipal.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/navbar/Navbar';  // Importamos el Navbar modificado
import PaginaPrincipal from './componentes/PaginaPrincipal';
import NoticiasPaginaPrincipal from './componentes/NoticiasPaginaPrincipal';
import NoticiasExtendida from './componentes/NoticiasExtendida';
import EstadisticasPrimeraArgentina from './componentes/EstadisticasPrimeraArgentina';
import Primera from './componentes/Primera';  // Asegúrate de importar el componente Primera

function App() {
  return (
    <BrowserRouter>
      <Navbar />  {/* El Navbar ya cambiará según la ruta */}
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/noticias" element={<NoticiasPaginaPrincipal />} />
        <Route path="/noticia/:id" element={<NoticiasExtendida />} />
        <Route path="/estadisticas" element={<EstadisticasPrimeraArgentina />} />
        <Route path="/primera" element={<Primera />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

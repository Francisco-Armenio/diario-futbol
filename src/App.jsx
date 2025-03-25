import { useState } from 'react';
import './App.css';
import './componentes/Diseño/Navbar.css';
import "./componentes/Diseño/NoticiasPaginaPrincipal.css"
import "./componentes/Diseño/EstadisticasPrimeraArgentina.css"
import "./componentes/Diseño/PaginaPrincipal.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/navbar/Navbar';
import PaginaPrincipal from './componentes/PaginaPrincipal';
import NoticiasPaginaPrincipal from './componentes/NoticiasPaginaPrincipal';
import EstadisticasPrimeraArgentina from './componentes/EstadisticasPrimeraArgentina';
import NoticiasExtendida from './componentes/NoticiasExtendida';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;

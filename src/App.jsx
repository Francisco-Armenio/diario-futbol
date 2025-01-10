import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/navbar/Navbar';
import NoticiasPaginaPrincipal from './componentes/NoticiasPaginaPrincipal';
import EstadisticasPrimeraArgentina from './componentes/EstadisticasPrimeraArgentina';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<><NoticiasPaginaPrincipal /><EstadisticasPrimeraArgentina /></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

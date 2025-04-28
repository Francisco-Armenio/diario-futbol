import './App.css';
import './componentes/Diseño/Navbar-diseño/Navbar.css';
import './componentes/Diseño/Navbar-diseño/NavbarPrimera.css';
import './componentes/Diseño/Navbar-diseño/NavbarAscenso.css';
import './componentes/Diseño/NoticiasPaginaPrincipal.css';
import './componentes/Diseño/Estadistica-diseño/EstadisticasPrimeraArgentina.css';
import './componentes/Diseño/PaginaPrincipal.css';
import './componentes/Diseño/NoticiasExtendida.css';
import './componentes/Diseño/Ascenso-diseño/Ascenso.css';
import './componentes/Diseño/Primera-diseño/Primera.css';
import './componentes/Diseño/Primera-diseño/PrimeraPrincipal.css';
import './componentes/Diseño/Primera-diseño/PartidosPrimera.css';
import './componentes/Diseño/Primera-diseño/DatosDelPartido.css';
import './componentes/Diseño/Primera-diseño/EventosPrimera.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/navbar/Navbar';
import PaginaPrincipal from './componentes/PaginaPrincipal';
import Estadisticas from './componentes/Estadisticas/Estadisticas';
import PrimeraExtendida from './componentes/Primera/PrimeraExtendida';
import PrimeraPrincipal from './componentes/Primera/PrimeraPrincipal';
import PrimeraDatosPrincipal from './componentes/Primera/PrimeraDatosPrincipal';
import AscensoPrincipal from './componentes/Ascenso/AscensoPrincipal';
import SegundaExtendida from './componentes/Ascenso/SegundaExtendida';
import PartidosDeSegunda from './componentes/Ascenso/PartidosDeSegunda';
import DatosDelPartidoAscenso from './componentes/Ascenso/DatosDelPartidoAscenso';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
        <Route path="/primera" element={<PrimeraPrincipal />} />
        <Route path="/ascenso" element={<AscensoPrincipal />} />
        <Route path="/ascenso/:id" element={<SegundaExtendida/>}/>
        <Route path="/partidosSegunda" element={<PartidosDeSegunda />} />
        <Route path="/partidosSegunda/:id" element={<DatosDelPartidoAscenso />} />
        <Route path="/primera/:id" element={<PrimeraExtendida />} />       
        <Route path="/partido/:id" element={<PrimeraDatosPrincipal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import './componentes/Diseño/Navbar-diseño/Navbar.css';
import './componentes/Diseño/Navbar-diseño/NavbarPrimera.css';
import './componentes/Diseño/Navbar-diseño/NavbarAscenso.css';
import './componentes/Diseño/NoticiasPaginaPrincipal.css';
import './componentes/Diseño/EstadisticasPrimeraArgentina.css';
import './componentes/Diseño/PaginaPrincipal.css';
import './componentes/Diseño/NoticiasExtendida.css';
import './componentes/Diseño/Ascenso.css';
import './componentes/Diseño/Primera.css';
import './componentes/Diseño/PrimeraPrincipal.css';
import './componentes/Diseño/PartidosPrimera.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/navbar/Navbar';
import PaginaPrincipal from './componentes/PaginaPrincipal';
import Ascenso from './componentes/Ascenso/Ascenso';
import Estadisticas from './componentes/Estadisticas/Estadisticas';
import PrimeraExtendida from './componentes/Primera/PrimeraExtendida';
import PrimeraPrincipal from './componentes/Primera/PrimeraPrincipal';
import DatosDelPartido from './componentes/Primera/DatosDelPartido';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
        <Route path="/primera" element={<PrimeraPrincipal />} />
        <Route path="/ascenso" element={<Ascenso />} />
        <Route path="/primera/:id" element={<PrimeraExtendida />} />       
        <Route path="/partido/:id" element={<DatosDelPartido />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import './componentes/Diseño/Navbar-diseño/Navbar.css';
import './componentes/Diseño/Navbar-diseño/NavbarPrimera.css';
import './componentes/Diseño/Navbar-diseño/NavbarAscenso.css'
import './componentes/Diseño/NoticiasPaginaPrincipal.css';
import './componentes/Diseño/EstadisticasPrimeraArgentina.css';
import './componentes/Diseño/PaginaPrincipal.css';
import './componentes/Diseño/NoticiasExtendida.css';
import './componentes/Diseño/Ascenso.css'
import './componentes/Diseño/Primera.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/navbar/Navbar';
import PaginaPrincipal from './componentes/PaginaPrincipal';
import NoticiasPaginaPrincipal from './componentes/NoticiasPaginaPrincipal';
import NoticiasExtendida from './componentes/NoticiasExtendida';
import Primera from './componentes/Primera';
import Estadisticas from './componentes/Estadisticas';
import Ascenso from './componentes/Ascenso';
import PrimeraExtendida from './componentes/PrimeraExtendida';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/noticias" element={<NoticiasPaginaPrincipal />} />
        <Route path="/noticia/:id" element={<NoticiasExtendida />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
        <Route path="/primera" element={<Primera />} />
        <Route path="/primera/:id" element={<PrimeraExtendida />} />
        <Route path="/ascenso" element={<Ascenso />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

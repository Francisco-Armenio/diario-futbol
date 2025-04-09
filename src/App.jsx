import './App.css';
import './componentes/Diseño/Navbar-diseño/Navbar.css';
import './componentes/Diseño/Navbar-diseño/NavbarPrimera.css';
import './componentes/Diseño/NoticiasPaginaPrincipal.css';
import './componentes/Diseño/EstadisticasPrimeraArgentina.css';
import './componentes/Diseño/PaginaPrincipal.css';
import './componentes/Diseño/NoticiasExtendida.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/navbar/Navbar';
import PaginaPrincipal from './componentes/PaginaPrincipal';
import NoticiasPaginaPrincipal from './componentes/NoticiasPaginaPrincipal';
import NoticiasExtendida from './componentes/NoticiasExtendida';
import Primera from './componentes/Primera';
import Estadisticas from './componentes/Estadisticas';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;

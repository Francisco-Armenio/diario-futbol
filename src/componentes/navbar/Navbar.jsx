import React from 'react';
import { useLocation } from 'react-router-dom';
import NavbarPaginaPrincipal from './NavbarPaginaPrincipal';
import NavbarPrimera from './NavbarPrimera';
import NavbarNoticiaExtendida from './NavbarNoticiaExtendida';  // Nuevo Navbar

const Navbar = () => {
  const location = useLocation();

  // Aquí verificamos la ruta actual
  switch (location.pathname) {
    case '/primera':
      return <NavbarPrimera />;  // Muestra NavbarPrimera cuando la ruta es "/primera"
    
    case location.pathname.startsWith ('/noticia/'):
      return <NavbarNoticiaExtendida />;  // Muestra NavbarNoticiaExtendida cuando la ruta empieza con "/noticia/"
    
    default:
      return <NavbarPaginaPrincipal />;  // Si no es ninguna de las anteriores, muestra NavbarPaginaPrincipal
  }
};

export default Navbar;

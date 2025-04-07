import React from 'react';
import { useLocation } from 'react-router-dom';
import NavbarPaginaPrincipal from './NavbarPaginaPrincipal';
import NavbarPrimera from './NavbarPrimera';
import NavbarAcenso from './NavbarAcenso';

const Navbar = () => {
  const location = useLocation();

  if (location.pathname === '/primera') {
    return <NavbarPrimera />;
  }

  if (location.pathname === '/acenso') {
    return <NavbarAcenso />;
  }

  return <NavbarPaginaPrincipal />;
};


export default Navbar;

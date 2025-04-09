import React from "react";
import { useLocation } from "react-router-dom";
import NavbarPaginaPrincipal from "./NavbarPaginaPrincipal";
import NavbarPrimera from "./NavbarPrimera";
import NavbarEstadisticas from "./NavbarEstadisticas";

const Navbar = () => {
  const location = useLocation();

  if (location.pathname === "/primera") {
    return <NavbarPrimera />;
  }


  if (location.pathname === "/estadisticas") {
    return <NavbarEstadisticas />;
  }

  return <NavbarPaginaPrincipal />;
};

export default Navbar;

import React from "react";
import { useLocation } from "react-router-dom";
import NavbarPaginaPrincipal from "./NavbarPaginaPrincipal";
import NavbarPrimera from "./NavbarPrimera";
import NavbarEstadisticas from "./NavbarEstadisticas";
import NavbarAscenso from "./NavbarAscenso";
import NavbarAgenda from "./NavbarAgenda";
import NavbarLibertadores from "./NavbarLibertadores";

const Navbar = () => {
  const location = useLocation();

  if (location.pathname.startsWith("/primera/")) {
    return <NavbarPrimera />;
  }

  if (location.pathname === "/primera") {
    return <NavbarPrimera />;
  }

  if (location.pathname === "/estadisticas") {
    return <NavbarEstadisticas />;
  }

  if (location.pathname === "/ascenso") {
    return <NavbarAscenso />;
  }

  if (location.pathname === "/agenda"){
    return <NavbarAgenda/>
  }

  if (location.pathname === "/libertadores"){
    return <NavbarLibertadores/>
  }

  return <NavbarPaginaPrincipal />;
};

export default Navbar;

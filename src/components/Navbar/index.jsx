import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import logo from "../../components/Imagenes/logo.jpeg";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const activeStyle = "underline underline-offset-4";

  // Contenido del menú móvil
  const mobileMenu = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
      <ul className="text-center text-xl p-20">
      <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Inicio
              </NavLink>
            </li>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              <NavLink
                to="/catalog"
                className={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Catalogo
              </NavLink>
            </li>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              <NavLink
                to="/about-us"
                className={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Nosotros
              </NavLink>
            </li>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Contacto
              </NavLink>
            </li>
      </ul>
    </div>
  );

  return (
    <>
      {/* Barra de navegación */}
      <nav className="fixed z-10 top-0 left-0 w-full py-5 px-8 bg-slate-950 text-white text-sm font-light">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="">
          <img className="h-12 rounded-full" src={logo} alt="logo_hotel" />
          </div>

          {/* Menú de escritorio */}
          <ul className="hidden lg:flex items-center space-x-14 text-lg">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/catalog"
                className={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Catalogo
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Nosotros
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Contacto
              </NavLink>
            </li>
          </ul>

          {/* Icono de menú móvil */}
          <button
            className="lg:hidden transition"
            onClick={handleClick}
          >
            {click ? <FaTimes size={24} /> : <CiMenuFries size={24} />}
          </button>
        </div>

        {/* Menú móvil */}
        {click && mobileMenu}
      </nav>

      
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import "../sass/components/NavBar.scss"; // Importar estilos Sass
import { FiX, FiSearch, FiShoppingCart } from "react-icons/fi";
import { CgFormatCenter } from "react-icons/cg";
import { BsFire } from "react-icons/bs"; // Importar iconos de react-icons
import { ReactComponent as Logo } from "../assets/logo/logo.svg";
import { ReactComponent as Logo2 } from "../assets/logo/logo-1.svg";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar si el menú hamburguesa está abierto

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Cambiar el estado del menú hamburguesa
  };

  return (
    <>
      {/* mobile first */}
      <nav className={`navbar ${isMenuOpen ? "navbar--open" : ""}`}>
        <div className="navbar__left">
          {/* Icono del menú hamburguesa con función de toggle */}
          <div className="navbar__menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <FiX className="fix__menu__open"/> : <CgFormatCenter />}
          </div>
        </div>
        <div className="navbar__center">
          {/* Imagen (logotipo) */}
          <Logo className="navbar__logo" />
        </div>
        <div className="navbar__right">
          {/* Icono de búsqueda */}
          <div className="navbar__search-icon">
            <FiSearch />
          </div>
          {/* Icono del carrito */}
          <div className="navbar__cart-icon">
            <FiShoppingCart />
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="navbar__overlay" onClick={toggleMenu}>
          {/* Icono del menú hamburguesa con función de toggle */}
          <div className="navbar__overlay__close animation" onClick={toggleMenu}>
            {isMenuOpen ? <FiX /> : <CgFormatCenter />}
          </div>


          <ul className="navbar__menu">
            <li className="navbar__menu-new">New Collection 2024</li>
            <li className="navbar__menu-sale">
              Sale
              <BsFire />
            </li>
            <li>Men</li>
            <li>Woman</li>
            <li>Kids</li>
            <li>Contact</li>
            <li>Help</li>
          <Logo2 className="navbar__logo close__logo" />
          </ul>
        </div>
      )}
    </>
  );
};

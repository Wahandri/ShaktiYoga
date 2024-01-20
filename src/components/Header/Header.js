import React, { useState } from "react";
import "./Header.css";
import logoShakti from "../../images/shakti.png";
import facebook from "../../images/facebook.png";
import { Link, useLocation } from "react-router-dom";
import shop from "../../images/bolsa-de-la-compra.png";
import menu from "../../images/menu.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="contentHeader">
      <div className={`boxHeader ${menuOpen ? "menuOpen" : ""}`}>
        <Link to="/" onClick={closeMenu} className="imgLogo">
          <img
            className="imgLogoSimona"
            src={logoShakti}
            title="Inicio"
            alt=""
          />
        </Link>
        <div className="menuButton" onClick={toggleMenu}>
          <img src={menu} title="Menu" width="35px" alt="menu" />
        </div>
        <ul className="navBar">
          <Link
            onClick={closeMenu}
            className={`myBtn ${isActive("/") ? "active" : ""}`}
            to="/"
          >
            Inicio
          </Link>
          <hr className="line" />
          <Link
            onClick={closeMenu}
            className={`myBtn ${isActive("/coaching") ? "active" : ""}`}
            to="/coaching"
          >
            Coaching
          </Link>
          <hr className="line" />
          <Link
            onClick={closeMenu}
            className={`myBtn ${isActive("/massage") ? "active" : ""}`}
            to="/massage"
          >
            Masajes
          </Link>
          <hr className="line" />
          <Link
            onClick={closeMenu}
            className={`myBtn ${isActive("/meditation") ? "active" : ""}`}
            to="/meditation"
          >
            Meditacion
          </Link>
          <hr className="line" />
          <Link
            onClick={closeMenu}
            className={`myBtn ${isActive("/nutrition") ? "active" : ""}`}
            to="/nutrition"
          >
            Nutricion
          </Link>
          <hr className="line" />
          <Link
            onClick={closeMenu}
            className={`myBtn ${isActive("/yoga") ? "active" : ""}`}
            to="/yoga"
          >
            Yoga
          </Link>
          <hr className="line" />
          <Link
            onClick={closeMenu}
            className={`myBtn ${isActive("/contact") ? "active" : ""}`}
            to="/contact"
          >
            Contáctanos
          </Link>
          <hr className="line" />
        </ul>
        <div className="socialNetworkIcons">
          <a
            href="https://shop.foreverliving.it/zappoli-simona-340000606427.html"
            target="_blank"
            title="Tienda"
            rel="noopener noreferrer"
          >
            <img className="iconSocial" src={shop} alt="" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100064173574424"
            target="_blank"
            title="Facebook"
            rel="noopener noreferrer"
          >
            <img className="iconSocial" src={facebook} alt="" />
          </a>
        </div>
      </div>
      <div className="empyHeader"> Header</div>
    </div>
  );
}

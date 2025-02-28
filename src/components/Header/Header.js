import React, { useState } from "react";
import "./Header.css";
import logoShakti from "../../images/shakti.png";
import facebook from "../../images/facebook.png";
import { Link, useLocation } from "react-router-dom";
import menu from "../../images/menu.png";
import instagram from "../../images/instagram.png";

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
            className={`myBtn responsiveBtn marginTopMenu ${isActive("/") ? "active" : ""}`}
            to="/"
          >
            INICIO
          </Link>
          <hr className="line" />
          <Link
            onClick={closeMenu}
            className={`myBtn responsiveBtn ${isActive("/coaching") ? "active" : ""}`}
            to="/coaching"
          >
            COACHING
          </Link>
          <hr className="line" />
          <Link
            onClick={closeMenu}
            className={`myBtn responsiveBtn ${isActive("/massage") ? "active" : ""}`}
            to="/massage"
          >
            MASAJES
          </Link>
          <hr className="line" />
          <Link
            onClick={closeMenu}
            className={`myBtn responsiveBtn ${isActive("/nutrition") ? "active" : ""}`}
            to="/nutrition"
          >
            NUTRACEUTICA
          </Link>
          <hr className="line" />
          <Link
            onClick={closeMenu}
            className={`myBtn responsiveBtn ${isActive("/meditation") ? "active" : ""}`}
            to="/meditation"
          >
            MEDITA Y BAILA
          </Link>
          
          
          <hr className="line" />
          {/* <Link
            onClick={closeMenu}
            className={`myBtn responsiveBtn ${isActive("/yoga") ? "active" : ""}`}
            to="/yoga"
          >
            YOGA
          </Link>
          <hr className="line" /> */}
          <Link
            onClick={closeMenu}
            className={`myBtn responsiveBtn ${isActive("/contact") ? "active" : ""}`}
            to="/contact"
          >
            CONTACTANOS
          </Link>
          <hr className="line" />
        </ul>
        <div className="socialNetworkIcons">
          <a
            href="https://www.instagram.com/simona_zappoli/?igsh=bTVoZ3hhamZua24w"
            target="_blank"
            title="Instagram"
            rel="noopener noreferrer"
          >
            <img className="iconSocial" src={instagram} alt="" />
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

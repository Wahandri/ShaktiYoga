import React, { useState } from "react";
import "./Header.css";
import logoShakti from "../../images/shaktiSmall.png";
import facebook from "../../images/facebook.png";
import { Link } from "react-router-dom";
import shop from "../../images/bolsa-de-la-compra.png";
import menu from "../../images/menu.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`boxHeader ${menuOpen ? "menuOpen" : ""}`}>
      <Link to="/" onClick={closeMenu} className="imgLogo">
        <img width="90px" src={logoShakti} title="Inicio" alt="" />
      </Link>
      <div className="menuButton" onClick={toggleMenu}>
        <img src={menu} title="Menu" width="35px" alt="menu" />
      </div>
      <ul className="navBar">
        <Link
          onClick={closeMenu}
          className="ruteNavBar flex center"
          to="/coaching"
        >
          Coaching
        </Link>
        <Link
          onClick={closeMenu}
          className="ruteNavBar flex center"
          to="/meditation"
        >
          Meditacion
        </Link>
        <Link
          onClick={closeMenu}
          className="ruteNavBar flex center"
          to="/massage"
        >
          Masajes
        </Link>
        <Link onClick={closeMenu} className="ruteNavBar flex center" to="/yoga">
          Yoga
        </Link>
        <Link
          onClick={closeMenu}
          className="ruteNavBar flex center"
          to="/nutrition"
        >
          Nutricion
        </Link>
        <Link
          onClick={closeMenu}
          className="ruteNavBar flex center"
          to="/contact"
        >
          Contáctanos
        </Link>
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
  );
}

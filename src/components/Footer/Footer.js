import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../images/shakti.png";
import email from "../../images/email.png";
import phone from "../../images/phone.png";
import facebook from "../../images/facebook.png";
import logoDario from "../../images/LogoDario.png";
import shop from "../../images/bolsa-de-la-compra.png";
import instagram from "../../images/instagram.png";


export default function Footer() {
  return (
    <div className="boxShadow boxFooter">
      <section className="section1Footer"> 
        <h3 className="">SERVICIOS</h3>
        <Link to="/coaching" className="footerLink">
          Coaching
        </Link>
        <Link to="/massage" className="footerLink">
          Masajes
        </Link>
        <Link to="/meditation" className="footerLink">
          Meditation
        </Link>
        <Link to="/nutrition" className="footerLink">
          Nutraceutica
        </Link>
        <Link to="/yoga" className="footerLink">
          Yoga
        </Link>
      </section>

      <section className="section1Footer">
        <img width="200px" src={logo} alt="" />
        <img width="90px" src={logoDario} alt="" />
      </section>

      <section className="section1Footer">
        <h3>CONTACTANOS</h3>
        <div className="flex center gap-20">
          <a
            href="https://www.facebook.com/profile.php?id=100064173574424"
            target="_blank"
            title="Facebook"
            rel="noopener noreferrer"
          >
            <img className="iconSocial" src={facebook} alt="" />
          </a>
          <a
            href="https://www.instagram.com/simona_zappoli/?igsh=bTVoZ3hhamZua24w"
            target="_blank"
            title="Instagram"
            rel="noopener noreferrer"
          >
            <img className="iconSocial" src={instagram} alt="" />
          </a>
          <a
              href="https://shop.foreverliving.it/zappoli-simona-340000606427.html"
              target="_blank"
              title="Tienda"
              rel="noopener noreferrer"
            >
              <img className="iconSocial" src={shop} alt="" />
            </a>
        </div>
        
        <div className="">
          <div className="flex">
            <img width="30px" src={phone} alt="gps" />
            <p><a className="footerLink" href="tel:+34644808264">+34 644808264</a></p>
          </div>
          <div className="flex">
            <img width="30px" src={email} alt="phone" />
            <p><a className="footerLink" href="mailto:mayaesimo@gmail.com">mayaesimo@gmail.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}

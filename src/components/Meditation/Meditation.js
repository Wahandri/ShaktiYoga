import React from "react";
import "./Meditation.css";
import meditation2 from "../../images/osho-meditation-live-music-camp-in-romania-kundalini.jpg";
import meditation3 from "../../images/head-contact.jpg";
import meditation4 from "../../images/osho-dynamic-meditation-1.jpg";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

export default function Meditation() {
  return (
    <div className="boxMeditation flex column center margin">
      <h1 className="title">
        <span className="pinkColor">Meditación</span> Dinámica
      </h1>
      <div className="meditation1 flex column center responsiveMeditation">
        <p className="margin textSmall">
          Descubre la simplicidad y la profunda conexión con nuestras
          meditaciones dinámicas. En lugar de prácticas complejas, te invitamos
          a bailar, a cantar y a encontrar la quietud en el silencio.
        </p>
        <div className="Carousel">
          <Carousel autoPlay infiniteLoop>
            <div>
              <img className="borderRadius" src={meditation3} alt="" />
            </div>
            <div>
              <img className="borderRadius" src={meditation4} alt="" />
            </div>
          </Carousel>
        </div>

        <p className="margin textSmall">
          Como dijo Osho: <br />
          "Mi meditación es sencilla, no requiere ninguna práctica compleja".{" "}
          <br />
          Únete a nosotros para experimentar la armonía y la paz interior a
          través de estas formas únicas de meditación.
        </p>
      </div>
      <Link to="/meditation">
        <button className="btn">Saber mas</button>
      </Link>
    </div>
  );
}

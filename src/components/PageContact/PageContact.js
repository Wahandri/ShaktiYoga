import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; 
import "./PageContact.css";
import gps from "../../images/gps.png";
import email from "../../images/email.png";
import phone from "../../images/phone.png";
import gpsU from "../../images/gpsU.png";

const PageContact = () => { 
  const position = [36.588122, -4.533560]; // Coordenadas de la dirección aproximada
const exactPosition = [36.59642993520726, -4.534141545968688]; // Coordenadas exactas de la dirección

  // Define un ícono personalizado para el marcador de la dirección exacta
  const exactMarkerIcon = new L.Icon({
    iconUrl: gps, // Ruta a tu imagen de ícono
    iconSize: [42, 42], // Ajusta según tus preferencias
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <div className="page-contact">
      <div className="borderCard headerContact">
        <h1 className="text-center">
          ¡Conéctate Conmigo para Transformar Tu Bienestar!
        </h1>
        <p className="text-center">
          Soy Simona Zappoli, y estoy aquí para guiarte en tu camino hacia un bienestar holístico.
          Mi enfoque abarca desde la psicología holística hasta masajes terapéuticos, asesoramiento
          nutricional, meditación activa y prácticas de yoga. Juntos, exploraremos cómo puedes cultivar
          un mayor amor propio, superar desafíos y encontrar un equilibrio que te permita florecer en
          todos los aspectos de tu vida.
        </p>
        <p className="text-center">
          Si estás listo para dar el siguiente paso hacia tu bienestar, estoy aquí para ti.
          No dudes en contactarme para programar una sesión, hacer preguntas o simplemente compartir
          tus inquietudes. Tu camino hacia una vida más plena comienza ahora.
        </p>
      </div>



      <div className="contact-details">
        <div className="flex">
          <img src={phone} alt="gps" />
          <p><a href="tel:+34644808264">+34 644808264</a></p>
        </div>
        <div className="flex">
          <img src={email} alt="phone" />
          <p><a href="mailto:mayaesimo@gmail.com">mayaesimo@gmail.com</a></p>
        </div>
        <div className="flex">
          <img src={gpsU} alt="email" />
          <p>Calle Dátil 10, Benalmádena, 29631, Málaga</p>
        </div>
      </div>

      <div className="borderCard border33">
        <MapContainer
          center={position}
          zoom={15}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Marcador para la dirección exacta */}
          <Marker position={exactPosition} icon={exactMarkerIcon}>
            <Popup>
              <strong>Dirección Exacta:</strong> Calle Dátil 10, Benalmádena, 29631, Málaga
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default PageContact;

import React from 'react'
import "./FloatButton.css";
import whatsapp from "../../images/whatsapp.png";

export default function FloatButton() {
  return (
    <div className='boxFloatButton'>
      <a className='floatButton' target="_blank" without rel="noopener noreferrer" href="https://wa.me/+34644808264git?text=%F0%9F%91%8B%20Hola%20Simona,%20estoy%20interesado%20en%20obtener%20más%20información%20sobre%20tus%20servicios.">
        <img lassName='floatingIcon' src={whatsapp} alt="whatsapp" className="floatButton" />
      </a>
    </div>
  )
}

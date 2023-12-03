import React from 'react';
import "./Yoga.css";
import meditation from "../../images/meditacion-playa.jpg";

export default function Yoga() {
  return (
    <div className='boxYoga flex column center'>
      <h1 className='title'>Raja <span className='blueColor'>Yoga</span></h1>
      <div className='descriptionYoga margin'>
        <div className=''>
          <img className='imgYoga borderRadius imgCoaching' src={meditation} alt=''/>
        </div>
        <p>
          Descubre la esencia del Raja Yoga, donde fusionamos la 
          filosofía, la respiración y la meditación clásica. 
          En este camino, exploramos las enseñanzas profundas de la 
          filosofía del yoga, conectamos con nuestra respiración para
          encontrar equilibrio y paz interior, y nos sumergimos 
          en la práctica de la meditación clásica. 
          Experimenta la dinámica única que hemos mencionado, 
          que te guiará hacia el bienestar integral, 
          tanto físico como mental.
        </p>
      </div>
    </div>
  );
}

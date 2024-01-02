import React from "react";
import "./PageYoga.css";

const PageYoga = () => {
  return (
    <div className="boxPageYoga">
      <h1 className="title">Raja Yoga</h1>

      <section className="section">
        <h2 className="title pinkColor">Práctica de Raja Yoga</h2>
        <p className="textSmall">
          Se utilizan movimientos dinámicos, posiciones estáticas y técnicas de
          respiración para relacionarnos con el funcionamiento extremadamente
          complejo y sutil de nuestro cuerpo y mente. El Raja yoga es un medio
          precioso de transformación interior: durante la práctica, la expansión
          de la conciencia corporal, el alivio de la agitación mental y la
          propiocepción de nuestros desequilibrios pueden crear las condiciones
          para el nacimiento de una nueva sensibilidad y percepción de la
          realidad libre de condicionamiento. La calma y la relajación, a menudo
          consideradas erróneamente como los principales objetivos del yoga,
          resultan ser el punto de partida del camino.
        </p>
        <p className="textSmall">
          Todos los aspectos del ser humano están involucrados y estimulados por
          la práctica gracias al uso de diferentes herramientas: Asana (las
          posiciones del yoga o conciencia corporal), Pranayama (técnicas de
          respiración o la conciencia de la respiración), Mudra (gestos
          psíquicos), Bandha (sellos de energía, ataduras) y Dharana
          (concentración o atención enfocada). El equilibrio neutro-fisiológico
          generado por la coordinación armoniosa de estos elementos crea la base
          para la meditación.
        </p>
      </section>

      <section className="section">
        <h2 className="title pinkColor">Tipos de Yoga Practicados</h2>
        <p className="textSmall">
          🪷 <strong className="pinkColor">Raja Yoga:</strong> En la práctica se
          combinan Meditación, Relajación, Asanas (Posturas), Pranayama
          (Técnicas de Respiración), Mantras, Mudras (posturas con las manos) de
          nivel medio.
        </p>
        <p className="textSmall">
          🪷 <strong className="pinkColor">Hatha Yoga:</strong> En la práctica se
          combinan Relajación y Asanas (posturas estáticas y dinámicas) de nivel
          medio.
        </p>
        <p className="textSmall">
          🪷 <strong className="pinkColor">Yoga Suave:</strong> Clases de yoga de
          baja intensidad, se incluye Asanas (posturas dinámicas y estáticas)
          indicada para personas con movilidad limitada y/o para principiantes.
        </p>
      </section>
    </div>
  );
};

export default PageYoga;

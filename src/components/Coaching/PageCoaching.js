import React from "react";
import "./Coaching.css";

export default function PageCoaching() {
  return (
    <div className="boxPageCoaching">
      <div className="coachingHeader">
        <div className="flex center">
          <h1 className="title">
            ¿Qué es el <span className="pinkColor">Coaching</span>?
          </h1>
        </div>
        <p className="textSmall">
          El coaching ha arraigado firmemente en nuestras vidas, desafiando la
          percepción de ser una moda pasajera. Creo firmemente que todos
          necesitamos un coach, incluso los propios coaches para alcanzar metas.{" "}
          <br />
          <br />
          En particular, el
          <span className="pinkColor"> Coaching Estrategico </span>
          se destaca por combinar diversas disciplinas para ofrecer una
          estrategia clara en el crecimiento personal. Esta aproximación única
          nos permite elegir lo mejor de diferentes enfoques, contribuyendo así
          al progreso constante en la vida. <br />
          <br />
          En resumen, el coaching es esencial para el desarrollo personal y
          profesional, proporcionando una guía valiosa para alcanzar objetivos y
          evitar el estancamiento.
        </p>
      </div>
      <div className="coachingBody">
        <div className="flex center">
          <h2 className="title">
            ¿Qué es una
            <span className="pinkColor"> Intervención Estratégica</span>?
          </h2>
        </div>
        <p className="textSmall">
          La Intervención Estratégica tiene 3 funciones básicas: <br />
          <br />
          🌸Descubrir y sanar una herida emocional del pasado. <br />
          🌸Desbloquear una emoción recurrente. <br /> 🌸Elevar el potencial de
          una persona.
        </p>
      </div>
      <div className="coachingBody">
        <div className="flex center">
          <h2 className="title">
            ¿Cómo funciona el <span className="pinkColor">Coaching</span>?
          </h2>
        </div>
        <p className="textSmall">
          El <span className="pinkColor">Coaching</span> es un proceso de
          acompañamiento personalizado que te ayuda a descubrir tus fortalezas y
          a superar tus desafíos. <br />A través de una metodología de preguntas
          y reflexiones, el <span className="pinkColor">Coaching</span> te ayuda
          a encontrar claridad, a tomar decisiones y a construir relaciones más
          significativas contigo mismo y con los demás.
        </p>
      </div>
    </div>
  );
}

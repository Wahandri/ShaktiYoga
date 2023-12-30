import React from "react";
import "./Coaching.css";
import "./PageCoaching.css";
import diference from "../../images/coachingDiference.jpeg";
import team from "../../images/Team.jpg";
import cell from "../../images/cell.jpg";

export default function PageCoaching() {
  return (
    <div className="boxPageCoaching">
      <div className="PageCoachingDescription">
        <div className="coachingHeader">
          <div className="flex center">
            <h1 className="title">
              ¿Qué es el <span className="pinkColor">Coaching</span>?
            </h1>
          </div>
          <p className="textSmall">
            El coaching ha arraigado firmemente en nuestras vidas, desafiando la
            percepción de ser una moda pasajera. Creo firmemente que todos
            necesitamos un coach, incluso los propios coaches para alcanzar
            metas. <br />
            <br />
            En particular, el
            <span className="pinkColor"> Coaching Estrategico </span>
            se destaca por combinar diversas disciplinas para ofrecer una
            estrategia clara en el crecimiento personal. Esta aproximación única
            nos permite elegir lo mejor de diferentes enfoques, contribuyendo
            así al progreso constante en la vida. <br />
            <br />
            En resumen, el coaching es esencial para el desarrollo personal y
            profesional, proporcionando una guía valiosa para alcanzar objetivos
            y evitar el estancamiento.
          </p>
        </div>
        <div className="coachingHeader ">
          <div className="flex center">
            <h2 className="title">
              ¿Qué es una
              <span className="pinkColor"> Intervención Estratégica</span>?
            </h2>
          </div>
          <div className="flex">
            <div>
              <div>
                <p>
                  <span className="bold">
                    La Intervención Estratégica tiene
                    <span className="pinkColor"> 3</span> funciones básicas:
                  </span>
                </p>
                <ul>
                  <li>
                    <p className="textSmall">
                      🌸<span className="pinkColor">Descubrir</span> y sanar una
                      herida emocional del pasado.
                    </p>
                  </li>
                  <li>
                    <p className="textSmall">
                      🌸<span className="pinkColor">Desbloquear</span> una
                      emoción recurrente.
                    </p>
                  </li>
                  <li>
                    <p className="textSmall">
                      🌸<span className="pinkColor">Elevar</span> el potencial
                      de una persona.
                    </p>
                  </li>
                  <br />
                </ul>
              </div>
              <p>
                ¿Te has preguntado por qué la terapia tradicional tarda tanto en
                dar resultados?
                <br />
                <br /> ¿Te ha ocurrido estar por años arrastrando un dolor y
                tener sin saber cómo salir de ello?
                <br />
                <br /> ¿Te has sentido sin poder avanzar por mucho que intentas
                cambiar?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="imgPagesCoaching">
        <img className="imgCell" alt="" src={cell} />
        <img className="imgDiference" alt="" src={diference} />
        <img className="imgTeam" alt="" src={team} />
      </div>
    </div>
  );
}

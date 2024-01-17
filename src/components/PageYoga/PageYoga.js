import React from "react";
import "./PageYoga.css";
import imgYoga1 from "../../images/relax.jpg";
import meditation from "../../images/sectionMeditation.jpeg";
import LogoDario from "../../images/LogoDario.png";
import mujeresYoga from "../../images/mujeresYoga.jpeg";

export default function PageYoga() {
  return (
    <div className="boxPageYoga">
      <section className="headerPageYoga">
        <div className="flex-column size50 backgroundDark">
          <h1 className="whiteColor">"El camino del Yoga"</h1>
          <p>
            Te damos la bienvenida al mundo del yoga. Nuestro yoga tiene como
            objetivo hacer que la práctica del yoga sea accesible y divertida.
            Creemos que practicar yoga a diario puede tener enormes beneficios
            para la salud, ayudando a mejorar la calidad de nuestra vida
          </p>
        </div>
        <div className="boxLogoDario">
          <img className="logoDario" src={LogoDario} alt="" />
        </div>
        <div className="size50">
          <p> </p>
        </div>
      </section>
      <div className="size100 ">
        <p>
          "Para nosotros en Shakti Yoga no hay nada mejor que ser testigo de la
          transformación que se produce en nuestros alumnos cuando realmente se
          enamoran del yoga, tal como lo hacemos nosotros. Desde una mejor
          postura hasta una mejor salud mental, el yoga nos ofrece a todos una
          oportunidad única de conectarnos con nuestro mundo interior y seguir
          nuestra verdadera naturaleza. Ponte a ti mismo en primer lugar y cuida
          tu bienestar."
        </p>
      </div>

      <section className="bodyPageYoga">
        <div className="sectionPageYoga">
          <img className="imgSectionYoga" src={imgYoga1} alt="" />
          <div className="flex-column descriptionSectionYoga">
            <h1>RAYA YOGA</h1>
            <p>
              Se utilizan movimientos dinámicos, posiciones estáticas y técnicas
              de respiración para relacionarnos con el funcionamiento
              extremadamente complejo y sutil de nuestro cuerpo y mente. El Raja
              yoga es un medio precioso de transformación interior: durante la
              práctica, la expansión de la conciencia corporal, el alivio de la
              agitación mental y la propiocepción de nuestros desequilibrios
              pueden crear las condiciones para el nacimiento de una nueva
              sensibilidad y percepción de la realidad libre de
              condicionamiento. La calma y la relajación, a menudo consideradas
              erróneamente como los principales objetivos del yoga, resultan ser
              el punto de partida del camino. Todos los aspectos del ser humano
              están involucrados y estimulados por la práctica gracias al uso de
              diferentes herramientas: Asana (las posiciones del yoga o
              conciencia corporal), Pranayama (técnicas de respiración o la
              conciencia de la respiración), Mudra (gestos psíquicos), Bandha
              (sellos de energía, ataduras) y Dharana (concentración o atención
              enfocada). El equilibrio neutro-fisiológico generado por la
              coordinación armoniosa de estos elementos crea la base para la
              meditación.
            </p>
          </div>
        </div>
        <div className="sectionPageYoga">
          <img className="imgSectionYoga" src={meditation} alt="" />
          <div className="flex-column descriptionSectionYoga">
            <h1>MEDITACION</h1>
            <p>
              Un momento de paz para volver a conectar con el propio ser. Son
              reuniones semanales de aproximadamente una hora en las que
              aprendes una infinidad de técnicas de meditación que luego cada
              uno elegirá explorar libremente según sus necesidades.
              <br />
              <br />
              Definir que es la meditación es como intentar describir un
              sentimiento profundo: las palabras nunca parecen ser capaces de
              hacernos percibir su esencia. Sin embargo, para facilitar la
              comprensión, podemos examinar dos aspectos distintos. Uno es el
              acto formal y concreto que comienza sentándonos en una posición
              adecuada a nuestras posibilidades (con las piernas cruzadas, sobre
              un cojín o en una silla) y continúa con el uso de usa serie de
              técnicas y ayudas a la atención para desarrollar habilidades de
              escucha y observación. El otro es el estado meditativo: ya no hay
              ni un hacer ni un obtener, pero uno puede encontrarse en una
              suspensión, en el surgimiento inesperado de una percepción
              completamente nueva de la vida dentro y alrededor de nosotros.
            </p>
          </div>
        </div>
        <div className="sectionPageYoga">
          <img className="imgSectionYoga" src={mujeresYoga} alt="" />
          <div className="flex-column descriptionSectionYoga">
            <h1>LAS CLASES</h1>
            <ul>
              <li>
                <p>
                  Raja Yoga: En la práctica se combinan Meditación, Relajación,
                  Asanas (Posturas), Pranayama (Técnicas de Respiración),
                  Mantras, Mudras (posturas con las manos).. de nivel medio.
                </p>
              </li>
              <li>
                <p>
                  Hatha Yoga: En la práctica se combinan Relajación y Asanas
                  (posturas estáticas y dinámicas) de nivel medio.
                </p>
              </li>{" "}
              <li>
                <p>
                  Yoga Suave: Clases de yoga de baja intensidad, se incluye
                  Asanas (posturas dinámicas y estáticas) indicada para personas
                  con movilidad limitada y o para principiantes.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

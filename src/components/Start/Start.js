import React from "react";
import "./Start.css";
import imgCoaching from "../../images/manosAmigo.png";
import imgCoaching2 from "../../images/el-masaje-relajante-es-una-tecnica-ancestral-para-armonizar-las-emociones.jpeg";
import CardDefinition from "../CardDefinition/CardDefinition";
import fruitADN from "../../images/fruitADN.jpg";
import danceMeditation from "../../images/fdm.png";
import iconDario from "../../images/yogaC.png"
import Reviews from "../Reviews/Reviews";
import SimonaCabeza from "../../images/SimonaCabeza.jpeg";


export default function Start() {
  return (
    <div className="boxStart flex column center">
      <div className="startHeader br-50 ">
        
        <div className="noOpacity welcomeStart">
          <h1 className="title">
            <span className="pinkColor">Salud y Bienestar Holístico</span>
          </h1>
          <p className="welcomeDescription">
            Bienvenido y felicidades por embarcarte en el camino del crecimiento y el bienestar.<br /><br />
            Si estás aquí, es porque deseas cultivar un mayor amor propio, conocerte más profundamente, superar miedos limitantes y cuidar tu cuerpo, tu salud y tu bienestar emocional. En resumen, buscas sentirte bien.<br /><br />
            Mi enfoque es integral, abarcando los 360 grados, lo que significa cuidarte en todos los niveles: físico, mental, emocional y espiritual. Esto te permitirá conectar con tu verdadera esencia, descubrir tus dones y talentos, y así contribuir de manera significativa al mundo, ¡porque sí... eres importante!<br /><br />
            Utilizo diversas técnicas de psicología y coaching holístico, masajes, meditación, yoga, reiki, EFT, y aplico mi experiencia de vida personal, todo impregnado con mi amor dedicado a tu bienestar.<br /><br />
            ¡Estoy aquí para acompañarte en tu viaje hacia una vida plena y satisfactoria!
          </p>
        </div>
        <div className="imagesHeaderStart">
          <img
            className="noOpacity logoShakti"
            src={SimonaCabeza}
            alt="Logo Shakti"
          />
          <div className="noOpacity flex-column center">
            <h4 className="blunt">"El único límite es tu mente."</h4>
          </div>
        </div>
      </div>
      <div className="responsive">
      <CardDefinition
        url="/coaching"
        img={imgCoaching}
        title="PSICOLOGÍA HOLÍSTICA Y COACHING"
        description={
          <>
            <p>Si tienes un bloqueo que no te deja avanzar en la vida, te cuesta conseguir tus objetivos, tienes dificultades en las relaciones, sientes que no avanzas, quieres potenciar tus propios recursos para prosperar en la vida... miedo y ansiedad dominan tu vida.</p>
            <p>La terapia breve estratégica puede ayudarte a vivir la vida que te mereces.</p>
          </>
        }
      />
      <CardDefinition
        url="/massage"
        img={imgCoaching2}
        title="MASAJES ANÍMICOS"
        description={
          <p>Un masaje desde el corazón, un conjunto de diferentes técnicas a medida. Un toque milagroso que sana el cuerpo y el alma.</p>
        }
      />
      <CardDefinition
        url="/nutrition"
        img={fruitADN}
        title="NUTRACEÚTICA"
        description={
          <>
            <p>Cuidarse por dentro y por fuera a través de Asesoramiento de Bienestar Psico-físico NATURAL... Somos una tribu golosa... <b>"Porque la vida hay que gozarla"</b> hablaremos de:</p>
            <ul>
              <li><p>Comida sana y buena</p></li>
              <li><p>Suplementos medicinales/naturales</p></li>
              <li><p>La importancia de Eliminar toxinas para la salud física y mental</p></li>
              <li><p>Cosmética Natural</p></li>
            </ul>
          </>
        }
      />
      <CardDefinition
        url="/meditation"
        img={danceMeditation}
        title="MEDITA Y BAILA"
        description={
          <p>Meditaciones activas, danza de chakras, danza libre... son técnicas de meditación que se basan en el movimiento.<br/><br/>
          Para el hombre moderno, es difícil meditar utilizando técnicas de meditación tradicionales (silencio, piernas cruzadas, concentración). Sufre continuamente diversas distracciones y estímulos del exterior. Por ello, las meditaciones activas y el baile son una forma eficaz de calmar la mente y crear ese espacio de silencio y conciencia necesario para la meditación.</p>
        }
      />
      <CardDefinition
        url="/meditation"
        img={iconDario}
        title="SHAKTI YOGA"
        description={
          <p>Descubrimos la práctica del yoga a través de asanas, posturas físicas que son solo la punta del iceberg de una antigua tradición que data de hace 5000 años diseñada para integrar mente, cuerpo y alma.</p>
        }
      />

      </div>

      <div class="carousel">
        <Reviews />
      </div>
    </div>
  );
}

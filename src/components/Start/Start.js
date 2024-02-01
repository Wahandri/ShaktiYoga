import React from "react";
import "./Start.css";
import logoShakti from "../../images/shakti.png";
import imgCoaching from "../../images/emocionalcoaching.jpg";
import imgCoaching2 from "../../images/el-masaje-relajante-es-una-tecnica-ancestral-para-armonizar-las-emociones.jpeg";
import Simona from "../../images/Simona.png";
import CardDefinition from "../CardDefinition/CardDefinition";
import fruitADN from "../../images/fruitADN.jpg";
import danceMeditation from "../../images/danceMeditation.jpeg";

export default function Start() {
  return (
    <div className="boxStart flex column center">
      <div className="startHeader borderCard">
        <div className="imagesHeaderStart">
          <img
            className="noOpacity logoShakti"
            src={logoShakti}
            alt="Logo Shakti"
          />
          <div className="noOpacity flex-column center">
            <img className=" imgSimona" src={Simona} alt="" />
            <h4 className="blackColor">"El único límite es tu mente."</h4>
          </div>
        </div>
        <div className="noOpacity welcomeStart">
          <h1 className="title">
            <span className="pinkColor">Salud y Bienestar Holístico</span>
          </h1>
          <p className="borderCard welcomeDescription">
            Bienvenido y felicidades por embarcarte en el camino del crecimiento
            y el bienestar. <br />
            <br /> Si estás aquí, es porque deseas cultivar un mayor amor
            propio, conocerte más profundamente, superar miedos limitantes y
            cuidar tu cuerpo, tu salud, y tu bienestar emocional. En resumen,
            buscas sentirte bien. <br />
            <br /> Mi enfoque es integral, abarcando los 360 grados, lo que
            significa cuidarte en todos los niveles: físico, mental, emocional y
            espiritual. Esto te permitirá conectar con tu verdadera esencia,
            descubrir tus dones y talentos, y así contribuir de manera
            significativa al mundo, ¡¡ porque sí.. eres importante !! <br />
            <br /> Utilizo diversas técnicas de psicología y coaching holístico,
            masajes, meditación, yoga, reiki, EFT, y aplico mi experiencia de
            vida personal, todo impregnado con mi amor dedicado a tu bienestar.
            <br />
            <br />
            ¡Estoy aquí para acompañarte en tu viaje hacia una vida plena y
            satisfactoria!
          </p>
        </div>
      </div>
      <div className="responsive">
        <CardDefinition
          url="/coaching"
          img={imgCoaching}
          title="PSCOLOGIA HOLISTICA Y COACHING"
          description={
            <>
              <p>Si tienes un bloqueo que no te deja avanzar en la vida, te cuesta conseguir tus objetivos,tienes dificultades en las relaciones,sientes que no avanzas,quieres potenciar tus propios recursos para prosperar en la vida…miedo y ansidad dominan tu vida.</p>
              <p>La terapia breve estratégica puede ayudarte a vivir la vida que te mereces.</p>
            </>
          }
        />
        <CardDefinition
          url="/massage"
          img={imgCoaching2}
          title="Masajes Ánimos"
          description={
            <p>Un masaje desde el corazón, un conjunto de diferentes técnicas a medida.  un toque milagroso que sana el cuerpo y el alma.</p>
          }
        />
        <CardDefinition
          url="/nutrition"
          img={fruitADN}
          title="NUTRACEUTICA"
          description={
            <>
              <p>CUIDARSE POR DENTRO Y POR FUERA a través de Asesoramiento de Bienestar Psico-fisico NATURAL .. Somos una tribu golosa.. "PORQUE LA VIDA AY QUE GOZARLA" hablaremos de :</p>
              <ul>
                <li><p>Comida sana y buena</p></li>
                <li><p>Suplementos medicina/natural</p></li>
                <li><p>La importancia de Eliminar toxinas por la salud física y mental</p></li>
                <li><p>Cosmética  Natural</p></li>
              </ul>
            </>
          }
        />
        <CardDefinition
          url="/meditation"
          img={danceMeditation}
          title="DANCE-MEDITACION"
          description={
            <p>Meditaciones activas , danza de chakras, danza libre... son técnicas de meditación que se basan en la técnica del movimiento.<br/><br/>
            Para el hombre moderno, es difícil meditar utilizando técnicas de meditación tradicionales (silencio, piernas cruzadas, concentración).  Sufre continuamente diversas distracciones y estímulos del exterior.  Por ello, las meditaciones activas y el baile son una forma  eficaz de calmar la mente y de crear ese espacio de silencio y conciencia necesario para la meditación.</p>
          }
        />
      </div>
    </div>
  );
}

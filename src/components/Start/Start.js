import React from "react";
import "./Start.css";
import logoShakti from "../../images/shakti.png";
import Simona from "../../images/Simona.png";
import CardDefinition from "../CardDefinition/CardDefinition";

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
          img={Simona}
          title="Psicologia Holistica y Coaching"
          description={
            "Si tienes un bloqueo que no te deja avanzar en la vida, te cuesta conseguir tus objetivos,tienes dificultades en las relaciones,sientes que no avanzas,quieres potenciar tus propios recursos para prosperar en la vida…miedo y ansidad dominan tu vida."
          }
          description2={
            "La terapia breve estratégica puede ayudarte a vivir la vida que te mereces."
          }
        />
        <CardDefinition
          url="/coaching"
          img={Simona}
          title="Psicologia Holistica y Coaching"
          description="Lorem Mi enfoque es integral, abarcando los 360 grados, lo que
          significa cuidarte en todos los niveles: físico, mental, emocional y
          espiritual. Esto te permitirá conectar con tu verdadera esencia,
          descubrir tus dones y talentos, y así contribuir de manera
          significativa al mundo, ¡¡ porque sí.. eres importante !! <br />
          <br /> Utilizo diversas técnicas de psicología y coaching holístico,
          masajes, meditación, yoga, reiki, EFT, y aplico mi experiencia de
          vida personal, todo impregnado con mi amor dedicado a tu bienestar. ipsum dolor sit amet consectetur adipisicing elit. Quisquam"
        />
        <CardDefinition
          url="/coaching"
          img={Simona}
          title="Psicologia Holistica y Coaching"
          description="Lorem Mi enfoque es integral, abarcando los 360 grados, lo que
          significa cuidarte en todos los niveles: físico, mental, emocional y
          espiritual. Esto te permitirá conectar con tu verdadera esencia,
          descubrir tus dones y talentos, y así contribuir de manera
          significativa al mundo, ¡¡ porque sí.. eres importante !! <br />
          <br /> Utilizo diversas técnicas de psicología y coaching holístico,
          masajes, meditación, yoga, reiki, EFT, y aplico mi experiencia de
          vida personal, todo impregnado con mi amor dedicado a tu bienestar. ipsum dolor sit amet consectetur adipisicing elit. Quisquam"
        />
      </div>
    </div>
  );
}

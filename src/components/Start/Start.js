import React from "react";
import "./Start.css";
import logoShakti from "../../images/shakti.png";
import Simona from "../../images/Simona.png";
import Coaching from "../Coaching/Coaching";
import Meditation from "../Meditation/Meditation";
import Massage from "../Massage/Massage";
import Yoga from "../Yoga/Yoga.js";
import Nutrition from "../Nutrition/Nutrition.js";

export default function Start() {
  return (
    <div className="boxStart flex column center">
      <div className="startHeader">
        <div className="imagesHeaderStart">
          <img
            className="noOpacity logoShakti"
            src={logoShakti}
            alt="Logo Shakti"
          />
          <img className="noOpacity imgSimona" src={Simona} alt="" />
        </div>
        <div className="noOpacity welcomeStart">
          <h1 className="title">
            <span className="pinkColor">Salud y Bienestar Holístico</span>
          </h1>
          <p className=" welcomeDescription">
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
      <Coaching />
      <Meditation />
      <Yoga />
      <Massage />
      <Nutrition />
    </div>
  );
}

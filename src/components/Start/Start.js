import React from "react";
import "./Start.css";
import logoShakti from "../../images/shakti.png";
import Coaching from "../Coaching/Coaching";
import Meditation from "../Meditation/Meditation";
import Massage from "../Massage/Massage";
import Yoga from "../Yoga/Yoga.js";
import Nutrition from "../Nutrition/Nutrition.js";

export default function Start() {
  return (
    <div className="boxStart flex column center">
      <div className="startHeader">
        <img className="logoShakti" src={logoShakti} alt="" />
        <div className="margin">
          <div className="flex center">
            <h1 className="title">
              Bienvenido a <span className="pinkColor">Shakti</span>
            </h1>
          </div>
          <p className="textSmall">
            Descubre el poder transformador de tus emociones con nuestro{" "}
            <span className="pinkColor">procesos personalizado</span>.<br />
            En <span className="pinkColor">Shakti</span>, te acompañamos en un
            viaje hacia la autenticidad y el bienestar emocional.
            <br />
            Encuentra claridad, supera desafíos y construye relaciones más
            significativas contigo mismo y con los demás.
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

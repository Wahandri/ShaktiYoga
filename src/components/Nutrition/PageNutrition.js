import React from "react";
import "./PageNutrition.css";

const PageNutrition = () => {
  return (
    <div className="boxPageNutrition">
      <h1 className="title pinkColor">Nutrición y Bienestar</h1>

      <section>
        <h2 className="title pinkColor">Servicios Ofrecidos</h2>
        <ul>
          <li>
            <p className="textSmall">Nutraceutica</p>
          </li>
          <li>
            <p className="textSmall">Cosmoceutica</p>
          </li>
          <li>
            <p className="textSmall">Nutrición</p>
          </li>
          <li>
            <p className="textSmall">Test Metabolómico</p>
          </li>
          <li>
            <p className="textSmall">Detox</p>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="title pinkColor">Lo que Vas a Aprender</h2>
        <ul>
          <li>
            <p className="textSmall">
              Un estilo de vida saludable, una alimentación sana y rica.
            </p>
          </li>
          <li>
            <p className="textSmall">
              Qué es y por qué es tan importante la nutracéutica.
            </p>
          </li>
          <li>
            <p className="textSmall">
              La bioquímica del cuerpo, la relación entre intestino, salud y
              ansiedad.
            </p>
          </li>
          <li>
            <p className="textSmall">Tu cuerpo es tu templo.</p>
          </li>
          <li>
            <p className="textSmall">
              Las toxinas: enemigos silenciosos responsables de las
              enfermedades.
            </p>
          </li>
        </ul>
        <p className="textSmall">
          La nutracéutica ayuda a equilibrar la bioquímica del cuerpo, a
          favorecer la salud con una suplementación personalizada, eficaz y
          comprobada.
        </p>
      </section>

      <section>
        <h2 className="title pinkColor">Cosmoceutica</h2>
        <p className="textSmall">
          Cosmética natural muy nutritiva, sin químicos. Recuerda que lo que tú
          pones en tu piel en 10 segundos estará en tu sangre.
        </p>
      </section>

      <section>
        <h2 className="title pinkColor">Primera Sesión Gratuita</h2>
        <p className="textSmall">
          ¡Aprovecha tu primera sesión totalmente gratuita y sin compromiso!
        </p>
      </section>

      <section>
        <h2 className="title pinkColor">Colaboración y Productos</h2>
        <p className="textSmall">
          Colaborando con el equipo de profesionales Beeyou Revolution® y
          Forever Living.
        </p>
        <p className="textSmall">
          Puedes comprar nuestros productos{" "}
          <a
            href="https://shop.foreverliving.it/zappoli-simona-340000606427.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            aquí
          </a>
          , y te recordamos que tienes un asesoramiento gratuito incluido para
          tener un servicio exclusivo y disfrutar de las ofertas.
        </p>
      </section>
    </div>
  );
};

export default PageNutrition;

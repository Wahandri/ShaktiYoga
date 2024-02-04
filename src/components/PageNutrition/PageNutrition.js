import React, { useState } from "react";
import "./PageNutrition.css";
import img1 from "../../images/nutricion.jpg";
import depresion from "../../images/depresion.jpg";
import FlechaAbajoIcon from "../../images/flecha-hacia-abajo.png";
import FlechaArribaIcon from "../../images/flecha-hacia-arriba.png";

export default function PageNutrition() {
  const [isOpen, setIsOpen] = useState({
    coachingSession: false,
    strategicInterventions: false,
    howWeDoIt: false,
    whyWithMe: false,
  });

  const toggleDetails = (detail) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [detail]: !prevState[detail],
    }));
  };

  const [isOpen2, setIsOpen2] = useState({
    coachingSession: false,
    strategicInterventions: false,
    howWeDoIt: false,
    whyWithMe: false,
  });

  const toggleDetails2 = (detail) => {
    setIsOpen2((prevState) => ({
      ...prevState,
      [detail]: !prevState[detail],
    }));
  };

  return <div className="boxNutrition">
    <header className="borderCard headerNutrition">
      <div className="h1Header">
        <h1 className="h1HeaderNutrition whiteColor">SALUD Y FELICIDAD</h1>
      </div>
    </header>

    <section className="sectionNutrition">
      <div className="section1">
        <img className="img1" src={img1} alt=""/>
        <div className="boxShadow description1 br-30">
          <p>¿Porque los nutracéuticos se han vuelto fundamentales hoy en mi trabajo?</p>
          <p>Los nutracéuticos son una ciencia médica moderna que está creciendo rápidamente y es extremadamente prometedora para muchas patologías, incluida la depresión.</p>
        </div>
      </div>
    </section>

    <section className="section2 flex center">
      <div className="boxShadow whiteColor br-30 bg-purple flex-column center">
        <h1 className="whiteColor">¿EMFERMEDAD o SALUD? <br/>¿Que elijes?</h1>
        <ul>
          <li className="liNone"><p>Hoy, a diferencia de cuando empecé, los casos de problemas digestivos, intestinos inflamados, reacciones autoinmunes, intolerancias, etc., han aumentado exponencialmente.</p></li>
          <li className="liNone"><p>Todo esto no puede tomarse a la ligera y centra la atención en lo que sucede no sólo a nuestro alrededor sino también dentro de nosotros.  Todo esto tiene que ver con la calidad de los alimentos que comemos, cómo nos nutrimos a diario y el efecto que tienen los alimentos en nuestro organismo.</p></li>
          <li className="liNone"><p>En los nutracéuticos encontramos, por tanto, alimentos concentrados, en una dosis que tiene un efecto beneficioso y positivo para el organismo.</p></li>
          <li className="liNone"><p>Si estás pensando que "en el futuro sólo nos alimentaremos con pastillas", te detendré ahora mismo.  Los nutracéuticos *no sustituyen tu dieta  ninguna manera.  Tú sigues siendo el protagonista de tu salud y bienestar eligiendo los alimentos que consumes cada día.  Sin embargo, cada vez sucede más a menudo que nos vemos obligados a afrontar situaciones de estrés psicofísico y ambiental en las que una dosis de antioxidantes o vitaminas es importante para contrarrestar algunos fenómenos que se producen a nivel celular.</p></li>
          <li className="liNone"><p>De hecho, estudios científicos recientes demuestran que los trastornos y enfermedades se desarrollan sobre la base de dos mecanismos: la inflamación o la oxidación.  Es sobre estos dos mecanismos sobre los que actúa el nutracéutico, que interviene tanto en prevención como como apoyo cuando se producen trastornos.</p></li>
        </ul>
      </div>
    </section>

    <section className="">
      <div className="boxDepresion">
        <img className="imgDepresion" src={depresion} alt=""/>
        <p className="pDepresion ">
          La conexión entre la depresión y el intestino es un campo de investigación en evolución que involucra el eje intestino-cerebro, también conocido como eje intestino-microbiota-cerebro.  Este sistema incluye las complejas interacciones entre el sistema nervioso intestinal, la flora bacteriana (microbiota) presente en el intestino y el cerebro. <br /><br />
          Numerosos estudios científicos han destacado una asociación entre la salud intestinal y la salud mental, incluida la depresión.
        </p>
      </div>
    </section>

    <div className="flex center">
      <h2 className="w-60">"Por esto es tan importante combinar el trabajo mental emocional con la bioquímica del cuerpo a través de nutraceuticos para conseguir más rápido mejores resultados."</h2>
    </div>

    <div className="w-100 flex center">
      <details
        open={isOpen.howWeDoIt}
        onToggle={() => toggleDetails("howWeDoIt")}
        className="detailsPageCoaching"
      >
        <summary className="summaryPageCoaching">
          <img alt=""/>
          <h3 className="whiteColor">SOBRE MI</h3>
          {isOpen.howWeDoIt ? (
            <img width="20px" src={FlechaArribaIcon} alt="Arriba" />
          ) : (
            <img width="20px" src={FlechaAbajoIcon} alt="Abajo" />
          )}{" "}
        </summary>
        <div className="padding-20">
          <p>
            Mi historia Comienza como una niña con un trastorno alimenticio, bulimia y depresión.  Inmediatamente rechacé la etiqueta de deprimida y sobre todo a una vida de pastillas y color gris.  el fuerte deseo de sentirme bien REALMENTE me llevó a cursos, terapias  convencionales y alternativas y a certificaciones.  <br /><br />
            mis relaciones eran un desastre y mi autoestima estaba muy baja.  Comprendí y sobre todo experimenté en carne propia el efecto nocivo de una alimentación incorrecta en mi estado emocional.  Siempre he usado productos naturales en lugar de antidepresivos químicos... bueno... no fue un paseo por el parque, especialmente porque estaba sola en esta búsqueda. <br /><br />
            EL GRAN CAMBIO ocurrió con la intervención estratégica , el coaching , la Nutracéutica y  hoy soy coach de bienestar 360° para ayudarte.<br /><br />
            Me he convertido en una experta en alimentación saludable y colaboro con un grupo de médicos y nutricionistas.<br /><br />
            trabajar a todos los niveles, con buena alimentación, excelentes nutracéuticos, movimiento y un buen entrenador fue un renacer para mí.
          </p>
        </div>
      </details>
    </div>

    <div className="w-100 flex center">
      <details
        open={isOpen2.howWeDoIt}
        onToggle={() => toggleDetails2("howWeDoIt")}
        className="detailsPageCoaching"
      >
        <summary className="summaryPageCoaching">
          <img alt=""/>
          <h3 className="whiteColor">Descubre el Plan detox light on</h3>
          {isOpen2.howWeDoIt ? (
            <img width="20px" src={FlechaArribaIcon} alt="Arriba" />
          ) : (
            <img width="20px" src={FlechaAbajoIcon} alt="Abajo" />
          )}{" "}
        </summary>
        <div className="padding-20">
          <p>
            El LIGHT ON C9  te dará un empujón rápido  hacia el redescubrimiento del bienestar, la purificación profunda y el cuerpo
            más delgado y en forma.
          </p><br /><br />
          <p>LIGHT ON Es un sistema de cambio nutricional, tiene una duración de 9 días y está compuesto por 5 nutracéuticos diseñados para trabajar en completa sinergia.</p><br /><br />
          <ul>
            <li><p>Para nutrir, reequilibrar y alcalinizar tu organismo mientras lo limpias de aquello que le pesa y ya no le sirve</p></li><br /><br />
            <li><p>Para  permitir  al organismo de reducir la absorción de carbohidratos y azúcares no útiles de los alimentos, reequilibrando el nivel adecuado de azúcar y colesterol en sangre y evitando picos de glucemia;  También te  ayuda a reequilibrar tu saludable sensación de saciedad diaria.</p></li><br /><br />
            <li><p>Para reactivar todas las funciones metabólicas, incluida la de QUEMAGRASA de las grasas sedimentadas.  Por tanto, nutre tu organismo reactivando tu metabolismo, quemando grasas no saludables sedimentadas y aportándote tono y energía de forma natural durante todo el día, reequilibrando los ritmos adecuados de sueño </p> </li> <br /><br />
            <li><p>Para reequilibrar el intestino y todo el tracto gastrointestinal, al mismo tiempo que ayudan al proceso de desintoxicación y limpieza de toxinas;  son verdaderos "barrenderos" </p> </li><br /><br />
            <li><p>Para una  nutricion  completa que nutre profundamente cada célula de tu cuerpo mientras te ayuda a dejar la digestión ligera, esencial para permitir que el cuerpo concentre sus energías en eliminar toxinas y capas de grasa no saludables</p> </li><br /><br />
          </ul>
          <p>Estos nutracéuticos, unidos a una ligera actividad física,nuestra supervisión , la posibilidad de hacerlo grupal y deliciosas recetas de comidas bajas en calorías y Alimentos Libres de frutas y verduras, hacen de LIGHT ON un aliado para quienes quieren deshincharse, reequilibrarse y recuperar y mantenerse en forma sin perder tono y mejorando la forma física </p><br /><br />
          <p>Todos estos aspectos del camino LIGHT ON  actúan en sinergia;  ayudan a realizar cambios positivos en tus hábitos de vida e instalar buenos hábitos de una manera sencilla y mantenible, porque actúan reequilibrando la bioquímica del cuerpo</p><br /><br />
          <p>Gracias a lo que vivirás en estos 9 días  al final del viaje podrás elegir con seguridad qué comer para sentirte bien, cambiar hábitos que ya no te gustan, recuperar la serenidad mental. y entenderás lo fácil y bueno que es añadir un poco de movimiento físico a tu vida diaria  </p><br /><br />
          <p>Habrás creado tu propia rutina saludable y sostenible y vivirás con nueva energía y serenidad </p><br /><br />
          <p>Y lo fantástico es que este programa se puede repetir varias veces durante el año y cada vez actúa de forma más profunda y diferente, en función de las necesidades de tu cuerpo en ese momento</p>
        </div>
      </details>
    </div>

    
  </div>;
}

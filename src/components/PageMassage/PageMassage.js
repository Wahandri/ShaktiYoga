import React, { useState } from "react";
import "./PageMassage.css";
import FlechaArribaIcon from "../../images/flecha-hacia-arriba.png";
import FlechaAbajoIcon from "../../images/flecha-hacia-abajo.png";
import MiniCard from "../MiniCard/MiniCard";
import Carrousel from "../Carrousel/Carrousel";

export default function PageMassage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex-column center">
      <div className=" imgHeaderMassage flex center padding-20 ">
        <h1 className="textHeader borderCardOpacity padding-20">
          El masaje no sólo incluye rituales de belleza, sino cuidados, salud,
          emociones y porque es una excelente herramienta para ayudar y amar sin
          demasiadas palabras y a un nivel muy profundo.
        </h1>
      </div>

      <div className="flex-column center w-100">
        <h1>BENEFICIOS DE LOS MASAJES</h1>
        <div className="boxBeneficios">
          <div className="cardBeneficios borderCard">
            <p className="">
              "El masaje es la forma más natural de aliviar el estrés. El arte
              del tacto, a menudo subestimado, puede calmar el alma."
            </p>{" "}
          </div>{" "}
          <div className="cardBeneficios borderCard">
            <p className="">
              "En el masaje estamos unidos en el arte de curar. Las manos hablan
              un lenguaje que el cuerpo entiende."
            </p>
          </div>{" "}
          <div className="cardBeneficios borderCard">
            <p className="">
              "El masaje no es sólo un lujo, es una forma de invertir en su
              salud física y mental".
            </p>
          </div>{" "}
          <div className="cardBeneficios borderCard">
            <p className="">
              "El contacto humano puede aliviar el estrés más que cualquier otra
              cosa. El masaje es el arte de reconectarse con uno mismo a través
              del tacto".
            </p>
          </div>{" "}
          <div className="cardBeneficios borderCard">
            <p className="">
              "En el caos de la vida moderna, el masaje es una isla de
              tranquilidad. Es un momento en el que te dedicas totalmente a ti
              mismo."
            </p>
          </div>{" "}
          <div className="cardBeneficios borderCard">
            <p className="">
              "Las manos curativas también pueden relajar. El masaje es una
              forma de bondad que el cuerpo reconoce". "El masaje es como un
              poema: silencioso pero capaz de tocar las fibras más profundas de
              nuestro ser."
            </p>
          </div>{" "}
          <div className="cardBeneficios borderCard">
            <p className="">
              "Las tensiones se disuelven bajo las manos de un buen masajista.
              El masaje es el lenguaje de la calma interior."
            </p>
          </div>{" "}
          <div className="cardBeneficios borderCard">
            <p className="">
              "El masaje no es sólo para el cuerpo cansado, es para el alma que
              necesita paz."
            </p>
          </div>{" "}
          <div className="cardBeneficios borderCard">
            <p className="">
              Estos aforismos reflejan la importancia y los beneficios que el
              masaje antiestrés puede aportar no sólo al cuerpo, sino también a
              la mente y al espíritu.
            </p>
          </div>
        </div>
      </div>
      <div className="titleBoxMiniCard borderCardOpacity">
        <h1>MASAJES</h1>
      </div>
      <Carrousel />

      <div className="boxMiniCard flex-column center">
        <div className="boxMiniCards">
          <MiniCard
            title="CHAKRA"
            description="Un masaje de los chakras tiene como objetivo desbloquear y equilibrar la energía en los chakras, promoviendo el bienestar físico, mental y emocional. Los masajes se pueden realizar en puntos específicos del cuerpo relacionados con los diferentes chakras, utilizando  piedras u técnicas específicas de masaje"
          />
          <MiniCard
            title="LINFATICO"
            description="El drenaje linfático es una técnica de masaje que se utiliza para estimular el sistema linfático y promover la circulación de la linfa, que es un líquido transparente que transporta glóbulos blancos y desechos celulares a través del cuerpo. Se utiliza a menudo para reducir la retención de líquidos y mejorar la circulación. algunas personas pueden experimentar beneficios emocionales derivados de masajes en general, ya que el masaje puede tener efectos relajantes y liberar tensiones físicas y mentales"
          />
          <MiniCard
            title="ANTIESTRES"
            description="El masaje antiestrés es una práctica que tiene como objetivo reducir el nivel de estrés y tensión en el cuerpo mediante diversas técnicas de masaje para promover la relajación y el bienestar general. Sin embargo, es importante señalar que el masaje por sí solo no puede resolver completamente los problemas de estrés a largo plazo y puede ser más efectivo cuando se combina con otras estrategias de manejo del estrés, como el ejercicio regular, la meditación o consultas especifica como coaching emocional y intervencion estrategica"
          />
          <MiniCard
            title="DEEP ENERGY"
            description="Un masaje relajante, energético más completo con la posible utilización de música curativa, Reiki, colores, perfumes, vibraciones, piedras."
          />
        </div>
      </div>

      <section className="borderCard sectionMassage padding-20  w-40">
        <details className="" open={isOpen} onToggle={toggleDetails}>
          <summary className="bg-purple br-30 summaryMassage flex space-around">
            <div></div>
            <h1 className="whiteColor">MI METODO:</h1>
            {isOpen ? (
              <img width="20px" src={FlechaArribaIcon} alt="Arriba" />
            ) : (
              <img width="20px" src={FlechaAbajoIcon} alt="Abajo" />
            )}{" "}
          </summary>
          <p className="">
            {" "}
            He comprendido que ninguna técnica realmente funciona si la persona
            no llega primero a un profundo estado de relajación y re-conexión.
            En principio me certifique en masajes sueco, antiestrés,
            descontracturación, linfático pero a lo largo de las experiencias y
            formándome como coach y profesora de yoga tuve la confirmación que
            solo alineando mente, cuerpo y espíritu, se puede lograr un
            beneficio real y duradero. por esta razón elegí practicar un masaje
            principalmente relajante y energético, combinando también Reiki para
            mover niveles aún más sutiles del ser a través de la materia (el
            cuerpo).
          </p>
        </details>
      </section>
    </div>
  );
}

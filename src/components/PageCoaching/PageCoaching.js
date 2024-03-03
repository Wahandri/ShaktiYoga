import React, { useState } from "react";
import "./PageCoaching.css";
import diferences from "../../images/coachingDiference.jpeg";
import iconTime from "../../images/reloj.png";
import iconTime2 from "../../images/reloj-de-pared.png";
import iconCheck from "../../images/check.png";
import iconRespect from "../../images/apreton-de-manos.png";
import FlechaAbajoIcon from "../../images/flecha-hacia-abajo.png";
import FlechaArribaIcon from "../../images/flecha-hacia-arriba.png";
import imgS1 from "../../images/imgS1.jpeg";
import imgS2 from "../../images/imgS2.jpeg";
import imgS3 from "../../images/imgS3.jpeg";
import imgS4 from "../../images/imgS4.jpeg";

export default function PageCoaching() {
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

  return (
    <div className="boxPageCoaching">
      <div className="headerPageCoaching borderCard2">
        <div className="h1HeaderPageCoaching ">
          <h1 className="mediaSizeFontH1 pinkColor">“La curiosidad y el autoconocimiento te llevara a tu destino”</h1>
        </div>
      </div>
      
      <div className="section1Coaching pinkColor br-50 borderCard">
        <h1 className="subrayado">Alguna de estas frases te resuenan??</h1>
        <div className="flex ">
          <ul className="liNonePoint ulHeaderPageCoaching">
            <li className="liNonePoint  br-30 ">
              <h3 className="">"Me siento culpable"</h3>
            </li>
            <li className="liNonePoint  br-30 ">
              <h3 className="">"Soy muy vergonzosa"</h3>
            </li>
            <li className="liNonePoint  br-30 ">
              <h3 className="">"Tengo miedo al rechazo"</h3>
            </li>
            <li className="liNonePoint  br-30 ">
              <h3 className="">"No gestiono mi tristeza"</h3>
            </li>
            <li className="liNonePoint  br-30 ">
              <h3 className="">"Me cuesta poner límites"</h3>
            </li>
            <li className="liNonePoint  br-30 ">
              <h3 className="">"He sufrido abusos"</h3>
            </li>
            <li className="liNonePoint  br-30 ">
              <h3 className="">"Soy muy perfeccionista"</h3>
            </li>
            <li className="liNonePoint  br-30 ">
              <h3 className="">"Soy muy indecisa"</h3>
            </li>
            <li className="liNonePoint  br-30 ">
              <h3 className="">"Relaciones complicadas de pareja"</h3>
            </li>
            <li className="liNonePoint  br-30 ">
              <h3 className="">"Me asusto fácil y me da mucha ansiedad"</h3>
            </li>
            <li className="liNonePoint  br-30 ">
              <h3 className="">"Estoy decepcionada"</h3>
            </li>
            <li className="liNonePoint  br-30 ">
              <h3 className="">"Me estoy separando"</h3>
            </li>
          </ul>
        </div>
      </div>

      <div className="boxDescriptionCoaching">
        <h1 className="text-center">
          Te explicaré qué hacemos, qué es el coaching de intervención estratégica y por qué puede ayudarte
        </h1>
        <section className="boxDetailsPageCoaching borderCard">
          
            <div className="flex-column margin-20 center">
              <h2 className="pinkColor">¿QUE ES EL COACHING?</h2>
              <p>
                Es un proceso de acompañamiento personal, profesional y confidencial en el que se utiliza lo mejor de diferentes disciplinas como: Psicología de las Necesidades Humanas, Gestión de Conflictos, Coaching, PNL, Terapia de Pareja, hipnosis Eriksoniana, etc.
              </p>
            </div>
          

          
            <div className="flex-column margin-20 center">
              <h2 className="pinkColor">¿PARA QUIEN ES?</h2>
              <p>
                El coaching emocional es para cualquier persona que tenga una necesidad de cambio, que sienta insatisfacción, frustración, baja autoestima, etc.<br /><br />
                Es una metodología que permite mejorar las relaciones contigo mismo y con los demás a través del conocimiento de las emociones y su gestión, encaminada a conseguir el bienestar en el ámbito emocional, relacional y profesional.<br /><br />
                El coaching emocional puede ayudar a mejorar la autoconciencia, el desarrollo de la empatía, las habilidades de comunicación y la autoestima. El camino del coaching emocional tiene como objetivo alcanzar un objetivo establecido por el cliente.<br /><br />
                Los beneficios de un viaje de coaching emocional incluyen mejorar la autoconciencia, aumentar la motivación, mejorar las relaciones interpersonales y el bienestar psicofísico.
              </p>
            </div>
          

          
            <div className="flex-column margin-20 center">
              <h2 className="pinkColor">¿QUÉ ES UNA INTERVENCIÓN ESTRATÉGICA?</h2>
              <p>La Intervención Estratégica tiene 3 funciones básicas:</p>{" "}
              <ul className="">
                <li>
                  <p>Descubrir y sanar una herida emocional del pasado.</p>{" "}
                </li>
                <li>
                  <p>Desbloquear una emoción recurrente.</p>
                </li>
                <li>
                  <p>Elevar el potencial de una persona.</p>
                </li>
              </ul>
            </div>
          
        </section>

        <div className="w-90 mt-40 flex-column center">
        <p>
          <strong>Y si hasta hoy te has preguntado:</strong> ¿Por qué la terapia tradicional tarda tantas sesiones en dar resultados? ¿Por qué yo no puedo avanzar por mucho que lo intento, cuando otros sí? Entonces la Intervención Estratégica es para TI.
        </p>
          <br />
          <br />
          <p>
            Teniendo en cuenta que son pocas las personas que salen intactas de la niñez. Y que como consecuencia es frecuente grabar un mal sentir, que con los años comienza a invadir otras áreas de nuestras vidas, a inundarlo todo: trabajo, relaciones, autoestima… Por lo que una Intervención Estratégica se convierte en la disciplina que te ayudará a desbloquear tu vida.
          </p>
          <br />
          <br />
          <p>
            Llevamos mucho tiempo creyendo que cambiar es difícil, que es lento, que no puede hacerlo todo el mundo, que no dura… Por eso cuando sentimos que algo nos duele emocionalmente pensamos que nunca habrá forma de deshacernos de ese malestar.<br/>
            <strong>¡¡ PERO ES MENTIRA !!</strong>
          </p>
        </div>
      </div>

      <div className="boxDiferences">
        <div className="miniBoxDiferences">
          <img className="imgS1 " src={imgS1} alt="" />
          <img className="imgS1 " src={imgS2} alt="" />
        </div>
        <img className="imgDiferences" src={diferences} alt="" />
        <div className="miniBoxDiferences">
          <img className="imgS1 " src={imgS3} alt="" />
          <img className="imgS1 " src={imgS4} alt="" />
        </div>
      </div>

      <h2 className="subrayado">"Tu bienestar también mejora la vida de quienes te rodean"</h2>

      <section className="boxDetailsPageCoaching">
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img width="40px" src={iconTime} alt="" />
              <p>SESION DE COACHING</p>
            </div>
            <div className="card-back">
            <p>
              La duración de cada sesión estará en torno a 60 minutos, por teléfono, video llamada o de forma presencial. La duración de los procesos oscilan entre 5 y 15 sesiones, aunque esto es un aspecto que dependerá exclusivamente de ti.
            </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img width="40px" src={iconTime2} alt="" />
              <p>SESIÓN DE INTERVENCIÓN ESTRATÉGICA</p>
            </div>
            <div className="card-back">
            <p>
              Es una sola y única sesión, la duración estará en torno a 2 horas aproximadamente.
            </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img width="40px" src={iconRespect} alt="" />
              <p>¿POR QUÉ CONMIGO?</p>
            </div>
            <div className="card-back">
            <p>
              Siempre he tenido en el corazón mi propio bienestar y el de los demás, he sufrido durante mucho tiempo, he probado muchas terapias con pocos resultados. Cuando encontré la intervención estratégica y el coaching mi vida cambió radicalmente, finalmente comencé a comprender mucho de mí mismo, experimenté esta práctica tan efectiva y rápida que me permitió finalmente una vida plena. Así que decidí formarme para ayudar a otras personas a no sufrir innecesariamente durante tanto tiempo.
            </p>
            </div>
          </div>
        </div>
      </section>

      <div className="boxWhot">
        <details
          open={isOpen.howWeDoIt}
          onToggle={() => toggleDetails("howWeDoIt")}
          className="detailsPageCoaching"
        >
          <summary className="summaryPageCoaching">
            {<img width="40px" src={iconCheck} alt="" />}{" "}
            <h3 className="whiteColor">¿Cómo lo haremos? </h3>
            {isOpen.howWeDoIt ? (
              <img width="20px" src={FlechaArribaIcon} alt="Arriba" />
            ) : (
              <img width="20px" src={FlechaAbajoIcon} alt="Abajo" />
            )}{" "}
          </summary>
          <div className="w-100">
          <p>
            En primer lugar tendremos una sesión exploratoria gratuita y sin compromiso, de 30 minutos de duración, en la que evaluaremos si esta metodología es la mejor opción en tu caso. Nunca te recomendaremos comenzar este proceso si no vemos con claridad que te va a aportar la solución a tu problema, aunque lógicamente los resultados en gran medida van a depender de tu nivel de compromiso en el proceso. <br />
            <br /> Al menos 24 horas antes de nuestra sesión exploratoria gratuita, habrás de rellenar un cuestionario que te enviaré por correo electrónico, con preguntas pensadas estratégicamente, que nos darán información importante a las dos, de cara a decidir finalmente si es el método más recomendado en tu caso. <br />
            <br /> Si decides comenzar el proceso, tendremos una sesión semanal durante un tiempo que varía dependiendo de tu situación entre una sesión sola, pack de 4 sesiones o de 10 sesiones, en las que de forma absolutamente personalizada utilizaremos las técnicas, dinámicas, tipo de terapia que mejor y más rápido funcionan para tu caso concreto. <br />
            <br /> Las sesiones las podemos realizar por varios canales de comunicación, todos igualmente válidos para obtener los mejores resultados, tan solo necesitarás un teléfono, unos auriculares o una webcam si prefieres realizarlas por video. Estudios demuestran que la eficacia del tratamiento es la misma independientemente del canal de comunicación utilizado (teléfono, Skype, presencial), además de ser más cómodo para ti por no tener que desplazarte. <br />
            <br /> Solo necesitas tener el deseo de mejorar, de sentirte feliz, con fuerza y energía. De aportar a los demás lo mejor de ti. Si este es tu deseo, reserva tu sesión exploratoria gratuita aquí.
          </p>
          </div>
        </details>
      </div>

      <div className="boxVideoCoaching">
        <h2>Documental sobre intervención estratégica</h2>
        <iframe
        className="videoCoaching borderCard"
          src="https://www.youtube.com/embed/PgMjrtsN7gI?si=4PVipEOvNRUz7Bnp"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

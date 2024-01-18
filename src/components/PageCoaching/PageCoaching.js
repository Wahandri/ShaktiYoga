import React, { useState, useEffect } from "react";
import "./PageCoaching.css";
import diferences from "../../images/coachingDiference.jpeg";
import iconTime from "../../images/reloj.png";
import iconTime2 from "../../images/reloj-de-pared.png";
import iconCheck from "../../images/check.png";
import iconRespect from "../../images/apreton-de-manos.png";
import flechaArriba from "../../images/flecha-hacia-abajo.png";
import flechaAbajo from "../../images/flecha-hacia-arriba.png";
import imgS1 from "../../images/imgS1.jpeg";
import imgS2 from "../../images/imgS2.jpeg";
import imgS3 from "../../images/imgS3.jpeg";
import imgS4 from "../../images/imgS4.jpeg";

export default function PageCoaching() {
  const [isCoachingOpen, setIsCoachingOpen] = useState(false);
  const [isIntervencionOpen, setIsIntervencionOpen] = useState(false);
  const [isComoHaremosOpen, setIsComoHaremosOpen] = useState(false);
  const [isPorQueConmigoOpen, setIsPorQueConmigoOpen] = useState(false);

  const toggleIsCoachingOpen = () => setIsCoachingOpen(!isCoachingOpen);
  const toggleIsIntervencionOpen = () =>
    setIsIntervencionOpen(!isIntervencionOpen);
  const toggleIsComoHaremosOpen = () =>
    setIsComoHaremosOpen(!isComoHaremosOpen);
  const toggleIsPorQueConmigoOpen = () =>
    setIsPorQueConmigoOpen(!isPorQueConmigoOpen);

  useEffect(() => {
    setIsCoachingOpen(false);
    setIsIntervencionOpen(false);
    setIsComoHaremosOpen(false);
    setIsPorQueConmigoOpen(false);
  }, []);

  return (
    <div className="boxPageCoaching">
      <div className="headerPageCoaching borderCard">
        <div className="h1HeaderPageCoaching bg-ligth borderCard">
          <h1>“La curiosidad y el autoconocimiento te llevara a tu destino”</h1>
        </div>
      </div>

      <h1>Alguna de estas frases te resuenan??</h1>
      <div className="flex pinkColor center w-60 borderCard">
        <ul className="ulHeaderPageCoaching">
          <li>
            <h3 className="">Me siento culpable</h3>
          </li>
          <li>
            <h3 className="">Soy muy vergonzosa</h3>
          </li>
          <li>
            <h3 className="">Tengo miedo al rechazo</h3>
          </li>
          <li>
            <h3 className="">No gestiono mi tristeza</h3>
          </li>
          <li>
            <h3 className="">Me cuesta poner límites</h3>
          </li>
        </ul>
        <ul className="ulHeaderPageCoaching">
          <li>
            <h3 className="">
              Quiero tomar la decisión de cambiar trabajo pero tengo miedo
            </h3>
          </li>
          <li>
            <h3 className="">He sufrido abusos</h3>
          </li>
          <li>
            <h3 className="">Soy muy perfeccionista</h3>
          </li>
          <li>
            <h3 className="">Soy muy indecisa</h3>
          </li>
        </ul>
        <ul className="ulHeaderPageCoaching">
          <li>
            <h3 className="">Relaciones complicadas de pareja</h3>
          </li>
          <li>
            <h3 className="">He perdido la ilusión y quiero recuperarla</h3>
          </li>
          <li>
            <h3 className="">Me asusto fácil y me da mucha ansiedad</h3>
          </li>
          <li>
            <h3 className="">Estoy decepcionada</h3>
          </li>
          <li>
            <h3 className="">Me estoy separando</h3>
          </li>
        </ul>
      </div>

      <div className="flex-column center w-80  padding-20">
        <h1>
          Te expicare que hacemos. Que es el coaching de intervencion
          estrategica y por que puede ayudarte
        </h1>
        <section className="boxDetailsPageCoaching gap-40">
          <div className="textDetails bg-ligth borderCard">
            <h2 className="blackColor">¿ QUE ES EL COACHING ?</h2>
            <p>
              Es un proceso de acompañamiento personal, profesional y
              confidencial en el que se utiliza lo mejor de diferentes
              disciplinas como: Psicología de las Necesidades Humanas, Gestión
              de Conflictos, Coaching, PNL, Terapia de Pareja, hipnosis
              Eriksoniana, etc..
            </p>
          </div>

          <div className="textDetails bg-ligth  borderCard">
            <h2 className="blackColor">¿ PARA QUIEN ES ?</h2>
            <p>
              El coaching emocional es para cualquier persona que tenga una
              necesidad de cambio, que siente insatisfacción, frustración, baja
              autoestima etc... <br />
              <br /> Es una metodología que permite mejorar las relaciones
              contigo mismo y con los demás a través del conocimiento de las
              emociones y su gestión, encaminada a conseguir el bienestar en el
              ámbito emocional, relacional y profesional. <br />
              <br /> El coaching emocional puede ayudar a mejorar la
              autoconciencia, el desarrollo de la empatía, las habilidades de
              comunicación y la autoestima. El camino del coaching emocional
              tiene como objetivo alcanzar un objetivo establecido por el
              cliente. <br />
              <br /> Los beneficios de un viaje de coaching emocional incluyen
              mejorar la autoconciencia, aumentar la motivación, mejorar las
              relaciones interpersonales y el bienestar psicofísico.
            </p>
          </div>

          <div className="textDetails bg-ligth gap-40 borderCard">
            <h2 className="blackColor">
              ¿ QUE ES UNA INTERVENCION ESTRATEGICA ?
            </h2>
            <p>La Intervención Estratégica tiene 3 funciones básicas:</p>{" "}
            <ul className="">
              <li>
                <p>🌸Descubrir y sanar una herida emocional del pasado.</p>{" "}
              </li>
              <li>
                <p>🌸Desbloquear una emoción recurrente.</p>
              </li>
              <li>
                <p>🌸Elevar el potencial de una persona.</p>
              </li>
            </ul>
          </div>
        </section>

        <div className="w-80 flex-column center">
          <p>
            <b>Y si hasta hoy te has preguntado:</b> ¿Por qué la terapia
            tradicional tarda tantas sesiones en dar resultados? ¿Por qué yo no
            puedo avanzar por mucho que lo intento, cuando otros sí? Entonces la
            Intervención Estratégica es para TI.
          </p>
          <br />
          <br />
          <p>
            Teniendo en cuenta que son pocas las personas que salen intactas de
            la niñez. Y que como consecuencia es frecuente grabar un mal sentir,
            que con los años comienza a invadir otras áreas de nuestras vidas, a
            inundarlo todo: trabajo, relaciones, autoestima… Por lo que una
            Intervención Estratégica se convierte en la disciplina que te
            ayudará a desbloquear tu vida.
          </p>
          <br />
          <br />
          <p>
            Llevamos mucho tiempo creyendo que cambiar es difícil , que es
            lento, que no puede hacerlo todo el mundo, que no dura… Por eso
            cuando sentimos que algo nos duele emocionalmente pensamos que nunca
            habrá forma de desahacernos de ese malestar.¡¡ PERO ES MENTIRA !!
            <b>¡¡ PERO ES MENTIRA !!</b>
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="flex-column">
          <img className="imgS" src={imgS1} alt="" />
          <img className="imgS" src={imgS2} alt="" />
        </div>
        <img className="imgDiferences" src={diferences} alt="" />
        <div className="flex-column">
          <img className="imgS" src={imgS3} alt="" />
          <img className="imgS" src={imgS4} alt="" />
        </div>
      </div>

      <h2>"Tu bienestar también mejora la vida de quienes te rodean"</h2>

      <section className="boxDetailsPageCoaching">
        <details
          className="detailsPageCoaching"
          open={isCoachingOpen}
          onClick={toggleIsCoachingOpen}
        >
          <summary className="summaryPageCoaching">
            {<img width="40px" src={iconTime} alt="" />}{" "}
            <h3 className="whiteColor">Sesión de Coaching: </h3>
            {isCoachingOpen ? (
              <img width="20px" src={flechaArriba} alt="" />
            ) : (
              <img width="20px" src={flechaAbajo} alt="" />
            )}
          </summary>
          <div className="textDetails">
            <p>
              La duración de cada sesión estará en torno a 60 minutos, por
              teléfono, video llamada o de forma presencial . La duración de los
              procesos oscilan entre 5 y 15 sesiones, aunque esto es un aspecto
              que dependerá exclusivamente de tí.
            </p>
          </div>
        </details>

        <details
          className="detailsPageCoaching"
          open={isIntervencionOpen}
          onClick={toggleIsIntervencionOpen}
        >
          <summary className="summaryPageCoaching">
            {<img width="40px" src={iconTime2} alt="" />}{" "}
            <h3 className="whiteColor">
              Sesión de Intervenciones Estratégicas:{" "}
            </h3>
            {isIntervencionOpen ? (
              <img width="20px" src={flechaArriba} alt="" />
            ) : (
              <img width="20px" src={flechaAbajo} alt="" />
            )}
          </summary>
          <p>
            es una sola y única sesión. la duración estara en torno de 2 horas
            aproximadamente.
          </p>
        </details>

        <details
          className="detailsPageCoaching"
          open={isComoHaremosOpen}
          onClick={toggleIsComoHaremosOpen}
        >
          <summary className="summaryPageCoaching">
            {<img width="40px" src={iconCheck} alt="" />}{" "}
            <h3 className="whiteColor">¿Cómo lo haremos? </h3>
            {isComoHaremosOpen ? (
              <img width="20px" src={flechaArriba} alt="" />
            ) : (
              <img width="20px" src={flechaAbajo} alt="" />
            )}
          </summary>
          <p>
            En primer lugar tendremos una sesión exploratoria gratuita y sin
            compromiso, de 30 minutos de duración, en la que evaluaremos si esta
            metodología es la mejor opción en tu caso. Nunca te recomendaremos
            comenzar este proceso si no vemos con claridad que te va a aportar
            la solución a tu problema, aunque logicamente los resultados en gran
            medida van a depender de tu nivel de compromiso en el proceso.{" "}
            <br />
            <br /> Al menos 24 horas antes de nuestra sesión exploratoria
            gratuita, habrás de rellenar un cuestionario que te enviaré por
            correo electrónico, con preguntas pensadas estratégicamente, que nos
            darán información importante a las dos, de cara a decidir finalmente
            si es el método más recomendado en tu caso. <br />
            <br /> Si decides comenzar el proceso, tendremos una sesión semanal
            durante un tiempo que varia dependiendo de tu situacion entre una
            sesion sola, pack de 4 sesiones o de 10 sesiones o , en las que de
            forma absolutamente personalizada utilizaremos las técnicas,
            dinámicas, tipo de terapia que mejor y más rápido funcionan para tu
            caso concreto. <br />
            <br /> Las sesiones las podemos realizar por varios canales de
            comunicación, todos iguales de válidos para obtener los mejores
            resultados, tan sólo necesitarás un teléfono, unos auriculares o una
            web cam si prefieres realizarlas por video. Estudios demuestran que
            la eficacia del tratamiento es la misma independientemente del canal
            de comunicación utilizado (teléfono, Skype, presencial), además de
            ser más cómodo para tí por no tener que desplazarte. <br />
            <br /> Sólo necesitas tener el deseo de mejorar, de sentirte feliz,
            con fuerza y energía. De aportar a los demás lo mejor de tí. Si este
            es tu deseo reserva tu sesión exploratoria gratuita aquí
          </p>
        </details>

        <details
          className="detailsPageCoaching"
          open={isPorQueConmigoOpen}
          onClick={toggleIsPorQueConmigoOpen}
        >
          <summary className="summaryPageCoaching">
            {<img width="40px" src={iconRespect} alt="" />}{" "}
            <h3 className="whiteColor">¿Por qué conmigo? </h3>
            {isPorQueConmigoOpen ? (
              <img width="20px" src={flechaArriba} alt="" />
            ) : (
              <img width="20px" src={flechaAbajo} alt="" />
            )}
          </summary>
          <div className="textDetails">
            <p>
              Siempre he tenido en el corazón mi propio bienestar y el de los
              demás, he sufrido durante mucho tiempo, he probado muchas terapias
              con pocos resultados. Cuando encontré la intervención estratégica
              y el coaching mi vida cambió radicalmente, finalmente comencé a
              comprender mucho de mí mismo, experimenté esta práctica tan
              efectiva y rápida que me permitió finalmente una vida plena. Así
              que decidí formarme para ayudar a otras personas a no sufrir
              innecesariamente durante tanto tiempo.
            </p>
          </div>
        </details>
      </section>

      <div>
        <h2>Descripcion del video</h2>
        <iframe
          width="560"
          height="315"
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

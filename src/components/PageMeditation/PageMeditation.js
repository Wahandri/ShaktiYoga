import React from "react";
import "./PageMeditation.css";


export default function PageMeditation() {
  return <div className="boxPageMeditation">

    <header className="borderCard headerMeditation">
      <div className="divHeaderMeditation">
        <h1 className="whiteColor">Medita y Baila</h1>
        <p>
          Las meditaciones activas son prácticas diseñadas para aquellas personas que encuentran difícil o incómodo sentarse en silencio durante largos períodos de tiempo. Estas técnicas combinan movimiento físico, respiración consciente, expresión emocional y eventualmente la quietud mental, proporcionando una forma alternativa de experimentar los beneficios de la meditación.<br/><br/>
          Las meditaciones activas pueden variar en sus enfoques y técnicas, y algunas de las más conocidas fueron desarrolladas por Osho, un maestro espiritual indio.
        </p>
      </div>
    </header>

    <section className="borderCard section1Meditation">
      <div className="flex center">
        <h1>¿Que meditaciones tenemos?</h1>
      </div>

      <div className="boxCardsMeditation">
        <div>
          
          <div className="card2">
            <div className="card2-inner">
              <div className="card2-front text-center bgc-1">
                <h1 className="whiteColor">MEDITACION DINAMICA</h1>
              </div>
              <div className="card2-back">
                Como se mencionó anteriormente, esta meditación implica cinco etapas que combinan respiración rápida, catarsis emocional, saltos enérgicos, quietud y celebración.
              </div>
            </div>
          </div>
        </div>
        <div className="card2 ">
          <div className="card2-inner">
            <div className="card2-front text-center">
              <h1 className="whiteColor">MEDITATION KUNDALINI</h1>
            </div>
            <div className="card2-back">
              Esta técnica implica movimientos rítmicos del cuerpo, respiración, y cánticos o mantras para despertar la energía interna (kundalini) y equilibrar los chakras.
            </div>
          </div>
        </div>
        <div className="card2 ">
          <div className="card2-inner">
            <div className="card2-front text-center">
              <h1 className="whiteColor">MEDITACION NADABRAHMA</h1>
            </div>
            <div className="card2-back">
              Involucra cantar, tanto vocalizando sonidos como tarareando suavemente, junto con movimientos de las manos y la postura corporal, para armonizar la mente y el cuerpo.
            </div>
          </div>
        </div>
        
        <div className="card2 ">
          <div className="card2-inner">
            <div className="card2-front text-center">
              <h1 className="whiteColor">MEDITACION GIBBERRISH</h1>
            </div>
            <div className="card2-back">
            Esta práctica implica hablar incoherentemente, dejando fluir cualquier sonido sin sentido durante un período de tiempo determinado, seguido por un momento de silencio y observación de la mente.
            </div>
          </div>
        </div>
        
        <div className="card2 ">
          <div className="card2-inner">
            <div className="card2-front text-center">
              <h1 className="whiteColor">MEDITACION SONIDOS DEL CHAKRA</h1>
            </div>
            <div className="card2-back">
              Se concentra en los diferentes chakras (centros de energía) del cuerpo emitiendo sonidos vocales asociados con cada chakra para equilibrar y purificar la energía.
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section2Meditation">
      <div className="borderCard media1000 bg-purple whiteColor padding-20">
        <p>
          Estas meditaciones activas están diseñadas para ayudar a las personas a liberar tensiones físicas y mentales, a desbloquear emociones reprimidas, y a alcanzar estados de mayor conciencia y claridad mental. Cada una tiene sus propias técnicas y objetivos específicos, pero en general, todas buscan un equilibrio entre la actividad física, la conciencia respiratoria y la quietud mental. <br/><br/>
          Es importante practicar estas técnicas con la debida orientación y comprensión de sus principios para obtener los máximos beneficios.
        </p>
      </div>

      <div className="lastCardMeditation">
        <div className="widthCard4 boxShadow br-15 padding-10">
          <p>
            La danza aporta grandes beneficios no solo en los aspectos más directos a nivel físico o psicológico, sino que además actúa sobre planos más sutiles, equilibrando y aportando un profundo bienestar interior.<br/>
            La Danza nos permite liberarnos de tensiones estancadas, buscar nuestro verdadero ser y disfrutar de nuestro día a día de una forma abundante y próspera.<br/>
            Trabajaremos con el movimiento, sumando la expresión, liberando las energías bloqueadas y las emociones contenidas en nuestro propio cuerpo.<br/>
            Utilizando el poder del movimiento, liberarás bloqueos sobre diferentes aspectos: financieros, emocionales y sentimentales, creando un sentimiento de seguridad, confianza, amor y abundancia.
          </p>
        </div>

        <div className="widthCard4 boxShadow br-15 padding-10">
          <p>
            En esta terapia de sanación, el movimiento improvisado se convierte en un maravilloso arte, trabajando sobre nuestro cuerpo orgánico y nuestro cuerpo emocional.<br/>
            Danzando, generaremos una liberación energética, que nos permitirá equilibrar las emociones, pensamientos y sensaciones, pero también nuestro cuerpo físico.<br/>
            Además de liberar tus miedos, bloqueos mentales y emocionales que te impiden conseguir tus objetivos, aumentarás tu autoestima, sintiéndote más fuerte y bella, dándote la seguridad que te empuja a realizar tus sueños.
          </p>
        </div>
      </div>
    </section>

  </div>;
}

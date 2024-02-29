import React, { useRef, useEffect } from 'react';
import './Reviews.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import stars from '../../images/clasificacion.png';
import flechaR from '../../images/flechaR.png';
import flechaL from '../../images/flechaL.png';



export default function Reviews() {
  const reviews = [
    {
      name: "Monica",
      review: '- Probé con ella la intervención y el coaching y Debo decir que aunque nuestro camino fue corto   encontré una  persona profesional ,una persona que sabe escuchar, una persona que no juzga. , una persona atenta y realmente me sentí cómoda, es una guía y una ayuda, realmente me bastaron dos reuniones para encontrar más fuerzas en mí para enfrentar el problema que estaba enfrentando, así que solo puedo decir que es una persona en quien podemos confiar con calma y paz.'
    },
    {
      name: "Irene. Psicologa",
      review: "- A Simona la encontré muy bien formada, muy atenta, puntual. Me guiaste con precisión y habilidad en temas que son mis temas y fue muy útil, puntual, relevante. Este encuentro me resultó útil y me gustaría tener otros también precisamente porque no lo encontré obvio ni banal. Los recomiendo mucho."
    },
    {
      name: "Marisol",
      review: "- Un millón de gracias Simona, Quiero avanzar, y me siento fuerte gracias a ti. Lucho por mi, me has abierto la mente. Lo agradezco mucho, me has ayudado mucho y seguiré avanzando. De verdad, gracias y que vales mucho Simona."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    prevArrow: <img src={flechaL} alt="Anterior" className=" slick-prev" />, // Flecha anterior personalizada
    nextArrow: <img src={flechaR} alt="Siguiente" className=" slick-next" />
  };

  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 10000); // Cambia el intervalo

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex-column w-100 center gap-20'>
      <h2 className='titleReviews'>Opiniones de Clientes</h2>
        <Slider className='boxCardReviews borderCard br-50' ref={sliderRef} {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="">
              <div className='flex-column w-50 center'>
                <h3>{review.name}</h3>
                <p>{review.review}</p>
                <img src={stars} alt="icon" />
              </div>
            </div>
          ))}
        </Slider>
    </div>

  );
}

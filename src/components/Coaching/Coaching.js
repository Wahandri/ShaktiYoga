import React from 'react';
import "./Coaching.css";
import imgPositive from "../../images/positive.jpg";
import imgTeam from "../../images/emocionalcoaching.jpg";
import { Link } from 'react-router-dom';

export default function Coaching() {
  return (
    <div className='boxCoaching flex column center'>
        <h1 className='title'><span class="blueColor">Coaching</span> Personalizado</h1>

        {/* Sección 1: Intervención Emocional */}
        <div className='coaching1 flex shadowLight responsiveCoaching'>
            <div className='boxCoachingImg'>
                <img className='imgCoaching margin' src={imgPositive} alt='Intervención Emocional' />
            </div>
            <div className='descriptionCoaching'>
                <h1 className='titleSmall'>Intervención Emocional Estratégica</h1>
                <p>
                    Descubre conmigo, <span className='blueColor'>Simona Zappoli</span>, la eficacia de la intervención emocional estratégica. Este proceso te guiará desde tu presente hacia tu pasado, desbloqueando emociones y traumas que pueden estar impidiéndote avanzar. A través de este método eficaz y corto, aprenderás a gestionar tu vida con nuevas herramientas, liberándote de ataduras para siempre.
                </p>
            </div>
        </div>

        {/* Sección 2: Coaching */}
        <div className='coaching2 flex paddingTop shadowLight responsiveCoaching revers'>
            <div className='descriptionCoaching'>
                <h1 className='titleSmall'>Coaching Emocional: Crea tu Futuro Brillante</h1>
                <p>
                    Sumérgete conmigo en el proceso de Coaching Emocional. Desde tu presente hacia tu futuro, exploraremos juntos la creación de una vida llena y brillante. Este enfoque te permitirá encontrar tu potencial y convertirte en el dueño de tu vida. Los procesos son eficaces, cortos y no te hacen dependiente del Coach, permitiéndote aprender a gestionar tu vida con nuevas herramientas. ¡Deja que el Coaching Emocional sea tu guía hacia una vida plena y satisfactoria!
                </p>
            </div>
            <div className='boxCoachingImg'>
                <img className='imgCoaching margin' src={imgTeam} alt='Coaching Emocional' />
            </div>
        </div>
        <Link to='/coaching'>
            <button className='btn'>Saber mas</button>
        </Link> 
    </div>
  );
}

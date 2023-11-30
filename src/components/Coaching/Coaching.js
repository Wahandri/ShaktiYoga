import React from 'react';
import "./Coaching.css";
import imgCoaching from "../../images/emocionalcoaching.jpg";
import imgPositive from "../../images/positive.jpg";
import imgTeam from "../../images/Team.jpg";

export default function Coaching() {
  return (
    <div className='boxCoaching flex column center'>
        {/* Sección 1 */}
        <h1 className='title'><span className='blueColor'>Coaching</span> Personal</h1>
        <div className='flex shadowLight'>
            <div className='boxCoachingImg'>
                <img className='imgCoaching margin' src={imgPositive} alt='Coaching Emocional' />
            </div>
            <div className='descriptionCoaching margin'>
                <h1 className='titleSmall'>Explora tus Emociones</h1>
                <p>
                    Descubre conmigo, <span className='blueColor'>Simona Zappoli</span>, el poder transformador de nuestro enfoque. Celebremos juntos las emociones como guías hacia una vida plena. Guiados por mi experiencia, fusionamos espiritualidad con prácticas que te ayudarán a alcanzar una vida más plena. ¡Permite que la esencia de tus emociones te guíe hacia significado y satisfacción!
                </p>
            </div>
        </div>

        {/* Sección 2 */}
        <div className='flex paddingTop'>
            <div className='descriptionCoaching margin'>
                <h1 className='titleSmall'>Encuentra Equilibrio Interior</h1>
                <p>
                    Nos sumergiremos en un viaje de exploración interior, de esta manera aprenderás cómo encontrar paz interior. Esta es <span className='blueColor'>clave para una vida plena</span>. Juntos, desentrañaremos capas emocionales. ¡Deja que tu interior florezca y experimenta una conexión más profunda contigo mismo!
                </p>
            </div>
            <div className='boxCoachingImg'>
                <img className='imgCoaching margin' src={imgCoaching} alt='Coaching Emocional' />
            </div>
        </div>

        {/* Sección 3 */}
        <div className='flex paddingTop shadowLight'>
            <div className='boxCoachingImg'>
                <img className='imgCoaching margin' src={imgTeam} alt='Coaching Emocional' />
            </div>
            <div className='descriptionCoaching margin'>
                <h1 className='titleSmall'>Cultiva Relaciones Conscientes</h1>
                <p>
                    Enfocate en relaciones conscientes a través de nuestro <span className='blueColor'>Coaching Emocional</span>. Descubre cómo la comprensión emocional, guiada por mí, fortalece tus conexiones. Experimenta el poder transformador para una vida más rica. ¡Deja que el Coaching Emocional sea tu guía hacia relaciones más satisfactorias!
                </p>
            </div>
        </div>
    </div>
  );
}

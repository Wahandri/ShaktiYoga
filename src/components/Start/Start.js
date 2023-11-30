import React from 'react'
import "./Start.css"
import Coaching from '../Coaching/Coaching'
import Meditation from '../Meditation/Meditation'
import logoShakti from "../../images/shakti.png"

export default function Start() {
  return (
    <div className='flex column center'>
        <div className='startHeader'>
            <img className='logoShakti' src={logoShakti} alt=""/>
            <div className='margin'>
                <div className='flex center'>
                    <h1 className='title'>Bienvenido a <span className='pinkColor'>Shakti</span></h1>
                </div>
                <p>
                    Descubre el poder transformador de tus emociones con nuestro <span className='pinkColor'>coaching personalizado</span>.<br/> 
                    En <span className='pinkColor'>Shakti</span>, te acompañamos en un viaje hacia la autenticidad y el bienestar emocional.<br/> 
                    Encuentra claridad, supera desafíos y construye relaciones más significativas contigo mismo y con los demás.
                </p>
            </div>
        </div>
        <Coaching />
        <Meditation />
    </div>
  )
}

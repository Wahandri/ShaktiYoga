import React from 'react'
import "./Header.css"
import logoShakti from "../../images/shaktiSmall.png"
import instagram from "../../images/instagram.png"
import facebook from "../../images/facebook.png"

export default function Header() {
  return (
    <div className='boxHeader'>
        <div className='imgLogo'><img width="90px" src={logoShakti} alt=''/></div>
        <div className='navBar'>
          <div className='ruteNavBar center flex'>Coaching</div>
          <div className='ruteNavBar center flex'>Meditacion</div>
          <div className='ruteNavBar center flex'>Masajes</div>
          <div className='ruteNavBar center flex'>Yoga</div>
          <div className='ruteNavBar center flex'>Nutricion</div>
          <div className='ruteNavBar center flex'>Contáctanos</div>
        </div>
        <div className='socialNetworkIcons'>
          <a href="https://www.google.es" target="_blank" rel="noopener noreferrer">
            <img className='iconSocial' src={instagram} alt=""/>
          </a>
          <img className='iconSocial' src={facebook} alt=""/>
        </div>
    </div>
  )
}

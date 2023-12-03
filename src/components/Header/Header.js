import React from 'react'
import "./Header.css"
import logoShakti from "../../images/shaktiSmall.png"
import instagram from "../../images/instagram.png"
import facebook from "../../images/facebook.png"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='boxHeader'>
        <div className='imgLogo'><img width="90px" src={logoShakti} alt=''/></div>
        <div className='navBar'>
          <Link className='ruteNavBar' to="/coaching">coach</Link>
          <p className='ruteNavBar center flex'>Coaching</p>
          <p className='ruteNavBar center flex'>Meditacion</p>
          <p className='ruteNavBar center flex'>Masajes</p>
          <p className='ruteNavBar center flex'>Yoga</p>
          <p className='ruteNavBar center flex'>Nutricion</p>
          <p className='ruteNavBar center flex'>Contáctanos</p>

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

import React from 'react'
import "./Header.css"
import logoShakti from "../../images/shaktiSmall.png"
import instagram from "../../images/instagram.png"
import facebook from "../../images/facebook.png"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='boxHeader'>
        <Link to="/" className='imgLogo'><img width="90px" src={logoShakti} alt=''/></Link>
        <div className='navBar'>
          <Link className='ruteNavBar flex center' to="/coaching">Coaching</Link>
          <Link className='ruteNavBar flex center' to="/meditation">Meditacion</Link>
          <Link className='ruteNavBar flex center' to="/massage">Masajes</Link>
          <Link className='ruteNavBar flex center' to="/yoga">Yoga</Link>
          <Link className='ruteNavBar flex center' to="/nutrition">Nutricion</Link>
          <Link className='ruteNavBar flex center' to="/contact">Contáctanos</Link>

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

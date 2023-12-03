import React from 'react'
import "./Massage.css"
import massage from "../../images/Masaje.png"
import { Link } from 'react-router-dom'

export default function Massage() {
  return (
    <div className='boxMassage flex column center'>
        <h1 className='title'>Masajes</h1>
        <div className='descriptionMassage flex center'>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nunc eget est consequat sagittis nec quis diam. Phasellus ultricies condimentum massa, eget semper libero pellentesque dapibus. Nam porta, nibh in vulputate mattis, urna est commodo massa, blandit feugiat lorem mi a lectus. Maecenas in sem eu dolor vehicula pharetra.
          </p>
          <img className='imgMassage borderRadius imgCoaching' src={massage} alt=''/>
        </div>
        <Link to='/massage'>
            <button className='btn'>Saber mas</button>
        </Link>
        
    </div>
  )
}

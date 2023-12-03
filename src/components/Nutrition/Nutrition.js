import React from 'react'
import "./Nutrition.css"
import nutrition from "../../images/nutricion.jpg"
import { Link } from 'react-router-dom'

export default function Nutrition() {
  return (
    <div className='boxNutrition flex column center'>
        <h1 className='title'>Nutricion</h1>
        <div className='descriptionNutrition flex center'>
          <img className='imgNutrition borderRadius imgCoaching' src={nutrition} alt=''/>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nunc eget est consequat sagittis nec quis diam. Phasellus ultricies condimentum massa, eget semper libero pellentesque dapibus. Nam porta, nibh in vulputate mattis, urna est commodo massa, blandit feugiat lorem mi a lectus. Maecenas in sem eu dolor vehicula pharetra. Nam luctus dictum metus, quis facilisis erat. Quisque sapien enim, congue id eros dignissim, tempus rutrum lorem. Aenean malesuada, nunc mollis sagittis tempor, quam ante condimentum sapien, non fringilla ex sapien in lectus. In viverra nunc velit, id mattis eros feugiat vel.
          </p>
        </div>
        <Link to='/nutrition'>
            <button className='btn'>Saber mas</button>
        </Link>
    </div>
  )
}

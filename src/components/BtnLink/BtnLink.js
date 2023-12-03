import React from 'react'
import { Link } from 'react-router-dom'
import "./BtnLink.css"

export default function BtnLink({LinkTo, BtnText, Class}) {
  return (
    <Link className={Class} to={LinkTo}>{BtnText}</Link>
  )
}

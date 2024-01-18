import React from "react";
import "./CardDefinition.css";
import { Link } from "react-router-dom";

export default function CardDefinition({
  img,
  title,
  description,
  description2,
  url,
}) {
  return (
    <div className="bodyCardDefinition">
      <div className="cardDescription">
        <img className="imgCardDefinition borderCard" src={img} alt="" />
        <div className="borderCard padding-20">
          <h2>{title}</h2>
          <p>{description}</p>
          <p>{description2}</p>
          <Link to={url} className="myBtn btnCardDefinition">
            Ver mas
          </Link>
        </div>
      </div>
    </div>
  );
}

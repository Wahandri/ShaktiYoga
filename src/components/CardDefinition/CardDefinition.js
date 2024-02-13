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
  const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "auto 100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="boxCardDefinition">
      <div className="cardContainer">
        <img
          className="imgCardDefinition borderCard"
          src={img}
          alt={title}
          style={backgroundStyle}
        />
        <div className="borderCard br-50 cardDescription">
          <h2>{title}</h2>
          {description}
          {description2}
          <Link to={url} className="myBtn btnCardDefinition">
            Ver mas
          </Link>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./MiniCard.css";

export default function MiniCard({ title, description }) {
  return (
    <div className="borderCard widthMiniCard">
      <h1>{title}</h1>
      <div className="pMiniCard">
        <p >{description}</p>
      </div>
    </div>
  );
}

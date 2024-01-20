import React from "react";
import "./MiniCard.css";

export default function MiniCard({ title, description }) {
  return (
    <div className="borderCard widthMiniCard padding-20">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

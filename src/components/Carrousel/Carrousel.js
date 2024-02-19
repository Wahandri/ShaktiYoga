import React from "react";
import "./Carrousel.css";

export default function Carrousel({img1, img2, img3, img4, img5}) {
  return (
    <div class="carrousel">
      <ul>
        <li>
          <img className="br-50" src={img1} alt="1" />
        </li>
        <li>
          <img className="br-50" src={img3} alt="2" />
        </li>
        <li>
          <img className="br-50" src={img5} alt="3" />
        </li>
        <li>
          <img className="br-50" src={img4} alt="4" />
        </li>
        <li>
          <img className="br-50" src={img2} alt="5" />
        </li>
      </ul>
    </div>
  );
}

import React from "react";
import "./Carrousel.css";
import img1 from "../../images/imgMassage1.jpeg";
import img2 from "../../images/imgMassage2.jpeg";
import img3 from "../../images/imgMassage3.jpeg";
import img4 from "../../images/imgMassage4.png";
import img5 from "../../images/imgMassage5.jpg";

export default function Carrousel() {
  return (
    <>
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
    </>
  );
}

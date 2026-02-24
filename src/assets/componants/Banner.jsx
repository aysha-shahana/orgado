import React from "react";
import "../style/banner.css";
import veg from "../img/banner.webp";
import leaf from "../img/leaf.webp";

function Banner() {
  return (
    <>
      <div id="bg">
        <div className="bnnrbg">
          <div>
            <img className="leaf" src={leaf} alt="leaf-img" />
            <h1 className="h-text">
              Organic <br /> Fresh Food
            </h1>
            <h6 id="h6">
              Discover organic, sustainable food from our organic farm and{" "}
              <br />
              fresh vegetable, and food
            </h6>

            <button id="btn">Shop Now</button>
          </div>

          <div>
            <img className="vegimg" src={veg} alt="veg img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;

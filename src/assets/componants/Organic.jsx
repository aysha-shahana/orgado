import React from "react";
import "../style/organic.css";

function Organic() {
  return (
    <div className="allcards">
      <div className="cards" id="chicken-img">
        <h5>Organic</h5>
        <h3>Meat & Milk</h3>
        <p>Premium quality meat & milk</p>
        <button className="shop-btn" type="button">
          Shop Now
        </button>
      </div>

      <div className="cards" id="veg-img">
        <h5>Organic</h5>
        <h3>Vegetable</h3>
        <p>Premium quality meat & milk</p>
        <button className="shop-btn" type="button">
          Shop Now
        </button>
      </div>

      <div className="cards" id="fruit-img">
        <h5>Organic</h5>
        <h3>Food and Fruits</h3>
        <p>Premium quality meat & milk</p>
        <button className="shop-btn" type="button">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Organic;

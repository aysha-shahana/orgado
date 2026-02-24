import React from "react";
import "../style/aboutus.css";

function Aboutus() {
  return (
    <div className="bg-clr">
      <div className="abtacc">
        <div className="text">About Us</div>
        <div className="text">My Account</div>
      </div>
      <div className="slctdsply">
        <select className="slct">
          <option className="optn" value="English">English</option>
          <option className="optn" value="Hindi">Hindi</option>
          <option className="optn" value="Arabic">Arabic</option>
          <option className="optn" value="Bengali">Bengali</option>
          <option className="optn" value="French">French</option>
        </select>
        <select className="slct">
          <option className="optn" value="USD">USD</option>
          <option className="optn" value="Eur">EUR</option>
          <option className="optn" value="Jpy">JPY</option>
          <option className="optn" value="Gbp">GBP</option>
        </select>
      </div>
    </div>
  );
}

export default Aboutus;
import React from 'react'
import "../style/brand.css";
import brand1 from "../img/brand 1.webp";
import brand2 from "../img/brand 2.webp";
import brand3 from  "../img/brand 3.webp";
import brand4 from "../img/brand 4.webp";
import brand5 from "../img/brand 5.webp";
import brand6 from "../img/brand 6.webp";
import Slider from 'react-slick';
 
function Brands(){
const settings={

  infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 0,
    cssEase: "linear"
};
 
  return (
    <div className=' brand' >
      <Slider {...settings}>
     <div> <img src={brand1} alt="Brand1" /></div>
     <div> <img src={brand2} alt="Brand2" /></div>
     <div> <img src={brand3} alt="Brand3" /></div>
     <div> <img src={brand4} alt="Brand4" /></div>
     <div> <img src={brand5} alt="Brand5" /></div>
     <div> <img src={brand6} alt="Brand6" /></div>
     <div> <img src={brand2} alt="Brand2" /></div>
     <div> <img src={brand3} alt="Brand3" /></div>
     <div> <img src={brand4} alt="Brand4" /></div>
     <div> <img src={brand1} alt="Brand1" /></div>
     <div> <img src={brand2} alt="Brand2" /></div>
    
      </Slider>
 
    </div>
  )
}
 
export default Brands
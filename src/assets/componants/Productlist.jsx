import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "../style/productlist.css";
import ProductModal from "../componants/ProductModal";
import { products, freshImgData } from "../../data/productlist";
import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";

function Productlist() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="dsply">
        <h2>
          <b>You May Missed</b>
        </h2>

        <ul className="dsply-1">
          <li className="viewall active">View All</li>
          <li className="viewall">New Arrival</li>
          <li className="viewall">Best Sale</li>
          <li className="viewall">Trending</li>
        </ul>

        <div className="arrow-box">
          <button onClick={() => sliderRef.current?.slickPrev()}>◀</button>

          <button onClick={() => sliderRef.current?.slickNext()}>▶</button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="dis-items">
        {/* LEFT BANNER */}
        <div
          className="fresh-img"
          style={{ backgroundImage: `url(${freshImgData})` }}
        >
          <h5>Organic</h5>
          <h3>Fresh Masala</h3>
        </div>

        {/* SLIDER */}
        <Slider ref={sliderRef} {...settings}>
          {products.map((product) => (
            <div className="main-products" key={product.id}>
              <span className="badge">new</span>

              <div className="image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="watch-img"
                />

                <div className="hover-icons">
                  <div className="icon-circle">
                    <FaShoppingCart />
                  </div>

                  <div className="icon-circle">
                    <FaEye onClick={() => setSelectedProduct(product)} />
                  </div>

                  <div className="icon-circle">
                    <FaHeart />
                  </div>
                </div>
              </div>
              <h5>{product.name}</h5>
              <h6>{product.price}</h6>
              <div className="stars">★★★★★</div>
            </div>
          ))}
        </Slider>
      </div>

      {/* ✅ MODAL OUTSIDE SLIDER */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          closeModal={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}

export default Productlist;
